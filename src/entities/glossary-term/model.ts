import { z } from "zod";

export const levels = ["junior", "mid-level", "senior", "all"] as const;
export const termTypes = [
  "technical",
  "business",
  "meeting",
  "documentation",
  "acronym",
  "process",
  "role",
  "tool",
  "architecture",
  "concept",
  "technology",
  "protocol",
  "pattern",
] as const;
export const localizedContentSchema = z.object({
  shortDefinition: z.string().min(20),
  fullDefinition: z.string().min(40),
  professionalContext: z.string().min(20),
  purpose: z.string().min(30).optional(),
  whenToUse: z.string().min(30).optional(),
  practicalExample: z
    .object({
      context: z.string().min(20),
      application: z.string().min(20),
    })
    .optional(),
  professionalPhrase: z.string().min(15).optional(),
  commonConfusions: z.string().min(20).optional(),
  examples: z.array(z.string().min(10)).min(1),
  searchableAliases: z.array(z.string()).optional(),
});
export const glossaryTermSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  term: z.string().min(1),
  abbreviation: z.string().optional(),
  pronunciation: z.string().optional(),
  localizedContent: z.object({
    en: localizedContentSchema,
    "pt-BR": localizedContentSchema,
  }),
  categories: z.array(z.string()).min(1),
  level: z.enum(levels),
  type: z.enum(termTypes),
  aliases: z.array(z.string()),
  relatedTerms: z.array(z.string()),
  featured: z.boolean().optional(),
});
export type GlossaryTerm = z.infer<typeof glossaryTermSchema>;
export type ExperienceLevel = (typeof levels)[number];
export type TermType = (typeof termTypes)[number];
