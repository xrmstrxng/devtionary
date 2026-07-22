import Link from "next/link";
import type { ReactNode } from "react";
import type { GlossaryTerm } from "./model";
import type { Locale } from "@/i18n/config";

type Reference = {
  exactCaseOnly: boolean;
  term: GlossaryTerm;
  variant: string;
};

type ReferenceIndex = {
  byVariant: Map<string, Reference>;
  pattern: RegExp | null;
};

const ambiguousSingleWords = new Set([
  "application",
  "body",
  "data",
  "delivery",
  "effort",
  "feature",
  "feedback",
  "image",
  "impact",
  "issue",
  "planning",
  "product",
  "report",
  "review",
  "risk",
  "role",
  "scope",
  "service",
  "state",
  "task",
]);

const indexCache = new WeakMap<
  GlossaryTerm[],
  Partial<Record<Locale, ReferenceIndex>>
>();

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function createReferenceIndex(terms: GlossaryTerm[], locale: Locale) {
  const candidates = new Map<string, Reference | null>();
  const canonicalVariants = new Set(
    terms.map((term) => term.term.trim().toLocaleLowerCase(locale)),
  );

  const addCandidate = (
    rawVariant: string | undefined,
    term: GlossaryTerm,
    canonical: boolean,
  ) => {
    const variant = rawVariant?.trim();
    if (!variant || variant.length < 2) return;
    const key = variant.toLocaleLowerCase(locale);
    const canonicalKey = term.term.trim().toLocaleLowerCase(locale);
    const ambiguousTerm = ambiguousSingleWords.has(canonicalKey);
    if (!canonical && ambiguousTerm) return;
    if (!canonical && variant.length <= 3 && variant !== variant.toUpperCase())
      return;
    if (!canonical && canonicalVariants.has(key)) return;
    const existing = candidates.get(key);
    if (existing && existing.term.slug !== term.slug) {
      candidates.set(key, null);
      return;
    }
    if (existing === null) return;
    candidates.set(key, {
      term,
      variant,
      exactCaseOnly:
        /^[A-Z0-9][A-Z0-9/.-]{1,7}$/.test(variant) ||
        ambiguousTerm ||
        (!variant.includes(" ") && ambiguousSingleWords.has(key)),
    });
  };

  for (const term of terms) addCandidate(term.term, term, true);

  for (const term of terms) {
    const variants = [
      term.abbreviation,
      ...term.aliases,
      ...(term.localizedContent[locale].searchableAliases ?? []),
    ];

    for (const variant of variants) addCandidate(variant, term, false);
  }

  const byVariant = new Map(
    [...candidates.entries()].filter(
      (entry): entry is [string, Reference] => entry[1] !== null,
    ),
  );
  const alternatives = [...byVariant.values()]
    .map(({ variant }) => variant)
    .sort((left, right) => right.length - left.length)
    .map(escapeRegExp);

  return {
    byVariant,
    pattern: alternatives.length
      ? new RegExp(
          `(?<![\\p{L}\\p{N}])(${alternatives.join("|")})(?![\\p{L}\\p{N}])`,
          "giu",
        )
      : null,
  } satisfies ReferenceIndex;
}

function referenceIndexFor(terms: GlossaryTerm[], locale: Locale) {
  const cached = indexCache.get(terms) ?? {};
  const index = cached[locale] ?? createReferenceIndex(terms, locale);
  cached[locale] = index;
  indexCache.set(terms, cached);
  return index;
}

export function TermReferenceText({
  currentSlug,
  locale,
  terms,
  text,
}: {
  currentSlug: string;
  locale: Locale;
  terms: GlossaryTerm[];
  text: string;
}) {
  const { byVariant, pattern } = referenceIndexFor(terms, locale);
  if (!pattern || !text) return text;

  pattern.lastIndex = 0;
  const matches = [...text.matchAll(pattern)];
  if (!matches.length) return text;

  const output: ReactNode[] = [];
  let cursor = 0;
  for (const [index, match] of matches.entries()) {
    const start = match.index ?? 0;
    const value = match[0];
    const reference = byVariant.get(value.toLocaleLowerCase(locale));
    output.push(text.slice(cursor, start));
    if (
      !reference ||
      reference.term.slug === currentSlug ||
      (reference.exactCaseOnly && reference.variant !== value)
    )
      output.push(value);
    else
      output.push(
        <Link
          className="term-reference-link"
          href={`/${locale}/glossary/${reference.term.slug}`}
          key={`${reference.term.slug}-${start}-${index}`}
          title={reference.term.localizedContent[locale].shortDefinition}
        >
          {value}
        </Link>,
      );
    cursor = start + value.length;
  }
  output.push(text.slice(cursor));
  return output;
}
