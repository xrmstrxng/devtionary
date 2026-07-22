import type { GlossaryTerm } from "@/entities/glossary-term/model";

export const forbiddenGenericPatterns = [
  /is a recognized (?:acronym|concept|technical|process|business|architecture)/i,
  /gives teams? a (?:shared way|precise name)/i,
  /exact behavior depends on the (?:surrounding )?system/i,
  /professionals discuss .* when designing, operating, reviewing, or improving/i,
  /before the next (?:release|delivery)/i,
  /helps teams make concrete decisions related to/i,
  /a software team encounters a decision or problem involving/i,
  /é um (?:acronym|concept|technical|process|business|architecture) reconhecido/i,
  /d[aá] ao time (?:uma linguagem comum|um nome preciso)/i,
  /o comportamento exato depende do sistema/i,
  /profissionais discutem .* ao projetar, operar, revisar ou melhorar/i,
  /antes da próxima entrega/i,
  /ajuda o time a tomar decisões concretas ligadas a/i,
  /um time de software encontra uma decisão ou um problema envolvendo/i,
];

export type EditorialIssue = {
  slug: string;
  locale: "en" | "pt-BR";
  kind:
    | "generic-pattern"
    | "duplicate-definition"
    | "duplicate-example"
    | "duplicate-phrase"
    | "missing-acronym-expansion";
  detail: string;
};

export function auditEditorialSpecificity(terms: GlossaryTerm[]) {
  const issues: EditorialIssue[] = [];
  const seenByLocale = {
    en: {
      definition: new Map<string, string>(),
      example: new Map<string, string>(),
      phrase: new Map<string, string>(),
    },
    "pt-BR": {
      definition: new Map<string, string>(),
      example: new Map<string, string>(),
      phrase: new Map<string, string>(),
    },
  };
  for (const term of terms) {
    for (const locale of ["en", "pt-BR"] as const) {
      const content = term.localizedContent[locale];
      const text = [
        content.shortDefinition,
        content.fullDefinition,
        content.professionalContext,
        content.purpose,
        content.whenToUse,
        content.practicalExample?.context,
        content.practicalExample?.application,
        content.professionalPhrase,
      ].join(" ");
      for (const pattern of forbiddenGenericPatterns)
        if (pattern.test(text))
          issues.push({
            slug: term.slug,
            locale,
            kind: "generic-pattern",
            detail: pattern.source,
          });

      const values = {
        definition: content.shortDefinition.trim().toLocaleLowerCase(locale),
        example:
          `${content.practicalExample?.context ?? ""} ${content.practicalExample?.application ?? ""}`
            .trim()
            .toLocaleLowerCase(locale),
        phrase: (content.professionalPhrase ?? "")
          .trim()
          .toLocaleLowerCase(locale),
      };
      for (const [field, value] of Object.entries(values) as Array<
        [keyof typeof values, string]
      >) {
        if (!value) continue;
        const seen = seenByLocale[locale][field];
        const previousSlug = seen.get(value);
        if (previousSlug)
          issues.push({
            slug: term.slug,
            locale,
            kind:
              field === "definition"
                ? "duplicate-definition"
                : field === "example"
                  ? "duplicate-example"
                  : "duplicate-phrase",
            detail: `Same as ${previousSlug}`,
          });
        else seen.set(value, term.slug);
      }

      if (
        term.type === "acronym" &&
        term.term === (term.abbreviation ?? term.term) &&
        ![...term.aliases, ...(content.searchableAliases ?? [])].some((alias) =>
          alias.trim().includes(" "),
        )
      )
        issues.push({
          slug: term.slug,
          locale,
          kind: "missing-acronym-expansion",
          detail: term.term,
        });
    }
  }
  return issues;
}
