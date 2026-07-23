import { describe, expect, it } from "vitest";
import { rawTerms } from "@/content/terms";
import { getExpandedEntries } from "@/content/terms/expanded-catalog";
import { extraCatalogGroups } from "@/content/terms/extra-catalog";
import { glossaryReader, validateGlossary } from "./local-glossary-reader";
describe("local glossary", () => {
  it("validates all content and relations", () =>
    expect(validateGlossary(rawTerms)).toHaveLength(737));
  it("contains unique IDs, slugs, and official names", () => {
    expect(new Set(rawTerms.map((term) => term.id))).toHaveLength(
      rawTerms.length,
    );
    expect(new Set(rawTerms.map((term) => term.slug))).toHaveLength(
      rawTerms.length,
    );
    expect(
      new Set(rawTerms.map((term) => term.term.toLocaleLowerCase("en"))),
    ).toHaveLength(rawTerms.length);
  });
  it("contains complete localized editorial content", () => {
    for (const term of rawTerms) {
      for (const locale of ["en", "pt-BR"] as const) {
        const content = term.localizedContent[locale];
        expect(content.shortDefinition.length).toBeGreaterThan(19);
        expect(content.fullDefinition.length).toBeGreaterThan(39);
        expect(content.professionalContext.length).toBeGreaterThan(19);
        expect(content.examples.length).toBeGreaterThan(0);
        expect(content.purpose?.length).toBeGreaterThan(29);
        expect(content.whenToUse?.length).toBeGreaterThan(29);
        expect(content.practicalExample?.context.length).toBeGreaterThan(19);
        expect(content.practicalExample?.application.length).toBeGreaterThan(
          19,
        );
        expect(content.professionalPhrase?.length).toBeGreaterThan(14);
      }
    }
  });
  it("contains every mandatory expanded catalog entry", () => {
    const names = new Set(
      rawTerms.map((term) => term.term.toLocaleLowerCase("en")),
    );
    for (const entry of getExpandedEntries())
      expect(names.has(entry.name.toLocaleLowerCase("en"))).toBe(true);
  });
  it("represents every extra term as an official name or searchable alias", () => {
    const searchableNames = new Set(
      rawTerms.flatMap((term) => [
        term.term.toLocaleLowerCase("en"),
        ...term.aliases.map((alias) => alias.toLocaleLowerCase("en")),
      ]),
    );
    for (const group of extraCatalogGroups)
      for (const name of group.terms)
        expect(searchableNames.has(name.toLocaleLowerCase("en"))).toBe(true);
  });
  it("rejects duplicate IDs and names", () => {
    expect(() =>
      validateGlossary([
        ...rawTerms,
        { ...rawTerms[0], slug: "different-slug" },
      ]),
    ).toThrow("Duplicate term ID");
    expect(() =>
      validateGlossary([
        ...rawTerms,
        { ...rawTerms[0], id: "different-id", slug: "another-slug" },
      ]),
    ).toThrow("Duplicate term name");
  });
  it("rejects duplicate slugs", () =>
    expect(() => validateGlossary([...rawTerms, rawTerms[0]])).toThrow(
      "Duplicate",
    ));
  it("returns null for an unknown slug", async () =>
    expect(await glossaryReader.findBySlug("missing-term")).toBeNull());
  it("resolves related terms", async () => {
    const api = await glossaryReader.findBySlug("api");
    expect(api).not.toBeNull();
    for (const slug of api?.relatedTerms ?? [])
      expect(await glossaryReader.findBySlug(slug)).not.toBeNull();
  });
});
