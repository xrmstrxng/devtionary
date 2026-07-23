import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { rawTerms } from "@/content/terms";
import { TermReferenceText } from "./term-reference-text";

afterEach(cleanup);

describe("term reference links", () => {
  it("links known terms while preserving the sentence", () => {
    render(
      <p>
        <TermReferenceText
          currentSlug="gateway"
          locale="pt-BR"
          terms={rawTerms}
          text="A API recebe a requisição pelo endpoint e devolve uma response."
        />
      </p>,
    );

    expect(screen.getByText("API").closest("p")).toHaveTextContent(
      "A API recebe a requisição pelo endpoint e devolve uma response.",
    );
    expect(screen.getByRole("link", { name: "API" })).toHaveAttribute(
      "href",
      "/pt-BR/glossary/api",
    );
    expect(screen.getByRole("link", { name: "endpoint" })).toHaveAttribute(
      "href",
      "/pt-BR/glossary/endpoint",
    );
    expect(screen.getByRole("link", { name: "response" })).toHaveAttribute(
      "href",
      "/pt-BR/glossary/response",
    );
  });

  it("does not link the current term and requires the right case for acronyms", () => {
    render(
      <p>
        <TermReferenceText
          currentSlug="gateway"
          locale="en"
          terms={rawTerms}
          text="Gateway sends an API request; lowercase api remains plain text."
        />
      </p>,
    );

    expect(screen.getByRole("link", { name: "API" })).toHaveAttribute(
      "href",
      "/en/glossary/api",
    );
    expect(
      screen.queryByRole("link", { name: "Gateway" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "api" })).not.toBeInTheDocument();
  });

  it("still links short non-acronym terms such as bug", () => {
    render(
      <TermReferenceText
        currentSlug="gateway"
        locale="en"
        terms={rawTerms}
        text="A bug can trigger an incident."
      />,
    );

    expect(screen.getByRole("link", { name: "bug" })).toHaveAttribute(
      "href",
      "/en/glossary/bug",
    );
  });

  it("does not turn short Portuguese words or generic aliases into links", () => {
    render(
      <p>
        <TermReferenceText
          currentSlug="api"
          locale="pt-BR"
          terms={rawTerms}
          text="O sistema funciona em uma funcionalidade com dados e serviço."
        />
      </p>,
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
