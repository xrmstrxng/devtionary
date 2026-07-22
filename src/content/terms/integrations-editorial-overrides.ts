import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const integrationsEditorialOverrides: Record<string, EditorialPair> = {
  integration: {
    en: content({
      definition:
        "Integration is the designed connection between independently bounded systems or components so they exchange data, invoke capabilities, and coordinate outcomes through an explicit contract.",
      purpose:
        "It enables separate ownership and technology to participate in one business flow while making translation, reliability, security, and change responsibilities visible.",
      when: "Design an integration whenever a capability or record crosses a boundary, choosing synchronous or asynchronous interaction and defining contract, ownership, identity, failure, retries, idempotency, observability, versioning, and recovery.",
      context:
        "An order platform must send paid orders to a separately operated warehouse system and receive shipment progress without sharing its database.",
      application:
        "The teams define versioned order and shipment contracts, stable identifiers, authenticated delivery, idempotent handlers, terminal error handling, reconciliation, service objectives, test environments, and owners on both sides.",
      phrase:
        "This Integration owns the contract and recovery path between orders and warehouse; direct table access would hide that boundary.",
      aliases: [
        "system integration",
        "software integration",
        "integração de sistemas",
      ],
      confusion:
        "Integration is the overall connection and operating agreement between boundaries; an API is one interface mechanism that may implement part of it.",
    }),
    "pt-BR": content({
      definition:
        "Integration é a conexão projetada entre systems ou components com boundaries independentes para exchange data, invocar capabilities e coordenar outcomes por contract explícito.",
      purpose:
        "Ela permite que ownership e technology separados participem de um business flow, tornando translation, reliability, security e change responsibilities visíveis.",
      when: "Projete-a quando capability ou record cruzar boundary, escolhendo sync ou async interaction e definindo contract, ownership, identity, failure, retries, idempotency, observability, versioning e recovery.",
      context:
        "Uma order platform envia paid orders a warehouse system separado e recebe shipment progress sem compartilhar database.",
      application:
        "Os times definem versioned contracts, stable IDs, authenticated delivery, idempotent handlers, terminal errors, reconciliation, objectives, test environments e owners.",
      phrase:
        "Esta Integration possui contract e recovery path entre orders e warehouse; direct table access esconderia boundary.",
      aliases: [
        "system integration",
        "software integration",
        "integração de sistemas",
      ],
      confusion:
        "Integration é a conexão e operating agreement completos; API é um interface mechanism que pode implementá-la parcialmente.",
    }),
  },
  "third-party-integration": {
    en: content({
      definition:
        "Third-Party Integration is a system connection to a capability, data source, or platform owned and operated outside the integrating organization's direct control.",
      purpose:
        "It lets a product use specialized external capabilities while explicitly managing dependency risk, contractual limits, privacy, security, cost, and provider-driven change.",
      when: "Adopt one after assessing build-versus-buy and vendor risk, defining data sharing, credentials, quotas, versions, service objectives, monitoring, failure behavior, reconciliation, support, exit, and replacement plans.",
      context:
        "Checkout relies on an external payment processor whose API, webhooks, rate limits, incidents, and settlement records are controlled by another company.",
      application:
        "The service isolates a provider adapter, stores provider IDs, uses idempotency and signed webhooks, bounds timeout and retry, monitors quotas and status, reconciles settlements, and keeps a documented incident and migration path.",
      phrase:
        "Treat the payment provider as a Third-Party Integration with uncertain outcomes and reconciliation, not as a local function call.",
      aliases: [
        "vendor integration",
        "external-provider integration",
        "integração de terceiros",
      ],
      confusion:
        "Third-Party Integration emphasizes external ownership and reduced control; an internal Integration connects boundaries within the same organization even if teams differ.",
    }),
    "pt-BR": content({
      definition:
        "Third-Party Integration é a conexão com capability, data source ou platform pertencente e operada fora do direct control da organization integradora.",
      purpose:
        "Ela permite usar external capabilities especializadas, gerenciando dependency risk, contractual limits, privacy, security, cost e provider-driven change.",
      when: "Adote-a após build-versus-buy e vendor risk assessment, definindo data sharing, credentials, quotas, versions, objectives, monitoring, failures, reconciliation, support e exit plan.",
      context:
        "Checkout depende de external payment processor cuja API, webhooks, rate limits, incidents e settlement records pertencem a outra company.",
      application:
        "O service isola provider adapter, guarda IDs, usa idempotency e signed webhooks, limita timeout e retry, monitora quotas e status, reconcilia settlements e mantém migration path.",
      phrase:
        "Trate payment provider como Third-Party Integration com uncertain outcomes e reconciliation, não como local call.",
      aliases: [
        "vendor integration",
        "external-provider integration",
        "integração de terceiros",
      ],
      confusion:
        "Third-Party Integration enfatiza external ownership; internal Integration conecta boundaries da mesma organization.",
    }),
  },
  "external-service": {
    en: content({
      definition:
        "External Service is a network-accessed service outside a component's ownership and deployment boundary whose behavior, availability, latency, and change schedule are independently controlled.",
      purpose:
        "The label makes remote dependency assumptions explicit so callers design for partial failure, security, compatibility, observability, and operational coordination.",
      when: "Classify a dependency as external whenever the calling team cannot atomically deploy, inspect, or recover it, even if another team in the same company operates it.",
      context:
        "A checkout service calls the tax service over the network; the tax team releases independently and may be slow or unavailable while checkout remains healthy.",
      application:
        "Checkout uses a versioned client boundary, propagates deadlines, classifies failures, applies bounded retry and circuit breaking, validates responses, measures dependency objectives, and defines a safe degraded path.",
      phrase:
        "The tax API is an External Service to checkout, so its timeout and failure semantics belong in the checkout design.",
      aliases: [
        "remote service dependency",
        "external dependency service",
        "serviço externo",
      ],
      confusion:
        "An External Service is defined relative to an ownership or deployment boundary; a Third-Party Integration specifically involves an outside organization or vendor.",
    }),
    "pt-BR": content({
      definition:
        "External Service é um network-accessed service fora do ownership e deployment boundary de um component, com behavior, availability, latency e changes controlados independentemente.",
      purpose:
        "O rótulo explicita remote dependency assumptions para callers projetarem partial failure, security, compatibility, observability e operational coordination.",
      when: "Classifique-o como external quando calling team não puder deployar, inspecionar ou recuperar atomicamente a dependency, mesmo se outro internal team a operar.",
      context:
        "Checkout chama tax service por network; tax team publica independentemente e pode ficar lento enquanto checkout está healthy.",
      application:
        "Checkout usa versioned client boundary, propaga deadlines, classifica failures, limita retry, aplica circuit breaker, valida responses e define degraded path.",
      phrase:
        "Tax API é External Service para checkout; timeout e failure semantics pertencem ao checkout design.",
      aliases: [
        "remote service dependency",
        "external dependency service",
        "serviço externo",
      ],
      confusion:
        "External Service é relativo a ownership ou deployment boundary; Third-Party Integration envolve outra organization ou vendor.",
    }),
  },
  sdk: {
    en: content({
      definition:
        "SDK, short for Software Development Kit, is a packaged set of libraries, tools, documentation, examples, types, and sometimes runtime components for building applications against a platform or capability.",
      purpose:
        "It gives developers a supported integration path that encodes protocol details, common workflows, validation, and tooling for a target language or environment.",
      when: "Provide or adopt an SDK when integration complexity or repeated use justifies a maintained developer surface, evaluating versioning, generated versus handwritten code, dependencies, security, observability, compatibility, and support.",
      context:
        "A payments platform serves several languages and wants clients to handle authentication, idempotency, pagination, errors, and webhook verification consistently.",
      application:
        "The SDK exposes typed operations, secure defaults and explicit configuration, preserves provider request IDs, documents retry boundaries, follows semantic versioning, tests against the API contract, publishes provenance, and offers migration guides.",
      phrase:
        "Upgrade the SDK for the new API contract and review its migration notes before enabling the changed payment behavior.",
      aliases: [
        "Software Development Kit",
        "developer kit",
        "kit de desenvolvimento de software",
      ],
      confusion:
        "An SDK may contain libraries plus tools, documentation, and workflows; a Client Library is the reusable code component that calls a service or protocol.",
    }),
    "pt-BR": content({
      definition:
        "SDK, sigla de Software Development Kit, é um package de libraries, tools, documentation, examples, types e às vezes runtime components para construir apps sobre uma platform ou capability.",
      purpose:
        "Ele oferece supported integration path que codifica protocol details, common workflows, validation e tooling para target language ou environment.",
      when: "Forneça ou adote SDK quando integration complexity ou repeated use justificar maintained developer surface, avaliando versioning, code generation, dependencies, security, compatibility e support.",
      context:
        "Uma payments platform atende várias languages e quer auth, idempotency, pagination, errors e webhook verification consistentes nos clients.",
      application:
        "O SDK expõe typed operations, secure defaults, request IDs e retry boundaries, usa semantic versioning, testa API contract, publica provenance e migration guides.",
      phrase:
        "Atualize o SDK para o novo API contract e revise migration notes antes de habilitar payment behavior alterado.",
      aliases: [
        "Software Development Kit",
        "developer kit",
        "kit de desenvolvimento de software",
      ],
      confusion:
        "SDK reúne libraries, tools, documentation e workflows; Client Library é o reusable code component que chama service ou protocol.",
    }),
  },
  "client-library": {
    en: content({
      definition:
        "Client Library is reusable code that provides a language-specific interface for communicating with a service, protocol, or external capability.",
      purpose:
        "It centralizes transport, serialization, authentication hooks, error mapping, and contract types so each caller does not reimplement low-level interaction differently.",
      when: "Use or publish one for a stable repeated integration, keeping policy choices visible and defining compatibility, configuration, timeouts, retries, telemetry, dependencies, release lifecycle, and escape hatches.",
      context:
        "Twenty services call the same account API and currently implement inconsistent headers, timeout values, error parsing, and trace propagation.",
      application:
        "A typed library handles protocol encoding, identity injection and trace context, requires caller-owned deadlines and retry choice, returns structured errors, tests against the contract, and versions breaking surface changes.",
      phrase:
        "Use the Client Library for protocol consistency, but let the calling workflow own its deadline and retry budget.",
      aliases: ["API client library", "service client", "biblioteca cliente"],
      confusion:
        "A Client Library is code consumed by an application; an SDK is a broader development kit that may include one or more client libraries plus tools and guidance.",
    }),
    "pt-BR": content({
      definition:
        "Client Library é reusable code que oferece language-specific interface para comunicar com service, protocol ou external capability.",
      purpose:
        "Ela centraliza transport, serialization, authentication hooks, error mapping e contract types para callers não reimplementarem low-level interaction de modos diferentes.",
      when: "Use ou publique-a para stable repeated integration, mantendo policy choices visíveis e definindo compatibility, config, timeouts, retries, telemetry, dependencies e release lifecycle.",
      context:
        "Vinte services chamam account API e implementam headers, timeout, error parsing e trace propagation inconsistentes.",
      application:
        "Uma typed library cuida protocol encoding, identity injection e trace context, exige caller-owned deadline e retry, retorna structured errors e versiona breaking changes.",
      phrase:
        "Use Client Library para protocol consistency, mas deixe calling workflow controlar deadline e retry budget.",
      aliases: ["API client library", "service client", "biblioteca cliente"],
      confusion:
        "Client Library é code consumido pela app; SDK é kit mais amplo com libraries, tools e guidance.",
    }),
  },
  contract: {
    en: content({
      definition:
        "Contract is an explicit agreement between a provider and its consumers about permitted inputs, observable outputs, semantics, constraints, errors, compatibility, and responsibilities at a boundary.",
      purpose:
        "It lets independently changing parties integrate predictably and verify behavior without depending on hidden implementation details.",
      when: "Define a contract at every owned boundary, documenting syntax and meaning, preconditions, guarantees, failure behavior, security, performance expectations, versions, ownership, and change policy.",
      context:
        "A fulfillment consumer depends on an order event, but an undocumented meaning of cancellation status causes it to ship an order that was already reversed.",
      application:
        "Provider and consumers agree on event schema and business semantics, identifiers, ordering and delivery assumptions, validate examples in automated tests, review changes, and migrate through an announced compatibility window.",
      phrase:
        "The Contract guarantees that cancelled orders never transition back to paid; encode that semantic rule beyond the field type.",
      aliases: [
        "integration contract",
        "service contract",
        "contrato de integração",
      ],
      confusion:
        "A Contract includes behavioral meaning and obligations; a Schema describes structural shape and validation rules but may not capture semantics.",
    }),
    "pt-BR": content({
      definition:
        "Contract é um agreement explícito entre provider e consumers sobre inputs, observable outputs, semantics, constraints, errors, compatibility e responsibilities num boundary.",
      purpose:
        "Ele permite a parties independentes integrar e mudar de forma previsível sem depender de hidden implementation details.",
      when: "Defina contract em cada owned boundary, documentando syntax e meaning, preconditions, guarantees, failures, security, performance expectations, versions, ownership e change policy.",
      context:
        "Um fulfillment consumer depende de order event, mas meaning não documentado de cancellation faz shipment de order revertido.",
      application:
        "Provider e consumers acordam schema e business semantics, IDs, ordering e delivery assumptions, validam examples em tests, revisam changes e migram com compatibility window.",
      phrase:
        "O Contract garante que cancelled order não volta a paid; codifique semantic rule além do field type.",
      aliases: [
        "integration contract",
        "service contract",
        "contrato de integração",
      ],
      confusion:
        "Contract inclui behavioral meaning e obligations; Schema descreve structural shape e validation rules.",
    }),
  },
  "api-contract": {
    en: content({
      definition:
        "API Contract is the versioned agreement that defines an application programming interface's operations, messages, types, validation, semantics, errors, security requirements, and compatibility guarantees.",
      purpose:
        "It gives API producers and consumers a machine-testable and human-understandable boundary for independent implementation and evolution.",
      when: "Create it before or alongside an API, maintaining it as an owned artifact with examples, schema, authentication, pagination, idempotency, rate behavior, deprecation, change review, and conformance tests.",
      context:
        "Mobile clients depend on a checkout endpoint across long release cycles and cannot be forced to update when the server deploys.",
      application:
        "The team publishes an OpenAPI contract with business rules and errors, lint-checks changes, generates compatible fixtures, runs provider and consumer tests, versions breaking changes, and measures usage before retirement.",
      phrase:
        "The API Contract makes this required field a breaking change, so introduce it as optional or release a new version.",
      aliases: [
        "application programming interface contract",
        "service API specification",
        "contrato de API",
      ],
      confusion:
        "An API Contract defines the interface agreement; API Documentation teaches people how to understand and use that contract and may include broader guides.",
    }),
    "pt-BR": content({
      definition:
        "API Contract é o versioned agreement que define operations, messages, types, validation, semantics, errors, security requirements e compatibility guarantees de uma application programming interface.",
      purpose:
        "Ele oferece a API producers e consumers um boundary machine-testable e human-understandable para implementation e evolution independentes.",
      when: "Crie-o junto da API como owned artifact com examples, schema, authentication, pagination, idempotency, rate behavior, deprecation, change review e conformance tests.",
      context:
        "Mobile clients dependem de checkout endpoint por long release cycles e não atualizam sempre que server deploya.",
      application:
        "O time publica OpenAPI contract com business rules e errors, lint-checks changes, gera fixtures, roda provider e consumer tests, versiona breaks e mede usage antes de retirement.",
      phrase:
        "O API Contract torna este required field uma breaking change; faça-o optional ou publique nova version.",
      aliases: [
        "application programming interface contract",
        "service API specification",
        "contrato de API",
      ],
      confusion:
        "API Contract define interface agreement; API Documentation ensina como entendê-lo e usá-lo com guidance mais amplo.",
    }),
  },
  provider: {
    en: content({
      definition:
        "Provider is the party or component that owns and exposes a capability, data product, interface, or event contract for one or more consumers.",
      purpose:
        "The role clarifies accountability for implementation, contract conformance, availability, security, lifecycle, change communication, and support at an integration boundary.",
      when: "Name the provider for every dependency and contract, documenting ownership, objectives, escalation, version support, usage limits, incident communication, and responsibilities shared with consumers.",
      context:
        "The pricing service publishes a quote API used by checkout, mobile, and sales tools, all of which depend on stable amount and expiry semantics.",
      application:
        "The pricing team owns the contract and service objectives, validates releases against consumer expectations, publishes changes and deprecations, monitors use, supports incidents, and offers a sandbox.",
      phrase:
        "As Provider, the pricing team owns contract compatibility; consumers still own correct use and their failure handling.",
      aliases: ["service provider", "contract provider", "provedor"],
      confusion:
        "A Provider exposes a contract or capability; a Consumer depends on and uses it, even when the same organization plays both roles in different integrations.",
    }),
    "pt-BR": content({
      definition:
        "Provider é a party ou component que possui e expõe capability, data product, interface ou event contract para consumers.",
      purpose:
        "O role esclarece accountability por implementation, contract conformance, availability, security, lifecycle, change communication e support no boundary.",
      when: "Nomeie provider de toda dependency e contract, documentando ownership, objectives, escalation, version support, usage limits, incident communication e shared responsibilities.",
      context:
        "Pricing service publica quote API usada por checkout, mobile e sales tools, dependentes de amount e expiry semantics estáveis.",
      application:
        "Pricing team possui contract e objectives, valida releases, publica changes e deprecations, monitora use, suporta incidents e oferece sandbox.",
      phrase:
        "Como Provider, pricing team responde por contract compatibility; consumers respond por uso e failure handling.",
      aliases: ["service provider", "contract provider", "provedor"],
      confusion:
        "Provider expõe contract ou capability; Consumer depende e usa, mesmo dentro da mesma organization.",
    }),
  },
  "request-signing": {
    en: content({
      definition:
        "Request Signing is the creation of a cryptographic authenticator over a canonical representation of an outgoing request and security context so the receiver can verify integrity, signer authorization, and often freshness.",
      purpose:
        "It protects messages where transport security alone is insufficient, detecting alteration and authenticating the sending key across intermediaries or delayed delivery.",
      when: "Use it for high-trust APIs and provider protocols when specified, defining exact canonicalization, covered method, path, headers and body, key identity, algorithm, timestamp, nonce, expiry, rotation, and replay defense.",
      context:
        "A financial API request crosses managed proxies, and the receiver must verify that amount, destination, path, and timestamp remain exactly as the authorized client sent them.",
      application:
        "The client hashes raw body bytes, canonicalizes specified fields, signs context with its protected key, sends key ID and time, and the server reconstructs identical input, validates key and authorization, compares safely, and records nonce use.",
      phrase:
        "Request Signing must cover the HTTP method, normalized path, body digest, timestamp, and nonce to prevent substitution and replay.",
      aliases: [
        "signed API request",
        "message request signature",
        "assinatura de requisição",
      ],
      confusion:
        "Request Signing authenticates selected request content; TLS authenticates and protects a transport connection hop or session.",
    }),
    "pt-BR": content({
      definition:
        "Request Signing é a criação de cryptographic authenticator sobre canonical representation de outgoing request e security context para receiver verificar integrity, signer authorization e freshness.",
      purpose:
        "Ele protege messages quando transport security não basta, detectando alteration e autenticando sending key entre intermediaries ou delayed delivery.",
      when: "Use-o em high-trust APIs conforme protocol, definindo canonicalization, method, path, headers, body, key ID, algorithm, timestamp, nonce, expiry, rotation e replay defense.",
      context:
        "Uma financial API request atravessa proxies e receiver verifica que amount, destination, path e timestamp são exatamente os enviados.",
      application:
        "Client calcula body hash, canonicaliza fields, assina context com protected key e envia key ID e time; server reconstrói input, valida key e nonce.",
      phrase:
        "Request Signing deve cobrir method, normalized path, body digest, timestamp e nonce contra substitution e replay.",
      aliases: [
        "signed API request",
        "message request signature",
        "assinatura de requisição",
      ],
      confusion:
        "Request Signing autentica request content selecionado; TLS protege uma transport connection.",
    }),
  },
  "webhook-signature": {
    en: content({
      definition:
        "Webhook Signature is a cryptographic authenticator sent with a webhook so the receiver can verify that the exact delivered payload came from a trusted provider key and was not altered.",
      purpose:
        "It prevents unauthenticated systems from fabricating callback events and detects content modification before business actions occur.",
      when: "Require it for every webhook endpoint, following the provider's exact raw-body, algorithm, timestamp, key-version, tolerance, rotation, and replay instructions before parsing the event.",
      context:
        "An internet-facing payment webhook can be called by anyone, but only authentic payment-settled events may release an order.",
      application:
        "The handler preserves raw request bytes, selects the advertised secret version, validates timestamp, computes HMAC over the documented input, compares in constant time, deduplicates event ID, and acknowledges only after durable handling.",
      phrase:
        "Verify the Webhook Signature against raw bytes and timestamp before trusting any parsed payment fields.",
      aliases: [
        "signed webhook",
        "callback signature",
        "assinatura de webhook",
      ],
      confusion:
        "Webhook Signature authenticates the delivered callback message; an API key in the webhook URL is a reusable credential that can leak and does not bind the payload.",
    }),
    "pt-BR": content({
      definition:
        "Webhook Signature é um cryptographic authenticator enviado com webhook para receiver verificar que exact delivered payload veio de trusted provider key sem alteration.",
      purpose:
        "Ela impede sistemas não autenticados de fabricar callback events e detecta content modification antes de business actions.",
      when: "Exija-a em todo webhook endpoint, seguindo raw-body, algorithm, timestamp, key-version, tolerance, rotation e replay instructions do provider antes do parsing.",
      context:
        "Um public payment webhook aceita calls de qualquer origem, mas somente authentic settled events liberam order.",
      application:
        "Handler preserva raw bytes, escolhe secret version, valida timestamp, calcula HMAC, compara em constant time, deduplica event ID e acknowledge após durable handling.",
      phrase:
        "Verifique Webhook Signature contra raw bytes e timestamp antes de confiar em parsed payment fields.",
      aliases: [
        "signed webhook",
        "callback signature",
        "assinatura de webhook",
      ],
      confusion:
        "Webhook Signature autentica callback message; API key na URL é reusable credential e não vincula payload.",
    }),
  },
  "api-versioning": {
    en: content({
      definition:
        "API Versioning is the explicit management and identification of incompatible API contract generations so providers and consumers can migrate on different release schedules.",
      purpose:
        "It protects existing consumers from uncoordinated breaking changes while giving the provider a governed path to evolve operations and semantics.",
      when: "Introduce a new version only for a genuinely incompatible contract change, choosing a consistent identification strategy and defining support, routing, documentation, telemetry, migration, deprecation, and retirement.",
      context:
        "A payments API must replace one amount field with a multi-currency structure, but deployed mobile clients still send and parse the original representation.",
      application:
        "The provider keeps the old contract stable, publishes the new version and migration mapping, tests both, measures consumer usage, gives deadlines and support, and retires the old route only after the announced process.",
      phrase:
        "This semantic change requires API Versioning; adding a new optional response field does not automatically require a new major version.",
      aliases: [
        "API version management",
        "interface versioning",
        "versionamento de API",
      ],
      confusion:
        "API Versioning separates incompatible contracts; ordinary backward-compatible evolution changes one existing version within its documented rules.",
    }),
    "pt-BR": content({
      definition:
        "API Versioning é o management e identification explícitos de API contract generations incompatíveis para providers e consumers migrarem em release schedules diferentes.",
      purpose:
        "Ele protege existing consumers de breaking changes descoordenadas e dá ao provider governed path para evoluir operations e semantics.",
      when: "Crie nova version somente para mudança realmente incompatível, escolhendo identification strategy e definindo support, routing, docs, telemetry, migration, deprecation e retirement.",
      context:
        "Uma payments API troca amount field por multi-currency structure, mas mobile clients ainda usam original representation.",
      application:
        "Provider mantém old contract, publica new version e migration mapping, testa ambas, mede consumer usage, comunica deadlines e retira rota ao fim do processo.",
      phrase:
        "Esta semantic change exige API Versioning; novo optional response field não exige automaticamente major version.",
      aliases: [
        "API version management",
        "interface versioning",
        "versionamento de API",
      ],
      confusion:
        "API Versioning separa incompatible contracts; backward-compatible evolution muda version existente dentro de rules documentadas.",
    }),
  },
  deprecation: {
    en: content({
      definition:
        "Deprecation is the formal status indicating that a supported interface, feature, version, or behavior should no longer be adopted and is planned for possible removal or replacement.",
      purpose:
        "It creates a managed transition period in which consumers receive notice, alternatives, migration help, and time before support ends.",
      when: "Deprecate before retiring a used capability, publishing rationale, replacement, affected behavior, dates, compatibility, owner, usage visibility, communication channels, and exception process.",
      context:
        "An API authentication method relies on long-lived static credentials and must move clients to short-lived workload identity without abruptly breaking production.",
      application:
        "The provider marks the method deprecated in contract and docs, contacts active consumers, ships migration examples and telemetry, blocks new adoption, tracks completion, grants controlled exceptions, and removes it on the published date.",
      phrase:
        "Deprecation begins today, but removal occurs after the announced migration window and verified consumer exit.",
      aliases: [
        "deprecated status",
        "phase-out notice",
        "descontinuação anunciada",
      ],
      confusion:
        "Deprecation warns against continued use while support may remain; Removal makes the capability unavailable and is a separate lifecycle event.",
    }),
    "pt-BR": content({
      definition:
        "Deprecation é o formal status de que interface, feature, version ou behavior suportado não deve ser adotado e pode ser removido ou substituído.",
      purpose:
        "Ela cria managed transition period com notice, alternatives, migration help e tempo antes de support terminar.",
      when: "Depreque antes de retirar capability usada, publicando rationale, replacement, affected behavior, dates, compatibility, owner, usage visibility, communication e exceptions.",
      context:
        "Um API authentication method usa long-lived static credentials e clients precisam migrar para short-lived workload identity sem production break.",
      application:
        "Provider marca deprecated em contract e docs, contata active consumers, entrega examples e telemetry, bloqueia nova adoção, acompanha migration e remove na data publicada.",
      phrase:
        "Deprecation começa hoje; removal ocorre após migration window anunciada e consumer exit verificado.",
      aliases: [
        "deprecated status",
        "phase-out notice",
        "descontinuação anunciada",
      ],
      confusion:
        "Deprecation desaconselha uso enquanto support pode continuar; Removal torna capability indisponível.",
    }),
  },
  "backward-compatibility": {
    en: content({
      definition:
        "Backward Compatibility is the property that a newer provider, format, or implementation continues to satisfy the supported expectations of consumers built against an older contract.",
      purpose:
        "It allows providers to deploy improvements without requiring every existing consumer to update in lockstep.",
      when: "Preserve it during in-place API and data evolution by defining allowed change rules, tolerant extensions, defaults, semantics, tests against old consumers, and a separate version for incompatible behavior.",
      context:
        "An API adds an optional delivery note while older mobile applications ignore fields they do not recognize and continue parsing every existing field unchanged.",
      application:
        "The provider adds the optional field without changing old meanings, keeps previous enum handling safe, runs archived consumer contract tests, monitors errors by client version, and documents the extension.",
      phrase:
        "This optional field is Backward Compatible only if old clients safely ignore it and all previous guarantees remain true.",
      aliases: [
        "backwards compatibility",
        "old-consumer compatibility",
        "compatibilidade retroativa",
      ],
      confusion:
        "Backward Compatibility protects older consumers using a newer provider or data form; Forward Compatibility lets an older reader tolerate selected input from a newer writer.",
    }),
    "pt-BR": content({
      definition:
        "Backward Compatibility é a propriedade de newer provider, format ou implementation continuar atendendo expectations suportadas de consumers construídos contra older contract.",
      purpose:
        "Ela permite ao provider deployar improvements sem exigir update simultâneo de existing consumers.",
      when: "Preserve-a em in-place API e data evolution definindo allowed changes, tolerant extensions, defaults, semantics, tests com old consumers e nova version para incompatibilities.",
      context:
        "Uma API adiciona optional delivery note enquanto older mobile apps ignoram unknown fields e continuam lendo existing fields.",
      application:
        "Provider adiciona field sem mudar meanings, mantém enum handling seguro, roda archived consumer tests, monitora errors por client version e documenta extension.",
      phrase:
        "Este optional field só tem Backward Compatibility se old clients o ignorarem e previous guarantees continuarem verdadeiras.",
      aliases: [
        "backwards compatibility",
        "old-consumer compatibility",
        "compatibilidade retroativa",
      ],
      confusion:
        "Backward Compatibility protege older consumers; Forward Compatibility permite older reader tolerar input selecionado de newer writer.",
    }),
  },
  "forward-compatibility": {
    en: content({
      definition:
        "Forward Compatibility is the property that an older implementation can safely accept, preserve, or ignore defined extensions produced by a newer version without misbehavior.",
      purpose:
        "It reduces coupling during rolling upgrades and long-lived data exchange by giving older participants deliberate rules for unknown future additions.",
      when: "Design it for protocols, events, stored records, and clients that may encounter newer writers, using length-delimited fields, unknown-field preservation, extensible enums, safe defaults, feature negotiation, and explicit limits.",
      context:
        "During a rolling deployment, old event consumers receive messages containing a newly added optional attribute from updated producers.",
      application:
        "The format tags fields independently, older consumers ignore and preserve unknown optional fields, required meaning stays stable, capabilities are negotiated where needed, and tests send future-shaped fixtures to old readers.",
      phrase:
        "Forward Compatibility allows the old consumer to preserve this unknown optional field, not to guess its business meaning.",
      aliases: [
        "forwards compatibility",
        "future-version tolerance",
        "compatibilidade futura",
      ],
      confusion:
        "Forward Compatibility is safe tolerance by older implementations of defined future extensions; Backward Compatibility is continued support by newer implementations for older expectations.",
    }),
    "pt-BR": content({
      definition:
        "Forward Compatibility é a propriedade de older implementation aceitar, preservar ou ignorar defined extensions de newer version sem misbehavior.",
      purpose:
        "Ela reduz coupling em rolling upgrades e long-lived data exchange dando a older participants rules para unknown future additions.",
      when: "Projete-a em protocols, events e records que recebem newer writers, usando length-delimited fields, unknown-field preservation, extensible enums, safe defaults e feature negotiation.",
      context:
        "Durante rolling deployment, old event consumers recebem messages com novo optional attribute de updated producers.",
      application:
        "O format identifica fields, old consumers ignoram e preservam unknown optional fields, required meaning fica estável e tests enviam future-shaped fixtures a old readers.",
      phrase:
        "Forward Compatibility deixa old consumer preservar unknown optional field, não adivinhar business meaning.",
      aliases: [
        "forwards compatibility",
        "future-version tolerance",
        "compatibilidade futura",
      ],
      confusion:
        "Forward Compatibility é tolerância de older implementations; Backward Compatibility é suporte de newer implementations a older expectations.",
    }),
  },
  "schema-validation": {
    en: content({
      definition:
        "Schema Validation is the evaluation of structured data against declared rules for fields, types, formats, required values, ranges, composition, and permitted additional content.",
      purpose:
        "It rejects structurally invalid data at a boundary and produces consistent errors before malformed input reaches deeper business logic or storage.",
      when: "Validate untrusted requests, events, configuration, files, and provider responses using a versioned schema, resource limits, precise error handling, and separate semantic and authorization checks.",
      context:
        "An order endpoint receives a payload with a string quantity, missing currency, an unknown fulfillment mode, and a syntactically valid but unsupported delivery date.",
      application:
        "The boundary validates JSON Schema types, required fields, formats and enum, rejects oversized structures, reports safe field errors, then business validation checks stock, supported dates, and customer authorization.",
      phrase:
        "Schema Validation accepts the date's format; the domain rule still decides whether that delivery date is available.",
      aliases: [
        "data schema validation",
        "structural validation",
        "validação de esquema",
      ],
      confusion:
        "Schema Validation checks declared data structure; business validation checks contextual meaning and rules that structure alone cannot express.",
    }),
    "pt-BR": content({
      definition:
        "Schema Validation é a avaliação de structured data contra rules declaradas de fields, types, formats, required values, ranges, composition e additional content.",
      purpose:
        "Ela rejeita structurally invalid data no boundary e produz consistent errors antes de malformed input chegar a business logic ou storage.",
      when: "Valide untrusted requests, events, config, files e provider responses com versioned schema, resource limits, precise errors e semantic e authorization checks separados.",
      context:
        "Um order endpoint recebe string quantity, currency ausente, unknown fulfillment mode e delivery date sintaticamente válida, mas indisponível.",
      application:
        "O boundary valida JSON Schema types, required fields, formats e enum, rejeita oversized structures e depois domain validation checa stock, dates e authorization.",
      phrase:
        "Schema Validation aceita date format; domain rule decide se delivery date está disponível.",
      aliases: [
        "data schema validation",
        "structural validation",
        "validação de esquema",
      ],
      confusion:
        "Schema Validation verifica data structure; business validation verifica contextual meaning e rules.",
    }),
  },
  "contract-test": {
    en: content({
      definition:
        "Contract Test is an automated check that verifies a provider or consumer implementation conforms to an agreed interface contract at their integration boundary.",
      purpose:
        "It detects incompatible changes faster and more precisely than broad end-to-end tests by testing messages, semantics, and expectations owned at one boundary.",
      when: "Use contract tests between independently deployed components, covering representative requests, responses, errors, events, validation and compatibility while retaining separate tests for internal logic and real infrastructure.",
      context:
        "A billing service changes an invoice response and may break a mobile client even though both components' isolated unit tests still pass.",
      application:
        "Versioned fixtures and interaction cases verify the client's requests against provider rules and the provider's responses against supported expectations in CI, with failures blocking incompatible release and identifying the violated clause.",
      phrase:
        "The Contract Test fails because the provider removed a field that this supported consumer still requires.",
      aliases: [
        "contract testing",
        "interface conformance test",
        "teste de contrato",
      ],
      confusion:
        "A Contract Test verifies boundary agreement; an Integration Test exercises multiple real components together and may cover broader interaction behavior.",
    }),
    "pt-BR": content({
      definition:
        "Contract Test é um automated check que verifica se provider ou consumer implementation cumpre o interface contract acordado no integration boundary.",
      purpose:
        "Ele detecta incompatible changes mais cedo e precisamente que broad end-to-end tests ao testar messages, semantics e expectations do boundary.",
      when: "Use-o entre independently deployed components, cobrindo requests, responses, errors, events, validation e compatibility, com outros tests para internal logic e infrastructure.",
      context:
        "Billing service muda invoice response e pode quebrar mobile client mesmo com unit tests isolados verdes.",
      application:
        "Versioned fixtures e interaction cases verificam client requests e provider responses em CI, bloqueando incompatible release e apontando violated clause.",
      phrase:
        "O Contract Test falha porque provider removeu field ainda exigido por supported consumer.",
      aliases: [
        "contract testing",
        "interface conformance test",
        "teste de contrato",
      ],
      confusion:
        "Contract Test verifica boundary agreement; Integration Test exercita vários real components juntos.",
    }),
  },
  "consumer-driven-contract": {
    en: content({
      definition:
        "Consumer-Driven Contract is a contract-testing approach in which each consumer publishes the specific interactions and guarantees it relies on, and the provider verifies their combined compatibility.",
      purpose:
        "It gives providers concrete evidence of supported consumer needs so they can evolve safely without guessing which parts of a broad interface are actually depended upon.",
      when: "Use it when several known consumers and one provider deploy independently, governing consumer identity, expectation quality, contract publication, provider verification, environment data, version selection, and retirement of stale consumers.",
      context:
        "A customer API serves checkout, support, and mobile clients, each using different fields and error cases from the same operations.",
      application:
        "Each consumer records minimal meaningful interactions, publishes a versioned pact, the provider verifies all active pacts in CI, deployment checks compatible versions, and owners remove obsolete expectations when clients retire.",
      phrase:
        "The Consumer-Driven Contract shows mobile still relies on this error code, so the provider cannot replace it silently.",
      aliases: [
        "CDC contract testing",
        "consumer contract",
        "contrato orientado pelo consumidor",
      ],
      confusion:
        "Consumer-Driven Contract derives supported expectations from known consumers; a provider-defined contract starts from the provider's published interface specification.",
    }),
    "pt-BR": content({
      definition:
        "Consumer-Driven Contract é contract-testing approach em que cada consumer publica interactions e guarantees de que depende, e provider verifica compatibility combinada.",
      purpose:
        "Ele dá ao provider evidence concreta das consumer needs para evoluir sem adivinhar quais partes da interface são usadas.",
      when: "Use-o com known consumers e provider em independent deploys, governando consumer identity, expectation quality, publication, provider verification, version selection e stale-consumer retirement.",
      context:
        "Uma customer API atende checkout, support e mobile, cada qual usando fields e error cases diferentes.",
      application:
        "Cada consumer publica minimal meaningful interactions em versioned pact, provider verifica active pacts em CI, deploy checa versions e owners removem obsolete expectations.",
      phrase:
        "Consumer-Driven Contract mostra que mobile ainda depende deste error code; provider não pode trocá-lo silenciosamente.",
      aliases: [
        "CDC contract testing",
        "consumer contract",
        "contrato orientado pelo consumidor",
      ],
      confusion:
        "Consumer-Driven Contract deriva expectations de known consumers; provider-defined contract parte da published interface.",
    }),
  },
  "mock-server": {
    en: content({
      definition:
        "Mock Server is a controllable server substitute that exposes an expected network interface and returns programmed responses so clients can be developed or tested without the real provider.",
      purpose:
        "It makes dependency behavior deterministic and allows rare errors, delays, malformed data, and protocol cases to be exercised cheaply and repeatedly.",
      when: "Use one for client development and focused tests, deriving behavior from the current contract, making scenarios explicit, validating requests where useful, and retaining contract and real-provider tests against drift.",
      context:
        "A checkout team needs to test payment approval, decline, timeout, rate limit, and invalid-signature handling before a provider sandbox is stable.",
      application:
        "The mock implements versioned endpoints from the contract, selects named scenarios, records received requests, simulates delay and failure deterministically, resets state between tests, and is checked against provider examples.",
      phrase:
        "Configure the Mock Server for a delayed approval, but verify the final client against the provider sandbox before release.",
      aliases: ["mock API server", "stub server", "servidor simulado"],
      confusion:
        "A Mock Server is a programmable test substitute; a Sandbox Environment is a provider-operated or representative environment with more realistic integrated behavior.",
    }),
    "pt-BR": content({
      definition:
        "Mock Server é um controllable server substitute que expõe expected network interface e retorna programmed responses para clients serem desenvolvidos ou testados sem real provider.",
      purpose:
        "Ele torna dependency behavior determinístico e permite testar rare errors, delays, malformed data e protocol cases de forma barata e repetível.",
      when: "Use-o em client development e focused tests, derivando behavior do current contract, nomeando scenarios, validando requests e mantendo contract e real-provider tests contra drift.",
      context:
        "Checkout precisa testar payment approval, decline, timeout, rate limit e invalid signature antes do provider sandbox estabilizar.",
      application:
        "O mock implementa versioned endpoints, seleciona named scenarios, registra requests, simula delay e failure deterministicamente, reseta state e é comparado a provider examples.",
      phrase:
        "Configure Mock Server para delayed approval, mas verifique final client no provider sandbox antes do release.",
      aliases: ["mock API server", "stub server", "servidor simulado"],
      confusion:
        "Mock Server é programmable test substitute; Sandbox Environment possui more realistic integrated behavior.",
    }),
  },
  "sandbox-environment": {
    en: content({
      definition:
        "Sandbox Environment is an isolated, non-production environment where integrations can exercise representative interfaces and workflows using controlled identities, data, limits, and side effects.",
      purpose:
        "It lets consumers learn, test, and certify realistic behavior without risking production customers, money, records, or infrastructure.",
      when: "Provide or use one before production onboarding and for regression testing, documenting differences, data reset, test credentials, scenarios, quotas, callbacks, availability, security, version parity, and promotion criteria.",
      context:
        "A merchant needs to run payment authorization, refund, dispute, and webhook flows without moving real funds or using real cardholder data.",
      application:
        "The provider issues sandbox-only credentials and test instruments, supports deterministic outcome codes, signs callbacks like production, isolates all data, publishes known gaps, resets state safely, and offers a production-readiness checklist.",
      phrase:
        "Validate the complete refund workflow in the Sandbox Environment, then repeat a controlled smoke test with production credentials.",
      aliases: ["integration sandbox", "test environment", "ambiente sandbox"],
      confusion:
        "A Sandbox Environment exercises a deployed integration in isolation; a Mock Server emulates selected responses and may not reproduce provider state or infrastructure.",
    }),
    "pt-BR": content({
      definition:
        "Sandbox Environment é um isolated non-production environment onde integrations exercitam representative interfaces e workflows com controlled identities, data, limits e side effects.",
      purpose:
        "Ele permite aprender, testar e certificar behavior realista sem arriscar production customers, money, records ou infrastructure.",
      when: "Use-o antes de production onboarding e em regression tests, documentando differences, data reset, test credentials, scenarios, quotas, callbacks, availability, version parity e promotion criteria.",
      context:
        "Um merchant executa payment authorization, refund, dispute e webhook flows sem real funds nem real cardholder data.",
      application:
        "Provider emite sandbox-only credentials e test instruments, oferece deterministic outcomes, assina callbacks como production, isola data, publica gaps e readiness checklist.",
      phrase:
        "Valide refund workflow completo no Sandbox Environment e depois faça controlled production smoke test.",
      aliases: ["integration sandbox", "test environment", "ambiente sandbox"],
      confusion:
        "Sandbox Environment exercita deployed integration; Mock Server emula responses selecionadas sem todo provider state.",
    }),
  },
  "rate-limiting": {
    en: content({
      definition:
        "Rate Limiting is the enforcement of a policy that permits only a bounded number or cost of operations for a defined identity, resource, and time window.",
      purpose:
        "It protects finite capacity, promotes fair use, enforces product quotas, and reduces abuse while giving clients a predictable admission contract.",
      when: "Apply it at API and dependency boundaries, selecting the correct key, unit, algorithm, burst allowance, distributed state, failure behavior, response headers, retry guidance, exemptions, and observability.",
      context:
        "One tenant repeatedly calls an expensive export endpoint and consumes the worker capacity needed by every other customer.",
      application:
        "A token bucket charges each tenant by export cost, allows a bounded burst, atomically shares state across gateways, returns 429 and Retry-After, exposes remaining quota, audits exemptions, and monitors rejected demand.",
      phrase:
        "Rate Limiting is per tenant and export cost, so rotating IP addresses cannot bypass the capacity policy.",
      aliases: ["request rate control", "API rate limit", "limitação de taxa"],
      confusion:
        "Rate Limiting enforces a count or cost over time; Throttling is the broader act of pacing, delaying, or restricting consumption and may implement a rate limit.",
    }),
    "pt-BR": content({
      definition:
        "Rate Limiting é o enforcement de policy que permite quantidade ou cost limitada de operations para identity, resource e time window definidos.",
      purpose:
        "Ele protege finite capacity, promove fair use, aplica product quotas e reduz abuse com predictable admission contract.",
      when: "Aplique-o em API e dependency boundaries, escolhendo key, unit, algorithm, burst, distributed state, failure behavior, response headers, retry guidance, exceptions e observability.",
      context:
        "Um tenant chama expensive export endpoint repetidamente e consome worker capacity dos demais customers.",
      application:
        "Token bucket cobra por tenant e export cost, permite bounded burst, compartilha state entre gateways, retorna 429 e Retry-After, expõe quota e monitora rejects.",
      phrase:
        "Rate Limiting é por tenant e export cost; rotating IPs não burlam capacity policy.",
      aliases: ["request rate control", "API rate limit", "limitação de taxa"],
      confusion:
        "Rate Limiting aplica count ou cost no tempo; Throttling é ação mais ampla de pacing ou restriction.",
    }),
  },
  "backend-for-frontend": {
    en: content({
      definition:
        "Backend for Frontend (BFF) is a backend boundary tailored to the interaction, data-shaping, security, and release needs of one user-experience channel or closely related client family.",
      purpose:
        "It shields a frontend from unsuitable internal service boundaries, reduces client orchestration and round trips, and lets channel-specific behavior evolve with clear ownership.",
      when: "Use a BFF when web, mobile, partner, or device clients have materially different workflows and aggregation needs, while avoiding duplicated domain authority and defining authentication, authorization, caching, failures, observability, and team ownership.",
      context:
        "A mobile checkout needs one compact response over a variable network, while the desktop experience needs richer parallel data and internal services expose several fine-grained APIs.",
      application:
        "The mobile team owns a BFF that authenticates the client, calls domain services with propagated identity and deadlines, aggregates and shapes data, handles partial results deliberately, and contains no independent pricing or inventory rules.",
      phrase:
        "The BFF owns mobile orchestration and response shape; pricing authority remains in the pricing domain service.",
      aliases: ["BFF", "frontend-specific backend", "backend para frontend"],
      confusion:
        "A Backend for Frontend is specialized for a client experience; an API Gateway provides shared edge routing and cross-cutting controls across many clients and services.",
    }),
    "pt-BR": content({
      definition:
        "Backend for Frontend (BFF) é um backend boundary adaptado a interaction, data shaping, security e release needs de um user-experience channel ou client family.",
      purpose:
        "Ele protege frontend de unsuitable internal boundaries, reduz client orchestration e round trips e permite channel-specific behavior com ownership claro.",
      when: "Use BFF quando web, mobile, partner ou device clients tiverem workflows e aggregation diferentes, evitando duplicated domain authority e definindo auth, cache, failures e ownership.",
      context:
        "Mobile checkout precisa de compact response em network variável, enquanto desktop requer data rica e internal services expõem várias fine-grained APIs.",
      application:
        "Mobile team possui BFF que autentica client, chama domain services com identity e deadlines, agrega data e trata partial results sem duplicar pricing ou inventory rules.",
      phrase:
        "BFF possui mobile orchestration e response shape; pricing authority permanece no domain service.",
      aliases: ["BFF", "frontend-specific backend", "backend para frontend"],
      confusion:
        "Backend for Frontend especializa-se por client experience; API Gateway aplica shared edge controls a muitos clients e services.",
    }),
  },
  graphql: {
    en: content({
      definition:
        "GraphQL is a typed API query language and execution specification in which clients select fields from a schema and the server resolves a validated operation into a response matching that selection.",
      purpose:
        "It gives clients flexible composition over a strongly described graph while centralizing type evolution, validation, introspection, and resolver execution.",
      when: "Use it when multiple clients benefit from selecting and combining related data, designing schema ownership, authorization at every resolver boundary, batching, pagination, nullability, errors, complexity limits, caching, and evolution.",
      context:
        "Web and mobile product pages need different subsets of catalog, seller, review, and recommendation data that belong to several backend capabilities.",
      application:
        "The schema models domain concepts instead of storage tables, resolvers batch related reads, authorization checks subject and object, connections paginate lists, persisted operations and depth-cost limits control abuse, and fields deprecate gradually.",
      phrase:
        "GraphQL lets mobile select fewer fields, but every resolver still enforces authorization and bounded query cost.",
      aliases: ["Graph Query Language", "GraphQL API", "linguagem GraphQL"],
      confusion:
        "GraphQL is a typed query and execution model for APIs; REST is an architectural style centered on resources and uniform interface semantics.",
    }),
    "pt-BR": content({
      definition:
        "GraphQL é uma typed API query language e execution specification em que clients selecionam fields de schema e server resolve validated operation em response correspondente.",
      purpose:
        "Ele oferece flexible composition sobre strongly described graph, centralizando type evolution, validation, introspection e resolver execution.",
      when: "Use-o quando clients precisarem selecionar e combinar related data, projetando schema ownership, resolver authorization, batching, pagination, nullability, errors, complexity limits, cache e evolution.",
      context:
        "Web e mobile product pages precisam de subsets diferentes de catalog, seller, reviews e recommendations de vários backend capabilities.",
      application:
        "Schema modela domain concepts, resolvers agrupam reads, authorization checa subject e object, connections paginam, persisted operations e cost limits controlam abuse e fields são deprecated.",
      phrase:
        "GraphQL deixa mobile selecionar menos fields, mas todo resolver aplica authorization e bounded query cost.",
      aliases: ["Graph Query Language", "GraphQL API", "linguagem GraphQL"],
      confusion:
        "GraphQL é typed query e execution model; REST é architectural style de resources e uniform interface semantics.",
    }),
  },
  grpc: {
    en: content({
      definition:
        "gRPC, originally derived from Google Remote Procedure Call, is a high-performance remote procedure call framework using service definitions and Protocol Buffers by default to generate typed clients and servers over HTTP/2-based transport.",
      purpose:
        "It provides efficient binary messages, schema-first tooling, unary and streaming calls, deadlines, status codes, and cross-language interoperability for service communication.",
      when: "Use gRPC for controlled service-to-service or supported client environments needing strong contracts and streaming, planning deadlines, cancellation, retries, idempotency, load balancing, proxies, authentication, browser constraints, compatibility, and observability.",
      context:
        "A real-time risk service exchanges frequent typed decisions and continuously streams model updates among services written in several languages.",
      application:
        "The team defines protobuf services, evolves fields compatibly, generates clients, propagates deadline and trace context, secures mutual identity, bounds message and stream resources, maps domain errors deliberately, and tests retry safety.",
      phrase:
        "Set the gRPC deadline from the workflow budget and make this unary method idempotent before enabling retry.",
      aliases: [
        "Google Remote Procedure Call",
        "gRPC framework",
        "RPC com Protocol Buffers",
      ],
      confusion:
        "gRPC is a specific RPC framework with code generation and streaming; RPC is the broader interaction model of invoking a remote operation like a procedure.",
    }),
    "pt-BR": content({
      definition:
        "gRPC, nome derivado de Google Remote Procedure Call, é um high-performance RPC framework que usa service definitions e Protocol Buffers por default para gerar typed clients e servers sobre HTTP/2.",
      purpose:
        "Ele fornece efficient binary messages, schema-first tooling, unary e streaming calls, deadlines, status codes e cross-language interoperability.",
      when: "Use gRPC em service-to-service ou supported clients que precisem strong contracts e streaming, planejando deadlines, cancellation, retries, idempotency, proxies, auth, compatibility e observability.",
      context:
        "Um real-time risk service troca typed decisions frequentes e transmite model updates entre services de várias languages.",
      application:
        "O time define protobuf services, evolui fields, gera clients, propaga deadline e trace, protege mutual identity, limita message e stream resources e testa retry safety.",
      phrase:
        "Defina gRPC deadline pelo workflow budget e torne unary method idempotent antes de retry.",
      aliases: [
        "Google Remote Procedure Call",
        "gRPC framework",
        "RPC com Protocol Buffers",
      ],
      confusion:
        "gRPC é RPC framework específico; RPC é o interaction model mais amplo de invocar remote operation como procedure.",
    }),
  },
  soap: {
    en: content({
      definition:
        "SOAP, short for Simple Object Access Protocol, is an XML-based messaging protocol with a defined envelope, headers, body, fault model, processing rules, and optional WS-* extensions across different transports.",
      purpose:
        "It supports strongly specified interoperable messages and enterprise features such as message-level security, reliability, transactions, and formal service descriptions where those profiles are required.",
      when: "Use SOAP when integrating with an established SOAP ecosystem or when its standardized message-level capabilities are contractual requirements, governing WSDL, profiles, namespaces, security, canonicalization, faults, size, timeouts, and compatibility.",
      context:
        "An insurance partner requires a WSDL-defined claims service with signed message elements, enterprise identity, and standardized SOAP faults over an intermediary path.",
      application:
        "The client generates contract types from the controlled WSDL, validates XML securely, disables dangerous external entities, signs required elements, verifies certificates and timestamps, maps faults, bounds payloads, and runs partner conformance tests.",
      phrase:
        "Follow the SOAP processing and signature profile exactly; transport TLS alone does not replace required message-level security.",
      aliases: [
        "Simple Object Access Protocol",
        "SOAP web service",
        "protocolo SOAP",
      ],
      confusion:
        "SOAP defines an XML messaging protocol and processing model; REST is an architectural style commonly implemented directly with HTTP resource semantics.",
    }),
    "pt-BR": content({
      definition:
        "SOAP, sigla de Simple Object Access Protocol, é um XML-based messaging protocol com envelope, headers, body, fault model, processing rules e optional WS-* extensions em vários transports.",
      purpose:
        "Ele suporta strongly specified interoperable messages e enterprise features como message-level security, reliability, transactions e formal service descriptions.",
      when: "Use SOAP em established ecosystem ou quando standardized message capabilities forem contractual requirements, governando WSDL, profiles, namespaces, security, faults, size e compatibility.",
      context:
        "Uma insurance partner exige claims service definido por WSDL com signed message elements, enterprise identity e standardized SOAP faults.",
      application:
        "Client gera contract types do controlled WSDL, valida XML com segurança, desabilita external entities, assina elements, verifica certificates e timestamps, mapeia faults e limita payloads.",
      phrase:
        "Siga SOAP processing e signature profile exatamente; TLS não substitui required message-level security.",
      aliases: [
        "Simple Object Access Protocol",
        "SOAP web service",
        "protocolo SOAP",
      ],
      confusion:
        "SOAP define XML messaging protocol; REST é architectural style normalmente implementado com HTTP resource semantics.",
    }),
  },
  rpc: {
    en: content({
      definition:
        "RPC, short for Remote Procedure Call, is an interaction model in which a program invokes an operation provided by another process or machine through a request-response abstraction resembling a local procedure call.",
      purpose:
        "It gives clients an operation-oriented interface while the framework handles message encoding, transport, dispatch, and result or error return.",
      when: "Use RPC for well-defined remote capabilities, keeping network behavior explicit through deadlines, cancellation, authentication, authorization, idempotency, retry policy, versioning, partial failure, observability, and load control.",
      context:
        "An order service asks a remote inventory service to reserve stock through a typed ReserveItems operation.",
      application:
        "The contract defines request, response and error semantics, the caller sends a deadline and idempotency key, the server authorizes the resource, both trace the call, and uncertain timeout outcomes are reconciled.",
      phrase:
        "Although RPC looks like a method call, treat its timeout as an uncertain remote outcome and reconcile the reservation.",
      aliases: [
        "Remote Procedure Call",
        "remote invocation",
        "chamada de procedimento remoto",
      ],
      confusion:
        "RPC is operation-oriented remote invocation; an ordinary local function call does not face independent failure, network delay, serialization, or version skew.",
    }),
    "pt-BR": content({
      definition:
        "RPC, sigla de Remote Procedure Call, é um interaction model em que program invoca operation de outro process ou machine por request-response abstraction semelhante a local procedure call.",
      purpose:
        "Ele oferece operation-oriented interface enquanto framework cuida message encoding, transport, dispatch e retorno de result ou error.",
      when: "Use RPC para remote capabilities bem definidas, explicitando deadlines, cancellation, auth, idempotency, retry policy, versioning, partial failure, observability e load control.",
      context:
        "Order service pede a remote inventory service para reservar stock por typed ReserveItems operation.",
      application:
        "O contract define request, response e errors, caller envia deadline e idempotency key, server autoriza resource, ambos traceiam e timeout incerto é reconciliado.",
      phrase:
        "Embora RPC pareça method call, trate timeout como uncertain remote outcome e reconcilie reservation.",
      aliases: [
        "Remote Procedure Call",
        "remote invocation",
        "chamada de procedimento remoto",
      ],
      confusion:
        "RPC é remote invocation; local function call não enfrenta independent failure, network delay, serialization ou version skew.",
    }),
  },
};
