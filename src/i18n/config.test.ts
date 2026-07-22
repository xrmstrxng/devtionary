import { describe, expect, it } from "vitest";
import { switchLocalePath } from "./config";

describe("localized navigation", () => {
  it("preserves route, slug, and filters when switching language", () => {
    expect(
      switchLocalePath(
        "/pt-BR/glossary/reverse-proxy",
        "en",
        "query=proxy&category=devops&letter=R",
      ),
    ).toBe("/en/glossary/reverse-proxy?query=proxy&category=devops&letter=R");
  });
});
