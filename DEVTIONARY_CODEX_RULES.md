# Devtionary — Codex Rules

## 1. Contexto do produto

O **Devtionary** é um glossário moderno e contextual para pessoas desenvolvedoras, do nível júnior ao sênior, com a interface completa disponível em português e inglês.

O produto **não deve exibir os dois idiomas simultaneamente como um dicionário bilíngue**. O usuário escolhe o idioma do site e toda a experiência muda para esse idioma: navegação, títulos, descrições, definições, exemplos, filtros, mensagens, metadata e conteúdo editorial.

O nome técnico principal de cada termo permanece em inglês em ambas as versões, pois representa a forma como o termo é usado no mercado. Exemplo: `Rollback`, `Stakeholder`, `Pull Request` e `Scope Creep`.

O produto deve explicar termos, siglas e expressões em inglês e português usados em:

- desenvolvimento de software;
- arquitetura;
- banco de dados;
- Git;
- DevOps;
- cloud;
- segurança;
- qualidade;
- produto;
- design;
- documentação;
- reuniões;
- gestão;
- negócios;
- sistemas empresariais;
- comunicação com clientes e stakeholders.

O Devtionary não deve funcionar como tradutor ou mostrar blocos paralelos em português e inglês. Cada página deve apresentar o termo técnico em inglês e explicar significado, contexto profissional, exemplos de uso e relações com outros termos no idioma atualmente selecionado.

---

## 2. Objetivo técnico

Construir inicialmente uma aplicação frontend estática, simples de publicar e preparada para evoluir.

A primeira versão deve:

- ficar em um único repositório;
- não depender de API própria;
- não depender de banco de dados;
- manter termos e traduções da interface em arquivos locais versionados no Git;
- ser compatível com geração estática;
- permitir futura troca da origem dos dados sem reescrever a interface;
- aplicar SOLID, KISS e separação de responsabilidades sem excesso de abstrações.

---

## 3. Stack obrigatória

Use:

- Next.js com App Router;
- React;
- TypeScript em modo estrito;
- Tailwind CSS;
- Zod para validação dos dados locais;
- Vitest para testes unitários;
- Testing Library para testes de componentes e comportamento;
- ESLint;
- Prettier.

Bibliotecas opcionais, somente quando justificadas:

- Fuse.js para busca aproximada;
- Framer Motion para animações discretas;
- clsx e tailwind-merge para composição de classes;
- lucide-react para ícones.

Não adicionar Redux, Zustand, React Query, Axios, API própria, ORM, banco de dados ou autenticação na primeira versão.

---

## 4. Princípios arquiteturais

A arquitetura deve ser orientada a funcionalidades e domínio, usando uma versão simplificada de Feature-Sliced Design e Vertical Slice Architecture.

Regra central:

> Páginas montam. Features executam ações. Entities representam o domínio. Repositories escondem a origem dos dados. Shared contém apenas elementos genéricos.

Não copiar Clean Architecture de backend de forma literal.

Não criar por padrão:

- controllers;
- presenters;
- gateways;
- factories;
- use cases para operações triviais;
- interfaces para cada função;
- classes sem estado apenas para agrupar funções;
- abstrações que tenham apenas uma implementação sem uma razão real de mudança.

---

## 5. Estrutura de pastas esperada

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── glossary/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── categories/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── about/
│   │       └── page.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── features/
│   ├── search-terms/
│   ├── filter-terms/
│   ├── browse-categories/
│   ├── favorite-terms/
│   └── share-term/
│
├── entities/
│   ├── glossary-term/
│   └── category/
│
├── widgets/
│   ├── app-header/
│   ├── app-footer/
│   ├── glossary-browser/
│   ├── home-hero/
│   └── term-of-the-day/
│
├── shared/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── feedback/
│   ├── hooks/
│   ├── lib/
│   ├── constants/
│   ├── styles/
│   └── types/
│
├── content/
│   ├── terms/
│   └── categories.ts
│
├── i18n/
│   ├── config.ts
│   ├── dictionaries.ts
│   └── locales/
│       ├── en.ts
│       └── pt-BR.ts
│
└── data/
    ├── glossary-reader.ts
    └── local-glossary-reader.ts
```

A estrutura pode ser ajustada se houver uma justificativa técnica clara, mas deve preservar as responsabilidades.

---

## 6. Regras de dependência

Dependências permitidas:

```text
app -> widgets, features, entities, shared, data
widgets -> features, entities, shared
features -> entities, shared
entities -> shared
shared -> nenhuma camada de negócio
```

Regras:

- `shared` nunca importa de `features`, `entities`, `widgets` ou `app`;
- `entities` nunca importa de `features`, `widgets` ou `app`;
- uma feature não deve importar outra feature diretamente sem necessidade clara;
- componentes de domínio não devem depender de detalhes de armazenamento;
- páginas não devem implementar regras de busca, filtro, favoritos ou persistência;
- evitar imports profundos e circulares;
- usar arquivos `index.ts` apenas quando melhorarem a API pública do módulo, sem criar barrels globais excessivos.

---

## 7. Modelagem do domínio

A entidade principal deve representar um termo do glossário.

Exemplo mínimo:

```ts
export type ExperienceLevel = "junior" | "mid-level" | "senior" | "all";

export type TermType =
  | "technical"
  | "business"
  | "meeting"
  | "documentation"
  | "acronym"
  | "process"
  | "role"
  | "tool"
  | "architecture";

export interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  abbreviation?: string;
  pronunciation?: string;
  localizedContent: {
    en: {
      shortDefinition: string;
      fullDefinition: string;
      professionalContext?: string;
      examples: string[];
      searchableAliases?: string[];
    };
    "pt-BR": {
      shortDefinition: string;
      fullDefinition: string;
      professionalContext?: string;
      examples: string[];
      searchableAliases?: string[];
    };
  };
  categories: string[];
  level: ExperienceLevel;
  type: TermType;
  aliases: string[];
  relatedTerms: string[];
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
```

Regras:

- usar tipos explícitos;
- evitar `any`;
- validar todos os arquivos de conteúdo com Zod durante o build;
- falhar o build quando houver slug duplicado, categoria inexistente ou termo relacionado inválido;
- manter slugs em kebab-case;
- não usar IDs sequenciais dependentes de banco;
- permitir múltiplas categorias por termo.

---

## 7.1. Internacionalização obrigatória

Idiomas suportados no MVP:

- `en`;
- `pt-BR`.

Regras:

- usar rotas localizadas, preferencialmente `/{locale}/...`;
- exemplos: `/en/glossary/rollback` e `/pt-BR/glossary/rollback`;
- não renderizar português e inglês lado a lado na mesma página;
- implementar um seletor de idioma no header;
- ao trocar o idioma, preservar a rota, o termo aberto e os parâmetros de busca sempre que possível;
- manter o nome principal dos termos em inglês em todos os idiomas;
- traduzir navegação, filtros, categorias exibidas, níveis, tipos, estados vazios, mensagens, metadata, textos institucionais, definições, contextos e exemplos;
- manter dicionários de interface locais e tipados;
- não duplicar componentes por idioma;
- não espalhar condicionais como `locale === ...` pela interface;
- centralizar resolução de locale e acesso às mensagens;
- validar locale desconhecido e retornar 404 ou redirecionamento seguro;
- gerar estaticamente as duas versões das páginas;
- incluir `lang` correto no HTML e links alternativos `hreflang`;
- sitemap deve conter URLs dos dois idiomas;
- a busca deve operar sobre o nome inglês do termo e sobre o conteúdo localizado do idioma ativo;
- categorias possuem um `slug` estável e nomes/descrições localizados;
- nível e tipo usam valores internos estáveis e labels traduzidas somente na apresentação.

Não adicionar backend apenas para internacionalização. Todo o conteúdo pode permanecer local no mesmo repositório.

## 8. Origem dos dados

Na primeira versão, os termos devem ser locais.

Formato preferido:

- arquivos TypeScript ou JSON validados com Zod; ou
- Markdown/MDX com frontmatter validado.

Escolher uma única abordagem e mantê-la consistente.

Para o MVP, priorizar TypeScript ou JSON por simplicidade de tipagem, validação e busca.

Criar um contrato pequeno para leitura:

```ts
export interface GlossaryReader {
  findAll(): Promise<GlossaryTerm[]>;
  findBySlug(slug: string): Promise<GlossaryTerm | null>;
  findByCategory(category: string): Promise<GlossaryTerm[]>;
}
```

A implementação inicial deve ser local:

```text
LocalGlossaryReader
```

Não criar operações de escrita, edição ou exclusão no MVP.

---

## 9. Server Components e Client Components

Usar Server Components por padrão.

Adicionar `"use client"` apenas em componentes que precisem de:

- estado interativo;
- eventos do navegador;
- `localStorage`;
- URL dinâmica pelo cliente;
- APIs do browser;
- animações controladas pelo usuário.

Regras:

- leitura inicial dos termos deve ocorrer no servidor ou em tempo de build;
- busca e filtros podem operar no cliente sobre o conjunto carregado;
- não transformar páginas inteiras em Client Components sem necessidade;
- manter a fronteira cliente/servidor pequena e explícita;
- props enviadas a Client Components devem ser serializáveis.

---

## 10. Busca e filtros

A listagem deve permitir:

- pesquisa por termo;
- pesquisa por sigla;
- pesquisa pelo conteúdo localizado do idioma ativo;
- pesquisa por alias;
- filtro por categoria;
- filtro por nível;
- filtro por tipo;
- ordenação alfabética;
- filtro por letra inicial;
- limpeza de todos os filtros.

A URL deve representar o estado compartilhável dos filtros, por exemplo:

```text
/glossary?query=deploy&category=devops&level=junior
```

Regras:

- normalizar caixa e acentos;
- aplicar debounce leve somente se necessário;
- evitar requisições de rede para busca;
- iniciar com busca local simples;
- adicionar Fuse.js apenas se houver benefício real;
- mostrar quantidade de resultados;
- apresentar estado vazio útil;
- preservar acessibilidade por teclado.

---

## 11. Favoritos

Favoritos são opcionais no primeiro marco de implementação.

Quando implementados:

- usar `localStorage`;
- isolar persistência atrás de um contrato pequeno;
- tratar indisponibilidade do browser;
- evitar erro de hidratação;
- não exigir login;
- permitir filtrar somente favoritos.

---

## 12. Páginas mínimas

### Home

Deve conter:

- hero;
- busca principal;
- categorias em destaque;
- termo do dia;
- termos populares ou em destaque;
- proposta de valor do projeto.

### Glossário

Deve conter:

- busca;
- filtros;
- listagem responsiva;
- ordenação;
- índice alfabético;
- estado vazio;
- drawer de filtros no mobile.

### Página do termo

Deve conter, no idioma selecionado:

- nome técnico do termo em inglês;
- sigla, quando houver;
- pronúncia, quando houver;
- categoria;
- nível;
- tipo;
- definição curta;
- definição aprofundada;
- contexto profissional;
- exemplos no idioma selecionado;
- termos relacionados;
- ação de copiar link;
- metadata adequada.

### Categoria

Deve conter:

- nome e descrição da categoria;
- quantidade de termos;
- listagem de termos relacionados;
- navegação de retorno.

### Sobre

Deve explicar o objetivo do Devtionary e como o conteúdo é organizado.

---

## 13. Categorias iniciais

Use inicialmente:

- Development;
- Architecture;
- Database;
- Git;
- DevOps;
- Cloud;
- Security;
- Quality;
- Product;
- Design;
- Agile & Meetings;
- Management;
- Business;
- Documentation;
- Corporate Systems.

Não criar subcategorias no MVP, salvo necessidade real.

---

## 14. Design system

A interface deve combinar tecnologia, ambiente noturno, pixel art sutil e elementos fofos, sem comprometer a leitura.

Direção visual:

- fundo azul-marinho escuro;
- superfícies em azul profundo;
- destaque principal verde-mint;
- destaque secundário azul-claro;
- pequenos acentos coral e roxo;
- bordas discretas;
- cards com profundidade leve;
- cantos arredondados moderados;
- animações rápidas e suaves;
- elementos pixelados apenas como detalhe visual.

Paleta inicial:

```css
:root {
  --background: #0c1728;
  --surface: #13243a;
  --surface-elevated: #1b3049;
  --text-primary: #e6f1f4;
  --text-secondary: #9fb6c4;
  --text-muted: #6f8799;
  --primary: #79e6c4;
  --primary-hover: #9af0d6;
  --secondary: #82b7e8;
  --accent: #ff9777;
  --purple: #a79be8;
  --border: #29445e;
}
```

Tipografia:

- fonte principal legível e moderna;
- fonte monoespaçada para termos, siglas, comandos e detalhes técnicos;
- fonte pixelada somente em logo ou microdetalhes, nunca em textos longos.

Regras visuais:

- mobile first;
- contraste acessível;
- foco visível;
- sem excesso de glow;
- sem animações longas;
- sem layout quebrado em telas pequenas;
- não usar a imagem de referência como background integral;
- usar a referência apenas para orientar clima, paleta e pequenos elementos decorativos.

---

## 15. Componentes esperados

Exemplos:

```text
AppHeader
AppFooter
SearchInput
SearchSuggestions
CategoryCard
CategoryBadge
TermCard
TermDefinition
TermExamples
RelatedTerms
ExperienceLevelBadge
LanguageSwitcher
AlphabeticalIndex
FiltersPanel
FiltersDrawer
EmptySearchState
TermOfTheDay
PopularTerms
FavoriteButton
CopyTermLinkButton
```

Regras:

- componentes pequenos e coesos;
- evitar componentes genéricos prematuros;
- extrair componente quando houver reutilização real ou responsabilidade própria;
- não passar dezenas de props quando um objeto de domínio for mais adequado;
- não acoplar componentes de UI à origem dos dados;
- manter acessibilidade semântica.

---

## 16. SOLID aplicado ao frontend

### SRP

Cada módulo deve ter uma responsabilidade clara.

Não misturar no mesmo componente:

- leitura de dados;
- persistência;
- filtro;
- modal;
- layout completo;
- regras de domínio.

### OCP

Filtros, categorias e badges devem ser orientados por configuração quando isso evitar condicionais espalhadas.

### LSP

Implementações de contratos, como `GlossaryReader`, devem preservar o comportamento esperado.

### ISP

Preferir contratos pequenos e específicos.

### DIP

Componentes e features não devem conhecer detalhes de arquivo, API ou `localStorage` quando esse detalhe puder mudar.

Não aplicar SOLID mecanicamente. KISS tem prioridade quando a abstração não oferece benefício real.

---

## 17. KISS e YAGNI

Não implementar agora:

- API própria;
- banco de dados;
- autenticação;
- painel administrativo;
- sistema de permissões;
- comentários;
- colaboração em tempo real;
- editor visual;
- microsserviços;
- microfrontends;
- internacionalização complexa;
- analytics avançado;
- CMS;
- fila;
- cache distribuído.

Preparar pontos de evolução sem implementar infraestrutura futura.

---

## 18. Estado e gerenciamento de dados

Prioridade:

1. estado derivado;
2. parâmetros da URL;
3. estado local com `useState`;
4. contextos pequenos somente quando necessários;
5. biblioteca global apenas se a complexidade futura justificar.

Regras:

- não duplicar estado derivável;
- filtros compartilháveis devem ficar na URL;
- evitar Context global para tudo;
- não armazenar toda a lista filtrada em estado se ela puder ser calculada com `useMemo`;
- não usar `useEffect` para cálculos puros.

---

## 19. Tratamento de erros

- criar `not-found.tsx` para slugs inexistentes;
- validar conteúdo no build;
- exibir mensagens úteis para estados vazios;
- impedir que um termo inválido derrube silenciosamente a aplicação;
- preferir falha explícita em desenvolvimento;
- evitar `try/catch` que apenas oculta o erro;
- documentar erros de validação de conteúdo.

---

## 20. Acessibilidade

Obrigatório:

- HTML semântico;
- labels em inputs;
- navegação por teclado;
- foco visível;
- contraste adequado;
- `aria-label` somente quando necessário;
- botões devem ser `<button>`;
- links devem ser `<a>` ou `Link`;
- drawers e modais devem controlar foco;
- respeitar `prefers-reduced-motion`;
- não depender somente de cor para comunicar estado.

---

## 21. SEO e metadata

- metadata global localizada;
- metadata localizada por página de termo;
- título e descrição únicos em cada idioma;
- Open Graph localizado;
- URLs legíveis com locale;
- links alternativos `hreflang`;
- sitemap com URLs de `en` e `pt-BR`;
- robots.txt;
- conteúdo principal disponível sem depender de interação;
- páginas dos termos geradas estaticamente quando possível.

---

## 22. Performance

- priorizar geração estática;
- evitar JavaScript desnecessário no cliente;
- usar imagens otimizadas;
- evitar bibliotecas grandes para tarefas simples;
- lazy-load apenas quando fizer sentido;
- não usar animações pesadas;
- não carregar todos os elementos decorativos em alta resolução;
- manter boa experiência em dispositivos modestos.

---

## 23. Testes

Cobrir comportamentos importantes, não detalhes internos.

Testes mínimos:

- normalização de busca;
- busca por sigla;
- busca pelo conteúdo localizado do idioma ativo;
- busca por alias;
- filtro por categoria;
- filtro por nível;
- combinação de filtros;
- limpeza de filtros;
- leitura de parâmetros da URL;
- slug inexistente;
- validação de conteúdo;
- links de termos relacionados;
- favoritos, quando implementados.

Não testar:

- classes CSS específicas;
- detalhes privados de implementação;
- snapshots gigantes;
- componentes triviais sem comportamento.

---

## 24. Qualidade do código

- TypeScript estrito;
- sem `any` salvo justificativa documentada;
- nomes claros e em inglês;
- funções pequenas;
- early return quando melhorar leitura;
- evitar booleanos ambíguos;
- remover código morto;
- não deixar `TODO` sem contexto;
- comentários devem explicar decisões, não repetir o código;
- imports organizados;
- lint, testes e build devem passar antes de concluir.

---

## 25. Conteúdo inicial

Criar entre 30 e 50 termos distribuídos entre as categorias.

Incluir obrigatoriamente exemplos como:

- API;
- endpoint;
- payload;
- request;
- response;
- deploy;
- rollback;
- hotfix;
- CI/CD;
- pull request;
- merge conflict;
- branch;
- commit;
- database migration;
- cache;
- queue;
- technical debt;
- scalability;
- availability;
- stakeholder;
- backlog;
- sprint;
- daily;
- retrospective;
- scope creep;
- MVP;
- ETA;
- SLA;
- acceptance criteria;
- proof of concept;
- legacy system.

Cada termo deve ter conteúdo útil, curto o suficiente para leitura rápida e detalhado o suficiente para contexto real.

---

## 26. Git e commits

- commits pequenos e coesos;
- mensagens em Conventional Commits;
- não misturar refatoração ampla com feature;
- não commitar arquivos gerados ou segredos;
- manter `.env.example` apenas se houver variáveis;
- não criar variáveis de ambiente sem necessidade.

Exemplos:

```text
feat: add glossary search and category filters
feat: add static term detail pages
refactor: isolate local glossary reader
fix: preserve filters in query parameters
test: cover normalized glossary search
```

---

## 27. Critérios de conclusão

Uma tarefa só está concluída quando:

- a funcionalidade atende ao requisito;
- o código respeita as fronteiras arquiteturais;
- não há abstração desnecessária;
- o layout é responsivo;
- a acessibilidade básica foi verificada;
- testes relevantes foram adicionados;
- lint passa;
- testes passam;
- build passa;
- não existem erros no console;
- a documentação foi atualizada quando necessário.

---

## 28. Conduta esperada do Codex

Antes de implementar:

1. ler este arquivo completamente;
2. inspecionar a estrutura atual do projeto;
3. identificar padrões existentes;
4. apresentar um plano resumido;
5. apontar decisões ou riscos relevantes;
6. só então implementar.

Durante a implementação:

- preservar nomenclaturas e convenções existentes;
- evitar reescrever arquivos não relacionados;
- não adicionar dependências sem explicar a necessidade;
- não criar infraestrutura futura por antecipação;
- executar lint, testes e build;
- corrigir erros encontrados dentro do escopo.

Ao concluir:

- resumir alterações;
- listar arquivos principais modificados;
- informar comandos executados;
- informar testes realizados;
- registrar limitações ou próximos passos reais.
