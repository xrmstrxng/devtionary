"use client";

import Link from "next/link";
import { useId, useMemo, useRef, useState } from "react";
import { categories } from "@/content/categories";
import { normalizeSearch } from "@/features/search-terms/search";
import type { Locale } from "@/i18n/config";

export type TermSuggestion = {
  categories: string[];
  slug: string;
  term: string;
};

export function TermAutocomplete({
  id,
  label,
  locale,
  mode,
  onValueChange,
  placeholder,
  terms,
  value,
}: {
  id: string;
  label: string;
  locale: Locale;
  mode: "hero" | "glossary";
  onValueChange?: (value: string) => void;
  placeholder: string;
  terms: TermSuggestion[];
  value?: string;
}) {
  const generatedId = useId();
  const listId = `${id}-${generatedId.replace(/:/g, "")}-suggestions`;
  const [internalValue, setInternalValue] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const query = value ?? internalValue;
  const normalizedQuery = normalizeSearch(query);
  const indexedTerms = useMemo(
    () =>
      terms.map((term) => ({
        normalizedName: normalizeSearch(term.term),
        term,
      })),
    [terms],
  );
  const suggestions = useMemo(() => {
    if (!normalizedQuery) return [];
    return indexedTerms
      .filter(({ normalizedName }) =>
        normalizedName.startsWith(normalizedQuery),
      )
      .map(({ term }) => term)
      .sort((left, right) =>
        left.term.localeCompare(right.term, "en", { sensitivity: "base" }),
      )
      .slice(0, 8);
  }, [indexedTerms, normalizedQuery]);

  const setQuery = (nextValue: string) => {
    if (onValueChange) onValueChange(nextValue);
    else setInternalValue(nextValue);
    setActiveIndex(-1);
    setOpen(Boolean(nextValue.trim()));
  };

  return (
    <div
      className={`term-autocomplete ${mode}-autocomplete`}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget))
          setOpen(false);
      }}
      onFocus={() => setOpen(Boolean(query.trim()))}
      ref={containerRef}
    >
      <form
        action={`/${locale}/glossary`}
        className={mode === "hero" ? "hero-search" : "search-bar"}
        method="get"
        role="search"
      >
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        {mode === "glossary" && <span aria-hidden>⌕</span>}
        <input
          aria-activedescendant={
            activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined
          }
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={open && suggestions.length > 0}
          autoComplete="off"
          id={id}
          name="query"
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              setActiveIndex(-1);
              return;
            }
            if (!open || suggestions.length === 0) return;
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActiveIndex((current) =>
                current >= suggestions.length - 1 ? 0 : current + 1,
              );
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActiveIndex((current) =>
                current <= 0 ? suggestions.length - 1 : current - 1,
              );
            } else if (event.key === "Enter" && activeIndex >= 0) {
              event.preventDefault();
              document.getElementById(`${listId}-${activeIndex}`)?.click();
            }
          }}
          placeholder={placeholder}
          role="combobox"
          value={query}
        />
        {mode === "hero" && (
          <button type="submit" aria-label={label}>
            ⌕
          </button>
        )}
      </form>
      {open && suggestions.length > 0 && (
        <ul className="autocomplete-list" id={listId} role="listbox">
          {suggestions.map((term, index) => {
            const category = categories.find(
              (item) => item.slug === term.categories[0],
            );
            return (
              <li key={term.slug} role="presentation">
                <Link
                  aria-label={
                    category
                      ? `${term.term}, ${category.name[locale]}`
                      : term.term
                  }
                  aria-selected={activeIndex === index}
                  className="autocomplete-option"
                  href={`/${locale}/glossary/${term.slug}`}
                  id={`${listId}-${index}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  role="option"
                >
                  <span>{term.term}</span>
                  <small>{category?.name[locale]}</small>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
