import type { Locale } from "@/i18n/config";
const labels = {
  level: {
    junior: { en: "Junior", "pt-BR": "Júnior" },
    "mid-level": { en: "Mid-level", "pt-BR": "Pleno" },
    senior: { en: "Senior", "pt-BR": "Sênior" },
    all: { en: "All levels", "pt-BR": "Todos os níveis" },
  },
  type: {
    technical: { en: "Technical", "pt-BR": "Técnico" },
    business: { en: "Business", "pt-BR": "Negócios" },
    meeting: { en: "Meeting", "pt-BR": "Reunião" },
    documentation: { en: "Documentation", "pt-BR": "Documentação" },
    acronym: { en: "Acronym", "pt-BR": "Sigla" },
    process: { en: "Process", "pt-BR": "Processo" },
    role: { en: "Role", "pt-BR": "Papel" },
    tool: { en: "Tool", "pt-BR": "Ferramenta" },
    architecture: { en: "Architecture", "pt-BR": "Arquitetura" },
    concept: { en: "Concept", "pt-BR": "Conceito" },
    technology: { en: "Technology", "pt-BR": "Tecnologia" },
    protocol: { en: "Protocol", "pt-BR": "Protocolo" },
    pattern: { en: "Pattern", "pt-BR": "Padrão" },
  },
} as const;
export function labelFor(
  group: keyof typeof labels,
  value: string,
  locale: Locale,
) {
  const item = labels[group][value as keyof (typeof labels)[typeof group]] as
    Record<Locale, string> | undefined;
  return item?.[locale] ?? value;
}
