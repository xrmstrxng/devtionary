import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AppFooter } from "@/widgets/app-footer/app-footer";
import { AppHeader } from "@/widgets/app-header/app-header";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const d = getDictionary(value);
  return {
    title: { default: d.metadata.title, template: `%s — Devtionary` },
    description: d.metadata.description,
    openGraph: {
      title: d.metadata.title,
      description: d.metadata.description,
      locale: value,
    },
    alternates: { languages: { en: "/en", "pt-BR": "/pt-BR" } },
  };
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const dictionary = getDictionary(value);
  return (
    <div lang={value}>
      <Suspense fallback={<div className="site-header" aria-hidden="true" />}>
        <AppHeader locale={value} dictionary={dictionary} />
      </Suspense>
      <main>{children}</main>
      <AppFooter dictionary={dictionary} />
    </div>
  );
}
