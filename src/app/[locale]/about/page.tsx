import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  return (
    <div className="page prose-page container">
      <p className="eyebrow">DEVTIONARY / 2026</p>
      <h1>{d.about.title}</h1>
      <p className="lead">{d.about.description}</p>
      <div className="about-panel">
        <span aria-hidden>{`</>`}</span>
        <p>{d.about.body}</p>
      </div>
    </div>
  );
}
