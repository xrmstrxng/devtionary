import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/content/categories";
import { glossaryReader } from "@/data/local-glossary-reader";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { toTermCardData } from "@/shared/components/ui/term-card";
import { CategoryTermGrid } from "@/widgets/category-term-grid/category-term-grid";
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.map((category) => ({ locale, slug: category.slug })),
  );
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  const terms = await glossaryReader.findByCategory(slug);
  const d = getDictionary(locale);
  return (
    <div className="page container">
      <Link className="back-link" href={`/${locale}/glossary`}>
        ← {d.common.back}
      </Link>
      <header className="page-header">
        <p className="eyebrow">{d.glossary.category.toUpperCase()}</p>
        <h1>{category.name[locale]}</h1>
        <p>{category.description[locale]}</p>
        <strong>
          {terms.length} {d.common.terms}
        </strong>
      </header>
      <CategoryTermGrid
        labels={{
          next: d.common.next,
          page: d.common.page,
          pagination: d.common.pagination,
          previous: d.common.previous,
        }}
        locale={locale}
        terms={terms.map((term) => toTermCardData(term, locale))}
      />
    </div>
  );
}
