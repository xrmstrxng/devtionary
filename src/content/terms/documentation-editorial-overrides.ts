import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const documentationEditorialOverrides: Record<string, EditorialPair> = {
  "technical-documentation": {
    en: content({
      definition:
        "Technical Documentation is maintained information that explains a technology's design, behavior, interfaces, operation, implementation, constraints, or use to a defined technical audience.",
      purpose:
        "It makes technical knowledge transferable and actionable, reducing dependence on memory and individuals while supporting development, integration, operation, learning, and decisions.",
      when: "Create it whenever others must reliably understand or act on technical knowledge over time, assigning audience, owner, source, review trigger, and lifecycle.",
      context:
        "A critical settlement service is understood by two engineers, and on-call responders cannot diagnose delayed batches without asking them directly.",
      application:
        "The team documents architecture and boundaries, interfaces, data flow, deployment, monitoring, failure modes, runbooks, decision links, ownership, and validation dates near the code.",
      phrase:
        "Technical Documentation should tell the responder how to verify settlement lag and which action is safe, not only describe the service historically.",
      aliases: [
        "tech docs",
        "engineering documentation",
        "documentação técnica",
      ],
      confusion:
        "Technical Documentation is the broad category of technical knowledge artifacts; a Technical Specification defines intended requirements or design for particular work.",
    }),
    "pt-BR": content({
      definition:
        "Technical Documentation é informação mantida que explica design, behavior, interfaces, operação, implementation, constraints ou uso de tecnologia para público técnico definido.",
      purpose:
        "Ela torna technical knowledge transferível e acionável, reduzindo dependência de memória e pessoas e apoiando development, integration, operations, learning e decisions.",
      when: "Crie-a quando outras pessoas precisarem compreender ou agir sobre conhecimento técnico ao longo do tempo, definindo audience, owner, source, review trigger e lifecycle.",
      context:
        "Um settlement service crítico é entendido por dois engineers e on-call responders não diagnosticam delayed batches sem chamá-los.",
      application:
        "O time documenta architecture e boundaries, interfaces, data flow, deployment, monitoring, failure modes, runbooks, decisions, ownership e validation dates perto do code.",
      phrase:
        "Technical Documentation deve mostrar como verificar settlement lag e qual action é segura, não apenas descrever historicamente o service.",
      aliases: [
        "tech docs",
        "engineering documentation",
        "documentação técnica",
      ],
      confusion:
        "Technical Documentation é categoria ampla de artifacts; Technical Specification define requirements ou design pretendidos para trabalho específico.",
    }),
  },
  "api-documentation": {
    en: content({
      definition:
        "API Documentation is the consumer-facing technical information that explains an application programming interface's purpose, contracts, authentication, operations, data, errors, limits, versions, and examples.",
      purpose:
        "It enables developers to discover, evaluate, integrate, test, operate, and troubleshoot an API without relying on private implementation knowledge.",
      when: "Publish it for any API consumed across a boundary, maintaining reference and task-oriented guidance with the same lifecycle and versioning discipline as the interface.",
      context:
        "Partners can see endpoint names but cannot determine required scopes, idempotency behavior, pagination, error recovery, rate limits, or webhook verification.",
      application:
        "The team provides an overview, quickstart, credentials, operation reference, schemas, errors, workflows, examples, SDK guidance, changelog, sandbox, and support path.",
      phrase:
        "API Documentation must explain whether retrying this request is safe and how the idempotency key affects duplicate payments.",
      aliases: [
        "api docs",
        "developer api documentation",
        "documentação de api",
      ],
      confusion:
        "API Documentation is the complete consumer knowledge experience; an OpenAPI description is a machine-readable contract that can generate part of its reference.",
    }),
    "pt-BR": content({
      definition:
        "API Documentation é informação técnica para consumers que explica propósito, contracts, authentication, operations, data, errors, limits, versions e examples de uma API.",
      purpose:
        "Ela permite que developers descubram, avaliem, integrem, testem, operem e resolvam problemas sem depender de implementation knowledge privada.",
      when: "Publique-a para toda API consumida através de boundary, mantendo reference e task guidance no mesmo lifecycle e versioning da interface.",
      context:
        "Partners veem endpoint names, mas desconhecem scopes, idempotency, pagination, error recovery, rate limits e webhook verification.",
      application:
        "O time oferece overview, quickstart, credentials, operation reference, schemas, errors, workflows, examples, SDK guidance, changelog, sandbox e support path.",
      phrase:
        "API Documentation deve explicar se retry é seguro e como idempotency key afeta duplicate payments.",
      aliases: [
        "api docs",
        "developer api documentation",
        "documentação de api",
      ],
      confusion:
        "API Documentation é a experiência completa de conhecimento; OpenAPI description é contract machine-readable que gera parte da reference.",
    }),
  },
  openapi: {
    en: content({
      definition:
        "OpenAPI is a language-agnostic specification for describing HTTP APIs in a structured machine-readable document containing operations, parameters, messages, schemas, security, and related metadata.",
      purpose:
        "It creates a shared API contract that tools can validate, render, test, mock, generate code from, and use for governance across producers and consumers.",
      when: "Use OpenAPI for HTTP APIs that benefit from contract-driven collaboration and tooling, keeping the description versioned, validated, and synchronized with actual behavior.",
      context:
        "Frontend, mobile, partner, and backend teams need one precise definition of a payment endpoint's request, response, errors, and authentication.",
      application:
        "The team writes paths, operations, parameters, reusable schemas, security schemes, examples, and error responses, validates changes in CI, and checks implementation conformance.",
      phrase:
        "Update the OpenAPI schema before merging the breaking response change so consumers and compatibility checks see the new contract.",
      aliases: [
        "openapi specification",
        "oas",
        "open api",
        "especificação openapi",
      ],
      confusion:
        "OpenAPI is the formal API description specification; Swagger is the name associated with tooling and the earlier specification from which OpenAPI evolved.",
    }),
    "pt-BR": content({
      definition:
        "OpenAPI é uma specification agnóstica de linguagem para descrever HTTP APIs num documento estruturado e machine-readable com operations, parameters, messages, schemas e security.",
      purpose:
        "Ela cria API contract compartilhado que tools validam, renderizam, testam, simulam, usam para code generation e governance entre producers e consumers.",
      when: "Use OpenAPI em HTTP APIs que se beneficiem de contract-driven collaboration e tooling, mantendo description versionada, validada e sincronizada com behavior real.",
      context:
        "Times de frontend, mobile, partners e backend precisam de definição precisa de request, response, errors e authentication de payment endpoint.",
      application:
        "O time escreve paths, operations, parameters, reusable schemas, security schemes, examples e error responses, valida em CI e verifica conformance.",
      phrase:
        "Atualize OpenAPI schema antes do breaking response change para consumers e compatibility checks verem o novo contract.",
      aliases: [
        "openapi specification",
        "oas",
        "open api",
        "especificação openapi",
      ],
      confusion:
        "OpenAPI é a specification formal; Swagger é nome ligado a tooling e à specification anterior da qual OpenAPI evoluiu.",
    }),
  },
  swagger: {
    en: content({
      definition:
        "Swagger is a family of tools and conventions for designing, describing, documenting, testing, and generating clients or servers for APIs using OpenAPI descriptions.",
      purpose:
        "It turns a structured API contract into interactive reference, editors, validation, code generation, and integration workflows for developers.",
      when: "Use Swagger tools when their OpenAPI editing, UI, generation, or testing capabilities fit the API workflow, naming the specific tool to avoid ambiguity.",
      context:
        "An API team wants developers to browse operations, inspect schemas, authorize, and try sandbox requests from generated reference documentation.",
      application:
        "The team validates the OpenAPI file, serves it through Swagger UI, configures authentication and safe test servers, and uses code generation selectively with review.",
      phrase:
        "Swagger UI renders the contract for exploration; changing the UI alone does not change the API or its OpenAPI source.",
      aliases: [
        "swagger tools",
        "swagger ui",
        "swagger api tooling",
        "ferramentas swagger",
      ],
      confusion:
        "Swagger commonly refers to tools around OpenAPI; OpenAPI is the vendor-neutral specification used to describe the HTTP API contract.",
    }),
    "pt-BR": content({
      definition:
        "Swagger é uma família de tools e conventions para projetar, descrever, documentar, testar e gerar clients ou servers para APIs usando OpenAPI descriptions.",
      purpose:
        "Ele transforma API contract estruturado em interactive reference, editors, validation, code generation e integration workflows para developers.",
      when: "Use Swagger tools quando suas capabilities de OpenAPI editing, UI, generation ou testing atenderem o workflow, nomeando a tool específica para evitar ambiguidade.",
      context:
        "Um API team quer que developers naveguem operations, inspecionem schemas, autorizem e testem sandbox requests na documentation gerada.",
      application:
        "O time valida OpenAPI file, serve-a por Swagger UI, configura authentication e safe test servers e usa code generation com review.",
      phrase:
        "Swagger UI renderiza contract para exploration; mudar a UI sozinha não altera API nem sua OpenAPI source.",
      aliases: [
        "swagger tools",
        "swagger ui",
        "swagger api tooling",
        "ferramentas swagger",
      ],
      confusion:
        "Swagger normalmente se refere a tools ao redor de OpenAPI; OpenAPI é a specification vendor-neutral do HTTP API contract.",
    }),
  },
  readme: {
    en: content({
      definition:
        "A README is the primary introductory document in a repository or package that explains what it is, who it serves, how to use or develop it, and where to find deeper information.",
      purpose:
        "It gives newcomers and returning contributors a reliable entry point for orientation, setup, common workflows, status, ownership, and navigation to maintained documentation.",
      when: "Maintain one at every repository or distributable package boundary, keeping the first-use path concise and testing commands and links as the project evolves.",
      context:
        "A new engineer opens a service repository but cannot determine its responsibility, local prerequisites, startup commands, test data, deployment owner, or documentation links.",
      application:
        "The team documents purpose and boundaries, status, prerequisites, verified setup and test commands, configuration, common tasks, contribution, ownership, and links to architecture and operations.",
      phrase:
        "The README should get a contributor to a passing local test and then route advanced operation details to the runbook.",
      aliases: [
        "readme file",
        "repository readme",
        "project introduction",
        "arquivo leia-me",
      ],
      confusion:
        "A README is the concise entry point for a repository or package; a documentation site organizes broader, deeper knowledge for multiple tasks and audiences.",
    }),
    "pt-BR": content({
      definition:
        "README é o documento introdutório principal de repository ou package que explica o que ele é, para quem serve, como usar ou desenvolver e onde achar detalhes.",
      purpose:
        "Ele oferece a newcomers e contributors um entry point confiável para orientation, setup, workflows, status, ownership e navigation à documentation mantida.",
      when: "Mantenha-o em todo boundary de repository ou distributable package, deixando first-use path conciso e testando commands e links conforme o project evolui.",
      context:
        "Uma engineer abre service repository e não encontra responsabilidade, prerequisites, startup commands, test data, deployment owner ou documentation.",
      application:
        "O time documenta purpose e boundaries, status, prerequisites, setup e test commands verificados, configuration, common tasks, contribution, ownership e links.",
      phrase:
        "O README deve levar contributor a um local test aprovado e direcionar detalhes operacionais ao runbook.",
      aliases: [
        "readme file",
        "repository readme",
        "project introduction",
        "arquivo leia-me",
      ],
      confusion:
        "README é entry point conciso de repository ou package; documentation site organiza conhecimento mais amplo e profundo para tasks e audiences.",
    }),
  },
  adr: {
    en: content({
      definition:
        "ADR stands for Architecture Decision Record, a concise version-controlled document that captures one significant architecture decision, its context, considered options, rationale, status, and consequences.",
      purpose:
        "It gives teams a lightweight, searchable convention for preserving why a technical direction was chosen so later contributors can evaluate rather than rediscover it.",
      when: "Write an ADR when a decision materially affects structure, qualities, dependencies, constraints, or future options, ideally while the decision is being made.",
      context:
        "A team chooses asynchronous events over synchronous calls for settlement updates, but future engineers will otherwise see only the implementation.",
      application:
        "The author assigns a sequence number and title, records status and context, compares alternatives, states the decision and consequences, links evidence, and updates status rather than silently rewriting history.",
      phrase:
        "Add an ADR for the event-driven settlement choice so its consistency and operational tradeoffs remain visible after the implementation changes.",
      aliases: [
        "architecture decision record",
        "architecture decision log entry",
        "registro adr",
      ],
      confusion:
        "ADR is the common abbreviated document convention; RFC is typically a broader proposal circulated for discussion before a substantial decision or change.",
    }),
    "pt-BR": content({
      definition:
        "ADR significa Architecture Decision Record, um documento conciso e versionado que registra uma architecture decision relevante, contexto, opções, rationale, status e consequências.",
      purpose:
        "Ele oferece convention leve e searchable para preservar por que uma technical direction foi escolhida e permitir avaliação futura sem redescoberta.",
      when: "Escreva ADR quando decision afetar estrutura, qualities, dependencies, constraints ou future options, de preferência enquanto ela é tomada.",
      context:
        "Um time escolhe async events em vez de synchronous calls para settlement updates, mas futuros engineers veriam somente implementation.",
      application:
        "O autor atribui número e title, registra status e context, compara alternatives, declara decision e consequences, liga evidence e atualiza status sem reescrever history.",
      phrase:
        "Adicione ADR para event-driven settlement e preserve trade-offs de consistency e operations mesmo após mudanças.",
      aliases: [
        "architecture decision record",
        "architecture decision log entry",
        "registro adr",
      ],
      confusion:
        "ADR é a convention abreviada de registro decisório; RFC costuma ser proposal ampla discutida antes de decision ou change relevante.",
    }),
  },
  "architecture-decision-record": {
    en: content({
      definition:
        "An Architecture Decision Record is an immutable-in-spirit historical record of a consequential architecture choice and the forces, alternatives, rationale, and consequences surrounding it.",
      purpose:
        "It preserves organizational reasoning as part of the system's architecture, helping reviewers understand constraints, avoid repeated debates, and recognize when earlier assumptions no longer hold.",
      when: "Create a record for decisions that shape system boundaries or qualities, and supersede it with a linked new record when the decision changes rather than erasing its original context.",
      context:
        "A platform standardized tenant isolation at the schema level due to regulatory and operational constraints that are not apparent from the database layout alone.",
      application:
        "The record explains regulatory context, isolation options, evaluation criteria, chosen model, positive and negative consequences, evidence, owners, and links to later superseding decisions.",
      phrase:
        "The Architecture Decision Record explains why schema isolation was appropriate then; new regional rules may justify a superseding record.",
      aliases: [
        "architecture decision record document",
        "decision record",
        "registro de decisão arquitetural",
      ],
      confusion:
        "An Architecture Decision Record documents a decided architectural choice; an architecture diagram visualizes structures and relationships without necessarily preserving decision rationale.",
    }),
    "pt-BR": content({
      definition:
        "Architecture Decision Record é um registro histórico, imutável em espírito, de uma architecture choice e das forces, alternatives, rationale e consequences ao redor dela.",
      purpose:
        "Ele preserva organizational reasoning como parte da architecture, ajudando reviewers a entender constraints, evitar debates repetidos e reconhecer assumptions vencidas.",
      when: "Crie-o para decisions que moldam system boundaries ou qualities e substitua-o por novo registro ligado quando a decision mudar, sem apagar context original.",
      context:
        "Uma platform padronizou tenant isolation por schema devido a constraints regulatórias e operacionais invisíveis no database layout.",
      application:
        "O record explica regulatory context, isolation options, evaluation criteria, chosen model, consequences, evidence, owners e links a decisions posteriores.",
      phrase:
        "O Architecture Decision Record explica por que schema isolation serviu naquele momento; novas regras podem exigir registro superseding.",
      aliases: [
        "architecture decision record document",
        "decision record",
        "registro de decisão arquitetural",
      ],
      confusion:
        "Architecture Decision Record documenta uma architectural choice decidida; architecture diagram visualiza structures e relationships sem preservar rationale necessariamente.",
    }),
  },
  rfc: {
    en: content({
      definition:
        "RFC stands for Request for Comments, a structured proposal circulated for review and discussion before a significant technical, process, or product change is accepted and implemented.",
      purpose:
        "It makes the problem, proposal, alternatives, tradeoffs, risks, and open questions inspectable so affected people can contribute and decision-makers can build informed alignment.",
      when: "Use an RFC for changes with broad impact, irreversible cost, cross-team dependencies, or competing approaches, defining reviewers, decision owner, status, and discussion deadline.",
      context:
        "A company plans to replace its authorization model across dozens of services, affecting product teams, security, migration, operations, and external integrations.",
      application:
        "The author describes motivation and non-goals, current state, detailed proposal, alternatives, security and operational effects, rollout, unresolved questions, and decision process.",
      phrase:
        "The RFC should expose migration and compatibility costs before the organization commits to the new authorization model.",
      aliases: [
        "request for comments",
        "technical proposal",
        "engineering rfc",
        "solicitação de comentários",
      ],
      confusion:
        "An RFC proposes a change for discussion and decision; an ADR records the significant architectural decision and its consequences after or as it is made.",
    }),
    "pt-BR": content({
      definition:
        "RFC significa Request for Comments, uma proposal estruturada distribuída para review e discussion antes de technical, process ou product change relevante ser aceita e implementada.",
      purpose:
        "Ela torna problem, proposal, alternatives, trade-offs, risks e open questions inspecionáveis para contribuição e alignment informado.",
      when: "Use RFC em changes de amplo impact, custo irreversível, cross-team dependencies ou abordagens concorrentes, definindo reviewers, decision owner, status e deadline.",
      context:
        "Uma empresa substituirá authorization model em dezenas de services, afetando product teams, security, migration, operations e external integrations.",
      application:
        "O autor descreve motivation e non-goals, current state, detailed proposal, alternatives, security e operational effects, rollout, questions e decision process.",
      phrase:
        "A RFC deve expor migration e compatibility costs antes do compromisso com novo authorization model.",
      aliases: [
        "request for comments",
        "technical proposal",
        "engineering rfc",
        "solicitação de comentários",
      ],
      confusion:
        "RFC propõe change para discussion e decision; ADR registra architectural decision significativa e consequences durante ou depois da escolha.",
    }),
  },
  runbook: {
    en: content({
      definition:
        "A Runbook is an operational procedure containing validated, ordered instructions, checks, decision points, safeguards, and escalation guidance for performing or responding to a specific system task.",
      purpose:
        "It enables consistent and safe execution under routine or stressful conditions without requiring the operator to invent steps or depend on undocumented expert memory.",
      when: "Create one for recurring operations and plausible incidents where execution order, permissions, verification, rollback, or escalation matters, testing it in realistic conditions.",
      context:
        "On-call responders must drain a failing queue, preserve messages, increase consumers, verify recovery, and avoid creating duplicate settlement.",
      application:
        "The document states prerequisites and access, symptoms and scope, exact commands with safe placeholders, expected output, decision thresholds, validation, rollback, escalation, owner, and review date.",
      phrase:
        "Follow the Runbook's queue-depth checkpoint before scaling consumers so replay does not duplicate settlement work.",
      aliases: [
        "operations runbook",
        "operational procedure",
        "manual operacional",
      ],
      confusion:
        "A Runbook gives executable steps for a defined operation; a Playbook coordinates a broader response strategy that may select among several runbooks.",
    }),
    "pt-BR": content({
      definition:
        "Runbook é um procedimento operacional com instructions ordenadas e validadas, checks, decision points, safeguards e escalation guidance para task específica.",
      purpose:
        "Ele permite execução consistente e segura em condições rotineiras ou tensas sem inventar steps nem depender de expert memory não documentada.",
      when: "Crie-o para operations recorrentes e incidents plausíveis onde order, permissions, verification, rollback ou escalation importem, testando em condições realistas.",
      context:
        "On-call responders drenam failing queue, preservam messages, ampliam consumers, verificam recovery e evitam duplicate settlement.",
      application:
        "O documento declara prerequisites e access, symptoms e scope, commands com safe placeholders, expected output, thresholds, validation, rollback, escalation, owner e review date.",
      phrase:
        "Siga o checkpoint de queue depth do Runbook antes de escalar consumers para replay não duplicar settlement.",
      aliases: [
        "operations runbook",
        "operational procedure",
        "manual operacional",
      ],
      confusion:
        "Runbook fornece steps executáveis para operation definida; Playbook coordena response strategy mais ampla e pode selecionar vários runbooks.",
    }),
  },
  playbook: {
    en: content({
      definition:
        "A Playbook is a structured response guide that organizes objectives, roles, decision criteria, communication, and possible procedures for handling a class of situations.",
      purpose:
        "It helps teams coordinate complex or variable responses consistently while allowing judgment and selection among tactics, runbooks, and escalation paths.",
      when: "Create one for recurring scenarios such as incidents, security events, launches, or customer escalation where response varies but shared strategy and coordination are valuable.",
      context:
        "A suspected account takeover can range from one compromised credential to a widespread breach and involves support, security, legal, communications, and product operations.",
      application:
        "The security Playbook defines triggers and severity, leadership roles, containment options, evidence preservation, linked runbooks, communication templates, legal checkpoints, and closure criteria.",
      phrase:
        "Use the account-takeover Playbook to establish severity and roles, then choose the credential-revocation Runbook if containment requires it.",
      aliases: ["response playbook", "operations playbook", "guia de resposta"],
      confusion:
        "A Playbook guides strategy and coordination for a scenario class; a Runbook prescribes ordered operational steps for a specific task.",
    }),
    "pt-BR": content({
      definition:
        "Playbook é um response guide estruturado que organiza objectives, roles, decision criteria, communication e possíveis procedures para uma classe de situações.",
      purpose:
        "Ele ajuda times a coordenar responses complexas ou variáveis consistentemente, permitindo judgment e seleção entre tactics, runbooks e escalation paths.",
      when: "Crie-o para cenários recorrentes como incidents, security events, launches ou customer escalation onde a response varia mas strategy comum é valiosa.",
      context:
        "Suspected account takeover varia de credential individual a breach amplo e envolve support, security, legal, communications e product operations.",
      application:
        "O security Playbook define triggers e severity, leadership roles, containment options, evidence preservation, linked runbooks, templates, legal checkpoints e closure criteria.",
      phrase:
        "Use o account-takeover Playbook para severity e roles e escolha credential-revocation Runbook se containment exigir.",
      aliases: ["response playbook", "operations playbook", "guia de resposta"],
      confusion:
        "Playbook orienta strategy e coordination de uma classe de cenário; Runbook prescreve steps operacionais ordenados para task específica.",
    }),
  },
  changelog: {
    en: content({
      definition:
        "A Changelog is a chronological, version-oriented record of notable additions, changes, fixes, deprecations, removals, and security updates made to a product or package.",
      purpose:
        "It gives maintainers and consumers a durable history for understanding evolution, evaluating upgrades, troubleshooting regressions, and locating breaking changes.",
      when: "Maintain one for versioned software or APIs, updating it as changes release and grouping entries by version and impact rather than dumping raw commit messages.",
      context:
        "A library consumer needs to know which version removed a deprecated method and whether an upgrade also contains a security fix.",
      application:
        "The release process records date and version, categorizes user-relevant changes, highlights breaking behavior and migration links, credits fixes, and links detailed issues when useful.",
      phrase:
        "The Changelog should state that token parsing now rejects invalid padding and whether consumers must change their input.",
      aliases: ["change log", "version history", "histórico de alterações"],
      confusion:
        "A Changelog is a comprehensive chronological product or package history; Release Notes curate and explain one release for a target audience.",
    }),
    "pt-BR": content({
      definition:
        "Changelog é um registro cronológico e orientado a version de additions, changes, fixes, deprecations, removals e security updates relevantes num produto ou package.",
      purpose:
        "Ele oferece history durável para maintainers e consumers entenderem evolução, avaliarem upgrades, investigarem regressions e encontrarem breaking changes.",
      when: "Mantenha-o em software ou APIs versionados, atualizando a cada release e agrupando entries por version e impact em vez de despejar commit messages.",
      context:
        "Uma library consumer precisa saber qual version removeu deprecated method e se upgrade também contém security fix.",
      application:
        "O release process registra date e version, categoriza user-relevant changes, destaca breaking behavior e migration links e liga issues detalhadas.",
      phrase:
        "O Changelog deve dizer que token parsing rejeita invalid padding e se consumers precisam mudar input.",
      aliases: ["change log", "version history", "histórico de alterações"],
      confusion:
        "Changelog é history cronológica ampla; Release Notes selecionam e explicam uma release a um audience definido.",
    }),
  },
  "release-notes": {
    en: content({
      definition:
        "Release Notes are audience-focused communication describing the meaningful capabilities, changes, fixes, known issues, impacts, and actions associated with a particular release.",
      purpose:
        "They help users, administrators, operators, or developers understand what changed, why it matters, how to adopt it, and what risks or preparation require attention.",
      when: "Publish them with consequential releases, tailoring language and detail to the audience and linking migration, support, security, and reference material.",
      context:
        "An enterprise SaaS release changes permission defaults, adds delegated approval, fixes exports, and contains a known limitation for older mobile clients.",
      application:
        "Product and engineering summarize value and affected users, explain rollout and enablement, call out behavior changes and required actions, document known issues, and link deeper guidance.",
      phrase:
        "The Release Notes must tell administrators to review custom roles before delegated approval is enabled.",
      aliases: ["release announcement", "version notes", "notas de versão"],
      confusion:
        "Release Notes explain one release for its audience; a Changelog records notable changes across versions as a continuing history.",
    }),
    "pt-BR": content({
      definition:
        "Release Notes são uma comunicação focada no audience que descreve capabilities, changes, fixes, known issues, impacts e actions de uma release específica.",
      purpose:
        "Elas ajudam users, admins, operators ou developers a entender o que mudou, por que importa, como adotar e quais risks ou preparações exigem atenção.",
      when: "Publique-as com releases consequentes, adaptando language e detail ao audience e ligando migration, support, security e reference material.",
      context:
        "Uma SaaS release muda permission defaults, adiciona delegated approval, corrige exports e possui limitation em mobile clients antigos.",
      application:
        "Product e engineering resumem value e affected users, explicam rollout e enablement, destacam behavior changes e actions, documentam known issues e ligam guidance.",
      phrase:
        "As Release Notes devem orientar admins a revisar custom roles antes de habilitar delegated approval.",
      aliases: ["release announcement", "version notes", "notas de versão"],
      confusion:
        "Release Notes explicam uma release ao audience; Changelog registra changes notáveis entre versions como history contínua.",
    }),
  },
  "sequence-diagram": {
    en: content({
      definition:
        "A Sequence Diagram is an interaction diagram that shows participants and the time-ordered messages exchanged among them to realize a scenario or behavior.",
      purpose:
        "It makes dynamic collaboration visible, clarifying call order, responsibility, synchronous and asynchronous boundaries, alternatives, failures, and timing-sensitive behavior.",
      when: "Use one for scenarios whose interactions across people, components, or services are difficult to understand from static structure, keeping scope to one meaningful behavior.",
      context:
        "A payment request crosses client, API, fraud, ledger, provider, webhook, and notification services with retries and asynchronous completion.",
      application:
        "The architect identifies lifelines, orders messages, distinguishes sync calls and events, adds activation and response, and models alternate timeout and duplicate-webhook branches.",
      phrase:
        "The Sequence Diagram shows that the API responds pending before the provider webhook updates the ledger asynchronously.",
      aliases: [
        "uml sequence diagram",
        "interaction sequence",
        "diagrama de sequência",
      ],
      confusion:
        "A Sequence Diagram emphasizes time-ordered interaction for a scenario; a Component Diagram emphasizes structural components and dependencies.",
    }),
    "pt-BR": content({
      definition:
        "Sequence Diagram é um interaction diagram que mostra participants e messages trocadas em ordem temporal para realizar cenário ou behavior.",
      purpose:
        "Ele torna dynamic collaboration visível, esclarecendo call order, responsibility, sync e async boundaries, alternatives, failures e timing-sensitive behavior.",
      when: "Use-o em cenários cujas interactions entre pessoas, components ou services são difíceis de entender por static structure, limitando scope a um behavior.",
      context:
        "Um payment request cruza client, API, fraud, ledger, provider, webhook e notification services com retries e async completion.",
      application:
        "A architect identifica lifelines, ordena messages, distingue sync calls e events, adiciona activation e response e modela timeout e duplicate-webhook branches.",
      phrase:
        "O Sequence Diagram mostra API respondendo pending antes de provider webhook atualizar ledger assincronamente.",
      aliases: [
        "uml sequence diagram",
        "interaction sequence",
        "diagrama de sequência",
      ],
      confusion:
        "Sequence Diagram enfatiza interaction temporal; Component Diagram enfatiza components estruturais e dependencies.",
    }),
  },
  "component-diagram": {
    en: content({
      definition:
        "A Component Diagram is a structural diagram that represents software components, their responsibilities, provided and required interfaces, and dependencies within a system or boundary.",
      purpose:
        "It communicates how major implementation units are organized and connected so teams can reason about ownership, coupling, integration, deployment, and change impact.",
      when: "Use one when component boundaries and dependencies need shared understanding, selecting a level of abstraction and audience instead of mixing classes, services, and infrastructure indiscriminately.",
      context:
        "An order system includes checkout, pricing, inventory, payment, fulfillment, and notification capabilities whose ownership and interfaces are unclear.",
      application:
        "The architect names components by responsibility, draws directional dependencies and interfaces, marks external systems and boundaries, annotates technology only where relevant, and links dynamic views.",
      phrase:
        "The Component Diagram shows Checkout depending on Pricing's public interface, not on Pricing's internal database tables.",
      aliases: [
        "uml component diagram",
        "software component view",
        "diagrama de componentes",
      ],
      confusion:
        "A Component Diagram shows structural implementation units and dependencies; a Container Diagram in C4 shows higher-level applications and data stores that execute or persist code.",
    }),
    "pt-BR": content({
      definition:
        "Component Diagram é um structural diagram que representa software components, responsibilities, provided e required interfaces e dependencies num system boundary.",
      purpose:
        "Ele comunica como implementation units são organizadas e conectadas para raciocinar ownership, coupling, integration, deployment e change impact.",
      when: "Use-o quando component boundaries e dependencies precisarem de entendimento comum, escolhendo abstraction level e audience sem misturar classes, services e infrastructure.",
      context:
        "Um order system inclui checkout, pricing, inventory, payment, fulfillment e notification capabilities com ownership e interfaces pouco claros.",
      application:
        "A architect nomeia components por responsibility, desenha directional dependencies e interfaces, marca external systems e boundaries e liga dynamic views.",
      phrase:
        "O Component Diagram mostra Checkout dependendo da public interface de Pricing, não de suas internal database tables.",
      aliases: [
        "uml component diagram",
        "software component view",
        "diagrama de componentes",
      ],
      confusion:
        "Component Diagram mostra implementation units estruturais; Container Diagram do C4 mostra applications e data stores de nível mais alto.",
    }),
  },
  "c4-model": {
    en: content({
      definition:
        "The C4 Model is a hierarchical approach to visualizing software architecture through System Context, Container, Component, and optionally Code views at progressively deeper levels.",
      purpose:
        "It provides a shared visual vocabulary and zoom metaphor so different audiences can understand a system's environment, major executable units, internal components, and selected code structure.",
      when: "Use C4 when architecture communication benefits from consistent abstraction levels, creating only the views needed and pairing diagrams with concise descriptions and dynamic views.",
      context:
        "Executives need to see external actors and systems, while engineers need the applications, data stores, responsibilities, and service internals behind an identity platform.",
      application:
        "The team creates a System Context view, zooms into platform containers, details components inside the identity service, applies consistent notation, and maintains diagrams near decisions.",
      phrase:
        "Start with the C4 System Context for boundaries and relationships before zooming into containers and components.",
      aliases: [
        "c4 architecture model",
        "context container component code",
        "modelo c4",
      ],
      confusion:
        "C4 is a hierarchical visualization model; UML is a broader family of standardized modeling notations for structural and behavioral views.",
    }),
    "pt-BR": content({
      definition:
        "C4 Model é uma abordagem hierárquica de visualização de software architecture por System Context, Container, Component e opcionalmente Code views em profundidade crescente.",
      purpose:
        "Ele fornece visual vocabulary comum e metáfora de zoom para audiences entenderem environment, executable units, internal components e selected code structure.",
      when: "Use C4 quando architecture communication se beneficiar de abstraction levels consistentes, criando somente views necessárias e combinando diagrams a descriptions e dynamic views.",
      context:
        "Executives precisam ver actors e systems externos, enquanto engineers precisam de applications, data stores, responsibilities e internals de identity platform.",
      application:
        "O time cria System Context, aproxima platform containers, detalha components no identity service, usa notation consistente e mantém diagrams perto de decisions.",
      phrase:
        "Comece pelo C4 System Context para boundaries e relationships antes de aproximar containers e components.",
      aliases: [
        "c4 architecture model",
        "context container component code",
        "modelo c4",
      ],
      confusion:
        "C4 é visualization model hierárquico; UML é família mais ampla de modeling notations estruturais e comportamentais.",
    }),
  },
  "data-dictionary": {
    en: content({
      definition:
        "A Data Dictionary is a maintained catalog of data elements and structures that defines their names, meanings, types, formats, allowed values, relationships, lineage, ownership, and governance metadata.",
      purpose:
        "It creates shared semantic understanding of data across producers, consumers, analysts, and systems, reducing inconsistent interpretation and unsafe use.",
      when: "Maintain one for shared operational or analytical data, integrating updates with schema and governance change instead of treating it as a one-time spreadsheet.",
      context:
        "Finance, Product, and Data teams calculate active customer differently because account_status, cancellation_date, and tenant relationships are undocumented.",
      application:
        "Data owners define business and technical names, descriptions, types, nullability, enumerations, units, sensitivity, quality rules, source, transformations, consumers, and steward.",
      phrase:
        "The Data Dictionary must state whether cancellation_date is requested, effective, or processed time before analysts use it for churn.",
      aliases: [
        "metadata dictionary",
        "data element catalog",
        "dicionário de dados",
      ],
      confusion:
        "A Data Dictionary defines data elements and semantics; a database schema defines structural objects and constraints used by a database system.",
    }),
    "pt-BR": content({
      definition:
        "Data Dictionary é um catálogo mantido de data elements e structures que define names, meanings, types, formats, allowed values, relationships, lineage, ownership e governance metadata.",
      purpose:
        "Ele cria entendimento semântico comum entre producers, consumers, analysts e systems, reduzindo interpretação inconsistente e uso inseguro.",
      when: "Mantenha-o para operational ou analytical data compartilhados, integrando updates a schema e governance changes, não como spreadsheet única.",
      context:
        "Finance, Product e Data calculam active customer diferentemente porque account_status, cancellation_date e tenant relationships não estão documentados.",
      application:
        "Data owners definem business e technical names, descriptions, types, nullability, enumerations, units, sensitivity, quality rules, source, transformations e steward.",
      phrase:
        "O Data Dictionary precisa dizer se cancellation_date é request, effective ou processed time antes de calcular churn.",
      aliases: [
        "metadata dictionary",
        "data element catalog",
        "dicionário de dados",
      ],
      confusion:
        "Data Dictionary define data elements e semantics; database schema define structural objects e constraints usados pelo database system.",
    }),
  },
  "technical-specification": {
    en: content({
      definition:
        "A Technical Specification is a precise document describing the intended technical design, interfaces, constraints, qualities, implementation approach, validation, and operational implications of a change or system.",
      purpose:
        "It gives builders and reviewers a shared, testable technical contract before or during implementation and exposes ambiguity, risk, and dependencies early.",
      when: "Create one for consequential or cross-team work whose technical behavior cannot be communicated safely through a small work item, keeping it updated with accepted decisions.",
      context:
        "A tenant migration changes storage boundaries, API compatibility, event ordering, rollback, observability, capacity, and regulatory handling across services.",
      application:
        "The spec defines scope and non-goals, current and proposed design, contracts, data and failure behavior, security, migration, rollout, monitoring, test strategy, alternatives, risks, and open decisions.",
      phrase:
        "The Technical Specification must define duplicate-event handling and rollback before migration code begins.",
      aliases: [
        "technical spec",
        "engineering specification",
        "especificação técnica",
      ],
      confusion:
        "A Technical Specification describes how a solution should work technically; a Functional Specification describes externally observable behavior and functions.",
    }),
    "pt-BR": content({
      definition:
        "Technical Specification é um documento preciso que descreve technical design, interfaces, constraints, qualities, implementation approach, validation e operational implications pretendidos.",
      purpose:
        "Ela oferece a builders e reviewers um technical contract compartilhado e testável e expõe ambiguity, risk e dependencies cedo.",
      when: "Crie-a em trabalho consequente ou cross-team cujo technical behavior não caiba com segurança num work item pequeno, atualizando decisions aceitas.",
      context:
        "Uma tenant migration muda storage boundaries, API compatibility, event ordering, rollback, observability, capacity e regulatory handling.",
      application:
        "A spec define scope e non-goals, current e proposed design, contracts, data e failure behavior, security, migration, rollout, monitoring, tests, alternatives e risks.",
      phrase:
        "A Technical Specification precisa definir duplicate-event handling e rollback antes do migration code.",
      aliases: [
        "technical spec",
        "engineering specification",
        "especificação técnica",
      ],
      confusion:
        "Technical Specification descreve como solution funciona tecnicamente; Functional Specification descreve behavior e functions observáveis.",
    }),
  },
  "functional-specification": {
    en: content({
      definition:
        "A Functional Specification is a document that defines the externally observable functions, rules, inputs, outputs, states, interactions, and acceptance behavior a solution must provide.",
      purpose:
        "It aligns business, product, design, engineering, and testing on what the system should do without requiring every reader to understand its internal implementation.",
      when: "Use one when behavior is complex, regulated, contractual, or crosses teams, expressing scenarios and edge cases clearly enough to design, build, and verify.",
      context:
        "A refund capability varies by payment status, amount, currency, permissions, timing, partial history, and provider result.",
      application:
        "The specification describes actors and permissions, preconditions, workflows, calculations, states, validation, errors, notifications, audit behavior, examples, and acceptance outcomes.",
      phrase:
        "The Functional Specification states when partial refund is available and what the user sees; the technical spec explains provider orchestration.",
      aliases: [
        "functional spec",
        "behavior specification",
        "especificação funcional",
      ],
      confusion:
        "A Functional Specification defines observable behavior; a Business Requirement states the organizational need or outcome that motivates it.",
    }),
    "pt-BR": content({
      definition:
        "Functional Specification é um documento que define functions, rules, inputs, outputs, states, interactions e acceptance behavior externamente observáveis de uma solution.",
      purpose:
        "Ela alinha business, product, design, engineering e testing sobre o que system faz sem exigir entendimento da internal implementation.",
      when: "Use-a quando behavior for complexo, regulado, contratual ou cross-team, expressando cenários e edge cases com clareza para design, build e verification.",
      context:
        "Uma refund capability varia por payment status, amount, currency, permissions, timing, partial history e provider result.",
      application:
        "A specification descreve actors e permissions, preconditions, workflows, calculations, states, validation, errors, notifications, audit behavior, examples e acceptance outcomes.",
      phrase:
        "A Functional Specification diz quando partial refund está disponível e o que user vê; technical spec explica provider orchestration.",
      aliases: [
        "functional spec",
        "behavior specification",
        "especificação funcional",
      ],
      confusion:
        "Functional Specification define observable behavior; Business Requirement declara organizational need ou outcome que a motiva.",
    }),
  },
  "definition-of-ready": {
    en: content({
      definition:
        "Definition of Ready is a team's optional shared set of conditions indicating that a work item is sufficiently understood and unblocked to enter a particular workflow or planning commitment.",
      purpose:
        "It prompts useful preparation and exposes missing decisions, dependencies, evidence, or capacity without demanding certainty or becoming a bureaucratic approval gate.",
      when: "Use one when recurring readiness failures harm flow, tailoring conditions to the workflow and allowing explicit exceptions rather than blocking learning-oriented work.",
      context:
        "Items repeatedly enter implementation without an outcome, access to test data, required compliance decision, or available dependency owner.",
      application:
        "The team agrees lightweight readiness signals for outcome, examples, dependencies, design evidence, risk, and test access, reviews them during refinement, and measures whether they improve flow.",
      phrase:
        "Definition of Ready should expose the unresolved compliance dependency, not require every implementation detail before discovery ends.",
      aliases: [
        "dor",
        "ready criteria",
        "work item readiness",
        "definição de pronto para iniciar",
      ],
      confusion:
        "Definition of Ready is an optional entry heuristic created by a team; Definition of Done is Scrum's formal quality commitment for an Increment.",
    }),
    "pt-BR": content({
      definition:
        "Definition of Ready é um conjunto opcional e compartilhado de condições que indica work item suficientemente compreendido e desbloqueado para entrar num workflow ou commitment.",
      purpose:
        "Ela incentiva preparação e expõe decisions, dependencies, evidence ou capacity ausentes sem exigir certeza nem virar approval gate burocrático.",
      when: "Use-a quando failures de readiness prejudicarem flow, adaptando conditions ao workflow e permitindo exceptions explícitas em trabalho de learning.",
      context:
        "Itens entram em implementation sem outcome, test data access, compliance decision necessária ou dependency owner disponível.",
      application:
        "O time acorda sinais leves para outcome, examples, dependencies, design evidence, risk e test access, revisa-os no refinement e mede flow.",
      phrase:
        "Definition of Ready deve expor compliance dependency aberta, não exigir todo implementation detail antes de discovery terminar.",
      aliases: [
        "dor",
        "ready criteria",
        "work item readiness",
        "definição de pronto para iniciar",
      ],
      confusion:
        "Definition of Ready é entry heuristic opcional do time; Definition of Done é commitment formal do Scrum para qualidade do Increment.",
    }),
  },
  "definition-of-done": {
    en: content({
      definition:
        "Definition of Done is the formal description of the quality measures an Increment must satisfy to create shared transparency that the work is complete and usable.",
      purpose:
        "It establishes a consistent quality boundary, prevents partially completed work from being presented as finished, and makes accumulated undone work visible.",
      when: "Use it in Scrum for every Increment, following organizational standards where they exist and strengthening it as the Scrum Team improves capability.",
      context:
        "Teams call features complete after coding even though review, security checks, accessibility, migration, monitoring, and deployment readiness remain unfinished.",
      application:
        "The Scrum Team defines applicable quality measures for integration, tests, review, security, accessibility, documentation, observability, and releasability and applies them to each Increment.",
      phrase:
        "The item is not Done if its code works locally but the Increment lacks required monitoring and migration validation.",
      aliases: [
        "dod",
        "done criteria",
        "scrum definition of done",
        "definição de pronto",
      ],
      confusion:
        "Definition of Done applies quality measures to the Increment; Acceptance Criteria describe conditions for a particular backlog item or behavior.",
    }),
    "pt-BR": content({
      definition:
        "Definition of Done é a descrição formal das quality measures que um Increment deve satisfazer para transparência comum de trabalho completo e utilizável.",
      purpose:
        "Ela estabelece quality boundary consistente, evita apresentar trabalho parcial como concluído e torna undone work acumulado visível.",
      when: "Use-a no Scrum para todo Increment, seguindo organizational standards existentes e fortalecendo-a conforme o Scrum Team melhora capability.",
      context:
        "Times chamam features de completas após coding mesmo com review, security checks, accessibility, migration, monitoring e deployment readiness pendentes.",
      application:
        "O Scrum Team define quality measures para integration, tests, review, security, accessibility, documentation, observability e releasability e aplica a cada Increment.",
      phrase:
        "O item não está Done se code funciona localmente, mas Increment não possui monitoring e migration validation exigidos.",
      aliases: [
        "dod",
        "done criteria",
        "scrum definition of done",
        "definição de pronto",
      ],
      confusion:
        "Definition of Done aplica quality measures ao Increment; Acceptance Criteria descrevem condições de backlog item ou behavior específico.",
    }),
  },
  "knowledge-base": {
    en: content({
      definition:
        "A Knowledge Base is an organized, searchable, maintained repository of articles, answers, procedures, explanations, and known solutions for a defined audience or support domain.",
      purpose:
        "It lets people solve recurring questions independently and gives support or engineering teams a shared source of reviewed knowledge instead of fragmented messages and memory.",
      when: "Build one when reusable knowledge serves repeated needs, assigning taxonomy, search, authorship, review dates, feedback, analytics, and retirement practices.",
      context:
        "Customers and support agents repeatedly ask the same billing and access questions, but answers are scattered across tickets, chat, and individual notes.",
      application:
        "The team consolidates task-focused articles, standardizes labels and metadata, links related procedures, reviews accuracy, tracks unsuccessful searches, and improves content from feedback.",
      phrase:
        "Add the verified recovery procedure to the Knowledge Base and retire the conflicting article instead of linking both.",
      aliases: ["kb", "support knowledge base", "base de conhecimento"],
      confusion:
        "A Knowledge Base is the organized repository and operating practice; an FAQ is one question-and-answer content format that may exist inside it.",
    }),
    "pt-BR": content({
      definition:
        "Knowledge Base é um repository organizado, searchable e mantido de articles, answers, procedures, explanations e known solutions para audience ou support domain definido.",
      purpose:
        "Ela permite resolver questions recorrentes autonomamente e fornece a support ou engineering uma source revisada em vez de messages e memória fragmentadas.",
      when: "Crie-a quando knowledge reutilizável atender necessidades repetidas, definindo taxonomy, search, authorship, review dates, feedback, analytics e retirement.",
      context:
        "Clientes e support agents repetem billing e access questions, mas answers estão espalhadas por tickets, chat e notas individuais.",
      application:
        "O time consolida task-focused articles, padroniza labels e metadata, liga procedures, revisa accuracy, acompanha failed searches e melhora content por feedback.",
      phrase:
        "Adicione recovery procedure verificado à Knowledge Base e retire o article conflitante em vez de ligar ambos.",
      aliases: ["kb", "support knowledge base", "base de conhecimento"],
      confusion:
        "Knowledge Base é repository e prática operacional; FAQ é um content format de questions e answers que pode existir nela.",
    }),
  },
  postmortem: {
    en: content({
      definition:
        "A Postmortem is a structured, usually blameless analysis conducted after an incident or significant event to understand what happened, why defenses were insufficient, and how the system should improve.",
      purpose:
        "It converts failure into organizational learning by examining contributing conditions and decision context rather than stopping at individual error or one root cause.",
      when: "Conduct one after incidents or near misses whose impact, novelty, recurrence, or learning value warrants shared analysis, tracking improvements beyond publication.",
      context:
        "A deployment caused two hours of payment failures despite passing tests, while alerts were delayed and rollback required undocumented access.",
      application:
        "Participants reconstruct a sourced timeline, assess impact and detection, analyze technical and organizational contributors, identify what helped, define prioritized actions with owners, and review completion.",
      phrase:
        "The Postmortem should explain why the deployment could bypass the safeguard, not blame the engineer who followed the available process.",
      aliases: [
        "incident postmortem",
        "blameless postmortem",
        "post-incident review",
        "análise pós-incidente",
      ],
      confusion:
        "A Postmortem analyzes causes, context, and improvements after an event; an Incident Report primarily records facts, impact, response, and status.",
    }),
    "pt-BR": content({
      definition:
        "Postmortem é uma análise estruturada e geralmente blameless após incident ou evento relevante para entender o que ocorreu, por que defenses falharam e como system melhora.",
      purpose:
        "Ele transforma failure em organizational learning examinando contributing conditions e decision context, não parando em individual error ou uma root cause.",
      when: "Realize-o após incidents ou near misses cujo impact, novidade, recorrência ou learning value justifique análise, acompanhando improvements.",
      context:
        "Um deployment causou duas horas de payment failures apesar de tests, alerts atrasaram e rollback exigiu access não documentado.",
      application:
        "Participantes reconstroem timeline, avaliam impact e detection, analisam contributors técnicos e organizacionais, identificam o que ajudou e definem actions com owners.",
      phrase:
        "O Postmortem deve explicar por que deployment contornou safeguard, não culpar engineer que seguiu o processo disponível.",
      aliases: [
        "incident postmortem",
        "blameless postmortem",
        "post-incident review",
        "análise pós-incidente",
      ],
      confusion:
        "Postmortem analisa causas, contexto e melhorias; Incident Report registra principalmente fatos, impact, response e status.",
    }),
  },
  "incident-report": {
    en: content({
      definition:
        "An Incident Report is a factual record of an incident's scope, impact, timing, detection, response, communication, current status, and relevant evidence.",
      purpose:
        "It creates a reliable shared account for stakeholders, audit, handoff, support, and later analysis while distinguishing known facts from estimates and unanswered questions.",
      when: "Create and update one for operational, security, safety, or compliance incidents according to severity and reporting obligations, preserving timestamps and sources.",
      context:
        "A regional API outage affects payment initiation, and customers, support, leadership, and regulators need consistent facts during and after response.",
      application:
        "The incident team records identifier and severity, affected services and users, business impact, timeline, detection, actions, communications, recovery evidence, owners, and links to deeper analysis.",
      phrase:
        "The Incident Report states the confirmed outage window and marks customer count as an estimate until reconciliation completes.",
      aliases: [
        "incident record",
        "incident summary",
        "relatório de incidente",
      ],
      confusion:
        "An Incident Report documents the event and response facts; a Postmortem investigates contributing conditions and defines systemic learning actions.",
    }),
    "pt-BR": content({
      definition:
        "Incident Report é um registro factual de scope, impact, timing, detection, response, communication, current status e relevant evidence de um incident.",
      purpose:
        "Ele cria account compartilhada e confiável para stakeholders, audit, handoff, support e análise posterior, separando facts de estimates e questions.",
      when: "Crie e atualize-o em operational, security, safety ou compliance incidents conforme severity e reporting obligations, preservando timestamps e sources.",
      context:
        "Uma regional API outage afeta payment initiation e clientes, support, leadership e reguladores precisam de facts consistentes.",
      application:
        "O incident team registra identifier e severity, affected services e users, business impact, timeline, detection, actions, communications, recovery evidence e owners.",
      phrase:
        "O Incident Report declara outage window confirmado e marca customer count como estimate até reconciliation.",
      aliases: [
        "incident record",
        "incident summary",
        "relatório de incidente",
      ],
      confusion:
        "Incident Report documenta evento e response; Postmortem investiga contributing conditions e define systemic learning actions.",
    }),
  },
  "troubleshooting-guide": {
    en: content({
      definition:
        "A Troubleshooting Guide is a diagnostic document that maps observable symptoms to evidence-gathering steps, likely causes, safe corrective actions, verification, and escalation.",
      purpose:
        "It helps users or responders narrow uncertainty systematically and restore expected behavior without random changes that destroy evidence or increase impact.",
      when: "Create one for recurring, costly, or high-risk failure patterns, testing steps with the intended audience and updating it from real support and incident evidence.",
      context:
        "Customers report missing webhook deliveries, which can result from invalid signatures, disabled endpoints, repeated failures, filtering, provider delay, or local processing errors.",
      application:
        "The guide starts from symptoms, checks delivery logs and endpoint state, branches by evidence, provides reversible tests and safe fixes, confirms recovery, and states escalation data.",
      phrase:
        "The Troubleshooting Guide asks for the delivery identifier and response log before recommending endpoint changes.",
      aliases: [
        "diagnostic guide",
        "problem-solving guide",
        "guia de solução de problemas",
      ],
      confusion:
        "A Troubleshooting Guide helps diagnose among possible causes; a Runbook prescribes an ordered procedure for a known operational task or condition.",
    }),
    "pt-BR": content({
      definition:
        "Troubleshooting Guide é um documento diagnóstico que mapeia symptoms observáveis a evidence-gathering steps, likely causes, safe corrective actions, verification e escalation.",
      purpose:
        "Ele ajuda users ou responders a reduzir incerteza sistematicamente e restaurar behavior sem random changes que destroem evidence ou ampliam impact.",
      when: "Crie-o para failure patterns recorrentes, caros ou arriscados, testando steps com audience e atualizando a partir de support e incident evidence reais.",
      context:
        "Clientes reportam missing webhooks por invalid signatures, disabled endpoints, repeated failures, filtering, provider delay ou local processing errors.",
      application:
        "O guide parte de symptoms, verifica delivery logs e endpoint state, ramifica por evidence, oferece reversible tests e safe fixes, confirma recovery e define escalation data.",
      phrase:
        "O Troubleshooting Guide pede delivery identifier e response log antes de recomendar endpoint changes.",
      aliases: [
        "diagnostic guide",
        "problem-solving guide",
        "guia de solução de problemas",
      ],
      confusion:
        "Troubleshooting Guide ajuda a diagnosticar entre causes; Runbook prescreve procedure ordenada para task ou condition conhecida.",
    }),
  },
  "onboarding-documentation": {
    en: content({
      definition:
        "Onboarding Documentation is a guided set of maintained resources that helps a newcomer gain the access, context, skills, relationships, and first successful outcomes needed to participate effectively.",
      purpose:
        "It reduces time-to-contribution and inconsistent tribal transfer by making the learning path, environment, responsibilities, support, and validation explicit.",
      when: "Create it for employees, contributors, customers, or partners entering a complex product or organization, tailoring paths by role and improving them from newcomer feedback.",
      context:
        "New engineers spend weeks discovering account requests, local setup, service boundaries, deployment safety, team norms, and who can answer domain questions.",
      application:
        "The team provides role-based checklists, access owners, verified setup, architecture orientation, glossary, safe starter tasks, operational practice, mentors, milestones, and feedback points.",
      phrase:
        "Onboarding Documentation should lead a new engineer through one safe local change and review, not only list links to every internal page.",
      aliases: [
        "onboarding docs",
        "new starter guide",
        "documentação de integração",
      ],
      confusion:
        "Onboarding Documentation guides a staged newcomer journey; a README is the concise entry point to one repository or package.",
    }),
    "pt-BR": content({
      definition:
        "Onboarding Documentation é um conjunto guiado e mantido de resources que ajuda newcomer a obter access, context, skills, relationships e primeiros outcomes para participar efetivamente.",
      purpose:
        "Ela reduz time-to-contribution e tribal transfer inconsistente ao explicitar learning path, environment, responsibilities, support e validation.",
      when: "Crie-a para employees, contributors, customers ou partners entrando em produto ou organização complexa, adaptando paths por role e melhorando por feedback.",
      context:
        "Novos engineers passam semanas descobrindo account requests, local setup, service boundaries, deployment safety, team norms e domain contacts.",
      application:
        "O time fornece role-based checklists, access owners, verified setup, architecture orientation, glossary, safe starter tasks, operational practice, mentors e milestones.",
      phrase:
        "Onboarding Documentation deve conduzir newcomer por uma safe local change e review, não apenas listar links internos.",
      aliases: [
        "onboarding docs",
        "new starter guide",
        "documentação de integração",
      ],
      confusion:
        "Onboarding Documentation guia newcomer em etapas; README é entry point conciso de um repository ou package.",
    }),
  },
};
