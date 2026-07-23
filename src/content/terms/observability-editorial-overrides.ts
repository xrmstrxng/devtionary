import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const observabilityEditorialOverrides: Record<string, EditorialPair> = {
  observability: {
    en: content({
      definition:
        "Observability is a system quality that enables people to understand and investigate a system's internal behavior and state from the telemetry and context it exposes.",
      purpose:
        "It supports answering novel production questions, explaining failure and performance, and connecting technical behavior to user and business impact without predefining every possible issue.",
      when: "Design for Observability in distributed or consequential systems by exposing meaningful events, measures, traces, relationships, configuration, ownership, and safe investigative access.",
      context:
        "Checkout latency rises only for one payment method and region, but aggregate graphs cannot reveal which dependency or request path is responsible.",
      application:
        "The team instruments structured logs, metrics and traces with consistent service, tenant-safe, release, region, and transaction context, then builds query and analysis workflows.",
      phrase:
        "Observability should let us isolate slow checkout traces by provider and deployment without adding a new log statement during the incident.",
      aliases: [
        "system observability",
        "production observability",
        "observabilidade",
      ],
      confusion:
        "Observability is the ability to investigate system behavior broadly; Monitoring checks selected known signals and conditions over time.",
    }),
    "pt-BR": content({
      definition:
        "Observability é uma system quality que permite compreender e investigar internal behavior e state a partir de telemetry e contexto expostos pelo sistema.",
      purpose:
        "Ela ajuda a responder production questions novas, explicar failure e performance e conectar technical behavior a user e business impact sem prever todo issue.",
      when: "Projete Observability em systems distribuídos ou consequentes expondo events, measures, traces, relationships, configuration, ownership e investigative access seguros.",
      context:
        "Checkout latency cresce somente num payment method e region, mas aggregate graphs não revelam dependency ou request path responsável.",
      application:
        "O time instrumenta structured logs, metrics e traces com context consistente de service, tenant seguro, release, region e transaction e cria analysis workflows.",
      phrase:
        "Observability deve isolar slow checkout traces por provider e deployment sem adicionar log durante incident.",
      aliases: [
        "system observability",
        "production observability",
        "observabilidade",
      ],
      confusion:
        "Observability é capacidade ampla de investigar behavior; Monitoring verifica known signals e conditions selecionados ao longo do tempo.",
    }),
  },
  monitoring: {
    en: content({
      definition:
        "Monitoring is the continuous collection, evaluation, and presentation of selected system or business signals to track health, performance, capacity, behavior, and known failure conditions.",
      purpose:
        "It provides ongoing awareness and timely detection against expected operation, enabling response before or while users and objectives are materially affected.",
      when: "Monitor important user outcomes, service objectives, dependencies, capacity, and risks, choosing actionable signals and maintaining thresholds as systems and baselines change.",
      context:
        "A payment API can remain technically reachable while authorization success collapses for one provider, harming customers before support tickets accumulate.",
      application:
        "The team monitors request outcomes by provider and region, latency distribution, saturation, queue delay, business completion, and SLO burn with owned dashboards and alerts.",
      phrase:
        "Monitoring availability alone misses this failure; track successful payment outcomes and error-budget consumption by provider.",
      aliases: ["system monitoring", "production monitoring", "monitoração"],
      confusion:
        "Monitoring watches defined signals and known conditions; Observability supports open-ended investigation of internal behavior using rich telemetry.",
    }),
    "pt-BR": content({
      definition:
        "Monitoring é a coleta, avaliação e apresentação contínuas de system ou business signals selecionados para acompanhar health, performance, capacity e known failures.",
      purpose:
        "Ele fornece awareness contínuo e detection oportuno contra operação esperada, permitindo response antes ou durante impact relevante.",
      when: "Monitore user outcomes, service objectives, dependencies, capacity e risks importantes, escolhendo actionable signals e mantendo thresholds conforme baselines mudam.",
      context:
        "Uma payment API permanece reachable enquanto authorization success cai num provider, afetando clientes antes de support tickets.",
      application:
        "O time monitora request outcomes por provider e region, latency distribution, saturation, queue delay, business completion e SLO burn com dashboards e alerts owned.",
      phrase:
        "Monitoring só de availability perde essa failure; acompanhe payment outcomes e error-budget consumption por provider.",
      aliases: ["system monitoring", "production monitoring", "monitoração"],
      confusion:
        "Monitoring acompanha defined signals e known conditions; Observability permite investigação aberta por telemetry rica.",
    }),
  },
  logging: {
    en: content({
      definition:
        "Logging is the practice of emitting timestamped event records about software execution, decisions, state transitions, errors, and operational context for later inspection and analysis.",
      purpose:
        "It creates a durable narrative of discrete behavior that supports debugging, audit, security, incident response, and understanding of paths not captured by aggregate measures.",
      when: "Log meaningful events at appropriate levels and boundaries, using structured fields, correlation, retention, sampling, redaction, access control, and volume limits deliberately.",
      context:
        "A refund occasionally remains pending, and engineers need to reconstruct validation, provider request, response, retry, and state transition for one transaction.",
      application:
        "The service emits structured lifecycle events with operation, safe transaction identifier, outcome, duration, provider, retry count, release and trace context while excluding secrets and personal data.",
      phrase:
        "Logging the refund state transition and provider outcome is useful; logging the customer's full payment payload is unsafe.",
      aliases: ["application logging", "event logging", "registro de logs"],
      confusion:
        "Logging records discrete events and context; Tracing connects timed operations across a request or workflow path.",
    }),
    "pt-BR": content({
      definition:
        "Logging é a prática de emitir event records com timestamp sobre execution, decisions, state transitions, errors e operational context para inspeção posterior.",
      purpose:
        "Ela cria narrativa durável de behavior discreto que apoia debugging, audit, security, incident response e paths não capturados por aggregate measures.",
      when: "Registre events significativos em levels e boundaries adequados, usando structured fields, correlation, retention, sampling, redaction, access control e volume limits.",
      context:
        "Um refund fica pending ocasionalmente e engineers precisam reconstruir validation, provider request, response, retry e state transition de uma transaction.",
      application:
        "O service emite lifecycle events estruturados com operation, safe transaction ID, outcome, duration, provider, retry count, release e trace context sem secrets ou personal data.",
      phrase:
        "Logging de refund state transition e provider outcome ajuda; registrar full payment payload do cliente é inseguro.",
      aliases: ["application logging", "event logging", "registro de logs"],
      confusion:
        "Logging registra events e contexto discretos; Tracing conecta timed operations através de request ou workflow path.",
    }),
  },
  metrics: {
    en: content({
      definition:
        "Metrics are numerical measurements aggregated over time and dimensions to represent system, process, or business behavior such as counts, rates, distributions, levels, and utilization.",
      purpose:
        "They make trends, baselines, objectives, anomalies, capacity, and comparative behavior efficient to monitor and analyze at scale.",
      when: "Create Metrics for meaningful behavior that benefits from aggregation, selecting type, unit, dimensions, temporality, cardinality, ownership, and interpretation carefully.",
      context:
        "A service needs to know request volume, success rate, latency percentiles, active work, queue depth, and resource saturation by stable operational dimensions.",
      application:
        "The team instruments counters, histograms and gauges with documented units and bounded labels, builds SLI queries, tests resets and aggregation, and sets retention.",
      phrase:
        "Use a latency histogram Metric so percentiles can be aggregated; an average hides the slow tail affecting customers.",
      aliases: ["system metrics", "telemetry metrics", "métricas"],
      confusion:
        "Metrics aggregate numerical behavior efficiently; logs preserve discrete event records with richer per-event context.",
    }),
    "pt-BR": content({
      definition:
        "Metrics são measurements numéricas agregadas por tempo e dimensions para representar system, process ou business behavior como counts, rates, distributions, levels e utilization.",
      purpose:
        "Elas tornam trends, baselines, objectives, anomalies, capacity e comparative behavior eficientes para monitoring e analysis em escala.",
      when: "Crie Metrics para behavior que se beneficie de aggregation, escolhendo type, unit, dimensions, temporality, cardinality, ownership e interpretation cuidadosamente.",
      context:
        "Um service mede request volume, success rate, latency percentiles, active work, queue depth e resource saturation por dimensions estáveis.",
      application:
        "O time instrumenta counters, histograms e gauges com units documentadas e bounded labels, cria SLI queries, testa resets e aggregation e define retention.",
      phrase:
        "Use latency histogram Metric para percentiles agregáveis; average esconde slow tail que afeta clientes.",
      aliases: ["system metrics", "telemetry metrics", "métricas"],
      confusion:
        "Metrics agregam numerical behavior eficientemente; logs preservam event records discretos com contexto por event.",
    }),
  },
  tracing: {
    en: content({
      definition:
        "Tracing is the instrumentation and analysis of timed operations and causal relationships along the execution path of a request, transaction, or workflow.",
      purpose:
        "It reveals where time is spent, which operations depend on one another, how errors propagate, and which path an individual execution took.",
      when: "Use Tracing for multi-stage or latency-sensitive behavior, propagating context safely and sampling with enough coverage for failures, rare paths, and cost constraints.",
      context:
        "A checkout request crosses authentication, pricing, inventory, payment, and notification, but only some requests experience several seconds of delay.",
      application:
        "Each operation creates a span with timing, status, stable attributes and parent context; the backend joins them into traces and retains errors and representative samples.",
      phrase:
        "Tracing shows the slow requests waiting in inventory reservation, while aggregate API latency alone cannot identify that span.",
      aliases: ["request tracing", "transaction tracing", "rastreamento"],
      confusion:
        "Tracing models a timed execution path; Distributed Tracing propagates and joins that path across process, service, or network boundaries.",
    }),
    "pt-BR": content({
      definition:
        "Tracing é a instrumentação e análise de timed operations e causal relationships ao longo do execution path de request, transaction ou workflow.",
      purpose:
        "Ele revela onde tempo é gasto, quais operations dependem entre si, como errors propagam e qual path uma execution individual percorreu.",
      when: "Use Tracing em behavior multi-stage ou latency-sensitive, propagando context com segurança e usando sampling suficiente para failures, rare paths e cost constraints.",
      context:
        "Um checkout request cruza authentication, pricing, inventory, payment e notification, mas somente alguns requests demoram segundos.",
      application:
        "Cada operation cria span com timing, status, stable attributes e parent context; backend une traces e retém errors e representative samples.",
      phrase:
        "Tracing mostra slow requests esperando inventory reservation; aggregate API latency não identifica esse span.",
      aliases: ["request tracing", "transaction tracing", "rastreamento"],
      confusion:
        "Tracing modela timed execution path; Distributed Tracing propaga e une esse path entre process, service ou network boundaries.",
    }),
  },
  "distributed-tracing": {
    en: content({
      definition:
        "Distributed Tracing is the practice of propagating trace context and joining spans across services, processes, queues, and network boundaries to reconstruct an end-to-end execution path.",
      purpose:
        "It exposes cross-service latency, dependency behavior, fan-out, asynchronous transitions, retries, and error propagation that no single component can observe alone.",
      when: "Use it in distributed systems where requests or workflows cross boundaries, standardizing propagation, attributes, sampling, trust boundaries, clock handling, and retention.",
      context:
        "An order starts in an API, calls inventory and payment, publishes an event, resumes in fulfillment, and occasionally misses its delivery objective.",
      application:
        "Services propagate safe trace identifiers through HTTP and message metadata, create correctly parented or linked spans, record status and dimensions, and export them to one trace backend.",
      phrase:
        "Distributed Tracing links the original order request to the later fulfillment consumer even though a queue separates their execution.",
      aliases: [
        "end-to-end tracing",
        "cross-service tracing",
        "rastreamento distribuído",
      ],
      confusion:
        "Distributed Tracing follows one causal execution across boundaries; service dependency mapping aggregates relationships across many executions.",
    }),
    "pt-BR": content({
      definition:
        "Distributed Tracing é a prática de propagar trace context e unir spans entre services, processes, queues e network boundaries para reconstruir execution path end-to-end.",
      purpose:
        "Ele expõe cross-service latency, dependency behavior, fan-out, async transitions, retries e error propagation que nenhum component observa sozinho.",
      when: "Use-o em distributed systems cujos requests ou workflows cruzem boundaries, padronizando propagation, attributes, sampling, trust boundaries, clocks e retention.",
      context:
        "Um order nasce numa API, chama inventory e payment, publica event, continua em fulfillment e às vezes perde delivery objective.",
      application:
        "Services propagam safe trace IDs por HTTP e message metadata, criam spans parented ou linked corretamente, registram status e exportam a um trace backend.",
      phrase:
        "Distributed Tracing liga original order request ao fulfillment consumer posterior mesmo com queue entre executions.",
      aliases: [
        "end-to-end tracing",
        "cross-service tracing",
        "rastreamento distribuído",
      ],
      confusion:
        "Distributed Tracing acompanha uma causal execution entre boundaries; service dependency map agrega relationships de muitas executions.",
    }),
  },
  telemetry: {
    en: content({
      definition:
        "Telemetry is data emitted or collected from running systems and environments to represent their behavior, state, usage, performance, and operational conditions remotely.",
      purpose:
        "It supplies the raw evidence for monitoring, observability, analytics, security, capacity, and product learning without requiring direct inspection of each instance.",
      when: "Design Telemetry for meaningful questions and obligations, governing collection, semantics, correlation, quality, sampling, cost, privacy, access, retention, and deletion.",
      context:
        "A globally deployed client and backend need to reveal feature use, failures, latency, device conditions, and release impact without collecting unnecessary personal information.",
      application:
        "The team defines an event and metric schema, stable resource context, consent and redaction, trace correlation, quality checks, sampling, routing, retention, and ownership.",
      phrase:
        "Telemetry should record the checkout step and safe error class, not the customer's card or free-form personal data.",
      aliases: ["operational telemetry", "application telemetry", "telemetria"],
      confusion:
        "Telemetry is the emitted or collected operational data; Observability is the system quality enabled by useful telemetry, tools, and investigative practices.",
    }),
    "pt-BR": content({
      definition:
        "Telemetry são dados emitidos ou coletados de systems e environments em execução para representar behavior, state, usage, performance e operational conditions remotamente.",
      purpose:
        "Ela fornece raw evidence para monitoring, observability, analytics, security, capacity e product learning sem inspeção direta de cada instance.",
      when: "Projete Telemetry para questions e obligations relevantes, governando collection, semantics, correlation, quality, sampling, cost, privacy, access, retention e deletion.",
      context:
        "Um client e backend globais revelam feature use, failures, latency, device conditions e release impact sem personal data desnecessária.",
      application:
        "O time define event e metric schema, stable resource context, consent e redaction, trace correlation, quality checks, sampling, routing, retention e ownership.",
      phrase:
        "Telemetry deve registrar checkout step e safe error class, não card nem free-form personal data do cliente.",
      aliases: ["operational telemetry", "application telemetry", "telemetria"],
      confusion:
        "Telemetry é operational data emitida ou coletada; Observability é quality habilitada por telemetry útil, tools e investigative practices.",
    }),
  },
  dashboard: {
    en: content({
      definition:
        "A Dashboard is a purpose-built visual interface that combines selected measures, states, trends, and context to support monitoring, analysis, or decisions for a defined audience.",
      purpose:
        "It creates a shared, quickly interpretable view of what matters now and over time, reducing the effort to assemble common operational or business questions repeatedly.",
      when: "Build one for recurring decisions or monitoring tasks, defining audience and questions first and maintaining data semantics, freshness, thresholds, ownership, and links to deeper investigation.",
      context:
        "An incident commander needs one view of customer impact, SLO burn, regional traffic, release markers, dependency health, and mitigation progress.",
      application:
        "The team organizes panels by user outcome and diagnostic layer, uses meaningful units and distributions, annotates changes, shows freshness and gaps, and links traces, logs, and runbooks.",
      phrase:
        "The Dashboard should lead with failed payment outcomes and SLO burn, not a wall of host CPU charts.",
      aliases: ["monitoring dashboard", "operations dashboard", "painel"],
      confusion:
        "A Dashboard presents a curated view for recurring questions; an exploratory query or notebook supports open-ended analysis that may change each time.",
    }),
    "pt-BR": content({
      definition:
        "Dashboard é uma interface visual criada para combinar measures, states, trends e context selecionados e apoiar monitoring, analysis ou decisions de audience definido.",
      purpose:
        "Ele cria visão compartilhada e rapidamente interpretável do que importa agora e no tempo, reduzindo montagem repetida de operational ou business questions.",
      when: "Crie-o para decisions ou monitoring tasks recorrentes, definindo audience e questions primeiro e mantendo data semantics, freshness, thresholds, ownership e links.",
      context:
        "Uma incident commander precisa de customer impact, SLO burn, regional traffic, release markers, dependency health e mitigation progress numa view.",
      application:
        "O time organiza panels por user outcome e diagnostic layer, usa units e distributions, anota changes, mostra freshness e gaps e liga traces, logs e runbooks.",
      phrase:
        "O Dashboard deve começar por failed payment outcomes e SLO burn, não por uma parede de host CPU charts.",
      aliases: ["monitoring dashboard", "operations dashboard", "painel"],
      confusion:
        "Dashboard apresenta view curada para recurring questions; exploratory query ou notebook apoia analysis aberta que muda a cada uso.",
    }),
  },
  alert: {
    en: content({
      definition:
        "An Alert is a notification generated when observed evidence satisfies a defined condition that warrants human or automated attention.",
      purpose:
        "It draws timely attention to potential or actual impact so an accountable responder can assess, mitigate, escalate, or confirm that no action is necessary.",
      when: "Create an Alert for actionable, consequential conditions with clear owner, urgency, evidence, context, response guidance, suppression, and resolution behavior.",
      context:
        "Payment success falls rapidly below the service objective in one region and will exhaust the monthly error budget within an hour.",
      application:
        "The alert includes affected service and region, current and expected burn, customer impact, start time, recent release, dashboard, trace examples, runbook, routing, and deduplication key.",
      phrase:
        "This Alert pages on fast error-budget burn because waiting for a fixed error count would miss low-traffic but severe regional failures.",
      aliases: ["monitoring alert", "operational alert", "alerta"],
      confusion:
        "An Alert is the individual attention signal produced by a condition; Alerting is the system and practice that detects, routes, groups, escalates, and manages such signals.",
    }),
    "pt-BR": content({
      definition:
        "Alert é uma notification gerada quando evidence observada satisfaz condition definida que exige atenção humana ou automatizada.",
      purpose:
        "Ele chama atenção oportuna a impact potencial ou real para responder avaliar, mitigar, escalar ou confirmar que nenhuma action é necessária.",
      when: "Crie Alert para conditions acionáveis e consequentes com owner, urgency, evidence, context, response guidance, suppression e resolution behavior claros.",
      context:
        "Payment success cai abaixo do service objective numa region e esgotará monthly error budget em uma hora.",
      application:
        "O alert inclui service e region, burn atual e previsto, customer impact, start time, recent release, dashboard, trace examples, runbook, routing e dedup key.",
      phrase:
        "Este Alert chama por fast error-budget burn porque fixed error count perderia failure regional de baixo traffic.",
      aliases: ["monitoring alert", "operational alert", "alerta"],
      confusion:
        "Alert é o attention signal individual; Alerting é system e prática que detecta, routes, groups, escalates e administra signals.",
    }),
  },
  alerting: {
    en: content({
      definition:
        "Alerting is the end-to-end practice and system for evaluating telemetry conditions, creating signals, grouping and routing them, notifying responders, escalating, and tracking resolution.",
      purpose:
        "It connects meaningful detection to timely accountable response while controlling noise, duplication, missed coverage, fatigue, and unsafe automation.",
      when: "Design Alerting around user impact, service objectives, known critical risks, and operational responsibilities, reviewing signal quality and response evidence continuously.",
      context:
        "A platform emits hundreds of threshold notifications during one dependency outage, waking several teams without identifying the responsible service or customer impact.",
      application:
        "The organization defines symptom-based rules, severity and routing, ownership schedules, grouping and inhibition, escalation, runbook links, maintenance windows, test drills, and alert-quality reviews.",
      phrase:
        "Improve Alerting by grouping downstream symptoms under the provider incident and paging only the team able to act.",
      aliases: [
        "alert management",
        "notification alerting",
        "sistema de alertas",
      ],
      confusion:
        "Alerting manages actionable attention and response; Monitoring is the broader observation of selected signals and conditions, many of which need no notification.",
    }),
    "pt-BR": content({
      definition:
        "Alerting é a prática e system end-to-end para avaliar telemetry conditions, criar signals, agrupar e fazer routing, notificar responders, escalar e acompanhar resolution.",
      purpose:
        "Ele conecta detection significativa a accountable response oportuna enquanto controla noise, duplication, missed coverage, fatigue e unsafe automation.",
      when: "Projete Alerting em torno de user impact, service objectives, critical risks e operational responsibilities, revisando signal quality e response evidence continuamente.",
      context:
        "Uma platform emite centenas de threshold notifications durante dependency outage, acordando times sem indicar owner ou customer impact.",
      application:
        "A organização define symptom-based rules, severity e routing, ownership schedules, grouping e inhibition, escalation, runbooks, maintenance windows e quality reviews.",
      phrase:
        "Melhore Alerting agrupando downstream symptoms no provider incident e chamando somente o time capaz de agir.",
      aliases: [
        "alert management",
        "notification alerting",
        "sistema de alertas",
      ],
      confusion:
        "Alerting administra attention e response; Monitoring é observation ampla de signals e conditions, muitos sem notification.",
    }),
  },
  "log-level": {
    en: content({
      definition:
        "A Log Level is a severity or intent classification attached to a log event to indicate its operational significance and support filtering, routing, retention, and response.",
      purpose:
        "It helps separate routine diagnostic detail from noteworthy conditions and failures so operators can control volume and focus without losing event meaning.",
      when: "Assign levels using documented semantics based on expected action and system outcome, not developer emotion, and avoid logging normal client behavior as server failure.",
      context:
        "A service logs every invalid password as an error, flooding incident views and hiding actual authentication database failures.",
      application:
        "The team defines trace and debug for diagnosis, info for meaningful lifecycle events, warn for recoverable risk, and error for failed operations needing investigation, with examples and tests.",
      phrase:
        "An invalid user credential is an expected outcome at Info or Warn; loss of the credential store is an Error.",
      aliases: ["logging level", "log severity", "nível de log"],
      confusion:
        "A Log Level classifies an event's significance; incident severity classifies operational impact and response urgency across the whole event.",
    }),
    "pt-BR": content({
      definition:
        "Log Level é uma classificação de severity ou intent anexada a log event para indicar operational significance e apoiar filtering, routing, retention e response.",
      purpose:
        "Ele separa diagnostic detail rotineiro de conditions e failures relevantes para operators controlarem volume e foco sem perder meaning.",
      when: "Atribua levels por semantics documentadas de expected action e system outcome, não emoção, e não registre client behavior normal como server failure.",
      context:
        "Um service registra cada invalid password como error, inundando incident views e escondendo authentication database failures reais.",
      application:
        "O time define trace e debug para diagnosis, info para lifecycle events, warn para recoverable risk e error para failed operations, com examples e tests.",
      phrase:
        "Invalid user credential é expected outcome em Info ou Warn; perda do credential store é Error.",
      aliases: ["logging level", "log severity", "nível de log"],
      confusion:
        "Log Level classifica significance de event; incident severity classifica operational impact e response urgency do evento amplo.",
    }),
  },
  "structured-logging": {
    en: content({
      definition:
        "Structured Logging is the emission of log events as machine-parseable records with named fields and stable schemas instead of relying primarily on unstructured prose.",
      purpose:
        "It enables reliable search, filtering, aggregation, correlation, redaction, routing, and analysis across services and large event volumes.",
      when: "Use it for production software, defining common event and resource fields, bounded values, schema evolution, privacy, and human-readable messages alongside structured context.",
      context:
        "Engineers cannot consistently find failed refunds because each service writes transaction, provider, duration, and error information in a different sentence format.",
      application:
        "Services emit JSON-compatible records with event name, timestamp, level, service, operation, safe transaction ID, outcome, error class, duration, release and trace IDs.",
      phrase:
        "Structured Logging lets us query outcome=failed and provider=x without parsing five different message sentences.",
      aliases: ["structured logs", "semantic logging", "logs estruturados"],
      confusion:
        "Structured Logging defines machine-readable event records; a log format defines serialization and can still contain poorly governed or inconsistent fields.",
    }),
    "pt-BR": content({
      definition:
        "Structured Logging é a emissão de log events como records machine-parseable com named fields e stable schemas em vez de depender de prose não estruturada.",
      purpose:
        "Ela permite search, filtering, aggregation, correlation, redaction, routing e analysis confiáveis entre services e grande event volume.",
      when: "Use-a em production software, definindo event e resource fields comuns, bounded values, schema evolution, privacy e human-readable messages com context estruturado.",
      context:
        "Engineers não encontram failed refunds porque cada service escreve transaction, provider, duration e error em sentence format diferente.",
      application:
        "Services emitem records JSON-compatible com event name, timestamp, level, service, operation, safe transaction ID, outcome, error class, duration, release e trace IDs.",
      phrase:
        "Structured Logging permite query outcome=failed e provider=x sem parsing de cinco message sentences.",
      aliases: ["structured logs", "semantic logging", "logs estruturados"],
      confusion:
        "Structured Logging define event records machine-readable; log format define serialization e ainda pode conter fields inconsistentes.",
    }),
  },
  "correlation-id": {
    en: content({
      definition:
        "A Correlation ID is an identifier attached to related events, messages, or operations so records belonging to the same business interaction or investigation can be found across boundaries.",
      purpose:
        "It links otherwise separate telemetry and processing records when one logical activity spans requests, retries, asynchronous steps, systems, or support channels.",
      when: "Use one for a meaningful correlation scope, generate or validate it at a trust boundary, propagate it consistently, avoid sensitive meaning, and distinguish it from unique event IDs.",
      context:
        "A customer support case refers to one order that produced several HTTP requests, queue messages, provider calls, and retries across services.",
      application:
        "The edge creates a safe order-interaction ID, services carry it in approved headers and message metadata, logs index it, and responses expose a support-safe reference.",
      phrase:
        "Search the Correlation ID to collect all attempts for this checkout, then use each Trace ID to inspect an individual execution path.",
      aliases: [
        "correlation identifier",
        "request correlation id",
        "identificador de correlação",
      ],
      confusion:
        "A Correlation ID can group several related executions under a business interaction; a Trace ID identifies one distributed trace and its spans.",
    }),
    "pt-BR": content({
      definition:
        "Correlation ID é um identifier anexado a events, messages ou operations relacionados para encontrar records da mesma business interaction ou investigation entre boundaries.",
      purpose:
        "Ele liga telemetry e processing records separados quando uma logical activity atravessa requests, retries, async steps, systems ou support channels.",
      when: "Use-o para correlation scope significativo, gere ou valide em trust boundary, propague consistentemente, evite sensitive meaning e diferencie de unique event IDs.",
      context:
        "Um support case refere-se a order que produziu vários HTTP requests, queue messages, provider calls e retries entre services.",
      application:
        "O edge cria safe order-interaction ID, services propagam em approved headers e message metadata, logs indexam e response expõe support reference.",
      phrase:
        "Busque Correlation ID para reunir attempts do checkout e use cada Trace ID para execution path individual.",
      aliases: [
        "correlation identifier",
        "request correlation id",
        "identificador de correlação",
      ],
      confusion:
        "Correlation ID agrupa executions relacionadas numa business interaction; Trace ID identifica um distributed trace e seus spans.",
    }),
  },
  "trace-id": {
    en: content({
      definition:
        "A Trace ID is the identifier shared by all spans that belong to one trace, allowing a tracing system to assemble a single end-to-end execution across instrumentation boundaries.",
      purpose:
        "It provides the lookup and grouping key for reconstructing an individual request or workflow path and correlating its operations with logs and other telemetry.",
      when: "Generate it at the trace root, propagate it using a supported context format, validate untrusted input, record it consistently, and avoid using it as authorization or business identity.",
      context:
        "One checkout crosses eight services and a queue, and an engineer needs every span from the slow customer request rather than aggregate behavior.",
      application:
        "Tracing instrumentation creates a random trace identifier, propagates it with span context, includes it in structured logs, and exposes a safe diagnostic reference.",
      phrase:
        "Open this Trace ID to see the exact provider call and queue span responsible for the slow checkout.",
      aliases: [
        "trace identifier",
        "distributed trace id",
        "identificador de trace",
      ],
      confusion:
        "A Trace ID groups all spans in one trace; a Span ID uniquely identifies one operation within that trace.",
    }),
    "pt-BR": content({
      definition:
        "Trace ID é o identifier compartilhado por todos os spans de um trace, permitindo ao tracing system montar uma execution end-to-end entre instrumentation boundaries.",
      purpose:
        "Ele fornece lookup e grouping key para reconstruir request ou workflow path individual e correlacionar operations com logs e outra telemetry.",
      when: "Gere-o no trace root, propague por context format suportado, valide untrusted input, registre consistentemente e não use como authorization ou business identity.",
      context:
        "Um checkout cruza oito services e queue e engineer precisa de cada span do slow customer request, não aggregate behavior.",
      application:
        "Tracing instrumentation cria random trace identifier, propaga com span context, inclui em structured logs e expõe safe diagnostic reference.",
      phrase:
        "Abra este Trace ID para ver provider call e queue span responsáveis pelo slow checkout.",
      aliases: [
        "trace identifier",
        "distributed trace id",
        "identificador de trace",
      ],
      confusion:
        "Trace ID agrupa todos os spans num trace; Span ID identifica unicamente uma operation dentro dele.",
    }),
  },
  "service-level-indicator": {
    en: content({
      definition:
        "A Service Level Indicator is a quantitative measure of a defined aspect of service behavior, such as the proportion of valid requests that complete successfully within a latency threshold.",
      purpose:
        "It translates user-relevant reliability into a repeatable measurement that can be compared with an objective and used for error budgets, alerts, and improvement.",
      when: "Define an SLI for service behavior users care about, specifying event, valid population, good criteria, data source, aggregation, exclusions, gaps, and ownership.",
      context:
        "A checkout service needs a reliability measure that distinguishes successful customer payments from reachable health checks and invalid client requests.",
      application:
        "The team defines valid checkout attempts, counts those confirmed within two seconds as good, divides good by valid events, validates telemetry, and segments critical regions.",
      phrase:
        "Our Service Level Indicator measures valid checkouts completed within two seconds, not server uptime or average latency.",
      aliases: [
        "sli",
        "service reliability indicator",
        "indicador de nível de serviço",
      ],
      confusion:
        "An SLI is the measured service behavior; an SLO sets the target range or proportion that indicator should achieve over a period.",
    }),
    "pt-BR": content({
      definition:
        "Service Level Indicator é uma measure quantitativa de behavior definido do serviço, como a proporção de valid requests concluídos com sucesso num latency threshold.",
      purpose:
        "Ele traduz reliability relevante ao usuário numa medição repetível comparável a objective e usada em error budgets, alerts e improvement.",
      when: "Defina SLI para service behavior importante ao usuário, especificando event, valid population, good criteria, data source, aggregation, exclusions, gaps e ownership.",
      context:
        "Um checkout service precisa de reliability measure que distinga successful customer payments de health checks e invalid client requests.",
      application:
        "O time define valid checkout attempts, conta os confirmados em dois segundos como good, divide good por valid events, valida telemetry e segmenta regions.",
      phrase:
        "Nosso Service Level Indicator mede valid checkouts em dois segundos, não server uptime nem average latency.",
      aliases: [
        "sli",
        "service reliability indicator",
        "indicador de nível de serviço",
      ],
      confusion:
        "SLI é service behavior medido; SLO define target que esse indicator deve atingir num período.",
    }),
  },
  "service-level-objective": {
    en: content({
      definition:
        "A Service Level Objective is a target value or range for a Service Level Indicator over a defined measurement window, representing the intended reliability of a service behavior.",
      purpose:
        "It creates an explicit balance between reliability and change, guiding engineering priorities, error budgets, alerting, capacity, and stakeholder expectations.",
      when: "Set an SLO for mature user-relevant service behavior with a trustworthy SLI, choosing target and window from user needs, risk, cost, dependencies, and current capability.",
      context:
        "A payment API needs a reliability commitment that tolerates some failure while protecting merchants from sustained or concentrated disruption.",
      application:
        "The team targets 99.95% of valid payment attempts succeeding within two seconds over 28 days, defines exclusions and reporting, tracks burn, and reviews the target periodically.",
      phrase:
        "The Service Level Objective is 99.95% good payments over 28 days; the remaining fraction forms the error budget.",
      aliases: [
        "slo",
        "service reliability objective",
        "objetivo de nível de serviço",
      ],
      confusion:
        "An SLO is an internal reliability target for an SLI; an SLA is an agreement with external consequences and may contain several commitments.",
    }),
    "pt-BR": content({
      definition:
        "Service Level Objective é um target value ou range para Service Level Indicator numa measurement window definida, representando reliability pretendida de service behavior.",
      purpose:
        "Ele explicita o equilíbrio entre reliability e change e orienta engineering priorities, error budgets, alerting, capacity e stakeholder expectations.",
      when: "Defina SLO para service behavior maduro e user-relevant com SLI confiável, escolhendo target e window por user needs, risk, cost, dependencies e capability.",
      context:
        "Uma payment API precisa de reliability commitment que tolere alguma failure e proteja merchants contra disruption sustentada.",
      application:
        "O time busca 99,95% de valid payment attempts bem-sucedidos em dois segundos por 28 dias, define exclusions, acompanha burn e revisa target.",
      phrase:
        "O Service Level Objective é 99,95% de good payments em 28 dias; a fração restante forma error budget.",
      aliases: [
        "slo",
        "service reliability objective",
        "objetivo de nível de serviço",
      ],
      confusion:
        "SLO é internal reliability target de um SLI; SLA é agreement com external consequences e pode conter vários commitments.",
    }),
  },
  "error-budget": {
    en: content({
      definition:
        "An Error Budget is the permitted amount of service behavior that may fail to meet an SLO during its measurement window, derived from the gap between the objective and perfect reliability.",
      purpose:
        "It turns reliability tolerance into a shared decision mechanism for balancing feature velocity, maintenance, risk, incident response, and reliability investment.",
      when: "Use it with a defined SLI and SLO, tracking both remaining budget and burn rate and agreeing policies for normal, rapid, or exhausted consumption.",
      context:
        "A team wants to release frequently but has recently caused repeated checkout failures and lacks an objective rule for slowing change.",
      application:
        "The service computes bad events against the 28-day allowance, alerts on fast and slow burn, reviews causes, and pauses risky releases when the agreed policy is breached.",
      phrase:
        "We consumed half the monthly Error Budget in two hours, so the policy pauses nonessential rollout while reliability is restored.",
      aliases: ["slo error budget", "reliability budget", "orçamento de erro"],
      confusion:
        "An Error Budget is an allowed reliability shortfall; a financial budget allocates money and is unrelated unless a team explicitly translates impact into cost.",
    }),
    "pt-BR": content({
      definition:
        "Error Budget é a quantidade permitida de service behavior que pode não cumprir SLO durante measurement window, derivada da diferença entre objective e reliability perfeita.",
      purpose:
        "Ele transforma reliability tolerance em decision mechanism para equilibrar feature velocity, maintenance, risk, incident response e reliability investment.",
      when: "Use-o com SLI e SLO definidos, acompanhando remaining budget e burn rate e acordando policies para consumo normal, rápido ou esgotado.",
      context:
        "Um time quer releases frequentes, mas causou checkout failures repetidas e não possui regra objetiva para desacelerar change.",
      application:
        "O service calcula bad events contra allowance de 28 dias, alerta fast e slow burn, revisa causes e pausa risky releases conforme policy.",
      phrase:
        "Consumimos metade do Error Budget mensal em duas horas; a policy pausa rollout não essencial enquanto reliability é restaurada.",
      aliases: ["slo error budget", "reliability budget", "orçamento de erro"],
      confusion:
        "Error Budget é reliability shortfall permitido; financial budget aloca dinheiro e não é relacionado sem tradução explícita.",
    }),
  },
  "mean-time-to-detect": {
    en: content({
      definition:
        "Mean Time to Detect is the arithmetic average elapsed time between the start of incidents or failures and their detection over a defined set and period.",
      purpose:
        "It summarizes detection delay to help evaluate monitoring coverage and how long harmful conditions can persist before response begins.",
      when: "Use MTTD across comparable incident classes with reliable start and detection timestamps, reporting distributions and outliers because the mean alone can hide severe delays.",
      context:
        "Customer-impacting data delays often begin overnight but are discovered from support messages the next business morning.",
      application:
        "The reliability team defines incident start and detection events, calculates each delay, segments by severity and detection source, reports median and percentiles with MTTD, and improves signals.",
      phrase:
        "Mean Time to Detect fell after freshness monitoring, but inspect the longest delays to ensure weekend coverage improved too.",
      aliases: ["mttd", "average detection time", "tempo médio para detectar"],
      confusion:
        "MTTD measures delay until detection; MTTR measures delay until recovery or restoration according to the organization's defined endpoint.",
    }),
    "pt-BR": content({
      definition:
        "Mean Time to Detect é a arithmetic average do elapsed time entre início de incidents ou failures e sua detection num conjunto e período definidos.",
      purpose:
        "Ele resume detection delay para avaliar monitoring coverage e quanto tempo harmful conditions persistem antes de response começar.",
      when: "Use MTTD em incident classes comparáveis com start e detection timestamps confiáveis, reportando distributions e outliers porque mean esconde delays graves.",
      context:
        "Customer-impacting data delays começam à noite e são descobertos por support messages no próximo business day.",
      application:
        "Reliability team define incident start e detection events, calcula delay, segmenta severity e source, reporta median e percentiles com MTTD e melhora signals.",
      phrase:
        "Mean Time to Detect caiu com freshness monitoring, mas examine longest delays para confirmar weekend coverage.",
      aliases: ["mttd", "average detection time", "tempo médio para detectar"],
      confusion:
        "MTTD mede delay até detection; MTTR mede delay até recovery ou restoration conforme endpoint definido.",
    }),
  },
  "mean-time-to-recovery": {
    en: content({
      definition:
        "Mean Time to Recovery is the arithmetic average elapsed time from the start of incidents or service failures until an agreed recovery state is restored over a defined set and period.",
      purpose:
        "It summarizes how quickly an organization limits and restores disrupted service, guiding improvements in detection, diagnosis, mitigation, decision-making, and recovery capability.",
      when: "Use MTTR for comparable incidents with explicit start and recovery definitions, pairing the mean with distributions, severity, partial recovery, and customer-impact duration.",
      context:
        "A service's incidents vary from quick automated failover to long database restoration, and leadership needs evidence about recovery capability rather than anecdote.",
      application:
        "The team timestamps impact start and verified SLO restoration, calculates durations by incident class, examines median and tail, and targets slow diagnosis and access dependencies.",
      phrase:
        "Mean Time to Recovery improved, but one severe database event dominated customer impact and needs separate analysis.",
      aliases: [
        "mttr",
        "mean time to restore",
        "average recovery time",
        "tempo médio para recuperação",
      ],
      confusion:
        "MTTR is ambiguous across organizations and may mean recovery, restore, repair, or resolve; define the endpoint explicitly whenever reporting it.",
    }),
    "pt-BR": content({
      definition:
        "Mean Time to Recovery é a arithmetic average do elapsed time desde o início de incidents ou service failures até restaurar recovery state acordado num conjunto e período.",
      purpose:
        "Ele resume a rapidez para limitar e restaurar disrupted service e orienta melhoria em detection, diagnosis, mitigation, decisions e recovery capability.",
      when: "Use MTTR em incidents comparáveis com definições explícitas de start e recovery, combinando mean com distributions, severity, partial recovery e impact duration.",
      context:
        "Incidents variam de automated failover rápido a database restoration longa e leadership precisa de evidence de recovery capability.",
      application:
        "O time marca impact start e verified SLO restoration, calcula durations por incident class, examina median e tail e trata slow diagnosis e access dependencies.",
      phrase:
        "Mean Time to Recovery melhorou, mas um severe database event dominou customer impact e exige analysis separada.",
      aliases: [
        "mttr",
        "mean time to restore",
        "average recovery time",
        "tempo médio para recuperação",
      ],
      confusion:
        "MTTR é ambíguo e pode significar recovery, restore, repair ou resolve; defina endpoint explicitamente ao reportar.",
    }),
  },
  incident: {
    en: content({
      definition:
        "An Incident is an unplanned event or condition that disrupts or threatens expected service, security, safety, compliance, data integrity, or business operation and requires coordinated response.",
      purpose:
        "Declaring an incident creates shared urgency, ownership, communication, evidence preservation, and a response structure proportional to actual or potential impact.",
      when: "Declare one when defined impact or risk thresholds are met, even before the cause is known, assigning severity and leadership and updating classification as evidence changes.",
      context:
        "Customers in two regions cannot complete payments, the cause is unknown, and independent teams are changing systems without coordination.",
      application:
        "The responder declares an incident, sets severity, appoints command and technical roles, opens communication and evidence channels, assesses impact, mitigates, verifies recovery, and transitions to follow-up.",
      phrase:
        "Declare the Incident based on customer payment impact now; root cause can be investigated after coordinated mitigation begins.",
      aliases: ["operational incident", "service incident", "incidente"],
      confusion:
        "An Incident is an event requiring coordinated response; a problem is the underlying or recurring cause investigated beyond immediate restoration.",
    }),
    "pt-BR": content({
      definition:
        "Incident é um evento ou condition não planejado que interrompe ou ameaça service, security, safety, compliance, data integrity ou business operation e exige coordinated response.",
      purpose:
        "Declará-lo cria urgency, ownership, communication, evidence preservation e response structure proporcionais ao impact real ou potencial.",
      when: "Declare-o quando impact ou risk thresholds forem atingidos, mesmo sem cause conhecida, atribuindo severity e leadership e atualizando conforme evidence.",
      context:
        "Clientes em duas regions não concluem payments, cause é desconhecida e times mudam systems independentemente.",
      application:
        "Responder declara incident, define severity, nomeia command e technical roles, abre channels, avalia impact, mitiga, verifica recovery e passa a follow-up.",
      phrase:
        "Declare Incident pelo customer payment impact agora; root cause pode ser investigada depois de mitigation coordenada.",
      aliases: ["operational incident", "service incident", "incidente"],
      confusion:
        "Incident é evento que exige coordinated response; problem é cause subjacente ou recorrente investigada além da restoration imediata.",
    }),
  },
  "production-incident": {
    en: content({
      definition:
        "A Production Incident is an incident affecting or threatening a live production environment, its users, data, service objectives, integrations, or business operations.",
      purpose:
        "The term distinguishes real operational exposure from development or test failures and triggers response, communication, access, and evidence practices suited to live impact.",
      when: "Declare one when production behavior crosses impact or risk thresholds, including silent data, security, compliance, or dependency failures even if the service remains reachable.",
      context:
        "A deployment calculates incorrect tax for completed customer orders while health checks and request success rates remain normal.",
      application:
        "The team stops rollout, declares severity from affected orders and legal risk, preserves evidence, contains calculation, communicates, repairs data, verifies recovery, and follows up.",
      phrase:
        "This is a Production Incident because live orders contain incorrect tax, despite green infrastructure health checks.",
      aliases: [
        "prod incident",
        "live service incident",
        "incidente de produção",
      ],
      confusion:
        "A Production Incident affects or threatens live operation; a production bug is a defect present in production but may not meet the organization's incident threshold.",
    }),
    "pt-BR": content({
      definition:
        "Production Incident é um incident que afeta ou ameaça live production environment, users, data, service objectives, integrations ou business operations.",
      purpose:
        "O termo distingue operational exposure real de failures em development ou test e aciona response, communication, access e evidence practices de live impact.",
      when: "Declare-o quando production behavior cruzar impact ou risk thresholds, incluindo silent data, security, compliance ou dependency failures com service reachable.",
      context:
        "Um deployment calcula tax incorreto em customer orders concluídos enquanto health checks e request success continuam normais.",
      application:
        "O time para rollout, define severity por affected orders e legal risk, preserva evidence, contém calculation, comunica, repara data e verifica recovery.",
      phrase:
        "Isto é Production Incident porque live orders têm tax incorreto apesar de infrastructure health verde.",
      aliases: [
        "prod incident",
        "live service incident",
        "incidente de produção",
      ],
      confusion:
        "Production Incident afeta ou ameaça live operation; production bug é defect presente, mas pode não atingir incident threshold.",
    }),
  },
  "incident-management": {
    en: content({
      definition:
        "Incident Management is the organizational capability and lifecycle for preparing for, detecting, declaring, coordinating, communicating, resolving, reviewing, and improving from incidents.",
      purpose:
        "It creates consistent governance, roles, tools, policies, learning, and readiness so incidents receive proportional response across teams and time.",
      when: "Establish it wherever service, security, safety, data, or operational incidents can materially affect objectives, testing the capability before real events.",
      context:
        "Different teams use incompatible severities, channels, roles, communications, and closure practices, causing confusion whenever shared services fail.",
      application:
        "The organization defines policy and severity, ownership and rotations, tooling, training and exercises, response roles, communications, review, action tracking, metrics, and governance.",
      phrase:
        "Incident Management must maintain the response capability and learning system, not only coordinate the current outage.",
      aliases: [
        "incident lifecycle management",
        "service incident management",
        "gestão de incidentes",
      ],
      confusion:
        "Incident Management is the end-to-end organizational capability; Incident Response is the active work performed during and immediately after an incident.",
    }),
    "pt-BR": content({
      definition:
        "Incident Management é a capability e lifecycle organizacional para preparar, detectar, declarar, coordenar, comunicar, resolver, revisar e melhorar a partir de incidents.",
      purpose:
        "Ela cria governance, roles, tools, policies, learning e readiness consistentes para response proporcional entre times e ao longo do tempo.",
      when: "Estabeleça-a onde service, security, safety, data ou operational incidents puderem afetar objectives, testando capability antes de eventos reais.",
      context:
        "Times usam severities, channels, roles, communications e closure practices incompatíveis, causando confusão em shared service failures.",
      application:
        "A organização define policy e severity, ownership e rotations, tooling, training e exercises, response roles, communications, review, action tracking, metrics e governance.",
      phrase:
        "Incident Management mantém response capability e learning system, não apenas coordena outage atual.",
      aliases: [
        "incident lifecycle management",
        "service incident management",
        "gestão de incidentes",
      ],
      confusion:
        "Incident Management é capability organizacional end-to-end; Incident Response é o trabalho ativo durante e logo após incident.",
    }),
  },
  "incident-response": {
    en: content({
      definition:
        "Incident Response is the coordinated set of actions taken to assess, contain, mitigate, communicate, recover from, and transition out of an active incident.",
      purpose:
        "It protects users and operations by restoring safe service quickly while preserving evidence, controlling changes, sharing situational awareness, and managing risk.",
      when: "Activate it when an incident is declared, scaling roles and process to severity and maintaining clear command until recovery and handoff criteria are met.",
      context:
        "Payment errors are rising across regions, multiple teams have hypotheses, customers need updates, and unsafe simultaneous changes could worsen impact.",
      application:
        "Incident command establishes roles and objectives, assesses scope, coordinates diagnosis and reversible mitigations, controls changes, communicates, verifies recovery, monitors recurrence, and hands off follow-up.",
      phrase:
        "During Incident Response, prioritize safe payment restoration and shared evidence before pursuing a perfect root-cause explanation.",
      aliases: [
        "incident handling",
        "emergency response",
        "resposta a incidentes",
      ],
      confusion:
        "Incident Response handles the active event; Disaster Recovery restores technology capabilities after severe disruption according to prepared recovery objectives and plans.",
    }),
    "pt-BR": content({
      definition:
        "Incident Response é o conjunto coordenado de actions para avaliar, conter, mitigar, comunicar, recuperar e transicionar para fora de um active incident.",
      purpose:
        "Ela protege users e operations restaurando safe service rapidamente enquanto preserva evidence, controla changes, compartilha situational awareness e administra risk.",
      when: "Ative-a ao declarar incident, escalando roles e process por severity e mantendo command claro até recovery e handoff criteria.",
      context:
        "Payment errors crescem entre regions, times possuem hypotheses, clientes precisam de updates e simultaneous changes inseguras podem ampliar impact.",
      application:
        "Incident command define roles e objectives, avalia scope, coordena diagnosis e reversible mitigations, controla changes, comunica, verifica recovery e faz handoff.",
      phrase:
        "Durante Incident Response, priorize safe payment restoration e shared evidence antes de explicação perfeita de root cause.",
      aliases: [
        "incident handling",
        "emergency response",
        "resposta a incidentes",
      ],
      confusion:
        "Incident Response trata active event; Disaster Recovery restaura technology capabilities após severe disruption conforme objectives e plans.",
    }),
  },
  "on-call": {
    en: content({
      definition:
        "On-call is an operational duty arrangement in which a designated responder is available during a defined period to receive, assess, and act on urgent service or system issues.",
      purpose:
        "It provides accountable response coverage outside normal ownership flow while preserving a clear escalation path and continuity for consequential events.",
      when: "Use an On-call rotation for services requiring timely human response, equipping responders with training, access, telemetry, runbooks, backup, fair scheduling, compensation, and fatigue safeguards.",
      context:
        "A global payments service can fail overnight and needs someone authorized and prepared to assess impact and begin mitigation within minutes.",
      application:
        "The team maintains a primary and secondary rotation, tested paging, schedules and handoffs, service ownership, escalation, protected recovery time, and reviews every page for actionability.",
      phrase:
        "The On-call responder owns initial assessment and coordination, not solitary expertise in every dependency.",
      aliases: ["on call", "on-call duty", "plantão"],
      confusion:
        "On-call is the availability duty and response role; support hours describe when a service promises assistance and may use a different staffing model.",
    }),
    "pt-BR": content({
      definition:
        "On-call é um arrangement de operational duty em que responder designado fica disponível num período para receber, avaliar e agir sobre service ou system issues urgentes.",
      purpose:
        "Ele fornece accountable response coverage fora do ownership flow normal, preservando escalation path e continuity em eventos consequentes.",
      when: "Use On-call rotation em services que exigem human response rápida, oferecendo training, access, telemetry, runbooks, backup, scheduling justo, compensation e fatigue safeguards.",
      context:
        "Um global payments service pode falhar à noite e precisa de pessoa autorizada e preparada para avaliar impact e iniciar mitigation.",
      application:
        "O time mantém primary e secondary rotation, tested paging, schedules e handoffs, service ownership, escalation, recovery time e reviews de page actionability.",
      phrase:
        "On-call responder possui initial assessment e coordination, não expertise solitária em toda dependency.",
      aliases: ["on call", "on-call duty", "plantão"],
      confusion:
        "On-call é availability duty e response role; support hours descrevem quando service promete assistance e podem usar staffing diferente.",
    }),
  },
  escalation: {
    en: content({
      definition:
        "Escalation is the deliberate transfer or expansion of attention, authority, expertise, resources, or communication when a situation exceeds the current responder's scope, capacity, risk tolerance, or time threshold.",
      purpose:
        "It brings the right capability and decision power to a problem before delay or local handling increases impact, while preserving context and ownership continuity.",
      when: "Escalate using predefined impact, uncertainty, permission, dependency, or time criteria, stating what is needed and transferring evidence rather than merely forwarding urgency.",
      context:
        "An on-call engineer identifies possible customer data exposure but lacks authority to isolate a partner connection and notify legal stakeholders.",
      application:
        "The responder activates security and incident command, summarizes known impact and evidence, names containment decision and deadline, remains available, and confirms acceptance.",
      phrase:
        "Escalation requests Security authority to isolate the partner now and includes the affected data, timeline, and evidence.",
      aliases: [
        "operational escalation",
        "incident escalation",
        "escalonamento",
      ],
      confusion:
        "Escalation increases or transfers response capability; delegation assigns work or authority and does not necessarily imply exceeded risk or urgency.",
    }),
    "pt-BR": content({
      definition:
        "Escalation é a transferência ou expansão deliberada de attention, authority, expertise, resources ou communication quando situação excede scope, capacity, risk tolerance ou time threshold atual.",
      purpose:
        "Ela traz capability e decision power adequados antes que delay ou local handling ampliem impact, preservando context e ownership continuity.",
      when: "Escale por critérios predefinidos de impact, uncertainty, permission, dependency ou time, declarando necessidade e transferindo evidence, não apenas urgency.",
      context:
        "On-call engineer identifica possível customer data exposure, mas não tem authority para isolar partner connection e avisar legal stakeholders.",
      application:
        "Responder ativa security e incident command, resume impact e evidence, nomeia containment decision e deadline, permanece disponível e confirma acceptance.",
      phrase:
        "Escalation pede authority de Security para isolar partner agora e inclui affected data, timeline e evidence.",
      aliases: [
        "operational escalation",
        "incident escalation",
        "escalonamento",
      ],
      confusion:
        "Escalation aumenta ou transfere response capability; delegation atribui trabalho ou authority sem necessariamente risco ou urgência excedidos.",
    }),
  },
  "root-cause-analysis": {
    en: content({
      definition:
        "Root Cause Analysis is a structured investigation that seeks the underlying technical, organizational, and process conditions whose change could prevent or reduce recurrence of an unwanted outcome.",
      purpose:
        "It moves improvement beyond immediate symptoms by examining causal chains, interactions, controls, decision context, and systemic contributors.",
      when: "Use it for recurring, severe, costly, or poorly understood problems, gathering evidence and testing causal claims instead of stopping at the first human action or component failure.",
      context:
        "A database repeatedly runs out of connections after deployments, and simply restarting it restores service without preventing recurrence.",
      application:
        "The team reconstructs evidence, maps contributing conditions and feedback loops, asks why safeguards allowed impact, tests hypotheses, and selects changes tied to verified causes.",
      phrase:
        "Root Cause Analysis should examine why connection growth escaped capacity controls, not label the deployer's restart timing as the cause.",
      aliases: ["rca", "causal analysis", "análise de causa raiz"],
      confusion:
        "Root Cause Analysis investigates preventable causal conditions; a Postmortem is the broader learning process that also covers impact, response, communication, and what went well.",
    }),
    "pt-BR": content({
      definition:
        "Root Cause Analysis é uma investigation estruturada que busca technical, organizational e process conditions subjacentes cuja mudança pode prevenir ou reduzir recorrência.",
      purpose:
        "Ela leva improvement além de symptoms imediatos examinando causal chains, interactions, controls, decision context e systemic contributors.",
      when: "Use-a em problems recorrentes, graves, caros ou pouco compreendidos, reunindo evidence e testando causal claims sem parar na primeira human action ou component failure.",
      context:
        "Um database esgota connections após deployments e restart restaura service sem prevenir recorrência.",
      application:
        "O time reconstrói evidence, mapeia contributing conditions e feedback loops, pergunta por que safeguards permitiram impact, testa hypotheses e seleciona changes.",
      phrase:
        "Root Cause Analysis deve examinar por que connection growth escapou de capacity controls, não culpar timing de restart.",
      aliases: ["rca", "causal analysis", "análise de causa raiz"],
      confusion:
        "Root Cause Analysis investiga causal conditions preveníveis; Postmortem é learning process amplo com impact, response, communication e acertos.",
    }),
  },
  "blameless-postmortem": {
    en: content({
      definition:
        "A Blameless Postmortem is a post-incident learning review that assumes people acted within the information, incentives, tools, and constraints available and examines how the system produced the outcome.",
      purpose:
        "It supports honest evidence sharing and systemic improvement by avoiding simplistic personal blame while preserving accountability for learning and corrective action.",
      when: "Use this approach after incidents and near misses, creating psychological safety and examining decisions in context without excusing negligence, misconduct, or ignored obligations.",
      context:
        "An engineer approved a risky configuration because the review tool hid the production difference and the deadline process rewarded rapid approval.",
      application:
        "Facilitators reconstruct what each participant knew, identify tool and process contributors, examine defenses and incentives, recognize helpful actions, and assign system improvements with owners.",
      phrase:
        "The Blameless Postmortem asks why the risky configuration looked acceptable at the time and how review should expose it next time.",
      aliases: [
        "blameless incident review",
        "no-blame postmortem",
        "postmortem sem culpabilização",
      ],
      confusion:
        "Blameless does not mean accountability-free; it separates learning from scapegoating while still requiring owners to complete improvements and address misconduct appropriately.",
    }),
    "pt-BR": content({
      definition:
        "Blameless Postmortem é uma post-incident review que presume pessoas agindo com information, incentives, tools e constraints disponíveis e examina como o system produziu outcome.",
      purpose:
        "Ele permite evidence sharing honesto e systemic improvement evitando personal blame simplista e preservando accountability por learning e corrective action.",
      when: "Use a abordagem após incidents e near misses, criando psychological safety e examinando decisions no contexto sem desculpar negligence, misconduct ou ignored obligations.",
      context:
        "Uma engineer aprovou risky configuration porque review tool ocultava production difference e deadline process recompensava approval rápida.",
      application:
        "Facilitators reconstroem o que participantes sabiam, identificam tool e process contributors, examinam defenses e incentives, reconhecem acertos e atribuem improvements.",
      phrase:
        "Blameless Postmortem pergunta por que configuration parecia aceitável e como review deve expô-la no futuro.",
      aliases: [
        "blameless incident review",
        "no-blame postmortem",
        "postmortem sem culpabilização",
      ],
      confusion:
        "Blameless não significa sem accountability; separa learning de scapegoating e ainda exige improvements e tratamento adequado de misconduct.",
    }),
  },
  outage: {
    en: content({
      definition:
        "An Outage is a period in which a service, capability, dependency, or system is unavailable or unable to perform its intended function for some or all users.",
      purpose:
        "The term describes a loss of service that informs impact assessment, incident severity, communication, availability measurement, recovery, and contractual reporting.",
      when: "Classify an Outage when intended service is effectively unavailable, defining affected population, function, region, start, recovery, partial availability, and excluded planned maintenance.",
      context:
        "Authentication requests time out globally, preventing customers and employees from entering any dependent application.",
      application:
        "The incident team marks authentication unavailable, measures affected login attempts and duration, communicates scope, restores a safe path, verifies regions, and records the availability impact.",
      phrase:
        "This is an authentication Outage even though the servers answer health checks, because users cannot complete the intended function.",
      aliases: ["service outage", "system outage", "indisponibilidade"],
      confusion:
        "An Outage is a loss of intended availability; Degradation is reduced quality or capacity while some intended service remains usable.",
    }),
    "pt-BR": content({
      definition:
        "Outage é um período em que service, capability, dependency ou system fica indisponível ou incapaz de cumprir intended function para parte ou todos os users.",
      purpose:
        "O termo descreve loss of service que orienta impact assessment, incident severity, communication, availability measurement, recovery e contractual reporting.",
      when: "Classifique Outage quando intended service estiver efetivamente indisponível, definindo population, function, region, start, recovery, partial availability e planned maintenance.",
      context:
        "Authentication requests expiram globalmente, impedindo clientes e employees de entrar em applications dependentes.",
      application:
        "Incident team marca authentication unavailable, mede affected logins e duration, comunica scope, restaura safe path, verifica regions e registra availability impact.",
      phrase:
        "Isto é authentication Outage apesar de health checks verdes porque users não concluem intended function.",
      aliases: ["service outage", "system outage", "indisponibilidade"],
      confusion:
        "Outage é perda de intended availability; Degradation reduz quality ou capacity enquanto parte do service permanece utilizável.",
    }),
  },
  degradation: {
    en: content({
      definition:
        "Degradation is a condition in which a service remains partly available but performs below its intended quality, capacity, correctness, or experience level.",
      purpose:
        "It distinguishes partial impairment from complete outage so impact, severity, mitigation, communication, and service-level measurement reflect the actual user experience.",
      when: "Classify Degradation when users can still perform some intended function but experience elevated latency, error, stale data, reduced features, quality, or capacity.",
      context:
        "Search returns results but takes eight seconds for many queries and temporarily omits recently indexed products in one region.",
      application:
        "The team quantifies affected queries and users, latency and freshness against objectives, disables expensive ranking safely, communicates limitation, and verifies normal quality after recovery.",
      phrase:
        "Search is in Degradation, not fully healthy, because results remain available but violate latency and freshness objectives.",
      aliases: ["service degradation", "performance degradation", "degradação"],
      confusion:
        "Degradation means impaired service remains partly usable; an Outage means the intended service or capability is unavailable.",
    }),
    "pt-BR": content({
      definition:
        "Degradation é uma condition em que service permanece parcialmente disponível, mas opera abaixo de intended quality, capacity, correctness ou experience level.",
      purpose:
        "Ela distingue partial impairment de complete outage para impact, severity, mitigation, communication e service-level measurement refletirem user experience real.",
      when: "Classifique Degradation quando users ainda realizarem parte da intended function com latency, errors, stale data, reduced features, quality ou capacity.",
      context:
        "Search retorna results, mas leva oito segundos e omite recently indexed products numa region.",
      application:
        "O time quantifica affected queries e users, latency e freshness contra objectives, desliga ranking caro, comunica limitation e verifica normal quality.",
      phrase:
        "Search está em Degradation, não healthy, pois results existem mas violam latency e freshness objectives.",
      aliases: ["service degradation", "performance degradation", "degradação"],
      confusion:
        "Degradation significa service impaired mas utilizável; Outage significa intended service ou capability indisponível.",
    }),
  },
  "availability-zone": {
    en: content({
      definition:
        "An Availability Zone is a distinct failure domain within a cloud or infrastructure region, designed with independent facilities and utilities while connected to other zones through regional networking.",
      purpose:
        "It lets systems distribute redundant capacity so a localized facility or infrastructure failure need not remove the entire regional service.",
      when: "Deploy across zones when availability requirements justify the redundancy, designing data, quorum, traffic, capacity, dependencies, failover, and testing to survive a zone loss.",
      context:
        "A regional application runs every instance and database replica in one zone, so a facility network failure removes all capacity despite using several servers.",
      application:
        "The architecture spreads instances and data replicas across zones, keeps sufficient surviving capacity, balances traffic, removes zonal dependency, and exercises failure and recovery.",
      phrase:
        "Multiple instances are not zone-resilient if they and the database all occupy the same Availability Zone.",
      aliases: ["az", "cloud availability zone", "zona de disponibilidade"],
      confusion:
        "An Availability Zone is an isolated failure domain within a region; a region is a broader geographic area containing multiple zones and services.",
    }),
    "pt-BR": content({
      definition:
        "Availability Zone é um failure domain distinto dentro de cloud ou infrastructure region, com facilities e utilities independentes e regional networking com outras zones.",
      purpose:
        "Ela permite distribuir redundant capacity para failure localizada de facility ou infrastructure não remover todo regional service.",
      when: "Faça deployment entre zones quando availability requirements justificarem redundancy, projetando data, quorum, traffic, capacity, dependencies, failover e tests para zone loss.",
      context:
        "Uma regional application executa instances e database replicas numa zone, então facility network failure remove toda capacity apesar de vários servers.",
      application:
        "Architecture distribui instances e data replicas entre zones, mantém surviving capacity, balanceia traffic, remove zonal dependency e exercita failure e recovery.",
      phrase:
        "Múltiplas instances não são zone-resilient se elas e database ocupam a mesma Availability Zone.",
      aliases: ["az", "cloud availability zone", "zona de disponibilidade"],
      confusion:
        "Availability Zone é failure domain isolado dentro de region; region é geographic area ampla com várias zones e services.",
    }),
  },
  "disaster-recovery": {
    en: content({
      definition:
        "Disaster Recovery is the planned capability to restore technology services, infrastructure, applications, and data after a severe disruptive event that exceeds normal high-availability or incident procedures.",
      purpose:
        "It limits prolonged business impact by preparing recovery priorities, alternate resources, data restoration, roles, procedures, communication, and tested objectives before disaster occurs.",
      when: "Establish it for critical technology whose regional loss, corruption, destructive attack, or facility disruption is plausible, deriving recovery from business impact and dependencies.",
      context:
        "A regional control-plane failure and data corruption make normal failover unsafe, requiring restoration in another region from verified backups.",
      application:
        "The organization classifies services, defines RPO and RTO, maps dependencies, provisions recovery environment and access, protects backups, documents activation and restoration, and runs realistic exercises.",
      phrase:
        "Disaster Recovery is not proven by owning backups; the team must restore them into a usable service within the agreed objective.",
      aliases: [
        "dr",
        "technology disaster recovery",
        "recuperação de desastres",
      ],
      confusion:
        "Disaster Recovery restores technology capabilities after severe disruption; Business Continuity keeps critical organizational operations functioning through broader disruption.",
    }),
    "pt-BR": content({
      definition:
        "Disaster Recovery é a capability planejada para restaurar technology services, infrastructure, applications e data após severe disruption que excede high availability ou incident procedures normais.",
      purpose:
        "Ela limita prolonged business impact preparando recovery priorities, alternate resources, data restoration, roles, procedures, communication e tested objectives.",
      when: "Estabeleça-a para tecnologia crítica exposta a regional loss, corruption, destructive attack ou facility disruption, derivando recovery de business impact e dependencies.",
      context:
        "Regional control-plane failure e data corruption tornam normal failover inseguro e exigem restoration noutra region por verified backups.",
      application:
        "A organização classifica services, define RPO e RTO, mapeia dependencies, provisiona recovery environment e access, protege backups, documenta activation e exercita.",
      phrase:
        "Disaster Recovery não é provado por possuir backups; o time deve restaurá-los em usable service dentro do objective.",
      aliases: [
        "dr",
        "technology disaster recovery",
        "recuperação de desastres",
      ],
      confusion:
        "Disaster Recovery restaura technology capabilities; Business Continuity mantém critical organizational operations durante disruption ampla.",
    }),
  },
  "business-continuity": {
    en: content({
      definition:
        "Business Continuity is the organizational capability to continue prioritized products, services, obligations, and operations at acceptable levels during and after disruption.",
      purpose:
        "It protects critical outcomes by preparing alternative people, facilities, suppliers, communication, processes, technology, and decision authority beyond a single technical recovery plan.",
      when: "Plan it for disruptions that can affect essential operations, using business impact analysis to set priorities, tolerances, dependencies, strategies, exercises, and review cycles.",
      context:
        "A regional disaster removes an office and technology services while customer support, regulatory reporting, payroll, and payment settlement must continue.",
      application:
        "The organization identifies critical activities and maximum tolerable disruption, establishes alternate work and supplier arrangements, links disaster recovery, trains roles, exercises scenarios, and updates gaps.",
      phrase:
        "Business Continuity covers how support and settlement operate during the disruption, while Disaster Recovery restores the supporting systems.",
      aliases: [
        "bcp",
        "business continuity planning",
        "continuidade de negócios",
      ],
      confusion:
        "Business Continuity sustains essential organizational outcomes; Disaster Recovery is the technology-focused restoration capability within the broader continuity strategy.",
    }),
    "pt-BR": content({
      definition:
        "Business Continuity é a capability organizacional de continuar products, services, obligations e operations priorizados em níveis aceitáveis durante e após disruption.",
      purpose:
        "Ela protege critical outcomes preparando people, facilities, suppliers, communication, processes, technology e decision authority alternativos além de technical recovery plan.",
      when: "Planeje-a para disruptions que afetem essential operations, usando business impact analysis para prioridades, tolerances, dependencies, strategies, exercises e review cycles.",
      context:
        "Um regional disaster remove office e technology services enquanto customer support, regulatory reporting, payroll e payment settlement precisam continuar.",
      application:
        "A organização identifica critical activities e maximum tolerable disruption, cria alternate work e supplier arrangements, liga disaster recovery, treina e exercita cenários.",
      phrase:
        "Business Continuity cobre como support e settlement operam; Disaster Recovery restaura supporting systems.",
      aliases: [
        "bcp",
        "business continuity planning",
        "continuidade de negócios",
      ],
      confusion:
        "Business Continuity sustenta organizational outcomes; Disaster Recovery é technology restoration dentro da strategy ampla.",
    }),
  },
  "recovery-point-objective": {
    en: content({
      definition:
        "Recovery Point Objective is the maximum acceptable age of data that may be lost when restoring a system after disruption, expressed as a time interval before the event.",
      purpose:
        "It translates business tolerance for data loss into requirements for replication, backup frequency, journaling, consistency, protection, and recovery verification.",
      when: "Set an RPO per business capability and data set through impact analysis, distinguishing accepted loss from the actual recovery point achieved in an event.",
      context:
        "A settlement ledger cannot lose more than five minutes of confirmed entries, while a regenerated analytics cache can tolerate one day.",
      application:
        "Owners define five-minute RPO for ledger data, implement protected replication and logs, monitor lag, test point-in-time restoration, and reconcile external records after recovery.",
      phrase:
        "A five-minute Recovery Point Objective means recovery may roll data back at most five minutes, not that restoration finishes in five minutes.",
      aliases: [
        "rpo",
        "data loss objective",
        "objetivo de ponto de recuperação",
      ],
      confusion:
        "RPO limits acceptable data loss measured backward from disruption; RTO limits acceptable time to restore the capability.",
    }),
    "pt-BR": content({
      definition:
        "Recovery Point Objective é a idade máxima aceitável de data que pode ser perdida ao restaurar system após disruption, expressa como intervalo anterior ao evento.",
      purpose:
        "Ele traduz business tolerance a data loss em requirements de replication, backup frequency, journaling, consistency, protection e recovery verification.",
      when: "Defina RPO por business capability e data set por impact analysis, distinguindo accepted loss do actual recovery point alcançado.",
      context:
        "Um settlement ledger não pode perder mais de cinco minutos de confirmed entries, enquanto analytics cache tolera um dia.",
      application:
        "Owners definem RPO de cinco minutos, implementam protected replication e logs, monitoram lag, testam point-in-time restoration e reconciliam external records.",
      phrase:
        "Recovery Point Objective de cinco minutos limita rollback de data; não significa restoration concluída em cinco minutos.",
      aliases: [
        "rpo",
        "data loss objective",
        "objetivo de ponto de recuperação",
      ],
      confusion:
        "RPO limita acceptable data loss antes da disruption; RTO limita tempo aceitável para restaurar capability.",
    }),
  },
  "recovery-time-objective": {
    en: content({
      definition:
        "Recovery Time Objective is the maximum targeted elapsed time for restoring a business process, service, or technology capability to an agreed level after disruption.",
      purpose:
        "It translates tolerance for downtime into requirements for recovery architecture, automation, staffing, dependencies, communication, and exercise performance.",
      when: "Set an RTO per capability through business impact analysis, defining start and restored level precisely and distinguishing the objective from actual recovery time.",
      context:
        "Customer payment initiation must resume within one hour after regional loss, while historical analytics may remain unavailable for 24 hours.",
      application:
        "The payment capability receives a one-hour RTO, warm regional capacity, automated data and secret restoration, dependency agreements, rehearsed roles, checkpoints, and measured exercises.",
      phrase:
        "The one-hour Recovery Time Objective ends when verified payment service reaches the agreed capacity, not when servers merely start.",
      aliases: [
        "rto",
        "recovery duration objective",
        "objetivo de tempo de recuperação",
      ],
      confusion:
        "RTO limits recovery duration after disruption; RPO limits how far back recovered data may need to go and therefore how much data can be lost.",
    }),
    "pt-BR": content({
      definition:
        "Recovery Time Objective é o elapsed time máximo pretendido para restaurar business process, service ou technology capability a um nível acordado após disruption.",
      purpose:
        "Ele traduz tolerance a downtime em requirements de recovery architecture, automation, staffing, dependencies, communication e exercise performance.",
      when: "Defina RTO por capability via business impact analysis, especificando start e restored level e distinguindo objective de actual recovery time.",
      context:
        "Customer payment initiation deve voltar em uma hora após regional loss, enquanto historical analytics pode ficar 24 horas indisponível.",
      application:
        "Payment capability recebe RTO de uma hora, warm regional capacity, automated restoration, dependency agreements, rehearsed roles, checkpoints e measured exercises.",
      phrase:
        "Recovery Time Objective de uma hora termina com payment service verificado na agreed capacity, não com servers iniciados.",
      aliases: [
        "rto",
        "recovery duration objective",
        "objetivo de tempo de recuperação",
      ],
      confusion:
        "RTO limita recovery duration depois da disruption; RPO limita quanto recovered data pode retroceder e quanto data pode ser perdido.",
    }),
  },
};
