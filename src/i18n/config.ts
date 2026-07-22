export const locales = ["en", "pt-BR"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = "") {
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`.replace(
    /\/$/,
    "",
  );
}

export function switchLocalePath(
  pathname: string,
  locale: Locale,
  queryString = "",
) {
  const localized = pathname.replace(/^\/(en|pt-BR)(?=\/|$)/, `/${locale}`);
  return `${localized}${queryString ? `?${queryString}` : ""}`;
}
