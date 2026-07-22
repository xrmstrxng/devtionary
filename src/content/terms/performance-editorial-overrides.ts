import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const performanceEditorialOverrides: Record<string, EditorialPair> = {
  performance: {
    en: content({
      definition:
        "Performance is the observed efficiency and timeliness with which a system completes work under a specified workload, environment, resource allocation, and correctness requirement.",
      purpose:
        "It connects user experience and capacity cost to measurable behavior such as latency, throughput, utilization, scalability, and stability rather than vague impressions of speed.",
      when: "Evaluate it against explicit objectives whenever designing a critical path, planning capacity, comparing implementations, investigating slowness, or verifying a release under representative load.",
      context:
        "A search page feels slower after a release, but the team needs to distinguish browser rendering, API latency, database time, traffic mix, and cache behavior.",
      application:
        "The team defines percentile latency and throughput objectives, reproduces production-like workload, instruments each stage, profiles the bottleneck, changes one constraint, and compares statistically meaningful results.",
      phrase:
        "Performance improved only if the representative workload meets its latency objective without sacrificing correctness or unsustainably increasing resources.",
      aliases: ["system performance", "runtime performance", "desempenho"],
      confusion:
        "Performance describes measured runtime behavior under stated conditions; Optimization is the change process intended to improve that behavior.",
    }),
    "pt-BR": content({
      definition:
        "Performance é a eficiência e rapidez observadas com que um system conclui work sob workload, environment, resource allocation e correctness requirements especificados.",
      purpose:
        "Ela conecta user experience e capacity cost a behavior mensurável como latency, throughput, utilization, scalability e stability, não a impressão vaga de velocidade.",
      when: "Avalie-a contra objectives explícitos ao projetar critical path, planejar capacity, comparar implementations, investigar lentidão ou verificar release sob load representativa.",
      context:
        "Uma search page parece mais lenta após release, mas o time precisa separar browser rendering, API latency, database time, traffic mix e cache behavior.",
      application:
        "O time define percentile latency e throughput objectives, reproduz workload semelhante à produção, instrumenta stages, perfila bottleneck, altera uma constraint e compara resultados.",
      phrase:
        "Performance só melhorou se o workload representativo cumprir latency objective sem perder correctness nem elevar resources de forma insustentável.",
      aliases: ["system performance", "runtime performance", "desempenho"],
      confusion:
        "Performance descreve runtime behavior medido sob condições declaradas; Optimization é o processo de mudança para melhorá-lo.",
    }),
  },
  latency: {
    en: content({
      definition:
        "Latency is the elapsed delay from a defined starting event until a defined response, completion, or observation point for one unit of work.",
      purpose:
        "It quantifies how long users or downstream systems wait and reveals tail behavior that averages can hide.",
      when: "Measure it for interactive requests, messages, jobs, storage operations, and pipeline stages, naming the boundaries and reporting distributions and percentiles under a stated workload.",
      context:
        "Most checkout requests finish in 180 ms, but a small group takes more than four seconds and drives abandonment during peak traffic.",
      application:
        "Tracing separates queue, network, application, database, and provider spans; dashboards compare p50, p95, p99, errors, and load against the service-level objective.",
      phrase:
        "Median Latency is healthy, but p99 exceeds the checkout objective because requests wait for a saturated connection pool.",
      aliases: ["delay", "request latency", "latência"],
      confusion:
        "Latency measures delay for individual work; Throughput measures how much work completes per unit of time.",
    }),
    "pt-BR": content({
      definition:
        "Latency é o elapsed delay entre um starting event definido e uma response, completion ou observation point definida para uma unidade de work.",
      purpose:
        "Ela quantifica quanto users ou downstream systems esperam e revela tail behavior que averages escondem.",
      when: "Meça-a para interactive requests, messages, jobs, storage operations e pipeline stages, nomeando boundaries e reportando distributions e percentiles sob workload declarado.",
      context:
        "A maioria das checkout requests termina em 180 ms, mas um pequeno grupo leva mais de quatro segundos e causa abandonment no peak traffic.",
      application:
        "Tracing separa queue, network, application, database e provider spans; dashboards comparam p50, p95, p99, errors e load com o SLO.",
      phrase:
        "A median Latency está saudável, mas p99 excede o checkout objective porque requests esperam por connection pool saturado.",
      aliases: ["delay", "request latency", "latência"],
      confusion:
        "Latency mede o delay de work individual; Throughput mede quanto work termina por unidade de tempo.",
    }),
  },
  throughput: {
    en: content({
      definition:
        "Throughput is the amount of valid work a system completes per unit of time under stated workload and resource conditions.",
      purpose:
        "It shows processing capacity and helps determine whether a service, pipeline, or resource can sustain expected demand while meeting latency and correctness objectives.",
      when: "Measure it during capacity planning, load tests, scaling analysis, and bottleneck investigation, using a meaningful unit such as successful requests, records, bytes, or transactions per second.",
      context:
        "An ingestion pipeline receives 50,000 events per second but persists only 38,000, causing backlog to grow despite acceptable latency for the events already processed.",
      application:
        "The team counts successfully persisted events, graphs input and output rates with lag and utilization, identifies the storage write ceiling, partitions work, and retests without counting failed attempts.",
      phrase:
        "Required Throughput is fifty thousand persisted events per second, not fifty thousand requests accepted into a growing queue.",
      aliases: ["processing rate", "completion rate", "vazão"],
      confusion:
        "Throughput counts completed work over time; Concurrency counts work in progress at the same time and may or may not increase completion rate.",
    }),
    "pt-BR": content({
      definition:
        "Throughput é a quantidade de work válido que um system conclui por unidade de tempo sob workload e resource conditions declarados.",
      purpose:
        "Ele mostra processing capacity e ajuda a decidir se service, pipeline ou resource sustenta a demanda cumprindo latency e correctness objectives.",
      when: "Meça-o em capacity planning, load tests, scaling analysis e bottleneck investigation, usando unidade significativa como successful requests, records, bytes ou transactions por segundo.",
      context:
        "Uma ingestion pipeline recebe 50 mil events por segundo, mas persiste 38 mil, fazendo backlog crescer apesar da boa latency dos events processados.",
      application:
        "O time conta events persistidos, compara input e output rates com lag e utilization, encontra o storage ceiling, particiona work e retesta sem contar failed attempts.",
      phrase:
        "O Throughput exigido é cinquenta mil events persistidos por segundo, não requests aceitas em uma queue crescente.",
      aliases: ["processing rate", "completion rate", "vazão"],
      confusion:
        "Throughput conta work concluído no tempo; Concurrency conta work simultaneamente em progresso e pode ou não aumentar essa taxa.",
    }),
  },
  "response-time": {
    en: content({
      definition:
        "Response Time is the elapsed time from when a requester sends or initiates an operation until it receives the defined response boundary, including waiting and processing along that path.",
      purpose:
        "It expresses the delay visible at a particular client boundary and supports service objectives tied to an actual request experience.",
      when: "Measure it end to end for synchronous interactions, stating whether it ends at first byte, complete payload, rendered result, or another response event and segmenting by operation and outcome.",
      context:
        "The API reports 120 ms of server processing, while mobile users observe 900 ms because connection setup, network transfer, and payload download dominate.",
      application:
        "Client telemetry measures request start through complete response, server tracing breaks down internal work, and the dashboard correlates both distributions by region, payload size, status, and release.",
      phrase:
        "Server duration is 120 ms, but user-visible Response Time includes the mobile network and full payload transfer.",
      aliases: [
        "request response time",
        "end-to-end response duration",
        "tempo de resposta",
      ],
      confusion:
        "Response Time is latency bounded by a request and its defined response; Latency is the broader delay concept and can describe any stage or event transition.",
    }),
    "pt-BR": content({
      definition:
        "Response Time é o elapsed time desde quando um requester inicia uma operation até receber o response boundary definido, incluindo espera e processing no path.",
      purpose:
        "Ele expressa o delay visível em um client boundary específico e sustenta service objectives ligados à experiência real da request.",
      when: "Meça-o end-to-end em synchronous interactions, declarando se termina no first byte, payload completo, rendered result ou outro event e segmentando operation e outcome.",
      context:
        "A API reporta 120 ms de server processing, enquanto mobile users observam 900 ms por connection setup, network transfer e payload download.",
      application:
        "Client telemetry mede do request start à response completa, server tracing detalha internal work e dashboard correlaciona distributions por region, payload, status e release.",
      phrase:
        "Server duration é 120 ms, mas o Response Time visível inclui mobile network e transferência do payload completo.",
      aliases: [
        "request response time",
        "end-to-end response duration",
        "tempo de resposta",
      ],
      confusion:
        "Response Time é latency delimitada por request e response; Latency é conceito mais amplo para qualquer stage ou event transition.",
    }),
  },
  benchmark: {
    en: content({
      definition:
        "Benchmark is a repeatable measurement procedure that runs a defined workload in controlled conditions to quantify or compare performance characteristics.",
      purpose:
        "It provides evidence for baselines, regressions, technology choices, and optimization results when the tested workload represents the intended question.",
      when: "Create one before comparing versions, algorithms, libraries, hardware, or configurations, controlling setup, warm-up, data, resource limits, repetitions, metrics, and statistical variation.",
      context:
        "A team must choose between two serialization libraries for production messages that vary widely in size and structure.",
      application:
        "The harness uses representative payload groups, warms the runtime, isolates machines, records throughput, percentile latency, allocations and CPU, repeats randomized trials, and publishes raw results and environment details.",
      phrase:
        "This Benchmark supports the serializer decision only for the payload distributions and hardware it actually tested.",
      aliases: [
        "performance benchmark",
        "measurement baseline",
        "teste comparativo",
      ],
      confusion:
        "A Benchmark measures a defined workload for comparison; Load Testing evaluates system behavior under expected or varying multi-user demand.",
    }),
    "pt-BR": content({
      definition:
        "Benchmark é um measurement procedure repetível que executa workload definido em condições controladas para quantificar ou comparar performance characteristics.",
      purpose:
        "Ele fornece evidence para baselines, regressions, technology choices e optimization results quando o workload representa a pergunta pretendida.",
      when: "Crie-o ao comparar versions, algorithms, libraries, hardware ou configs, controlando setup, warm-up, data, resource limits, repetitions, metrics e statistical variation.",
      context:
        "Um time escolhe entre duas serialization libraries para production messages que variam muito em tamanho e estrutura.",
      application:
        "O harness usa payload groups representativos, aquece runtime, isola machines, mede throughput, percentile latency, allocations e CPU, repete trials e publica raw results.",
      phrase:
        "Este Benchmark sustenta a escolha apenas para payload distributions e hardware realmente testados.",
      aliases: [
        "performance benchmark",
        "measurement baseline",
        "teste comparativo",
      ],
      confusion:
        "Benchmark mede workload definido para comparação; Load Testing avalia system behavior sob demanda multi-user esperada ou variável.",
    }),
  },
  profiling: {
    en: content({
      definition:
        "Profiling is the collection and analysis of runtime measurements that attribute resource use or elapsed time to code paths, operations, allocations, locks, or system components.",
      purpose:
        "It replaces performance guesses with evidence about where execution actually spends CPU, memory, I/O wait, or contention under a relevant workload.",
      when: "Profile after reproducing a measurable performance problem or validating a hot path, choosing sampling or instrumentation suited to the runtime and limiting observer overhead.",
      context:
        "An API consumes twice the expected CPU after a release, but request traces do not identify which internal function caused the increase.",
      application:
        "The team captures comparable CPU profiles under steady representative load, reads the flame graph, links a new serialization path to most samples, changes it, and verifies system metrics and output correctness.",
      phrase:
        "Profiling shows that serialization, not the database, owns most on-CPU time in this workload.",
      aliases: ["runtime profiling", "performance profiling", "perfilamento"],
      confusion:
        "Profiling attributes runtime cost to implementation behavior; Tracing follows request causality and timing across operations and services.",
    }),
    "pt-BR": content({
      definition:
        "Profiling é a coleta e análise de runtime measurements que atribuem resource use ou elapsed time a code paths, operations, allocations, locks ou system components.",
      purpose:
        "Ele substitui performance guesses por evidence de onde execution realmente gasta CPU, memory, I/O wait ou contention sob workload relevante.",
      when: "Faça profile após reproduzir problema mensurável ou validar hot path, escolhendo sampling ou instrumentation adequada ao runtime e limitando observer overhead.",
      context:
        "Uma API consome o dobro de CPU após release, mas request traces não identificam qual internal function causou o aumento.",
      application:
        "O time captura CPU profiles comparáveis sob load estável, lê flame graph, relaciona nova serialization path à maioria das samples, altera e verifica metrics e correctness.",
      phrase:
        "O Profiling mostra que serialization, não database, concentra o on-CPU time deste workload.",
      aliases: ["runtime profiling", "performance profiling", "perfilamento"],
      confusion:
        "Profiling atribui runtime cost ao implementation behavior; Tracing acompanha causality e timing de requests entre operations e services.",
    }),
  },
  optimization: {
    en: content({
      definition:
        "Optimization is a measured change to an implementation, configuration, algorithm, data layout, or architecture intended to improve a defined objective under explicit constraints.",
      purpose:
        "It improves user experience or resource efficiency while exposing tradeoffs among latency, throughput, memory, cost, complexity, maintainability, and correctness.",
      when: "Optimize after establishing a representative baseline and locating a material bottleneck, prioritizing changes that matter to an objective and can be verified against regressions.",
      context:
        "Product search misses its p95 latency objective because every request sorts a large candidate set that changes infrequently.",
      application:
        "The team profiles the path, precomputes a bounded index, measures before and after across representative queries, verifies result equivalence, and monitors memory and update freshness.",
      phrase:
        "This Optimization cuts p95 search latency by precomputing the stable ranking, with an explicit freshness and memory cost.",
      aliases: ["performance optimization", "runtime tuning", "otimização"],
      confusion:
        "Optimization changes the system to improve an objective; Profiling measures where runtime resources are currently spent.",
    }),
    "pt-BR": content({
      definition:
        "Optimization é uma mudança medida em implementation, configuration, algorithm, data layout ou architecture para melhorar um objective definido sob constraints explícitas.",
      purpose:
        "Ela melhora user experience ou resource efficiency, expondo tradeoffs entre latency, throughput, memory, cost, complexity, maintainability e correctness.",
      when: "Otimize após estabelecer baseline representativa e localizar bottleneck material, priorizando mudanças relevantes ao objective e verificáveis contra regressions.",
      context:
        "Product search viola p95 latency objective porque cada request ordena um grande candidate set que muda raramente.",
      application:
        "O time perfila o path, pré-computa bounded index, mede antes e depois com queries reais, verifica result equivalence e monitora memory e freshness.",
      phrase:
        "Esta Optimization reduz p95 ao pré-computar ranking estável, com custo explícito de freshness e memory.",
      aliases: ["performance optimization", "runtime tuning", "otimização"],
      confusion:
        "Optimization muda o system para melhorar um objective; Profiling mede onde runtime resources são gastos.",
    }),
  },
  "memory-leak": {
    en: content({
      definition:
        "Memory Leak is unintended retention of memory that is no longer useful to the program, causing live memory consumption to grow or remain unnecessarily high over time.",
      purpose:
        "Identifying it explains progressive memory pressure, garbage-collection cost, swapping, slowdowns, and eventual process termination that short tests may not reveal.",
      when: "Investigate when memory fails to return toward a stable baseline after workload subsides, comparing heap generations, native allocations, caches, listeners, handles, and object ownership over time.",
      context:
        "A long-running worker adds one event listener per job and retains job payloads through listener closures, so memory rises with every batch.",
      application:
        "Heap snapshots and allocation profiles identify the retaining path, the worker unregisters listeners in guaranteed cleanup, a soak test confirms a stable plateau, and memory growth alerts guard production.",
      phrase:
        "The Memory Leak is retained job payloads behind listeners, not merely the heap expanding during a temporary burst.",
      aliases: [
        "unintended memory retention",
        "heap leak",
        "vazamento de memória",
      ],
      confusion:
        "A Memory Leak retains useless allocations; high memory usage can be intentional and bounded, such as a correctly limited cache.",
    }),
    "pt-BR": content({
      definition:
        "Memory Leak é a retenção não intencional de memory que deixou de ser útil ao program, fazendo live memory crescer ou permanecer alta ao longo do tempo.",
      purpose:
        "Identificá-lo explica memory pressure progressiva, garbage-collection cost, swapping, slowdowns e process termination que testes curtos não revelam.",
      when: "Investigue quando memory não retorna a baseline estável após workload cair, comparando heap generations, native allocations, caches, listeners, handles e object ownership.",
      context:
        "Um long-running worker adiciona event listener por job e retém payloads nas closures, fazendo memory subir a cada batch.",
      application:
        "Heap snapshots e allocation profiles mostram retaining path, worker remove listeners em cleanup, soak test confirma plateau estável e alerts vigiam growth.",
      phrase:
        "O Memory Leak são payloads retidos por listeners, não apenas heap crescendo durante burst temporário.",
      aliases: [
        "unintended memory retention",
        "heap leak",
        "vazamento de memória",
      ],
      confusion:
        "Memory Leak retém allocations inúteis; high memory usage pode ser intencional e limitada, como um cache corretamente bounded.",
    }),
  },
  "cpu-bound": {
    en: content({
      definition:
        "CPU Bound describes a workload whose completion rate or latency is primarily limited by available processor execution rather than waiting for I/O or another resource.",
      purpose:
        "Classifying work as CPU bound directs investigation toward algorithms, instruction cost, vectorization, parallel processing, and compute capacity instead of adding I/O concurrency.",
      when: "Use the classification when CPU remains saturated, runnable work queues grow, and profiling shows active computation dominates wall time under the target workload.",
      context:
        "An image-resizing worker keeps every core near full utilization while disk and network wait remain low and jobs accumulate.",
      application:
        "CPU profiling finds an expensive resampling algorithm, the team evaluates a faster implementation, bounds workers to cores and memory, benchmarks output quality, and scales compute if needed.",
      phrase:
        "This stage is CPU Bound; adding asynchronous requests will increase contention rather than make each resize finish faster.",
      aliases: ["compute bound", "processor bound", "limitado por CPU"],
      confusion:
        "CPU Bound work waits mainly for processor execution; I/O Bound work waits mainly for external input or output completion.",
    }),
    "pt-BR": content({
      definition:
        "CPU Bound descreve workload cujo completion rate ou latency é limitado principalmente por processor execution, não por espera de I/O ou outro resource.",
      purpose:
        "Classificá-lo direciona análise a algorithms, instruction cost, vectorization, parallel processing e compute capacity, não a mais I/O concurrency.",
      when: "Use a classificação quando CPU permanece saturada, runnable queues crescem e profiling mostra active computation dominando wall time no workload alvo.",
      context:
        "Um image-resizing worker mantém todos os cores ocupados enquanto disk e network wait ficam baixos e jobs acumulam.",
      application:
        "CPU profile encontra resampling algorithm caro, time avalia implementação mais rápida, limita workers por cores e memory, testa output quality e escala compute.",
      phrase:
        "Este stage é CPU Bound; adicionar async requests aumenta contention em vez de acelerar cada resize.",
      aliases: ["compute bound", "processor bound", "limitado por CPU"],
      confusion:
        "CPU Bound espera principalmente por processor execution; I/O Bound espera principalmente pela conclusão de input ou output externo.",
    }),
  },
  "i-o-bound": {
    en: content({
      definition:
        "I/O Bound describes a workload whose completion rate or latency is primarily limited by waiting for input or output such as network, storage, database, or device operations.",
      purpose:
        "The classification focuses improvements on reducing round trips, batching, caching, concurrency, data transfer, and dependency capacity rather than raw processor speed.",
      when: "Use it when wall time is dominated by I/O wait, CPU has headroom, and tracing or system metrics identify an external operation as the limiting stage.",
      context:
        "A document importer spends most of each job waiting for many small remote object reads while CPU utilization stays below twenty percent.",
      application:
        "Tracing measures object-store spans, the importer batches metadata calls, prefetches with bounded concurrency, combines small reads, respects provider limits, and retests throughput and tail latency.",
      phrase:
        "The importer is I/O Bound on remote reads, so bounded overlap helps more than allocating faster CPU cores.",
      aliases: ["input-output bound", "wait bound", "limitado por E/S"],
      confusion:
        "I/O Bound identifies the dominant waiting resource; asynchronous code is an execution technique and does not by itself prove or remove an I/O bottleneck.",
    }),
    "pt-BR": content({
      definition:
        "I/O Bound descreve workload cujo completion rate ou latency é limitado principalmente pela espera de input ou output em network, storage, database ou device.",
      purpose:
        "A classificação direciona melhorias a fewer round trips, batching, caching, concurrency, data transfer e dependency capacity, não a processor speed.",
      when: "Use-a quando wall time é dominado por I/O wait, CPU tem headroom e tracing ou system metrics apontam external operation como limiting stage.",
      context:
        "Um document importer passa a maior parte de cada job esperando pequenos remote object reads, enquanto CPU fica abaixo de vinte por cento.",
      application:
        "Tracing mede object-store spans, importer agrupa metadata calls, faz prefetch com bounded concurrency, combina reads, respeita provider limits e retesta.",
      phrase:
        "O importer é I/O Bound em remote reads; sobreposição limitada ajuda mais que CPU cores rápidos.",
      aliases: ["input-output bound", "wait bound", "limitado por E/S"],
      confusion:
        "I/O Bound identifica o waiting resource dominante; asynchronous code é técnica de execution e não prova nem remove um I/O bottleneck.",
    }),
  },
  "bottleneck-analysis": {
    en: content({
      definition:
        "Bottleneck Analysis is the evidence-driven process of locating the resource or stage that currently constrains an end-to-end system objective and verifying how behavior changes when that constraint is relieved.",
      purpose:
        "It directs effort to the limiting part of a workload, avoiding local improvements that do not change overall latency, throughput, or capacity.",
      when: "Perform it when a measurable objective is missed or capacity stops scaling, observing the full request or data path under representative demand before choosing a remedy.",
      context:
        "Adding API instances no longer increases order throughput because all instances wait on one saturated database connection and lock path.",
      application:
        "The team correlates queue depth, utilization, wait time, traces and profiles, varies load and database capacity, confirms the throughput ceiling moves, then addresses the query and lock design.",
      phrase:
        "Bottleneck Analysis shows the database lock path is the present constraint; more API replicas only add waiting work.",
      aliases: [
        "constraint analysis",
        "performance bottleneck investigation",
        "análise de gargalo",
      ],
      confusion:
        "A Bottleneck is the limiting component at a given workload; high utilization alone is not proof that a resource limits the end-to-end objective.",
    }),
    "pt-BR": content({
      definition:
        "Bottleneck Analysis é o processo orientado por evidence que localiza o resource ou stage que limita um end-to-end objective e verifica a mudança ao aliviar essa constraint.",
      purpose:
        "Ela direciona esforço à parte limitante do workload, evitando local improvements que não alteram latency, throughput ou capacity geral.",
      when: "Faça-a quando objective mensurável falhar ou capacity parar de escalar, observando request ou data path completo sob demanda representativa antes da solução.",
      context:
        "Adicionar API instances não eleva order throughput porque todas esperam por um database connection e lock path saturado.",
      application:
        "O time correlaciona queue depth, utilization, wait time, traces e profiles, varia load e database capacity, confirma o ceiling e então corrige query e lock design.",
      phrase:
        "Bottleneck Analysis mostra que database lock path é a constraint atual; mais API replicas só adicionam espera.",
      aliases: [
        "constraint analysis",
        "performance bottleneck investigation",
        "análise de gargalo",
      ],
      confusion:
        "Bottleneck é o component limitante num workload; high utilization isolada não prova que um resource limita o objective end-to-end.",
    }),
  },
  "caching-strategy": {
    en: content({
      definition:
        "Caching Strategy is the explicit design for what derived data is cached, where it is stored, how keys are formed, when entries become invalid, and how reads and writes interact with the authoritative source.",
      purpose:
        "It reduces latency and origin load while controlling staleness, memory cost, invalidation complexity, consistency risk, and failure behavior.",
      when: "Define it when repeated access or expensive computation justifies copies, starting from correctness and freshness requirements rather than adding cache as an opaque speed layer.",
      context:
        "A product API repeatedly calculates catalog summaries, but prices require faster freshness than descriptions and inventory cannot tolerate cached authority.",
      application:
        "The design chooses cache-aside for summaries, separates keys by locale and version, assigns field-appropriate TTLs, invalidates on catalog events, coalesces misses, and measures hit rate, age, and origin pressure.",
      phrase:
        "The Caching Strategy caches product summaries by version but leaves inventory decisions with the authoritative store.",
      aliases: ["cache design", "cache policy", "estratégia de cache"],
      confusion:
        "Caching Strategy is the complete policy and data-flow design; Cache Policy often refers more narrowly to eviction or freshness rules.",
    }),
    "pt-BR": content({
      definition:
        "Caching Strategy é o design explícito do derived data armazenado, localização, key formation, invalidation e interação de reads e writes com a authoritative source.",
      purpose:
        "Ela reduz latency e origin load controlando staleness, memory cost, invalidation complexity, consistency risk e failure behavior.",
      when: "Defina-a quando repeated access ou computation cara justificar cópias, partindo de correctness e freshness requirements, não de cache como speed layer opaca.",
      context:
        "Uma product API recalcula catalog summaries, mas prices exigem freshness maior que descriptions e inventory não aceita cached authority.",
      application:
        "O design usa cache-aside, separa keys por locale e version, atribui TTLs por field, invalida por events, agrupa misses e mede hit rate, age e origin pressure.",
      phrase:
        "A Caching Strategy guarda product summaries por version, mas mantém inventory decisions na authoritative store.",
      aliases: ["cache design", "cache policy", "estratégia de cache"],
      confusion:
        "Caching Strategy é o policy e data-flow completos; Cache Policy pode significar apenas regras de eviction ou freshness.",
    }),
  },
  "cache-hit": {
    en: content({
      definition:
        "Cache Hit occurs when a cache lookup finds an entry eligible to satisfy the request under the current key, validity, and freshness rules, avoiding the normal origin computation or read.",
      purpose:
        "It indicates that previously stored work served demand and can reduce response latency and origin resource consumption.",
      when: "Track hits by operation, key space, tenant, and freshness class when assessing whether a cache helps representative traffic and returns semantically valid values.",
      context:
        "A catalog request finds the locale-specific product summary before its TTL expires and returns it without querying the database.",
      application:
        "The service increments a hit metric, records entry age and response latency, preserves the cache-status signal in tracing, and periodically verifies that high hit rate corresponds to lower origin load.",
      phrase:
        "This Cache Hit is valid for the description key, but it cannot authorize an inventory reservation.",
      aliases: ["cache success", "cached lookup hit", "acerto de cache"],
      confusion:
        "A Cache Hit means an eligible entry was found; a correct hit rate does not prove that the stored value is fresh enough for every business decision.",
    }),
    "pt-BR": content({
      definition:
        "Cache Hit ocorre quando um cache lookup encontra entry elegível sob as regras atuais de key, validity e freshness, evitando origin computation ou read normal.",
      purpose:
        "Ele indica que work previamente armazenado atendeu demanda e pode reduzir response latency e origin resource consumption.",
      when: "Acompanhe hits por operation, key space, tenant e freshness class ao avaliar se cache ajuda traffic representativo e devolve values semanticamente válidos.",
      context:
        "Uma catalog request encontra product summary do locale antes do TTL e responde sem consultar database.",
      application:
        "O service incrementa hit metric, registra entry age e latency, preserva cache status no tracing e verifica se hit rate reduz origin load.",
      phrase:
        "Este Cache Hit é válido para description key, mas não autoriza inventory reservation.",
      aliases: ["cache success", "cached lookup hit", "acerto de cache"],
      confusion:
        "Cache Hit significa entry elegível encontrada; hit rate alto não prova freshness suficiente para toda business decision.",
    }),
  },
  "cache-miss": {
    en: content({
      definition:
        "Cache Miss occurs when a cache lookup cannot provide an eligible entry because the key is absent, expired, evicted, invalidated, inaccessible, or unsuitable for the request.",
      purpose:
        "It identifies demand that must use an origin or recomputation path and therefore drives origin capacity, tail latency, and stampede risk.",
      when: "Measure miss reasons and behavior whenever cache effectiveness matters, especially during cold starts, mass expiration, key changes, deployments, node loss, and traffic bursts.",
      context:
        "After a deployment changes the key namespace, thousands of popular product requests simultaneously find no entries and query the database.",
      application:
        "The service labels the miss reason, coalesces concurrent loads for one key, bounds origin concurrency, warms critical entries, adds TTL jitter, and monitors miss latency and database pressure.",
      phrase:
        "This Cache Miss comes from the new key version; coalesce regeneration so one cold key does not become a database stampede.",
      aliases: ["cache lookup miss", "uncached lookup", "falha de cache"],
      confusion:
        "A Cache Miss is an unavailable eligible cached value; Cache Invalidation is an action or rule that deliberately makes an entry ineligible.",
    }),
    "pt-BR": content({
      definition:
        "Cache Miss ocorre quando cache lookup não fornece entry elegível porque key está ausente, expired, evicted, invalidated, inaccessible ou inadequada à request.",
      purpose:
        "Ele identifica demanda que segue para origin ou recomputation e, portanto, determina origin capacity, tail latency e stampede risk.",
      when: "Meça miss reasons e behavior quando cache importar, sobretudo em cold start, mass expiration, key changes, deployments, node loss e traffic bursts.",
      context:
        "Após deployment mudar key namespace, milhares de product requests não encontram entries e consultam database simultaneamente.",
      application:
        "O service rotula miss reason, agrupa concurrent loads por key, limita origin concurrency, aquece entries críticas, adiciona TTL jitter e monitora database pressure.",
      phrase:
        "Este Cache Miss vem da nova key version; agrupe regeneration para uma cold key não causar database stampede.",
      aliases: ["cache lookup miss", "uncached lookup", "falha de cache"],
      confusion:
        "Cache Miss é ausência de cached value elegível; Cache Invalidation é ação ou regra que deliberadamente torna entry inelegível.",
    }),
  },
  "cache-invalidation": {
    en: content({
      definition:
        "Cache Invalidation is the process of marking, removing, replacing, or bypassing cached entries when they can no longer satisfy the required version or freshness semantics.",
      purpose:
        "It prevents obsolete derived copies from surviving authoritative changes beyond their permitted staleness window.",
      when: "Design it for mutable cached data by choosing expiration, event-driven removal, versioned keys, write-through updates, or validation according to ordering, delivery, and failure guarantees.",
      context:
        "A product price changes in the source database while regional caches still hold the old amount used by storefront pages.",
      application:
        "The committed update emits an outbox event with product version, consumers invalidate or replace only older entries, TTL bounds missed events, and reconciliation detects stale versions.",
      phrase:
        "Cache Invalidation must follow the committed price version and ignore an older event delivered later.",
      aliases: [
        "cache purge",
        "cache expiry coordination",
        "invalidação de cache",
      ],
      confusion:
        "Cache Invalidation governs when a stored value becomes unusable; Cache Eviction removes entries to manage finite capacity and may occur while data remains current.",
    }),
    "pt-BR": content({
      definition:
        "Cache Invalidation é o processo de marcar, remover, substituir ou ignorar cached entries que não cumprem mais version ou freshness semantics exigidas.",
      purpose:
        "Ela impede que derived copies obsoletas sobrevivam a authoritative changes além da staleness window permitida.",
      when: "Projete-a para mutable cached data escolhendo expiration, event-driven removal, versioned keys, write-through updates ou validation conforme ordering, delivery e failure guarantees.",
      context:
        "Um product price muda no source database enquanto regional caches mantêm o valor antigo usado pela storefront.",
      application:
        "O committed update emite outbox event com product version, consumers removem apenas entries anteriores, TTL limita missed events e reconciliation encontra stale versions.",
      phrase:
        "Cache Invalidation deve seguir a committed price version e ignorar event antigo entregue depois.",
      aliases: [
        "cache purge",
        "cache expiry coordination",
        "invalidação de cache",
      ],
      confusion:
        "Cache Invalidation decide quando stored value fica inválido; Cache Eviction remove entries por capacity mesmo quando data ainda está atual.",
    }),
  },
  compression: {
    en: content({
      definition:
        "Compression is the encoding of data into a representation that uses fewer bits, either preserving every original value losslessly or discarding controlled detail in a lossy format.",
      purpose:
        "It reduces storage and transfer volume at the cost of encoder and decoder CPU, latency, memory, and sometimes fidelity.",
      when: "Use it when byte reduction outweighs processing cost, selecting an algorithm and level for data type, client support, payload size, caching, security sensitivity, and latency budget.",
      context:
        "A JSON API sends large repetitive responses over mobile networks, where transfer time dominates server processing.",
      application:
        "The server negotiates an accepted content encoding, compresses sufficiently large responses, avoids already compressed media and sensitive cross-origin mixtures, varies caches by encoding, and measures bytes, CPU, and latency.",
      phrase:
        "Enable Compression for the large JSON response, but measure CPU cost and keep the response cache encoding-aware.",
      aliases: ["data compression", "content compression", "compressão"],
      confusion:
        "Compression reduces representation size and is reversible when lossless; Encryption transforms data for confidentiality and requires a key for authorized recovery.",
    }),
    "pt-BR": content({
      definition:
        "Compression é a codificação de data em representação com menos bits, preservando todos os valores em lossless mode ou descartando detalhe controlado em lossy format.",
      purpose:
        "Ela reduz storage e transfer volume ao custo de encoder e decoder CPU, latency, memory e às vezes fidelity.",
      when: "Use-a quando byte reduction compensar processing cost, escolhendo algorithm e level conforme data type, client support, payload size, cache, security e latency budget.",
      context:
        "Uma JSON API envia responses grandes e repetitivas em mobile networks onde transfer time domina server processing.",
      application:
        "O server negocia content encoding, comprime responses grandes, evita mídia já comprimida, varia cache por encoding e mede bytes, CPU e latency.",
      phrase:
        "Ative Compression no JSON grande, mas meça CPU cost e mantenha response cache ciente do encoding.",
      aliases: ["data compression", "content compression", "compressão"],
      confusion:
        "Compression reduz representation size e pode ser reversível; Encryption protege confidentiality e exige key para recuperação autorizada.",
    }),
  },
  gzip: {
    en: content({
      definition:
        "Gzip is a lossless compression file format and wrapper around DEFLATE, widely used as an HTTP content encoding identified by the token gzip.",
      purpose:
        "It reduces text and other compressible response sizes with broad client and intermediary compatibility and configurable compression effort.",
      when: "Choose it for sufficiently large compressible HTTP content when compatibility or encoding speed is important, negotiating Accept-Encoding and avoiding needless recompression.",
      context:
        "A public API serves JavaScript and JSON to clients that include older agents without Brotli support.",
      application:
        "The edge selects precompressed or dynamic gzip variants, sends Content-Encoding: gzip and Vary: Accept-Encoding, skips small and precompressed assets, and tracks transfer savings and CPU.",
      phrase:
        "Serve the Gzip variant to this client and keep an identity representation for agents that do not advertise support.",
      aliases: ["GNU zip format", "gzip content encoding", "formato gzip"],
      confusion:
        "Gzip is a specific DEFLATE-based wrapper and encoding; ZIP is an archive container that can hold multiple files and metadata.",
    }),
    "pt-BR": content({
      definition:
        "Gzip é um lossless compression format e wrapper de DEFLATE, amplamente usado como HTTP content encoding identificado pelo token gzip.",
      purpose:
        "Ele reduz text e responses compressíveis com ampla client e intermediary compatibility e compression effort configurável.",
      when: "Escolha-o para HTTP content grande e compressível quando compatibility ou encoding speed importar, negociando Accept-Encoding e evitando recompression.",
      context:
        "Uma public API entrega JavaScript e JSON a clients que incluem user agents antigos sem Brotli support.",
      application:
        "A edge escolhe gzip precompressed ou dinâmico, envia Content-Encoding e Vary corretos, pula assets pequenos ou já comprimidos e mede savings e CPU.",
      phrase:
        "Sirva a variante Gzip a este client e preserve identity representation para agents sem suporte.",
      aliases: ["GNU zip format", "gzip content encoding", "formato gzip"],
      confusion:
        "Gzip é wrapper e encoding específico baseado em DEFLATE; ZIP é archive container para vários files e metadata.",
    }),
  },
  brotli: {
    en: content({
      definition:
        "Brotli is a lossless compression algorithm and format, exposed in HTTP content negotiation as br, that often compresses web text more densely than gzip at comparable decompression speed.",
      purpose:
        "It lowers transfer bytes for supported clients, especially for static HTML, CSS, JavaScript, fonts, and other text-oriented web assets.",
      when: "Use it over secure HTTP for clients advertising br, commonly precompressing static assets at higher levels and choosing moderate levels for dynamic responses to control CPU and latency.",
      context:
        "A global web application wants smaller JavaScript bundles at the edge while retaining gzip for clients that do not support br.",
      application:
        "The build produces versioned Brotli and gzip assets, the CDN negotiates Accept-Encoding, returns Content-Encoding: br when eligible, varies cache keys, and compares transfer size and compression cost.",
      phrase:
        "Prefer the prebuilt Brotli asset for br-capable clients and keep gzip as the compatibility encoding.",
      aliases: ["br encoding", "Brotli compression", "compressão Brotli"],
      confusion:
        "Brotli and gzip are alternative lossless content encodings; Brotli is not the same as the HTTP transfer mechanism that carries the encoded payload.",
    }),
    "pt-BR": content({
      definition:
        "Brotli é um lossless compression algorithm e format, negociado em HTTP como br, que costuma comprimir web text mais que gzip com decompression speed comparável.",
      purpose:
        "Ele reduz transfer bytes para clients compatíveis, sobretudo em HTML, CSS, JavaScript, fonts e outros web assets textuais.",
      when: "Use-o sobre secure HTTP para clients que anunciam br, pré-comprimindo static assets em níveis altos e usando níveis moderados em dynamic responses para controlar CPU.",
      context:
        "Uma global web app quer JavaScript bundles menores na edge, mantendo gzip para clients sem suporte a br.",
      application:
        "O build gera assets Brotli e gzip versionados, CDN negocia Accept-Encoding, envia Content-Encoding: br, varia cache keys e compara transfer size e cost.",
      phrase:
        "Prefira o asset Brotli prebuilt para clients com br e mantenha gzip como compatibility encoding.",
      aliases: ["br encoding", "Brotli compression", "compressão Brotli"],
      confusion:
        "Brotli e gzip são content encodings lossless alternativos; Brotli não é o HTTP transfer mechanism que transporta o payload.",
    }),
  },
  "connection-keep-alive": {
    en: content({
      definition:
        "Connection Keep-Alive is the reuse of an established transport connection for multiple exchanges instead of creating and closing a new connection for every operation.",
      purpose:
        "It avoids repeated TCP and security handshakes, reduces connection churn and latency, and uses network resources more efficiently.",
      when: "Enable and tune it for repeated calls between compatible peers, balancing idle timeout, pool size, lifetime, multiplexing, intermediaries, server limits, stale connections, and load-balancer behavior.",
      context:
        "An API client makes hundreds of HTTPS calls per second to one provider and spends substantial time and CPU establishing a fresh TLS connection for each request.",
      application:
        "The client uses a bounded connection pool, reuses healthy connections, sets idle and maximum lifetimes below infrastructure limits, evicts broken sockets, and monitors reuse, handshakes, and saturation.",
      phrase:
        "Connection Keep-Alive removes repeated handshakes, but the pool still needs bounded size and stale-connection handling.",
      aliases: [
        "persistent connection",
        "connection reuse",
        "conexão persistente",
      ],
      confusion:
        "Connection Keep-Alive preserves a transport connection between operations; an application heartbeat sends traffic to detect liveness and may run over a persistent connection.",
    }),
    "pt-BR": content({
      definition:
        "Connection Keep-Alive é o reúso de uma transport connection estabelecida para várias exchanges, em vez de criar e fechar connection a cada operation.",
      purpose:
        "Ele evita TCP e security handshakes repetidos, reduz connection churn e latency e usa network resources com mais eficiência.",
      when: "Ative-o em chamadas repetidas entre peers compatíveis, equilibrando idle timeout, pool size, lifetime, multiplexing, intermediaries, server limits e load balancer behavior.",
      context:
        "Um API client faz centenas de HTTPS calls por segundo e gasta tempo e CPU criando uma TLS connection nova por request.",
      application:
        "O client usa bounded connection pool, reutiliza connections saudáveis, define idle e maximum lifetimes, remove broken sockets e monitora reuse, handshakes e saturation.",
      phrase:
        "Connection Keep-Alive elimina handshakes repetidos, mas pool ainda precisa de tamanho limitado e stale-connection handling.",
      aliases: [
        "persistent connection",
        "connection reuse",
        "conexão persistente",
      ],
      confusion:
        "Connection Keep-Alive preserva transport connection; application heartbeat envia traffic para detectar liveness e pode usar uma persistent connection.",
    }),
  },
  "n-1-query": {
    en: content({
      definition:
        "N+1 Query is a data-access pattern that executes one query to retrieve a collection and then an additional query for each of its N items to obtain related data.",
      purpose:
        "Naming it exposes multiplicative database round trips that may look harmless with small data but cause steep latency and load growth as result size increases.",
      when: "Look for it in object-relational mapping, GraphQL resolvers, templates, loops, and serializers whenever related data is fetched lazily per item.",
      context:
        "An orders page loads fifty orders in one query and then issues fifty separate customer queries while rendering the list.",
      application:
        "Query tracing reveals fifty-one statements, the repository batches customer IDs or uses an appropriate join and projection, pagination bounds the set, and tests assert query count for representative results.",
      phrase:
        "This N+1 Query turns one page load into fifty-one round trips; batch the customer lookup for the displayed order IDs.",
      aliases: [
        "N plus one query problem",
        "per-row query pattern",
        "problema N+1",
      ],
      confusion:
        "N+1 Query describes repeated per-item retrieval; one complex query can still be slow for unrelated reasons such as a poor plan or excessive result size.",
    }),
    "pt-BR": content({
      definition:
        "N+1 Query é um data-access pattern que executa uma query para buscar collection e depois uma query adicional para cada um dos N items obter related data.",
      purpose:
        "Nomeá-lo expõe database round trips multiplicativos que parecem inofensivos com poucos dados, mas elevam latency e load conforme result size cresce.",
      when: "Procure-o em ORM, GraphQL resolvers, templates, loops e serializers quando related data é buscada lazy por item.",
      context:
        "Uma orders page busca cinquenta orders em uma query e faz cinquenta customer queries separadas durante rendering.",
      application:
        "Query tracing revela 51 statements, repository agrupa customer IDs ou usa join e projection adequados, pagination limita conjunto e tests verificam query count.",
      phrase:
        "Esta N+1 Query transforma uma page load em 51 round trips; agrupe customer lookup para os order IDs exibidos.",
      aliases: [
        "N plus one query problem",
        "per-row query pattern",
        "problema N+1",
      ],
      confusion:
        "N+1 Query descreve retrieval repetido por item; uma única complex query ainda pode ser lenta por poor plan ou result size excessivo.",
    }),
  },
  "slow-query": {
    en: content({
      definition:
        "Slow Query is a database statement whose elapsed time or resource consumption exceeds the objective appropriate to its workload and operating conditions.",
      purpose:
        "It identifies statements that materially affect user latency, database capacity, lock duration, replication, or neighboring workloads.",
      when: "Investigate queries exceeding operation-specific thresholds or dominating total database time, segmenting by normalized statement, parameters, plan, rows, waits, load, and cache state.",
      context:
        "An order-history query is fast for recent customers but scans millions of rows for long-lived accounts and pushes checkout database latency upward.",
      application:
        "Slow-query telemetry captures duration and rows, EXPLAIN reveals an unsuitable scan, the team adds a selective composite index and bounded pagination, updates statistics, and verifies representative parameters.",
      phrase:
        "This Slow Query is parameter-sensitive; validate the new index for both recent and long-lived customer histories.",
      aliases: ["long-running query", "expensive query", "consulta lenta"],
      confusion:
        "A Slow Query violates a performance objective; a blocking query may be fast itself yet delay others by holding locks.",
    }),
    "pt-BR": content({
      definition:
        "Slow Query é um database statement cujo elapsed time ou resource consumption excede o objective adequado ao workload e às operating conditions.",
      purpose:
        "Ela identifica statements que afetam user latency, database capacity, lock duration, replication ou neighboring workloads.",
      when: "Investigue queries que excedem thresholds por operation ou dominam database time, segmentando normalized statement, parameters, plan, rows, waits, load e cache state.",
      context:
        "Uma order-history query é rápida para customers novos, mas varre milhões de rows para contas antigas e aumenta checkout database latency.",
      application:
        "Telemetry captura duration e rows, EXPLAIN revela scan inadequado, time adiciona composite index e bounded pagination, atualiza statistics e verifica parameters reais.",
      phrase:
        "Esta Slow Query é parameter-sensitive; valide o novo index para histories recentes e antigas.",
      aliases: ["long-running query", "expensive query", "consulta lenta"],
      confusion:
        "Slow Query viola performance objective; blocking query pode ser rápida e ainda atrasar outras ao manter locks.",
    }),
  },
  "query-plan": {
    en: content({
      definition:
        "Query Plan is the database optimizer's selected strategy for executing a declarative query, including access paths, join order, join algorithms, sorting, aggregation, and data movement.",
      purpose:
        "It explains how the engine intends to obtain the requested result and why indexes, statistics, predicates, and estimated cardinalities affect cost.",
      when: "Inspect it when tuning a query, comparing indexes, diagnosing regressions, or evaluating parameter sensitivity, considering estimates without assuming the displayed plan actually ran.",
      context:
        "After data distribution changes, the optimizer estimates a filter will return ten rows and chooses nested loops, but the request commonly returns one hundred thousand.",
      application:
        "The engineer reads scans, joins, estimates and costs, refreshes statistics, rewrites the predicate or adds an index, then compares an actual execution plan and runtime metrics.",
      phrase:
        "The Query Plan estimates ten rows at this join; verify actual cardinality before changing the index.",
      aliases: [
        "optimizer plan",
        "query execution strategy",
        "plano de consulta",
      ],
      confusion:
        "A Query Plan may be an optimizer estimate; an Execution Plan often means the concrete plan with actual runtime counters from an execution.",
    }),
    "pt-BR": content({
      definition:
        "Query Plan é a strategy escolhida pelo database optimizer para executar declarative query, incluindo access paths, join order, algorithms, sorting, aggregation e data movement.",
      purpose:
        "Ele explica como engine pretende obter result e por que indexes, statistics, predicates e estimated cardinalities afetam cost.",
      when: "Inspecione-o ao tunar query, comparar indexes, diagnosticar regressions ou parameter sensitivity, sem presumir que estimated plan realmente executou.",
      context:
        "Após data distribution mudar, optimizer estima dez rows e escolhe nested loops, mas request costuma retornar cem mil.",
      application:
        "Engineer lê scans, joins, estimates e costs, atualiza statistics, reescreve predicate ou index e compara actual execution plan e runtime metrics.",
      phrase:
        "O Query Plan estima dez rows neste join; confirme actual cardinality antes de mudar index.",
      aliases: [
        "optimizer plan",
        "query execution strategy",
        "plano de consulta",
      ],
      confusion:
        "Query Plan pode ser estimate do optimizer; Execution Plan costuma incluir runtime counters reais de uma execution.",
    }),
  },
  "execution-plan": {
    en: content({
      definition:
        "Execution Plan is the operator tree used by a database engine to run a query, often enriched after execution with actual rows, loops, timing, memory, spills, and I/O counters.",
      purpose:
        "It connects optimizer choices to observed work, revealing estimation errors and expensive operators that summary duration alone cannot explain.",
      when: "Capture it safely for slow or regressed statements when database tooling permits, protecting sensitive parameters and accounting for measurement overhead and plan-cache variation.",
      context:
        "A reporting query exceeds its deadline because a hash operation spills repeatedly to disk even though its estimated cost appeared acceptable.",
      application:
        "The actual plan exposes underestimated rows, spill volume and repeated loops; the team corrects statistics and indexing, adjusts the query, and verifies that spills and elapsed time fall.",
      phrase:
        "The Execution Plan shows an actual disk spill; the estimated cost alone did not reveal this runtime constraint.",
      aliases: ["actual query plan", "physical plan", "plano de execução"],
      confusion:
        "Execution Plan describes database operators for one statement; a distributed Trace follows an end-to-end request across components.",
    }),
    "pt-BR": content({
      definition:
        "Execution Plan é a operator tree usada pelo database engine para executar query, frequentemente enriquecida com actual rows, loops, timing, memory, spills e I/O counters.",
      purpose:
        "Ele conecta optimizer choices ao work observado, revelando estimation errors e expensive operators que duration resumida não explica.",
      when: "Capture-o com segurança para statements lentos ou regredidos, protegendo sensitive parameters e considerando measurement overhead e plan-cache variation.",
      context:
        "Uma reporting query excede deadline porque hash operation derrama repetidamente em disk, embora estimated cost parecesse aceitável.",
      application:
        "O actual plan expõe underestimated rows, spill volume e loops; o time corrige statistics, indexing e query e verifica queda de spills e elapsed time.",
      phrase:
        "O Execution Plan mostra actual disk spill; estimated cost isolado não revelou esta runtime constraint.",
      aliases: ["actual query plan", "physical plan", "plano de execução"],
      confusion:
        "Execution Plan descreve database operators de um statement; distributed Trace acompanha request end-to-end entre components.",
    }),
  },
  "database-partitioning": {
    en: content({
      definition:
        "Database Partitioning is the division of a logical database object or dataset into separately managed physical subsets according to a partitioning rule.",
      purpose:
        "It improves manageability, pruning, lifecycle operations, locality, or scale by limiting which data and resources an operation must touch.",
      when: "Use it when data volume or access patterns justify explicit subsets, choosing a stable key and boundaries while planning skew, cross-partition queries, indexes, constraints, rebalancing, and recovery.",
      context:
        "A multi-year events table grows by billions of rows, while most queries and retention operations target a bounded date range.",
      application:
        "The database partitions events monthly, lets predicates prune old partitions, maintains local indexes, archives complete partitions, monitors skew, and tests queries that span boundaries.",
      phrase:
        "Database Partitioning helps only when the query predicate allows the engine to prune irrelevant partitions.",
      aliases: [
        "data partitioning",
        "table partitioning",
        "particionamento de banco",
      ],
      confusion:
        "Database Partitioning divides data into subsets; Replication keeps copies of data to improve availability, durability, or read scale.",
    }),
    "pt-BR": content({
      definition:
        "Database Partitioning é a divisão de um logical database object ou dataset em physical subsets gerenciados separadamente conforme partitioning rule.",
      purpose:
        "Ele melhora manageability, pruning, lifecycle operations, locality ou scale ao limitar quais data e resources uma operation acessa.",
      when: "Use-o quando data volume ou access patterns justificarem subsets, escolhendo key e boundaries e planejando skew, cross-partition queries, indexes, constraints, rebalancing e recovery.",
      context:
        "Uma events table de vários anos cresce bilhões de rows, enquanto queries e retention operations miram date ranges limitados.",
      application:
        "O database particiona events por mês, permite predicate pruning, mantém local indexes, arquiva partitions completas, monitora skew e testa boundary queries.",
      phrase:
        "Database Partitioning ajuda somente quando query predicate permite pruning das partitions irrelevantes.",
      aliases: [
        "data partitioning",
        "table partitioning",
        "particionamento de banco",
      ],
      confusion:
        "Database Partitioning divide data em subsets; Replication mantém copies para availability, durability ou read scale.",
    }),
  },
  "horizontal-partitioning": {
    en: content({
      definition:
        "Horizontal Partitioning divides a table or dataset by rows, assigning each row to a partition according to a range, list, hash, or other key rule while retaining the same logical columns.",
      purpose:
        "It distributes row volume and can enable pruning, parallel work, independent maintenance, or placement across storage and nodes.",
      when: "Choose it when row count, locality, lifecycle, or write scale is the limiting dimension, selecting a key that matches access patterns and avoids hot or oversized partitions.",
      context:
        "Customer transactions are too large for one storage unit, and most requests access records for exactly one tenant.",
      application:
        "Rows are hash-partitioned by tenant identifier, routing includes the key, large tenants receive a mitigation plan, cross-tenant analytics use a separate path, and rebalancing is automated and observed.",
      phrase:
        "Horizontal Partitioning by tenant keeps ordinary requests local, but we still need a strategy for exceptionally large tenants.",
      aliases: [
        "row partitioning",
        "horizontal data split",
        "particionamento horizontal",
      ],
      confusion:
        "Horizontal Partitioning separates rows with the same schema; Vertical Partitioning separates columns or functional groups of attributes.",
    }),
    "pt-BR": content({
      definition:
        "Horizontal Partitioning divide table ou dataset por rows, atribuindo cada row a uma partition por range, list, hash ou key rule e preservando as mesmas logical columns.",
      purpose:
        "Ele distribui row volume e permite pruning, parallel work, independent maintenance ou placement entre storage e nodes.",
      when: "Escolha-o quando row count, locality, lifecycle ou write scale limitar, usando key alinhada aos access patterns e evitando hot ou oversized partitions.",
      context:
        "Customer transactions excedem uma storage unit e a maioria das requests acessa records de exatamente um tenant.",
      application:
        "Rows são hash-partitioned por tenant ID, routing inclui key, large tenants têm mitigation plan, analytics cross-tenant usam outro path e rebalancing é automatizado.",
      phrase:
        "Horizontal Partitioning por tenant mantém requests locais, mas ainda exige strategy para tenants excepcionalmente grandes.",
      aliases: [
        "row partitioning",
        "horizontal data split",
        "particionamento horizontal",
      ],
      confusion:
        "Horizontal Partitioning separa rows com mesmo schema; Vertical Partitioning separa columns ou functional attribute groups.",
    }),
  },
  "vertical-partitioning": {
    en: content({
      definition:
        "Vertical Partitioning divides a table, entity, or database by columns or functional attribute groups, storing frequently used or independently managed fields separately while linking them by identity.",
      purpose:
        "It narrows rows and isolates different access, security, storage, or lifecycle characteristics so common operations need not read or manage every attribute.",
      when: "Use it when wide records contain groups with distinct access frequency, sensitivity, size, ownership, or scaling needs, accounting for joins, transactions, consistency, and migration.",
      context:
        "A customer record mixes small profile fields used on every request with large documents and restricted compliance attributes read rarely.",
      application:
        "The design keeps core profile columns in the hot table, moves documents and restricted fields to keyed stores with separate authorization, and measures added joins and consistency behavior.",
      phrase:
        "Vertical Partitioning keeps large compliance fields off the hot profile path while preserving customer identity across both stores.",
      aliases: [
        "column partitioning",
        "vertical data split",
        "particionamento vertical",
      ],
      confusion:
        "Vertical Partitioning separates columns or attribute groups; Horizontal Partitioning distributes rows that retain the same logical schema.",
    }),
    "pt-BR": content({
      definition:
        "Vertical Partitioning divide table, entity ou database por columns ou functional attribute groups, armazenando fields frequentes ou independentes separadamente e ligando-os por identity.",
      purpose:
        "Ele estreita rows e isola access, security, storage ou lifecycle distintos para operations comuns não lerem todos os attributes.",
      when: "Use-o quando wide records tiverem grupos com frequência, sensitivity, size, ownership ou scaling diferentes, considerando joins, transactions, consistency e migration.",
      context:
        "Um customer record mistura profile fields pequenos com documents grandes e restricted compliance attributes raramente lidos.",
      application:
        "O design mantém profile columns na hot table, move documents e restricted fields para keyed stores com auth separado e mede joins e consistency.",
      phrase:
        "Vertical Partitioning retira compliance fields do hot profile path e preserva customer identity entre stores.",
      aliases: [
        "column partitioning",
        "vertical data split",
        "particionamento vertical",
      ],
      confusion:
        "Vertical Partitioning separa columns; Horizontal Partitioning distribui rows com o mesmo logical schema.",
    }),
  },
  "read-replica": {
    en: content({
      definition:
        "Read Replica is a database copy that receives changes from an authoritative writer and serves eligible read traffic, commonly with asynchronous replication and measurable lag.",
      purpose:
        "It adds read capacity, locality, or isolation for reporting while reducing read pressure on the primary database.",
      when: "Use it for reads that tolerate the replica's consistency model, routing freshness-sensitive or read-after-write operations appropriately and planning lag, failure, promotion, and capacity.",
      context:
        "Analytics queries compete with checkout writes, but reports can tolerate data that is up to several minutes behind.",
      application:
        "Reporting routes to a dedicated replica, monitors replay lag, cancels abusive queries, falls back deliberately, and never uses stale replica state to confirm a just-written payment.",
      phrase:
        "Send this report to the Read Replica; keep immediate post-payment reads on a path with the required freshness.",
      aliases: ["read-only replica", "reader replica", "réplica de leitura"],
      confusion:
        "A Read Replica serves copied state for reads; a cache stores disposable derived values under separate freshness and invalidation rules.",
    }),
    "pt-BR": content({
      definition:
        "Read Replica é uma database copy que recebe changes do authoritative writer e atende eligible read traffic, geralmente com asynchronous replication e lag mensurável.",
      purpose:
        "Ela adiciona read capacity, locality ou reporting isolation e reduz read pressure no primary database.",
      when: "Use-a para reads compatíveis com seu consistency model, roteando freshness-sensitive ou read-after-write operations corretamente e planejando lag, failure e promotion.",
      context:
        "Analytics queries competem com checkout writes, mas reports aceitam data alguns minutos atrasada.",
      application:
        "Reporting usa dedicated replica, monitora replay lag, cancela queries abusivas e nunca usa stale state para confirmar payment recém-gravado.",
      phrase:
        "Envie o report à Read Replica; mantenha post-payment reads no path com freshness exigida.",
      aliases: ["read-only replica", "reader replica", "réplica de leitura"],
      confusion:
        "Read Replica serve copied state do database; cache guarda derived values descartáveis com outras freshness rules.",
    }),
  },
  "write-through": {
    en: content({
      definition:
        "Write Through is a caching policy in which a write is synchronously applied to the authoritative store through or alongside the cache before the operation is reported successful.",
      purpose:
        "It keeps cached data aligned with committed writes and simplifies subsequent reads, at the cost of write-path latency and dependence on both storage paths.",
      when: "Use it when recently written values must be immediately available from cache and synchronous origin durability is required, defining atomicity, failure ordering, retries, and cache bypass behavior.",
      context:
        "A settings service needs a saved preference to appear on the user's next request while the database remains authoritative.",
      application:
        "The write path commits the database, updates or invalidates the versioned cache entry before success according to its contract, uses idempotency, and repairs partial cache failures.",
      phrase:
        "Write Through keeps the preference cache current, but success still depends on the authoritative database commit.",
      aliases: [
        "write-through cache",
        "synchronous cache write",
        "escrita através do cache",
      ],
      confusion:
        "Write Through persists to the authoritative store synchronously; Write Back acknowledges a cache write before deferred persistence.",
    }),
    "pt-BR": content({
      definition:
        "Write Through é caching policy em que write é aplicado synchronously ao authoritative store através ou junto do cache antes de reportar success.",
      purpose:
        "Ele alinha cached data aos committed writes e simplifica reads seguintes, ao custo de write-path latency e dependência dos storage paths.",
      when: "Use-o quando values recém-gravados precisarem estar imediatamente no cache e origin durability síncrona for exigida, definindo atomicity, failure ordering e retries.",
      context:
        "Um settings service precisa mostrar saved preference na próxima request enquanto database continua authoritative.",
      application:
        "O path commita database, atualiza ou invalida versioned cache conforme contract, usa idempotency e repara partial cache failures.",
      phrase:
        "Write Through mantém preference cache atual, mas success ainda depende do authoritative database commit.",
      aliases: [
        "write-through cache",
        "synchronous cache write",
        "escrita através do cache",
      ],
      confusion:
        "Write Through persiste no authoritative store synchronously; Write Back confirma cache write antes da persistência posterior.",
    }),
  },
  "write-back": {
    en: content({
      definition:
        "Write Back is a caching policy in which modified data is accepted into a cache or fast buffer and persisted to the authoritative backing store later.",
      purpose:
        "It lowers apparent write latency and can batch origin updates, while introducing a durability window, ordering requirements, and recovery complexity.",
      when: "Use it only when delayed persistence and possible recovery are acceptable, with durable buffering, ownership, idempotency, flush triggers, backpressure, conflict handling, and failure monitoring.",
      context:
        "A metrics aggregator accepts frequent counter updates that can be combined before writing durable summary rows.",
      application:
        "Updates enter a replicated durable buffer, one owner coalesces by key, flushes on time and size thresholds, preserves ordering, retries idempotently, and exposes unflushed age and backlog.",
      phrase:
        "Write Back reduces counter-write latency, but acknowledged updates must survive cache-node failure until the database flush completes.",
      aliases: [
        "write-behind cache",
        "deferred cache write",
        "escrita posterior",
      ],
      confusion:
        "Write Back defers backing-store persistence; Write Through completes backing-store work before acknowledging according to its contract.",
    }),
    "pt-BR": content({
      definition:
        "Write Back é caching policy em que modified data é aceita em cache ou fast buffer e persistida no authoritative backing store posteriormente.",
      purpose:
        "Ele reduz apparent write latency e agrupa origin updates, introduzindo durability window, ordering requirements e recovery complexity.",
      when: "Use-o somente quando delayed persistence for aceitável, com durable buffering, ownership, idempotency, flush triggers, backpressure, conflicts e failure monitoring.",
      context:
        "Um metrics aggregator aceita counter updates frequentes que podem ser combinados antes de durable summary writes.",
      application:
        "Updates entram em replicated durable buffer, um owner agrega por key, faz flush por tempo e tamanho, preserva ordering, repete idempotentemente e expõe backlog.",
      phrase:
        "Write Back reduz counter-write latency, mas acknowledged updates precisam sobreviver até database flush.",
      aliases: [
        "write-behind cache",
        "deferred cache write",
        "escrita posterior",
      ],
      confusion:
        "Write Back adia backing-store persistence; Write Through a conclui antes do acknowledgement conforme contract.",
    }),
  },
  "load-testing": {
    en: content({
      definition:
        "Load Testing is the controlled exercise of a system with a representative volume and mix of concurrent work to measure behavior against performance and capacity objectives.",
      purpose:
        "It verifies whether expected demand can be served with acceptable latency, throughput, errors, resource use, and stability before production users discover the limit.",
      when: "Run it for capacity decisions and risky releases using production-like data, topology, dependencies, pacing, warm-up, duration, and success criteria while protecting shared environments.",
      context:
        "A ticketing platform expects twelve thousand users at sale opening and must confirm that purchase latency and inventory correctness hold at that load.",
      application:
        "The test models browse-to-purchase ratios and arrival rate, ramps to forecast demand, observes percentiles, errors, saturation and invariants, preserves raw results, and compares them with a baseline.",
      phrase:
        "The Load Testing target is the forecast workload mix, not merely as many requests as the generator can send.",
      aliases: ["load test", "workload testing", "teste de carga"],
      confusion:
        "Load Testing validates expected workload; Stress Testing intentionally pushes beyond normal capacity to study limits and failure behavior.",
    }),
    "pt-BR": content({
      definition:
        "Load Testing é o exercício controlado de um system com volume e mix representativos de concurrent work para medir performance e capacity objectives.",
      purpose:
        "Ele verifica se expected demand mantém latency, throughput, errors, resource use e stability aceitáveis antes dos production users encontrarem o limite.",
      when: "Execute-o para capacity decisions e risky releases usando data, topology, dependencies, pacing, warm-up, duration e success criteria semelhantes à produção.",
      context:
        "Uma ticketing platform espera doze mil users na abertura e precisa confirmar purchase latency e inventory correctness nessa load.",
      application:
        "O test modela browse-to-purchase ratio e arrival rate, aumenta até forecast demand, observa percentiles, errors, saturation e invariants e compara baseline.",
      phrase:
        "O alvo de Load Testing é o forecast workload mix, não o máximo de requests que generator envia.",
      aliases: ["load test", "workload testing", "teste de carga"],
      confusion:
        "Load Testing valida expected workload; Stress Testing ultrapassa normal capacity para estudar limites e failures.",
    }),
  },
  "stress-testing": {
    en: content({
      definition:
        "Stress Testing deliberately drives a system beyond normal operating capacity or removes resources to discover limits, failure modes, and recovery behavior.",
      purpose:
        "It reveals whether overload is bounded and safe rather than producing corruption, cascading failure, or uncontrolled recovery.",
      when: "Run it after baseline load tests, with explicit abort conditions, protected environments, realistic constraints, and observers for saturation and correctness.",
      context:
        "A payment API is pushed past its forecast peak until queues saturate and dependencies begin rejecting calls.",
      application:
        "The test increases arrival rate past capacity, records the knee and collapse points, verifies shedding and recovery, checks invariants, and turns findings into limits and safeguards.",
      phrase:
        "Stress Testing should show how checkout fails and recovers beyond capacity, not merely produce a larger request count.",
      aliases: ["stress test", "limit testing", "teste de estresse"],
      confusion:
        "Stress Testing exceeds normal capacity to expose limits; Load Testing validates behavior at an expected workload.",
    }),
    "pt-BR": content({
      definition:
        "Stress Testing leva deliberadamente um system além da normal operating capacity ou remove resources para descobrir limits, failure modes e recovery behavior.",
      purpose:
        "Ele revela se overload é bounded e seguro, sem corruption, cascading failure ou recovery descontrolado.",
      when: "Execute-o após baseline load tests, com abort conditions, environment protegido, constraints realistas e observability de saturation e correctness.",
      context:
        "Uma payment API ultrapassa o forecast peak até queues saturarem e dependencies rejeitarem calls.",
      application:
        "O test eleva arrival rate além da capacity, registra knee e collapse points, verifica shedding, recovery e invariants e converte achados em safeguards.",
      phrase:
        "Stress Testing deve mostrar como checkout falha e recupera além da capacity, não só gerar mais requests.",
      aliases: ["stress test", "limit testing", "teste de estresse"],
      confusion:
        "Stress Testing ultrapassa normal capacity; Load Testing valida expected workload.",
    }),
  },
  "spike-testing": {
    en: content({
      definition:
        "Spike Testing evaluates system behavior when offered load rises or falls abruptly over a short interval rather than changing gradually.",
      purpose:
        "It verifies burst absorption, autoscaling delay, queue limits, admission control, dependency protection, and recovery after sudden demand changes.",
      when: "Use it for launches, alerts, scheduled sales, reconnect storms, or other workloads with credible sharp transitions.",
      context:
        "A ticket sale causes traffic to jump from five hundred to twenty thousand requests per second within ten seconds.",
      application:
        "The scenario reproduces the rise, hold, and drop, then measures tail latency, errors, queue growth, scaling response, correctness, and drain time.",
      phrase:
        "Spike Testing must include the ramp and recovery, because average hourly traffic hides the ten-second surge.",
      aliases: ["burst testing", "traffic spike test", "teste de pico"],
      confusion:
        "Spike Testing focuses on sudden rate change; Stress Testing focuses on operation beyond sustainable limits, whether reached suddenly or gradually.",
    }),
    "pt-BR": content({
      definition:
        "Spike Testing avalia system behavior quando offered load sobe ou cai abruptamente em pouco tempo, em vez de variar gradualmente.",
      purpose:
        "Ele verifica burst absorption, autoscaling delay, queue limits, admission control, dependency protection e recovery após mudança súbita.",
      when: "Use-o em launches, alerts, scheduled sales, reconnect storms ou workloads com transições bruscas plausíveis.",
      context:
        "Uma ticket sale eleva traffic de quinhentas para vinte mil requests por segundo em dez segundos.",
      application:
        "O scenario reproduz subida, sustentação e queda e mede tail latency, errors, queue growth, scaling response, correctness e drain time.",
      phrase:
        "Spike Testing precisa incluir ramp e recovery, pois average hourly traffic esconde o surge de dez segundos.",
      aliases: ["burst testing", "traffic spike test", "teste de pico"],
      confusion:
        "Spike Testing foca mudança súbita de taxa; Stress Testing foca operação além dos sustainable limits.",
    }),
  },
  "soak-testing": {
    en: content({
      definition:
        "Soak Testing runs a sustained representative workload for an extended period to expose cumulative degradation that short tests miss.",
      purpose:
        "It detects memory leaks, connection leaks, queue drift, storage growth, periodic interference, thermal effects, and slow dependency exhaustion.",
      when: "Run it for long-lived services and risky releases with duration sufficient to cross cache, rotation, batch, renewal, and cleanup cycles.",
      context:
        "A worker passes a thirty-minute load test but gradually retains listeners and crashes after two days of ordinary traffic.",
      application:
        "The test holds target load across lifecycle cycles, trends memory, handles, latency, backlog and errors, verifies a stable plateau, and inspects resources after shutdown.",
      phrase:
        "Soak Testing must span the suspected retention cycle; a short stable peak cannot disprove a slow leak.",
      aliases: [
        "endurance testing",
        "longevity testing",
        "teste de resistência",
      ],
      confusion:
        "Soak Testing emphasizes duration at sustained load; Spike Testing emphasizes abrupt load transitions.",
    }),
    "pt-BR": content({
      definition:
        "Soak Testing executa representative workload sustentado por longo período para revelar cumulative degradation ausente em testes curtos.",
      purpose:
        "Ele detecta memory e connection leaks, queue drift, storage growth, periodic interference e dependency exhaustion lenta.",
      when: "Execute-o em long-lived services e risky releases por tempo que atravesse cache, rotation, batch, renewal e cleanup cycles.",
      context:
        "Um worker passa load test de trinta minutos, mas retém listeners e cai após dois dias de ordinary traffic.",
      application:
        "O test mantém target load, acompanha memory, handles, latency, backlog e errors, verifica plateau estável e inspeciona resources após shutdown.",
      phrase:
        "Soak Testing deve cobrir o retention cycle suspeito; pico curto e estável não elimina slow leak.",
      aliases: [
        "endurance testing",
        "longevity testing",
        "teste de resistência",
      ],
      confusion:
        "Soak Testing enfatiza duração; Spike Testing enfatiza transições abruptas de load.",
    }),
  },
  "capacity-planning": {
    en: content({
      definition:
        "Capacity Planning forecasts the resources and scaling actions required to meet future workload, performance, availability, and cost objectives with stated headroom and uncertainty.",
      purpose:
        "It prevents demand growth and failure scenarios from surprising finite compute, storage, network, database, dependency, and staffing capacity.",
      when: "Perform it continuously using measured demand, unit-resource relationships, seasonality, business forecasts, lead times, failure reserves, and validated load-test limits.",
      context:
        "Checkout volume is expected to triple during a campaign while one zone may be unavailable and database expansion requires weeks.",
      application:
        "The team models normal and failover demand, converts it to bottleneck resources, reserves headroom, schedules procurement and scaling, defines triggers, and revises forecasts against actuals.",
      phrase:
        "Capacity Planning covers the campaign forecast with one-zone failure headroom and a database expansion lead time.",
      aliases: [
        "capacity forecast",
        "resource planning",
        "planejamento de capacidade",
      ],
      confusion:
        "Capacity Planning determines future resource needs; Autoscaling changes deployed capacity in response to signals within already available limits.",
    }),
    "pt-BR": content({
      definition:
        "Capacity Planning projeta resources e scaling actions necessários para future workload, performance, availability e cost objectives com headroom e uncertainty declarados.",
      purpose:
        "Ele evita que demand growth e failure scenarios surpreendam capacity finita de compute, storage, network, database, dependencies e equipe.",
      when: "Faça-o continuamente com measured demand, unit-resource relations, seasonality, business forecast, lead times, failure reserve e load-test limits.",
      context:
        "Checkout volume triplicará numa campaign enquanto uma zone pode falhar e database expansion leva semanas.",
      application:
        "O time modela normal e failover demand, converte em bottleneck resources, reserva headroom, agenda scaling, define triggers e revisa forecast contra actuals.",
      phrase:
        "Capacity Planning cobre campaign forecast com one-zone failure headroom e database expansion lead time.",
      aliases: [
        "capacity forecast",
        "resource planning",
        "planejamento de capacidade",
      ],
      confusion:
        "Capacity Planning determina future resource needs; Autoscaling altera deployed capacity dentro dos limits disponíveis.",
    }),
  },
};
