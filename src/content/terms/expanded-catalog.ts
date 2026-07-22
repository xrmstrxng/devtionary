import type { GlossaryTerm } from "@/entities/glossary-term/model";
import { extraCatalogGroups } from "./extra-catalog";

export type CatalogGroup = {
  category: string;
  area: { en: string; "pt-BR": string };
  terms: string[];
};

const baseCatalogGroups: CatalogGroup[] = [
  {
    category: "devops",
    area: {
      en: "infrastructure, delivery, and cloud operations",
      "pt-BR": "infraestrutura, entrega e operações em cloud",
    },
    terms: [
      "Nginx",
      "Proxy",
      "Forward Proxy",
      "Reverse Proxy",
      "Load Balancer",
      "Gateway",
      "API Gateway",
      "Web Server",
      "Application Server",
      "DNS",
      "Domain",
      "Subdomain",
      "Port",
      "Firewall",
      "CDN",
      "VPS",
      "Virtual Machine",
      "Container",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Cluster",
      "Node",
      "Pod",
      "Image",
      "Registry",
      "Volume",
      "Environment Variable",
      "CI/CD",
      "Pipeline",
      "Build",
      "Deploy",
      "Deployment",
      "Release",
      "Rollback",
      "Blue-Green Deployment",
      "Canary Release",
      "Infrastructure as Code",
      "Terraform",
      "Cloud Computing",
      "Serverless",
      "Horizontal Scaling",
      "Vertical Scaling",
      "High Availability",
      "Downtime",
      "Uptime",
      "Health Check",
    ],
  },
  {
    category: "development",
    area: {
      en: "backend development and system integration",
      "pt-BR": "desenvolvimento backend e integração de sistemas",
    },
    terms: [
      "API",
      "REST",
      "RESTful",
      "Endpoint",
      "Route",
      "Request",
      "Response",
      "Payload",
      "Header",
      "Body",
      "Query Parameter",
      "Path Parameter",
      "Status Code",
      "HTTP",
      "HTTPS",
      "Webhook",
      "Callback",
      "Polling",
      "WebSocket",
      "Authentication",
      "Authorization",
      "Token",
      "Session",
      "Cookie",
      "JWT",
      "OAuth",
      "API Key",
      "Rate Limit",
      "Idempotency",
      "Middleware",
      "Interceptor",
      "Guard",
      "Dependency Injection",
      "DTO",
      "Entity",
      "Repository",
      "Service",
      "Controller",
      "Use Case",
      "Domain",
      "Business Rule",
      "Validation",
      "Serialization",
      "Pagination",
    ],
  },
  {
    category: "database",
    area: {
      en: "data modeling, storage, and database operations",
      "pt-BR": "modelagem, armazenamento e operação de bancos de dados",
    },
    terms: [
      "Database",
      "DBMS",
      "Relational Database",
      "NoSQL",
      "Table",
      "Column",
      "Row",
      "Schema",
      "Primary Key",
      "Foreign Key",
      "Unique Constraint",
      "Index",
      "Query",
      "Join",
      "Transaction",
      "Commit",
      "Rollback",
      "Migration",
      "Seed",
      "Normalization",
      "Denormalization",
      "ORM",
      "ACID",
      "Consistency",
      "Replication",
      "Sharding",
      "Deadlock",
      "Connection Pool",
      "Cache",
      "Redis",
      "PostgreSQL",
    ],
  },
  {
    category: "git",
    area: {
      en: "source control and collaborative delivery",
      "pt-BR": "controle de versão e entrega colaborativa",
    },
    terms: [
      "Git",
      "Repository",
      "Remote",
      "Origin",
      "Branch",
      "Commit",
      "Push",
      "Pull",
      "Fetch",
      "Clone",
      "Merge",
      "Rebase",
      "Cherry-pick",
      "Pull Request",
      "Merge Request",
      "Conflict",
      "Tag",
      "Release",
      "Stash",
      "Checkout",
      "Fork",
      "HEAD",
      "Diff",
      "Git Flow",
      "Conventional Commits",
      "Semantic Versioning",
      "Breaking Change",
    ],
  },
  {
    category: "architecture",
    area: {
      en: "software architecture and maintainable code design",
      "pt-BR": "arquitetura de software e design de código sustentável",
    },
    terms: [
      "Architecture",
      "Software Architecture",
      "Monolith",
      "Modular Monolith",
      "Microservice",
      "Distributed System",
      "Clean Architecture",
      "Hexagonal Architecture",
      "Layered Architecture",
      "Event-Driven Architecture",
      "Domain-Driven Design",
      "SOLID",
      "KISS",
      "DRY",
      "YAGNI",
      "Separation of Concerns",
      "Coupling",
      "Cohesion",
      "Abstraction",
      "Encapsulation",
      "Interface",
      "Dependency",
      "Adapter",
      "Port",
      "Design Pattern",
      "Factory",
      "Strategy",
      "Observer",
      "Repository Pattern",
      "Anti-pattern",
      "Legacy Code",
      "Technical Debt",
      "Refactoring",
      "Code Smell",
      "Boilerplate",
      "Scaffolding",
    ],
  },
  {
    category: "quality",
    area: {
      en: "software testing and quality assurance",
      "pt-BR": "testes e garantia de qualidade de software",
    },
    terms: [
      "Quality Assurance",
      "QA",
      "Test Case",
      "Test Scenario",
      "Acceptance Criteria",
      "Unit Test",
      "Integration Test",
      "End-to-End Test",
      "Regression Test",
      "Smoke Test",
      "Load Test",
      "Stress Test",
      "Mock",
      "Stub",
      "Spy",
      "Fixture",
      "Test Coverage",
      "Assertion",
      "Bug",
      "Defect",
      "Issue",
      "Edge Case",
      "Happy Path",
      "Failure Path",
      "Reproducibility",
      "Root Cause",
      "Flaky Test",
    ],
  },
  {
    category: "security",
    area: {
      en: "application security and access protection",
      "pt-BR": "segurança de aplicações e proteção de acesso",
    },
    terms: [
      "Encryption",
      "Hash",
      "Salt",
      "TLS",
      "SSL",
      "CORS",
      "CSRF",
      "XSS",
      "SQL Injection",
      "Brute Force",
      "Phishing",
      "Vulnerability",
      "Exploit",
      "Patch",
      "Secret",
      "Credential",
      "Least Privilege",
      "Two-Factor Authentication",
      "Multi-Factor Authentication",
      "Access Control",
      "Role-Based Access Control",
      "Zero Trust",
      "Audit Log",
      "Data Breach",
    ],
  },
  {
    category: "product",
    area: {
      en: "product strategy, business, and management",
      "pt-BR": "estratégia de produto, negócios e gestão",
    },
    terms: [
      "Product",
      "Product Manager",
      "Product Owner",
      "Stakeholder",
      "Roadmap",
      "Backlog",
      "MVP",
      "Proof of Concept",
      "Scope",
      "Scope Creep",
      "Requirement",
      "Business Requirement",
      "Functional Requirement",
      "Non-functional Requirement",
      "User Story",
      "Epic",
      "Feature",
      "Task",
      "Initiative",
      "KPI",
      "OKR",
      "ROI",
      "SLA",
      "Time to Market",
      "Churn",
      "Conversion",
      "Retention",
      "B2B",
      "B2C",
      "SaaS",
      "White Label",
      "Marketplace",
      "Fintech",
      "ERP",
      "CRM",
    ],
  },
  {
    category: "agile-meetings",
    area: {
      en: "team rituals and everyday collaboration",
      "pt-BR": "rituais de equipe e colaboração cotidiana",
    },
    terms: [
      "Daily",
      "Stand-up",
      "Sprint",
      "Planning",
      "Refinement",
      "Grooming",
      "Retrospective",
      "Review",
      "Kickoff",
      "Discovery",
      "Alignment",
      "One-on-one",
      "Brainstorming",
      "Sync",
      "Follow-up",
      "Action Item",
      "Blocker",
      "Bottleneck",
      "Deadline",
      "ETA",
      "Ownership",
      "Handoff",
      "Feedback",
      "Trade-off",
      "Prioritization",
      "Capacity",
      "Workload",
      "Deliverable",
      "Heads-up",
      "Takeaway",
      "Next Steps",
    ],
  },
];

export const catalogGroups: CatalogGroup[] = [
  ...baseCatalogGroups,
  ...extraCatalogGroups,
];

const abbreviations: Record<string, string> = {
  "api gateway": "API Gateway",
  api: "API",
  b2b: "B2B",
  b2c: "B2C",
  cdn: "CDN",
  "ci/cd": "CI/CD",
  cors: "CORS",
  crm: "CRM",
  csrf: "CSRF",
  dbms: "DBMS",
  dns: "DNS",
  dto: "DTO",
  erp: "ERP",
  eta: "ETA",
  head: "HEAD",
  http: "HTTP",
  https: "HTTPS",
  jwt: "JWT",
  kiss: "KISS",
  kpi: "KPI",
  mvp: "MVP",
  nosql: "NoSQL",
  oauth: "OAuth",
  okr: "OKR",
  orm: "ORM",
  qa: "QA",
  rest: "REST",
  restful: "RESTful",
  roi: "ROI",
  saas: "SaaS",
  sla: "SLA",
  solid: "SOLID",
  sql: "SQL",
  ssl: "SSL",
  tls: "TLS",
  vps: "VPS",
  xss: "XSS",
  yagni: "YAGNI",
};

const searchOverrides: Record<string, { en: string[]; "pt-BR": string[] }> = {
  nginx: {
    en: ["web server", "reverse proxy", "load balancer"],
    "pt-BR": ["servidor web", "proxy reverso", "balanceador de carga"],
  },
  "reverse proxy": {
    en: ["proxy in front of servers"],
    "pt-BR": ["proxy reverso", "intermediário na frente do servidor"],
  },
  rollback: {
    en: ["revert version", "restore release"],
    "pt-BR": ["reverter versão", "restaurar versão", "desfazer deploy"],
  },
  "ci/cd": {
    en: ["continuous integration", "continuous delivery"],
    "pt-BR": ["integração contínua", "entrega contínua"],
  },
  eta: {
    en: ["delivery estimate"],
    "pt-BR": ["estimativa de entrega", "previsão de conclusão"],
  },
  daily: {
    en: ["daily meeting", "standup"],
    "pt-BR": ["reunião diária", "reunião de acompanhamento"],
  },
  "relational database": {
    en: ["relational data"],
    "pt-BR": ["banco relacional", "banco de dados relacional"],
  },
};

const semanticAliases: Record<string, string> = {
  QA: "Quality Assurance",
  UX: "User Experience",
  UI: "User Interface",
  SLI: "Service Level Indicator",
  SLO: "Service Level Objective",
  MTTD: "Mean Time to Detect",
  MTTR: "Mean Time to Recovery",
  RPO: "Recovery Point Objective",
  RTO: "Recovery Time Objective",
  DLQ: "Dead Letter Queue",
  "Pub/Sub": "Publish/Subscribe",
  IdP: "Identity Provider",
  SSO: "Single Sign-On",
  OIDC: "OpenID Connect",
  MITM: "Man-in-the-Middle",
  CSP: "Content Security Policy",
  BI: "Business Intelligence",
  CDC: "Change Data Capture",
  BaaS: "Banking as a Service",
  PaaS: "Platform as a Service",
  IaaS: "Infrastructure as a Service",
  PMF: "Product-Market Fit",
  GTM: "Go-to-Market",
  JTBD: "Job to Be Done",
  CAC: "Customer Acquisition Cost",
  LTV: "Lifetime Value",
  GMV: "Gross Merchandise Value",
  BFF: "Backend for Frontend",
};

const relationOverrides: Record<string, string[]> = {
  nginx: ["web-server", "reverse-proxy", "load-balancer", "http"],
  proxy: ["forward-proxy", "reverse-proxy", "gateway"],
  "forward-proxy": ["proxy", "reverse-proxy", "load-balancer", "gateway"],
  docker: ["container", "image", "volume", "registry"],
  kubernetes: ["cluster", "node", "pod", "container"],
  rest: ["api", "http", "endpoint", "status-code"],
  authentication: ["authorization", "token", "session", "jwt"],
  database: ["dbms", "schema", "table", "query"],
  git: ["repository", "commit", "branch", "merge"],
  "ci-cd": ["pipeline", "build", "deploy", "release"],
  "clean-architecture": ["use-case", "entity", "adapter", "port"],
  "quality-assurance": ["test-case", "regression-test", "bug"],
  "product-owner": ["backlog", "user-story", "sprint"],
  daily: ["blocker", "sprint", "stand-up"],
  sla: ["uptime", "downtime", "business-requirement"],
  rollback: ["deploy", "deployment", "migration", "release"],
  repository: ["git", "repository-pattern", "commit"],
  cache: ["redis", "database", "scalability"],
  pipeline: ["ci-cd", "build", "deploy"],
  release: ["deployment", "semantic-versioning", "tag"],
  node: ["cluster", "kubernetes", "distributed-system"],
  entity: ["domain-driven-design", "repository", "database"],
  schema: ["database", "table", "migration"],
  service: ["controller", "dependency-injection", "microservice"],
  commit: ["git", "branch", "transaction"],
  frontend: ["client-side", "rendering", "responsive-design", "accessibility"],
  react: ["component", "state", "props", "hook"],
  "next-js": [
    "react",
    "server-side-rendering",
    "static-site-generation",
    "hydration",
  ],
  "design-system": [
    "design-token",
    "component-library",
    "storybook",
    "atomic-design",
  ],
  wireframe: ["mockup", "prototype", "user-flow"],
  "technical-documentation": [
    "readme",
    "knowledge-base",
    "technical-specification",
  ],
  "api-documentation": ["openapi", "swagger", "api-contract"],
  observability: ["monitoring", "logging", "metrics", "tracing"],
  monitoring: ["alerting", "metrics", "dashboard", "observability"],
  logging: ["structured-logging", "log-level", "correlation-id", "tracing"],
  incident: [
    "incident-response",
    "on-call",
    "postmortem",
    "root-cause-analysis",
  ],
  "service-level-objective": ["service-level-indicator", "sla", "error-budget"],
  messaging: ["message-broker", "producer", "consumer", "queue"],
  queue: ["message-broker", "producer", "consumer", "dead-letter-queue"],
  "publish-subscribe": ["publisher", "subscriber", "topic", "event-bus"],
  "dead-letter-queue": ["queue", "retry", "backoff", "acknowledgement"],
  "event-sourcing": ["event", "event-stream", "cqrs", "saga"],
  "circuit-breaker": ["timeout", "retry-policy", "fallback", "resilience"],
  concurrency: ["parallelism", "race-condition", "mutex", "semaphore"],
  "eventual-consistency": ["strong-consistency", "replication", "cap-theorem"],
  performance: ["latency", "throughput", "profiling", "benchmark"],
  "cache-invalidation": [
    "cache",
    "cache-hit",
    "cache-miss",
    "caching-strategy",
  ],
  "identity-provider": ["authentication", "single-sign-on", "openid-connect"],
  "access-token": ["refresh-token", "oauth", "authorization", "jwt"],
  "content-security-policy": ["security-header", "xss", "https"],
  integration: [
    "api-contract",
    "external-service",
    "sdk",
    "third-party-integration",
  ],
  "backend-for-frontend": ["api-gateway", "frontend", "backend", "api"],
  "data-pipeline": ["etl", "elt", "batch-processing", "stream-processing"],
  "data-warehouse": ["data-lake", "data-mart", "business-intelligence"],
  "data-lakehouse": [
    "data-lake",
    "data-warehouse",
    "data-mart",
    "data-governance",
  ],
  "customer-journey": [
    "user-persona",
    "user-journey",
    "job-to-be-done",
    "user-flow",
  ],
  typography: ["grid-system", "contrast", "color-palette", "visual-hierarchy"],
  "cron-job": ["job", "scheduler", "background-job", "worker"],
  reset: ["revert", "soft-reset", "mixed-reset", "hard-reset"],
  merge: ["rebase", "merge-commit", "squash-merge", "conflict"],
  "working-tree": ["staging-area", "local-repository", "commit"],
  "git-bisect": ["git-blame", "commit", "diff", "version-control"],
};

export function slugifyTerm(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function typeFor(name: string, category: string): GlossaryTerm["type"] {
  const key = name.toLowerCase();
  if (/^(http|https|tls|ssl|websocket|oauth)$/.test(key)) return "protocol";
  if (/pattern|observer|strategy|factory|adapter|repository pattern/.test(key))
    return "pattern";
  if (
    /^(nginx|docker|docker compose|kubernetes|terraform|redis|postgresql|git)$/.test(
      key,
    )
  )
    return "technology";
  if (
    /proxy|container|dependency|coupling|cohesion|abstraction|encapsulation|idempotency|consistency|scope$|ownership|capacity|workload|trade-off/.test(
      key,
    )
  )
    return "concept";
  if (abbreviations[key] || /^[A-Z][A-Z0-9/.-]+$/.test(name)) return "acronym";
  if (/manager|owner$/.test(key)) return "role";
  if (
    /test|deploy|release|planning|review|refinement|grooming|sync|follow-up|handoff|validation|serialization|pagination|scaling|refactoring|migration|replication|sharding/.test(
      key,
    )
  )
    return "process";
  if (
    category === "architecture" ||
    /architecture|monolith|microservice|system$/.test(key)
  )
    return "architecture";
  if (category === "agile-meetings") return "meeting";
  if (category === "product") return "business";
  return "technical";
}

const concepts: Record<string, { en: string; "pt-BR": string }> = {
  nginx: {
    en: "A high-performance web server commonly used for static content, reverse proxying, and load balancing.",
    "pt-BR":
      "Um servidor web de alto desempenho usado para conteúdo estático, proxy reverso e balanceamento de carga.",
  },
  "reverse proxy": {
    en: "An intermediary that receives client traffic and forwards it to one or more backend servers.",
    "pt-BR":
      "Um intermediário que recebe o tráfego dos clientes e o encaminha para um ou mais servidores backend.",
  },
  "forward proxy": {
    en: "An intermediary that sends requests on behalf of clients, often enforcing access or privacy policies.",
    "pt-BR":
      "Um intermediário que envia requisições em nome dos clientes, geralmente aplicando políticas de acesso ou privacidade.",
  },
  "load balancer": {
    en: "A component that distributes traffic across multiple service instances to improve capacity and resilience.",
    "pt-BR":
      "Um componente que distribui tráfego entre várias instâncias para aumentar capacidade e resiliência.",
  },
  docker: {
    en: "A platform for building and running applications in reproducible, isolated containers.",
    "pt-BR":
      "Uma plataforma para construir e executar aplicações em containers isolados e reproduzíveis.",
  },
  kubernetes: {
    en: "An orchestration platform that schedules, scales, and recovers containerized workloads across a cluster.",
    "pt-BR":
      "Uma plataforma de orquestração que agenda, escala e recupera cargas em containers dentro de um cluster.",
  },
  rest: {
    en: "An architectural style for networked systems centered on resources and a uniform interface.",
    "pt-BR":
      "Um estilo arquitetural para sistemas em rede baseado em recursos e uma interface uniforme.",
  },
  http: {
    en: "The application protocol used to exchange requests and responses across the web.",
    "pt-BR":
      "O protocolo de aplicação usado para trocar requisições e respostas na web.",
  },
  "relational database": {
    en: "A database that organizes data into related tables governed by keys and constraints.",
    "pt-BR":
      "Um banco de dados que organiza informações em tabelas relacionadas por chaves e restrições.",
  },
  transaction: {
    en: "A group of database operations committed or rolled back as one consistent unit.",
    "pt-BR":
      "Um grupo de operações de banco confirmadas ou revertidas como uma única unidade consistente.",
  },
  git: {
    en: "A distributed version control system that records changes and supports parallel collaboration.",
    "pt-BR":
      "Um sistema distribuído de controle de versão que registra mudanças e suporta colaboração paralela.",
  },
  rebase: {
    en: "A Git operation that reapplies commits onto a new base to create a different history.",
    "pt-BR":
      "Uma operação do Git que reaplica commits sobre uma nova base para formar outro histórico.",
  },
  "clean architecture": {
    en: "An architectural approach that keeps business rules independent from frameworks and infrastructure.",
    "pt-BR":
      "Uma abordagem arquitetural que mantém regras de negócio independentes de frameworks e infraestrutura.",
  },
  solid: {
    en: "Five object-oriented design principles aimed at adaptable, understandable software.",
    "pt-BR":
      "Cinco princípios de design orientado a objetos voltados a software compreensível e adaptável.",
  },
  "unit test": {
    en: "A fast test that verifies a small unit of behavior in controlled isolation.",
    "pt-BR":
      "Um teste rápido que verifica uma pequena unidade de comportamento sob isolamento controlado.",
  },
  encryption: {
    en: "A reversible cryptographic transformation that protects data using a key.",
    "pt-BR":
      "Uma transformação criptográfica reversível que protege dados por meio de uma chave.",
  },
  "sql injection": {
    en: "An attack that manipulates unsafe SQL input to read or alter database operations.",
    "pt-BR":
      "Um ataque que manipula entradas SQL inseguras para ler ou alterar operações no banco.",
  },
  roadmap: {
    en: "A strategic view of product direction, outcomes, and likely investment over time.",
    "pt-BR":
      "Uma visão estratégica da direção do produto, resultados e investimentos prováveis ao longo do tempo.",
  },
  "user story": {
    en: "A concise description of a user need used to guide product discussion and delivery.",
    "pt-BR":
      "Uma descrição concisa de uma necessidade do usuário usada para orientar discussão e entrega.",
  },
  blocker: {
    en: "An impediment that prevents work from progressing until it is resolved.",
    "pt-BR":
      "Um impedimento que impede o avanço do trabalho até ser resolvido.",
  },
};

function definitionFor(name: string, group: CatalogGroup) {
  const specific = concepts[name.toLowerCase()];
  if (specific) return specific;
  return {
    en: `${name} is a recognized ${typeFor(name, group.category)} in ${group.area.en} that gives teams a precise name for a recurring responsibility, artifact, or decision.`,
    "pt-BR": `${name} é um ${typeFor(name, group.category)} reconhecido em ${group.area["pt-BR"]}, dando ao time um nome preciso para uma responsabilidade, artefato ou decisão recorrente.`,
  };
}

export type ExpandedEntry = {
  name: string;
  slug: string;
  categories: string[];
  group: CatalogGroup;
};

const additionalCategories: Record<string, string[]> = {
  git: ["Rollback"],
  cloud: [
    "CDN",
    "VPS",
    "Virtual Machine",
    "Container",
    "Docker",
    "Kubernetes",
    "Cluster",
    "Node",
    "Pod",
    "Image",
    "Registry",
    "Volume",
    "Infrastructure as Code",
    "Terraform",
    "Cloud Computing",
    "Serverless",
    "Horizontal Scaling",
    "Vertical Scaling",
    "High Availability",
    "Uptime",
  ],
  architecture: [
    "Proxy",
    "Reverse Proxy",
    "Load Balancer",
    "Gateway",
    "API Gateway",
    "Application Server",
    "Cluster",
    "Pipeline",
    "Horizontal Scaling",
    "Vertical Scaling",
    "High Availability",
    "Repository",
    "Service",
    "Domain",
    "Cache",
    "Replication",
    "Sharding",
  ],
  security: [
    "Nginx",
    "Proxy",
    "Gateway",
    "DNS",
    "Port",
    "Firewall",
    "HTTPS",
    "Token",
    "Session",
    "Cookie",
    "JWT",
    "OAuth",
    "API Key",
    "Guard",
  ],
  documentation: [
    "API",
    "Acceptance Criteria",
    "Roadmap",
    "Requirement",
    "Business Requirement",
    "Functional Requirement",
    "Non-functional Requirement",
    "User Story",
    "Test Case",
    "Test Scenario",
    "Audit Log",
    "Deliverable",
  ],
  business: [
    "Product",
    "Stakeholder",
    "Scope",
    "Scope Creep",
    "Business Requirement",
    "KPI",
    "OKR",
    "ROI",
    "SLA",
    "Time to Market",
    "Churn",
    "Conversion",
    "Retention",
    "B2B",
    "B2C",
    "SaaS",
    "White Label",
    "Marketplace",
    "Fintech",
  ],
  management: [
    "Product Manager",
    "Product Owner",
    "Roadmap",
    "Scope",
    "Scope Creep",
    "Initiative",
    "Planning",
    "Kickoff",
    "Alignment",
    "One-on-one",
    "Action Item",
    "Blocker",
    "Bottleneck",
    "Deadline",
    "ETA",
    "Ownership",
    "Handoff",
    "Feedback",
    "Trade-off",
    "Prioritization",
    "Capacity",
    "Workload",
    "Deliverable",
    "Next Steps",
  ],
  "corporate-systems": ["SaaS", "Marketplace", "Fintech", "ERP", "CRM"],
  "platform-engineering": [
    "Container",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Pipeline",
    "Infrastructure as Code",
    "Terraform",
    "Cloud Computing",
    "Serverless",
    "Service Discovery",
    "Configuration Server",
  ],
};

const secondaryCategories: Record<string, string[]> = {
  frontend: ["development"],
  observability: ["devops", "quality"],
  messaging: ["architecture", "development"],
  "distributed-systems": ["architecture", "devops"],
  performance: ["quality", "architecture"],
  integrations: ["development", "architecture"],
  data: ["database"],
  "corporate-systems": ["business"],
  design: ["product"],
};

function categoriesFor(name: string, primary: string) {
  return [
    primary,
    ...(secondaryCategories[primary] ?? []),
    ...Object.entries(additionalCategories)
      .filter(([, names]) => names.includes(name))
      .map(([category]) => category),
  ];
}

export function getExpandedEntries(): ExpandedEntry[] {
  const entries = new Map<string, ExpandedEntry>();
  for (const group of catalogGroups)
    for (const name of group.terms) {
      const key = name.toLocaleLowerCase("en");
      const current = entries.get(key);
      if (current)
        current.categories = [
          ...new Set([
            ...current.categories,
            ...categoriesFor(name, group.category),
          ]),
        ];
      else
        entries.set(key, {
          name,
          slug: slugifyTerm(name),
          categories: categoriesFor(name, group.category),
          group,
        });
    }
  for (const [alias, canonical] of Object.entries(semanticAliases)) {
    const aliasKey = alias.toLocaleLowerCase("en");
    const canonicalKey = canonical.toLocaleLowerCase("en");
    const aliasEntry = entries.get(aliasKey);
    const canonicalEntry = entries.get(canonicalKey);
    if (!aliasEntry || !canonicalEntry) continue;
    canonicalEntry.categories = [
      ...new Set([...canonicalEntry.categories, ...aliasEntry.categories]),
    ];
    entries.delete(aliasKey);
  }
  return [...entries.values()];
}

export function createExpandedTerm(
  entry: ExpandedEntry,
  index: number,
): GlossaryTerm {
  const definition = definitionFor(entry.name, entry.group);
  const key = entry.name.toLowerCase();
  const aliases = searchOverrides[key] ?? { en: [], "pt-BR": [] };
  const semanticSearchAliases = Object.entries(semanticAliases)
    .filter(([, canonical]) => canonical === entry.name)
    .map(([alias]) => alias);
  return {
    id: `term-${entry.slug}`,
    slug: entry.slug,
    term: entry.name,
    categories: entry.categories,
    level: "all",
    type: typeFor(entry.name, entry.group.category),
    abbreviation: abbreviations[key] ?? semanticSearchAliases[0],
    aliases: [
      ...new Set([
        ...aliases.en,
        ...aliases["pt-BR"],
        ...semanticSearchAliases,
      ]),
    ],
    relatedTerms: relationOverrides[entry.slug] ?? [],
    featured: index % 29 === 0,
    localizedContent: {
      en: {
        shortDefinition: definition.en,
        fullDefinition: `${definition.en} Its exact behavior depends on the surrounding system, so teams define ownership, boundaries, and expected outcomes before relying on it.`,
        professionalContext: `Professionals discuss ${entry.name} when designing, operating, reviewing, or improving work related to ${entry.group.area.en}.`,
        examples: [
          `“We should document how ${entry.name} behaves in this system before the next release.”`,
        ],
        searchableAliases: [...aliases.en, ...semanticSearchAliases],
      },
      "pt-BR": {
        shortDefinition: definition["pt-BR"],
        fullDefinition: `${definition["pt-BR"]} O comportamento exato depende do sistema, por isso o time define responsabilidades, limites e resultados esperados antes de adotá-lo.`,
        professionalContext: `Profissionais discutem ${entry.name} ao projetar, operar, revisar ou melhorar trabalhos ligados a ${entry.group.area["pt-BR"]}.`,
        examples: [
          `“Precisamos documentar como ${entry.name} funciona neste sistema antes da próxima entrega.”`,
        ],
        searchableAliases: [...aliases["pt-BR"], ...semanticSearchAliases],
      },
    },
  };
}
