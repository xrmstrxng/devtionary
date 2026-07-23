# Devtionary

A bilingual, contextual glossary for developers and software teams. The MVP is fully static, with localized routes for English and Brazilian Portuguese. Technical term names stay in English while interface, definitions, examples, metadata, and labels follow the active locale.

## Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS, Zod, Vitest, Testing Library, ESLint, and Prettier.

## Architecture

The project uses a lightweight feature/domain structure: `app` composes routes, `widgets` compose sections, `features` own user actions, `entities` define domain models, `data` hides content access, and `shared` contains generic presentation utilities. `LocalGlossaryReader` is the only content source and can later be replaced without coupling UI components to storage.

Internationalization is route-based (`/en/...` and `/pt-BR/...`). Typed local dictionaries centralize UI text, and each term stores localized editorial content. Pages are shared across locales and statically generated.

```text
src/
  app/          routes, layouts, SEO files
  content/      validated terms, categories, and thematic catalog groups
  data/         GlossaryReader and local implementation
  entities/     Zod schemas and domain types
  features/     search/filter and sharing behavior
  i18n/         locale config and typed dictionaries
  shared/       reusable UI and labels
  widgets/      header, footer, glossary browser
```

## Run locally

Requires Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Other commands:

```bash
npm run typecheck
npm run lint
npm run test
npm run test:watch
npm run format
npm run format:check
npm run build
npm start
```

## Content workflow

The catalog currently contains 737 unique terms. Core hand-authored entries live in `src/content/terms.ts`; the original expansion lives in `src/content/terms/expanded-catalog.ts`, and the deeper Frontend, observability, messaging, distributed systems, performance, integrations, data, corporate systems, product, and Git groups live in `src/content/terms/extra-catalog.ts`. Entries shared by multiple areas are consolidated by official name, preserve existing slugs, and receive all relevant categories. Equivalent abbreviations such as SLI, SLO, MTTR, RPO, UI, UX, BFF, CAC, LTV, and QA are searchable aliases of their canonical entries.

To add a term, place it in the appropriate thematic group and add a specific bilingual definition when the default domain description is not sufficient. Use a unique kebab-case slug, an existing category, both localized definitions, and only valid related-term slugs. Every localized entry is enriched with what it is, purpose, when it matters, a contextual practical example, and a professional phrase. Zod and cross-reference validation run whenever the data module loads, including tests and builds. Validation rejects duplicate IDs, slugs and names, invalid categories and relationships, self-relations, empty aliases, incomplete editorial structures, and provisional text.

To add a category, add its stable slug, localized name, and localized description to `src/content/categories.ts`; it can then be referenced by terms. Also consider whether it belongs among the six home-page highlights.

## Publishing

Run `npm run build`, then deploy the repository to any Next.js-compatible platform such as Vercel. No database, API, secrets, or environment variables are required. Update `metadataBase` and sitemap hostname if using a domain other than `devtionary.dev`.

## MVP scope

Search and filters run locally and synchronize with the URL. The release intentionally excludes authentication, favorites, CMS, analytics, fuzzy search, and editorial tooling. Content updates currently require a code change and deployment.
