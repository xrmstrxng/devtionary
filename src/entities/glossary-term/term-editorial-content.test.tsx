import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { rawTerms } from "@/content/terms";
import { getDictionary } from "@/i18n/dictionaries";
import { TermEditorialContent } from "./term-editorial-content";

const gateway = rawTerms.find((term) => term.slug === "gateway");
if (!gateway) throw new Error("Gateway fixture is missing");
afterEach(cleanup);

describe("term editorial structure", () => {
  it("renders the four Portuguese sections without repeating the definition", () => {
    render(
      <TermEditorialContent
        content={gateway.localizedContent["pt-BR"]}
        currentSlug={gateway.slug}
        dictionary={getDictionary("pt-BR")}
        locale="pt-BR"
        terms={rawTerms}
      />,
    );
    expect(screen.getByText("01 / UTILIDADE")).toBeInTheDocument();
    expect(screen.getByText("02 / CONTEXTO")).toBeInTheDocument();
    expect(screen.getByText("03 / EXEMPLO")).toBeInTheDocument();
    expect(screen.getByText("04 / TRABALHO")).toBeInTheDocument();
    expect(screen.getByText("COMPARAÇÃO")).toBeInTheDocument();
    expect(screen.queryByText("O que é")).not.toBeInTheDocument();
    expect(
      screen.queryByText(gateway.localizedContent["pt-BR"].shortDefinition),
    ).not.toBeInTheDocument();
    for (const label of [
      "01 / PURPOSE",
      "02 / CONTEXT",
      "03 / EXAMPLE",
      "04 / WORK",
      "COMPARISON",
    ])
      expect(screen.queryByText(label)).not.toBeInTheDocument();
  });

  it("renders the four English sections without Portuguese labels", () => {
    render(
      <TermEditorialContent
        content={gateway.localizedContent.en}
        currentSlug={gateway.slug}
        dictionary={getDictionary("en")}
        locale="en"
        terms={rawTerms}
      />,
    );
    expect(screen.getByText("01 / PURPOSE")).toBeInTheDocument();
    expect(screen.getByText("02 / CONTEXT")).toBeInTheDocument();
    expect(screen.getByText("03 / EXAMPLE")).toBeInTheDocument();
    expect(screen.getByText("04 / WORK")).toBeInTheDocument();
    expect(screen.getByText("COMPARISON")).toBeInTheDocument();
    for (const label of [
      "01 / UTILIDADE",
      "02 / CONTEXTO",
      "03 / EXEMPLO",
      "04 / TRABALHO",
      "COMPARAÇÃO",
    ])
      expect(screen.queryByText(label)).not.toBeInTheDocument();
  });
});
