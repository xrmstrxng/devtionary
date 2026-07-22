import type { GlossaryTerm } from "@/entities/glossary-term/model";
import {
  createExpandedTerm,
  getExpandedEntries,
} from "@/content/terms/expanded-catalog";
import { editorialOverrides } from "@/content/terms/editorial-overrides";
import { identityEditorialOverrides } from "@/content/terms/identity-editorial-overrides";
import { applicationEditorialOverrides } from "@/content/terms/application-editorial-overrides";
import { devopsEditorialOverrides } from "@/content/terms/devops-editorial-overrides";
import { databaseEditorialOverrides } from "@/content/terms/database-editorial-overrides";
import { gitEditorialOverrides } from "@/content/terms/git-editorial-overrides";
import { sharedEditorialOverrides } from "@/content/terms/shared-editorial-overrides";
import { architectureEditorialOverrides } from "@/content/terms/architecture-editorial-overrides";
import { qualityEditorialOverrides } from "@/content/terms/quality-editorial-overrides";
import { securityEditorialOverrides } from "@/content/terms/security-editorial-overrides";
import { productEditorialOverrides } from "@/content/terms/product-editorial-overrides";
import { agileEditorialOverrides } from "@/content/terms/agile-editorial-overrides";
import { frontendEditorialOverrides } from "@/content/terms/frontend-editorial-overrides";
import { designEditorialOverrides } from "@/content/terms/design-editorial-overrides";
import { documentationEditorialOverrides } from "@/content/terms/documentation-editorial-overrides";
import { observabilityEditorialOverrides } from "@/content/terms/observability-editorial-overrides";
import { messagingEditorialOverrides } from "@/content/terms/messaging-editorial-overrides";
import { distributedSystemsEditorialOverrides } from "@/content/terms/distributed-systems-editorial-overrides";
import { performanceEditorialOverrides } from "@/content/terms/performance-editorial-overrides";
import { securityExpansionEditorialOverrides } from "@/content/terms/security-expansion-editorial-overrides";
import { integrationsEditorialOverrides } from "@/content/terms/integrations-editorial-overrides";
import { dataEditorialOverrides } from "@/content/terms/data-editorial-overrides";
import { corporateSystemsEditorialOverrides } from "@/content/terms/corporate-systems-editorial-overrides";
import { remainingEditorialOverrides } from "@/content/terms/remaining-editorial-overrides";
import { enrichRelatedTerms } from "@/content/terms/related-terms";

type Seed = [
  slug: string,
  term: string,
  category: string,
  level: GlossaryTerm["level"],
  type: GlossaryTerm["type"],
  en: string,
  pt: string,
  abbreviation?: string,
  related?: string[],
  aliases?: string[],
];
const seeds: Seed[] = [
  [
    "api",
    "API",
    "development",
    "junior",
    "acronym",
    "A contract that lets software systems communicate through defined operations.",
    "Um contrato que permite a sistemas de software se comunicarem por operações definidas.",
    "API",
    ["endpoint", "request", "response"],
    ["application programming interface"],
  ],
  [
    "endpoint",
    "Endpoint",
    "development",
    "junior",
    "technical",
    "A specific address where an API receives requests for a resource or action.",
    "Um endereço específico onde uma API recebe requisições para um recurso ou ação.",
    undefined,
    ["api", "request"],
  ],
  [
    "payload",
    "Payload",
    "development",
    "junior",
    "technical",
    "The meaningful data carried inside a request, response, event, or message.",
    "Os dados relevantes transportados dentro de uma requisição, resposta, evento ou mensagem.",
    undefined,
    ["request", "response", "queue"],
  ],
  [
    "request",
    "Request",
    "development",
    "junior",
    "technical",
    "A message sent by a client asking a system to perform an operation.",
    "Uma mensagem enviada por um cliente pedindo que um sistema execute uma operação.",
    undefined,
    ["response", "endpoint"],
  ],
  [
    "response",
    "Response",
    "development",
    "junior",
    "technical",
    "The result a system returns after processing a request.",
    "O resultado devolvido por um sistema após processar uma requisição.",
    undefined,
    ["request", "api"],
  ],
  [
    "deploy",
    "Deploy",
    "devops",
    "junior",
    "process",
    "The process of releasing a software version into a target environment.",
    "O processo de disponibilizar uma versão de software em um ambiente de destino.",
    undefined,
    ["rollback", "ci-cd"],
  ],
  [
    "rollback",
    "Rollback",
    "devops",
    "mid-level",
    "process",
    "Restoring a system to a previous known-good version after a problematic change.",
    "A restauração de um sistema para uma versão anterior estável após uma mudança problemática.",
    undefined,
    ["deploy", "hotfix"],
  ],
  [
    "hotfix",
    "Hotfix",
    "development",
    "mid-level",
    "process",
    "An urgent, narrowly scoped fix released to resolve a production problem.",
    "Uma correção urgente e de escopo restrito lançada para resolver um problema em produção.",
    undefined,
    ["deploy", "rollback"],
  ],
  [
    "ci-cd",
    "CI/CD",
    "devops",
    "mid-level",
    "acronym",
    "Automated practices for integrating, testing, and delivering software changes safely.",
    "Práticas automatizadas para integrar, testar e entregar mudanças de software com segurança.",
    "CI/CD",
    ["deploy", "acceptance-criteria"],
    ["continuous integration", "continuous delivery"],
  ],
  [
    "pull-request",
    "Pull Request",
    "git",
    "junior",
    "process",
    "A proposal to review and merge a set of code changes into another branch.",
    "Uma proposta para revisar e incorporar um conjunto de alterações em outra branch.",
    "PR",
    ["branch", "merge-conflict", "commit"],
  ],
  [
    "merge-conflict",
    "Merge Conflict",
    "git",
    "junior",
    "technical",
    "A conflict Git cannot resolve automatically when combining competing changes.",
    "Um conflito que o Git não consegue resolver automaticamente ao combinar alterações concorrentes.",
    undefined,
    ["pull-request", "branch"],
  ],
  [
    "branch",
    "Branch",
    "git",
    "junior",
    "technical",
    "An independent line of development that points to a series of commits.",
    "Uma linha independente de desenvolvimento que aponta para uma série de commits.",
    undefined,
    ["commit", "pull-request"],
  ],
  [
    "commit",
    "Commit",
    "git",
    "junior",
    "technical",
    "A recorded snapshot of repository changes with an identifying message and hash.",
    "Um registro das alterações do repositório com mensagem e hash de identificação.",
    undefined,
    ["branch", "pull-request"],
  ],
  [
    "database-migration",
    "Database Migration",
    "database",
    "mid-level",
    "process",
    "A versioned change that evolves a database schema or transforms stored data.",
    "Uma alteração versionada que evolui o esquema do banco ou transforma dados armazenados.",
    undefined,
    ["legacy-system", "rollback"],
  ],
  [
    "cache",
    "Cache",
    "architecture",
    "mid-level",
    "architecture",
    "Temporary fast storage used to avoid repeating expensive work or data access.",
    "Armazenamento temporário rápido usado para evitar repetir trabalho ou acesso a dados custosos.",
    undefined,
    ["scalability", "availability"],
  ],
  [
    "queue",
    "Queue",
    "architecture",
    "mid-level",
    "architecture",
    "A buffer that lets producers and consumers process messages independently.",
    "Um buffer que permite a produtores e consumidores processar mensagens de forma independente.",
    undefined,
    ["payload", "scalability"],
  ],
  [
    "technical-debt",
    "Technical Debt",
    "quality",
    "all",
    "technical",
    "The future cost created when a convenient solution compromises maintainability.",
    "O custo futuro criado quando uma solução conveniente compromete a manutenibilidade.",
    undefined,
    ["legacy-system", "refactoring"],
  ],
  [
    "scalability",
    "Scalability",
    "architecture",
    "senior",
    "architecture",
    "A system's ability to handle increasing demand by adding or improving resources.",
    "A capacidade de um sistema lidar com demanda crescente ao adicionar ou melhorar recursos.",
    undefined,
    ["availability", "cache"],
  ],
  [
    "availability",
    "Availability",
    "architecture",
    "senior",
    "architecture",
    "The proportion of time a service remains operational and accessible to users.",
    "A proporção de tempo em que um serviço permanece operacional e acessível aos usuários.",
    undefined,
    ["sla", "scalability"],
  ],
  [
    "stakeholder",
    "Stakeholder",
    "business",
    "all",
    "role",
    "A person or group affected by, interested in, or able to influence a product.",
    "Uma pessoa ou grupo afetado, interessado ou capaz de influenciar um produto.",
    undefined,
    ["scope-creep", "backlog"],
  ],
  [
    "backlog",
    "Backlog",
    "product",
    "junior",
    "documentation",
    "An ordered collection of work that a product team may undertake.",
    "Uma coleção ordenada de trabalhos que um time de produto poderá realizar.",
    undefined,
    ["sprint", "acceptance-criteria"],
  ],
  [
    "sprint",
    "Sprint",
    "agile-meetings",
    "junior",
    "process",
    "A fixed timebox in which an agile team works toward a defined goal.",
    "Um período fixo em que um time ágil trabalha para atingir um objetivo definido.",
    undefined,
    ["daily", "retrospective", "backlog"],
  ],
  [
    "daily",
    "Daily",
    "agile-meetings",
    "junior",
    "meeting",
    "A short recurring synchronization meeting focused on progress and impediments.",
    "Uma reunião curta e recorrente de sincronização sobre progresso e impedimentos.",
    undefined,
    ["sprint", "retrospective"],
    ["daily stand-up", "standup"],
  ],
  [
    "retrospective",
    "Retrospective",
    "agile-meetings",
    "junior",
    "meeting",
    "A team meeting to inspect how work happened and agree on improvements.",
    "Uma reunião em que o time avalia como trabalhou e combina melhorias.",
    undefined,
    ["sprint", "daily"],
    ["retro"],
  ],
  [
    "scope-creep",
    "Scope Creep",
    "management",
    "mid-level",
    "business",
    "Uncontrolled growth of a project's scope without matching time or resources.",
    "O crescimento descontrolado do escopo de um projeto sem tempo ou recursos correspondentes.",
    undefined,
    ["stakeholder", "mvp"],
  ],
  [
    "mvp",
    "MVP",
    "product",
    "junior",
    "acronym",
    "The smallest product version that can test a valuable assumption with users.",
    "A menor versão de um produto capaz de testar uma hipótese valiosa com usuários.",
    "MVP",
    ["proof-of-concept", "stakeholder"],
    ["minimum viable product"],
  ],
  [
    "eta",
    "ETA",
    "management",
    "junior",
    "acronym",
    "An estimate of when work, a delivery, or an event is expected to finish.",
    "Uma estimativa de quando um trabalho, entrega ou evento deverá terminar.",
    "ETA",
    ["sla", "scope-creep"],
    ["estimated time of arrival"],
  ],
  [
    "sla",
    "SLA",
    "business",
    "mid-level",
    "acronym",
    "A documented agreement defining measurable service expectations and responsibilities.",
    "Um acordo documentado que define expectativas mensuráveis de serviço e responsabilidades.",
    "SLA",
    ["availability", "stakeholder"],
    ["service level agreement"],
  ],
  [
    "acceptance-criteria",
    "Acceptance Criteria",
    "product",
    "junior",
    "documentation",
    "Testable conditions that clarify when a work item meets its expectations.",
    "Condições testáveis que esclarecem quando um item de trabalho atende às expectativas.",
    undefined,
    ["backlog", "mvp"],
  ],
  [
    "proof-of-concept",
    "Proof of Concept",
    "product",
    "mid-level",
    "process",
    "A small experiment used to verify that an idea or technology is feasible.",
    "Um pequeno experimento usado para verificar se uma ideia ou tecnologia é viável.",
    "PoC",
    ["mvp", "technical-debt"],
  ],
  [
    "legacy-system",
    "Legacy System",
    "corporate-systems",
    "all",
    "architecture",
    "An established system that remains important despite older technology or constraints.",
    "Um sistema estabelecido que continua importante apesar de tecnologia antiga ou restrições.",
    undefined,
    ["technical-debt", "database-migration"],
  ],
  [
    "authentication",
    "Authentication",
    "security",
    "junior",
    "technical",
    "The process of verifying that a user or system is who it claims to be.",
    "O processo de verificar se um usuário ou sistema é quem afirma ser.",
    undefined,
    ["authorization", "api"],
  ],
  [
    "authorization",
    "Authorization",
    "security",
    "mid-level",
    "technical",
    "The rules determining which actions an authenticated identity may perform.",
    "As regras que determinam quais ações uma identidade autenticada pode realizar.",
    undefined,
    ["authentication"],
  ],
  [
    "refactoring",
    "Refactoring",
    "quality",
    "mid-level",
    "process",
    "Improving code structure without intentionally changing its observable behavior.",
    "A melhoria da estrutura do código sem alterar intencionalmente seu comportamento observável.",
    undefined,
    ["technical-debt", "code-review"],
  ],
  [
    "code-review",
    "Code Review",
    "quality",
    "junior",
    "process",
    "A structured examination of code changes by someone other than the author.",
    "Uma análise estruturada das alterações de código por alguém além da pessoa autora.",
    undefined,
    ["pull-request", "refactoring"],
  ],
  [
    "wireframe",
    "Wireframe",
    "design",
    "junior",
    "documentation",
    "A low-detail representation of a screen's structure, hierarchy, and interactions.",
    "Uma representação de baixo detalhe da estrutura, hierarquia e interações de uma tela.",
    undefined,
    ["mvp"],
  ],
];

const existingTerms: GlossaryTerm[] = seeds.map(
  (
    [
      slug,
      term,
      category,
      level,
      type,
      en,
      pt,
      abbreviation,
      relatedTerms = [],
      aliases = [],
    ],
    index,
  ) => ({
    id: `term-${slug}`,
    slug,
    term,
    level,
    type,
    abbreviation,
    relatedTerms,
    aliases,
    categories: [category],
    featured: index % 7 === 0,
    localizedContent: {
      en: {
        shortDefinition: en,
        fullDefinition: `${en} It gives teams a shared way to discuss decisions, trade-offs, and expected outcomes with less ambiguity.`,
        professionalContext: `You will encounter ${term} in planning, implementation, reviews, or conversations where shared technical context matters.`,
        examples: [
          `“Let's clarify how ${term} affects this delivery before we proceed.”`,
        ],
        searchableAliases: aliases,
      },
      "pt-BR": {
        shortDefinition: pt,
        fullDefinition: `${pt} O conceito dá ao time uma linguagem comum para discutir decisões, concessões e resultados esperados com menos ambiguidade.`,
        professionalContext: `Você encontrará ${term} em planejamento, implementação, revisões ou conversas nas quais o contexto técnico compartilhado é importante.`,
        examples: [
          `“Vamos esclarecer como ${term} afeta esta entrega antes de continuar.”`,
        ],
        searchableAliases: aliases,
      },
    },
  }),
);

const expandedEntries = getExpandedEntries();
const expandedByName = new Map(
  expandedEntries.map((entry, index) => [
    entry.name.toLocaleLowerCase("en"),
    createExpandedTerm(entry, index),
  ]),
);

const enrichedExisting = existingTerms.map((term) => {
  const expanded = expandedByName.get(term.term.toLocaleLowerCase("en"));
  if (!expanded) return term;
  expandedByName.delete(term.term.toLocaleLowerCase("en"));
  return {
    ...term,
    categories: [...new Set([...term.categories, ...expanded.categories])],
    aliases: [...new Set([...term.aliases, ...expanded.aliases])],
    relatedTerms: [
      ...new Set([...term.relatedTerms, ...expanded.relatedTerms]),
    ],
    localizedContent: {
      en: {
        ...term.localizedContent.en,
        searchableAliases: [
          ...new Set([
            ...(term.localizedContent.en.searchableAliases ?? []),
            ...(expanded.localizedContent.en.searchableAliases ?? []),
          ]),
        ],
      },
      "pt-BR": {
        ...term.localizedContent["pt-BR"],
        searchableAliases: [
          ...new Set([
            ...(term.localizedContent["pt-BR"].searchableAliases ?? []),
            ...(expanded.localizedContent["pt-BR"].searchableAliases ?? []),
          ]),
        ],
      },
    },
  };
});

const combinedTerms: GlossaryTerm[] = [
  ...enrichedExisting,
  ...expandedByName.values(),
];

const areaGuidance = {
  development: {
    en: "building and integrating application behavior",
    pt: "construção e integração do comportamento de aplicações",
  },
  frontend: {
    en: "creating usable, accessible web interfaces",
    pt: "criação de interfaces web usáveis e acessíveis",
  },
  architecture: {
    en: "making structural decisions that keep systems evolvable",
    pt: "decisões estruturais que mantêm sistemas evolutivos",
  },
  database: {
    en: "storing, retrieving, and protecting application data",
    pt: "armazenamento, consulta e proteção dos dados da aplicação",
  },
  git: {
    en: "tracking changes and coordinating code collaboration",
    pt: "rastreio de mudanças e coordenação da colaboração em código",
  },
  devops: {
    en: "delivering and operating software reliably",
    pt: "entrega e operação confiável de software",
  },
  cloud: {
    en: "running workloads on elastic infrastructure",
    pt: "execução de cargas em infraestrutura elástica",
  },
  security: {
    en: "reducing risk and protecting identities, systems, and data",
    pt: "redução de riscos e proteção de identidades, sistemas e dados",
  },
  quality: {
    en: "finding defects and improving confidence in changes",
    pt: "identificação de defeitos e aumento da confiança nas mudanças",
  },
  product: {
    en: "connecting user needs to valuable product outcomes",
    pt: "conexão entre necessidades dos usuários e resultados de produto",
  },
  design: {
    en: "shaping understandable and effective user experiences",
    pt: "construção de experiências compreensíveis e eficazes",
  },
  "agile-meetings": {
    en: "coordinating people, decisions, and delivery",
    pt: "coordenação de pessoas, decisões e entregas",
  },
  management: {
    en: "planning work, risks, ownership, and outcomes",
    pt: "planejamento de trabalho, riscos, responsabilidades e resultados",
  },
  business: {
    en: "connecting technology decisions to commercial outcomes",
    pt: "conexão entre decisões de tecnologia e resultados comerciais",
  },
  documentation: {
    en: "preserving decisions and making knowledge reusable",
    pt: "preservação de decisões e reutilização do conhecimento",
  },
  "corporate-systems": {
    en: "supporting core organizational processes",
    pt: "suporte aos processos centrais da organização",
  },
  observability: {
    en: "understanding production behavior and responding to incidents",
    pt: "compreensão do comportamento em produção e resposta a incidentes",
  },
  messaging: {
    en: "decoupling asynchronous work and message delivery",
    pt: "desacoplamento de trabalho assíncrono e entrega de mensagens",
  },
  "distributed-systems": {
    en: "coordinating independent services under partial failure",
    pt: "coordenação de serviços independentes sujeitos a falhas parciais",
  },
  performance: {
    en: "measuring and improving speed, capacity, and resource use",
    pt: "medição e melhoria de velocidade, capacidade e uso de recursos",
  },
  integrations: {
    en: "connecting systems through explicit, reliable contracts",
    pt: "conexão de sistemas por contratos explícitos e confiáveis",
  },
  data: {
    en: "turning reliable data into operational and analytical value",
    pt: "transformação de dados confiáveis em valor operacional e analítico",
  },
  "platform-engineering": {
    en: "building reusable capabilities for engineering teams",
    pt: "criação de capacidades reutilizáveis para times de engenharia",
  },
} as const;

const confusionGuidance: Record<string, { en: string; pt: string }> = {
  commit: {
    en: "A Git commit records source changes; a database commit permanently confirms a transaction.",
    pt: "Um commit do Git registra mudanças no código; um commit de banco confirma definitivamente uma transação.",
  },
  rollback: {
    en: "A deployment rollback restores an application version, while a database rollback cancels transactional or schema changes.",
    pt: "Um rollback de deployment restaura uma versão da aplicação, enquanto no banco ele cancela mudanças transacionais ou de esquema.",
  },
  repository: {
    en: "A Git repository stores version history; the Repository Pattern abstracts persistence access inside an application.",
    pt: "Um repositório Git armazena o histórico de versões; o Repository Pattern abstrai o acesso à persistência na aplicação.",
  },
  monitoring: {
    en: "Monitoring tracks known signals and thresholds; observability helps investigate unknown internal behavior from system outputs.",
    pt: "Monitoramento acompanha sinais e limites conhecidos; observabilidade permite investigar comportamentos internos desconhecidos a partir das saídas do sistema.",
  },
  logging: {
    en: "Logs record discrete events, metrics aggregate numeric measurements, and traces follow a request across components.",
    pt: "Logs registram eventos, métricas agregam medições numéricas e traces acompanham uma requisição entre componentes.",
  },
  "service-level-agreement": {
    en: "An SLA is an external agreement; an SLO is an internal reliability target measured through an SLI.",
    pt: "SLA é um acordo externo; SLO é uma meta interna de confiabilidade medida por um SLI.",
  },
  concurrency: {
    en: "Concurrency manages overlapping tasks; parallelism executes multiple tasks at the same physical instant.",
    pt: "Concorrência gerencia tarefas sobrepostas; paralelismo executa múltiplas tarefas fisicamente ao mesmo tempo.",
  },
  "eventual-consistency": {
    en: "Eventual consistency allows replicas to converge later; strong consistency exposes the latest confirmed value immediately.",
    pt: "Consistência eventual permite que réplicas convirjam depois; consistência forte expõe imediatamente o último valor confirmado.",
  },
  retry: {
    en: "Retry repeats a failed operation; fallback chooses an alternative result or path when recovery is not immediate.",
    pt: "Retry repete uma operação que falhou; fallback escolhe um resultado ou caminho alternativo quando a recuperação não é imediata.",
  },
  timeout: {
    en: "A timeout limits waiting time; a circuit breaker temporarily stops calls after repeated failures.",
    pt: "Timeout limita o tempo de espera; circuit breaker interrompe temporariamente chamadas após falhas repetidas.",
  },
  authentication: {
    en: "Authentication verifies identity; authorization decides what that identity may access or change.",
    pt: "Autenticação verifica a identidade; autorização decide o que essa identidade pode acessar ou alterar.",
  },
  tokenization: {
    en: "Tokenization replaces sensitive data with a reference token; encryption transforms data with a reversible cryptographic key.",
    pt: "Tokenização substitui dados sensíveis por uma referência; criptografia transforma dados com uma chave criptográfica reversível.",
  },
  "access-token": {
    en: "An access token authorizes short-lived API access; a refresh token obtains a new access token and requires stronger protection.",
    pt: "Access token autoriza acesso de curta duração; refresh token obtém um novo access token e exige proteção maior.",
  },
  reset: {
    en: "Git reset moves references and may rewrite local state; revert creates a new commit that safely reverses an earlier change.",
    pt: "Git reset move referências e pode reescrever o estado local; revert cria um novo commit que desfaz uma mudança com segurança.",
  },
  merge: {
    en: "Merge combines histories with a merge result; rebase reapplies commits onto a different base and rewrites their identities.",
    pt: "Merge combina históricos; rebase reaplica commits sobre outra base e reescreve suas identidades.",
  },
  wireframe: {
    en: "A wireframe defines structure, a mockup adds visual detail, and a prototype simulates interaction or flow.",
    pt: "Wireframe define estrutura, mockup acrescenta detalhe visual e prototype simula interação ou fluxo.",
  },
  "test-case": {
    en: "A test case defines inputs, steps, and an expected result; a test scenario describes a broader behavior or journey that may require several cases.",
    pt: "Test case define entradas, passos e resultado esperado; test scenario descreve um comportamento ou jornada mais ampla que pode exigir vários casos.",
  },
  "test-scenario": {
    en: "A test scenario states what broad behavior should be checked, while a test case documents exactly how to check one condition.",
    pt: "Test scenario indica qual comportamento amplo deve ser verificado, enquanto test case documenta exatamente como verificar uma condição.",
  },
  architecture: {
    en: "Architecture is the general structure of something; Software Architecture applies structural decisions specifically to software systems.",
    pt: "Architecture é a estrutura geral de algo; Software Architecture aplica decisões estruturais especificamente a sistemas de software.",
  },
  "software-architecture": {
    en: "Software Architecture concerns software boundaries and quality attributes; the broader term Architecture can also describe organizations, data, or infrastructure.",
    pt: "Software Architecture trata de limites e atributos de qualidade do software; Architecture também pode descrever organizações, dados ou infraestrutura.",
  },
  review: {
    en: "Review is a general inspection or agile ceremony; Code Review specifically examines source-code changes for correctness and maintainability.",
    pt: "Review é uma inspeção geral ou cerimônia ágil; Code Review examina especificamente mudanças no código-fonte quanto a correção e manutenção.",
  },
  "code-review": {
    en: "Code Review focuses on source-code changes, while a sprint Review presents completed product work and gathers stakeholder feedback.",
    pt: "Code Review foca mudanças no código-fonte, enquanto a Review da sprint apresenta o trabalho de produto concluído e coleta feedback de stakeholders.",
  },
};

function enrichEditorialContent(term: GlossaryTerm): GlossaryTerm {
  const curatedContent =
    sharedEditorialOverrides[term.slug] ??
    editorialOverrides[term.slug] ??
    identityEditorialOverrides[term.slug] ??
    applicationEditorialOverrides[term.slug] ??
    devopsEditorialOverrides[term.slug] ??
    databaseEditorialOverrides[term.slug] ??
    gitEditorialOverrides[term.slug] ??
    architectureEditorialOverrides[term.slug] ??
    qualityEditorialOverrides[term.slug] ??
    securityEditorialOverrides[term.slug] ??
    productEditorialOverrides[term.slug] ??
    agileEditorialOverrides[term.slug] ??
    frontendEditorialOverrides[term.slug] ??
    designEditorialOverrides[term.slug] ??
    documentationEditorialOverrides[term.slug] ??
    observabilityEditorialOverrides[term.slug] ??
    messagingEditorialOverrides[term.slug] ??
    distributedSystemsEditorialOverrides[term.slug] ??
    performanceEditorialOverrides[term.slug] ??
    securityExpansionEditorialOverrides[term.slug] ??
    integrationsEditorialOverrides[term.slug] ??
    dataEditorialOverrides[term.slug] ??
    corporateSystemsEditorialOverrides[term.slug] ??
    remainingEditorialOverrides[term.slug];
  if (curatedContent) return { ...term, localizedContent: curatedContent };
  const primaryCategory = term.categories[0] as keyof typeof areaGuidance;
  const area = areaGuidance[primaryCategory] ?? areaGuidance.development;
  const confusion = confusionGuidance[term.slug];
  return {
    ...term,
    localizedContent: {
      en: {
        ...term.localizedContent.en,
        purpose: `${term.term} helps teams make concrete decisions related to ${area.en}, reducing ambiguity and making expected behavior easier to verify.`,
        whenToUse: `It becomes relevant when a team is planning, implementing, reviewing, or troubleshooting work involving ${area.en}.`,
        practicalExample: {
          context: `A software team encounters a decision or problem involving ${term.term} during real delivery work.`,
          application: `The team identifies the expected behavior, applies ${term.term} within clear boundaries, and verifies the result before expanding the change.`,
        },
        professionalPhrase: term.localizedContent.en.examples[0],
        commonConfusions: confusion?.en,
      },
      "pt-BR": {
        ...term.localizedContent["pt-BR"],
        purpose: `${term.term} ajuda o time a tomar decisões concretas ligadas a ${area.pt}, reduzindo ambiguidades e facilitando a verificação do comportamento esperado.`,
        whenToUse: `O conceito se torna relevante quando o time planeja, implementa, revisa ou investiga trabalhos que envolvem ${area.pt}.`,
        practicalExample: {
          context: `Um time de software encontra uma decisão ou um problema envolvendo ${term.term} durante uma entrega real.`,
          application: `O time identifica o comportamento esperado, aplica ${term.term} dentro de limites claros e verifica o resultado antes de ampliar a mudança.`,
        },
        professionalPhrase: term.localizedContent["pt-BR"].examples[0],
        commonConfusions: confusion?.pt,
      },
    },
  };
}

const editorialTerms = combinedTerms.map((term) =>
  enrichEditorialContent(term),
);

export const rawTerms: GlossaryTerm[] = enrichRelatedTerms(editorialTerms);
