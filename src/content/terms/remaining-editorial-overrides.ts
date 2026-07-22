import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const remainingEditorialOverrides: Record<string, EditorialPair> = {
  hotfix: {
    en: content({
      definition:
        "Hotfix is an expedited production change intended to correct an urgent, high-impact defect or security issue outside the ordinary release schedule while preserving essential engineering controls.",
      purpose:
        "It reduces immediate user or business harm when waiting for the normal delivery cadence would create greater risk than a carefully constrained emergency change.",
      when: "Use a hotfix only for incidents meeting explicit urgency criteria, minimizing scope and defining owner, reproduction, review, focused tests, approval, rollout, observability, rollback, communication, and follow-up integration into the main development line.",
      context:
        "A newly released pricing defect charges some customers twice, and the ordinary weekly release would prolong financial harm and reconciliation work.",
      application:
        "The incident lead isolates the faulty condition, creates the smallest fix from the current production revision, adds a regression test, obtains emergency peer and business approval, canary deploys, monitors charge and error metrics, rolls back if thresholds fail, merges the change forward, and schedules root-cause actions.",
      phrase:
        "Treat this as a Hotfix because customers are being overcharged; keep the patch narrow, canary it, and merge the verified change back to the main line.",
      aliases: ["emergency fix", "production hot fix", "correção emergencial"],
      confusion:
        "A Hotfix is an expedited change for urgent production impact; a Patch is any small correction and can follow the normal release process.",
    }),
    "pt-BR": content({
      definition:
        "Hotfix é uma expedited production change para corrigir urgent high-impact defect ou security issue fora do ordinary release schedule, preservando essential engineering controls.",
      purpose:
        "Ele reduz immediate user ou business harm quando esperar normal cadence cria risk maior que emergency change cuidadosamente limitada.",
      when: "Use-o apenas para incidents nos urgency criteria, minimizando scope e definindo owner, reproduction, review, focused tests, approval, rollout, observability, rollback, communication e merge no main line.",
      context:
        "Um pricing defect recém-publicado cobra customers duas vezes, e esperar weekly release prolongaria financial harm.",
      application:
        "Incident lead isola condition, cria smallest fix da production revision, adiciona regression test, obtém emergency approval, faz canary, monitora metrics, mantém rollback, mergeia forward e agenda root-cause actions.",
      phrase:
        "Trate como Hotfix porque customers estão sendo cobrados em dobro; mantenha patch estreito, faça canary e merge no main line.",
      aliases: ["emergency fix", "production hot fix", "correção emergencial"],
      confusion:
        "Hotfix é expedited change por urgent production impact; Patch é qualquer small correction e pode seguir normal release.",
    }),
  },
  "merge-conflict": {
    en: content({
      definition:
        "Merge Conflict is a condition in which a version-control system cannot automatically combine competing changes because their edits, file operations, or histories do not produce one unambiguous result.",
      purpose:
        "It forces a human or explicit tool-assisted decision about the intended integrated behavior instead of silently choosing one incompatible change.",
      when: "Resolve it during merge, rebase, cherry-pick, or revert by understanding both changes and their base, consulting owners where semantics are unclear, then testing the combined result rather than only removing conflict markers.",
      context:
        "Two branches change the same authorization function: one adds tenant checks and the other adds an administrator exception, so preserving either side alone would lose required behavior.",
      application:
        "The developer inspects base, ours, and theirs, reconstructs the intended authorization rules, writes a combined implementation, removes markers, runs focused and full tests, reviews the resolved diff, and records the resolution in the resulting commit.",
      phrase:
        "Resolve this Merge Conflict semantically: the final code must preserve both tenant isolation and the approved administrator exception.",
      aliases: [
        "version control conflict",
        "merge collision",
        "conflito de mesclagem",
      ],
      confusion:
        "A Merge Conflict is an ambiguity the tool cannot combine automatically; a logical conflict may merge cleanly yet still produce incorrect behavior when independent changes interact.",
    }),
    "pt-BR": content({
      definition:
        "Merge Conflict é a condição em que version-control system não combina competing changes automaticamente porque edits, file operations ou histories não geram unambiguous result.",
      purpose:
        "Ele exige decisão humana ou tool-assisted sobre integrated behavior, em vez de escolher silenciosamente uma incompatible change.",
      when: "Resolva-o em merge, rebase, cherry-pick ou revert entendendo changes e base, consultando owners e testando combined result, não apenas removendo markers.",
      context:
        "Duas branches mudam authorization function: uma adiciona tenant checks e outra administrator exception; escolher um side perde behavior.",
      application:
        "Developer compara base, ours e theirs, reconstrói rules, combina implementation, remove markers, executa tests, revisa resolved diff e registra resolution no commit.",
      phrase:
        "Resolva este Merge Conflict semanticamente: final code preserva tenant isolation e approved administrator exception.",
      aliases: [
        "version control conflict",
        "merge collision",
        "conflito de mesclagem",
      ],
      confusion:
        "Merge Conflict é ambiguity que tool não resolve; logical conflict pode mergear limpo e ainda produzir incorrect behavior.",
    }),
  },
  "database-migration": {
    en: content({
      definition:
        "Database Migration is a versioned, deployable change to database structure, constraints, indexes, reference data, or stored representation that moves a live database from one known schema state to another.",
      purpose:
        "It makes persistent-store evolution repeatable, ordered, reviewable, and recoverable across developer, test, staging, and production environments.",
      when: "Create one for every database change, designing compatibility with running application versions, transaction and lock behavior, data volume, backfill, validation, rollout order, retries, observability, rollback or forward repair, and backup recovery.",
      context:
        "A busy orders table needs a new non-null fulfillment field while old and new application instances run together during a zero-downtime deployment.",
      application:
        "The team first adds a nullable field and compatible code, backfills in bounded resumable batches, monitors locks and invalid rows, switches writes and reads, validates completeness, adds the constraint separately, and removes old representation only after every consumer migrates.",
      phrase:
        "Split this Database Migration into expand, backfill, validate, enforce, and contract stages so old and new application versions coexist safely.",
      aliases: [
        "schema migration",
        "database change migration",
        "migração de banco de dados",
      ],
      confusion:
        "Database Migration evolves a database schema or stored representation; Data Migration transfers and reconciles data between source and target systems or models.",
    }),
    "pt-BR": content({
      definition:
        "Database Migration é uma versioned deployable change em database structure, constraints, indexes, reference data ou stored representation que move live database entre known schema states.",
      purpose:
        "Ela torna persistent-store evolution repetível, ordered, reviewable e recoverable entre development, test, staging e production.",
      when: "Crie-a para toda database change, projetando compatibility com running app versions, transaction e lock behavior, volume, backfill, validation, rollout order, retries, observability, repair e backup recovery.",
      context:
        "Uma busy orders table precisa de non-null fulfillment field enquanto old e new app instances coexistem em zero-downtime deploy.",
      application:
        "O time adiciona nullable field e compatible code, faz resumable batch backfill, monitora locks, troca writes e reads, valida completeness, adiciona constraint e remove old representation depois.",
      phrase:
        "Divida Database Migration em expand, backfill, validate, enforce e contract para app versions coexistirem.",
      aliases: [
        "schema migration",
        "database change migration",
        "migração de banco de dados",
      ],
      confusion:
        "Database Migration evolui schema ou stored representation; Data Migration transfere e reconcilia data entre systems ou models.",
    }),
  },
  scalability: {
    en: content({
      definition:
        "Scalability is a system's ability to sustain or increase useful workload by adding or reorganizing resources while keeping performance, correctness, reliability, and cost within defined bounds.",
      purpose:
        "It shows whether growth can be accommodated predictably rather than causing disproportionate latency, failures, coordination overhead, or expense.",
      when: "Design for it where demand or data can materially grow, identifying the limiting resource, partitionability, state, contention, coordination, downstream limits, load shape, scaling unit, automation, efficiency, and tested capacity envelope.",
      context:
        "An event service handles ten times more traffic after adding instances, but one shared database sequence and a hot tenant partition prevent further throughput growth.",
      application:
        "The team models demand, load-tests each scaling step, profiles the bottleneck, partitions ownership, removes global coordination, isolates hot tenants, adds capacity triggers, measures throughput per resource and cost per event, and validates failure behavior at scale.",
      phrase:
        "Scalability improved only if added capacity raises sustainable throughput without violating latency, correctness, or unit-cost objectives.",
      aliases: ["system scalability", "scaling capability", "escalabilidade"],
      confusion:
        "Scalability describes how capability changes with added resources or organization; Performance describes observed behavior under a particular workload and resource allocation.",
    }),
    "pt-BR": content({
      definition:
        "Scalability é a capacidade de um system sustentar ou aumentar useful workload ao adicionar ou reorganizar resources, mantendo performance, correctness, reliability e cost em bounds.",
      purpose:
        "Ela mostra se growth é acomodado previsivelmente sem latency, failures, coordination overhead ou expense desproporcionais.",
      when: "Projete-a quando demand ou data puder crescer, identificando limiting resource, partitionability, state, contention, coordination, downstream limits, load shape, scaling unit, automation e capacity envelope.",
      context:
        "Um event service suporta dez vezes mais traffic com instances, mas shared database sequence e hot tenant impedem novo throughput growth.",
      application:
        "O time modela demand, load-testa scaling steps, perfila bottleneck, particiona ownership, remove global coordination, isola hot tenants, automatiza capacity e mede unit cost.",
      phrase:
        "Scalability melhora se added capacity eleva sustainable throughput sem violar latency, correctness ou unit cost.",
      aliases: ["system scalability", "scaling capability", "escalabilidade"],
      confusion:
        "Scalability descreve mudança com resources; Performance descreve behavior sob workload e allocation específicos.",
    }),
  },
  availability: {
    en: content({
      definition:
        "Availability is the proportion or probability that a service is usable and capable of delivering its defined successful behavior when required during a specified observation period.",
      purpose:
        "It quantifies service continuity from the consumer's perspective and guides redundancy, recovery, maintenance, dependency, and error-budget decisions.",
      when: "Define it for critical capabilities using an explicit service-level indicator, eligible time or requests, success criteria, exclusions, measurement point, window, objective, dependency assumptions, and planned-maintenance treatment.",
      context:
        "An API returns HTTP responses almost continuously, but frequent authorization timeouts make checkout unusable even though infrastructure uptime remains high.",
      application:
        "The service measures successful valid checkout responses at the user-facing boundary, sets a rolling objective, includes dependency failures, tracks error budget and regional segments, designs multi-zone redundancy and safe failover, and tests recovery.",
      phrase:
        "Availability counts usable checkout outcomes, not merely processes that are running and returning any HTTP response.",
      aliases: ["service availability", "uptime capability", "disponibilidade"],
      confusion:
        "Availability measures whether a service is usable when required; Reliability covers consistent correct operation over time and includes more failure characteristics than availability alone.",
    }),
    "pt-BR": content({
      definition:
        "Availability é a proporção ou probability de um service estar usable e entregar successful behavior definido quando necessário em observation period.",
      purpose:
        "Ela quantifica service continuity pela consumer perspective e orienta redundancy, recovery, maintenance, dependency e error-budget decisions.",
      when: "Defina-a para critical capabilities com explicit SLI, eligible time ou requests, success criteria, exclusions, measurement point, window, objective, dependency assumptions e maintenance treatment.",
      context:
        "Uma API responde quase sempre, mas authorization timeouts frequentes tornam checkout unusable apesar de high infrastructure uptime.",
      application:
        "O service mede successful checkout responses no user boundary, define rolling objective, inclui dependency failures, acompanha error budget, projeta multi-zone redundancy e testa recovery.",
      phrase:
        "Availability conta usable checkout outcomes, não apenas processes rodando e retornando qualquer HTTP response.",
      aliases: ["service availability", "uptime capability", "disponibilidade"],
      confusion:
        "Availability mede se service está usable; Reliability cobre consistent correct operation e outros failure characteristics.",
    }),
  },
  "code-review": {
    en: content({
      definition:
        "Code Review is the structured examination of a proposed source-code change by someone other than its author to evaluate correctness, security, maintainability, clarity, tests, and fit with system constraints before or shortly after integration.",
      purpose:
        "It catches defects and risky assumptions, spreads system knowledge, improves design decisions, and creates accountable collaboration around changes that automation cannot fully judge.",
      when: "Review every material change with scope and depth proportional to risk, giving reviewers context, requirements, tests, deployment and rollback notes, and keeping changes small enough to understand.",
      context:
        "A pull request changes payment retry behavior and appears mechanically correct, but a new idempotency key on each attempt could create duplicate charges after timeouts.",
      application:
        "The reviewer traces success and failure paths, checks the contract and threat model, runs focused tests, flags the idempotency flaw with a concrete scenario, separates blocking issues from suggestions, the author revises and adds regression coverage, and approval records the reviewed revision.",
      phrase:
        "In Code Review, block this retry change until every attempt reuses the original payment idempotency key.",
      aliases: ["peer code review", "source review", "revisão de código"],
      confusion:
        "Code Review examines a source-code change and its engineering consequences; Pair Programming develops code collaboratively in real time and may still benefit from independent review.",
    }),
    "pt-BR": content({
      definition:
        "Code Review é o structured examination de proposed source-code change por alguém além do author para avaliar correctness, security, maintainability, clarity, tests e system fit.",
      purpose:
        "Ele encontra defects e risky assumptions, espalha system knowledge, melhora design decisions e cria accountable collaboration onde automation não julga tudo.",
      when: "Revise toda material change com depth proporcional ao risk, oferecendo context, requirements, tests, deployment e rollback notes e mantendo changes pequenas.",
      context:
        "Um pull request muda payment retry e parece correto, mas nova idempotency key por attempt pode criar duplicate charges após timeout.",
      application:
        "Reviewer percorre paths, verifica contract e threat model, executa tests, aponta flaw com scenario, separa blockers de suggestions, author corrige e adiciona regression coverage e approval registra revision.",
      phrase:
        "No Code Review, bloqueie retry change até toda attempt reutilizar original payment idempotency key.",
      aliases: ["peer code review", "source review", "revisão de código"],
      confusion:
        "Code Review examina source change; Pair Programming desenvolve code colaborativamente em real time.",
    }),
  },
  wireframe: {
    en: content({
      definition:
        "Wireframe is a low-fidelity representation of an interface's information hierarchy, content regions, controls, navigation, and layout relationships without committing to final visual styling.",
      purpose:
        "It makes structure and interaction assumptions cheap to discuss and revise before typography, color, imagery, polish, and implementation create attachment and cost.",
      when: "Create wireframes while exploring flows and page structure, using realistic content and states, annotating behavior, accessibility and responsive intent, and testing whether users can understand and complete the core task.",
      context:
        "A checkout redesign must decide the order of address, delivery, payment, summary, errors, and confirmation before investing in branded high-fidelity screens.",
      application:
        "The designer sketches mobile and wide layouts for happy, validation, loading, unavailable and recovery states, labels control behavior and focus order, uses realistic long content, links a simple flow, tests tasks, and revises hierarchy from evidence.",
      phrase:
        "Use the Wireframe to validate checkout hierarchy and error recovery before choosing final components and visual treatment.",
      aliases: [
        "interface wireframe",
        "low-fidelity layout",
        "esqueleto de interface",
      ],
      confusion:
        "A Wireframe emphasizes structure and hierarchy; a Mockup shows higher-fidelity visual design, while a Prototype simulates interaction and flow at any fidelity.",
    }),
    "pt-BR": content({
      definition:
        "Wireframe é uma low-fidelity representation de information hierarchy, content regions, controls, navigation e layout relationships de uma interface sem final visual styling.",
      purpose:
        "Ele torna structure e interaction assumptions baratas para discutir e revisar antes de typography, color, imagery, polish e implementation criarem custo.",
      when: "Crie-o ao explorar flows e page structure, usando realistic content e states, anotando behavior, accessibility e responsive intent e testando core task.",
      context:
        "Um checkout redesign decide order de address, delivery, payment, summary, errors e confirmation antes de branded high-fidelity screens.",
      application:
        "Designer esboça mobile e wide layouts para happy, validation, loading, unavailable e recovery states, documenta behavior e focus, usa long content, liga flow e testa tasks.",
      phrase:
        "Use Wireframe para validar checkout hierarchy e error recovery antes de final components e visual treatment.",
      aliases: [
        "interface wireframe",
        "low-fidelity layout",
        "esqueleto de interface",
      ],
      confusion:
        "Wireframe enfatiza structure; Mockup mostra high-fidelity visual design e Prototype simula interaction e flow.",
    }),
  },
  grooming: {
    en: content({
      definition:
        "Grooming is the older name often used for Backlog Refinement, the ongoing collaborative activity of clarifying, splitting, ordering, and adding enough evidence to future backlog items so the team can make informed delivery decisions.",
      purpose:
        "It reduces avoidable uncertainty before selection while keeping discovery and planning continuous rather than turning the backlog into a fixed upfront specification.",
      when: "Refine near-term candidates when they need shared understanding, involving product, engineering, design and other expertise to examine value, users, examples, dependencies, risks, size, testability, and unanswered questions.",
      context:
        "A backlog item says only 'improve refunds,' but the team does not know eligible order states, partial-amount rules, provider behavior, permissions, customer communication, or success measure.",
      application:
        "The team reviews evidence, defines the desired outcome, maps refund scenarios and constraints, splits policy and workflow increments, records acceptance examples and dependencies, creates discovery tasks for unknowns, estimates only the understood slice, and reorders it against other work.",
      phrase:
        "During Grooming, split the refund item by outcome and resolve provider constraints before calling any story ready.",
      aliases: [
        "backlog grooming",
        "Backlog Refinement",
        "refinamento do backlog",
      ],
      confusion:
        "Grooming or Backlog Refinement prepares and orders future work continuously; Sprint Planning selects and plans work for a specific sprint.",
    }),
    "pt-BR": content({
      definition:
        "Grooming é o nome antigo de Backlog Refinement, a ongoing collaborative activity de clarificar, dividir, ordenar e adicionar evidence a future backlog items para informed delivery decisions.",
      purpose:
        "Ele reduz avoidable uncertainty antes da selection e mantém discovery e planning contínuos, sem transformar backlog em fixed upfront specification.",
      when: "Refine near-term candidates quando precisarem de shared understanding, envolvendo product, engineering, design e experts para value, users, examples, dependencies, risks, size, testability e unknowns.",
      context:
        "Um item diz apenas 'improve refunds', sem eligible states, partial rules, provider behavior, permissions, communication ou success measure.",
      application:
        "O time revisa evidence, define outcome, mapeia scenarios, divide increments, registra acceptance examples e dependencies, cria discovery tasks, estima understood slice e reordena work.",
      phrase:
        "Durante Grooming, divida refund item por outcome e resolva provider constraints antes de chamar story de ready.",
      aliases: [
        "backlog grooming",
        "Backlog Refinement",
        "refinamento do backlog",
      ],
      confusion:
        "Grooming ou Backlog Refinement prepara future work continuamente; Sprint Planning seleciona work de uma sprint.",
    }),
  },
};
