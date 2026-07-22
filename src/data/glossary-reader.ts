import type { GlossaryTerm } from "@/entities/glossary-term/model";
export interface GlossaryReader {
  findAll(): Promise<GlossaryTerm[]>;
  findBySlug(slug: string): Promise<GlossaryTerm | null>;
  findByCategory(category: string): Promise<GlossaryTerm[]>;
}
