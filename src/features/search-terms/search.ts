import type {
  GlossaryTerm,
  ExperienceLevel,
  TermType,
} from "@/entities/glossary-term/model";
import type { Locale } from "@/i18n/config";
import { categories } from "@/content/categories";

export type GlossaryFilters = {
  query: string;
  category: string;
  level: string;
  type: string;
  letter: string;
};
export const emptyFilters: GlossaryFilters = {
  query: "",
  category: "",
  level: "",
  type: "",
  letter: "",
};

export function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}
export function parseFilters(params: URLSearchParams): GlossaryFilters {
  return {
    query: params.get("query") ?? "",
    category: params.get("category") ?? "",
    level: params.get("level") ?? "",
    type: params.get("type") ?? "",
    letter: params.get("letter") ?? "",
  };
}

function categoryNamesFor(term: GlossaryTerm, locale: Locale) {
  return term.categories.flatMap((slug) => {
    const category = categories.find((item) => item.slug === slug);
    return category ? [category.name[locale]] : [];
  });
}

export function createCompactTermSearchIndex(
  term: GlossaryTerm,
  locale: Locale,
  termsBySlug: ReadonlyMap<string, string>,
) {
  const content = term.localizedContent[locale];
  return normalizeSearch(
    [
      term.term,
      term.abbreviation,
      ...term.aliases,
      ...(content.searchableAliases ?? []),
      content.shortDefinition,
      ...term.relatedTerms.map(
        (related) => termsBySlug.get(related) ?? related,
      ),
      ...categoryNamesFor(term, locale),
    ]
      .filter(Boolean)
      .join(" "),
  );
}

export function filterTerms(
  terms: GlossaryTerm[],
  locale: Locale,
  filters: GlossaryFilters,
) {
  const query = normalizeSearch(filters.query);
  const termsBySlug = new Map(terms.map((term) => [term.slug, term.term]));
  return terms
    .filter((term) => {
      const content = term.localizedContent[locale];
      const haystack = normalizeSearch(
        [
          term.term,
          term.abbreviation,
          ...term.aliases,
          ...(content.searchableAliases ?? []),
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
          ...term.relatedTerms.map(
            (related) => termsBySlug.get(related) ?? related,
          ),
          ...categoryNamesFor(term, locale),
        ]
          .filter(Boolean)
          .join(" "),
      );
      return (
        (!query || haystack.includes(query)) &&
        (!filters.category || term.categories.includes(filters.category)) &&
        (!filters.level || term.level === (filters.level as ExperienceLevel)) &&
        (!filters.type || term.type === (filters.type as TermType)) &&
        (!filters.letter ||
          normalizeSearch(term.term).startsWith(
            normalizeSearch(filters.letter),
          ))
      );
    })
    .sort((a, b) =>
      a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
    );
}
