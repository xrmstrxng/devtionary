import Link from "next/link";
import type { GlossaryTerm } from "@/entities/glossary-term/model";
import type { Locale } from "@/i18n/config";
import { labelFor } from "@/shared/lib/labels";
import { categories } from "@/content/categories";
import { getDictionary } from "@/i18n/dictionaries";

const categoryBySlug = new Map(
  categories.map((category) => [category.slug, category]),
);

export type TermCardData = Pick<
  GlossaryTerm,
  "abbreviation" | "categories" | "level" | "slug" | "term" | "type"
> & { shortDefinition: string };

export function toTermCardData(
  term: GlossaryTerm,
  locale: Locale,
): TermCardData {
  return {
    abbreviation: term.abbreviation,
    categories: term.categories,
    level: term.level,
    shortDefinition: term.localizedContent[locale].shortDefinition,
    slug: term.slug,
    term: term.term,
    type: term.type,
  };
}

export function TermCard({
  term,
  locale,
  linkLabel,
}: {
  term: TermCardData;
  locale: Locale;
  linkLabel?: string;
}) {
  const dictionary = getDictionary(locale);
  return (
    <Link
      className="term-card"
      href={`/${locale}/glossary/${term.slug}`}
      prefetch={false}
    >
      <div className="badge-row">
        <span className="badge">{labelFor("level", term.level, locale)}</span>
        <span className="badge badge-blue">
          {labelFor("type", term.type, locale)}
        </span>
      </div>
      <h3>{term.term}</h3>
      {term.abbreviation && term.abbreviation !== term.term && (
        <code>{term.abbreviation}</code>
      )}
      <div className="category-badges">
        {term.categories.map((slug) => (
          <span key={slug}>{categoryBySlug.get(slug)?.name[locale]}</span>
        ))}
      </div>
      <p>{term.shortDefinition}</p>
      <span className="card-link">
        {linkLabel ?? dictionary.common.browse} <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
