import { describe, expect, it } from "vitest";
import { rawTerms } from "@/content/terms";

describe("related terms", () => {
  it("gives every catalog entry a useful set of valid relationships", () => {
    const slugs = new Set(rawTerms.map((term) => term.slug));

    for (const term of rawTerms) {
      expect(term.relatedTerms.length, term.slug).toBeGreaterThanOrEqual(4);
      expect(new Set(term.relatedTerms).size, term.slug).toBe(
        term.relatedTerms.length,
      );
      expect(term.relatedTerms, term.slug).not.toContain(term.slug);
      for (const relatedSlug of term.relatedTerms)
        expect(slugs.has(relatedSlug), `${term.slug} -> ${relatedSlug}`).toBe(
          true,
        );
    }
  });

  it("preserves the strongest hand-curated relationships", () => {
    const api = rawTerms.find((term) => term.slug === "api");
    const docker = rawTerms.find((term) => term.slug === "docker");

    expect(api?.relatedTerms).toEqual(
      expect.arrayContaining(["endpoint", "request", "response"]),
    );
    expect(docker?.relatedTerms).toEqual(
      expect.arrayContaining(["container", "image", "volume", "registry"]),
    );
  });

  it("keeps generated relationships inside the nearest semantic cluster", () => {
    const bySlug = new Map(rawTerms.map((term) => [term.slug, term]));

    expect(bySlug.get("forward-proxy")?.relatedTerms).toEqual(
      expect.arrayContaining(["proxy", "reverse-proxy", "load-balancer"]),
    );
    expect(bySlug.get("customer-journey")?.relatedTerms).toEqual(
      expect.arrayContaining([
        "user-persona",
        "user-journey",
        "job-to-be-done",
      ]),
    );
    const typographyRelations = bySlug.get("typography")?.relatedTerms ?? [];
    expect(typographyRelations).toEqual(
      expect.arrayContaining(["contrast", "color-palette"]),
    );
    for (const relatedSlug of typographyRelations)
      expect(bySlug.get(relatedSlug)?.categories).toContain("design");
  });
});
