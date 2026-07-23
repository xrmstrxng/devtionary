"use client";
import {
  type KeyboardEvent,
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/content/categories";
import { levels, termTypes } from "@/entities/glossary-term/model";
import {
  normalizeSearch,
  parseFilters,
  type GlossaryFilters,
} from "@/features/search-terms/search";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { TermCard } from "@/shared/components/ui/term-card";
import { labelFor } from "@/shared/lib/labels";
import { TermAutocomplete } from "@/features/search-terms/term-autocomplete";
import { Pagination } from "@/shared/components/ui/pagination";
import type { GlossaryListTerm } from "@/data/local-glossary-list";

const PAGE_SIZE = 30;

type FilterOption = {
  label: string;
  value: string;
};

function FilterSelect({
  label,
  onChange,
  options,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  value: string;
}) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document
      .getElementById(`${id}-option-${activeIndex}`)
      ?.scrollIntoView?.({ block: "nearest" });
  }, [activeIndex, id, open]);

  function select(index: number) {
    onChange(options[index].value);
    setActiveIndex(index);
    setOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex(selectedIndex);
        setOpen(true);
      }
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex(
        (current) => (current + direction + options.length) % options.length,
      );
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setActiveIndex(event.key === "Home" ? 0 : options.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      select(activeIndex);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div
      className="filter-field"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      ref={rootRef}
    >
      <span className="filter-label" id={`${id}-label`}>
        {label}
      </span>
      <div className="filter-select">
        <button
          aria-controls={`${id}-menu`}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-labelledby={`${id}-label ${id}-value`}
          className="filter-select-button"
          id={`${id}-value`}
          onClick={() => {
            setActiveIndex(selectedIndex);
            setOpen((current) => !current);
          }}
          onKeyDown={handleKeyDown}
          type="button"
        >
          <span>{options[selectedIndex].label}</span>
          <span className="filter-select-chevron" aria-hidden="true" />
        </button>
        {open && (
          <div
            aria-labelledby={`${id}-label`}
            className="filter-select-menu"
            id={`${id}-menu`}
            role="listbox"
          >
            {options.map((option, index) => (
              <button
                aria-selected={index === selectedIndex}
                className="filter-select-option"
                data-active={index === activeIndex || undefined}
                id={`${id}-option-${index}`}
                key={option.value}
                onClick={() => select(index)}
                onMouseEnter={() => setActiveIndex(index)}
                role="option"
                tabIndex={-1}
                type="button"
              >
                <span>{option.label}</span>
                {index === selectedIndex && (
                  <span className="filter-select-selected" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function GlossaryBrowser({
  terms,
  locale,
  dictionary,
}: {
  terms: GlossaryListTerm[];
  locale: Locale;
  dictionary: Dictionary;
}) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const filters = parseFilters(params);
  const [drawer, setDrawer] = useState(false);
  const [query, setQuery] = useState(filters.query);
  useEffect(() => {
    const syncQueryFromHistory = () =>
      setQuery(new URLSearchParams(window.location.search).get("query") ?? "");
    window.addEventListener("popstate", syncQueryFromHistory);
    return () => window.removeEventListener("popstate", syncQueryFromHistory);
  }, []);
  const deferredQuery = useDeferredValue(query);
  const results = useMemo(() => {
    const query = normalizeSearch(deferredQuery);
    return terms
      .filter(
        (term) =>
          (!query || term.searchIndex.includes(query)) &&
          (!filters.category || term.categories.includes(filters.category)) &&
          (!filters.level || term.level === filters.level) &&
          (!filters.type || term.type === filters.type) &&
          (!filters.letter ||
            normalizeSearch(term.term).startsWith(
              normalizeSearch(filters.letter),
            )),
      )
      .sort((left, right) =>
        left.term.localeCompare(right.term, "en", { sensitivity: "base" }),
      );
  }, [
    deferredQuery,
    filters.category,
    filters.letter,
    filters.level,
    filters.type,
    terms,
  ]);
  const resultKey = [
    deferredQuery,
    filters.category,
    filters.letter,
    filters.level,
    filters.type,
  ].join("|");
  const [pagination, setPagination] = useState({
    key: resultKey,
    page: 1,
  });
  const currentPage = pagination.key === resultKey ? pagination.page : 1;
  const totalPages = Math.ceil(results.length / PAGE_SIZE);
  const firstVisibleResult = (currentPage - 1) * PAGE_SIZE;
  const visibleResults = results.slice(
    firstVisibleResult,
    firstVisibleResult + PAGE_SIZE,
  );
  const availableLetters = new Set(
    terms.map((term) => term.term.charAt(0).toLocaleUpperCase("en")),
  );
  const activeFilters: Array<{
    key: keyof GlossaryFilters;
    label: string;
  }> = [];
  if (query) activeFilters.push({ key: "query", label: `“${query}”` });
  const selectedCategory = categories.find(
    (category) => category.slug === filters.category,
  );
  if (selectedCategory)
    activeFilters.push({
      key: "category",
      label: selectedCategory.name[locale],
    });
  if (filters.letter)
    activeFilters.push({
      key: "letter",
      label: `${dictionary.glossary.letter}: ${filters.letter}`,
    });
  if (filters.level)
    activeFilters.push({
      key: "level",
      label: labelFor("level", filters.level, locale),
    });
  if (filters.type)
    activeFilters.push({
      key: "type",
      label: labelFor("type", filters.type, locale),
    });
  function update(key: keyof GlossaryFilters, value: string) {
    const next = new URLSearchParams(window.location.search);
    if (value) next.set(key, value);
    else next.delete(key);
    const nextUrl = `${pathname}${next.size ? `?${next}` : ""}`;
    if (key === "query")
      window.history.replaceState(window.history.state, "", nextUrl);
    else router.replace(nextUrl, { scroll: false });
  }
  function clearFilters() {
    setQuery("");
    router.replace(pathname);
  }
  function removeActiveFilter(key: keyof GlossaryFilters) {
    if (key === "query") setQuery("");
    update(key, "");
  }
  const controls = (
    <>
      <FilterSelect
        label={dictionary.glossary.category}
        onChange={(value) => update("category", value)}
        options={[
          { label: dictionary.glossary.allCategories, value: "" },
          ...categories.map((category) => ({
            label: category.name[locale],
            value: category.slug,
          })),
        ]}
        value={filters.category}
      />
      <FilterSelect
        label={dictionary.glossary.level}
        onChange={(value) => update("level", value)}
        options={[
          { label: dictionary.glossary.all, value: "" },
          ...levels.map((level) => ({
            label: labelFor("level", level, locale),
            value: level,
          })),
        ]}
        value={filters.level}
      />
      <FilterSelect
        label={dictionary.glossary.type}
        onChange={(value) => update("type", value)}
        options={[
          { label: dictionary.glossary.all, value: "" },
          ...termTypes.map((type) => ({
            label: labelFor("type", type, locale),
            value: type,
          })),
        ]}
        value={filters.type}
      />
      <button className="clear-button" onClick={clearFilters}>
        {dictionary.glossary.clear}
      </button>
    </>
  );
  return (
    <div className="browser">
      <TermAutocomplete
        id="term-search"
        label={dictionary.glossary.search}
        locale={locale}
        mode="glossary"
        onValueChange={(value) => {
          setQuery(value);
          update("query", value);
        }}
        placeholder={dictionary.glossary.placeholder}
        terms={terms}
        value={query}
      />
      <button className="button mobile-filter" onClick={() => setDrawer(true)}>
        {dictionary.glossary.openFilters}
      </button>
      <div className="alphabet" aria-label={dictionary.glossary.letter}>
        <button
          className="alphabet-letter alphabet-all"
          aria-pressed={!filters.letter}
          onClick={() => update("letter", "")}
        >
          {dictionary.glossary.allLetters}
        </button>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
          <button
            className="alphabet-letter"
            key={l}
            aria-pressed={filters.letter === l}
            disabled={!availableLetters.has(l)}
            onClick={() => update("letter", l)}
          >
            {l}
          </button>
        ))}
      </div>
      {activeFilters.length > 0 && (
        <div
          className="active-filters"
          aria-label={dictionary.glossary.activeFilters}
        >
          <strong>{dictionary.glossary.activeFilters}:</strong>
          {activeFilters.map((filter) => (
            <button
              aria-label={`${dictionary.glossary.clear}: ${filter.label}`}
              key={filter.key}
              onClick={() => removeActiveFilter(filter.key)}
              type="button"
            >
              {filter.label} <span aria-hidden="true">×</span>
            </button>
          ))}
        </div>
      )}
      <div className="browser-layout">
        <aside className="filters">
          <h2>{dictionary.glossary.filters}</h2>
          {controls}
        </aside>
        <section>
          <p className="result-count" id="glossary-results" aria-live="polite">
            <strong>{results.length}</strong> {dictionary.glossary.found}
          </p>
          {results.length ? (
            <div className="term-grid">
              {visibleResults.map((term) => (
                <TermCard key={term.slug} term={term} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <span>⊘</span>
              <h2>{dictionary.glossary.emptyTitle}</h2>
              <p>{dictionary.glossary.empty}</p>
              <button className="button" onClick={clearFilters}>
                {dictionary.glossary.clear}
              </button>
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            label={dictionary.common.pagination}
            nextLabel={dictionary.common.next}
            onPageChange={(page) => {
              setPagination({ key: resultKey, page });
              document
                .getElementById("glossary-results")
                ?.scrollIntoView?.({ behavior: "smooth", block: "start" });
            }}
            pageLabel={dictionary.common.page}
            previousLabel={dictionary.common.previous}
            totalPages={totalPages}
          />
        </section>
      </div>
      {drawer && (
        <div
          className="drawer-backdrop"
          role="presentation"
          onMouseDown={() => setDrawer(false)}
        >
          <aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.glossary.filters}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              className="drawer-close"
              autoFocus
              onClick={() => setDrawer(false)}
            >
              {dictionary.glossary.closeFilters} ×
            </button>
            {controls}
          </aside>
        </div>
      )}
    </div>
  );
}
