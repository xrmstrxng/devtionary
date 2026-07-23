import type { Locale } from "./config";
import { en } from "./locales/en";
import { ptBR } from "./locales/pt-BR";

export type Dictionary = typeof en;
const dictionaries = { en, "pt-BR": ptBR };
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}
