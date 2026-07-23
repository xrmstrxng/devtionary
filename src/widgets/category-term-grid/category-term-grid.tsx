"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { TermCard, type TermCardData } from "@/shared/components/ui/term-card";
import { Pagination } from "@/shared/components/ui/pagination";

const PAGE_SIZE = 30;

export function CategoryTermGrid({
  locale,
  labels,
  terms,
}: {
  locale: Locale;
  labels: {
    next: string;
    page: string;
    pagination: string;
    previous: string;
  };
  terms: TermCardData[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(terms.length / PAGE_SIZE);
  const firstItem = (currentPage - 1) * PAGE_SIZE;
  const visibleTerms = terms.slice(firstItem, firstItem + PAGE_SIZE);
  const changePage = (page: number) => {
    setCurrentPage(page);
    document
      .getElementById("category-results")
      ?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="term-grid" id="category-results">
        {visibleTerms.map((term) => (
          <TermCard key={term.slug} term={term} locale={locale} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        label={labels.pagination}
        nextLabel={labels.next}
        onPageChange={changePage}
        pageLabel={labels.page}
        previousLabel={labels.previous}
        totalPages={totalPages}
      />
    </>
  );
}
