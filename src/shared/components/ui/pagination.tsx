"use client";

type PageItem = number | `ellipsis-${number}`;

function pageItems(currentPage: number, totalPages: number): PageItem[] {
  if (totalPages <= 7)
    return Array.from({ length: totalPages }, (_, index) => index + 1);

  const pages = [
    ...new Set([1, currentPage - 1, currentPage, currentPage + 1, totalPages]),
  ]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right);
  const items: PageItem[] = [];
  for (const page of pages) {
    const previous = items.at(-1);
    if (typeof previous === "number" && page - previous === 2)
      items.push(previous + 1);
    else if (typeof previous === "number" && page - previous > 2)
      items.push(`ellipsis-${previous}`);
    items.push(page);
  }
  return items;
}

export function Pagination({
  currentPage,
  label,
  nextLabel,
  onPageChange,
  pageLabel,
  previousLabel,
  totalPages,
}: {
  currentPage: number;
  label: string;
  nextLabel: string;
  onPageChange: (page: number) => void;
  pageLabel: string;
  previousLabel: string;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label={label}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        type="button"
      >
        {previousLabel}
      </button>
      <div className="pagination-pages">
        {pageItems(currentPage, totalPages).map((item) =>
          typeof item === "number" ? (
            <button
              aria-current={item === currentPage ? "page" : undefined}
              aria-label={`${pageLabel} ${item}`}
              key={item}
              onClick={() => onPageChange(item)}
              type="button"
            >
              {item}
            </button>
          ) : (
            <span aria-hidden="true" key={item}>
              …
            </span>
          ),
        )}
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        type="button"
      >
        {nextLabel}
      </button>
    </nav>
  );
}
