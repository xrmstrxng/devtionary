import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { rawTerms } from "@/content/terms";
import { normalizeSearch } from "@/features/search-terms/search";
import { getDictionary } from "@/i18n/dictionaries";
import { toTermCardData } from "@/shared/components/ui/term-card";
import { GlossaryBrowser } from "./glossary-browser";

const navigation = vi.hoisted(() => ({
  replace: vi.fn(),
  search: "",
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/pt-BR/glossary",
  useRouter: () => ({ replace: navigation.replace }),
  useSearchParams: () => new URLSearchParams(navigation.search),
}));

const terms = rawTerms.slice(0, 100).map((term) => ({
  ...toTermCardData(term, "pt-BR"),
  searchIndex: normalizeSearch(term.term),
}));

beforeEach(() => {
  navigation.replace.mockClear();
  navigation.search = "";
});
afterEach(cleanup);

describe("glossary browser", () => {
  it("opens the styled category listbox and applies an option", () => {
    render(
      <GlossaryBrowser
        dictionary={getDictionary("pt-BR")}
        locale="pt-BR"
        terms={terms}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Categoria Todas as categorias" }),
    );
    const listbox = screen.getByRole("listbox", { name: "Categoria" });
    fireEvent.click(
      within(listbox).getByRole("option", { name: "Desenvolvimento" }),
    );

    expect(navigation.replace).toHaveBeenCalledWith(
      "/pt-BR/glossary?category=development",
      { scroll: false },
    );
  });

  it("shows the active letter filter only once as a removable chip", () => {
    navigation.search = "letter=F";
    render(
      <GlossaryBrowser
        dictionary={getDictionary("pt-BR")}
        locale="pt-BR"
        terms={terms}
      />,
    );

    expect(
      screen.getAllByRole("button", {
        name: "Limpar filtros: Começa com: F",
      }),
    ).toHaveLength(1);
    expect(screen.queryByText(/^Começa com ×$/)).not.toBeInTheDocument();
  });

  it("paginates filtered results instead of accumulating cards", () => {
    const { container } = render(
      <GlossaryBrowser
        dictionary={getDictionary("pt-BR")}
        locale="pt-BR"
        terms={terms}
      />,
    );

    expect(container.querySelectorAll(".term-card")).toHaveLength(30);
    fireEvent.click(screen.getByRole("button", { name: "Página 2" }));
    expect(container.querySelectorAll(".term-card")).toHaveLength(30);
    expect(screen.getByRole("button", { name: "Página 2" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});
