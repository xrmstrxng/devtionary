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

function CategoryIcon({ fallback, slug }: { fallback: string; slug: string }) {
  let icon;

  if (slug === "architecture") {
    icon = (
      <svg viewBox="0 0 24 24">
        <rect x="9" y="3" width="6" height="5" rx="1" />
        <rect x="3" y="16" width="6" height="5" rx="1" />
        <rect x="15" y="16" width="6" height="5" rx="1" />
        <path d="M12 8v4M6 16v-4h12v4" />
      </svg>
    );
  } else if (slug === "devops") {
    icon = (
      <svg viewBox="0 0 24 24">
        <path d="M7.2 8.2C4.9 8.2 3 9.9 3 12s1.9 3.8 4.2 3.8c4.3 0 5.3-7.6 9.6-7.6 2.3 0 4.2 1.7 4.2 3.8s-1.9 3.8-4.2 3.8c-4.3 0-5.3-7.6-9.6-7.6Z" />
      </svg>
    );
  } else if (slug === "cloud") {
    icon = (
      <svg viewBox="0 0 24 24">
        <path d="M7 18h10a4 4 0 0 0 .4-7.98A6 6 0 0 0 6.1 8.1 4.5 4.5 0 0 0 7 18Z" />
      </svg>
    );
  }

  return (
    <span className="category-icon" aria-hidden="true">
      {icon ?? fallback}
    </span>
  );
}

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
              <CategoryIcon
                fallback={["{ }", "⌘", "▦", "⑂", "∞", "△"][index]}
                slug={category.slug}
              />
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
            <TermCard
              term={toTermCardData(daily, locale)}
              locale={locale}
              linkLabel={d.common.readMore}
            />
          </div>
          <div>
            <p className="eyebrow">03 / {d.home.featured.toUpperCase()}</p>
            <div className="term-grid">
              {featured.map((term) => (
                <TermCard
                  key={term.slug}
                  term={toTermCardData(term, locale)}
                  locale={locale}
                  linkLabel={d.common.readMore}
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
