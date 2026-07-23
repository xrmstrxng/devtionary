import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const architectureEditorialOverrides: Record<string, EditorialPair> = {
  architecture: {
    en: content({
      definition:
        "Architecture is the intentional high-level organization of a system, including its major parts, boundaries, relationships, constraints, and the principles guiding their evolution.",
      purpose:
        "It shapes how a system achieves important qualities such as reliability, security, performance, maintainability, cost control, and organizational ownership.",
      when: "Reason about architecture when decisions affect several components, are expensive to reverse, or determine system-wide quality attributes and team boundaries.",
      context:
        "A commerce platform must isolate payment risk, withstand regional failures, and allow catalog and checkout teams to release independently.",
      application:
        "Architects identify boundaries and data ownership, choose communication and failure policies, record tradeoffs, and validate them with scenarios and measurements.",
      phrase:
        "“This is an architecture decision because it changes ownership, failure boundaries, and deployment across several services.”",
      aliases: [
        "system architecture",
        "arquitetura de sistemas",
        "architectural design",
      ],
      confusion:
        "Architecture applies broadly to systems, organizations, data, or infrastructure; Software Architecture applies these structural decisions specifically to software.",
    }),
    "pt-BR": content({
      definition:
        "Architecture é a organização intencional de alto nível de um sistema, incluindo partes, fronteiras, relações, constraints e princípios de evolução.",
      purpose:
        "Ela molda como o sistema alcança reliability, security, performance, maintainability, custo e ownership organizacional.",
      when: "Analise architecture quando decisões afetarem vários componentes, forem caras de reverter ou definirem atributos e fronteiras entre times.",
      context:
        "Uma plataforma precisa isolar risco de pagamentos, resistir a falhas regionais e permitir releases independentes de catálogo e checkout.",
      application:
        "Arquitetura identifica fronteiras e dados, escolhe comunicação e falhas, registra trade-offs e os valida com cenários e medições.",
      phrase:
        "“Esta é uma decisão de architecture porque muda ownership, domínio de falha e deployment de vários serviços.”",
      aliases: [
        "system architecture",
        "arquitetura de sistemas",
        "architectural design",
      ],
      confusion:
        "Architecture pode tratar sistemas, organizações, dados ou infraestrutura; Software Architecture aplica estrutura especificamente a software.",
    }),
  },
  "software-architecture": {
    en: content({
      definition:
        "Software Architecture is the set of significant structural decisions about software elements, their responsibilities, interfaces, interactions, deployment, data, and governing constraints.",
      purpose:
        "It aligns software structure with required quality attributes and creates boundaries that teams can implement and evolve without uncontrolled coupling.",
      when: "Design software architecture for systems whose scale, longevity, risk, team structure, or operational requirements make local code design insufficient.",
      context:
        "A healthcare product must protect patient data, integrate laboratories, support auditability, and evolve under several delivery teams.",
      application:
        "The architecture assigns data ownership, defines secure integration interfaces, separates audit responsibilities, and documents decisions with fitness checks.",
      phrase:
        "“Make privacy and auditability explicit software-architecture constraints before choosing service boundaries.”",
      aliases: [
        "application architecture",
        "arquitetura de software",
        "software system design",
      ],
      confusion:
        "Software Architecture concerns significant system structure; detailed design concerns more local classes, functions, algorithms, and implementation choices.",
    }),
    "pt-BR": content({
      definition:
        "Software Architecture é o conjunto de decisões estruturais significativas sobre elementos, responsabilidades, interfaces, interações, deployment, dados e constraints.",
      purpose:
        "Ela alinha estrutura aos atributos de qualidade e cria fronteiras que times implementam e evoluem sem coupling descontrolado.",
      when: "Projete software architecture quando escala, longevidade, risco, estrutura dos times ou operação tornarem insuficiente o design local do código.",
      context:
        "Um produto de saúde precisa proteger dados, integrar laboratórios, oferecer auditoria e evoluir com vários times.",
      application:
        "A arquitetura atribui ownership dos dados, define interfaces seguras, separa auditoria e documenta decisões com verificações.",
      phrase:
        "“Torne privacidade e auditabilidade constraints explícitas de software architecture antes de escolher fronteiras.”",
      aliases: [
        "application architecture",
        "arquitetura de software",
        "software system design",
      ],
      confusion:
        "Software Architecture trata estrutura significativa; detailed design trata classes, funções, algoritmos e escolhas locais.",
    }),
  },
  monolith: {
    en: content({
      definition:
        "A monolith is an application whose features are built, deployed, and usually run as one software unit, often sharing one process and data access model.",
      purpose:
        "It keeps calls, transactions, testing, deployment, and operations comparatively simple while the product and organization fit one release boundary.",
      when: "Choose a monolith when independent service deployment is unnecessary and simplicity, fast iteration, and straightforward consistency outweigh separate scaling or ownership needs.",
      context:
        "A small product team is validating one business model and its features share transactions and change together frequently.",
      application:
        "The team deploys one application with internal modules and one operational stack, postponing distributed communication until evidence requires it.",
      phrase:
        "“Keep this as a monolith for now; separate the modules clearly so deployment boundaries can change later if needed.”",
      aliases: [
        "monolithic application",
        "monolithic architecture",
        "aplicação monolítica",
      ],
      confusion:
        "A monolith has one deployment unit; it can still contain well-separated modules and does not inherently mean disorganized code.",
    }),
    "pt-BR": content({
      definition:
        "Monolith é uma aplicação cujas funcionalidades são construídas, implantadas e normalmente executadas como uma unidade, compartilhando processo e acesso a dados.",
      purpose:
        "Ele mantém chamadas, transactions, testes, deployment e operação mais simples enquanto produto e organização couberem em uma fronteira de release.",
      when: "Escolha monolith quando deployment independente não for necessário e simplicidade, iteração e consistência superarem demandas separadas de escala ou ownership.",
      context:
        "Um time pequeno valida um modelo de negócio e suas features compartilham transactions e mudam juntas com frequência.",
      application:
        "O time implanta uma aplicação com módulos internos e uma stack operacional, adiando comunicação distribuída até existir evidência.",
      phrase:
        "“Mantenha como monolith por enquanto e separe módulos para podermos mudar fronteiras depois.”",
      aliases: [
        "monolithic application",
        "monolithic architecture",
        "aplicação monolítica",
      ],
      confusion:
        "Monolith possui uma unidade de deployment; ainda pode conter módulos bem separados e não significa código desorganizado.",
    }),
  },
  "modular-monolith": {
    en: content({
      definition:
        "A Modular Monolith is one deployable application divided into strongly bounded internal modules with explicit APIs, ownership, and controlled dependencies.",
      purpose:
        "It combines the operational and transactional simplicity of one deployment with structural isolation that limits coupling and supports later extraction if justified.",
      when: "Use a modular monolith when domains need clear boundaries but do not yet require independent deployment, scaling, availability, or technology stacks.",
      context:
        "A marketplace has catalog, orders, payments, and support domains managed in one application by a growing engineering organization.",
      application:
        "Each module owns its model and tables, exposes application interfaces, prevents direct cross-module internals, and participates in one deployment.",
      phrase:
        "“Call the orders module through its public interface; sharing its internal repository would break the modular boundary.”",
      aliases: [
        "modular monolithic architecture",
        "monólito modular",
        "module-based monolith",
      ],
      confusion:
        "A modular monolith has strong internal boundaries but one deployment; microservices enforce boundaries through independently deployed processes and network communication.",
    }),
    "pt-BR": content({
      definition:
        "Modular Monolith é uma aplicação implantável dividida em módulos internos com fronteiras fortes, APIs explícitas, ownership e dependências controladas.",
      purpose:
        "Ele combina simplicidade operacional e transacional de um deployment com isolamento estrutural que limita coupling e permite extração futura.",
      when: "Use modular monolith quando domínios precisarem de fronteiras, mas ainda não exigirem deployment, escala, disponibilidade ou tecnologias independentes.",
      context:
        "Um marketplace possui domínios de catálogo, pedidos, pagamentos e suporte administrados em uma aplicação por organização crescente.",
      application:
        "Cada módulo possui modelo e tables, expõe interfaces, impede acesso direto a internals e participa de um deployment.",
      phrase:
        "“Chame orders pela interface pública; compartilhar seu repository interno quebraria a fronteira modular.”",
      aliases: [
        "modular monolithic architecture",
        "monólito modular",
        "module-based monolith",
      ],
      confusion:
        "Modular monolith possui fronteiras internas e um deployment; microservices usam processos implantáveis independentes e rede.",
    }),
  },
  microservice: {
    en: content({
      definition:
        "A microservice is a small independently deployable service aligned to a focused business capability, owning its behavior and usually its data boundary.",
      purpose:
        "It allows a team to release, scale, operate, and evolve one capability independently while enforcing separation through process and network boundaries.",
      when: "Use microservices when independent ownership and deployment solve demonstrated organizational, scaling, reliability, or change-cadence needs that justify distributed-system cost.",
      context:
        "A large commerce organization needs payments to meet stricter security and availability controls and release independently from catalog.",
      application:
        "A payments service owns payment state and APIs, has a dedicated team and deployment pipeline, and integrates with orders through versioned contracts.",
      phrase:
        "“Extract this microservice only with clear data ownership and operational responsibility, not merely to split the codebase.”",
      aliases: [
        "microservice architecture service",
        "microsserviço",
        "independently deployable service",
      ],
      confusion:
        "A microservice is an independently operated business boundary; a small code module inside one deployment is not a microservice.",
    }),
    "pt-BR": content({
      definition:
        "Microservice é um serviço pequeno e independentemente implantável, alinhado a uma capacidade de negócio e responsável por comportamento e normalmente dados.",
      purpose:
        "Ele permite ao time lançar, escalar, operar e evoluir uma capacidade independentemente, aplicando separação por processos e rede.",
      when: "Use microservices quando ownership e deployment independentes resolverem necessidades reais que justifiquem o custo de sistema distribuído.",
      context:
        "Uma organização precisa que pagamentos atendam controles mais rigorosos e sejam lançados independentemente do catálogo.",
      application:
        "O serviço de pagamentos possui estado e APIs, time e pipeline próprios e integra pedidos por contratos versionados.",
      phrase:
        "“Extraia este microservice apenas com ownership de dados e operação claros, não só para dividir o código.”",
      aliases: [
        "microservice architecture service",
        "microsserviço",
        "independently deployable service",
      ],
      confusion:
        "Microservice é uma fronteira de negócio operada independentemente; módulo pequeno dentro de um deployment não é microservice.",
    }),
  },
  "distributed-system": {
    en: content({
      definition:
        "A distributed system is a group of independent networked computers that coordinate through messages to provide behavior perceived as one system.",
      purpose:
        "It combines resources, locations, and failure domains for scale, availability, or organizational autonomy while accepting partial failure and communication uncertainty.",
      when: "Build a distributed system when one process or machine cannot meet required scale, geography, resilience, or ownership, and budget for consistency, latency, observability, and operations.",
      context:
        "A global payment platform must serve several regions and continue processing locally when another region or network path fails.",
      application:
        "Regional services coordinate through durable messages, use idempotent operations, define data-consistency rules, and expose traceable failure and retry behavior.",
      phrase:
        "“Treat the timeout as an unknown outcome; in a distributed system the remote operation may have completed.”",
      aliases: [
        "distributed computing system",
        "sistema distribuído",
        "networked system",
      ],
      confusion:
        "A distributed system has independently failing networked participants; multithreaded code may be concurrent while remaining inside one process and failure boundary.",
    }),
    "pt-BR": content({
      definition:
        "Distributed System é um grupo de computadores independentes em rede que se coordenam por mensagens para oferecer comportamento percebido como um sistema.",
      purpose:
        "Ele combina recursos, locais e domínios de falha para escala, disponibilidade ou autonomia, aceitando falha parcial e incerteza de comunicação.",
      when: "Construa distributed system quando um processo ou máquina não atender escala, geografia, resiliência ou ownership, considerando consistência, latência e operação.",
      context:
        "Uma plataforma global precisa atender regiões e continuar processando localmente quando outra região ou caminho de rede falhar.",
      application:
        "Serviços regionais usam mensagens duráveis, operações idempotentes, regras de consistência e falhas e retries rastreáveis.",
      phrase:
        "“Trate o timeout como resultado desconhecido; em distributed system a operação remota pode ter terminado.”",
      aliases: [
        "distributed computing system",
        "sistema distribuído",
        "networked system",
      ],
      confusion:
        "Distributed system possui participantes em rede que falham independentemente; concorrência pode existir dentro de um único processo.",
    }),
  },
  "clean-architecture": {
    en: content({
      definition:
        "Clean Architecture is an approach that organizes software around business policies and use cases, directing source dependencies inward away from frameworks, interfaces, and infrastructure.",
      purpose:
        "It protects core behavior from delivery and technology changes by placing domain and application rules behind boundaries implemented by external adapters.",
      when: "Use Clean Architecture when business behavior is substantial and long-lived enough to benefit from explicit dependency direction and replaceable infrastructure.",
      context:
        "A lending product must preserve eligibility and repayment rules while changing web frameworks, databases, and external credit providers.",
      application:
        "Use cases depend on repository and provider interfaces; outer adapters implement HTTP, persistence, and integrations and are wired at composition time.",
      phrase:
        "“Move the framework annotation outward; the lending use case should not depend on the HTTP adapter.”",
      aliases: [
        "clean architecture pattern",
        "arquitetura limpa",
        "dependency rule architecture",
      ],
      confusion:
        "Clean Architecture defines dependency direction and policy boundaries; layered architecture often groups technical responsibilities and can still point dependencies differently.",
    }),
    "pt-BR": content({
      definition:
        "Clean Architecture organiza software em torno de políticas e use cases, direcionando dependências de código para dentro, longe de frameworks e infraestrutura.",
      purpose:
        "Ela protege comportamento central de mudanças tecnológicas ao manter domínio e aplicação atrás de boundaries implementadas por adapters externos.",
      when: "Use Clean Architecture quando o comportamento for substancial e duradouro o bastante para se beneficiar de direção explícita e infraestrutura substituível.",
      context:
        "Um produto de crédito precisa preservar regras enquanto muda framework web, banco e provedores externos.",
      application:
        "Use cases dependem de interfaces; adapters externos implementam HTTP, persistência e integrações e são conectados na composição.",
      phrase:
        "“Mova a annotation do framework para fora; o use case não deve depender do adapter HTTP.”",
      aliases: [
        "clean architecture pattern",
        "arquitetura limpa",
        "dependency rule architecture",
      ],
      confusion:
        "Clean Architecture define direção de dependências; layered architecture costuma agrupar responsabilidades técnicas e pode apontá-las de outra forma.",
    }),
  },
  "hexagonal-architecture": {
    en: content({
      definition:
        "Hexagonal Architecture organizes an application core behind ports, with adapters translating between those ports and external actors or infrastructure.",
      purpose:
        "It keeps business behavior independent of user interfaces, databases, messaging, and third-party services while making each integration replaceable and testable.",
      when: "Use Hexagonal Architecture when the same application behavior has several input or output technologies or when infrastructure substitution and isolated testing matter.",
      context:
        "An inventory capability is triggered by HTTP and messages and can store data in PostgreSQL today but may use another implementation in tests or future deployments.",
      application:
        "Inbound adapters call application ports; the core calls an InventoryRepository port implemented by PostgreSQL in production and memory in focused tests.",
      phrase:
        "“Define the port from the application's need, then make the provider-specific client an adapter.”",
      aliases: [
        "ports and adapters",
        "ports-and-adapters architecture",
        "arquitetura hexagonal",
      ],
      confusion:
        "A port is an application-owned interaction contract; an adapter translates a specific external technology to or from that contract.",
    }),
    "pt-BR": content({
      definition:
        "Hexagonal Architecture organiza o núcleo da aplicação atrás de ports, com adapters traduzindo entre essas ports e agentes ou infraestrutura externos.",
      purpose:
        "Ela mantém negócio independente de interfaces, bancos, mensageria e terceiros e torna cada integração substituível e testável.",
      when: "Use Hexagonal Architecture quando o mesmo comportamento possuir várias tecnologias de entrada ou saída ou substituição de infraestrutura for relevante.",
      context:
        "Uma capacidade de estoque é acionada por HTTP e mensagens e usa PostgreSQL em produção, mas memória nos testes.",
      application:
        "Adapters de entrada chamam ports da aplicação; o núcleo usa InventoryRepository implementado por PostgreSQL ou memória.",
      phrase:
        "“Defina a port pela necessidade da aplicação e transforme o client específico do provedor em adapter.”",
      aliases: [
        "ports and adapters",
        "ports-and-adapters architecture",
        "arquitetura hexagonal",
      ],
      confusion:
        "Port é contrato pertencente à aplicação; adapter traduz uma tecnologia externa específica para esse contrato.",
    }),
  },
  "layered-architecture": {
    en: content({
      definition:
        "Layered Architecture separates software into ordered responsibility groups such as presentation, application, domain, and data access, with defined dependency rules between them.",
      purpose:
        "It reduces mixed concerns by giving each layer a role and a controlled interface through which higher-level behavior uses lower-level services.",
      when: "Use layered architecture for applications whose responsibilities align well with tiers, keeping business rules out of presentation and persistence and avoiding pass-through layers without value.",
      context:
        "A business application mixes HTTP parsing, pricing rules, and SQL in the same request handlers, making every change affect unrelated concerns.",
      application:
        "Controllers translate HTTP, application services coordinate use cases, domain objects enforce pricing, and data-access components handle persistence.",
      phrase:
        "“Keep the discount rule in the domain layer; the controller should only translate the request and result.”",
      aliases: [
        "n-tier architecture",
        "layered design",
        "arquitetura em camadas",
      ],
      confusion:
        "A layer is a logical responsibility grouping; a tier is often a separately deployed physical or process boundary, though the terms are sometimes mixed.",
    }),
    "pt-BR": content({
      definition:
        "Layered Architecture separa software em grupos ordenados de responsabilidade como apresentação, aplicação, domínio e acesso a dados, com regras entre eles.",
      purpose:
        "Ela reduz concerns misturados ao dar papel e interface controlada a cada layer.",
      when: "Use layered architecture quando responsabilidades se alinharem a camadas, mantendo regras fora de apresentação e persistência e evitando layers sem valor.",
      context:
        "Uma aplicação mistura HTTP, pricing e SQL nos mesmos handlers, fazendo mudanças afetarem concerns não relacionados.",
      application:
        "Controllers traduzem HTTP, application services coordenam, domínio aplica pricing e data access persiste.",
      phrase:
        "“Mantenha a regra de desconto na domain layer; o controller apenas traduz request e resultado.”",
      aliases: [
        "n-tier architecture",
        "layered design",
        "arquitetura em camadas",
      ],
      confusion:
        "Layer é agrupamento lógico; tier costuma ser boundary física ou processo implantado separadamente, embora os termos se misturem.",
    }),
  },
  "event-driven-architecture": {
    en: content({
      definition:
        "Event-Driven Architecture structures systems around producing, transporting, and reacting to records of facts that have occurred.",
      purpose:
        "It decouples event producers from consumers in time and ownership, allowing several capabilities to respond asynchronously and evolve their reactions independently.",
      when: "Use event-driven architecture when completed facts need multiple independent reactions, delayed processing, integration, or audit, and design delivery, ordering, idempotency, schema, and failure handling explicitly.",
      context:
        "After an order is placed, billing, inventory, notifications, analytics, and fraud detection need different reactions without extending checkout latency.",
      application:
        "Orders publishes a versioned OrderPlaced event through a durable broker; independent consumers process it idempotently and monitor retries and dead letters.",
      phrase:
        "“Publish the completed business fact, not a vague command, and define how consumers handle duplicate delivery.”",
      aliases: [
        "eda",
        "event driven architecture",
        "arquitetura orientada a eventos",
      ],
      confusion:
        "An event states something that happened; a command asks one intended receiver to perform an action and may be rejected.",
    }),
    "pt-BR": content({
      definition:
        "Event-Driven Architecture estrutura sistemas em torno da produção, transporte e reação a registros de fatos que ocorreram.",
      purpose:
        "Ela desacopla produtores e consumidores no tempo e ownership, permitindo reações assíncronas independentes.",
      when: "Use EDA quando fatos concluídos exigirem reações independentes, integração ou audit, projetando entrega, ordem, idempotência, schema e falhas.",
      context:
        "Após criar pedido, billing, estoque, notificações, analytics e fraude precisam reagir sem aumentar a latência do checkout.",
      application:
        "Orders publica OrderPlaced versionado em broker durável; consumidores processam idempotentemente e monitoram retries e dead letters.",
      phrase:
        "“Publique o fato concluído, não um command vago, e defina como consumidores tratam entrega duplicada.”",
      aliases: [
        "eda",
        "event driven architecture",
        "arquitetura orientada a eventos",
      ],
      confusion:
        "Event declara algo ocorrido; command pede a um receptor que execute uma ação e pode ser rejeitado.",
    }),
  },
  "domain-driven-design": {
    en: content({
      definition:
        "Domain-Driven Design is an approach to complex software that builds models, language, and boundaries around deep collaboration with domain experts.",
      purpose:
        "It concentrates design effort on core business complexity and keeps different models consistent within explicit bounded contexts.",
      when: "Use Domain-Driven Design when domain rules and language are complex, evolving, and strategically important enough to justify continuous modeling with experts.",
      context:
        "In insurance, the word policy means different things to sales, underwriting, claims, and compliance, each with distinct rules.",
      application:
        "Teams define bounded contexts, establish ubiquitous language inside each, model aggregates and domain events, and integrate contexts through explicit contracts.",
      phrase:
        "“That term belongs to the claims bounded context; do not force its meaning into underwriting's model.”",
      aliases: ["ddd", "domain driven design", "design orientado ao domínio"],
      confusion:
        "DDD is a modeling and strategic design approach; it is not a mandatory folder structure or a requirement to use every tactical pattern.",
    }),
    "pt-BR": content({
      definition:
        "Domain-Driven Design é uma abordagem para software complexo que constrói modelos, linguagem e boundaries pela colaboração profunda com especialistas do domínio.",
      purpose:
        "Ela concentra design na complexidade central do negócio e mantém modelos consistentes dentro de bounded contexts explícitos.",
      when: "Use DDD quando regras e linguagem forem complexas, mutáveis e estratégicas o bastante para justificar modelagem contínua com especialistas.",
      context:
        "Em seguros, policy possui sentidos diferentes para vendas, subscrição, sinistros e compliance, cada qual com regras próprias.",
      application:
        "Times definem bounded contexts e ubiquitous language, modelam aggregates e events e integram contextos por contratos explícitos.",
      phrase:
        "“Esse termo pertence ao bounded context de sinistros; não force seu significado no modelo de subscrição.”",
      aliases: ["ddd", "domain driven design", "design orientado ao domínio"],
      confusion:
        "DDD é uma abordagem de modelagem estratégica, não uma estrutura obrigatória de pastas nem exigência de usar todos os patterns.",
    }),
  },
  solid: {
    en: content({
      definition:
        "SOLID is a mnemonic for five object-oriented design principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
      purpose:
        "The principles guide boundaries and dependencies so components have focused reasons to change, safe substitutability, narrow contracts, and reduced coupling to details.",
      when: "Apply SOLID selectively when class or module design is becoming difficult to change or test, using the principles to diagnose concrete pressure rather than maximize abstractions.",
      context:
        "A billing class calculates prices, writes SQL, formats PDFs, sends email, and changes whenever any of those responsibilities evolves.",
      application:
        "The team separates policy from infrastructure, introduces narrow ports at real variation points, and verifies implementations preserve their contracts.",
      phrase:
        "“Dependency inversion here protects the pricing policy from the provider SDK; it does not require an interface for every class.”",
      aliases: [
        "solid principles",
        "five solid principles",
        "princípios solid",
      ],
      confusion:
        "SOLID offers design heuristics, not absolute laws; mechanical application can create unnecessary indirection and fragmentation.",
    }),
    "pt-BR": content({
      definition:
        "SOLID é o acrônimo de cinco princípios: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation e Dependency Inversion.",
      purpose:
        "Eles orientam boundaries e dependências para responsabilidades focadas, substituição segura, contratos estreitos e menor coupling a detalhes.",
      when: "Aplique SOLID seletivamente quando classes ou módulos ficarem difíceis de mudar ou testar, diagnosticando pressão real sem maximizar abstrações.",
      context:
        "Uma classe de billing calcula preços, escreve SQL, gera PDF e envia e-mail, mudando por motivos não relacionados.",
      application:
        "O time separa política de infraestrutura, cria ports estreitas nos pontos de variação e verifica contratos das implementações.",
      phrase:
        "“Dependency inversion protege pricing do SDK do provedor; não exige interface para toda classe.”",
      aliases: [
        "solid principles",
        "five solid principles",
        "princípios solid",
      ],
      confusion:
        "SOLID oferece heurísticas, não leis absolutas; aplicação mecânica pode criar indireção e fragmentação desnecessárias.",
    }),
  },
  kiss: {
    en: content({
      definition:
        "KISS is the design principle 'Keep It Simple, Stupid,' favoring the simplest solution that clearly and correctly satisfies known requirements.",
      purpose:
        "It reduces accidental complexity, failure paths, onboarding cost, and maintenance effort by resisting cleverness and speculative machinery.",
      when: "Apply KISS when several designs meet the need, choosing the one with fewer concepts and moving parts while preserving correctness, safety, and necessary extensibility.",
      context:
        "A small internal export runs once a day, but a proposal introduces a distributed scheduler, message broker, and custom orchestration engine.",
      application:
        "The team uses one observable scheduled job with idempotent output and adds distribution only if measured scale requires it.",
      phrase:
        "“A single scheduled job meets the current reliability target; the broker would add failure modes without solving a present constraint.”",
      aliases: ["keep it simple stupid", "keep it simple", "mantenha simples"],
      confusion:
        "Simple means minimizing unnecessary complexity while meeting requirements; simplistic means ignoring real constraints or risks.",
    }),
    "pt-BR": content({
      definition:
        "KISS é o princípio 'Keep It Simple, Stupid', que favorece a solução mais simples capaz de atender corretamente aos requisitos conhecidos.",
      purpose:
        "Ele reduz complexidade acidental, caminhos de falha, onboarding e manutenção ao evitar esperteza e mecanismos especulativos.",
      when: "Aplique KISS quando vários designs atenderem a necessidade, escolhendo menos conceitos e peças sem perder correção, segurança ou extensibilidade necessária.",
      context:
        "Uma exportação interna roda diariamente, mas a proposta inclui scheduler distribuído, broker e orquestração customizada.",
      application:
        "O time usa um job observável e idempotente e adiciona distribuição somente quando escala medida exigir.",
      phrase:
        "“Um scheduled job atende reliability; o broker adicionaria falhas sem resolver constraint atual.”",
      aliases: ["keep it simple stupid", "keep it simple", "mantenha simples"],
      confusion:
        "Simples minimiza complexidade desnecessária atendendo requisitos; simplista ignora constraints ou riscos reais.",
    }),
  },
  dry: {
    en: content({
      definition:
        "DRY, 'Don't Repeat Yourself,' states that each piece of system knowledge should have one authoritative representation rather than inconsistent duplicated definitions.",
      purpose:
        "It prevents one rule, formula, schema, or fact from drifting when maintainers must update several independent copies.",
      when: "Apply DRY after confirming duplicated code represents the same knowledge and changes for the same reason; tolerate similar code when concepts may evolve independently.",
      context:
        "Tax calculation rules are copied into checkout, invoicing, and refund services and receive corrections at different times.",
      application:
        "The organization establishes one versioned tax-policy capability and contract while leaving unrelated formatting logic local.",
      phrase:
        "“These blocks look alike, but they represent different policies; extracting them now would couple independent changes.”",
      aliases: [
        "dont repeat yourself",
        "don't repeat yourself",
        "não se repita",
      ],
      confusion:
        "DRY targets duplicated knowledge, not every repeated line of code; premature abstraction can couple coincidentally similar behavior.",
    }),
    "pt-BR": content({
      definition:
        "DRY, 'Don't Repeat Yourself', afirma que cada conhecimento do sistema deve possuir uma representação autoritativa, não definições duplicadas divergentes.",
      purpose:
        "Ele impede que regra, fórmula, schema ou fato se desalinhe quando várias cópias independentes precisam de atualização.",
      when: "Aplique DRY após confirmar que código duplicado representa o mesmo conhecimento e muda pelo mesmo motivo; tolere similaridade entre conceitos independentes.",
      context:
        "Regras tributárias foram copiadas em checkout, invoices e refunds e recebem correções em momentos diferentes.",
      application:
        "A organização cria uma capacidade versionada de política tributária e mantém formatação não relacionada localmente.",
      phrase:
        "“Os blocos parecem iguais, mas representam políticas diferentes; extraí-los agora acoplaria mudanças independentes.”",
      aliases: [
        "dont repeat yourself",
        "don't repeat yourself",
        "não se repita",
      ],
      confusion:
        "DRY combate conhecimento duplicado, não toda linha repetida; abstração prematura pode acoplar comportamentos apenas parecidos.",
    }),
  },
  yagni: {
    en: content({
      definition:
        "YAGNI, 'You Aren't Gonna Need It,' advises against implementing capability until a current, concrete requirement justifies it.",
      purpose:
        "It avoids speculative code, configuration, tests, migration burden, and design constraints created for futures that may never occur.",
      when: "Apply YAGNI when considering optional flexibility or features based only on imagined use, while still addressing known safety, compliance, and likely near-term change.",
      context:
        "A local application serves one tenant, but the proposal adds an unused plugin marketplace and five hypothetical billing models.",
      application:
        "The team builds the confirmed billing path with a clear boundary and records future options without implementing them.",
      phrase:
        "“Keep the boundary clean, but do not build the plugin engine until an actual integration requires it.”",
      aliases: [
        "you arent gonna need it",
        "you aren't gonna need it",
        "você não vai precisar disso",
      ],
      confusion:
        "YAGNI rejects speculative implementation, not prudent design for confirmed requirements such as security, recovery, or legal obligations.",
    }),
    "pt-BR": content({
      definition:
        "YAGNI, 'You Aren't Gonna Need It', recomenda não implementar uma capacidade até que um requisito atual e concreto a justifique.",
      purpose:
        "Ele evita código, configuração, testes, migrations e constraints criados para futuros que talvez nunca ocorram.",
      when: "Aplique YAGNI ao considerar flexibilidade baseada apenas em uso imaginado, sem ignorar segurança, compliance e mudanças próximas confirmadas.",
      context:
        "Uma aplicação atende um tenant, mas a proposta adiciona marketplace de plugins e cinco modelos hipotéticos de billing.",
      application:
        "O time constrói o billing confirmado com boundary clara e registra opções futuras sem implementá-las.",
      phrase:
        "“Mantenha a boundary limpa, mas não construa plugin engine até uma integração real exigir.”",
      aliases: [
        "you arent gonna need it",
        "you aren't gonna need it",
        "você não vai precisar disso",
      ],
      confusion:
        "YAGNI rejeita implementação especulativa, não design prudente para segurança, recuperação ou obrigações confirmadas.",
    }),
  },
  "separation-of-concerns": {
    en: content({
      definition:
        "Separation of Concerns is the design practice of placing distinct responsibilities, policies, or reasons for change into clear boundaries.",
      purpose:
        "It limits how much code must be understood or modified for one concern and prevents interface, business, persistence, and operational details from becoming entangled.",
      when: "Apply it when a component mixes responsibilities that change independently, while avoiding fragmentation when behavior is truly cohesive.",
      context:
        "An HTTP handler validates transport input, calculates pricing, writes SQL, formats errors, and sends notifications.",
      application:
        "The controller handles HTTP, a use case coordinates work, domain objects calculate pricing, a repository persists, and an adapter sends notifications.",
      phrase:
        "“Separate the pricing policy from HTTP formatting because they change for different reasons.”",
      aliases: ["soc", "concern separation", "separação de responsabilidades"],
      confusion:
        "Separation of Concerns creates meaningful responsibility boundaries; splitting every function into another file does not automatically achieve it.",
    }),
    "pt-BR": content({
      definition:
        "Separation of Concerns é a prática de colocar responsabilidades, políticas ou motivos de mudança distintos em boundaries claras.",
      purpose:
        "Ela limita o código envolvido em um concern e evita misturar interface, negócio, persistência e operação.",
      when: "Aplique quando um componente misturar responsabilidades que mudam independentemente, sem fragmentar comportamento realmente coeso.",
      context:
        "Um handler valida HTTP, calcula pricing, escreve SQL, formata erros e envia notificações.",
      application:
        "Controller trata HTTP, use case coordena, domínio calcula, repository persiste e adapter notifica.",
      phrase:
        "“Separe pricing da formatação HTTP porque eles mudam por motivos diferentes.”",
      aliases: ["soc", "concern separation", "separação de responsabilidades"],
      confusion:
        "Separation of Concerns cria fronteiras significativas; dividir toda função em outro arquivo não garante isso.",
    }),
  },
  coupling: {
    en: content({
      definition:
        "Coupling is the degree and nature of dependency between software elements, including how much one must know about or change with another.",
      purpose:
        "Evaluating coupling reveals change propagation, coordination cost, test difficulty, failure dependencies, and limits on independent deployment.",
      when: "Reduce coupling when components change independently but share internals, timing, data, or deployment assumptions; retain direct dependencies when they express one cohesive concept.",
      context:
        "Five services read another service's private tables and must all change whenever its schema is reorganized.",
      application:
        "The owner exposes a versioned contract and data events, migrates consumers, and removes direct database access.",
      phrase:
        "“Sharing this private table creates data coupling that prevents the two services from evolving independently.”",
      aliases: ["software coupling", "dependency coupling", "acoplamento"],
      confusion:
        "Coupling measures dependency between elements; cohesion measures how strongly responsibilities within one element belong together.",
    }),
    "pt-BR": content({
      definition:
        "Coupling é o grau e a natureza da dependência entre elementos, incluindo quanto um precisa conhecer ou mudar junto com outro.",
      purpose:
        "Avaliá-lo revela propagação de mudanças, coordenação, dificuldade de testes, falhas compartilhadas e limites de deployment independente.",
      when: "Reduza coupling quando componentes independentes compartilharem internals, tempo, dados ou deployment; mantenha dependência direta em um conceito coeso.",
      context:
        "Cinco serviços leem tables privadas de outro e todos mudam quando seu schema é reorganizado.",
      application:
        "O owner expõe contrato versionado e events, migra consumidores e remove acesso direto ao database.",
      phrase:
        "“Compartilhar esta table privada cria data coupling e impede evolução independente.”",
      aliases: ["software coupling", "dependency coupling", "acoplamento"],
      confusion:
        "Coupling mede dependência entre elementos; cohesion mede quanto as responsabilidades internas pertencem juntas.",
    }),
  },
  cohesion: {
    en: content({
      definition:
        "Cohesion is the degree to which the responsibilities and data inside a module or component contribute to one focused purpose.",
      purpose:
        "High cohesion makes boundaries easier to name, understand, test, own, and change because related behavior stays together and unrelated behavior stays elsewhere.",
      when: "Improve cohesion when a component has unrelated reasons to change or exposes operations without a shared purpose; avoid splitting data from behavior that enforces its rules.",
      context:
        "A Utilities module contains tax rules, date formatting, authentication, CSV export, and retry logic used by unrelated features.",
      application:
        "The team moves each responsibility to its owning capability and keeps tax calculations with the policy and data they protect.",
      phrase:
        "“This module lacks cohesion; its functions share a folder name but no business responsibility.”",
      aliases: ["software cohesion", "module cohesion", "coesão"],
      confusion:
        "Cohesion concerns related responsibilities within a boundary; coupling concerns dependencies across boundaries.",
    }),
    "pt-BR": content({
      definition:
        "Cohesion é o grau em que responsabilidades e dados dentro de módulo ou componente contribuem para um propósito focado.",
      purpose:
        "Alta cohesion facilita nomear, entender, testar, possuir e mudar uma boundary porque comportamento relacionado permanece junto.",
      when: "Melhore cohesion quando um componente tiver motivos não relacionados para mudar; não separe dados do comportamento que protege suas regras.",
      context:
        "Um módulo Utilities contém impostos, datas, autenticação, CSV e retries usados por features diferentes.",
      application:
        "O time move cada responsabilidade à capacidade proprietária e mantém cálculos tributários com política e dados protegidos.",
      phrase:
        "“Este módulo não possui cohesion; as funções compartilham pasta, mas não uma responsabilidade.”",
      aliases: ["software cohesion", "module cohesion", "coesão"],
      confusion:
        "Cohesion trata responsabilidades relacionadas dentro da boundary; coupling trata dependências entre boundaries.",
    }),
  },
  abstraction: {
    en: content({
      definition:
        "Abstraction is a simplified model or interface that exposes behavior relevant to a purpose while hiding details unnecessary to its user.",
      purpose:
        "It lets code reason at an appropriate level, stabilizes usage around a contract, and contains complexity or variation behind a meaningful concept.",
      when: "Introduce an abstraction when several consumers need the same stable capability or when a volatile detail must be isolated; avoid abstractions without proven common meaning.",
      context:
        "Application code must charge payments but should not depend on every field and workflow of one provider SDK.",
      application:
        "A PaymentGateway abstraction exposes authorize and refund in domain terms, with provider adapters translating specific requests and errors.",
      phrase:
        "“Define the abstraction from our payment need, not by copying the provider's entire client interface.”",
      aliases: ["software abstraction", "abstract interface", "abstração"],
      confusion:
        "Abstraction selects relevant concepts and hides detail; encapsulation controls access to internal state and preserves invariants.",
    }),
    "pt-BR": content({
      definition:
        "Abstraction é um modelo ou interface simplificado que expõe comportamento relevante a um propósito e esconde detalhes desnecessários para quem usa.",
      purpose:
        "Ela permite raciocinar no nível adequado, estabiliza uso em contrato e contém complexidade ou variação atrás de conceito significativo.",
      when: "Crie abstraction quando consumidores precisarem de capacidade estável ou detalhe volátil exigir isolamento; evite-a sem significado comum comprovado.",
      context:
        "A aplicação cobra pagamentos, mas não deve depender de todos os campos e workflows do SDK de um provedor.",
      application:
        "PaymentGateway expõe authorize e refund em termos do domínio, e adapters traduzem requests e erros específicos.",
      phrase:
        "“Defina a abstraction pela nossa necessidade, não copiando toda a interface do client do provedor.”",
      aliases: ["software abstraction", "abstract interface", "abstração"],
      confusion:
        "Abstraction seleciona conceitos e esconde detalhes; encapsulation controla acesso ao estado e protege invariantes.",
    }),
  },
  encapsulation: {
    en: content({
      definition:
        "Encapsulation is the design practice of keeping state and implementation behind a controlled boundary that exposes only operations preserving the component's rules.",
      purpose:
        "It prevents callers from creating invalid state, reduces dependence on representation details, and gives the owner one place to enforce invariants.",
      when: "Encapsulate mutable state and domain invariants by restricting direct access and providing operations named after valid intentions.",
      context:
        "Any code can assign an order's status directly, allowing it to become shipped before payment or inventory confirmation.",
      application:
        "The Order hides its status setter and exposes markPaid and ship operations that verify permitted transitions and required facts.",
      phrase:
        "“Do not expose a public status setter; encapsulate the transition so every caller obeys the order invariant.”",
      aliases: ["information hiding", "state encapsulation", "encapsulamento"],
      confusion:
        "Encapsulation protects state and implementation boundaries; abstraction presents a purpose-focused view and may be implemented with encapsulation.",
    }),
    "pt-BR": content({
      definition:
        "Encapsulation mantém estado e implementação atrás de uma boundary controlada que expõe somente operações capazes de preservar regras.",
      purpose:
        "Ela impede estado inválido, reduz dependência da representação e fornece ao owner um lugar para aplicar invariantes.",
      when: "Encapsule estado mutável e invariantes restringindo acesso direto e oferecendo operações nomeadas por intenções válidas.",
      context:
        "Qualquer código altera status do pedido, permitindo shipped antes de pagamento ou confirmação de estoque.",
      application:
        "Order esconde o setter e expõe markPaid e ship, que verificam transições e fatos obrigatórios.",
      phrase:
        "“Não exponha setter público de status; encapsule a transição para todo chamador obedecer ao invariant.”",
      aliases: ["information hiding", "state encapsulation", "encapsulamento"],
      confusion:
        "Encapsulation protege estado e implementação; abstraction apresenta uma visão focada e pode usar encapsulation.",
    }),
  },
  interface: {
    en: content({
      definition:
        "An interface is an explicit boundary contract describing operations, inputs, outputs, and expectations available to a caller without requiring knowledge of the implementation.",
      purpose:
        "It separates consumers from implementation details, enables substitutable providers, and creates a stable point for collaboration, testing, and evolution.",
      when: "Define an interface at a meaningful boundary with multiple consumers, implementations, ownership, or volatility; avoid one-to-one interfaces that add no separation.",
      context:
        "An application sends notifications through different providers in production and through an in-memory recorder in tests.",
      application:
        "A NotificationSender interface defines send with domain inputs; provider adapters implement it and callers do not import their SDKs.",
      phrase:
        "“Keep the interface small and owned by the use case that consumes it, not by the provider SDK.”",
      aliases: [
        "software interface",
        "programming interface",
        "interface de software",
      ],
      confusion:
        "An interface defines a contract boundary; a concrete class or adapter supplies one implementation of that contract.",
    }),
    "pt-BR": content({
      definition:
        "Interface é um contrato explícito de boundary que descreve operações, entradas, saídas e expectativas sem exigir conhecimento da implementação.",
      purpose:
        "Ela separa consumidores de detalhes, permite providers substituíveis e cria um ponto estável para colaboração, testes e evolução.",
      when: "Defina interface em boundary significativa com consumidores, implementações, ownership ou volatilidade; evite interfaces um-para-um sem separação real.",
      context:
        "Uma aplicação envia notificações por providers diferentes em produção e por recorder em memória nos testes.",
      application:
        "NotificationSender define send com entradas do domínio; adapters implementam e chamadores não importam SDKs.",
      phrase:
        "“Mantenha a interface pequena e pertencente ao use case consumidor, não ao SDK do provider.”",
      aliases: [
        "software interface",
        "programming interface",
        "interface de software",
      ],
      confusion:
        "Interface define contrato; classe concreta ou adapter fornece uma implementação.",
    }),
  },
  dependency: {
    en: content({
      definition:
        "A dependency is any software element, service, data, tool, or assumption another element requires to build, run, or fulfill its behavior.",
      purpose:
        "Making dependencies explicit reveals coupling, ownership, failure paths, security exposure, version compatibility, and the order in which components must be available.",
      when: "Track and manage dependencies whenever code imports a package, calls a service, reads shared data, requires infrastructure, or assumes another component's behavior.",
      context:
        "Checkout requires a payment API, database, runtime package, configuration secret, and DNS resolution to complete an order.",
      application:
        "The team declares package versions, injects service ports, monitors runtime dependencies, defines timeouts and fallbacks, and assigns ownership.",
      phrase:
        "“The payment API is a runtime dependency, so its timeout and failure behavior belong in the checkout design.”",
      aliases: [
        "software dependency",
        "runtime dependency",
        "dependência de software",
      ],
      confusion:
        "A dependency is the required element or relationship; Dependency Injection is one technique for supplying dependencies externally.",
    }),
    "pt-BR": content({
      definition:
        "Dependency é qualquer elemento, serviço, dado, ferramenta ou premissa exigido por outro elemento para construir, executar ou cumprir seu comportamento.",
      purpose:
        "Torná-la explícita revela coupling, ownership, falhas, exposição de segurança, compatibilidade e ordem de disponibilidade.",
      when: "Gerencie dependencies quando código importar package, chamar serviço, ler dados compartilhados, exigir infraestrutura ou presumir comportamento externo.",
      context:
        "Checkout exige API de pagamento, database, package, secret e DNS para concluir um pedido.",
      application:
        "O time declara versões, injeta ports, monitora dependências, define timeouts e fallbacks e atribui ownership.",
      phrase:
        "“A API de pagamento é runtime dependency; timeout e falha pertencem ao design do checkout.”",
      aliases: [
        "software dependency",
        "runtime dependency",
        "dependência de software",
      ],
      confusion:
        "Dependency é o elemento ou relação exigida; Dependency Injection é uma técnica para fornecê-la externamente.",
    }),
  },
  adapter: {
    en: content({
      definition:
        "An adapter is a component that translates between an application's interface or model and a different external interface, protocol, data shape, or technology.",
      purpose:
        "It contains technology-specific mapping and shields the application from provider details while satisfying a port expected by one side.",
      when: "Use an adapter at integration boundaries where signatures, protocols, errors, or data models differ and must evolve without leaking into core behavior.",
      context:
        "The application expresses payment authorization in domain terms, while a provider requires proprietary request fields and error codes.",
      application:
        "A provider adapter maps the domain request to the SDK, translates its response and errors, and implements the PaymentGateway port.",
      phrase:
        "“Keep the provider error mapping in the adapter so the use case sees only domain outcomes.”",
      aliases: ["adapter pattern", "integration adapter", "adaptador"],
      confusion:
        "An adapter translates one contract to another; a facade simplifies access to a subsystem without necessarily adapting to a required interface.",
    }),
    "pt-BR": content({
      definition:
        "Adapter é um componente que traduz entre a interface ou modelo da aplicação e outra interface, protocolo, formato de dados ou tecnologia.",
      purpose:
        "Ele contém mapeamento específico e protege a aplicação de detalhes do provider ao satisfazer uma port esperada.",
      when: "Use adapter em integrações cujas assinaturas, protocolos, erros ou modelos diferem e precisam evoluir sem vazar para o core.",
      context:
        "A aplicação expressa autorização em termos do domínio, mas o provider exige campos e códigos proprietários.",
      application:
        "Um adapter mapeia a request para o SDK, traduz response e erros e implementa PaymentGateway.",
      phrase:
        "“Mantenha o mapeamento de erros no adapter para o use case enxergar somente outcomes do domínio.”",
      aliases: ["adapter pattern", "integration adapter", "adaptador"],
      confusion:
        "Adapter traduz contratos; facade simplifica um subsistema sem necessariamente atender uma interface exigida.",
    }),
  },
  "design-pattern": {
    en: content({
      definition:
        "A design pattern is a named, reusable description of a recurring design problem, its context, forces, structure, and consequences rather than finished copyable code.",
      purpose:
        "It gives teams shared vocabulary and a proven reasoning template for balancing common tradeoffs in object, component, or system design.",
      when: "Apply a design pattern when the actual problem and forces match, adapting it to context instead of introducing its structure solely because it is familiar.",
      context:
        "Several pricing algorithms must be selected at runtime and evolve independently without a growing conditional in checkout.",
      application:
        "The team recognizes the Strategy pattern, defines a pricing contract, and supplies algorithms selected by the use case.",
      phrase:
        "“Strategy fits because the algorithms vary independently; do not add a pattern until that variation is real.”",
      aliases: [
        "software design pattern",
        "padrão de projeto",
        "reusable design solution",
      ],
      confusion:
        "A design pattern is a contextual solution model; a library or framework is executable code and may implement several patterns.",
    }),
    "pt-BR": content({
      definition:
        "Design Pattern é uma descrição nomeada e reutilizável de problema recorrente, contexto, forças, estrutura e consequências, não código pronto para copiar.",
      purpose:
        "Ele oferece vocabulário comum e modelo de raciocínio comprovado para trade-offs de objetos, componentes ou sistemas.",
      when: "Aplique design pattern quando problema e forças reais corresponderem, adaptando ao contexto em vez de adicionar estrutura por familiaridade.",
      context:
        "Vários algoritmos de pricing precisam ser escolhidos em runtime sem um conditional crescente no checkout.",
      application:
        "O time reconhece Strategy, define contrato de pricing e fornece algoritmos escolhidos pelo use case.",
      phrase:
        "“Strategy serve porque os algoritmos variam independentemente; não adicione pattern antes dessa variação existir.”",
      aliases: [
        "software design pattern",
        "padrão de projeto",
        "reusable design solution",
      ],
      confusion:
        "Design pattern é modelo contextual de solução; library ou framework é código executável e pode implementar vários patterns.",
    }),
  },
  factory: {
    en: content({
      definition:
        "Factory is a creational design pattern that centralizes object construction behind an operation that returns an appropriate valid instance.",
      purpose:
        "It hides construction rules, dependency selection, and concrete types from callers when creation is variable or must enforce invariants.",
      when: "Use a factory when callers should request a capability or valid object without knowing which implementation to instantiate or how to assemble it.",
      context:
        "Payment processing selects a provider by country and requires validated configuration and several collaborators for each implementation.",
      application:
        "A PaymentProcessorFactory checks configuration and returns the correct fully constructed processor while checkout depends on the common contract.",
      phrase:
        "“Put provider selection in the factory so checkout does not contain construction conditionals.”",
      aliases: ["factory pattern", "object factory", "fábrica de objetos"],
      confusion:
        "A factory creates objects; a builder assembles a complex object step by step, often exposing construction choices to the caller.",
    }),
    "pt-BR": content({
      definition:
        "Factory é um design pattern criacional que centraliza construção atrás de uma operação que devolve uma instância válida e adequada.",
      purpose:
        "Ele esconde regras de criação, seleção de dependencies e tipos concretos quando a construção varia ou aplica invariants.",
      when: "Use factory quando chamadores devam solicitar uma capacidade sem conhecer implementação ou montagem.",
      context:
        "Pagamentos escolhem provider por país e exigem configuração validada e vários colaboradores.",
      application:
        "PaymentProcessorFactory valida configuração e devolve o processor completo enquanto checkout depende do contrato.",
      phrase:
        "“Coloque a seleção do provider na factory para checkout não conter condicionais de construção.”",
      aliases: ["factory pattern", "object factory", "fábrica de objetos"],
      confusion:
        "Factory cria objetos; builder monta objeto complexo em etapas e costuma expor escolhas ao chamador.",
    }),
  },
  strategy: {
    en: content({
      definition:
        "Strategy is a behavioral design pattern that encapsulates interchangeable algorithms behind one contract and lets a context select one without changing its workflow.",
      purpose:
        "It separates varying policies from the code that uses them, replacing growing conditionals with independently testable implementations.",
      when: "Use Strategy when several algorithms solve the same responsibility and selection varies by configuration, input, customer, or runtime policy.",
      context:
        "Shipping price uses different algorithms for standard, express, international, and promotional delivery.",
      application:
        "Checkout selects a ShippingPriceStrategy and invokes the same calculate contract while each algorithm owns its rules.",
      phrase:
        "“Add the promotional calculation as another strategy instead of extending the checkout conditional.”",
      aliases: ["strategy pattern", "algorithm strategy", "padrão estratégia"],
      confusion:
        "Strategy selects interchangeable behavior; State can use similar structure but changes behavior according to an object's lifecycle state.",
    }),
    "pt-BR": content({
      definition:
        "Strategy é um design pattern comportamental que encapsula algoritmos intercambiáveis sob um contrato e permite selecionar um sem mudar o workflow.",
      purpose:
        "Ele separa políticas variáveis do código consumidor, substituindo condicionais crescentes por implementações testáveis.",
      when: "Use Strategy quando vários algoritmos cumprirem a mesma responsabilidade e a seleção variar por configuração, entrada ou política.",
      context:
        "O preço de frete possui algoritmos diferentes para standard, express, internacional e promocional.",
      application:
        "Checkout escolhe ShippingPriceStrategy e chama calculate enquanto cada implementação contém suas regras.",
      phrase:
        "“Adicione o cálculo promocional como outra strategy em vez de ampliar o conditional do checkout.”",
      aliases: ["strategy pattern", "algorithm strategy", "padrão estratégia"],
      confusion:
        "Strategy seleciona comportamento intercambiável; State muda comportamento conforme o estado do ciclo de vida.",
    }),
  },
  observer: {
    en: content({
      definition:
        "Observer is a behavioral design pattern in which a subject notifies registered observers when relevant state or events change.",
      purpose:
        "It lets multiple reactions attach without the subject hard-coding each consumer, supporting extensible in-process event handling.",
      when: "Use Observer for local notifications with clear subscription lifecycle, ordering, error, and reentrancy behavior; use durable messaging for cross-process reliability.",
      context:
        "A desktop model change must update several views and an audit panel without knowing their concrete classes.",
      application:
        "Views subscribe through an observer contract, receive change notifications, refresh their own representations, and unsubscribe when disposed.",
      phrase:
        "“Unsubscribe the observer with the view lifecycle or the subject will retain stale instances.”",
      aliases: [
        "observer pattern",
        "publish subscribe observer",
        "padrão observador",
      ],
      confusion:
        "Observer usually coordinates objects in one process; publish-subscribe messaging often uses a broker and decouples participants across processes and time.",
    }),
    "pt-BR": content({
      definition:
        "Observer é um design pattern no qual um subject notifica observers registrados quando estado ou eventos relevantes mudam.",
      purpose:
        "Ele permite várias reações sem o subject conhecer cada consumidor concreto, oferecendo eventos extensíveis no processo.",
      when: "Use Observer em notificações locais com lifecycle, ordem, erros e reentrância definidos; use mensageria durável entre processos.",
      context:
        "Uma mudança no modelo desktop atualiza várias views e painel de audit sem conhecer classes concretas.",
      application:
        "Views se inscrevem por contrato, recebem notificações, atualizam suas representações e cancelam inscrição ao serem descartadas.",
      phrase:
        "“Remova o observer com o lifecycle da view ou o subject reterá instâncias antigas.”",
      aliases: [
        "observer pattern",
        "publish subscribe observer",
        "padrão observador",
      ],
      confusion:
        "Observer costuma ligar objetos no mesmo processo; publish-subscribe usa broker e desacopla processos e tempo.",
    }),
  },
  "repository-pattern": {
    en: content({
      definition:
        "Repository Pattern represents domain object persistence through a collection-like interface that hides database queries, mappings, and storage technology.",
      purpose:
        "It keeps application and domain code expressed in model language and places reconstruction and persistence details behind an adapter boundary.",
      when: "Use Repository Pattern around aggregates or entities when persistence independence and domain-oriented queries add value; avoid generic CRUD repositories that erase model intent.",
      context:
        "A use case needs to retrieve an active subscription with its rules and save a valid renewal without importing ORM types.",
      application:
        "SubscriptionRepository exposes findActiveByCustomer and save, while a PostgreSQL adapter implements mapping and queries.",
      phrase:
        "“Name the repository operation after the domain need, not after a generic query-builder method.”",
      aliases: [
        "repository design pattern",
        "domain repository pattern",
        "padrão repository",
      ],
      confusion:
        "Repository Pattern is an application persistence abstraction; a Git repository stores version-control history.",
    }),
    "pt-BR": content({
      definition:
        "Repository Pattern representa persistência de objetos do domínio por interface semelhante a coleção, escondendo queries, mappings e tecnologia.",
      purpose:
        "Ele mantém aplicação e domínio na linguagem do modelo e coloca reconstrução e persistência atrás de adapter.",
      when: "Use Repository Pattern em aggregates ou entities quando independência e queries orientadas ao domínio agregarem valor; evite CRUD genérico sem intenção.",
      context:
        "Um use case recupera assinatura ativa com regras e salva renovação sem importar tipos do ORM.",
      application:
        "SubscriptionRepository expõe findActiveByCustomer e save; adapter PostgreSQL implementa mappings e queries.",
      phrase:
        "“Nomeie a operação pela necessidade do domínio, não por método genérico do query builder.”",
      aliases: [
        "repository design pattern",
        "domain repository pattern",
        "padrão repository",
      ],
      confusion:
        "Repository Pattern é abstração de persistência; Git repository armazena histórico de versionamento.",
    }),
  },
  "anti-pattern": {
    en: content({
      definition:
        "An anti-pattern is a recurring response to a problem that appears useful but predictably creates harmful consequences when applied in its typical context.",
      purpose:
        "Naming anti-patterns helps teams recognize seductive failure modes, understand why they persist, and choose a documented refactoring or alternative.",
      when: "Use the label only with evidence of context, symptoms, forces, and consequences rather than as a dismissive name for unfamiliar code.",
      context:
        "A shared database initially simplifies microservice reporting but later couples releases, ownership, schema changes, and failures across teams.",
      application:
        "The architecture review identifies the shared-database anti-pattern, documents its consequences, and plans explicit data ownership and contracts.",
      phrase:
        "“Explain the consequence before calling this an anti-pattern; the name alone does not justify a redesign.”",
      aliases: ["antipattern", "bad recurring solution", "antipadrão"],
      confusion:
        "An anti-pattern is contextually recurring and harmful; a bug is a specific defect, and a tradeoff may be acceptable despite costs.",
    }),
    "pt-BR": content({
      definition:
        "Anti-pattern é uma resposta recorrente que parece útil, mas produz consequências prejudiciais previsíveis em seu contexto típico.",
      purpose:
        "Nomeá-lo ajuda a reconhecer falhas sedutoras, entender sua persistência e escolher refactoring ou alternativa documentada.",
      when: "Use o rótulo com evidências de contexto, sintomas, forças e consequências, não como nome depreciativo para código desconhecido.",
      context:
        "Database compartilhado simplifica relatórios, mas depois acopla releases, ownership, schema e falhas entre times.",
      application:
        "A revisão identifica o anti-pattern, documenta consequências e planeja ownership e contratos explícitos.",
      phrase:
        "“Explique a consequência antes de chamar de anti-pattern; o nome sozinho não justifica redesign.”",
      aliases: ["antipattern", "bad recurring solution", "antipadrão"],
      confusion:
        "Anti-pattern é recorrente e prejudicial no contexto; bug é defeito específico e trade-off pode ser aceitável apesar de custos.",
    }),
  },
  "legacy-code": {
    en: content({
      definition:
        "Legacy code is existing software that an organization must continue changing or operating despite limited understanding, weak feedback, obsolete dependencies, or costly constraints inherited from its history.",
      purpose:
        "The term highlights stewardship risk: valuable behavior must be preserved while knowledge, tests, observability, and safe change paths are rebuilt.",
      when: "Treat code as legacy when change confidence is low, regardless of age, and improve it incrementally around active business needs rather than rewriting solely because it is old.",
      context:
        "A billing module produces critical invoices, but its original authors left, tests are sparse, and behavior exists only in production incidents and customer expectations.",
      application:
        "The team adds characterization tests and monitoring around the next required change, documents discovered rules, and refactors behind a stable boundary.",
      phrase:
        "“Capture the current invoice behavior before refactoring; undocumented output is still a contract for customers.”",
      aliases: ["legacy software", "inherited codebase", "código legado"],
      confusion:
        "Legacy code is difficult to change safely and carries inherited constraints; old code can remain clear, tested, and maintainable.",
    }),
    "pt-BR": content({
      definition:
        "Legacy Code é software existente que precisa continuar operando ou mudando apesar de pouco entendimento, feedback fraco, dependencies obsoletas ou constraints herdadas.",
      purpose:
        "O termo destaca risco de stewardship: preservar comportamento valioso enquanto conhecimento, testes, observability e caminhos seguros são reconstruídos.",
      when: "Trate como legacy quando a confiança de mudança for baixa, independentemente da idade, melhorando incrementalmente em necessidades reais.",
      context:
        "Um módulo crítico de invoices perdeu autores, possui poucos testes e seu comportamento existe em incidentes e expectativas de clientes.",
      application:
        "O time adiciona characterization tests e monitoring na próxima mudança, documenta regras e refatora atrás de boundary estável.",
      phrase:
        "“Capture o comportamento atual antes do refactor; output não documentado ainda é contrato para clientes.”",
      aliases: ["legacy software", "inherited codebase", "código legado"],
      confusion:
        "Legacy code é difícil de mudar com segurança; código antigo pode continuar claro, testado e sustentável.",
    }),
  },
  "technical-debt": {
    en: content({
      definition:
        "Technical debt is the future cost and risk created when a technical choice makes current delivery easier but leaves the system harder to change, operate, secure, or understand.",
      purpose:
        "Making debt explicit allows teams to compare short-term value with accumulating interest such as slower changes, incidents, manual work, and blocked upgrades.",
      when: "Record technical debt when accepting a known compromise, including owner, consequence, trigger, repayment option, and evidence rather than using the term for every imperfection.",
      context:
        "A launch duplicates customer validation in three services to meet a deadline, knowing rule changes will require coordinated releases.",
      application:
        "The team documents the coupling and schedules consolidation before the next planned rule expansion, tracking defects and change time as interest.",
      phrase:
        "“The duplicate rule is deliberate technical debt; define when its coordination cost triggers repayment.”",
      aliases: ["tech debt", "engineering debt", "dívida técnica"],
      confusion:
        "Technical debt is a consequential compromise that incurs future cost; not every bug, missing feature, or disliked style is debt.",
    }),
    "pt-BR": content({
      definition:
        "Technical Debt é o custo e risco futuros criados quando uma escolha facilita a entrega atual, mas torna o sistema mais difícil de mudar, operar, proteger ou entender.",
      purpose:
        "Torná-la explícita permite comparar valor imediato com juros como lentidão, incidents, trabalho manual e upgrades bloqueados.",
      when: "Registre technical debt ao aceitar compromisso conhecido, com owner, consequência, gatilho, pagamento e evidência; não use para toda imperfeição.",
      context:
        "Um lançamento duplica validação em três serviços para cumprir prazo, sabendo que mudanças exigirão releases coordenadas.",
      application:
        "O time documenta coupling e planeja consolidação antes da expansão da regra, medindo defeitos e tempo como juros.",
      phrase:
        "“A regra duplicada é technical debt deliberada; defina quando o custo de coordenação exige pagamento.”",
      aliases: ["tech debt", "engineering debt", "dívida técnica"],
      confusion:
        "Technical debt é compromisso com custo futuro; nem todo bug, feature ausente ou estilo indesejado é dívida.",
    }),
  },
  refactoring: {
    en: content({
      definition:
        "Refactoring is a disciplined change to the internal structure of software that preserves its externally observable behavior while improving design or changeability.",
      purpose:
        "It reduces complexity, duplication, coupling, or unclear intent in small verified steps without mixing structural cleanup with a behavior change.",
      when: "Refactor under reliable tests or other feedback before or alongside a needed change, keeping steps small enough to identify regressions quickly.",
      context:
        "A pricing method has nested conditionals and duplicated calculations, but its current results are correct and must remain stable.",
      application:
        "The team adds characterization tests, extracts named policies step by step, and runs the suite after each behavior-preserving transformation.",
      phrase:
        "“Separate the refactoring commit from the rule change so reviewers can verify behavior preservation.”",
      aliases: [
        "code refactoring",
        "behavior-preserving transformation",
        "refatoração",
      ],
      confusion:
        "Refactoring preserves observable behavior; rewriting replaces implementation more broadly and often changes behavior or risk at once.",
    }),
    "pt-BR": content({
      definition:
        "Refactoring é uma mudança disciplinada na estrutura interna que preserva comportamento observável enquanto melhora design ou capacidade de mudança.",
      purpose:
        "Ele reduz complexidade, duplicação, coupling ou intenção obscura em passos verificados sem misturar limpeza com alteração comportamental.",
      when: "Refatore sob testes ou feedback confiável antes ou junto de mudança necessária, mantendo passos pequenos para localizar regressões.",
      context:
        "Um método de pricing possui conditionals e cálculos duplicados, mas seus resultados corretos precisam permanecer estáveis.",
      application:
        "O time adiciona characterization tests, extrai policies gradualmente e executa a suíte após cada transformação.",
      phrase:
        "“Separe o commit de refactoring da mudança de regra para verificarmos a preservação do comportamento.”",
      aliases: [
        "code refactoring",
        "behavior-preserving transformation",
        "refatoração",
      ],
      confusion:
        "Refactoring preserva comportamento; rewrite substitui implementação amplamente e costuma mudar comportamento ou risco de uma vez.",
    }),
  },
  "code-smell": {
    en: content({
      definition:
        "A code smell is an observable code characteristic that suggests a deeper design, responsibility, or maintainability problem but is not proof of a defect by itself.",
      purpose:
        "It directs investigation toward areas where change is confusing or risky, using symptoms such as long methods, feature envy, duplication, or shotgun surgery.",
      when: "Investigate a smell in its change context and refactor only after identifying the underlying problem and preserving behavior with feedback.",
      context:
        "Adding one customer field requires editing mapping logic in twelve unrelated files, and omissions repeatedly escape review.",
      application:
        "The team recognizes shotgun surgery, finds scattered ownership, centralizes the mapping contract, and verifies existing outputs.",
      phrase:
        "“The long method is a smell, not the diagnosis; first identify which responsibilities are actually mixed.”",
      aliases: ["software smell", "design smell", "mau cheiro de código"],
      confusion:
        "A code smell indicates possible design trouble; a bug is demonstrated incorrect behavior and may exist in otherwise clean code.",
    }),
    "pt-BR": content({
      definition:
        "Code Smell é uma característica observável que sugere problema mais profundo de design, responsabilidade ou manutenção, mas não prova defeito sozinha.",
      purpose:
        "Ele direciona investigação a áreas de mudança confusa ou arriscada por sintomas como long method, feature envy, duplication ou shotgun surgery.",
      when: "Investigue o smell no contexto de mudança e refatore após identificar o problema e preservar comportamento com feedback.",
      context:
        "Adicionar um campo exige editar mappings em doze arquivos e omissões escapam da review.",
      application:
        "O time reconhece shotgun surgery, encontra ownership espalhado, centraliza contrato e verifica outputs.",
      phrase:
        "“Long method é smell, não diagnóstico; primeiro identifique quais responsabilidades estão misturadas.”",
      aliases: ["software smell", "design smell", "mau cheiro de código"],
      confusion:
        "Code smell indica possível problema; bug é comportamento incorreto demonstrado e pode existir em código limpo.",
    }),
  },
  boilerplate: {
    en: content({
      definition:
        "Boilerplate is repetitive code or configuration required by a language, framework, protocol, or convention but containing little problem-specific behavior.",
      purpose:
        "Naming it helps teams distinguish necessary structural ceremony from business logic and evaluate generation, defaults, libraries, or language features that reduce repetition.",
      when: "Reduce boilerplate when repetition obscures intent or causes errors, while keeping generated behavior transparent, debuggable, and customizable where needed.",
      context:
        "Every API resource repeats identical serialization registration, error mapping, and dependency wiring around a few unique operations.",
      application:
        "A documented generator creates the standard shell, and developers maintain only resource-specific contracts and behavior.",
      phrase:
        "“Generate the framework boilerplate, but keep the domain rules handwritten and visible.”",
      aliases: [
        "repetitive setup code",
        "ceremonial code",
        "código boilerplate",
      ],
      confusion:
        "Boilerplate is repeated required structure; duplication may represent repeated business knowledge and cannot always be safely generated away.",
    }),
    "pt-BR": content({
      definition:
        "Boilerplate é código ou configuração repetitiva exigida por linguagem, framework, protocolo ou convenção, com pouco comportamento específico.",
      purpose:
        "Nomeá-lo separa cerimônia estrutural de lógica e permite avaliar geração, defaults, libraries ou recursos da linguagem.",
      when: "Reduza boilerplate quando repetição esconder intenção ou causar erros, mantendo geração transparente, depurável e customizável.",
      context:
        "Cada recurso de API repete registro, error mapping e wiring idênticos em torno de poucas operações únicas.",
      application:
        "Um generator documentado cria o shell padrão e pessoas mantêm contratos e comportamento específicos.",
      phrase:
        "“Gere o boilerplate do framework, mas mantenha regras do domínio escritas e visíveis.”",
      aliases: [
        "repetitive setup code",
        "ceremonial code",
        "código boilerplate",
      ],
      confusion:
        "Boilerplate é estrutura exigida repetida; duplication pode representar conhecimento de negócio e nem sempre pode ser gerada.",
    }),
  },
  scaffolding: {
    en: content({
      definition:
        "Scaffolding is automatically generated starter structure for a component or project, such as files, wiring, configuration, routes, tests, or basic CRUD operations.",
      purpose:
        "It accelerates common setup and promotes conventions so developers begin from a working skeleton instead of recreating standard structure manually.",
      when: "Use scaffolding for predictable starting structures, then review, own, secure, and adapt the generated output rather than treating it as permanently correct.",
      context:
        "A framework project needs the same controller, service, test, route, and configuration layout for each new resource.",
      application:
        "A CLI generates the files and registrations; the developer removes unused operations and implements validation, authorization, and domain behavior.",
      phrase:
        "“Use the scaffold as a starting point, then remove the public delete route this resource must not expose.”",
      aliases: ["code scaffolding", "project scaffold", "estrutura gerada"],
      confusion:
        "Scaffolding generates a starting structure; boilerplate is the repetitive structural content that may exist whether written manually or generated.",
    }),
    "pt-BR": content({
      definition:
        "Scaffolding é uma estrutura inicial gerada automaticamente para componente ou projeto, como files, wiring, configuração, routes, testes ou CRUD básico.",
      purpose:
        "Ele acelera setup comum e promove convenções para o trabalho começar em um skeleton funcional.",
      when: "Use scaffolding em estruturas previsíveis e depois revise, assuma ownership, proteja e adapte o output gerado.",
      context:
        "Um projeto precisa do mesmo controller, service, test, route e configuração para cada recurso.",
      application:
        "Uma CLI gera files e registros; a pessoa remove operações inúteis e implementa validação, authorization e domínio.",
      phrase:
        "“Use o scaffold como início e remova a route pública de delete que este recurso não pode expor.”",
      aliases: ["code scaffolding", "project scaffold", "estrutura gerada"],
      confusion:
        "Scaffolding gera estrutura inicial; boilerplate é conteúdo repetitivo, escrito manualmente ou gerado.",
    }),
  },
};
