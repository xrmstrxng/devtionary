import type { GlossaryTerm } from "@/entities/glossary-term/model";

const ignoredNameTokens = new Set([
  "a",
  "an",
  "and",
  "as",
  "for",
  "in",
  "of",
  "on",
  "the",
  "to",
]);

function nameTokens(term: GlossaryTerm) {
  return new Set(
    term.slug
      .split("-")
      .filter((token) => token.length > 1 && !ignoredNameTokens.has(token)),
  );
}

const ignoredMentionTokens = new Set([
  "application",
  "data",
  "delivery",
  "product",
  "service",
  "software",
  "system",
  "team",
  "technical",
  "work",
]);

function editorialWords(term: GlossaryTerm) {
  const text = Object.values(term.localizedContent)
    .flatMap((content) => [
      content.shortDefinition,
      content.fullDefinition,
      content.professionalContext,
      content.purpose,
      content.whenToUse,
      content.practicalExample?.context,
      content.practicalExample?.application,
      content.professionalPhrase,
      content.commonConfusions,
      ...content.examples,
    ])
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase("en");
  return new Set(text.match(/[a-z0-9]+/g) ?? []);
}

/**
 * Completes the hand-curated relationships without replacing them. Explicit and
 * reverse relationships rank first; textual references and neighboring concepts
 * from the same catalog area provide a deterministic fallback.
 */
export function enrichRelatedTerms(
  terms: GlossaryTerm[],
  minimumRelations = 4,
): GlossaryTerm[] {
  const bySlug = new Map(terms.map((term) => [term.slug, term]));
  const position = new Map(terms.map((term, index) => [term.slug, index]));
  const reverseRelations = new Map<string, Set<string>>();

  for (const term of terms)
    for (const relatedSlug of term.relatedTerms) {
      if (!bySlug.has(relatedSlug) || relatedSlug === term.slug) continue;
      const reverse = reverseRelations.get(relatedSlug) ?? new Set<string>();
      reverse.add(term.slug);
      reverseRelations.set(relatedSlug, reverse);
    }

  const words = new Map(terms.map((term) => [term.slug, editorialWords(term)]));
  const tokens = new Map(terms.map((term) => [term.slug, nameTokens(term)]));
  const termsByToken = new Map<string, Set<string>>();
  const termsByPrimaryCategory = new Map<string, GlossaryTerm[]>();
  for (const term of terms) {
    for (const token of tokens.get(term.slug) ?? []) {
      const matches = termsByToken.get(token) ?? new Set<string>();
      matches.add(term.slug);
      termsByToken.set(token, matches);
    }
    const categoryTerms = termsByPrimaryCategory.get(term.categories[0]) ?? [];
    categoryTerms.push(term);
    termsByPrimaryCategory.set(term.categories[0], categoryTerms);
  }

  return terms.map((term) => {
    const explicit = term.relatedTerms.filter(
      (slug) => bySlug.has(slug) && slug !== term.slug,
    );
    const explicitOrder = new Map(explicit.map((slug, index) => [slug, index]));
    const reverse = reverseRelations.get(term.slug) ?? new Set<string>();
    const sourceTokens = tokens.get(term.slug) ?? new Set<string>();
    const sourcePosition = position.get(term.slug) ?? 0;
    const sourceWords = words.get(term.slug) ?? new Set<string>();
    const candidateSlugs = new Set([...explicit, ...reverse]);

    for (const token of sourceTokens)
      for (const slug of termsByToken.get(token) ?? [])
        candidateSlugs.add(slug);

    for (const word of sourceWords) {
      if (ignoredMentionTokens.has(word)) continue;
      for (const slug of termsByToken.get(word) ?? []) candidateSlugs.add(slug);
    }

    const categoryTerms = termsByPrimaryCategory.get(term.categories[0]) ?? [];
    const categoryPosition = categoryTerms.findIndex(
      (candidate) => candidate.slug === term.slug,
    );
    for (let distance = 1; distance <= 8; distance += 1) {
      const before = categoryTerms[categoryPosition - distance];
      const after = categoryTerms[categoryPosition + distance];
      if (before) candidateSlugs.add(before.slug);
      if (after) candidateSlugs.add(after.slug);
    }
    candidateSlugs.delete(term.slug);

    const ranked = [...candidateSlugs]
      .map((slug) => bySlug.get(slug))
      .filter((candidate): candidate is GlossaryTerm => candidate !== undefined)
      .map((candidate) => {
        let score = 0;
        const directIndex = explicitOrder.get(candidate.slug);
        if (directIndex !== undefined) score += 10_000 - directIndex;
        if (reverse.has(candidate.slug)) score += 8_000;
        const candidateTokens = tokens.get(candidate.slug) ?? new Set<string>();
        const candidateIsMentioned =
          candidateTokens.size > 1 &&
          [...candidateTokens].every((token) => sourceWords.has(token)) &&
          [...candidateTokens].some(
            (token) => !ignoredMentionTokens.has(token),
          );
        if (candidateIsMentioned) score += 350;

        const sharedNameTokens = [...sourceTokens].filter((token) =>
          candidateTokens.has(token),
        ).length;

        const sharedCategories = term.categories.filter((category) =>
          candidate.categories.includes(category),
        ).length;
        score += sharedNameTokens * (sharedCategories > 0 ? 900 : 40);
        const distance = Math.abs(
          sourcePosition - (position.get(candidate.slug) ?? sourcePosition),
        );
        score += sharedCategories * 180;
        if (term.categories[0] === candidate.categories[0])
          score += 280 + Math.max(0, 160 - distance * 8);
        if (term.type === candidate.type) score += 25;

        return { candidate, distance, score };
      })
      .filter(({ score }) => score > 0)
      .sort(
        (left, right) =>
          right.score - left.score ||
          left.distance - right.distance ||
          left.candidate.term.localeCompare(right.candidate.term, "en"),
      );

    if (ranked.length < minimumRelations)
      for (const candidate of categoryTerms) {
        if (
          candidate.slug !== term.slug &&
          !ranked.some((item) => item.candidate.slug === candidate.slug)
        )
          ranked.push({
            candidate,
            distance: Math.abs(
              sourcePosition - (position.get(candidate.slug) ?? sourcePosition),
            ),
            score: 1,
          });
        if (ranked.length >= minimumRelations) break;
      }

    const relatedTerms = [
      ...new Set([
        ...explicit,
        ...ranked.map(({ candidate }) => candidate.slug),
      ]),
    ].slice(0, Math.max(minimumRelations, explicit.length));

    return { ...term, relatedTerms };
  });
}
