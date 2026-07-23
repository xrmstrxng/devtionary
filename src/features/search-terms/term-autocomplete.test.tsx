import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { rawTerms } from "@/content/terms";
import { TermAutocomplete } from "./term-autocomplete";

afterEach(cleanup);

describe("term autocomplete", () => {
  it("suggests terms by prefix and shows their localized category", async () => {
    const user = userEvent.setup();
    render(
      <TermAutocomplete
        id="test-search"
        label="Buscar termos"
        locale="pt-BR"
        mode="hero"
        placeholder="Busque um termo"
        terms={rawTerms}
      />,
    );

    const input = screen.getByRole("combobox", { name: "Buscar termos" });
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    await user.type(input, "Rea");

    const react = screen.getByRole("option", { name: /React, Frontend/i });
    expect(react).toHaveAttribute("href", "/pt-BR/glossary/react");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("supports keyboard selection and closes with Escape", async () => {
    const user = userEvent.setup();
    render(
      <TermAutocomplete
        id="keyboard-search"
        label="Search terms"
        locale="en"
        mode="glossary"
        placeholder="Search"
        terms={rawTerms}
      />,
    );

    const input = screen.getByRole("combobox", { name: "Search terms" });
    await user.type(input, "Kube");
    await user.keyboard("{ArrowDown}");

    expect(
      screen.getByRole("option", { name: /Kubernetes, DevOps/i }),
    ).toHaveAttribute("aria-selected", "true");

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
