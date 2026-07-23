import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const corporateSystemsEditorialOverrides: Record<string, EditorialPair> =
  {
    "legacy-system": {
      en: content({
        definition:
          "Legacy System is an existing system that remains operationally important while its age, architecture, technology, knowledge, contracts, or accumulated constraints make safe change and replacement unusually difficult.",
        purpose:
          "The label focuses modernization on current business dependency and change risk rather than assuming that old technology is automatically obsolete or worthless.",
        when: "Classify and manage one by evidence: map capabilities, users, data, integrations, operational objectives, unsupported components, knowledge concentration, security exposure, change lead time, cost, and viable modernization boundaries.",
        context:
          "A decades-old policy platform calculates every active insurance contract correctly, but only two specialists understand its rules and releases require weekend downtime.",
        application:
          "The organization captures behavior with characterization tests, documents data and interfaces, reduces immediate operational risks, isolates access behind contracts, migrates one bounded capability at a time, reconciles outcomes, and keeps rollback paths.",
        phrase:
          "Treat the Legacy System as the current policy authority until the replacement proves equivalent behavior and reconciles every active contract.",
        aliases: ["legacy application", "inherited system", "sistema legado"],
        confusion:
          "A Legacy System is difficult to change relative to current needs and dependencies; an old system can remain maintainable and need not be legacy merely because of age.",
      }),
      "pt-BR": content({
        definition:
          "Legacy System é um existing system ainda operationally important cuja age, architecture, technology, knowledge, contracts ou accumulated constraints tornam safe change e replacement difíceis.",
        purpose:
          "O termo concentra modernization em business dependency e change risk atuais, não na suposição de que old technology seja automaticamente inútil.",
        when: "Classifique-o por evidence: mapeie capabilities, users, data, integrations, objectives, unsupported components, knowledge concentration, security exposure, change lead time, cost e modernization boundaries.",
        context:
          "Uma antiga policy platform calcula active insurance contracts corretamente, mas só dois specialists conhecem rules e releases exigem weekend downtime.",
        application:
          "A organization captura behavior em characterization tests, documenta data e interfaces, reduz risks, isola access por contracts, migra bounded capabilities e reconcilia outcomes com rollback.",
        phrase:
          "Trate Legacy System como policy authority até replacement provar equivalent behavior e reconciliar active contracts.",
        aliases: ["legacy application", "inherited system", "sistema legado"],
        confusion:
          "Legacy System é difícil de mudar frente às current needs; old system pode ser maintainable e não é legacy só pela idade.",
      }),
    },
    "enterprise-system": {
      en: content({
        definition:
          "Enterprise System is a large-scale business system that supports shared processes, records, controls, and integrations across multiple departments, locations, or legal entities.",
        purpose:
          "It coordinates organization-wide operations and authoritative data where isolated departmental tools would create inconsistent processes, duplication, and weak control.",
        when: "Adopt or design one for cross-functional capabilities such as finance, supply chain, workforce, customer operations, or content, governing process ownership, master data, roles, configuration, customization, integration, compliance, upgrades, and continuity.",
        context:
          "A manufacturer needs procurement, inventory, production, finance, and regional companies to share materials, approvals, transactions, and accounting controls.",
        application:
          "The program defines global process and data standards, permits governed local variation, assigns module owners, integrates through supported boundaries, migrates and reconciles records, tests segregation of duties, trains users, and plans vendor upgrades.",
        phrase:
          "The Enterprise System standardizes purchase-to-pay across regions while documented local controls handle legal differences.",
        aliases: [
          "enterprise application",
          "organization-wide system",
          "sistema empresarial",
        ],
        confusion:
          "Enterprise System describes organizational scale and shared process scope; ERP is a particular class centered on integrated enterprise resource planning modules.",
      }),
      "pt-BR": content({
        definition:
          "Enterprise System é um large-scale business system que suporta shared processes, records, controls e integrations entre departments, locations ou legal entities.",
        purpose:
          "Ele coordena organization-wide operations e authoritative data onde departmental tools isoladas criariam inconsistência, duplication e weak control.",
        when: "Adote-o para cross-functional capabilities como finance, supply chain, workforce ou customer operations, governando process ownership, master data, roles, config, customization, integration, compliance, upgrades e continuity.",
        context:
          "Uma manufacturer integra procurement, inventory, production, finance e regional companies com materials, approvals, transactions e accounting controls compartilhados.",
        application:
          "O program define global process e data standards, permite governed local variation, atribui module owners, integra por supported boundaries, migra e reconcilia records e testa segregation of duties.",
        phrase:
          "Enterprise System padroniza purchase-to-pay entre regions e documented local controls tratam legal differences.",
        aliases: [
          "enterprise application",
          "organization-wide system",
          "sistema empresarial",
        ],
        confusion:
          "Enterprise System descreve scale e shared process scope; ERP é classe específica de integrated resource-planning modules.",
      }),
    },
    "core-system": {
      en: content({
        definition:
          "Core System is a system that owns or executes capabilities and records essential to an organization's primary business, such that its incorrectness or unavailability directly threatens critical operations.",
        purpose:
          "The classification identifies where stronger correctness, continuity, recovery, security, change control, capacity, ownership, and investment are justified by business impact.",
        when: "Designate one through business-impact analysis rather than branding, documenting critical journeys, authoritative records, dependencies, objectives, failure tolerance, manual alternatives, recovery order, data reconciliation, and accountable owners.",
        context:
          "A bank's ledger records balances and committed money movements; other channels may be unavailable, but the ledger cannot invent, lose, or duplicate value.",
        application:
          "The bank assigns explicit ownership, defines strict invariants and service objectives, isolates failure domains, audits changes, tests disaster recovery and reconciliation, reserves capacity, and prevents downstream tools from becoming hidden authorities.",
        phrase:
          "The ledger is a Core System because every channel depends on its authoritative balances and transaction integrity.",
        aliases: [
          "mission-critical system",
          "core business platform",
          "sistema central",
        ],
        confusion:
          "A Core System is critical to the primary business capability; an Enterprise System has broad organizational reach but may include modules that are not individually mission-critical.",
      }),
      "pt-BR": content({
        definition:
          "Core System é um system que possui ou executa capabilities e records essenciais ao primary business, cuja incorreção ou indisponibilidade ameaça critical operations diretamente.",
        purpose:
          "A classificação indica onde correctness, continuity, recovery, security, change control, capacity, ownership e investment mais fortes são justificados.",
        when: "Designe-o por business-impact analysis, documentando critical journeys, authoritative records, dependencies, objectives, failure tolerance, manual alternatives, recovery order, reconciliation e owners.",
        context:
          "O ledger de um banco registra balances e committed money movements; channels podem falhar, mas ledger não pode criar, perder ou duplicar value.",
        application:
          "O banco define ownership, invariants e objectives, isola failure domains, audita changes, testa disaster recovery e reconciliation, reserva capacity e impede hidden authorities.",
        phrase:
          "Ledger é Core System porque todos os channels dependem de authoritative balances e transaction integrity.",
        aliases: [
          "mission-critical system",
          "core business platform",
          "sistema central",
        ],
        confusion:
          "Core System é crítico ao primary business; Enterprise System tem broad reach, mas nem todo module é mission-critical.",
      }),
    },
    backoffice: {
      en: content({
        definition:
          "Backoffice is the set of internal operational capabilities, workflows, and systems used by staff to administer, verify, reconcile, support, and control business activity that customers do not directly perform.",
        purpose:
          "It enables exception handling and human operations behind customer-facing products while preserving authorization, evidence, consistency, and accountability.",
        when: "Build backoffice capabilities for legitimate internal work that cannot or should not be fully automated, defining roles, queues, case context, approval, segregation of duties, audit, sensitive-data masking, reversibility, service levels, and accessibility.",
        context:
          "Support and finance staff investigate a disputed order, review evidence, correct an address, approve a refund, and document the final resolution.",
        application:
          "The backoffice presents a case timeline and permitted actions by role, masks unnecessary data, requires reason and second approval for high-value refunds, executes commands through domain APIs, records before and after state, and supports recovery.",
        phrase:
          "Perform the refund through the Backoffice workflow so authorization, approval, domain validation, and audit remain intact.",
        aliases: [
          "back-office operations",
          "internal operations system",
          "retaguarda operacional",
        ],
        confusion:
          "Backoffice is the broader internal operational function and tooling; an Admin Panel is one interface that may expose a subset of administrative controls.",
      }),
      "pt-BR": content({
        definition:
          "Backoffice é o conjunto de internal operational capabilities, workflows e systems usado por staff para administrar, verificar, reconciliar, suportar e controlar business activity não executada diretamente por customers.",
        purpose:
          "Ele permite exception handling e human operations por trás do customer-facing product, preservando authorization, evidence, consistency e accountability.",
        when: "Crie capabilities para internal work legítimo não totalmente automatizável, definindo roles, queues, case context, approval, segregation of duties, audit, masking, reversibility, service levels e accessibility.",
        context:
          "Support e finance investigam disputed order, revisam evidence, corrigem address, aprovam refund e documentam resolution.",
        application:
          "O backoffice exibe case timeline e actions por role, mascara data, exige reason e second approval, chama domain APIs, registra before e after state e suporta recovery.",
        phrase:
          "Faça refund pelo Backoffice workflow para preservar authorization, approval, domain validation e audit.",
        aliases: [
          "back-office operations",
          "internal operations system",
          "retaguarda operacional",
        ],
        confusion:
          "Backoffice é função e tooling operacional mais amplo; Admin Panel é uma interface com subset de controls.",
      }),
    },
    "admin-panel": {
      en: content({
        definition:
          "Admin Panel is a restricted user interface through which authorized operators configure a product, manage records, inspect state, and execute administrative actions.",
        purpose:
          "It gives controlled operational access to capabilities that should not be exposed in ordinary customer interfaces or through direct database manipulation.",
        when: "Create one for recurring administrative tasks, treating it as a high-risk product with strong authentication, granular authorization, safe defaults, validation, confirmation, audit, sensitive-data minimization, concurrency handling, accessibility, and incident controls.",
        context:
          "Operations staff need to suspend a compromised merchant account, review its current status, and understand the effect on payments and users.",
        application:
          "The panel requires MFA and a specific permission, shows tenant and consequence clearly, collects a reason, requires step-up or approval for destructive actions, invokes an idempotent domain command, logs the decision, and offers controlled reversal.",
        phrase:
          "The Admin Panel must call the account-suspension command; direct database edits would bypass invariants and audit.",
        aliases: [
          "administration panel",
          "admin console",
          "painel administrativo",
        ],
        confusion:
          "An Admin Panel is a restricted interface for administrative actions; Backoffice includes the broader people, processes, queues, and systems supporting internal operations.",
      }),
      "pt-BR": content({
        definition:
          "Admin Panel é uma restricted user interface pela qual authorized operators configuram product, gerenciam records, inspecionam state e executam administrative actions.",
        purpose:
          "Ele oferece controlled operational access a capabilities que não pertencem a customer interfaces nem a direct database manipulation.",
        when: "Crie-o para recurring administrative tasks como high-risk product, com strong authentication, granular authorization, safe defaults, validation, confirmation, audit, data minimization, concurrency e accessibility.",
        context:
          "Operations staff suspendem compromised merchant account, revisam current status e entendem efeito em payments e users.",
        application:
          "O panel exige MFA e permission, mostra tenant e consequence, coleta reason, exige approval em destructive action, invoca idempotent domain command, registra decision e oferece reversal.",
        phrase:
          "Admin Panel deve chamar account-suspension command; direct database edit burlaria invariants e audit.",
        aliases: [
          "administration panel",
          "admin console",
          "painel administrativo",
        ],
        confusion:
          "Admin Panel é interface restrita; Backoffice inclui people, processes, queues e systems das internal operations.",
      }),
    },
    cms: {
      en: content({
        definition:
          "CMS, short for Content Management System, is software for creating, structuring, reviewing, versioning, publishing, and governing digital content separately from the code that presents it.",
        purpose:
          "It lets content teams manage websites and channels through controlled workflows while developers maintain templates, integrations, delivery, and platform behavior.",
        when: "Use a CMS when non-developers repeatedly manage substantial content, defining content models, roles, workflow, preview, localization, assets, scheduling, version history, search, accessibility, APIs, caching, security, backup, and retirement.",
        context:
          "A global company publishes product pages, help articles, campaigns, and translations across web and mobile without deploying application code for every editorial change.",
        application:
          "The team models reusable content types, separates draft-review-publish permissions, previews channel rendering, links translations, optimizes assets, exposes versioned delivery APIs, invalidates caches on publication, keeps audit history, and tests accessibility.",
        phrase:
          "Model the promotion as structured CMS content so dates, locale, review, and channel rendering remain governed.",
        aliases: [
          "Content Management System",
          "content platform",
          "sistema de gerenciamento de conteúdo",
        ],
        confusion:
          "A CMS manages digital content and publication; a CRM manages customer relationships, interactions, and commercial or service processes.",
      }),
      "pt-BR": content({
        definition:
          "CMS, sigla de Content Management System, é software para criar, estruturar, revisar, versionar, publicar e governar digital content separado do code de apresentação.",
        purpose:
          "Ele permite a content teams gerenciar websites e channels por controlled workflows enquanto developers mantêm templates, integrations e platform behavior.",
        when: "Use CMS quando non-developers gerenciarem content recorrente, definindo models, roles, workflow, preview, localization, assets, scheduling, history, search, accessibility, APIs, cache, security e backup.",
        context:
          "Uma global company publica product pages, help articles, campaigns e translations em web e mobile sem code deploy por editorial change.",
        application:
          "O time modela content types, separa draft-review-publish permissions, prevê rendering, liga translations, expõe versioned APIs, invalida cache, mantém audit e testa accessibility.",
        phrase:
          "Modele promotion como structured CMS content para dates, locale, review e channel rendering governados.",
        aliases: [
          "Content Management System",
          "content platform",
          "sistema de gerenciamento de conteúdo",
        ],
        confusion:
          "CMS gerencia digital content e publication; CRM gerencia customer relationships e commercial ou service processes.",
      }),
    },
    wms: {
      en: content({
        definition:
          "WMS, short for Warehouse Management System, is software that directs and records inventory movement and warehouse work from receiving and put-away through storage, picking, packing, counting, and shipping.",
        purpose:
          "It maintains location-level inventory accuracy and coordinates people, equipment, priorities, and rules so orders move through a warehouse efficiently and traceably.",
        when: "Use a WMS for physical fulfillment requiring bin-level control, defining item and location identity, units, lot and serial tracking, task allocation, replenishment, scanning, exceptions, integrations, cutoffs, audit, offline behavior, and reconciliation.",
        context:
          "An e-commerce warehouse must know which bin contains each sellable unit, direct pickers, avoid expired lots, and confirm exactly what left in each shipment.",
        application:
          "The WMS receives expected stock and orders, scans receipt and movement, applies put-away and FEFO rules, reserves by location, issues pick waves, validates pack and carrier handoff, records adjustments with reason, and reconciles physical counts.",
        phrase:
          "The WMS owns physical bin inventory; the storefront receives available-to-promise quantities through the inventory contract.",
        aliases: [
          "Warehouse Management System",
          "warehouse operations platform",
          "sistema de gerenciamento de armazém",
        ],
        confusion:
          "A WMS controls work and inventory inside warehouses; a TMS plans and executes transportation between origins and destinations.",
      }),
      "pt-BR": content({
        definition:
          "WMS, sigla de Warehouse Management System, é software que dirige e registra inventory movement e warehouse work de receiving e put-away até storage, picking, packing, counting e shipping.",
        purpose:
          "Ele mantém location-level inventory accuracy e coordena people, equipment, priorities e rules para orders fluírem com eficiência e traceability.",
        when: "Use WMS em physical fulfillment com bin-level control, definindo item e location identity, units, lots, serials, task allocation, replenishment, scanning, exceptions, integrations, cutoffs e reconciliation.",
        context:
          "Um e-commerce warehouse localiza cada sellable unit, dirige pickers, evita expired lots e confirma o que saiu em cada shipment.",
        application:
          "O WMS recebe stock e orders, escaneia movement, aplica put-away e FEFO, reserva por location, cria pick waves, valida pack e carrier handoff e reconcilia physical counts.",
        phrase:
          "WMS possui physical bin inventory; storefront recebe available-to-promise pelo inventory contract.",
        aliases: [
          "Warehouse Management System",
          "warehouse operations platform",
          "sistema de gerenciamento de armazém",
        ],
        confusion:
          "WMS controla warehouse work e inventory; TMS planeja transportation entre origins e destinations.",
      }),
    },
    tms: {
      en: content({
        definition:
          "TMS, short for Transportation Management System, is software for planning, tendering, executing, tracking, settling, and analyzing the movement of goods across carriers, routes, modes, and destinations.",
        purpose:
          "It coordinates transportation cost, service level, capacity, compliance, visibility, and freight payment after goods are ready to move.",
        when: "Use a TMS when shipment volume and carrier complexity require systematic routing, rating, consolidation, tendering, documents, appointments, tracking, exceptions, claims, audit, and freight reconciliation.",
        context:
          "A retailer ships from several distribution centers using parcel and freight carriers with different rates, capacities, cutoffs, and delivery commitments.",
        application:
          "The TMS imports shipment demand, consolidates compatible loads, selects route and carrier under cost and promise constraints, tenders capacity, produces documents, consumes tracking events, manages delay exceptions, and audits invoices against contracted rates.",
        phrase:
          "The TMS chose this carrier and route to meet the delivery promise within contracted capacity and cost.",
        aliases: [
          "Transportation Management System",
          "transport management platform",
          "sistema de gerenciamento de transporte",
        ],
        confusion:
          "A TMS manages transportation execution and freight; a WMS manages inventory locations and work within a warehouse.",
      }),
      "pt-BR": content({
        definition:
          "TMS, sigla de Transportation Management System, é software para planejar, tender, executar, rastrear, liquidar e analisar movement de goods entre carriers, routes, modes e destinations.",
        purpose:
          "Ele coordena transportation cost, service level, capacity, compliance, visibility e freight payment depois que goods estão prontas.",
        when: "Use TMS quando shipment volume e carrier complexity exigirem routing, rating, consolidation, tendering, documents, appointments, tracking, exceptions, claims e freight reconciliation.",
        context:
          "Um retailer envia de distribution centers por parcel e freight carriers com rates, capacities, cutoffs e delivery commitments diferentes.",
        application:
          "O TMS importa shipment demand, consolida loads, escolhe route e carrier, reserva capacity, gera documents, consome tracking events, trata delays e audita invoices.",
        phrase:
          "TMS escolheu carrier e route para cumprir delivery promise dentro de contracted capacity e cost.",
        aliases: [
          "Transportation Management System",
          "transport management platform",
          "sistema de gerenciamento de transporte",
        ],
        confusion:
          "TMS gerencia transportation e freight; WMS gerencia inventory locations e warehouse work.",
      }),
    },
    hris: {
      en: content({
        definition:
          "HRIS, short for Human Resources Information System, is a system that manages authoritative workforce records and human-resources processes such as employment, organization, benefits, leave, documents, and lifecycle changes.",
        purpose:
          "It gives the organization a governed workforce source for administration, reporting, compliance, and integrations while protecting highly sensitive employee data.",
        when: "Use an HRIS for workforce lifecycle management, defining worker identity, effective-dated records, legal entities, roles, approvals, privacy, localization, retention, employee self-service, payroll and identity integrations, audit, and access recertification.",
        context:
          "A company hires, transfers, promotes, places on leave, and terminates employees across countries, and each change must reach payroll and access systems at the correct effective time.",
        application:
          "The HRIS records approved effective-dated changes, restricts fields by role and jurisdiction, preserves history, emits lifecycle events to payroll and identity provisioning, reconciles delivery, supports employee corrections, and audits privileged access.",
        phrase:
          "The HRIS termination becomes effective at the recorded time and triggers identity deprovisioning without deleting required employment history.",
        aliases: [
          "Human Resources Information System",
          "HR information system",
          "sistema de informação de recursos humanos",
        ],
        confusion:
          "An HRIS manages broad workforce records and processes; payroll software specifically calculates compensation, deductions, taxes, and payments.",
      }),
      "pt-BR": content({
        definition:
          "HRIS, sigla de Human Resources Information System, é um system que gerencia authoritative workforce records e HR processes como employment, organization, benefits, leave, documents e lifecycle changes.",
        purpose:
          "Ele oferece governed workforce source para administration, reporting, compliance e integrations, protegendo sensitive employee data.",
        when: "Use HRIS para workforce lifecycle, definindo worker identity, effective-dated records, legal entities, roles, approvals, privacy, localization, retention, self-service, payroll e identity integrations e audit.",
        context:
          "Uma company contrata, transfere, promove, afasta e encerra employees em countries diferentes, e cada change chega a payroll e access systems no effective time.",
        application:
          "O HRIS registra approved changes, restringe fields, preserva history, emite lifecycle events a payroll e identity provisioning, reconcilia delivery e audita privileged access.",
        phrase:
          "A termination no HRIS entra no effective time e dispara identity deprovisioning sem apagar required history.",
        aliases: [
          "Human Resources Information System",
          "HR information system",
          "sistema de informação de recursos humanos",
        ],
        confusion:
          "HRIS gerencia workforce records e processes amplos; payroll software calcula compensation, taxes e payments.",
      }),
    },
    pos: {
      en: content({
        definition:
          "POS, short for Point of Sale, is the system and transaction boundary where a merchant records a sale, calculates amounts, accepts payment, issues evidence, and updates connected inventory and accounting processes.",
        purpose:
          "It coordinates checkout at a physical or assisted channel while preserving price, tax, payment, receipt, cash, device, operator, and offline integrity.",
        when: "Use a POS for retail or service checkout, designing product and price sync, tenders, tax, discounts, returns, shifts, devices, peripheral security, connectivity loss, idempotency, settlement, reconciliation, roles, and audit.",
        context:
          "A store continues selling during an internet interruption and later synchronizes card outcomes, receipts, cash totals, and inventory without duplicate transactions.",
        application:
          "The POS snapshots approved catalog and tax rules, identifies operator and terminal, assigns immutable transaction IDs, follows controlled offline limits, prints a receipt, queues encrypted sync, reconciles processor settlement and cash drawer, and flags uncertain payments.",
        phrase:
          "The POS must reconcile this offline sale by its original transaction ID before retrying payment or inventory updates.",
        aliases: [
          "Point of Sale",
          "checkout terminal system",
          "ponto de venda",
        ],
        confusion:
          "POS is the merchant checkout system and transaction context; a payment terminal is the device that captures a payment method and may be one POS component.",
      }),
      "pt-BR": content({
        definition:
          "POS, sigla de Point of Sale, é o system e transaction boundary onde merchant registra sale, calcula amounts, aceita payment, emite evidence e atualiza inventory e accounting processes.",
        purpose:
          "Ele coordena checkout físico ou assistido preservando price, tax, payment, receipt, cash, device, operator e offline integrity.",
        when: "Use POS em retail ou service checkout, projetando catalog sync, tenders, tax, discounts, returns, shifts, devices, security, connectivity loss, idempotency, settlement, reconciliation, roles e audit.",
        context:
          "Uma store vende durante internet outage e depois sincroniza card outcomes, receipts, cash totals e inventory sem duplicate transactions.",
        application:
          "O POS guarda approved catalog e tax rules, identifica operator e terminal, usa immutable transaction IDs, aplica offline limits, emite receipt, sincroniza encrypted data e reconcilia settlement e cash.",
        phrase:
          "POS precisa reconciliar offline sale pelo original transaction ID antes de retry de payment ou inventory.",
        aliases: [
          "Point of Sale",
          "checkout terminal system",
          "ponto de venda",
        ],
        confusion:
          "POS é merchant checkout system e transaction context; payment terminal é device de captura e pode ser um component.",
      }),
    },
    "payment-gateway": {
      en: content({
        definition:
          "Payment Gateway is the merchant-facing technical service that securely accepts payment details and transaction requests from a checkout channel and routes them to payment processing infrastructure.",
        purpose:
          "It provides a controlled integration boundary for payment-method capture, tokenization, authentication flows, routing, provider responses, and callbacks without requiring the merchant application to handle every network directly.",
        when: "Use one for online or integrated checkout, evaluating supported methods and regions, hosted versus direct capture, compliance scope, tokens, idempotency, authentication, availability, latency, webhooks, reconciliation, portability, fees, and incident support.",
        context:
          "An online store accepts cards and wallets through a hosted payment form and needs one API for authorization, status, refunds, and asynchronous outcomes.",
        application:
          "Checkout creates an idempotent payment intent, sends sensitive details directly from the hosted component to the gateway, handles required customer authentication, treats timeout as unknown, verifies signed webhooks, stores provider references, and reconciles settlements.",
        phrase:
          "The Payment Gateway returned a timeout, so query or reconcile the original payment intent instead of creating a second charge.",
        aliases: [
          "online payment gateway",
          "merchant payment gateway",
          "gateway de pagamento",
        ],
        confusion:
          "A Payment Gateway is the merchant integration and routing layer; a Payment Processor performs transaction processing and network communication, though one provider may offer both.",
      }),
      "pt-BR": content({
        definition:
          "Payment Gateway é o merchant-facing technical service que recebe payment details e transaction requests do checkout com segurança e roteia para payment processing infrastructure.",
        purpose:
          "Ele fornece controlled integration boundary para payment capture, tokenization, authentication flows, routing, responses e callbacks sem merchant integrar cada network.",
        when: "Use-o em online checkout, avaliando methods, regions, hosted ou direct capture, compliance scope, tokens, idempotency, authentication, availability, webhooks, reconciliation, portability, fees e support.",
        context:
          "Uma online store aceita cards e wallets por hosted form e usa uma API para authorization, status, refunds e async outcomes.",
        application:
          "Checkout cria idempotent payment intent, envia sensitive details do hosted component ao gateway, trata authentication, timeout incerto, signed webhooks e reconciliation.",
        phrase:
          "Payment Gateway deu timeout; consulte o original payment intent em vez de criar second charge.",
        aliases: [
          "online payment gateway",
          "merchant payment gateway",
          "gateway de pagamento",
        ],
        confusion:
          "Payment Gateway é merchant integration layer; Payment Processor executa transaction processing e network communication.",
      }),
    },
    "payment-processor": {
      en: content({
        definition:
          "Payment Processor is an entity and technical platform that receives payment transaction instructions, applies processing rules, communicates with acquiring and payment networks, and returns authorization, clearing, or settlement outcomes.",
        purpose:
          "It executes the operational movement and state transitions of payment messages between merchants, acquirers, networks, and financial institutions.",
        when: "Integrate with one after assessing payment coverage, authorization and capture model, fraud hooks, uptime, response semantics, retries, duplicate protection, settlement, disputes, reports, compliance, pricing, portability, and support.",
        context:
          "A merchant sends a card authorization that must reach the appropriate network and issuer, later captures the approved amount, and reconciles funding.",
        application:
          "The processor validates and routes the request, preserves merchant and network references, returns a coded authorization result, accepts idempotent capture or reversal, produces settlement and fee records, and reports disputes and adjustments.",
        phrase:
          "The Payment Processor approved authorization but settlement is a later lifecycle stage that must be reconciled separately.",
        aliases: [
          "payment processing platform",
          "transaction processor",
          "processador de pagamentos",
        ],
        confusion:
          "A Payment Processor handles transaction processing; an Acquirer is the financial institution or licensed entity that provides merchant acceptance and receives settlement for the merchant.",
      }),
      "pt-BR": content({
        definition:
          "Payment Processor é a entity e technical platform que recebe payment instructions, aplica processing rules, comunica com acquiring e payment networks e retorna authorization, clearing ou settlement outcomes.",
        purpose:
          "Ele executa movement e state transitions de payment messages entre merchants, acquirers, networks e financial institutions.",
        when: "Integre-o após avaliar coverage, authorization e capture model, fraud hooks, uptime, response semantics, retries, duplicate protection, settlement, disputes, reports, compliance, pricing e support.",
        context:
          "Um merchant envia card authorization à network e issuer, depois captura approved amount e reconcilia funding.",
        application:
          "Processor valida e roteia request, preserva references, retorna authorization result, aceita idempotent capture ou reversal, produz settlement e fee records e reporta disputes.",
        phrase:
          "Payment Processor aprovou authorization; settlement é later lifecycle stage reconciliada separadamente.",
        aliases: [
          "payment processing platform",
          "transaction processor",
          "processador de pagamentos",
        ],
        confusion:
          "Payment Processor processa transactions; Acquirer é instituição ou licensed entity que oferece merchant acceptance.",
      }),
    },
    acquirer: {
      en: content({
        definition:
          "Acquirer is the financial institution or licensed payment entity that contracts with a merchant to accept card or network payments, submits transactions into the payment system, and receives settlement on the merchant's behalf.",
        purpose:
          "It connects merchants to payment networks while underwriting acceptance risk, maintaining merchant accounts, handling settlement, fees, disputes, and scheme obligations.",
        when: "Select and integrate an acquirer when offering payment acceptance, evaluating jurisdictions, methods, underwriting, settlement timing, reserves, fees, chargebacks, currencies, descriptors, reporting, reliability, compliance, and processor relationships.",
        context:
          "A retailer needs to accept card payments, receive funded settlement, and respond to disputes under network rules through its contracted merchant relationship.",
        application:
          "The acquirer onboards and verifies the merchant, provides acceptance credentials, submits transactions via its processor, receives scheme settlement, deducts fees and reserves, funds the merchant, sends reconciliation files, and administers chargebacks.",
        phrase:
          "The Acquirer settles merchant proceeds after network clearing; the Issuer separately holds the cardholder relationship.",
        aliases: ["acquiring bank", "merchant acquirer", "adquirente"],
        confusion:
          "An Acquirer serves the merchant side of payment acceptance; an Issuer provides the card or payment account to the customer and authorizes against that account.",
      }),
      "pt-BR": content({
        definition:
          "Acquirer é a financial institution ou licensed payment entity que contrata merchant para aceitar card ou network payments, submete transactions e recebe settlement em seu nome.",
        purpose:
          "Ela conecta merchants a payment networks, assumindo acceptance risk e administrando merchant accounts, settlement, fees, disputes e scheme obligations.",
        when: "Selecione-a para payment acceptance avaliando jurisdictions, methods, underwriting, settlement timing, reserves, fees, chargebacks, currencies, reporting, reliability e compliance.",
        context:
          "Um retailer aceita card payments, recebe funded settlement e responde disputes sob network rules por sua merchant relationship.",
        application:
          "Acquirer verifica merchant, fornece credentials, envia transactions, recebe scheme settlement, deduz fees e reserves, financia merchant, entrega reconciliation files e administra chargebacks.",
        phrase:
          "Acquirer liquida merchant proceeds após clearing; Issuer mantém separadamente cardholder relationship.",
        aliases: ["acquiring bank", "merchant acquirer", "adquirente"],
        confusion:
          "Acquirer atende merchant side; Issuer oferece card ou payment account ao customer e autoriza contra essa account.",
      }),
    },
    issuer: {
      en: content({
        definition:
          "Issuer is the financial institution or licensed entity that provides a payment card or account to a customer and decides whether transactions may use that customer's credit or funds.",
        purpose:
          "It owns the cardholder relationship, account risk and servicing, authentication, authorization decisions, statements, and customer-side dispute handling within payment-network rules.",
        when: "Account for issuer behavior when designing payment acceptance, including authorization codes and declines, customer authentication, available balance, fraud decisions, reversals, clearing, disputes, timeouts, and regional rules.",
        context:
          "A customer attempts a purchase, and the card issuer evaluates card status, authentication evidence, balance or credit, fraud signals, and merchant information before responding.",
        application:
          "The issuer authenticates the cardholder when required, authorizes or declines with a network response, places and later clears a hold, processes reversals, posts the transaction to the statement, and investigates a cardholder dispute.",
        phrase:
          "The Issuer declined this authorization; the merchant should follow the response semantics rather than repeatedly retrying the same payment.",
        aliases: ["issuing bank", "card issuer", "emissor"],
        confusion:
          "An Issuer serves the cardholder and authorizes use of their account; an Acquirer serves the merchant and submits accepted transactions to the network.",
      }),
      "pt-BR": content({
        definition:
          "Issuer é a financial institution ou licensed entity que fornece payment card ou account a customer e decide se transactions podem usar seu credit ou funds.",
        purpose:
          "Ele possui cardholder relationship, account risk e servicing, authentication, authorization decisions, statements e customer-side disputes sob network rules.",
        when: "Considere issuer behavior em payment acceptance, incluindo authorization codes e declines, customer authentication, balance, fraud decisions, reversals, clearing, disputes, timeouts e regional rules.",
        context:
          "Um customer tenta purchase e card issuer avalia card status, authentication evidence, balance ou credit, fraud signals e merchant info.",
        application:
          "Issuer autentica cardholder, autoriza ou declina, cria e liquida hold, processa reversal, lança transaction no statement e investiga dispute.",
        phrase:
          "Issuer recusou authorization; merchant deve seguir response semantics em vez de repetir payment continuamente.",
        aliases: ["issuing bank", "card issuer", "emissor"],
        confusion:
          "Issuer atende cardholder; Acquirer atende merchant e submete accepted transactions à network.",
      }),
    },
    "banking-as-a-service": {
      en: content({
        definition:
          "Banking as a Service (BaaS) is a model in which a licensed or regulated provider exposes banking capabilities such as accounts, payments, cards, identity checks, or ledger operations to another company through APIs and operational services.",
        purpose:
          "It lets a product embed financial capabilities without independently building every regulated institution, network connection, and operational process.",
        when: "Adopt BaaS only after defining regulatory roles, customer ownership, funds flow, safeguarding, onboarding, consent, ledger authority, fraud, disputes, statements, reconciliation, service objectives, data rights, subcontractors, incident response, and exit migration.",
        context:
          "A marketplace wants to provide seller accounts and payouts under its brand while a licensed partner holds accounts and connects to payment rails.",
        application:
          "The companies document which party performs each regulated duty, integrate versioned APIs and signed events, maintain internal and provider references, reconcile balances daily, handle customer support and complaints by ownership, monitor provider controls, and rehearse continuity and migration.",
        phrase:
          "The BaaS provider exposes the account capability, but our product still owns the customer journey, reconciliation, and assigned compliance duties.",
        aliases: [
          "BaaS",
          "embedded banking platform",
          "serviços bancários como serviço",
        ],
        confusion:
          "Banking as a Service supplies regulated banking capabilities to another business; open banking primarily enables permissioned data and payment access through standardized interfaces.",
      }),
      "pt-BR": content({
        definition:
          "Banking as a Service (BaaS) é um model em que licensed ou regulated provider expõe banking capabilities como accounts, payments, cards, identity checks ou ledger operations por APIs e operational services.",
        purpose:
          "Ele permite incorporar financial capabilities sem construir independentemente toda regulated institution, network connection e operational process.",
        when: "Adote BaaS após definir regulatory roles, customer ownership, funds flow, safeguarding, onboarding, consent, ledger authority, fraud, disputes, statements, reconciliation, objectives, data rights, incidents e exit migration.",
        context:
          "Um marketplace oferece seller accounts e payouts sob sua brand enquanto licensed partner mantém accounts e payment rails.",
        application:
          "As companies documentam regulated duties, integram versioned APIs e signed events, preservam references, reconciliam balances, dividem support e complaints, monitoram controls e ensaiam migration.",
        phrase:
          "BaaS provider expõe account capability; nosso product ainda possui customer journey, reconciliation e assigned compliance duties.",
        aliases: [
          "BaaS",
          "embedded banking platform",
          "serviços bancários como serviço",
        ],
        confusion:
          "Banking as a Service fornece regulated banking capabilities; open banking habilita permissioned data e payment access por standardized interfaces.",
      }),
    },
    "platform-as-a-service": {
      en: content({
        definition:
          "Platform as a Service (PaaS) is a cloud service model in which a provider operates the application runtime platform, deployment substrate, and supporting infrastructure while customers deploy and manage their applications and data.",
        purpose:
          "It reduces infrastructure and runtime administration so product teams can deliver software through standardized build, deploy, scaling, configuration, and observability capabilities.",
        when: "Choose PaaS when its supported runtimes and operating model fit the workload, evaluating responsibility boundaries, deployment, networking, identity, secrets, data services, scaling, limits, availability, regions, observability, portability, cost, upgrades, and exit.",
        context:
          "A small team needs to deploy web services with managed runtimes, routing, certificates, health checks, logs, and autoscaling without operating a container control plane.",
        application:
          "The team builds immutable artifacts, declares runtime and resources, stores state in managed services, configures workload identity and secrets, defines health and scaling policies, monitors quotas and cost, tests provider failure, and documents migration options.",
        phrase:
          "The PaaS operates runtime and deployment infrastructure; our team still owns application correctness, data, configuration, and capacity choices.",
        aliases: [
          "PaaS",
          "managed application platform",
          "plataforma como serviço",
        ],
        confusion:
          "Platform as a Service manages an application platform for customer code; Infrastructure as a Service supplies lower-level compute, network, and storage that customers configure more directly.",
      }),
      "pt-BR": content({
        definition:
          "Platform as a Service (PaaS) é um cloud service model em que provider opera application runtime platform, deployment substrate e supporting infrastructure, enquanto customers gerenciam apps e data.",
        purpose:
          "Ele reduz infrastructure e runtime administration para product teams entregarem software por standardized build, deploy, scaling, config e observability.",
        when: "Escolha PaaS quando runtimes e operating model servirem ao workload, avaliando responsibility boundaries, deploy, network, identity, secrets, data, scaling, limits, availability, observability, portability, cost e exit.",
        context:
          "Um small team deploya web services com managed runtimes, routing, certificates, health checks, logs e autoscaling sem operar container control plane.",
        application:
          "O time cria immutable artifacts, declara runtime e resources, usa managed state, configura workload identity e secrets, define health e scaling, monitora quotas e testa provider failure.",
        phrase:
          "PaaS opera runtime e deployment infrastructure; nosso time ainda possui application correctness, data, config e capacity choices.",
        aliases: [
          "PaaS",
          "managed application platform",
          "plataforma como serviço",
        ],
        confusion:
          "PaaS gerencia application platform; IaaS fornece compute, network e storage de nível mais baixo.",
      }),
    },
    "infrastructure-as-a-service": {
      en: content({
        definition:
          "Infrastructure as a Service (IaaS) is a cloud service model that provides programmable compute, networking, storage, and related infrastructure resources while the customer manages operating systems, runtime, applications, and data above them.",
        purpose:
          "It offers elastic infrastructure and automation without customers purchasing and operating the underlying physical data-center hardware.",
        when: "Choose IaaS when workloads need infrastructure-level control or portability, defining shared responsibility for images, patching, identity, network, encryption, backup, availability, scaling, quotas, logging, cost, incident response, and decommissioning.",
        context:
          "A company migrates a specialized server application requiring custom operating-system modules and network topology that a managed application platform does not support.",
        application:
          "The platform team provisions infrastructure as code, uses hardened images and workload identity, segments networks, encrypts storage, patches guests, distributes instances across failure domains, tests backup recovery, tracks cost, and continuously scans configuration.",
        phrase:
          "IaaS secures the physical substrate, but we remain responsible for guest patching, network policy, application, and data protection.",
        aliases: [
          "IaaS",
          "cloud infrastructure service",
          "infraestrutura como serviço",
        ],
        confusion:
          "Infrastructure as a Service exposes virtualized infrastructure resources; Platform as a Service also operates more of the application runtime and deployment environment.",
      }),
      "pt-BR": content({
        definition:
          "Infrastructure as a Service (IaaS) é um cloud service model que oferece programmable compute, networking, storage e related resources, enquanto customer gerencia OS, runtime, apps e data.",
        purpose:
          "Ele oferece elastic infrastructure e automation sem customers comprarem e operarem physical data-center hardware.",
        when: "Escolha IaaS para infrastructure-level control, definindo shared responsibility por images, patching, identity, network, encryption, backup, availability, scaling, quotas, logging, cost, incidents e decommissioning.",
        context:
          "Uma company migra specialized server app com custom OS modules e network topology não suportada por managed platform.",
        application:
          "Platform team provisiona infrastructure as code, usa hardened images e workload identity, segmenta networks, cifra storage, corrige guests, distribui failure domains e testa recovery.",
        phrase:
          "IaaS protege physical substrate; nós respondemos por guest patching, network policy, app e data protection.",
        aliases: [
          "IaaS",
          "cloud infrastructure service",
          "infraestrutura como serviço",
        ],
        confusion:
          "IaaS expõe virtualized resources; PaaS também opera application runtime e deployment environment.",
      }),
    },
    "software-as-a-service": {
      en: content({
        definition:
          "Software as a Service (SaaS) is a delivery model in which a provider operates an application and makes its capabilities available to customers over a network, usually through subscription or usage-based access.",
        purpose:
          "It lets customers consume maintained software without deploying its full application stack while the provider manages releases, operations, infrastructure, and shared product evolution.",
        when: "Buy or build SaaS after defining customer and provider responsibilities for identity, configuration, data ownership, tenancy, availability, security, compliance, support, updates, integration, export, retention, pricing, and termination.",
        context:
          "A company adopts an online customer-support application used through browsers while the vendor hosts and continuously updates the product.",
        application:
          "The customer configures SSO, roles, retention and integrations, reviews vendor controls and service objectives, monitors use and spend, tests exports and account closure; the provider isolates tenants, operates releases, backups, incidents, and support.",
        phrase:
          "The SaaS provider operates the application, but we still own user access, configuration, lawful data use, and exit readiness.",
        aliases: ["SaaS", "hosted software service", "software como serviço"],
        confusion:
          "Software as a Service delivers a complete operated application; Platform as a Service supplies a managed platform on which customers deploy their own application code.",
      }),
      "pt-BR": content({
        definition:
          "Software as a Service (SaaS) é um delivery model em que provider opera application e oferece capabilities a customers por network, normalmente por subscription ou usage access.",
        purpose:
          "Ele permite consumir maintained software sem deployar full application stack, enquanto provider gerencia releases, operations, infrastructure e product evolution.",
        when: "Compre ou construa SaaS definindo responsibilities por identity, config, data ownership, tenancy, availability, security, compliance, support, updates, integration, export, retention, pricing e termination.",
        context:
          "Uma company adota online customer-support app via browser enquanto vendor hospeda e atualiza product continuamente.",
        application:
          "Customer configura SSO, roles, retention e integrations, revisa controls e objectives, monitora use e spend e testa export e closure; provider opera isolation, releases, backups e incidents.",
        phrase:
          "SaaS provider opera application; ainda possuímos user access, config, lawful data use e exit readiness.",
        aliases: ["SaaS", "hosted software service", "software como serviço"],
        confusion:
          "SaaS entrega complete operated application; PaaS fornece managed platform para customer code.",
      }),
    },
    subscription: {
      en: content({
        definition:
          "Subscription is a time-based commercial and entitlement agreement under which a customer receives continuing access to a product or service according to a plan, term, price, status, and renewal rules.",
        purpose:
          "It models an ongoing customer relationship and determines access, billing obligations, changes, renewals, pauses, cancellation, and lifecycle communication.",
        when: "Use it for recurring access products, defining account and payer identity, plan and entitlements, effective dates, trials, billing cadence, price changes, upgrades, downgrades, proration, renewal, grace, cancellation, refunds, taxes, and state transitions.",
        context:
          "A team workspace starts a trial, converts to a paid annual plan, adds seats, changes price at renewal, misses a payment, enters grace, and later cancels at term end.",
        application:
          "A subscription aggregate records immutable agreement and transition history, calculates effective entitlements separately from invoice collection, schedules renewal notices, applies idempotent changes and proration, handles payment failure by policy, and exposes the next charge and cancellation effect.",
        phrase:
          "The Subscription remains active through the paid term; cancellation disables renewal rather than immediately deleting access and history.",
        aliases: [
          "service subscription",
          "recurring access agreement",
          "assinatura",
        ],
        confusion:
          "A Subscription defines continuing access and commercial terms; Recurring Billing schedules and collects repeated charges that may finance that subscription.",
      }),
      "pt-BR": content({
        definition:
          "Subscription é um time-based commercial e entitlement agreement em que customer recebe continuing access conforme plan, term, price, status e renewal rules.",
        purpose:
          "Ela modela ongoing customer relationship e determina access, billing obligations, changes, renewals, pauses, cancellation e lifecycle communication.",
        when: "Use-a em recurring access products, definindo account e payer, plan, entitlements, effective dates, trials, billing cadence, prices, upgrades, proration, renewal, grace, cancellation, refunds, taxes e transitions.",
        context:
          "Um team workspace inicia trial, converte a annual plan, adiciona seats, muda price na renewal, falha payment, entra em grace e cancela no term end.",
        application:
          "Subscription aggregate registra agreement e transition history, separa entitlements de invoice collection, agenda notices, aplica idempotent changes e proration e expõe next charge e cancellation effect.",
        phrase:
          "Subscription permanece active durante paid term; cancellation desativa renewal sem apagar access e history imediatamente.",
        aliases: [
          "service subscription",
          "recurring access agreement",
          "assinatura",
        ],
        confusion:
          "Subscription define continuing access e terms; Recurring Billing agenda e coleta repeated charges.",
      }),
    },
    "recurring-billing": {
      en: content({
        definition:
          "Recurring Billing is the automated calculation, invoicing, and collection of charges that repeat according to a schedule or usage cycle under an active commercial agreement.",
        purpose:
          "It turns ongoing plans and measured use into predictable financial transactions while managing taxes, proration, payment failures, retries, credits, and reconciliation.",
        when: "Implement it for subscriptions and periodic services, defining billing anchor, period, usage cutoff, price version, currency, tax, invoice finalization, payment mandate, retry and dunning, credits, refunds, ledger posting, notifications, and idempotency.",
        context:
          "A SaaS account pays monthly for a base plan plus metered API usage, changes seats mid-cycle, and may require several collection attempts after a card decline.",
        application:
          "The billing engine snapshots the price and eligible usage at cutoff, computes proration and tax, finalizes one immutable invoice, creates an idempotent payment attempt, records processor outcomes, follows dunning policy, posts ledger entries, and reconciles settlement.",
        phrase:
          "Recurring Billing must reuse the invoice and payment identity during retry so a timeout cannot produce duplicate collection.",
        aliases: [
          "subscription billing",
          "periodic billing",
          "cobrança recorrente",
        ],
        confusion:
          "Recurring Billing performs repeated financial charging and invoicing; a Subscription defines the customer's continuing access and agreement lifecycle.",
      }),
      "pt-BR": content({
        definition:
          "Recurring Billing é o cálculo, invoicing e collection automatizados de charges repetidas por schedule ou usage cycle sob active commercial agreement.",
        purpose:
          "Ele transforma ongoing plans e measured use em financial transactions previsíveis, tratando taxes, proration, failures, retries, credits e reconciliation.",
        when: "Implemente-o em subscriptions e periodic services, definindo billing anchor, period, usage cutoff, price version, currency, tax, invoice, payment mandate, dunning, credits, ledger, notifications e idempotency.",
        context:
          "Uma SaaS account paga base plan e metered API usage por mês, muda seats mid-cycle e pode ter collection attempts após card decline.",
        application:
          "Billing engine congela price e usage, calcula proration e tax, finaliza immutable invoice, cria idempotent payment attempt, registra outcomes, segue dunning, lança ledger e reconcilia settlement.",
        phrase:
          "Recurring Billing reutiliza invoice e payment identity no retry para timeout não gerar duplicate collection.",
        aliases: [
          "subscription billing",
          "periodic billing",
          "cobrança recorrente",
        ],
        confusion:
          "Recurring Billing executa repeated charging e invoicing; Subscription define continuing access e agreement lifecycle.",
      }),
    },
    "transaction-fee": {
      en: content({
        definition:
          "Transaction Fee is a charge assessed for processing, enabling, settling, or servicing an individual transaction, commonly defined as a fixed amount, a percentage, or a combination under stated conditions.",
        purpose:
          "It allocates processing and network cost or monetizes transaction infrastructure while giving merchants and customers a calculable charge tied to an event.",
        when: "Model it in payment, marketplace, trading, and transfer systems by defining fee payer, base amount, rate, fixed component, currency, minimum, maximum, taxes, rounding, refunds, reversals, disputes, disclosure, recognition, and versioned effective time.",
        context:
          "A payment provider charges a merchant 2.9 percent plus a fixed amount for each captured card payment, with different refund and cross-border rules.",
        application:
          "The pricing service snapshots the fee schedule at capture, calculates each component with currency-specific rounding, records fee and tax ledger entries separately, links adjustments to the original transaction, and reconciles the provider settlement report.",
        phrase:
          "The Transaction Fee uses the captured amount and the price version effective at capture; a later refund follows its own adjustment rule.",
        aliases: [
          "per-transaction charge",
          "processing fee",
          "taxa de transação",
        ],
        confusion:
          "A Transaction Fee is charged per transaction event; a Subscription Fee is charged for continuing access over a period regardless of individual transaction count unless the plan says otherwise.",
      }),
      "pt-BR": content({
        definition:
          "Transaction Fee é uma charge aplicada por processing, enabling, settlement ou servicing de uma individual transaction, como fixed amount, percentage ou combinação sob conditions.",
        purpose:
          "Ela aloca processing e network cost ou monetiza transaction infrastructure com calculable charge ligada a um event.",
        when: "Modele-a em payment, marketplace, trading e transfer systems definindo fee payer, base amount, rate, fixed component, currency, limits, taxes, rounding, refunds, reversals, disputes, disclosure e effective time.",
        context:
          "Um payment provider cobra do merchant 2,9% mais fixed amount por captured card payment, com refund e cross-border rules distintos.",
        application:
          "Pricing service congela fee schedule no capture, calcula components com currency rounding, registra fee e tax ledger entries, vincula adjustments à original transaction e reconcilia settlement.",
        phrase:
          "Transaction Fee usa captured amount e price version do capture; later refund segue adjustment rule própria.",
        aliases: [
          "per-transaction charge",
          "processing fee",
          "taxa de transação",
        ],
        confusion:
          "Transaction Fee é cobrada por transaction event; Subscription Fee é cobrada por continuing access no período.",
      }),
    },
    commission: {
      en: content({
        definition:
          "Commission is compensation calculated from a defined commercial result, such as a percentage or tier of a sale, booking, contract, or collected amount, and owed to an eligible party under agreed rules.",
        purpose:
          "It rewards intermediaries, sellers, affiliates, or staff for attributable outcomes while translating incentive agreements into auditable financial obligations.",
        when: "Implement commission logic only after defining eligible event, beneficiary, attribution, basis, tiers, currency, effective plan, approval, caps, splits, cancellations, refunds, chargebacks, vesting, taxes, payment timing, and dispute process.",
        context:
          "A marketplace owes a partner ten percent of completed booking value, but cancellations within the refund window reverse the earning and shared referrals divide it.",
        application:
          "The system records the plan version and attribution at booking, accrues commission after completion, allocates splits deterministically, posts a linked reversal for refund, exposes calculation details, approves payout, and reconciles ledger and payment.",
        phrase:
          "Commission is earned on completed net booking value under the contract version, not on the initial cart amount.",
        aliases: ["sales commission", "revenue commission", "comissão"],
        confusion:
          "Commission compensates a party for an attributable result; a Transaction Fee charges for processing or enabling a transaction and may be paid to infrastructure providers.",
      }),
      "pt-BR": content({
        definition:
          "Commission é compensation calculada sobre commercial result definido, como percentage ou tier de sale, booking, contract ou collected amount, devida a eligible party sob rules acordadas.",
        purpose:
          "Ela remunera intermediaries, sellers, affiliates ou staff por attributable outcomes e transforma incentive agreements em auditable obligations.",
        when: "Implemente-a após definir eligible event, beneficiary, attribution, basis, tiers, currency, effective plan, approval, caps, splits, cancellations, refunds, chargebacks, vesting, taxes, payment timing e disputes.",
        context:
          "Um marketplace deve 10% de completed booking value a partner, mas cancellations na refund window revertem earning e shared referrals dividem valor.",
        application:
          "O system registra plan version e attribution, accrues após completion, divide deterministicamente, lança reversal em refund, expõe calculation, aprova payout e reconcilia ledger.",
        phrase:
          "Commission é earned sobre completed net booking value do contract version, não initial cart amount.",
        aliases: ["sales commission", "revenue commission", "comissão"],
        confusion:
          "Commission remunera party por result; Transaction Fee cobra por processing ou enabling de transaction.",
      }),
    },
    revenue: {
      en: content({
        definition:
          "Revenue is income recognized from an organization's ordinary delivery of goods or services during a period according to its applicable accounting and contractual recognition rules.",
        purpose:
          "It measures economic activity earned from customers and supports financial reporting, planning, performance analysis, valuation, and operational decisions.",
        when: "Calculate it only with a governed definition of performance obligation, transaction price, recognition timing, currency, tax treatment, discounts, refunds, principal-versus-agent role, adjustments, and reporting period.",
        context:
          "A customer prepays an annual software contract, but the provider earns and recognizes the service revenue over the twelve-month delivery period rather than entirely on cash receipt.",
        application:
          "Billing records the invoice and cash, accounting allocates the transaction price to obligations, a schedule recognizes revenue as service is delivered, contract modifications adjust prospectively or cumulatively, and the ledger reconciles to source contracts.",
        phrase:
          "Cash was collected upfront, but Revenue is recognized monthly as the contracted service obligation is satisfied.",
        aliases: ["recognized income", "operating revenue", "receita"],
        confusion:
          "Revenue is recognized income from ordinary activity; Cash Flow records actual cash movement and can occur before or after revenue recognition.",
      }),
      "pt-BR": content({
        definition:
          "Revenue é income reconhecida pela ordinary delivery de goods ou services de uma organization durante período conforme accounting e contractual recognition rules.",
        purpose:
          "Ela mede economic activity earned de customers e suporta financial reporting, planning, performance analysis, valuation e operational decisions.",
        when: "Calcule-a com governed definition de performance obligation, transaction price, recognition timing, currency, tax, discounts, refunds, principal-versus-agent role, adjustments e period.",
        context:
          "Um customer pré-paga annual software contract, mas provider reconhece service revenue ao longo dos doze meses de delivery.",
        application:
          "Billing registra invoice e cash, accounting aloca transaction price a obligations, schedule reconhece revenue durante service delivery, modifications ajustam e ledger reconcilia contracts.",
        phrase:
          "Cash foi recebido upfront, mas Revenue é reconhecida mensalmente conforme service obligation é satisfeita.",
        aliases: ["recognized income", "operating revenue", "receita"],
        confusion:
          "Revenue é recognized income; Cash Flow registra cash movement que pode ocorrer antes ou depois.",
      }),
    },
    "gross-revenue": {
      en: content({
        definition:
          "Gross Revenue is the total recognized revenue before specified reductions such as returns, refunds, discounts, rebates, allowances, and other contra-revenue items under a documented reporting policy.",
        purpose:
          "It shows the top-line amount generated before revenue deductions, allowing analysts to separate demand scale from the impact of concessions and reversals.",
        when: "Report it when gross and net views are decision-relevant, defining recognized transactions, principal-versus-agent presentation, included taxes and fees, period, currency conversion, exclusions, and each contra-revenue category.",
        context:
          "A retailer recognizes product sales during a month, then records promotional discounts and customer returns that reduce the amount retained as net revenue.",
        application:
          "The finance model sums recognized sales at transaction price before contra-revenue, separately records discounts, returns and allowances, prevents marketplace seller volume from being mistaken for company revenue, and reconciles both gross and net figures to the ledger.",
        phrase:
          "Gross Revenue is recognized sales before returns and discounts; it is not the marketplace's total seller transaction value.",
        aliases: [
          "gross sales revenue",
          "top-line revenue before deductions",
          "receita bruta",
        ],
        confusion:
          "Gross Revenue is company revenue before specified deductions; Gross Merchandise Value measures transaction value through a marketplace and may include amounts owed to sellers.",
      }),
      "pt-BR": content({
        definition:
          "Gross Revenue é total recognized revenue antes de reductions como returns, refunds, discounts, rebates, allowances e contra-revenue items sob reporting policy.",
        purpose:
          "Ela mostra top-line amount antes de deductions e separa demand scale do impacto de concessions e reversals.",
        when: "Reporte-a quando gross e net views importarem, definindo transactions reconhecidas, principal-versus-agent presentation, taxes e fees, period, currency, exclusions e contra-revenue categories.",
        context:
          "Um retailer reconhece monthly product sales e depois registra promotional discounts e customer returns que reduzem net revenue.",
        application:
          "Finance soma recognized sales antes de contra-revenue, registra discounts, returns e allowances separados, não confunde seller volume com company revenue e reconcilia ledger.",
        phrase:
          "Gross Revenue é recognized sales antes de returns e discounts; não é total seller transaction value do marketplace.",
        aliases: [
          "gross sales revenue",
          "top-line revenue before deductions",
          "receita bruta",
        ],
        confusion:
          "Gross Revenue é company revenue antes de deductions; GMV mede marketplace transaction value incluindo amounts de sellers.",
      }),
    },
    "net-revenue": {
      en: content({
        definition:
          "Net Revenue is recognized revenue remaining after subtracting the explicitly defined contra-revenue items such as returns, refunds, discounts, rebates, and allowances from gross revenue.",
        purpose:
          "It represents the top-line revenue retained after customer and channel reductions and gives a more comparable basis for margins and operating performance.",
        when: "Use it in financial and unit-economics analysis with a documented reconciliation from gross revenue, consistent treatment of taxes, marketplace principal-versus-agent position, payment fees, bad debt, currency, and period.",
        context:
          "A subscription company records plan charges but grants service credits, refunds cancellations, and applies discounts that reduce the revenue retained for the period.",
        application:
          "The model starts from recognized gross revenue, subtracts versioned contra-revenue accounts only, keeps payment processing expense outside revenue unless policy requires otherwise, reconciles ledger entries, and publishes the exact formula beside the metric.",
        phrase:
          "Net Revenue subtracts refunds, discounts, and credits under this accounting policy; payment processing cost is reported separately below revenue.",
        aliases: [
          "revenue net of deductions",
          "net sales revenue",
          "receita líquida",
        ],
        confusion:
          "Net Revenue is revenue after contra-revenue deductions; Net Income is profit after costs, operating expenses, interest, taxes, and other recognized items.",
      }),
      "pt-BR": content({
        definition:
          "Net Revenue é recognized revenue restante após subtrair contra-revenue items definidos, como returns, refunds, discounts, rebates e allowances, da gross revenue.",
        purpose:
          "Ela representa top-line revenue retida após customer e channel reductions e oferece base melhor para margins e operating performance.",
        when: "Use-a em financial e unit-economics analysis com reconciliation de gross revenue e treatment consistente de taxes, principal-versus-agent, payment fees, bad debt, currency e period.",
        context:
          "Uma subscription company registra plan charges, mas concede service credits, refunds e discounts que reduzem retained revenue.",
        application:
          "O model parte de recognized gross revenue, subtrai contra-revenue accounts, mantém processing expense separado conforme policy, reconcilia ledger e publica formula.",
        phrase:
          "Net Revenue subtrai refunds, discounts e credits; payment processing cost aparece separadamente abaixo de revenue.",
        aliases: [
          "revenue net of deductions",
          "net sales revenue",
          "receita líquida",
        ],
        confusion:
          "Net Revenue é revenue após deductions; Net Income é profit após costs, expenses, interest, taxes e outros items.",
      }),
    },
    margin: {
      en: content({
        definition:
          "Margin is the amount or percentage remaining from a defined revenue base after subtracting a specified set of costs, with its meaning determined by whether the metric is gross, contribution, operating, or another named margin.",
        purpose:
          "It shows how much economic value remains to cover other expenses or profit and helps compare products, customers, channels, and periods on a normalized basis.",
        when: "Use a margin only with an explicit formula, revenue basis, cost classification, allocation rule, currency, time period, treatment of refunds and taxes, and distinction between absolute amount and percentage.",
        context:
          "A delivery product grows revenue but payment, courier, support, and promotion costs rise differently, so leaders need contribution margin per completed order rather than revenue alone.",
        application:
          "Finance defines contribution margin as net revenue minus transaction-variable payment, delivery, support, and incentive costs; data models version classifications, allocate shared costs consistently, reconcile the ledger, and publish amount and percentage separately.",
        phrase:
          "This Margin is contribution margin after variable fulfillment cost, not gross margin and not net profit.",
        aliases: ["profit margin", "contribution margin measure", "margem"],
        confusion:
          "Margin subtracts a defined cost set from revenue; Markup expresses the amount added relative to cost, so equal percentages do not mean the same thing.",
      }),
      "pt-BR": content({
        definition:
          "Margin é o amount ou percentage restante de revenue base definida após subtrair specified costs, com meaning determinado por gross, contribution, operating ou outro margin nomeado.",
        purpose:
          "Ela mostra economic value restante para outros expenses ou profit e compara products, customers, channels e periods de forma normalizada.",
        when: "Use-a com explicit formula, revenue basis, cost classification, allocation rule, currency, period, treatment de refunds e taxes e distinção entre amount e percentage.",
        context:
          "Um delivery product cresce revenue, mas payment, courier, support e promotion costs variam, exigindo contribution margin por completed order.",
        application:
          "Finance define contribution margin como net revenue menos variable payment, delivery, support e incentive costs; models versionam classifications, alocam costs e reconciliam ledger.",
        phrase:
          "Esta Margin é contribution margin após variable fulfillment cost, não gross margin nem net profit.",
        aliases: ["profit margin", "contribution margin measure", "margem"],
        confusion:
          "Margin subtrai costs de revenue; Markup expressa valor adicionado sobre cost.",
      }),
    },
    "unit-economics": {
      en: content({
        definition:
          "Unit Economics is the analysis of revenue, variable costs, contribution, acquisition, retention, and lifetime value associated with one explicitly defined economic unit such as a customer, order, booking, or account.",
        purpose:
          "It tests whether growth creates sustainable value at the unit level before fixed costs, scale effects, and financing obscure the underlying business engine.",
        when: "Use it for pricing, channel, growth, and operating decisions after defining the unit, cohort, lifecycle, net revenue, variable and allocated costs, acquisition, refunds, retention, contribution, observation window, and uncertainty.",
        context:
          "A marketplace adds orders rapidly through discounts, but leaders need to know whether each acquired customer produces enough contribution over time to recover acquisition and service cost.",
        application:
          "The model follows customer cohorts, reconciles net revenue and order-variable costs, separates promotional acquisition from retention incentives, measures contribution by lifecycle age, estimates LTV under documented assumptions, compares CAC, and runs sensitivity scenarios.",
        phrase:
          "Unit Economics is positive for mature organic cohorts, but paid-channel cohorts have not recovered CAC within the observed window.",
        aliases: [
          "per-unit economics",
          "economic unit analysis",
          "economia unitária",
        ],
        confusion:
          "Unit Economics evaluates economics per defined unit and lifecycle; company profitability also includes fixed operating expenses, financing, taxes, and portfolio effects.",
      }),
      "pt-BR": content({
        definition:
          "Unit Economics é a analysis de revenue, variable costs, contribution, acquisition, retention e lifetime value de uma explicit economic unit como customer, order, booking ou account.",
        purpose:
          "Ela testa se growth cria sustainable value por unit antes de fixed costs, scale effects e financing ocultarem o business engine.",
        when: "Use-a em pricing, channel, growth e operating decisions após definir unit, cohort, lifecycle, net revenue, costs, acquisition, refunds, retention, contribution, window e uncertainty.",
        context:
          "Um marketplace cresce orders com discounts, mas precisa saber se cada acquired customer recupera acquisition e service cost ao longo do tempo.",
        application:
          "O model acompanha cohorts, reconcilia net revenue e variable costs, separa acquisition de retention incentives, mede contribution por age, estima LTV, compara CAC e simula assumptions.",
        phrase:
          "Unit Economics é positiva em mature organic cohorts, mas paid-channel cohorts não recuperaram CAC na observed window.",
        aliases: [
          "per-unit economics",
          "economic unit analysis",
          "economia unitária",
        ],
        confusion:
          "Unit Economics avalia defined unit; company profitability inclui fixed expenses, financing, taxes e portfolio effects.",
      }),
    },
    "customer-acquisition-cost": {
      en: content({
        definition:
          "Customer Acquisition Cost (CAC) is the eligible sales and marketing cost attributed to acquiring new customers divided by the number of qualifying customers acquired under the same scope and period rules.",
        purpose:
          "It quantifies the investment required to add customers and supports channel allocation, payback, pricing, and unit-economics decisions.",
        when: "Calculate CAC with a declared customer definition, attribution method, cost categories, time lag, channel, geography, cohort, organic treatment, reactivation rule, and denominator, and reconcile spend to finance.",
        context:
          "A subscription company spends on advertising, agencies, sales compensation, trials, and promotions, while some signups never become paying customers and conversions occur weeks later.",
        application:
          "The model allocates eligible campaign and sales costs, attributes conversions under a documented window, counts first-time paying accounts once, separates reactivations and organic acquisition, reports blended and channel CAC, and shows uncertainty and payback by cohort.",
        phrase:
          "CAC uses acquired paying accounts and the matching acquisition costs, not every signup and the current month's ad spend.",
        aliases: [
          "CAC",
          "cost to acquire a customer",
          "custo de aquisição de cliente",
        ],
        confusion:
          "Customer Acquisition Cost measures cost per acquired customer; Cost per Lead measures cost per qualified or unqualified lead before customer conversion.",
      }),
      "pt-BR": content({
        definition:
          "Customer Acquisition Cost (CAC) é eligible sales e marketing cost atribuído a adquirir new customers dividido pelos qualifying customers adquiridos sob as mesmas scope e period rules.",
        purpose:
          "Ele quantifica investment para adicionar customers e orienta channel allocation, payback, pricing e unit economics.",
        when: "Calcule CAC com customer definition, attribution method, cost categories, time lag, channel, geography, cohort, organic treatment, reactivation rule e denominator, reconciliando spend.",
        context:
          "Uma subscription company gasta com ads, agencies, sales compensation, trials e promotions, mas signups podem não virar paying customers e conversion leva semanas.",
        application:
          "O model aloca eligible costs, atribui conversions pela window, conta first-time paying accounts uma vez, separa reactivations e organic, reporta blended e channel CAC e payback por cohort.",
        phrase:
          "CAC usa acquired paying accounts e matching acquisition costs, não todo signup e current-month ad spend.",
        aliases: [
          "CAC",
          "cost to acquire a customer",
          "custo de aquisição de cliente",
        ],
        confusion:
          "Customer Acquisition Cost mede cost por acquired customer; Cost per Lead mede cost por lead antes da conversion.",
      }),
    },
    "lifetime-value": {
      en: content({
        definition:
          "Lifetime Value (LTV) is the economic value expected or realized from a defined customer or account over its relationship lifetime, usually based on net revenue or contribution after specified costs.",
        purpose:
          "It connects retention, monetization, margin, and time to estimate how much sustainable acquisition and service investment a customer relationship can support.",
        when: "Use LTV for unit economics, channel, pricing, and retention decisions only with a declared value basis, cohort, horizon, survival model, expansion, contraction, refunds, cost set, discounting, censoring, and distinction between observed and forecast value.",
        context:
          "A SaaS company compares acquisition channels whose customers have different plans, retention curves, support costs, and expansion behavior.",
        application:
          "Analysts calculate observed cohort contribution, estimate future survival and expansion from mature comparable cohorts, discount future value, run conservative sensitivity scenarios, compare cohort CAC and payback, and replace forecasts with actuals as cohorts mature.",
        phrase:
          "This LTV is forecast contribution value over thirty-six months; it is not historical revenue and depends on the stated retention curve.",
        aliases: [
          "LTV",
          "customer lifetime value",
          "valor do tempo de vida do cliente",
        ],
        confusion:
          "Lifetime Value estimates or measures value across the relationship; Average Revenue per User measures revenue per user for a particular period without modeling lifetime or costs.",
      }),
      "pt-BR": content({
        definition:
          "Lifetime Value (LTV) é o economic value esperado ou realizado de customer ou account durante relationship lifetime, geralmente baseado em net revenue ou contribution após specified costs.",
        purpose:
          "Ele conecta retention, monetization, margin e time para estimar sustainable acquisition e service investment suportado pela relationship.",
        when: "Use LTV em unit economics, channel, pricing e retention decisions com value basis, cohort, horizon, survival model, expansion, refunds, costs, discounting, censoring e separação de observed e forecast.",
        context:
          "Uma SaaS company compara acquisition channels cujos customers têm plans, retention curves, support costs e expansion behavior diferentes.",
        application:
          "Analysts calculam observed cohort contribution, estimam survival e expansion, descontam future value, simulam scenarios, comparam CAC e payback e substituem forecasts por actuals.",
        phrase:
          "Este LTV é forecast contribution por 36 meses; não é historical revenue e depende da retention curve declarada.",
        aliases: [
          "LTV",
          "customer lifetime value",
          "valor do tempo de vida do cliente",
        ],
        confusion:
          "Lifetime Value mede relationship lifetime; Average Revenue per User mede period revenue sem lifetime ou costs.",
      }),
    },
    "gross-merchandise-value": {
      en: content({
        definition:
          "Gross Merchandise Value (GMV) is the total value of merchandise or services transacted through a marketplace or commerce platform during a defined period before specified cancellations, returns, discounts, taxes, shipping, or seller payouts according to the published formula.",
        purpose:
          "It measures transaction volume flowing through a platform, indicating marketplace scale independently from how much of that value the platform recognizes as revenue.",
        when: "Use GMV for marketplace activity with an explicit order state, transaction basis, period, currency conversion, treatment of taxes, shipping, discounts, cancellations, returns, duplicate orders, offline adjustments, and reconciliation to source transactions.",
        context:
          "A marketplace facilitates one hundred million in seller orders but recognizes only commissions and service fees because sellers remain the principal for merchandise sales.",
        application:
          "The metric sums eligible completed order item value under a versioned formula, reports gross and net-of-cancellation views separately, converts currency at documented rates, links adjustments to original orders, and reconciles seller statements and payment records.",
        phrase:
          "GMV measures seller transaction value through the marketplace; platform Revenue is the commission and fee amount recognized under its accounting role.",
        aliases: [
          "GMV",
          "Gross Merchandise Volume",
          "valor bruto de mercadorias",
        ],
        confusion:
          "Gross Merchandise Value measures total marketplace transaction value; Gross Revenue measures the organization's recognized revenue before defined contra-revenue deductions.",
      }),
      "pt-BR": content({
        definition:
          "Gross Merchandise Value (GMV) é o total value de merchandise ou services transacionado por marketplace ou commerce platform num período antes de specified cancellations, returns, discounts, taxes, shipping ou seller payouts conforme formula.",
        purpose:
          "Ele mede transaction volume pela platform, indicando marketplace scale independentemente do valor reconhecido como revenue.",
        when: "Use GMV com order state, transaction basis, period, currency conversion e treatment explícitos de taxes, shipping, discounts, cancellations, returns, duplicates, adjustments e reconciliation.",
        context:
          "Um marketplace facilita cem milhões em seller orders, mas reconhece apenas commissions e service fees porque sellers são principal nas sales.",
        application:
          "A metric soma eligible completed item value por versioned formula, separa gross e net-of-cancellation views, converte currency, liga adjustments a orders e reconcilia statements e payments.",
        phrase:
          "GMV mede seller transaction value; platform Revenue é commission e fee reconhecidas conforme accounting role.",
        aliases: [
          "GMV",
          "Gross Merchandise Volume",
          "valor bruto de mercadorias",
        ],
        confusion:
          "Gross Merchandise Value mede marketplace transaction value; Gross Revenue mede recognized company revenue antes de deductions.",
      }),
    },
    "multi-tenant": {
      en: content({
        definition:
          "Multi-Tenant describes an application or platform architecture in which one operated system serves multiple logically separate customer or organizational tenants while sharing selected code, infrastructure, or services.",
        purpose:
          "It enables shared operations and economies of scale while requiring every data, identity, configuration, capacity, and administrative path to preserve tenant isolation.",
        when: "Choose multi-tenancy for a shared product only after defining tenant identity, data and encryption boundaries, authorization, routing, configuration, noisy-neighbor controls, quotas, observability, support access, backup, restore, deletion, migration, and regional placement.",
        context:
          "A SaaS platform runs one service fleet for thousands of companies, each with private users, records, policies, branding, usage limits, and administrators.",
        application:
          "Tenant context is derived from authenticated identity rather than client input, propagated and enforced in every query and cache key, included in events and logs, tested for cross-tenant access, limited by fair-use quotas, and preserved in export, restore, and deletion workflows.",
        phrase:
          "In this Multi-Tenant service, every authorization, query, cache entry, event, and operator action carries verified tenant context.",
        aliases: [
          "multi-tenancy",
          "shared tenant architecture",
          "multilocatário",
        ],
        confusion:
          "Multi-Tenant shares an operated system among isolated tenants; multi-user software may serve many users who all belong to one security and data boundary.",
      }),
      "pt-BR": content({
        definition:
          "Multi-Tenant descreve application ou platform architecture em que um operated system atende vários customer ou organizational tenants logicamente separados, compartilhando code, infrastructure ou services selecionados.",
        purpose:
          "Ele oferece shared operations e scale economics, exigindo que data, identity, config, capacity e administrative paths preservem tenant isolation.",
        when: "Escolha multi-tenancy após definir tenant identity, data e encryption boundaries, authorization, routing, config, noisy-neighbor controls, quotas, observability, support access, backup, restore, deletion, migration e placement.",
        context:
          "Uma SaaS platform executa um service fleet para milhares de companies, cada qual com private users, records, policies, branding, limits e admins.",
        application:
          "Tenant context vem de authenticated identity, propaga a queries e cache keys, entra em events e logs, é testado contra cross-tenant access, limitado por quotas e preservado em export, restore e deletion.",
        phrase:
          "Neste Multi-Tenant service, toda authorization, query, cache entry, event e operator action carrega verified tenant context.",
        aliases: [
          "multi-tenancy",
          "shared tenant architecture",
          "multilocatário",
        ],
        confusion:
          "Multi-Tenant compartilha operated system entre isolated tenants; multi-user pode ter muitos users num único data boundary.",
      }),
    },
    tenant: {
      en: content({
        definition:
          "Tenant is a logically isolated customer, organization, account group, or administrative domain that owns or controls a defined set of users, data, configuration, entitlements, and resource usage within a shared system.",
        purpose:
          "It establishes the primary isolation and administration boundary for access, billing, configuration, quotas, lifecycle, and support in a multi-tenant product.",
        when: "Model a tenant when one customer-controlled domain needs independent membership and data, defining immutable identity, ownership, hierarchy, domains, roles, provisioning, plan, limits, region, encryption, export, suspension, deletion, and transfer.",
        context:
          "A consulting company creates one workspace whose administrators invite employees and contractors, configure retention, own project records, and receive one subscription invoice.",
        application:
          "The platform assigns an immutable tenant ID, verifies administrators and domain claims, scopes all resources and keys, separates user identity from membership, enforces plan and region, audits support access, and runs explicit offboarding and export workflows.",
        phrase:
          "The user identity is global, but this permission and project belong to the Tenant membership identified in the request context.",
        aliases: [
          "customer tenant",
          "organization boundary",
          "locatário lógico",
        ],
        confusion:
          "A Tenant is the customer or administrative isolation boundary; a User is a person or principal that may hold different memberships in one or more tenants.",
      }),
      "pt-BR": content({
        definition:
          "Tenant é um customer, organization, account group ou administrative domain logicamente isolado que possui users, data, config, entitlements e resource usage definidos em shared system.",
        purpose:
          "Ele estabelece primary isolation e administration boundary para access, billing, config, quotas, lifecycle e support em multi-tenant product.",
        when: "Modele tenant quando um customer-controlled domain precisar de membership e data independentes, definindo immutable identity, ownership, hierarchy, domains, roles, provisioning, plan, limits, region, encryption, export, suspension e deletion.",
        context:
          "Uma consulting company cria workspace cujos admins convidam people, configuram retention, possuem project records e recebem uma subscription invoice.",
        application:
          "A platform atribui immutable tenant ID, verifica admins e domain claims, escopa resources e keys, separa user identity de membership, aplica plan e region, audita support e executa offboarding e export.",
        phrase:
          "User identity é global, mas permission e project pertencem ao Tenant membership do request context.",
        aliases: [
          "customer tenant",
          "organization boundary",
          "locatário lógico",
        ],
        confusion:
          "Tenant é customer ou administrative isolation boundary; User é person ou principal com memberships em tenants.",
      }),
    },
  };
