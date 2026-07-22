import { glossaryReader } from "@/data/local-glossary-reader";
import { createCompactTermSearchIndex } from "@/features/search-terms/search";
import type { Locale } from "@/i18n/config";
import {
  toTermCardData,
  type TermCardData,
} from "@/shared/components/ui/term-card";

export type GlossaryListTerm = TermCardData & { searchIndex: string };

const listCache = new Map<Locale, Promise<GlossaryListTerm[]>>();

export function getLocalGlossaryList(locale: Locale) {
  const cached = listCache.get(locale);
  if (cached) return cached;

  const list = glossaryReader.findAll().then((terms) => {
    const termsBySlug = new Map(terms.map((term) => [term.slug, term.term]));
    return terms.map((term) => ({
      ...toTermCardData(term, locale),
      searchIndex: createCompactTermSearchIndex(term, locale, termsBySlug),
    }));
  });
  listCache.set(locale, list);
  return list;
}
