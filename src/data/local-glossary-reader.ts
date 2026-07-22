import { categorySlugs } from "@/content/categories";
import { rawTerms } from "@/content/terms";
import {
  glossaryTermSchema,
  type GlossaryTerm,
} from "@/entities/glossary-term/model";
import type { GlossaryReader } from "./glossary-reader";

export function validateGlossary(input: unknown): GlossaryTerm[] {
  const terms = glossaryTermSchema.array().parse(input);
  const ids = new Set<string>();
  const slugs = new Set<string>();
  const names = new Set<string>();
  for (const term of terms) {
    if (ids.has(term.id)) throw new Error(`Duplicate term ID: ${term.id}`);
    ids.add(term.id);
    if (slugs.has(term.slug))
      throw new Error(`Duplicate term slug: ${term.slug}`);
    slugs.add(term.slug);
    const normalizedName = term.term.toLocaleLowerCase("en");
    if (names.has(normalizedName))
      throw new Error(`Duplicate term name: ${term.term}`);
    names.add(normalizedName);
    if (term.aliases.some((alias) => alias.trim().length === 0))
      throw new Error(`Empty alias in ${term.slug}`);
    const editorialText = JSON.stringify(term.localizedContent);
    if (/\bTODO\b|Lorem ipsum|Definition for/.test(editorialText))
      throw new Error(`Provisional content in ${term.slug}`);
    for (const locale of ["en", "pt-BR"] as const) {
      const content = term.localizedContent[locale];
      if (!content.purpose || !content.whenToUse || !content.practicalExample)
        throw new Error(
          `Incomplete editorial structure in ${term.slug}:${locale}`,
        );
      if (!content.professionalPhrase)
        throw new Error(
          `Missing professional phrase in ${term.slug}:${locale}`,
        );
      if (
        content.practicalExample.context ===
        content.practicalExample.application
      )
        throw new Error(`Invalid practical example in ${term.slug}:${locale}`);
    }
    for (const category of term.categories)
      if (!categorySlugs.has(category))
        throw new Error(`Unknown category '${category}' in ${term.slug}`);
  }
  for (const term of terms)
    for (const related of term.relatedTerms)
      if (!slugs.has(related))
        throw new Error(`Unknown related term '${related}' in ${term.slug}`);
      else if (related === term.slug)
        throw new Error(`Self relationship in ${term.slug}`);
  return terms;
}

const validatedTerms = validateGlossary(rawTerms);
const termBySlug = new Map(validatedTerms.map((term) => [term.slug, term]));
const termsByCategory = new Map<string, GlossaryTerm[]>();
for (const term of validatedTerms)
  for (const category of term.categories) {
    const categoryTerms = termsByCategory.get(category) ?? [];
    categoryTerms.push(term);
    termsByCategory.set(category, categoryTerms);
  }
export class LocalGlossaryReader implements GlossaryReader {
  async findAll() {
    return validatedTerms;
  }
  async findBySlug(slug: string) {
    return termBySlug.get(slug) ?? null;
  }
  async findByCategory(category: string) {
    return termsByCategory.get(category) ?? [];
  }
}
export const glossaryReader = new LocalGlossaryReader();
