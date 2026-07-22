import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/content/categories";
import { glossaryReader } from "@/data/local-glossary-reader";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CopyLinkButton } from "@/features/share-term/copy-link-button";
import { labelFor } from "@/shared/lib/labels";
import { TermEditorialContent } from "@/entities/glossary-term/term-editorial-content";
import { TermReferenceText } from "@/entities/glossary-term/term-reference-text";
import { WarmLink } from "@/shared/components/ui/warm-link";

export async function generateStaticParams() {
  const terms = await glossaryReader.findAll();
  return locales.flatMap((locale) =>
    terms.map((term) => ({ locale, slug: term.slug })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const term = await glossaryReader.findBySlug(slug);
  if (!term) return {};
  const content = term.localizedContent[locale];
  return {
    title: term.term,
    description: content.shortDefinition,
    openGraph: {
      title: `${term.term} — Devtionary`,
      description: content.shortDefinition,
      locale,
    },
    alternates: {
      canonical: `/${locale}/glossary/${slug}`,
      languages: {
        en: `/en/glossary/${slug}`,
        "pt-BR": `/pt-BR/glossary/${slug}`,
      },
    },
  };
}
export default async function TermPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const term = await glossaryReader.findBySlug(slug);
  if (!term) notFound();
  const d = getDictionary(locale);
  const content = term.localizedContent[locale];
  const terms = await glossaryReader.findAll();
  const termsBySlug = new Map(terms.map((item) => [item.slug, item]));
  const related = term.relatedTerms
    .map((value) => termsBySlug.get(value))
    .filter((item) => item !== undefined);
  return (
    <article className="page term-detail container">
      <Link className="back-link" href={`/${locale}/glossary`}>
        ← {d.common.back}
      </Link>
      <header>
        <div className="badge-row">
          {term.categories.map((slug) => {
            const category = categories.find((c) => c.slug === slug);
            return (
              <WarmLink
                className="badge"
                key={slug}
                href={`/${locale}/categories/${slug}`}
              >
                {category?.name[locale]}
              </WarmLink>
            );
          })}
        </div>
        <h1>{term.term}</h1>
        {term.abbreviation && term.abbreviation !== term.term && (
          <code>{term.abbreviation}</code>
        )}
        <p className="lead">
          <TermReferenceText
            currentSlug={term.slug}
            locale={locale}
            terms={terms}
            text={content.shortDefinition}
          />
        </p>
        <div className="term-meta">
          <span>
            {d.term.level}:{" "}
            <strong>{labelFor("level", term.level, locale)}</strong>
          </span>
          <span>
            {d.term.type}:{" "}
            <strong>{labelFor("type", term.type, locale)}</strong>
          </span>
          {term.pronunciation && (
            <span>
              {d.term.pronunciation}: <strong>{term.pronunciation}</strong>
            </span>
          )}
          <CopyLinkButton copy={d.common.copy} copied={d.common.copied} />
        </div>
      </header>
      <div className="article-grid">
        <TermEditorialContent
          content={content}
          currentSlug={term.slug}
          dictionary={d}
          locale={locale}
          terms={terms}
        />
        <aside>
          <h2>{d.term.related}</h2>
          {related.map((item) => (
            <Link key={item.slug} href={`/${locale}/glossary/${item.slug}`}>
              <strong>{item.term}</strong>
              <span>{item.localizedContent[locale].shortDefinition}</span>
            </Link>
          ))}
        </aside>
      </div>
    </article>
  );
}
