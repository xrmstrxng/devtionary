import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { rawTerms } from "@/content/terms";
import { toTermCardData } from "@/shared/components/ui/term-card";
import { CategoryTermGrid } from "./category-term-grid";

afterEach(cleanup);

describe("category term grid", () => {
  it("renders one batch at a time and navigates with numbered pages", () => {
    const terms = rawTerms
      .filter((term) => term.categories.includes("development"))
      .map((term) => toTermCardData(term, "pt-BR"));
    expect(terms.length).toBeGreaterThan(30);

    const { container } = render(
      <CategoryTermGrid
        labels={{
          next: "Próxima",
          page: "Página",
          pagination: "Paginação",
          previous: "Anterior",
        }}
        locale="pt-BR"
        terms={terms}
      />,
    );

    expect(container.querySelectorAll(".term-card")).toHaveLength(30);
    expect(
      screen.getByRole("navigation", { name: "Paginação" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Anterior" })).toBeDisabled();

    fireEvent.click(screen.getByRole("button", { name: "Página 2" }));
    expect(container.querySelectorAll(".term-card")).toHaveLength(
      Math.min(30, terms.length - 30),
    );
    expect(screen.getByRole("button", { name: "Página 2" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});
