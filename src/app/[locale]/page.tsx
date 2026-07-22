import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/content/categories";
import { glossaryReader } from "@/data/local-glossary-reader";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { TermCard, toTermCardData } from "@/shared/components/ui/term-card";
import { ProgrammingBackground } from "@/shared/components/ui/digital-decor";
import { HomeScrollReset } from "@/features/home-scroll-reset/home-scroll-reset";
import { TermAutocomplete } from "@/features/search-terms/term-autocomplete";
import { WarmLink } from "@/shared/components/ui/warm-link";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  const terms = await glossaryReader.findAll();
  const featured = terms.filter((t) => t.featured).slice(0, 3);
  const daily = terms[new Date().getUTCDate() % terms.length];
  return (
    <>
      <HomeScrollReset locale={locale} />
      <section className="hero">
        <ProgrammingBackground />
        <div className="hero-content container">
          <p className="hero-brand-tag">DEV // KNOWLEDGE BASE</p>
          <p className="eyebrow">{d.home.eyebrow}</p>
          <h1 data-text="Devtionary">
            <span>Dev</span>tionary
          </h1>
          <h2>{d.home.title}</h2>
          <p className="hero-description">{d.home.description}</p>
          <TermAutocomplete
            id="home-query"
            label={d.glossary.search}
            locale={locale}
            mode="hero"
            placeholder={d.home.searchPlaceholder}
            terms={terms.map(({ categories, slug, term }) => ({
              categories,
              slug,
              term,
            }))}
          />
        </div>
      </section>
      <section className="section categories-section container" id="categories">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              01 / {d.home.categoriesLabel.toUpperCase()}
            </p>
            <h2>{d.home.categories}</h2>
          </div>
          <Link href={`/${locale}/glossary`}>{d.common.browse} →</Link>
        </div>
        <div className="category-grid">
          {categories.slice(0, 6).map((category, index) => (
            <WarmLink
              className={`category-card accent-${index % 3}`}
              key={category.slug}
              href={`/${locale}/categories/${category.slug}`}
            >
              <span aria-hidden>{["{ }", "⌘", "▦", "⑂", "∞", "△"][index]}</span>
              <h3>{category.name[locale]}</h3>
              <p>
                {
                  terms.filter((t) => t.categories.includes(category.slug))
                    .length
                }{" "}
                {d.common.terms}
              </p>
            </WarmLink>
          ))}
        </div>
      </section>
      <section className="section surface-section">
        <div className="split container">
          <div>
            <p className="eyebrow">02 / {d.home.daily.toUpperCase()}</p>
            <TermCard term={toTermCardData(daily, locale)} locale={locale} />
          </div>
          <div>
            <p className="eyebrow">03 / {d.home.featured.toUpperCase()}</p>
            <div className="term-grid">
              {featured.map((term) => (
                <TermCard
                  key={term.slug}
                  term={toTermCardData(term, locale)}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section about-callout container">
        <span aria-hidden>☾</span>
        <div>
          <h2>{d.home.whyTitle}</h2>
          <p>{d.home.why}</p>
        </div>
        <Link className="button" href={`/${locale}/about`}>
          {d.nav.about} →
        </Link>
      </section>
    </>
  );
}
