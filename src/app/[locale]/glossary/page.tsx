import { notFound } from "next/navigation";
import { Suspense } from "react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { GlossaryBrowser } from "@/widgets/glossary-browser/glossary-browser";
import { getLocalGlossaryList } from "@/data/local-glossary-list";
export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const listTerms = await getLocalGlossaryList(locale);
  return (
    <div className="page container">
      <header className="page-header">
        <p className="eyebrow">A—Z</p>
        <h1>{dictionary.glossary.title}</h1>
        <p>{dictionary.glossary.description}</p>
      </header>
      <Suspense
        fallback={
          <p className="result-count" role="status">
            {dictionary.glossary.title}…
          </p>
        }
      >
        <GlossaryBrowser
          terms={listTerms}
          locale={locale}
          dictionary={dictionary}
        />
      </Suspense>
    </div>
  );
}
