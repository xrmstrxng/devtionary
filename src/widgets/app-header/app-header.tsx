"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function AppHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const search = useSearchParams();
  const scrollToTop = () =>
    window.scrollTo({ behavior: "auto", left: 0, top: 0 });
  useEffect(() => {
    if (window.location.hash) return;
    const resetAfterNavigation = () =>
      window.scrollTo({ behavior: "auto", left: 0, top: 0 });
    resetAfterNavigation();
    const frame = window.requestAnimationFrame(resetAfterNavigation);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);
  const switchPath = (next: Locale) =>
    switchLocalePath(pathname, next, search.toString());
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link
          aria-label="Devtionary"
          className="logo"
          href={`/${locale}`}
          onClick={scrollToTop}
          scroll={false}
        >
          <span className="logo-mark" aria-hidden="true" />
        </Link>
        <nav aria-label="Main navigation">
          <Link href={`/${locale}`} onClick={scrollToTop} scroll={false}>
            {dictionary.nav.home}
          </Link>
          <Link href={`/${locale}/#categories`}>
            {dictionary.nav.categories}
          </Link>
          <Link
            href={`/${locale}/glossary`}
            onClick={scrollToTop}
            scroll={false}
          >
            {dictionary.nav.glossary}
          </Link>
          <Link href={`/${locale}/about`} onClick={scrollToTop} scroll={false}>
            {dictionary.nav.about}
          </Link>
        </nav>
        <div className="language" aria-label="Language">
          <Link
            aria-current={locale === "en" ? "page" : undefined}
            href={switchPath("en")}
          >
            EN
          </Link>
          <span>/</span>
          <Link
            aria-current={locale === "pt-BR" ? "page" : undefined}
            href={switchPath("pt-BR")}
          >
            PT
          </Link>
        </div>
      </div>
    </header>
  );
}
