export default function CategoryLoading() {
  return (
    <div className="page category-loading container" aria-busy="true">
      <span className="sr-only">Loading category</span>
      <div className="skeleton-line skeleton-back" />
      <header className="page-header">
        <div className="skeleton-line skeleton-eyebrow" />
        <div className="skeleton-line skeleton-title" />
        <div className="skeleton-line skeleton-description" />
      </header>
      <div className="term-grid" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="term-card skeleton-card" key={index} />
        ))}
      </div>
    </div>
  );
}
