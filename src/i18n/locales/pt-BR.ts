import type { en } from "./en";

type WidenStrings<T> = T extends string
  ? string
  : { [K in keyof T]: WidenStrings<T[K]> };
type Dictionary = WidenStrings<typeof en>;

export const ptBR: Dictionary = {
  nav: {
    home: "Início",
    categories: "Principais categorias",
    glossary: "Glossário",
    about: "Sobre",
  },
  common: {
    browse: "Explorar glossário",
    back: "Voltar ao glossário",
    terms: "termos",
    copy: "Copiar link",
    copied: "Copiado!",
    pagination: "Paginação",
    previous: "Anterior",
    next: "Próxima",
    page: "Página",
  },
  home: {
    eyebrow: "Um guia de campo para times de software",
    title: "O vocabulário que devs realmente usam.",
    description:
      "Entenda linguagem técnica, rituais de equipe e contexto de negócio sem sair da conversa.",
    searchPlaceholder: "Busque API, rollback, stakeholder…",
    categories: "Explore por categoria",
    categoriesLabel: "Categorias",
    featured: "Vale conhecer",
    daily: "Termo do dia",
    whyTitle: "Feito para contexto, não decoreba",
    why: "Definições claras, exemplos realistas e o contexto profissional por trás das palavras usadas por times modernos de produto.",
  },
  glossary: {
    title: "Glossário de desenvolvimento",
    description: "Busque e filtre a linguagem do trabalho com software.",
    search: "Buscar termos",
    placeholder: "Nome, sigla, alias ou significado…",
    filters: "Filtros",
    category: "Categoria",
    level: "Nível",
    type: "Tipo",
    letter: "Começa com",
    all: "Todos",
    allCategories: "Todas as categorias",
    clear: "Limpar filtros",
    results: "resultados",
    found: "termos encontrados",
    activeFilters: "Filtros ativos",
    allLetters: "Todas",
    emptyTitle: "Nenhum termo encontrado",
    empty: "Tente uma busca mais ampla ou limpe os filtros.",
    openFilters: "Abrir filtros",
    closeFilters: "Fechar filtros",
  },
  term: {
    definition: "O que é",
    deepDive: "Entenda",
    purpose: "Para que serve",
    purposeLabel: "UTILIDADE",
    whenToUse: "Quando usar",
    contextLabel: "CONTEXTO",
    practicalExample: "Exemplo prático",
    exampleLabel: "EXEMPLO",
    exampleContext: "Contexto",
    exampleApplication: "Aplicação",
    professionalPhrase: "Como aparece no trabalho",
    workLabel: "TRABALHO",
    commonConfusions: "Diferenças importantes",
    comparisonLabel: "COMPARAÇÃO",
    context: "Contexto profissional",
    examples: "Exemplos",
    related: "Termos relacionados",
    level: "Nível",
    type: "Tipo",
    pronunciation: "Pronúncia",
  },
  about: {
    title: "Sobre o Devtionary",
    description:
      "Software tem uma linguagem própria. O Devtionary ajuda você a participar da conversa.",
    body: "Cada verbete mantém o termo técnico em inglês e explica como ele é usado de verdade. O conteúdo é organizado por categoria, nível de experiência e tipo, permitindo ir de uma resposta rápida a um contexto mais profundo.",
  },
  footer: "Feito para devs curiosos e times colaborativos.",
  metadata: {
    title: "Devtionary — Vocabulário dev em contexto",
    description:
      "Um glossário moderno e contextual para pessoas desenvolvedoras e times de software.",
  },
};
