import type { MetadataRoute } from "next";
import { categories } from "@/content/categories";
import { glossaryReader } from "@/data/local-glossary-reader";
import { locales } from "@/i18n/config";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://devtionary.dev";
  const terms = await glossaryReader.findAll();
  return locales.flatMap((locale) =>
    [
      "",
      "/glossary",
      "/about",
      ...categories.map((c) => `/categories/${c.slug}`),
      ...terms.map((t) => `/glossary/${t.slug}`),
    ].map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
