import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const distributedSystemsEditorialOverrides: Record<
  string,
  EditorialPair
> = {
  "distributed-computing": {
    en: content({
      definition:
        "Distributed Computing is computation performed by multiple autonomous networked nodes that coordinate through message exchange to achieve a shared task or provide one system capability.",
      purpose:
        "It enables scale, geographic reach, specialization, resource sharing, and failure isolation beyond one machine while accepting partial failure and uncertain communication.",
      when: "Use it when requirements exceed or benefit from a single failure and resource domain, designing explicit boundaries, consistency, coordination, latency, security, observability, and recovery.",
      context:
        "A global payment platform must process regional traffic near customers, share account state, survive machine and zone failures, and integrate several independent services.",
      application:
        "The architecture partitions ownership, replicates selected data, uses versioned messages and APIs, bounds waiting, handles duplicates and partitions, automates failover, and tests failure modes.",
      phrase:
        "Distributed Computing gains independent capacity but turns network delay and partial failure into normal design conditions.",
      aliases: [
        "distributed computation",
        "networked computing",
        "computação distribuída",
      ],
      confusion:
        "Distributed Computing coordinates work across networked autonomous nodes; Parallelism means operations execute simultaneously and can occur within one machine.",
    }),
    "pt-BR": content({
      definition:
        "Distributed Computing é computation executada por múltiplos autonomous networked nodes que coordenam por message exchange para uma shared task ou system capability.",
      purpose:
        "Ela permite scale, geographic reach, specialization, resource sharing e failure isolation além de uma machine, aceitando partial failure e uncertain communication.",
      when: "Use-a quando requirements excederem ou se beneficiarem de um failure e resource domain, projetando boundaries, consistency, coordination, latency, security, observability e recovery.",
      context:
        "Uma global payment platform processa regional traffic perto de customers, compartilha account state, sobrevive a machine e zone failures e integra services.",
      application:
        "Architecture particiona ownership, replica data selecionada, usa versioned messages e APIs, limita espera, trata duplicates e partitions, automatiza failover e testa failures.",
      phrase:
        "Distributed Computing ganha independent capacity, mas torna network delay e partial failure condições normais.",
      aliases: [
        "distributed computation",
        "networked computing",
        "computação distribuída",
      ],
      confusion:
        "Distributed Computing coordena networked nodes autônomos; Parallelism executa operations simultaneamente e pode ocorrer numa machine.",
    }),
  },
  "distributed-lock": {
    en: content({
      definition:
        "A Distributed Lock is a coordination mechanism intended to grant one contender temporary exclusive authority over a named resource across multiple processes or nodes.",
      purpose:
        "It reduces conflicting concurrent actions where local mutexes cannot coordinate participants running in separate failure domains.",
      when: "Use one only when the operation truly requires exclusive coordination and simpler ownership, partitioning, uniqueness, idempotency, or optimistic concurrency cannot solve it; include lease, fencing, and failure semantics.",
      context:
        "Several scheduler instances can start the same monthly settlement and duplicate external actions if they all believe they own the run.",
      application:
        "A contender obtains a time-bounded lease and increasing fencing token; the protected resource rejects stale tokens, work renews safely, releases best-effort, and remains idempotent after uncertain expiry.",
      phrase:
        "The Distributed Lock lease alone is insufficient; the database must reject a stale holder using its fencing token.",
      aliases: ["cluster lock", "distributed mutex", "bloqueio distribuído"],
      confusion:
        "A Distributed Lock coordinates exclusive access across nodes; Leader Election chooses one participant for a leadership role and may use leases internally.",
    }),
    "pt-BR": content({
      definition:
        "Distributed Lock é um coordination mechanism para conceder a um contender temporary exclusive authority sobre named resource entre processes ou nodes.",
      purpose:
        "Ele reduz conflicting concurrent actions onde local mutexes não coordenam participants em failure domains separados.",
      when: "Use-o somente se operation exigir exclusive coordination e ownership, partitioning, uniqueness, idempotency ou optimistic concurrency não resolverem; inclua lease, fencing e failure semantics.",
      context:
        "Várias scheduler instances iniciam monthly settlement e duplicam external actions se todas acreditarem possuir run.",
      application:
        "Contender obtém time-bounded lease e increasing fencing token; protected resource rejeita stale tokens, work renova, release é best-effort e processing idempotent.",
      phrase:
        "Distributed Lock lease sozinho não basta; database deve rejeitar stale holder pelo fencing token.",
      aliases: ["cluster lock", "distributed mutex", "bloqueio distribuído"],
      confusion:
        "Distributed Lock coordena exclusive access entre nodes; Leader Election escolhe participant para leadership role e pode usar leases.",
    }),
  },
  "leader-election": {
    en: content({
      definition:
        "Leader Election is a distributed coordination process by which participating nodes agree which currently eligible member should perform a unique leadership role for a term or lease.",
      purpose:
        "It provides one active coordinator for responsibilities such as scheduling, metadata decisions, or replication while allowing another node to take over after failure.",
      when: "Use it where one active role is necessary, defining membership, terms, quorum, fencing, heartbeats, failover time, split-brain prevention, and behavior when no leader exists.",
      context:
        "A replicated job scheduler needs exactly one active planner while standby nodes must assume leadership when the current planner becomes unreachable.",
      application:
        "Nodes participate in a consensus-backed election, the winner receives a monotonically increasing term, writes only with that term, renews liveness, steps down on lost quorum, and exposes leadership state.",
      phrase:
        "A node that loses quorum must stop acting as leader even if it cannot see the newly elected replacement.",
      aliases: ["leader selection", "primary election", "eleição de líder"],
      confusion:
        "Leader Election chooses a temporary coordinator; Consensus is the broader process of agreeing on ordered values or state despite failures.",
    }),
    "pt-BR": content({
      definition:
        "Leader Election é um distributed coordination process pelo qual nodes participantes concordam qual eligible member executa unique leadership role por term ou lease.",
      purpose:
        "Ela fornece um active coordinator para scheduling, metadata decisions ou replication e permite takeover após failure.",
      when: "Use-a onde one active role for necessário, definindo membership, terms, quorum, fencing, heartbeats, failover time, split-brain prevention e behavior sem leader.",
      context:
        "Um replicated job scheduler precisa de um active planner e standby nodes assumem leadership quando planner fica unreachable.",
      application:
        "Nodes participam de consensus-backed election, winner recebe increasing term, escreve somente com ele, renova liveness, steps down ao perder quorum e expõe leadership state.",
      phrase:
        "Node que perde quorum deve parar de agir como leader mesmo sem enxergar replacement eleito.",
      aliases: ["leader selection", "primary election", "eleição de líder"],
      confusion:
        "Leader Election escolhe temporary coordinator; Consensus é processo amplo de concordar ordered values ou state apesar de failures.",
    }),
  },
  consensus: {
    en: content({
      definition:
        "Consensus is the property and process by which distributed participants agree on a single value, order, or replicated state despite delays, retries, and a tolerated set of failures.",
      purpose:
        "It enables consistent coordination for replicated logs, leader terms, membership, metadata, and decisions when no node alone has an authoritative view.",
      when: "Use a proven consensus system for small critical coordination state, defining fault assumptions, quorum, membership, durability, latency, and unavailable behavior rather than inventing an ad hoc protocol.",
      context:
        "Three metadata replicas must agree which configuration version is committed even if one node fails and messages arrive in different orders.",
      application:
        "A leader proposes log entries, a quorum replicates each entry before commit, followers apply committed order, terms reject stale leaders, and membership changes follow protocol safeguards.",
      phrase:
        "Consensus commits the configuration only after a quorum agrees on its log position, so a failed minority cannot create a competing history.",
      aliases: [
        "distributed consensus",
        "consensus protocol",
        "consenso distribuído",
      ],
      confusion:
        "Consensus reaches agreement among distributed participants; eventual consistency allows replicas to differ temporarily and converge without agreeing synchronously on each update.",
    }),
    "pt-BR": content({
      definition:
        "Consensus é a property e process pelos quais distributed participants concordam num value, order ou replicated state único apesar de delays, retries e failures toleradas.",
      purpose:
        "Ele permite consistent coordination para replicated logs, leader terms, membership, metadata e decisions quando nenhum node possui authoritative view sozinho.",
      when: "Use proven consensus system para critical coordination state pequeno, definindo fault assumptions, quorum, membership, durability, latency e unavailable behavior sem ad hoc protocol.",
      context:
        "Três metadata replicas concordam qual configuration version está committed mesmo com node failure e messages fora de ordem.",
      application:
        "Leader propõe log entries, quorum replica antes de commit, followers aplicam committed order, terms rejeitam stale leaders e membership changes seguem safeguards.",
      phrase:
        "Consensus commita configuration depois de quorum concordar na log position, impedindo minority falha de criar history concorrente.",
      aliases: [
        "distributed consensus",
        "consensus protocol",
        "consenso distribuído",
      ],
      confusion:
        "Consensus alcança agreement entre participants; eventual consistency permite replicas divergirem temporariamente e convergirem sem synchronous agreement por update.",
    }),
  },
  quorum: {
    en: content({
      definition:
        "A Quorum is the minimum subset of members or votes required for a distributed operation or decision to be considered valid under a system's consistency and fault model.",
      purpose:
        "It ensures valid decision groups overlap in ways that prevent disjoint minorities from independently committing conflicting state.",
      when: "Use quorum rules in replicated coordination and data systems, deriving read, write, election, and membership thresholds from replication size, failure assumptions, and required consistency.",
      context:
        "A five-node metadata cluster must continue after two node failures but must not let isolated pairs each elect a leader and commit changes.",
      application:
        "The protocol requires three of five votes for election and commit, stops writes without that majority, tracks current membership, and handles configuration changes through joint consensus.",
      phrase:
        "Two surviving nodes do not form a Quorum in a five-member cluster, so they must refuse leadership and writes.",
      aliases: ["majority quorum", "distributed quorum", "quórum"],
      confusion:
        "A Quorum is the required participation threshold; replication is the broader practice of maintaining copies and may use quorum or other coordination rules.",
    }),
    "pt-BR": content({
      definition:
        "Quorum é o subset mínimo de members ou votes necessário para distributed operation ou decision ser válida conforme consistency e fault model do system.",
      purpose:
        "Ele garante overlap entre valid decision groups de modo que disjoint minorities não commitem conflicting state independentemente.",
      when: "Use quorum rules em replicated coordination e data systems, derivando read, write, election e membership thresholds de replication size, failure assumptions e consistency.",
      context:
        "Um metadata cluster de cinco nodes continua após duas failures, mas isolated pairs não podem eleger leaders e commitar changes.",
      application:
        "Protocol exige três de cinco votes para election e commit, para writes sem majority, acompanha membership e trata configuration changes por joint consensus.",
      phrase:
        "Dois surviving nodes não formam Quorum num cluster de cinco e devem recusar leadership e writes.",
      aliases: ["majority quorum", "distributed quorum", "quórum"],
      confusion:
        "Quorum é participation threshold; replication é prática ampla de manter copies e pode usar quorum ou outras coordination rules.",
    }),
  },
  "cap-theorem": {
    en: content({
      definition:
        "The CAP Theorem states that when a network partition prevents communication between parts of a distributed data system, it cannot simultaneously guarantee both linearizable consistency and availability for every request.",
      purpose:
        "It clarifies the unavoidable behavior choice during partition: reject or delay some operations to preserve one-copy semantics, or continue serving and accept potentially divergent observations.",
      when: "Use CAP when reasoning about behavior specifically under network partition, defining consistency and availability precisely and evaluating choices per operation rather than labeling an entire system with two letters.",
      context:
        "Two regional replicas lose connectivity while customers in both regions attempt to update the same account setting.",
      application:
        "The team decides whether one side rejects conflicting writes until coordination returns or both accept writes with explicit conflict and convergence semantics, then tests that partition behavior.",
      phrase:
        "CAP Theorem does not say choose any two during normal operation; the consistency-versus-availability choice becomes unavoidable when a partition occurs.",
      aliases: [
        "brewer's theorem",
        "consistency availability partition tolerance",
        "teorema cap",
      ],
      confusion:
        "CAP addresses linearizable consistency and availability during partition; ACID describes transaction properties and is not the opposite side of CAP.",
    }),
    "pt-BR": content({
      definition:
        "CAP Theorem afirma que, quando network partition impede communication num distributed data system, não é possível garantir simultaneamente linearizable consistency e availability em todo request.",
      purpose:
        "Ele esclarece a escolha inevitável durante partition: rejeitar ou atrasar operations para one-copy semantics ou continuar e aceitar observations divergentes.",
      when: "Use CAP ao raciocinar behavior especificamente sob network partition, definindo consistency e availability e avaliando escolhas por operation em vez de rotular system com duas letras.",
      context:
        "Duas regional replicas perdem connectivity enquanto customers atualizam a mesma account setting nas duas regions.",
      application:
        "O time decide se um lado rejeita conflicting writes até coordination voltar ou ambos aceitam com conflict e convergence semantics e testa behavior.",
      phrase:
        "CAP Theorem não diz escolha quaisquer dois normalmente; consistency versus availability torna-se inevitável durante partition.",
      aliases: [
        "brewer's theorem",
        "consistency availability partition tolerance",
        "teorema cap",
      ],
      confusion:
        "CAP trata linearizable consistency e availability sob partition; ACID descreve transaction properties e não é seu oposto.",
    }),
  },
  "eventual-consistency": {
    en: content({
      definition:
        "Eventual Consistency is a replicated-data model in which replicas may temporarily return different values but are expected to converge when updates and communication cease and all changes propagate.",
      purpose:
        "It allows lower coordination, local availability, and geographic scale for data whose temporary staleness or conflict can be tolerated and resolved.",
      when: "Use it where business semantics accept bounded or observable staleness, defining convergence, conflict resolution, session guarantees, ordering, repair, and user experience explicitly.",
      context:
        "A product-like counter updates locally in several regions and can briefly differ, but all replicas should converge without losing concurrent increments.",
      application:
        "Replicas record mergeable operations, exchange versions asynchronously, resolve concurrent updates deterministically, expose freshness where needed, and monitor replication lag and repair.",
      phrase:
        "Eventual Consistency permits the like count to differ briefly; it does not permit replicas to remain divergent forever.",
      aliases: [
        "eventually consistent",
        "convergent consistency",
        "consistência eventual",
      ],
      confusion:
        "Eventual Consistency promises convergence after updates stop; Strong Consistency makes completed operations appear according to a single authoritative ordering model.",
    }),
    "pt-BR": content({
      definition:
        "Eventual Consistency é um replicated-data model em que replicas podem retornar values diferentes temporariamente, mas devem convergir quando updates e communication cessam e changes propagam.",
      purpose:
        "Ela permite menor coordination, local availability e geographic scale para data cuja temporary staleness ou conflict pode ser tolerada e resolvida.",
      when: "Use-a onde business semantics aceitarem staleness limitada ou observável, definindo convergence, conflict resolution, session guarantees, ordering, repair e user experience.",
      context:
        "Um product-like counter atualiza localmente em regions e pode diferir brevemente, mas replicas devem convergir sem perder concurrent increments.",
      application:
        "Replicas registram mergeable operations, trocam versions assincronamente, resolvem concurrent updates deterministically, expõem freshness e monitoram replication lag e repair.",
      phrase:
        "Eventual Consistency permite like count divergir brevemente; não permite replicas permanecerem diferentes para sempre.",
      aliases: [
        "eventually consistent",
        "convergent consistency",
        "consistência eventual",
      ],
      confusion:
        "Eventual Consistency promete convergence após updates pararem; Strong Consistency apresenta completed operations conforme authoritative ordering model único.",
    }),
  },
  "strong-consistency": {
    en: content({
      definition:
        "Strong Consistency is a consistency model in which operations observe a single authoritative ordering or current state according to a defined strong guarantee, commonly linearizability.",
      purpose:
        "It prevents clients from observing stale or conflicting committed state where immediate coordination is necessary for correctness, invariants, or decisions.",
      when: "Use it for operations whose business correctness cannot tolerate stale observation or concurrent divergence, accepting coordination latency and reduced availability during some failures.",
      context:
        "Two withdrawals must not both observe the same available balance and overdraw an account when processed by different nodes.",
      application:
        "The account owner serializes or consensus-orders balance updates, validates each against the latest committed state, rejects operations without quorum, and exposes read semantics explicitly.",
      phrase:
        "Strong Consistency for balance updates may reject a regional write during partition rather than accept two incompatible withdrawals.",
      aliases: [
        "strongly consistent",
        "immediate consistency",
        "consistência forte",
      ],
      confusion:
        "Strong Consistency is a family or informal label that must name its precise guarantee; serializability orders transactions, while linearizability constrains real-time operation behavior.",
    }),
    "pt-BR": content({
      definition:
        "Strong Consistency é um consistency model em que operations observam authoritative ordering ou current state único conforme strong guarantee definido, comumente linearizability.",
      purpose:
        "Ela evita stale ou conflicting committed state onde immediate coordination é necessária para correctness, invariants ou decisions.",
      when: "Use-a em operations cuja business correctness não tolera stale observation ou concurrent divergence, aceitando coordination latency e reduced availability em failures.",
      context:
        "Dois withdrawals não podem observar o mesmo available balance e deixar account negativa quando processados por nodes diferentes.",
      application:
        "Account owner serializa ou consensus-orders updates, valida cada um contra latest committed state, rejeita sem quorum e expõe read semantics.",
      phrase:
        "Strong Consistency em balance updates pode rejeitar regional write durante partition em vez de aceitar withdrawals incompatíveis.",
      aliases: [
        "strongly consistent",
        "immediate consistency",
        "consistência forte",
      ],
      confusion:
        "Strong Consistency precisa nomear guarantee preciso; serializability ordena transactions e linearizability restringe real-time operations.",
    }),
  },
  "network-partition": {
    en: content({
      definition:
        "A Network Partition is a failure condition in which groups of otherwise running nodes cannot communicate reliably with one another while communication may continue within each group.",
      purpose:
        "Recognizing it as a normal distributed failure mode prevents systems from mistaking unreachable peers for dead peers and making unsafe conflicting decisions.",
      when: "Design and test for partitions wherever nodes coordinate over a network, defining timeouts, quorum, leases, fencing, request behavior, reconciliation, observability, and recovery.",
      context:
        "Two data centers remain internally healthy but a link failure blocks traffic between them, and both consider the other unavailable.",
      application:
        "The consensus group permits only the quorum side to write, the minority rejects leadership, clients receive bounded errors or safe reads, and operators verify reconciliation after connectivity returns.",
      phrase:
        "During the Network Partition, node health is not enough to authorize writes; only the quorum side may commit.",
      aliases: ["network split", "communication partition", "partição de rede"],
      confusion:
        "A Network Partition separates communicating groups; packet loss is lost traffic that may be intermittent and does not necessarily create stable isolated groups.",
    }),
    "pt-BR": content({
      definition:
        "Network Partition é uma failure condition em que grupos de nodes em execução não se comunicam confiavelmente, embora communication continue dentro de cada grupo.",
      purpose:
        "Reconhecê-la como distributed failure normal evita confundir unreachable peers com dead peers e tomar conflicting decisions inseguras.",
      when: "Projete e teste partitions onde nodes coordenem por network, definindo timeouts, quorum, leases, fencing, request behavior, reconciliation, observability e recovery.",
      context:
        "Dois data centers permanecem healthy internamente, mas link failure bloqueia traffic entre eles e ambos veem o outro unavailable.",
      application:
        "Consensus group permite writes somente no quorum side, minority rejeita leadership, clients recebem bounded errors ou safe reads e operators verificam reconciliation.",
      phrase:
        "Durante Network Partition, node health não autoriza writes; somente quorum side pode commitar.",
      aliases: ["network split", "communication partition", "partição de rede"],
      confusion:
        "Network Partition separa communicating groups; packet loss é traffic perdida e pode não criar grupos isolados estáveis.",
    }),
  },
  "split-brain": {
    en: content({
      definition:
        "Split Brain is a failure state in which multiple separated participants simultaneously believe they hold the same exclusive authority, such as primary or leader, and can create conflicting state.",
      purpose:
        "The term identifies a dangerous coordination failure that requires quorum, fencing, leases, isolation, or conflict controls rather than simple duplicate-process detection.",
      when: "Prevent it in replicated or active-passive systems by ensuring only an authoritative partition can act and that stale authorities cannot modify protected resources.",
      context:
        "After a network split, two database nodes each accept writes as primary, creating incompatible customer records that cannot be merged automatically.",
      application:
        "The system requires majority election, issues increasing terms, fences storage writes by term, shuts down or isolates the minority, alerts immediately, and follows controlled reconciliation.",
      phrase:
        "Quorum prevents election on the minority side, while fencing prevents a stale primary from causing Split Brain writes.",
      aliases: ["dual primary", "multiple leader failure", "cérebro dividido"],
      confusion:
        "Split Brain is conflicting simultaneous authority; active-active operation is intentional concurrency with designed ownership and conflict semantics.",
    }),
    "pt-BR": content({
      definition:
        "Split Brain é uma failure state em que participants separados acreditam simultaneamente possuir a mesma exclusive authority, como primary ou leader, e criam conflicting state.",
      purpose:
        "O termo identifica dangerous coordination failure que exige quorum, fencing, leases, isolation ou conflict controls, não simples duplicate-process detection.",
      when: "Previna-o em replicated ou active-passive systems garantindo que somente authoritative partition aja e stale authorities não modifiquem protected resources.",
      context:
        "Após network split, dois database nodes aceitam writes como primary e criam customer records incompatíveis.",
      application:
        "System exige majority election, emite increasing terms, fences storage writes por term, isola minority, alerta e segue controlled reconciliation.",
      phrase:
        "Quorum impede election no minority side e fencing impede stale primary de causar Split Brain writes.",
      aliases: ["dual primary", "multiple leader failure", "cérebro dividido"],
      confusion:
        "Split Brain é conflicting simultaneous authority; active-active operation é intentional concurrency com ownership e conflict semantics projetados.",
    }),
  },
  "circuit-breaker": {
    en: content({
      definition:
        "Circuit Breaker is a stateful resilience mechanism that stops calls to a failing dependency after a threshold, probes recovery after a waiting period, and resumes traffic only when the dependency is healthy enough.",
      purpose:
        "It prevents repeated slow or failing calls from exhausting callers, reduces pressure on the impaired dependency, and gives the system a controlled recovery path.",
      when: "Place it around remote operations whose repeated failures can consume scarce threads, connections, or latency budgets, choosing meaningful failure signals and thresholds from service behavior.",
      context:
        "A checkout service calls a tax provider that begins timing out, causing request queues and connection pools to grow across every application instance.",
      application:
        "The breaker records eligible failures, opens after the configured threshold, fails fast during the open interval, permits limited half-open probes, and closes after successful evidence of recovery.",
      phrase:
        "The Circuit Breaker is open, so checkout skips the tax call and returns the explicitly supported degraded response.",
      aliases: ["service breaker", "dependency breaker", "disjuntor"],
      confusion:
        "A Circuit Breaker suppresses calls according to observed dependency health; a Timeout limits how long one call may wait.",
    }),
    "pt-BR": content({
      definition:
        "Circuit Breaker é um mecanismo stateful de resilience que interrompe chamadas a uma dependency após um threshold de falhas, testa recovery depois de uma espera e só retoma traffic quando ela está saudável.",
      purpose:
        "Ele impede que chamadas lentas ou falhas esgotem callers, reduz pressure sobre a dependency degradada e cria um caminho controlado de recovery.",
      when: "Coloque-o ao redor de remote operations cujas falhas repetidas consomem threads, connections ou latency budget, escolhendo sinais e thresholds coerentes com o service.",
      context:
        "Um checkout service chama um tax provider que começa a dar timeout, fazendo queues e connection pools crescerem em todas as instances.",
      application:
        "O breaker registra falhas elegíveis, abre após o threshold, faz fail fast durante o open interval, permite poucos half-open probes e fecha após evidência de recovery.",
      phrase:
        "O Circuit Breaker está open; checkout pula a chamada fiscal e devolve a degraded response prevista.",
      aliases: ["service breaker", "dependency breaker", "disjuntor"],
      confusion:
        "Circuit Breaker suprime chamadas conforme a saúde observada da dependency; Timeout limita quanto uma chamada individual pode esperar.",
    }),
  },
  timeout: {
    en: content({
      definition:
        "Timeout is a configured upper bound on how long an operation waits for a response or state transition before the caller stops waiting and reports an incomplete or unknown outcome.",
      purpose:
        "It bounds resource occupation and latency propagation so an unresponsive dependency cannot hold requests, workers, connections, or workflows indefinitely.",
      when: "Set explicit connection, read, write, queue, and overall time limits for remote or blocking work, deriving them from end-to-end deadlines rather than arbitrary defaults.",
      context:
        "A payment request exceeds the checkout deadline even though the provider may still be processing the charge after the client disconnects.",
      application:
        "The caller propagates a deadline, cancels work where supported, releases resources, records the timeout stage, and reconciles the possibly completed payment before retrying.",
      phrase:
        "This Timeout means the result is unknown; it does not prove that the provider rejected the operation.",
      aliases: ["time limit", "request timeout", "tempo limite"],
      confusion:
        "Timeout ends a caller's wait; cancellation stops underlying work only when the protocol and callee honor the cancellation signal.",
    }),
    "pt-BR": content({
      definition:
        "Timeout é um limite configurado para a espera por uma response ou state transition; ao vencê-lo, o caller para de esperar e registra outcome incompleto ou desconhecido.",
      purpose:
        "Ele limita ocupação de resources e propagação de latency para uma dependency sem resposta não prender requests, workers, connections ou workflows indefinidamente.",
      when: "Defina connection, read, write, queue e overall timeouts para trabalho remoto ou bloqueante, derivados do end-to-end deadline e não de defaults arbitrários.",
      context:
        "Uma payment request ultrapassa o checkout deadline, embora o provider ainda possa concluir a cobrança depois que o client desistiu.",
      application:
        "O caller propaga deadline, cancela quando houver suporte, libera resources, registra a etapa expirada e reconcilia a possível cobrança antes de repetir.",
      phrase:
        "Este Timeout deixa o resultado desconhecido; não prova que o provider rejeitou a operação.",
      aliases: ["time limit", "request timeout", "tempo limite"],
      confusion:
        "Timeout encerra a espera do caller; cancellation só interrompe o trabalho subjacente se protocol e callee respeitarem o sinal.",
    }),
  },
  "retry-policy": {
    en: content({
      definition:
        "Retry Policy is the explicit rule set that decides which failed operations may be attempted again, how many times, at what intervals, and under what total deadline and safety constraints.",
      purpose:
        "It recovers from transient faults without turning persistent failures into retry storms, duplicate side effects, excessive latency, or synchronized load spikes.",
      when: "Define one for operations with classifiable transient failures and repeatable semantics, considering idempotency, exponential backoff, jitter, server hints, attempt budgets, and terminal handling.",
      context:
        "An inventory client receives a temporary 503 response, while validation errors and authorization failures will not improve if submitted again.",
      application:
        "The policy retries only selected status codes with the same idempotency key, uses capped exponential backoff plus jitter, honors Retry-After, and stops at the request deadline.",
      phrase:
        "The Retry Policy permits two more attempts for this 503, but never retries the invalid reservation request.",
      aliases: ["retry strategy", "reattempt policy", "política de repetição"],
      confusion:
        "Retry Policy governs repeated attempts; Backoff is only the timing rule between those attempts.",
    }),
    "pt-BR": content({
      definition:
        "Retry Policy é o conjunto explícito de regras que decide quais failed operations podem ser repetidas, quantas vezes, em quais intervalos e sob qual deadline e safety constraints.",
      purpose:
        "Ela recupera transient faults sem transformar falhas persistentes em retry storm, duplicate effects, latency excessiva ou spikes sincronizados.",
      when: "Defina-a para operations com falhas transitórias classificáveis e semântica repetível, considerando idempotency, exponential backoff, jitter, server hints, attempt budget e terminal handling.",
      context:
        "Um inventory client recebe 503 temporário, enquanto validation errors e authorization failures não melhorarão com nova tentativa.",
      application:
        "A policy repete apenas status selecionados com a mesma idempotency key, usa capped exponential backoff com jitter, respeita Retry-After e para no request deadline.",
      phrase:
        "A Retry Policy permite mais duas tentativas para este 503, mas nunca repete a reservation request inválida.",
      aliases: ["retry strategy", "reattempt policy", "política de repetição"],
      confusion:
        "Retry Policy governa as tentativas repetidas; Backoff é somente a regra de tempo entre elas.",
    }),
  },
  bulkhead: {
    en: content({
      definition:
        "Bulkhead is a resource-isolation pattern that partitions capacity among workloads or dependencies so exhaustion or blockage in one partition cannot consume the capacity needed by others.",
      purpose:
        "It limits the blast radius of overload and dependency failure, preserving service for independent paths even when one pool is saturated.",
      when: "Separate execution pools, connection pools, queues, concurrency permits, or instances when workloads have different risk, priority, latency, or dependency profiles.",
      context:
        "Slow report generation consumes every shared worker, preventing short account lookups from running despite using an unrelated database.",
      application:
        "The service assigns reports a bounded worker and queue pool, reserves separate capacity for interactive traffic, rejects excess report work, and monitors saturation per partition.",
      phrase:
        "The reporting Bulkhead is full, but reserved account capacity remains available.",
      aliases: [
        "resource isolation",
        "pool isolation",
        "compartimento estanque",
      ],
      confusion:
        "Bulkhead isolates resource capacity; Rate Limiting controls how much traffic is admitted over time and need not isolate consumers from one another.",
    }),
    "pt-BR": content({
      definition:
        "Bulkhead é um pattern de resource isolation que divide capacity entre workloads ou dependencies para bloqueio ou exaustão de uma partição não consumir os resources das demais.",
      purpose:
        "Ele limita o blast radius de overload e dependency failure, preservando service para caminhos independentes quando um pool satura.",
      when: "Separe execution pools, connection pools, queues, concurrency permits ou instances quando workloads tiverem risco, prioridade, latency ou dependencies diferentes.",
      context:
        "Geração lenta de reports consome todos os shared workers e impede account lookups curtos, apesar de usarem outro database.",
      application:
        "O service limita workers e queue de reports, reserva capacity para interactive traffic, rejeita excesso de reports e monitora saturation por partition.",
      phrase:
        "O Bulkhead de reports está cheio, mas a capacity reservada para contas continua disponível.",
      aliases: [
        "resource isolation",
        "pool isolation",
        "compartimento estanque",
      ],
      confusion:
        "Bulkhead isola capacity; Rate Limiting controla traffic admitido ao longo do tempo e não necessariamente separa consumers.",
    }),
  },
  fallback: {
    en: content({
      definition:
        "Fallback is a deliberately supported alternative result, data source, or execution path used when the preferred dependency or capability cannot provide an acceptable response.",
      purpose:
        "It preserves a safe subset of user value during failure while making reduced freshness, accuracy, functionality, or assurance explicit.",
      when: "Provide one only when an alternative has valid business semantics, a known risk envelope, observable activation, and a clear recovery path; fail closed where degradation would be unsafe.",
      context:
        "A recommendation engine is unavailable, but the storefront can still show a recently computed popularity list without affecting prices or inventory.",
      application:
        "After the recommendation call fails within its deadline, the page loads a bounded-age cached list, labels reduced personalization, emits a fallback metric, and periodically probes recovery.",
      phrase:
        "Use the cached popularity list as the Fallback; never invent a fallback authorization decision.",
      aliases: [
        "alternate path",
        "degraded alternative",
        "caminho alternativo",
      ],
      confusion:
        "Fallback changes the result or path after failure; Retry attempts the preferred operation again.",
    }),
    "pt-BR": content({
      definition:
        "Fallback é um resultado, data source ou execution path alternativo e deliberadamente suportado quando a dependency ou capability preferida não entrega response aceitável.",
      purpose:
        "Ele preserva uma parte segura do user value durante falhas, deixando explícita a redução de freshness, accuracy, functionality ou assurance.",
      when: "Ofereça-o somente quando a alternativa tiver business semantics válidas, risk envelope conhecido, activation observável e recovery path claro; faça fail closed se degradar for inseguro.",
      context:
        "Um recommendation engine fica unavailable, mas a storefront ainda exibe uma popularity list recente sem afetar prices ou inventory.",
      application:
        "Após a chamada exceder o deadline, a página usa cached list com idade limitada, sinaliza personalization reduzida, emite fallback metric e testa recovery.",
      phrase:
        "Use a popularity list em cache como Fallback; nunca invente uma authorization decision alternativa.",
      aliases: [
        "alternate path",
        "degraded alternative",
        "caminho alternativo",
      ],
      confusion:
        "Fallback muda o resultado ou path após a falha; Retry tenta novamente a operation preferida.",
    }),
  },
  failover: {
    en: content({
      definition:
        "Failover is the controlled transfer of service responsibility from an unavailable or unhealthy active component to a prepared replacement.",
      purpose:
        "It restores availability after a component, zone, or site failure while preserving the ownership and state guarantees required by the service.",
      when: "Design it for components whose recovery objective requires a standby, replica, alternate region, or replacement process, specifying detection, promotion, routing, fencing, and return procedures.",
      context:
        "The primary database host loses power and application traffic must move to a replica without allowing the former primary to resume stale writes.",
      application:
        "Health and quorum checks confirm failure, automation promotes an eligible replica, fences the old primary, updates routing, verifies replication position, and records recovery time and data loss.",
      phrase:
        "Failover promoted the replica only after fencing the old writer and confirming its recovery point.",
      aliases: [
        "automatic switchover",
        "standby promotion",
        "transferência por falha",
      ],
      confusion:
        "Failover reacts to failure by transferring responsibility; Load Balancing distributes normal traffic among concurrently available targets.",
    }),
    "pt-BR": content({
      definition:
        "Failover é a transferência controlada da responsabilidade de service de um component ativo indisponível ou unhealthy para um replacement preparado.",
      purpose:
        "Ele restaura availability após falha de component, zone ou site, preservando as garantias de ownership e state exigidas pelo service.",
      when: "Projete-o quando o recovery objective exigir standby, replica, alternate region ou replacement process, especificando detection, promotion, routing, fencing e retorno.",
      context:
        "O primary database host perde energia e o application traffic precisa migrar para uma replica sem permitir stale writes do primary anterior.",
      application:
        "Health e quorum checks confirmam falha, automation promove replica elegível, faz fencing do antigo primary, atualiza routing e verifica replication position.",
      phrase:
        "O Failover promoveu a replica somente após fencing do writer antigo e confirmação do recovery point.",
      aliases: [
        "automatic switchover",
        "standby promotion",
        "transferência por falha",
      ],
      confusion:
        "Failover reage à falha transferindo responsibility; Load Balancing distribui traffic normal entre targets disponíveis simultaneamente.",
    }),
  },
  redundancy: {
    en: content({
      definition:
        "Redundancy is the intentional duplication of components, data, paths, or capacity so a required function is not dependent on a single instance.",
      purpose:
        "It supplies alternate resources that can preserve service or enable repair when one resource fails, provided failures and dependencies are sufficiently independent.",
      when: "Add it where a single point of failure conflicts with availability or durability objectives, placing copies across appropriate power, network, zone, provider, or administrative failure domains.",
      context:
        "Two API instances share one network switch and one database, so their apparent duplication does not remove either shared failure point.",
      application:
        "The architecture runs instances across zones, replicates durable state, duplicates network paths, verifies spare capacity, and regularly tests whether each alternate can actually take load.",
      phrase:
        "Redundancy counts only when the duplicate survives the failure domain we are designing against.",
      aliases: ["duplicate capacity", "spare component", "redundância"],
      confusion:
        "Redundancy provides duplicate resources; Fault Tolerance is the resulting ability to continue correct service despite particular faults.",
    }),
    "pt-BR": content({
      definition:
        "Redundancy é a duplicação intencional de components, data, paths ou capacity para uma função necessária não depender de uma única instance.",
      purpose:
        "Ela fornece resources alternativos que preservam service ou permitem repair quando um falha, desde que failures e dependencies sejam suficientemente independentes.",
      when: "Adicione-a onde um single point of failure conflita com availability ou durability objectives, distribuindo cópias entre failure domains de power, network, zone, provider ou administração.",
      context:
        "Duas API instances compartilham um network switch e database; a duplicação aparente não remove esses shared failure points.",
      application:
        "A architecture executa instances em zones, replica durable state, duplica network paths, verifica spare capacity e testa se cada alternativa suporta load.",
      phrase:
        "Redundancy só conta quando a cópia sobrevive ao failure domain contra o qual projetamos.",
      aliases: ["duplicate capacity", "spare component", "redundância"],
      confusion:
        "Redundancy fornece resources duplicados; Fault Tolerance é a capacidade resultante de manter service correto diante de faults específicos.",
    }),
  },
  "fault-tolerance": {
    en: content({
      definition:
        "Fault Tolerance is a system's ability to continue delivering its specified service, possibly within declared limits, when one or more anticipated faults occur.",
      purpose:
        "It turns an explicit fault model into mechanisms that prevent component faults from immediately becoming user-visible system failures.",
      when: "Engineer it for failure modes that must not interrupt a critical capability, defining tolerated faults, correctness constraints, redundancy, detection, masking, recovery, and proof through testing.",
      context:
        "A storage cluster must continue acknowledged reads and writes after losing any one disk or node without returning corrupted or uncommitted data.",
      application:
        "The cluster uses checksums, replicated quorum writes, automatic re-replication, capacity headroom, failure injection, and alerts when redundancy drops below the promised tolerance.",
      phrase:
        "Our Fault Tolerance claim covers one node loss, not simultaneous loss of two zones.",
      aliases: [
        "fault-tolerant operation",
        "failure masking",
        "tolerância a falhas",
      ],
      confusion:
        "Fault Tolerance promises continued service under a defined fault model; High Availability targets overall uptime and may include brief interruption and recovery.",
    }),
    "pt-BR": content({
      definition:
        "Fault Tolerance é a capacidade de um system continuar entregando o service especificado, possivelmente sob limites declarados, quando faults previstos ocorrem.",
      purpose:
        "Ela transforma um fault model explícito em mecanismos que impedem component faults de virarem imediatamente system failures visíveis.",
      when: "Projete-a para failure modes que não podem interromper uma capability crítica, definindo faults tolerados, correctness, redundancy, detection, masking, recovery e testes.",
      context:
        "Um storage cluster mantém reads e writes confirmados após perder qualquer disk ou node, sem devolver data corrompida ou não commitada.",
      application:
        "O cluster usa checksums, replicated quorum writes, automatic re-replication, capacity headroom, failure injection e alerts quando a redundancy cai.",
      phrase:
        "Nossa garantia de Fault Tolerance cobre a perda de um node, não a perda simultânea de duas zones.",
      aliases: [
        "fault-tolerant operation",
        "failure masking",
        "tolerância a falhas",
      ],
      confusion:
        "Fault Tolerance promete continuidade sob um fault model; High Availability mira uptime geral e pode incluir breve interrupção e recovery.",
    }),
  },
  resilience: {
    en: content({
      definition:
        "Resilience is a system's capacity to absorb disruption, maintain or safely degrade essential behavior, recover within objectives, and adapt using what was learned.",
      purpose:
        "It frames reliability across prevention, response, graceful degradation, restoration, and improvement instead of relying on a single protective mechanism.",
      when: "Treat it as an end-to-end property when designing critical user journeys across software, infrastructure, dependencies, operators, and changing demand.",
      context:
        "A regional cloud incident removes capacity and a payment provider slows down during peak traffic, challenging several independent safeguards at once.",
      application:
        "The platform isolates workloads, sheds optional traffic, preserves idempotent checkout, fails over safely, communicates status, restores capacity, and turns incident findings into tested controls.",
      phrase:
        "Resilience means the purchase path stays safe, degrades deliberately, and recovers within its objective during disruption.",
      aliases: ["system resilience", "operational resilience", "resiliência"],
      confusion:
        "Resilience covers absorption, adaptation, and recovery; Robustness usually emphasizes resisting variation without changing behavior.",
    }),
    "pt-BR": content({
      definition:
        "Resilience é a capacidade de um system absorver disruption, manter ou degradar com segurança o comportamento essencial, recuperar dentro dos objectives e adaptar-se ao aprendizado.",
      purpose:
        "Ela enquadra reliability entre prevention, response, graceful degradation, restoration e improvement, sem depender de um único mecanismo.",
      when: "Trate-a como propriedade end-to-end ao projetar critical user journeys entre software, infrastructure, dependencies, operators e demanda variável.",
      context:
        "Um regional cloud incident remove capacity e um payment provider fica lento no peak traffic, desafiando vários safeguards ao mesmo tempo.",
      application:
        "A platform isola workloads, descarta traffic opcional, preserva checkout idempotente, faz safe failover, comunica status, restaura capacity e testa melhorias.",
      phrase:
        "Resilience significa que a compra permanece segura, degrada deliberadamente e recupera dentro do objective durante disruption.",
      aliases: ["system resilience", "operational resilience", "resiliência"],
      confusion:
        "Resilience cobre absorção, adaptação e recovery; Robustness costuma enfatizar resistência à variação sem mudar comportamento.",
    }),
  },
  backpressure: {
    en: content({
      definition:
        "Backpressure is feedback from a slower consumer or constrained stage that causes upstream producers to reduce, pause, buffer within bounds, or reject work instead of sending it without limit.",
      purpose:
        "It prevents unbounded queues, memory exhaustion, runaway latency, and cascading overload by aligning admitted production with sustainable downstream capacity.",
      when: "Design it for streams, queues, pipelines, and service calls where production can outpace processing, defining demand signals, buffer limits, fairness, overflow behavior, and propagation.",
      context:
        "Telemetry producers emit events faster than a storage consumer can persist them, and an unlimited in-memory queue threatens every collector.",
      application:
        "The consumer grants bounded credits, producers stop when credits are exhausted, the buffer has explicit limits, low-priority events may be sampled, and lag triggers scaling alerts.",
      phrase:
        "Propagate Backpressure to the producers before the collector queue becomes the failure.",
      aliases: ["flow feedback", "demand control", "contrapressão"],
      confusion:
        "Backpressure communicates downstream capacity upstream; Throttling enforces a rate regardless of whether downstream feedback caused it.",
    }),
    "pt-BR": content({
      definition:
        "Backpressure é o feedback de um consumer lento ou stage limitado que faz upstream producers reduzirem, pausarem, bufferizarem com limite ou rejeitarem work.",
      purpose:
        "Ela evita unbounded queues, memory exhaustion, latency crescente e cascading overload ao alinhar produção admitida à downstream capacity sustentável.",
      when: "Projete-a em streams, queues, pipelines e service calls onde produção supera processamento, definindo demand signals, buffer limits, fairness, overflow e propagação.",
      context:
        "Telemetry producers emitem events mais rápido que o storage consumer persiste, e uma unlimited in-memory queue ameaça todos os collectors.",
      application:
        "O consumer concede bounded credits, producers param quando acabam, buffer tem limite, low-priority events podem ser sampled e lag dispara scaling alerts.",
      phrase:
        "Propague Backpressure aos producers antes que a collector queue se torne a falha.",
      aliases: ["flow feedback", "demand control", "contrapressão"],
      confusion:
        "Backpressure comunica downstream capacity ao upstream; Throttling impõe uma taxa mesmo sem esse feedback.",
    }),
  },
  throttling: {
    en: content({
      definition:
        "Throttling is the deliberate restriction of how quickly a client, workload, or operation may consume a resource, often by delaying, pacing, or rejecting excess work.",
      purpose:
        "It keeps usage within sustainable or contractual limits, protects shared capacity, and prevents a fast source from monopolizing a constrained resource.",
      when: "Apply it at ingress, per tenant, per dependency, or inside workers when consumption needs a controlled rate, defining units, scope, burst allowance, fairness, and client feedback.",
      context:
        "One data-import tenant sends thousands of write requests per second and would otherwise consume the database capacity needed by interactive users.",
      application:
        "A token bucket grants each tenant a sustained rate and bounded burst, queues briefly where useful, returns 429 with Retry-After when exhausted, and reports throttled demand.",
      phrase:
        "Throttling this tenant protects shared database capacity without stopping ordinary account traffic.",
      aliases: [
        "rate throttling",
        "request pacing",
        "estrangulamento de tráfego",
      ],
      confusion:
        "Throttling shapes an admitted consumption rate; Load Shedding discards work when the system cannot safely serve all offered load.",
    }),
    "pt-BR": content({
      definition:
        "Throttling é a restrição deliberada da velocidade com que um client, workload ou operation consome um resource, por delay, pacing ou rejeição do excesso.",
      purpose:
        "Ele mantém usage dentro de limites sustentáveis ou contratuais, protege shared capacity e impede uma source rápida de monopolizar o resource.",
      when: "Aplique-o no ingress, por tenant, dependency ou worker quando o consumo exigir taxa controlada, definindo unit, scope, burst, fairness e client feedback.",
      context:
        "Um tenant de data import envia milhares de writes por segundo e consumiria a database capacity necessária a interactive users.",
      application:
        "Um token bucket concede taxa contínua e burst limitado por tenant, enfileira brevemente, retorna 429 com Retry-After no excesso e mede throttled demand.",
      phrase:
        "O Throttling deste tenant protege database capacity sem interromper account traffic normal.",
      aliases: [
        "rate throttling",
        "request pacing",
        "estrangulamento de tráfego",
      ],
      confusion:
        "Throttling modela a taxa de consumo admitida; Load Shedding descarta work quando o system não consegue atender toda a load com segurança.",
    }),
  },
  "load-shedding": {
    en: content({
      definition:
        "Load Shedding is the intentional rejection, dropping, or simplification of selected work during overload so the system preserves essential service within safe operating limits.",
      purpose:
        "It trades lower-priority completeness for stability, preventing queue growth and resource saturation from causing total collapse and unbounded latency.",
      when: "Use it when offered load can exceed finite capacity, establishing overload signals, priority classes, admission rules, retry guidance, and safeguards for indispensable operations.",
      context:
        "During a traffic spike, image recommendations and analytics compete with login and checkout for the same application capacity.",
      application:
        "Admission control rejects optional recommendation work first, samples analytics, reserves concurrency for checkout, returns explicit overload responses, and stops shedding after recovery thresholds hold.",
      phrase:
        "Load Shedding removes optional work now so checkout remains responsive instead of every request timing out later.",
      aliases: ["overload shedding", "admission shedding", "descarte de carga"],
      confusion:
        "Load Shedding removes work during overload; Graceful Degradation continues serving through a deliberately reduced capability or quality level.",
    }),
    "pt-BR": content({
      definition:
        "Load Shedding é a rejeição, descarte ou simplificação intencional de work selecionado durante overload para preservar o service essencial dentro de safe operating limits.",
      purpose:
        "Ele troca completude de menor prioridade por stability, evitando que queue growth e saturation causem colapso total e latency sem limite.",
      when: "Use-o quando offered load puder superar capacity finita, definindo overload signals, priority classes, admission rules, retry guidance e proteção para operations indispensáveis.",
      context:
        "Num traffic spike, image recommendations e analytics competem com login e checkout pela mesma application capacity.",
      application:
        "Admission control rejeita recommendations opcionais, amostra analytics, reserva concurrency para checkout, devolve overload response e encerra shedding após recovery.",
      phrase:
        "Load Shedding remove work opcional agora para checkout responder, em vez de tudo terminar em timeout depois.",
      aliases: ["overload shedding", "admission shedding", "descarte de carga"],
      confusion:
        "Load Shedding remove work no overload; Graceful Degradation continua atendendo com capability ou quality deliberadamente reduzida.",
    }),
  },
  "graceful-degradation": {
    en: content({
      definition:
        "Graceful Degradation is the deliberate transition to a reduced but safe and useful service level when capacity, dependencies, or features are impaired.",
      purpose:
        "It preserves essential user outcomes and system stability while making unavailable, stale, simplified, or lower-quality behavior explicit.",
      when: "Design degradation modes for nonessential dependencies and constrained conditions, defining trigger criteria, minimum acceptable behavior, data-age limits, user communication, and restoration.",
      context:
        "The live delivery estimator is unavailable, but customers can still buy items using a conservative delivery window calculated from recent regional data.",
      application:
        "Checkout disables the live estimate, displays the bounded fallback window and status message, keeps pricing authoritative, emits a degradation event, and restores live estimates after verified recovery.",
      phrase:
        "Graceful Degradation keeps purchasing safe with a conservative delivery window, not a fabricated real-time estimate.",
      aliases: [
        "degraded mode",
        "reduced service mode",
        "degradação controlada",
      ],
      confusion:
        "Graceful Degradation defines a reduced operating mode; Fallback is one alternative result or path that may implement part of that mode.",
    }),
    "pt-BR": content({
      definition:
        "Graceful Degradation é a transição deliberada para um service level reduzido, porém seguro e útil, quando capacity, dependencies ou features estão degradadas.",
      purpose:
        "Ela preserva essential user outcomes e system stability, tornando explícito o comportamento unavailable, stale, simplificado ou de menor quality.",
      when: "Projete degradation modes para dependencies não essenciais e condições limitadas, definindo triggers, minimum behavior, data-age limits, comunicação e restoration.",
      context:
        "O live delivery estimator fica unavailable, mas customers ainda compram com uma delivery window conservadora baseada em regional data recente.",
      application:
        "Checkout desativa live estimate, exibe fallback window limitada e status, mantém pricing authoritative, emite degradation event e restaura após recovery verificado.",
      phrase:
        "Graceful Degradation mantém a compra segura com janela conservadora, não com estimativa real-time inventada.",
      aliases: [
        "degraded mode",
        "reduced service mode",
        "degradação controlada",
      ],
      confusion:
        "Graceful Degradation define um operating mode reduzido; Fallback é um resultado ou path alternativo que pode implementar parte dele.",
    }),
  },
  "graceful-shutdown": {
    en: content({
      definition:
        "Graceful Shutdown is the ordered retirement of a process or node in which it stops accepting new work, completes or safely transfers in-flight work, releases resources, and exits within a deadline.",
      purpose:
        "It prevents planned restarts and scaling events from abruptly terminating requests, corrupting state, losing messages, or leaving misleading membership records.",
      when: "Implement it for deployable services, consumers, schedulers, and stateful nodes, coordinating readiness removal, draining, leases, acknowledgements, cleanup, and a maximum termination time.",
      context:
        "A deployment sends a termination signal while an API instance handles uploads and a queue consumer owns unacknowledged jobs.",
      application:
        "The instance fails readiness, stops polling and accepting connections, finishes bounded requests, requeues unfinished jobs, flushes telemetry, closes resources, and force-exits only at the deadline.",
      phrase:
        "Graceful Shutdown removes this pod from routing before draining its in-flight requests.",
      aliases: [
        "orderly shutdown",
        "connection draining",
        "desligamento gracioso",
      ],
      confusion:
        "Graceful Shutdown retires an instance safely; Graceful Degradation keeps a running service useful with reduced capability.",
    }),
    "pt-BR": content({
      definition:
        "Graceful Shutdown é a retirada ordenada de um process ou node: ele para de aceitar new work, conclui ou transfere in-flight work, libera resources e encerra dentro de um deadline.",
      purpose:
        "Ele evita que restarts e scaling events interrompam requests, corrompam state, percam messages ou deixem membership records incorretos.",
      when: "Implemente-o em services, consumers, schedulers e stateful nodes, coordenando readiness removal, draining, leases, acknowledgements, cleanup e termination deadline.",
      context:
        "Um deployment envia termination signal enquanto uma API instance processa uploads e um queue consumer possui jobs não confirmados.",
      application:
        "A instance falha readiness, para polling e novas connections, conclui requests limitadas, reencaminha jobs, envia telemetry, fecha resources e força saída só no deadline.",
      phrase:
        "Graceful Shutdown remove este pod do routing antes de drenar suas in-flight requests.",
      aliases: [
        "orderly shutdown",
        "connection draining",
        "desligamento gracioso",
      ],
      confusion:
        "Graceful Shutdown retira uma instance com segurança; Graceful Degradation mantém um service em execução com capability reduzida.",
    }),
  },
  "service-discovery": {
    en: content({
      definition:
        "Service Discovery is the mechanism by which a client or intermediary obtains the current reachable instances and connection metadata for a logical service name.",
      purpose:
        "It decouples callers from changing addresses as instances start, stop, move, scale, or fail, enabling routing to healthy eligible endpoints.",
      when: "Use it in dynamic environments where service locations cannot be safely fixed in configuration, selecting client-side or server-side discovery and defining registration, health, freshness, and security.",
      context:
        "Order-service instances receive new ephemeral addresses during deployments, while checkout must call only instances in the correct environment and protocol version.",
      application:
        "Instances register identity and metadata, health checks remove unavailable endpoints, DNS or a registry answers the logical name with bounded caching, and a load balancer selects an eligible target.",
      phrase:
        "Service Discovery resolves the logical inventory service to its currently healthy instances; it does not hard-code pod addresses.",
      aliases: [
        "service registry lookup",
        "dynamic endpoint discovery",
        "descoberta de serviços",
      ],
      confusion:
        "Service Discovery finds eligible endpoints; Load Balancing chooses how requests are distributed among the endpoints it receives.",
    }),
    "pt-BR": content({
      definition:
        "Service Discovery é o mecanismo pelo qual um client ou intermediary obtém as instances alcançáveis e connection metadata atuais de um logical service name.",
      purpose:
        "Ele desacopla callers de addresses variáveis quando instances iniciam, param, movem, escalam ou falham, permitindo routing para healthy endpoints elegíveis.",
      when: "Use-o em environments dinâmicos onde locations não podem ficar fixas em config, escolhendo client-side ou server-side discovery e definindo registration, health, freshness e security.",
      context:
        "Order-service instances recebem ephemeral addresses em deployments, enquanto checkout chama somente instances do environment e protocol version corretos.",
      application:
        "Instances registram identity e metadata, health checks removem endpoints indisponíveis, DNS ou registry responde o logical name com cache limitado e load balancer seleciona target.",
      phrase:
        "Service Discovery resolve inventory service para instances saudáveis atuais; não fixa pod addresses.",
      aliases: [
        "service registry lookup",
        "dynamic endpoint discovery",
        "descoberta de serviços",
      ],
      confusion:
        "Service Discovery encontra endpoints elegíveis; Load Balancing decide como distribuir requests entre eles.",
    }),
  },
  "configuration-server": {
    en: content({
      definition:
        "Configuration Server is a networked service that stores, versions, and distributes runtime configuration to multiple applications from a controlled source.",
      purpose:
        "It centralizes environment-specific settings and change governance so fleets can receive consistent configuration without rebuilding every artifact.",
      when: "Use one when many services need coordinated dynamic settings, defining authentication, authorization, schema validation, rollout, caching, audit history, secret boundaries, and behavior during unavailability.",
      context:
        "Dozens of service instances need a revised fraud threshold, but deploying separately edited files would create drift and an unsafe partial rollout.",
      application:
        "The server validates a versioned change, exposes it only to authorized workloads, rolls it through canary cohorts, clients cache the last known good version, and operators can roll back atomically.",
      phrase:
        "Publish the validated configuration version through the Configuration Server and retain the last known good value for startup.",
      aliases: [
        "config server",
        "centralized configuration service",
        "servidor de configuração",
      ],
      confusion:
        "A Configuration Server distributes operational settings; a Secret Manager protects and controls sensitive credentials and keys, even when applications consume both together.",
    }),
    "pt-BR": content({
      definition:
        "Configuration Server é um networked service que armazena, versiona e distribui runtime configuration para várias applications a partir de uma controlled source.",
      purpose:
        "Ele centraliza environment settings e change governance para fleets receberem configuração consistente sem rebuild de cada artifact.",
      when: "Use-o quando muitos services precisarem de settings dinâmicos coordenados, definindo auth, schema validation, rollout, cache, audit, secret boundaries e indisponibilidade.",
      context:
        "Dezenas de service instances precisam de novo fraud threshold, mas files editados e implantados separadamente criariam drift e partial rollout inseguro.",
      application:
        "O server valida mudança versionada, expõe apenas a workloads autorizados, faz canary rollout, clients guardam last known good e operators executam atomic rollback.",
      phrase:
        "Publique a versão validada pelo Configuration Server e preserve o last known good para startup.",
      aliases: [
        "config server",
        "centralized configuration service",
        "servidor de configuração",
      ],
      confusion:
        "Configuration Server distribui operational settings; Secret Manager protege credentials e keys sensíveis, mesmo que a application consuma ambos.",
    }),
  },
  "distributed-cache": {
    en: content({
      definition:
        "Distributed Cache is a cache whose entries and capacity are partitioned or replicated across multiple networked nodes and shared by more than one application instance.",
      purpose:
        "It reduces repeated computation or origin reads at fleet scale while allowing cache capacity and availability to extend beyond one process.",
      when: "Use it for data safe to serve under an explicit freshness model, choosing keys, ownership, replication, eviction, expiration, invalidation, stampede protection, and behavior when cache nodes fail.",
      context:
        "Hundreds of API instances repeatedly read the same product summaries from a database, but updates must become visible within a defined two-minute window.",
      application:
        "Instances use cache-aside with namespaced keys and TTL, coalesce misses, add jitter to expiration, invalidate on product events, monitor hit rate and stale age, and fall back to bounded origin traffic.",
      phrase:
        "The Distributed Cache may serve this product summary for two minutes, but it is never the authority for inventory quantity.",
      aliases: ["shared cache cluster", "clustered cache", "cache distribuído"],
      confusion:
        "Distributed Cache stores disposable derived copies for faster access; a Distributed Database is an authoritative durable system of record.",
    }),
    "pt-BR": content({
      definition:
        "Distributed Cache é um cache cujas entries e capacity são particionadas ou replicadas entre networked nodes e compartilhadas por várias application instances.",
      purpose:
        "Ele reduz recomputation e origin reads em fleet scale, ampliando cache capacity e availability além de um process.",
      when: "Use-o para data segura sob freshness model explícito, escolhendo keys, ownership, replication, eviction, expiration, invalidation, stampede protection e node failure behavior.",
      context:
        "Centenas de API instances leem os mesmos product summaries do database, mas updates precisam aparecer em até dois minutos.",
      application:
        "Instances usam cache-aside com namespaced keys e TTL, agrupam misses, adicionam expiration jitter, invalidam por events e limitam fallback traffic ao origin.",
      phrase:
        "O Distributed Cache pode servir este product summary por dois minutos, mas nunca é authority do inventory quantity.",
      aliases: ["shared cache cluster", "clustered cache", "cache distribuído"],
      confusion:
        "Distributed Cache guarda derived copies descartáveis para acesso rápido; Distributed Database é authoritative durable system of record.",
    }),
  },
  "distributed-transaction": {
    en: content({
      definition:
        "Distributed Transaction is one logical transaction whose outcome depends on coordinated state changes across multiple independent resource managers or services.",
      purpose:
        "It provides or approximates a defined cross-resource correctness rule when no single local transaction can cover every participating change.",
      when: "Model it only after stating the business invariant, participants, failure semantics, availability cost, recovery ownership, and whether atomic commit, a saga, reservation, or redesign is appropriate.",
      context:
        "Opening a subscription changes billing, entitlement, and quota systems, and partial completion must be either prevented or repaired according to explicit business rules.",
      application:
        "The design chooses a durable saga, assigns an idempotent local transaction to each participant, records progress, retries transient failures, compensates completed steps, and exposes unresolved cases for reconciliation.",
      phrase:
        "Treat this Distributed Transaction as a durable workflow with stated invariants, not as an invisible database transaction across services.",
      aliases: [
        "cross-resource transaction",
        "global transaction",
        "transação distribuída",
      ],
      confusion:
        "Distributed Transaction is the cross-resource unit of work; Two-Phase Commit is one atomic commit protocol that can coordinate such a transaction.",
    }),
    "pt-BR": content({
      definition:
        "Distributed Transaction é uma logical transaction cujo outcome depende de state changes coordenadas em vários resource managers ou services independentes.",
      purpose:
        "Ela fornece ou aproxima uma correctness rule entre resources quando nenhuma local transaction cobre todas as mudanças participantes.",
      when: "Modele-a após declarar business invariant, participants, failure semantics, availability cost, recovery ownership e se atomic commit, saga, reservation ou redesign é adequado.",
      context:
        "Abrir uma subscription altera billing, entitlement e quota systems; partial completion deve ser impedida ou reparada conforme business rules.",
      application:
        "O design escolhe durable saga, atribui local transaction idempotente por participant, registra progress, repete transient failures, compensa steps e reconcilia casos pendentes.",
      phrase:
        "Trate esta Distributed Transaction como durable workflow com invariants, não como database transaction invisível entre services.",
      aliases: [
        "cross-resource transaction",
        "global transaction",
        "transação distribuída",
      ],
      confusion:
        "Distributed Transaction é a cross-resource unit of work; Two-Phase Commit é um atomic commit protocol capaz de coordená-la.",
    }),
  },
  "two-phase-commit": {
    en: content({
      definition:
        "Two-Phase Commit (2PC) is an atomic commitment protocol in which a coordinator first asks every participant to prepare durably, then instructs all participants to commit only if every vote succeeds, otherwise to abort.",
      purpose:
        "It makes multiple transactional resources reach one all-or-nothing decision despite ordinary process failures, using durable records and recovery procedures.",
      when: "Use it only when participants support the protocol and atomicity outweighs coordination latency, reduced availability, lock retention, coordinator recovery complexity, and operational coupling.",
      context:
        "A transaction manager must atomically update two XA-capable databases, and neither resource may expose its change unless both can commit.",
      application:
        "The coordinator records the transaction, gathers durable prepared votes, writes the final decision, sends commit or abort, retries delivery after crashes, and resolves in-doubt participants from the log.",
      phrase:
        "In Two-Phase Commit, a prepared participant keeps its promise until it learns the coordinator's durable final decision.",
      aliases: ["2PC", "atomic commit protocol", "commit em duas fases"],
      confusion:
        "Two-Phase Commit coordinates atomic transaction outcome; Two-Phase Locking is a concurrency-control rule for acquiring and releasing locks.",
    }),
    "pt-BR": content({
      definition:
        "Two-Phase Commit (2PC) é um atomic commitment protocol em que um coordinator pede prepare durável a cada participant e manda todos commitarem somente se todos votarem sucesso; caso contrário, aborta.",
      purpose:
        "Ele faz vários transactional resources chegarem à mesma all-or-nothing decision diante de process failures comuns, usando durable records e recovery.",
      when: "Use-o somente quando participants suportarem o protocol e atomicity compensar coordination latency, menor availability, lock retention, coordinator recovery e coupling.",
      context:
        "Um transaction manager atualiza atomicamente dois databases compatíveis com XA, e nenhum pode expor change se ambos não puderem commit.",
      application:
        "O coordinator registra transaction, coleta prepared votes duráveis, grava final decision, envia commit ou abort, repete delivery após crashes e resolve in-doubt participants.",
      phrase:
        "No Two-Phase Commit, um prepared participant mantém sua promessa até conhecer a durable final decision do coordinator.",
      aliases: ["2PC", "atomic commit protocol", "commit em duas fases"],
      confusion:
        "Two-Phase Commit coordena atomic transaction outcome; Two-Phase Locking é regra de concurrency control para adquirir e liberar locks.",
    }),
  },
  "compensating-transaction": {
    en: content({
      definition:
        "Compensating Transaction is a new business operation that semantically counteracts the effect of an already committed operation when direct rollback is no longer possible.",
      purpose:
        "It enables recovery in long-running or cross-service workflows by restoring an acceptable business state rather than pretending committed history can be erased.",
      when: "Define it for saga steps that may need reversal, specifying compensability, original identifiers, idempotency, ordering, irreversible effects, audit evidence, and manual escalation.",
      context:
        "A travel workflow has already charged a card and reserved a hotel when the flight reservation permanently fails.",
      application:
        "The saga cancels the hotel under its reservation policy, issues a linked refund rather than deleting the charge, records both outcomes, retries safely, and sends unresolved cases to operations.",
      phrase:
        "The Compensating Transaction issues an auditable refund; it does not roll back the payment provider's committed charge.",
      aliases: [
        "compensation action",
        "semantic rollback",
        "transação compensatória",
      ],
      confusion:
        "A Compensating Transaction creates a corrective forward action; database rollback removes uncommitted changes within the original local transaction.",
    }),
    "pt-BR": content({
      definition:
        "Compensating Transaction é uma nova business operation que neutraliza semanticamente o efeito de uma operation já commitada quando direct rollback não é mais possível.",
      purpose:
        "Ela permite recovery em long-running ou cross-service workflows, restaurando business state aceitável sem fingir que committed history pode ser apagada.",
      when: "Defina-a para saga steps reversíveis, especificando compensability, original IDs, idempotency, ordering, irreversible effects, audit evidence e manual escalation.",
      context:
        "Um travel workflow já cobrou card e reservou hotel quando a flight reservation falha permanentemente.",
      application:
        "A saga cancela hotel conforme policy, emite refund vinculado em vez de apagar charge, registra outcomes, repete com segurança e escala casos pendentes.",
      phrase:
        "A Compensating Transaction emite refund auditável; ela não desfaz o committed charge do payment provider.",
      aliases: [
        "compensation action",
        "semantic rollback",
        "transação compensatória",
      ],
      confusion:
        "Compensating Transaction cria uma corrective forward action; database rollback remove uncommitted changes na local transaction original.",
    }),
  },
  "clock-skew": {
    en: content({
      definition:
        "Clock Skew is the difference between the readings of clocks on separate machines at the same real instant, caused by drift, synchronization error, or adjustment.",
      purpose:
        "Recognizing it prevents distributed logic from treating wall-clock timestamps as a perfectly shared order or exact measure of elapsed time.",
      when: "Account for it in leases, token validity, event ordering, audits, cache expiry, and cross-node latency calculations, defining tolerated error and using monotonic or logical clocks where appropriate.",
      context:
        "A server whose clock is forty seconds ahead rejects a newly issued token as expired and records an event before the request that caused it.",
      application:
        "Hosts synchronize with monitored time sources, alerts track offset, security validation has an explicit narrow tolerance, durations use monotonic clocks, and causality uses sequence or logical metadata.",
      phrase:
        "Do not infer event causality from these wall-clock timestamps until Clock Skew and uncertainty are considered.",
      aliases: ["clock offset", "time skew", "desvio de relógio"],
      confusion:
        "Clock Skew is the offset between clocks at an instant; Clock Drift is the difference in their rates that causes offset to change over time.",
    }),
    "pt-BR": content({
      definition:
        "Clock Skew é a diferença entre as leituras dos clocks de machines distintas no mesmo instante real, causada por drift, synchronization error ou ajuste.",
      purpose:
        "Reconhecê-lo evita que distributed logic trate wall-clock timestamps como ordem compartilhada perfeita ou medida exata de elapsed time.",
      when: "Considere-o em leases, token validity, event ordering, audits, cache expiry e cross-node latency, definindo tolerated error e usando monotonic ou logical clocks quando adequado.",
      context:
        "Um server com clock quarenta segundos adiantado rejeita token recém-emitido como expirado e registra event antes da request causadora.",
      application:
        "Hosts sincronizam com time sources monitoradas, offset gera alerts, security validation usa tolerância estreita, durations usam monotonic clock e causality usa sequence metadata.",
      phrase:
        "Não deduza causality destes wall-clock timestamps antes de considerar Clock Skew e uncertainty.",
      aliases: ["clock offset", "time skew", "desvio de relógio"],
      confusion:
        "Clock Skew é o offset entre clocks em um instante; Clock Drift é a diferença de ritmo que altera esse offset ao longo do tempo.",
    }),
  },
  "race-condition": {
    en: content({
      definition:
        "Race Condition is a correctness defect in which an outcome depends on the uncontrolled relative timing or interleaving of concurrent operations that access related state.",
      purpose:
        "The term identifies timing-sensitive behavior that may disappear during debugging yet produce lost updates, invalid transitions, duplicate effects, or data corruption.",
      when: "Investigate it wherever multiple threads, processes, requests, jobs, or services read and modify shared or logically related state without sufficient atomicity and ordering.",
      context:
        "Two checkout requests read the last inventory unit as available and both decrement it, creating two confirmed orders for one item.",
      application:
        "The database performs one conditional atomic update, rejects the loser, preserves an idempotency key, and a concurrency test forces the competing interleavings.",
      phrase:
        "This Race Condition is a check-then-act sequence; make the inventory condition and update one atomic decision.",
      aliases: ["timing race", "data race outcome", "condição de corrida"],
      confusion:
        "A Race Condition is any timing-dependent correctness failure; a Data Race specifically involves unsynchronized conflicting memory accesses under a language memory model.",
    }),
    "pt-BR": content({
      definition:
        "Race Condition é um correctness defect cujo outcome depende do timing relativo ou interleaving não controlado de concurrent operations sobre state relacionado.",
      purpose:
        "O termo identifica behavior sensível a timing que some no debug, mas causa lost updates, invalid transitions, duplicate effects ou data corruption.",
      when: "Investigue-a quando threads, processes, requests, jobs ou services leem e alteram shared state sem atomicity e ordering suficientes.",
      context:
        "Duas checkout requests leem a última inventory unit como disponível e ambas decrementam, confirmando dois orders para um item.",
      application:
        "O database executa conditional atomic update, rejeita o perdedor, preserva idempotency key e um concurrency test força os interleavings concorrentes.",
      phrase:
        "Esta Race Condition é check-then-act; transforme condition e inventory update em uma atomic decision.",
      aliases: ["timing race", "data race outcome", "condição de corrida"],
      confusion:
        "Race Condition é qualquer correctness failure dependente de timing; Data Race envolve conflicting memory accesses sem synchronization sob um memory model.",
    }),
  },
  concurrency: {
    en: content({
      definition:
        "Concurrency is the composition of multiple tasks whose lifetimes overlap and whose execution can be interleaved while they independently make progress.",
      purpose:
        "It lets systems remain responsive and utilize waiting periods, but requires explicit coordination around shared state, ordering, cancellation, errors, and resource limits.",
      when: "Use concurrent structure for independent or partially independent work such as serving many requests or overlapping I/O, after defining ownership and safe interaction among tasks.",
      context:
        "A web server manages thousands of connections that alternate between short CPU work and waiting for databases or clients.",
      application:
        "The runtime schedules bounded tasks, each request owns its mutable state, shared resources use safe synchronization, cancellation propagates, and queues expose overload rather than growing forever.",
      phrase:
        "Concurrency lets these requests overlap while waiting; it does not guarantee that their CPU instructions run simultaneously.",
      aliases: ["concurrent execution", "task interleaving", "concorrência"],
      confusion:
        "Concurrency concerns overlapping independently progressing tasks; Parallelism means work actually executes at the same time on multiple execution units.",
    }),
    "pt-BR": content({
      definition:
        "Concurrency é a composição de múltiplas tasks cujos lifetimes se sobrepõem e cuja execution pode ser interleaved enquanto cada uma progride.",
      purpose:
        "Ela mantém systems responsivos e aproveita períodos de espera, mas exige coordination explícita para shared state, ordering, cancellation, errors e resource limits.",
      when: "Use concurrent structure para work independente ou parcialmente independente, como muitas requests ou I/O sobreposto, após definir ownership e interação segura.",
      context:
        "Um web server administra milhares de connections que alternam CPU work curto com espera por databases ou clients.",
      application:
        "O runtime agenda bounded tasks, cada request possui mutable state, shared resources usam synchronization segura, cancellation propaga e queues expõem overload.",
      phrase:
        "Concurrency permite que requests se sobreponham na espera; não garante CPU instructions simultâneas.",
      aliases: ["concurrent execution", "task interleaving", "concorrência"],
      confusion:
        "Concurrency trata tasks sobrepostas com progresso independente; Parallelism significa execução realmente simultânea em várias execution units.",
    }),
  },
  parallelism: {
    en: content({
      definition:
        "Parallelism is the simultaneous execution of multiple computations on distinct processing units to reduce completion time or increase throughput.",
      purpose:
        "It uses available cores, processors, or machines to process divisible work faster, subject to coordination overhead and the sequential portion of the algorithm.",
      when: "Apply it when work can be safely partitioned and is large enough to outweigh scheduling, communication, memory contention, synchronization, and result-merging costs.",
      context:
        "A media pipeline must transcode thousands of independent video segments before assembling them into one stream.",
      application:
        "The scheduler partitions segments across workers, bounds parallel tasks to CPU and memory capacity, isolates failed segments, preserves output ordering metadata, and merges results after completion.",
      phrase:
        "Parallelism speeds the independent segment transforms, while the final ordered assembly remains a coordination step.",
      aliases: [
        "parallel execution",
        "simultaneous computation",
        "paralelismo",
      ],
      confusion:
        "Parallelism requires simultaneous execution; Concurrency can interleave overlapping tasks on a single processing unit.",
    }),
    "pt-BR": content({
      definition:
        "Parallelism é a execução simultânea de múltiplas computations em processing units distintas para reduzir completion time ou aumentar throughput.",
      purpose:
        "Ele usa cores, processors ou machines disponíveis para processar work divisível mais rápido, limitado por coordination overhead e pela parte sequencial do algorithm.",
      when: "Aplique-o quando work puder ser particionado com segurança e superar custos de scheduling, communication, memory contention, synchronization e merge.",
      context:
        "Uma media pipeline transcodifica milhares de video segments independentes antes de reuni-los em um stream.",
      application:
        "O scheduler distribui segments entre workers, limita parallel tasks por CPU e memory, isola failures, preserva ordering metadata e reúne results.",
      phrase:
        "Parallelism acelera transforms independentes; a ordered assembly final continua sendo coordination step.",
      aliases: [
        "parallel execution",
        "simultaneous computation",
        "paralelismo",
      ],
      confusion:
        "Parallelism exige execução simultânea; Concurrency pode intercalar tasks sobrepostas em uma única processing unit.",
    }),
  },
  mutex: {
    en: content({
      definition:
        "Mutex, short for mutual exclusion, is a synchronization primitive that allows at most one owner at a time to enter a protected critical section or access a protected resource.",
      purpose:
        "It serializes conflicting access so shared mutable state can preserve invariants that would be broken by concurrent modification.",
      when: "Use it around the smallest coherent in-process critical section that cannot be made immutable, thread-confined, atomic, or safely lock-free, with a consistent acquisition order.",
      context:
        "Two threads update a shared account summary whose balance and transaction count must change together as one invariant.",
      application:
        "Both fields are changed while holding the same mutex, the lock is released through structured cleanup, no blocking network call occurs inside, and contention and deadlock risk are measured.",
      phrase:
        "Hold this Mutex only while updating the paired fields; perform the remote notification after releasing it.",
      aliases: ["mutual exclusion lock", "exclusive lock", "exclusão mútua"],
      confusion:
        "A Mutex has exclusive single ownership; a Semaphore represents a count of permits and may allow several holders concurrently.",
    }),
    "pt-BR": content({
      definition:
        "Mutex, abreviação de mutual exclusion, é uma synchronization primitive que permite no máximo um owner por vez em uma critical section ou protected resource.",
      purpose:
        "Ele serializa conflicting access para shared mutable state preservar invariants que concurrent modification quebraria.",
      when: "Use-o na menor in-process critical section coerente que não possa ser immutable, thread-confined, atomic ou lock-free, com acquisition order consistente.",
      context:
        "Duas threads atualizam um shared account summary cujo balance e transaction count precisam mudar juntos.",
      application:
        "Ambos os fields mudam sob o mesmo mutex, structured cleanup libera o lock, nenhuma blocking network call ocorre dentro e contention e deadlock são medidos.",
      phrase:
        "Mantenha este Mutex somente durante a atualização dos fields; envie a remote notification depois de liberá-lo.",
      aliases: ["mutual exclusion lock", "exclusive lock", "exclusão mútua"],
      confusion:
        "Mutex possui exclusive single ownership; Semaphore representa uma contagem de permits e pode aceitar vários holders.",
    }),
  },
  semaphore: {
    en: content({
      definition:
        "Semaphore is a synchronization primitive that maintains a count of permits; an operation must acquire a permit before proceeding and releases one when its bounded use is complete.",
      purpose:
        "It limits concurrent access to finite capacity or coordinates task progress without requiring exclusive ownership by a single holder.",
      when: "Use it to bound concurrent database calls, worker slots, buffers, or other identical capacity units, defining permit count, waiting policy, cancellation, fairness, and guaranteed release.",
      context:
        "A service can process at most twenty expensive image conversions at once before memory pressure destabilizes the host.",
      application:
        "A twenty-permit semaphore gates conversion start, acquisition observes the request deadline, cleanup always releases the permit, and queue depth signals scaling or rejection needs.",
      phrase:
        "Acquire a Semaphore permit before allocating conversion memory and release it in guaranteed cleanup.",
      aliases: ["counting semaphore", "permit gate", "semáforo"],
      confusion:
        "A Semaphore limits concurrency through multiple permits and generally has no exclusive owner; a Mutex protects one critical section with one owner.",
    }),
    "pt-BR": content({
      definition:
        "Semaphore é uma synchronization primitive que mantém uma contagem de permits; uma operation adquire um antes de prosseguir e o devolve ao concluir o uso limitado.",
      purpose:
        "Ele limita concurrent access a capacity finita ou coordena task progress sem exigir exclusive ownership de um único holder.",
      when: "Use-o para limitar concurrent database calls, worker slots, buffers ou capacity units idênticas, definindo permit count, waiting policy, cancellation, fairness e release garantido.",
      context:
        "Um service processa no máximo vinte image conversions caras ao mesmo tempo antes de memory pressure desestabilizar o host.",
      application:
        "Um semaphore de vinte permits controla início, acquisition respeita request deadline, cleanup sempre libera permit e queue depth orienta scaling ou rejection.",
      phrase:
        "Adquira um permit do Semaphore antes de alocar conversion memory e libere-o em guaranteed cleanup.",
      aliases: ["counting semaphore", "permit gate", "semáforo"],
      confusion:
        "Semaphore limita concurrency com vários permits e em geral não tem exclusive owner; Mutex protege uma critical section com um owner.",
    }),
  },
};
