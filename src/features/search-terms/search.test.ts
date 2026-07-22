import { describe, expect, it } from "vitest";
import { rawTerms } from "@/content/terms";
import {
  createCompactTermSearchIndex,
  emptyFilters,
  filterTerms,
  normalizeSearch,
  parseFilters,
} from "./search";
describe("glossary search", () => {
  it("builds a compact localized index for the browser", () => {
    const nginx = rawTerms.find((term) => term.slug === "nginx");
    if (!nginx) throw new Error("Nginx fixture is missing");
    const namesBySlug = new Map(rawTerms.map((term) => [term.slug, term.term]));
    const index = createCompactTermSearchIndex(nginx, "pt-BR", namesBySlug);

    expect(index).toContain(normalizeSearch("servidor web"));
    expect(index).toContain(
      normalizeSearch(nginx.localizedContent["pt-BR"].shortDefinition),
    );
    expect(index.length).toBeLessThan(JSON.stringify(nginx).length);
  });

  it("normalizes case and accents", () =>
    expect(normalizeSearch("  Migração  ")).toBe("migracao"));
  it("normalizes punctuation and duplicate spaces", () =>
    expect(normalizeSearch("  CI/CD -- pipeline  ")).toBe("ci cd pipeline"));
  it("searches abbreviations", () =>
    expect(
      filterTerms(rawTerms, "en", { ...emptyFilters, query: "PR" }).some(
        (t) => t.slug === "pull-request",
      ),
    ).toBe(true));
  it("searches localized content", () =>
    expect(
      filterTerms(rawTerms, "pt-BR", {
        ...emptyFilters,
        query: "restauração",
      }).map((t) => t.slug),
    ).toContain("rollback"));
  it("searches aliases", () =>
    expect(
      filterTerms(rawTerms, "en", { ...emptyFilters, query: "standup" }).map(
        (t) => t.slug,
      ),
    ).toContain("daily"));
  it("filters category and level", () => {
    const result = filterTerms(rawTerms, "en", {
      ...emptyFilters,
      category: "git",
      level: "junior",
    });
    expect(result.length).toBeGreaterThan(0);
    expect(
      result.every((t) => t.categories.includes("git") && t.level === "junior"),
    ).toBe(true);
  });
  it("combines query and filters", () =>
    expect(
      filterTerms(rawTerms, "en", {
        ...emptyFilters,
        query: "code",
        category: "quality",
        level: "junior",
      }).map((t) => t.slug),
    ).toEqual(["code-review"]));
  it("empty filters restore all terms", () =>
    expect(filterTerms(rawTerms, "en", emptyFilters)).toHaveLength(
      rawTerms.length,
    ));
  it("parses URL parameters", () =>
    expect(
      parseFilters(
        new URLSearchParams("query=deploy&category=devops&level=junior"),
      ),
    ).toMatchObject({ query: "deploy", category: "devops", level: "junior" }));
  it.each([
    ["en", "nginx", "nginx"],
    ["pt-BR", "servidor web", "nginx"],
    ["en", "reverse proxy", "reverse-proxy"],
    ["pt-BR", "proxy reverso", "reverse-proxy"],
    ["en", "CI/CD", "ci-cd"],
    ["pt-BR", "integração contínua", "ci-cd"],
    ["pt-BR", "reverter versão", "rollback"],
  ] as const)("searches %s content for '%s'", (locale, query, slug) => {
    expect(
      filterTerms(rawTerms, locale, { ...emptyFilters, query }).map(
        (term) => term.slug,
      ),
    ).toContain(slug);
  });
  it("shows no results for an unknown query", () =>
    expect(
      filterTerms(rawTerms, "en", {
        ...emptyFilters,
        query: "there-is-no-such-term-9281",
      }),
    ).toEqual([]));
  it.each(["database", "git", "agile-meetings"])(
    "filters the %s category",
    (category) => {
      const result = filterTerms(rawTerms, "en", {
        ...emptyFilters,
        category,
      });
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((term) => term.categories.includes(category))).toBe(
        true,
      );
    },
  );
  it("sorts the initial catalog by official name", () => {
    const result = filterTerms(rawTerms, "en", emptyFilters);
    const expected = [...rawTerms].sort((first, second) =>
      first.term.localeCompare(second.term, "en", { sensitivity: "base" }),
    );
    expect(result).toEqual(expected);
  });
  it("combines query, category, and initial letter", () => {
    const result = filterTerms(rawTerms, "pt-BR", {
      ...emptyFilters,
      query: "proxy",
      category: "devops",
      letter: "R",
    });
    expect(result.map((term) => term.slug)).toContain("reverse-proxy");
    expect(result.every((term) => term.term.startsWith("R"))).toBe(true);
  });
  it.each([
    ["UX", "user-experience"],
    ["MTTR", "mean-time-to-recovery"],
    ["BFF", "backend-for-frontend"],
    ["CAC", "customer-acquisition-cost"],
  ])("resolves semantic alias %s to its canonical entry", (query, slug) => {
    expect(
      filterTerms(rawTerms, "en", { ...emptyFilters, query }).map(
        (term) => term.slug,
      ),
    ).toContain(slug);
  });
  it.each([
    "frontend",
    "observability",
    "messaging",
    "distributed-systems",
    "performance",
    "integrations",
    "data",
  ])("returns entries for the new %s category", (category) => {
    expect(
      filterTerms(rawTerms, "en", { ...emptyFilters, category }).length,
    ).toBeGreaterThan(0);
  });
});
