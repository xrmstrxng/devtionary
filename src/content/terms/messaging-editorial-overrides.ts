import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const messagingEditorialOverrides: Record<string, EditorialPair> = {
  message: {
    en: content({
      definition:
        "A Message is a discrete unit of information sent from a producer to one or more recipients through a communication channel, usually containing data and metadata needed for processing.",
      purpose:
        "It creates an explicit communication boundary that can decouple participants in time, location, implementation, availability, and scaling.",
      when: "Use a Message when information or work must cross a process or system boundary, defining contract, identity, ordering, delivery, privacy, size, compatibility, and failure behavior.",
      context:
        "An order service must notify fulfillment after committing an order without requiring fulfillment to be available in the same request.",
      application:
        "The producer emits an OrderPlaced message with event identity, schema version, order reference, occurred time, safe business data, correlation context, and no internal database object leakage.",
      phrase:
        "Make the Message contract stable and self-explanatory enough for fulfillment to process it after the producer has deployed a new version.",
      aliases: ["messaging message", "broker message", "mensagem"],
      confusion:
        "A Message is the transport unit exchanged through a channel; an Event states that something happened and can be carried inside a message.",
    }),
    "pt-BR": content({
      definition:
        "Message é uma unidade discreta de informação enviada de producer a um ou mais recipients por communication channel, contendo data e metadata para processing.",
      purpose:
        "Ela cria communication boundary explícito que desacopla participantes em tempo, local, implementation, availability e scaling.",
      when: "Use Message quando informação ou work cruzar process ou system boundary, definindo contract, identity, ordering, delivery, privacy, size, compatibility e failure behavior.",
      context:
        "Um order service notifica fulfillment depois de commit sem exigir que fulfillment esteja disponível no mesmo request.",
      application:
        "O producer emite OrderPlaced message com event identity, schema version, order reference, occurred time, safe business data e correlation context sem vazar database object.",
      phrase:
        "Torne Message contract estável para fulfillment processá-la depois de producer publicar nova version.",
      aliases: ["messaging message", "broker message", "mensagem"],
      confusion:
        "Message é transport unit no channel; Event declara que algo aconteceu e pode ser carregado numa message.",
    }),
  },
  "message-broker": {
    en: content({
      definition:
        "A Message Broker is intermediary software that accepts messages from producers and routes, stores, filters, transforms, or delivers them to consumers according to messaging semantics and configuration.",
      purpose:
        "It decouples senders from receivers and centralizes capabilities such as buffering, routing, delivery acknowledgement, retry, access control, and operational visibility.",
      when: "Use one when asynchronous or mediated communication benefits the system, designing broker availability, capacity, topology, ordering, retention, backpressure, security, and failure recovery explicitly.",
      context:
        "Several services must publish business changes to independent consumers that scale differently and may be temporarily unavailable.",
      application:
        "Producers publish versioned messages to broker destinations; policies route them to durable subscriptions, consumers acknowledge processing, failed deliveries retry or move to a dead-letter path, and operators monitor lag.",
      phrase:
        "The Message Broker can buffer fulfillment downtime, but its queue capacity and retry policy must prevent an unbounded backlog.",
      aliases: [
        "messaging broker",
        "message-oriented middleware",
        "broker de mensagens",
      ],
      confusion:
        "A Message Broker actively mediates delivery and routing; an Event Bus is an architectural communication role and may be implemented by a broker, stream platform, or in-process mechanism.",
    }),
    "pt-BR": content({
      definition:
        "Message Broker é software intermediário que aceita messages de producers e as routes, stores, filters, transforms ou entrega a consumers conforme messaging semantics.",
      purpose:
        "Ele desacopla senders e receivers e centraliza buffering, routing, acknowledgement, retry, access control e operational visibility.",
      when: "Use-o quando asynchronous ou mediated communication beneficiar o system, projetando availability, capacity, topology, ordering, retention, backpressure, security e failure recovery.",
      context:
        "Vários services publicam business changes a independent consumers que escalam diferentemente e podem ficar unavailable.",
      application:
        "Producers publicam versioned messages; policies fazem routing a durable subscriptions, consumers acknowledge, failures fazem retry ou dead-letter e operators monitoram lag.",
      phrase:
        "Message Broker pode bufferizar downtime de fulfillment, mas queue capacity e retry policy devem evitar backlog ilimitado.",
      aliases: [
        "messaging broker",
        "message-oriented middleware",
        "broker de mensagens",
      ],
      confusion:
        "Message Broker media delivery e routing; Event Bus é architectural role que pode ser implementado por broker, stream platform ou in-process mechanism.",
    }),
  },
  messaging: {
    en: content({
      definition:
        "Messaging is a communication style in which software participants exchange discrete messages through channels or intermediaries rather than relying only on direct shared-memory or synchronous calls.",
      purpose:
        "It supports temporal decoupling, asynchronous work, buffering, fan-out, integration, and independent scaling while making delivery semantics an explicit design concern.",
      when: "Use Messaging when participants should communicate across boundaries with different lifecycles or throughput, and accept the complexity of schemas, duplication, ordering, retries, and operations.",
      context:
        "Checkout should complete after recording an order while inventory updates, email, analytics, and fulfillment can proceed independently.",
      application:
        "The architecture defines commands and events, destinations, contracts, ownership, delivery guarantees, idempotency, ordering, retry and dead-letter handling, observability, and security.",
      phrase:
        "Messaging removes the need for email to be online during checkout, but consumers must handle duplicate delivery safely.",
      aliases: [
        "asynchronous messaging",
        "message-based communication",
        "mensageria",
      ],
      confusion:
        "Messaging is the overall message-based communication style; a Message Broker is one infrastructure component that can implement it.",
    }),
    "pt-BR": content({
      definition:
        "Messaging é um communication style em que software participants trocam discrete messages por channels ou intermediaries em vez de somente shared memory ou synchronous calls.",
      purpose:
        "Ela suporta temporal decoupling, async work, buffering, fan-out, integration e independent scaling, tornando delivery semantics uma design concern explícita.",
      when: "Use Messaging quando participantes com lifecycles ou throughput diferentes precisarem comunicar, aceitando complexity de schemas, duplication, ordering, retries e operations.",
      context:
        "Checkout termina após registrar order enquanto inventory, email, analytics e fulfillment prosseguem independentemente.",
      application:
        "Architecture define commands e events, destinations, contracts, ownership, delivery guarantees, idempotency, ordering, retry e dead-letter handling, observability e security.",
      phrase:
        "Messaging elimina necessidade de email online durante checkout, mas consumers devem tratar duplicate delivery com segurança.",
      aliases: [
        "asynchronous messaging",
        "message-based communication",
        "mensageria",
      ],
      confusion:
        "Messaging é o communication style amplo; Message Broker é um infrastructure component que pode implementá-lo.",
    }),
  },
  producer: {
    en: content({
      definition:
        "A Producer is a software participant that creates and sends messages to a channel, broker, queue, topic, or stream for downstream processing.",
      purpose:
        "It translates local decisions or work requests into a defined messaging contract while remaining decoupled from the availability and implementation of individual consumers.",
      when: "Implement a Producer at the ownership boundary where a command or event becomes valid, coordinating message publication with state changes and handling broker failure and backpressure.",
      context:
        "An order service must publish OrderPlaced only for committed orders and must not lose the event if the broker is briefly unavailable.",
      application:
        "The service records order and outbox entry atomically, a publisher serializes the versioned contract with identifiers and context, sends with confirmation, and marks publication safely.",
      phrase:
        "The Producer should publish after durable order commitment through the outbox, not emit an event that may describe rolled-back data.",
      aliases: ["message producer", "event producer", "produtor de mensagens"],
      confusion:
        "A Producer sends messages; a Publisher is a producer role specifically associated with publishing to a topic or publish-subscribe channel, though tooling often uses the terms interchangeably.",
    }),
    "pt-BR": content({
      definition:
        "Producer é um software participant que cria e envia messages a channel, broker, queue, topic ou stream para downstream processing.",
      purpose:
        "Ele traduz local decisions ou work requests em messaging contract definido e permanece desacoplado de availability e implementation de consumers individuais.",
      when: "Implemente Producer no ownership boundary onde command ou event se torna válido, coordenando publication com state changes e tratando broker failure e backpressure.",
      context:
        "Um order service publica OrderPlaced somente para committed orders e não pode perder event se broker ficar indisponível.",
      application:
        "O service registra order e outbox atomicamente, publisher serializa versioned contract com IDs e context, envia com confirmation e marca publication.",
      phrase:
        "Producer deve publicar depois de durable order commitment pelo outbox, não emitir event de rolled-back data.",
      aliases: ["message producer", "event producer", "produtor de mensagens"],
      confusion:
        "Producer envia messages; Publisher é producer role ligado a topic ou publish-subscribe channel, embora tools usem termos de modo intercambiável.",
    }),
  },
  consumer: {
    en: content({
      definition:
        "A Consumer is a software participant that receives messages from a channel, queue, subscription, or stream and performs processing based on their contract.",
      purpose:
        "It turns delivered information or work into downstream state, side effects, or further messages while scaling and failing independently from the producer.",
      when: "Implement a Consumer for asynchronous processing, explicitly handling validation, idempotency, acknowledgement, ordering, concurrency, retry, poison messages, observability, and shutdown.",
      context:
        "A fulfillment service receives OrderPlaced messages, reserves stock, creates shipments, and may see the same message more than once after a timeout.",
      application:
        "The consumer validates schema, checks event identity, processes within safe transactional boundaries, records outcome, acknowledges only after durable success, and classifies retryable failures.",
      phrase:
        "The Consumer must treat an already processed event as successful before acknowledging the redelivery.",
      aliases: [
        "message consumer",
        "event consumer",
        "consumidor de mensagens",
      ],
      confusion:
        "A Consumer receives and processes messages; a Subscriber is the role or registration that expresses interest in messages from a publish-subscribe source.",
    }),
    "pt-BR": content({
      definition:
        "Consumer é um software participant que recebe messages de channel, queue, subscription ou stream e executa processing conforme contract.",
      purpose:
        "Ele transforma delivered information ou work em downstream state, side effects ou novas messages, escalando e falhando independentemente do producer.",
      when: "Implemente Consumer para async processing, tratando validation, idempotency, acknowledgement, ordering, concurrency, retry, poison messages, observability e shutdown.",
      context:
        "Um fulfillment service recebe OrderPlaced, reserva stock, cria shipments e pode ver a mesma message novamente após timeout.",
      application:
        "O consumer valida schema, verifica event identity, processa em safe transactional boundaries, registra outcome, acknowledge somente após durable success e classifica failures.",
      phrase:
        "Consumer deve tratar event já processado como sucesso antes de acknowledge da redelivery.",
      aliases: [
        "message consumer",
        "event consumer",
        "consumidor de mensagens",
      ],
      confusion:
        "Consumer recebe e processa messages; Subscriber é role ou registration que expressa interesse numa publish-subscribe source.",
    }),
  },
  publisher: {
    en: content({
      definition:
        "A Publisher is a messaging participant that publishes a message to a named topic, exchange, or event channel without directly selecting each receiving subscriber.",
      purpose:
        "It announces information through a stable channel and remains decoupled from how many subscribers exist, where they run, and how each uses the message.",
      when: "Use a Publisher in publish-subscribe communication, defining publication authority, contract, destination, confirmation, ordering, duplicate behavior, and coordination with source state.",
      context:
        "A catalog service announces ProductPriceChanged for search, recommendations, analytics, and customer notification consumers that evolve independently.",
      application:
        "The publisher creates a versioned event after durable price change, attaches identity and occurred time, sends it to the product topic with broker confirmation, and records publication.",
      phrase:
        "The Publisher announces the price change once to the topic; each subscriber owns its independent reaction.",
      aliases: [
        "message publisher",
        "event publisher",
        "publicador de mensagens",
      ],
      confusion:
        "A Publisher sends to a publish-subscribe channel; a Producer is the broader sender role and can also send commands to a point-to-point queue.",
    }),
    "pt-BR": content({
      definition:
        "Publisher é um messaging participant que publica message num topic, exchange ou event channel sem selecionar diretamente cada subscriber receptor.",
      purpose:
        "Ele anuncia informação por stable channel e permanece desacoplado de quantos subscribers existem, onde executam e como usam message.",
      when: "Use Publisher em publish-subscribe communication, definindo publication authority, contract, destination, confirmation, ordering, duplicate behavior e source state coordination.",
      context:
        "Um catalog service anuncia ProductPriceChanged a search, recommendations, analytics e customer notification consumers independentes.",
      application:
        "O publisher cria versioned event após durable price change, anexa identity e occurred time, envia a product topic com broker confirmation e registra publication.",
      phrase:
        "Publisher anuncia price change uma vez no topic; cada subscriber possui reaction independente.",
      aliases: [
        "message publisher",
        "event publisher",
        "publicador de mensagens",
      ],
      confusion:
        "Publisher envia a publish-subscribe channel; Producer é sender role amplo e também envia commands a point-to-point queue.",
    }),
  },
  subscriber: {
    en: content({
      definition:
        "A Subscriber is a participant or registered subscription that expresses interest in messages from a publish-subscribe channel and receives matching publications.",
      purpose:
        "It lets an independent capability react to published information without the publisher knowing that capability or coordinating its availability.",
      when: "Create a Subscriber for an owned downstream use case, choosing durable or ephemeral behavior, filtering, starting position, scaling, acknowledgement, replay, and failure isolation.",
      context:
        "Search must update indexed price whenever the catalog publishes ProductPriceChanged while analytics needs its own independent copy and retention.",
      application:
        "Search owns a durable subscription and consumer group, validates and deduplicates events, updates the index, acknowledges success, tracks lag, and isolates poison messages.",
      phrase:
        "Give Search its own Subscriber state so an analytics outage cannot block index updates.",
      aliases: [
        "message subscriber",
        "event subscriber",
        "assinante de mensagens",
      ],
      confusion:
        "A Subscriber expresses interest and receives publications; a Consumer is the runtime participant that reads and processes delivered messages and may serve a subscriber group.",
    }),
    "pt-BR": content({
      definition:
        "Subscriber é um participant ou registered subscription que expressa interesse em messages de publish-subscribe channel e recebe publications correspondentes.",
      purpose:
        "Ele permite a uma capability independente reagir a published information sem publisher conhecê-la ou coordenar availability.",
      when: "Crie Subscriber para downstream use case owned, escolhendo durable ou ephemeral behavior, filtering, starting position, scaling, acknowledgement, replay e failure isolation.",
      context:
        "Search atualiza indexed price quando catalog publica ProductPriceChanged e analytics precisa de copy e retention independentes.",
      application:
        "Search possui durable subscription e consumer group, valida e deduplica events, atualiza index, acknowledge success, monitora lag e isola poison messages.",
      phrase:
        "Dê a Search seu próprio Subscriber state para analytics outage não bloquear index updates.",
      aliases: [
        "message subscriber",
        "event subscriber",
        "assinante de mensagens",
      ],
      confusion:
        "Subscriber expressa interesse e recebe publications; Consumer é runtime participant que lê e processa delivered messages.",
    }),
  },
  "publish-subscribe": {
    en: content({
      definition:
        "Publish/Subscribe is a messaging pattern in which publishers send messages to a channel and independent subscribers receive matching publications without direct sender-to-receiver addressing.",
      purpose:
        "It supports one-to-many fan-out and participant independence, letting new subscribers consume information without changing the publisher.",
      when: "Use Pub/Sub when multiple independent reactions need the same information, designing subscription durability, filtering, replay, ordering, duplicate delivery, retention, and slow-subscriber isolation.",
      context:
        "An account-created event must trigger onboarding email, fraud analysis, analytics, CRM synchronization, and entitlement setup owned by separate teams.",
      application:
        "The identity service publishes AccountCreated to a topic; each capability owns a subscription, processing policy, idempotency, monitoring, and recovery path.",
      phrase:
        "Publish/Subscribe lets CRM join later without adding another synchronous call to account creation.",
      aliases: [
        "pub/sub",
        "pubsub",
        "publish subscribe",
        "publicação e assinatura",
      ],
      confusion:
        "Publish/Subscribe distributes publications to independent subscribers; a work queue normally distributes each message among competing consumers for one logical processing outcome.",
    }),
    "pt-BR": content({
      definition:
        "Publish/Subscribe é um messaging pattern em que publishers enviam messages a channel e independent subscribers recebem publications sem direct sender-to-receiver addressing.",
      purpose:
        "Ele suporta one-to-many fan-out e participant independence, permitindo novos subscribers sem mudar publisher.",
      when: "Use Pub/Sub quando reactions independentes precisarem da mesma informação, projetando subscription durability, filtering, replay, ordering, duplicate delivery, retention e isolation.",
      context:
        "Account-created event aciona onboarding email, fraud analysis, analytics, CRM synchronization e entitlement setup de times separados.",
      application:
        "Identity service publica AccountCreated num topic; cada capability possui subscription, processing policy, idempotency, monitoring e recovery path.",
      phrase:
        "Publish/Subscribe permite CRM entrar depois sem adicionar synchronous call a account creation.",
      aliases: [
        "pub/sub",
        "pubsub",
        "publish subscribe",
        "publicação e assinatura",
      ],
      confusion:
        "Publish/Subscribe distribui publications a subscribers independentes; work queue distribui cada message entre competing consumers para um processing outcome.",
    }),
  },
  topic: {
    en: content({
      definition:
        "A Topic is a named logical destination or category in a messaging or streaming system to which producers publish records and from which subscriptions or consumers receive them.",
      purpose:
        "It creates a stable routing and ownership boundary for related messages while separating publication from individual recipient addresses.",
      when: "Create a Topic around a coherent contract and lifecycle, defining naming, ownership, partitioning, retention, access, schema compatibility, subscription expectations, and deletion.",
      context:
        "A company needs a durable channel for customer-account lifecycle events consumed independently by billing, analytics, CRM, and security.",
      application:
        "The platform provisions an account-events topic with owner, versioned event schemas, partitions by account ID, retention and encryption, producer permissions, consumer groups, and lag monitoring.",
      phrase:
        "Partition the Topic by account ID to preserve per-account order without promising a global event order.",
      aliases: ["message topic", "event topic", "tópico"],
      confusion:
        "A Topic is a named publication stream or destination; a Queue is a buffering destination commonly used to distribute work among consumers.",
    }),
    "pt-BR": content({
      definition:
        "Topic é um logical destination ou category nomeado em messaging ou streaming system onde producers publicam records e subscriptions ou consumers os recebem.",
      purpose:
        "Ele cria routing e ownership boundary estável para related messages, separando publication de recipient addresses individuais.",
      when: "Crie Topic em torno de contract e lifecycle coerentes, definindo naming, ownership, partitioning, retention, access, schema compatibility, subscription expectations e deletion.",
      context:
        "Uma empresa precisa de durable channel para customer-account lifecycle events consumidos por billing, analytics, CRM e security.",
      application:
        "A platform cria account-events topic com owner, versioned schemas, partitions por account ID, retention e encryption, permissions, consumer groups e lag monitoring.",
      phrase:
        "Particione Topic por account ID para preservar per-account order sem prometer global event order.",
      aliases: ["message topic", "event topic", "tópico"],
      confusion:
        "Topic é publication stream ou destination nomeado; Queue é buffering destination normalmente usada para distribuir work.",
    }),
  },
  exchange: {
    en: content({
      definition:
        "An Exchange is a message-broker routing entity that accepts published messages and directs them to queues or other destinations according to its type, bindings, headers, or routing keys.",
      purpose:
        "It separates producer-facing publication addresses from consumer queues and centralizes fan-out, pattern, direct, or header-based routing policy.",
      when: "Use an Exchange in broker models that support it when messages need controlled routing to one or more queues, defining durability, bindings, unroutable behavior, permissions, and topology ownership.",
      context:
        "Order events must reach a general audit queue and route region-specific fulfillment events to different processing queues without producers knowing queue names.",
      application:
        "Producers publish to an orders topic exchange with routing keys; durable bindings route every event to audit and matching region patterns to fulfillment queues, while alternate routing captures unmatched messages.",
      phrase:
        "Publish to the Exchange with the region routing key; queue bindings, not producer code, select fulfillment destinations.",
      aliases: ["broker exchange", "message exchange", "exchange de mensagens"],
      confusion:
        "An Exchange routes messages and usually does not store them; a Queue buffers messages until consumers receive and acknowledge them.",
    }),
    "pt-BR": content({
      definition:
        "Exchange é uma routing entity de message broker que aceita published messages e as direciona a queues ou destinations conforme type, bindings, headers ou routing keys.",
      purpose:
        "Ela separa producer-facing publication addresses de consumer queues e centraliza fan-out, pattern, direct ou header-based routing policy.",
      when: "Use Exchange em broker models compatíveis quando messages precisarem de controlled routing a queues, definindo durability, bindings, unroutable behavior, permissions e topology ownership.",
      context:
        "Order events chegam a audit queue geral e region-specific fulfillment events vão a processing queues diferentes sem producers conhecerem names.",
      application:
        "Producers publicam em orders topic exchange com routing keys; durable bindings enviam tudo a audit e region patterns a fulfillment queues, com alternate routing para unmatched messages.",
      phrase:
        "Publique na Exchange com region routing key; queue bindings, não producer code, escolhem fulfillment destinations.",
      aliases: ["broker exchange", "message exchange", "exchange de mensagens"],
      confusion:
        "Exchange routes messages e normalmente não as armazena; Queue bufferiza messages até consumers receberem e acknowledge.",
    }),
  },
  "routing-key": {
    en: content({
      definition:
        "A Routing Key is a message attribute supplied at publication that a broker or routing layer compares with bindings or rules to select destinations.",
      purpose:
        "It allows producers to describe a routing category while infrastructure controls which queues or subscribers receive the message.",
      when: "Use one in routing topologies that support keyed matching, defining stable vocabulary, allowed values, ownership, access, versioning, and unmatched-message behavior.",
      context:
        "Fulfillment events must route by region and operation to separate queues while a general audit consumer receives every event.",
      application:
        "The producer publishes with fulfillment.eu.created; topic bindings match fulfillment.eu.* to the European queue and fulfillment.# to the audit queue, with alternate routing for mistakes.",
      phrase:
        "Keep customer identifiers out of the Routing Key if they create unbounded topology and expose sensitive business information.",
      aliases: [
        "message routing key",
        "broker routing key",
        "chave de roteamento",
      ],
      confusion:
        "A Routing Key is message metadata used for destination selection; a partition key chooses distribution and ordering placement within a partitioned stream.",
    }),
    "pt-BR": content({
      definition:
        "Routing Key é um message attribute fornecido na publication que broker ou routing layer compara com bindings ou rules para selecionar destinations.",
      purpose:
        "Ela permite a producers descrever routing category enquanto infrastructure controla quais queues ou subscribers recebem message.",
      when: "Use-a em routing topologies com keyed matching, definindo stable vocabulary, allowed values, ownership, access, versioning e unmatched-message behavior.",
      context:
        "Fulfillment events fazem routing por region e operation a queues separadas enquanto audit consumer recebe todos.",
      application:
        "Producer publica fulfillment.eu.created; bindings enviam fulfillment.eu.* à European queue e fulfillment.# à audit queue, com alternate routing.",
      phrase:
        "Mantenha customer IDs fora da Routing Key se criarem topology ilimitada e expuserem business information.",
      aliases: [
        "message routing key",
        "broker routing key",
        "chave de roteamento",
      ],
      confusion:
        "Routing Key é metadata para destination selection; partition key escolhe distribution e ordering placement num partitioned stream.",
    }),
  },
  "dead-letter-queue": {
    en: content({
      definition:
        "A Dead Letter Queue is a separate destination that holds messages a messaging system could not deliver or a consumer could not process under the normal policy.",
      purpose:
        "It isolates poison or exhausted messages so normal flow can continue while preserving evidence for diagnosis, correction, replay, or disposal.",
      when: "Use a DLQ where indefinite retry would block or overload processing, defining failure reasons, retention, alerting, access, privacy, ownership, replay safety, and terminal disposal.",
      context:
        "One malformed order event fails every consumer attempt and is repeatedly redelivered, consuming capacity and delaying valid orders.",
      application:
        "After classified attempts, the broker moves the message with original identity and failure metadata to an access-controlled DLQ; owners alert, diagnose, repair data or code, and replay idempotently.",
      phrase:
        "Moving the message to the Dead Letter Queue protects flow, but the incident remains unresolved until an owner handles and verifies it.",
      aliases: [
        "dlq",
        "dead-letter queue",
        "dead letter channel",
        "fila de mensagens mortas",
      ],
      confusion:
        "A DLQ isolates unprocessable or undeliverable messages; a retry queue delays messages that are still expected to succeed under a defined attempt policy.",
    }),
    "pt-BR": content({
      definition:
        "Dead Letter Queue é uma destination separada que retém messages que messaging system não entregou ou consumer não processou pela normal policy.",
      purpose:
        "Ela isola poison ou exhausted messages para normal flow continuar, preservando evidence para diagnosis, correction, replay ou disposal.",
      when: "Use DLQ onde indefinite retry bloquearia ou sobrecarregaria processing, definindo failure reasons, retention, alerting, access, privacy, ownership, replay safety e disposal.",
      context:
        "Um malformed order event falha em todo attempt e é redelivered, consumindo capacity e atrasando valid orders.",
      application:
        "Após attempts classificados, broker move message com identity e failure metadata a DLQ protegida; owners alertam, corrigem e fazem idempotent replay.",
      phrase:
        "Mover message à Dead Letter Queue protege flow, mas incident continua até owner tratá-la e verificar.",
      aliases: [
        "dlq",
        "dead-letter queue",
        "dead letter channel",
        "fila de mensagens mortas",
      ],
      confusion:
        "DLQ isola unprocessable ou undeliverable messages; retry queue adia messages ainda esperadas ter sucesso conforme attempt policy.",
    }),
  },
  retry: {
    en: content({
      definition:
        "A Retry is a repeated attempt to perform an operation after a previous attempt failed or produced an uncertain result.",
      purpose:
        "It can recover automatically from transient faults such as brief network loss, throttling, failover, or temporary dependency unavailability.",
      when: "Retry only operations likely to succeed later and safe to repeat, using bounded attempts, timeouts, backoff and jitter, idempotency, total deadlines, observability, and terminal handling.",
      context:
        "A consumer times out calling a provider and cannot know whether the payment request failed before or after the provider accepted it.",
      application:
        "The consumer reuses an idempotency key, classifies the timeout as retryable, waits with jittered backoff within the workflow deadline, caps attempts, and reconciles uncertain final state.",
      phrase:
        "Retry the provider timeout with the same idempotency key; generating a new key could create a duplicate payment.",
      aliases: ["retry attempt", "reattempt", "nova tentativa"],
      confusion:
        "A Retry repeats a failed operation; a fallback chooses an alternate behavior or resource instead of attempting the same operation again.",
    }),
    "pt-BR": content({
      definition:
        "Retry é uma nova tentativa de executar operation depois que attempt anterior falhou ou produziu resultado incerto.",
      purpose:
        "Ele recupera transient faults como network loss breve, throttling, failover ou dependency unavailability temporária.",
      when: "Faça Retry somente em operations que podem ter sucesso depois e são safe to repeat, usando bounded attempts, timeouts, backoff e jitter, idempotency, deadlines e terminal handling.",
      context:
        "Um consumer recebe timeout do provider e não sabe se payment request falhou antes ou depois de aceitação.",
      application:
        "Consumer reutiliza idempotency key, classifica timeout como retryable, espera jittered backoff dentro do deadline, limita attempts e reconcilia final state.",
      phrase:
        "Faça Retry do timeout com a mesma idempotency key; nova key pode criar duplicate payment.",
      aliases: ["retry attempt", "reattempt", "nova tentativa"],
      confusion:
        "Retry repete failed operation; fallback escolhe alternate behavior ou resource em vez de repetir a mesma operation.",
    }),
  },
  backoff: {
    en: content({
      definition:
        "Backoff is a retry-control strategy that introduces a delay between attempts, often increasing or varying that delay to reduce pressure on a failing or constrained dependency.",
      purpose:
        "It prevents tight retry loops, gives transient conditions time to recover, reduces coordinated load, and protects capacity for normal or recovering traffic.",
      when: "Use Backoff for retryable failures where immediate repetition is unlikely to help, adding jitter, caps, deadlines, server hints, cancellation, and bounded attempts.",
      context:
        "Thousands of clients immediately retry a failed configuration request and keep an overloaded service from recovering.",
      application:
        "Clients wait before each retry, randomize timing, respect Retry-After, stop at a maximum delay and overall deadline, and surface failure after the allowed attempts.",
      phrase:
        "Add jitter to Backoff so every client does not retry on the same second and recreate the overload wave.",
      aliases: ["retry backoff", "retry delay", "espera entre tentativas"],
      confusion:
        "Backoff controls when retries occur; rate limiting controls how much traffic a client or population may send over a period.",
    }),
    "pt-BR": content({
      definition:
        "Backoff é uma retry-control strategy que introduz delay entre attempts, frequentemente aumentando ou variando espera para reduzir pressão sobre dependency falha ou limitada.",
      purpose:
        "Ele evita tight retry loops, dá tempo a transient conditions, reduz coordinated load e protege capacity de normal ou recovering traffic.",
      when: "Use Backoff em retryable failures onde repetition imediata não ajuda, adicionando jitter, caps, deadlines, server hints, cancellation e bounded attempts.",
      context:
        "Milhares de clients repetem configuration request imediatamente e impedem overloaded service de recuperar.",
      application:
        "Clients esperam antes de retry, randomizam timing, respeitam Retry-After, param em maximum delay e overall deadline e expõem final failure.",
      phrase:
        "Adicione jitter ao Backoff para clients não repetirem no mesmo segundo e recriarem overload wave.",
      aliases: ["retry backoff", "retry delay", "espera entre tentativas"],
      confusion:
        "Backoff controla quando retries ocorrem; rate limiting controla quanto traffic um client ou population pode enviar num período.",
    }),
  },
  "exponential-backoff": {
    en: content({
      definition:
        "Exponential Backoff is a backoff policy in which the delay grows exponentially with successive failures, usually with a maximum cap and random jitter.",
      purpose:
        "It reduces repeated load aggressively during prolonged failure while allowing early transient errors to recover with relatively short delay.",
      when: "Use it for retryable remote operations under shared contention, selecting base, multiplier, cap, jitter, attempts, and overall deadline from user and system tolerances.",
      context:
        "A broker connection fails across many workers, and immediate fixed retries create synchronized connection storms during recovery.",
      application:
        "Workers calculate a capped exponentially growing delay, randomize within the interval, honor cancellation and server guidance, reset after stable success, and report attempt state.",
      phrase:
        "Exponential Backoff with full jitter spreads reconnect attempts while the broker restores capacity.",
      aliases: [
        "exponential retry backoff",
        "binary exponential backoff",
        "espera exponencial",
      ],
      confusion:
        "Exponential Backoff defines a particular delay-growth rule; Backoff is the broader class of delaying retry attempts and may use fixed, linear, adaptive, or other policies.",
    }),
    "pt-BR": content({
      definition:
        "Exponential Backoff é uma backoff policy em que delay cresce exponencialmente com failures sucessivas, normalmente com maximum cap e random jitter.",
      purpose:
        "Ele reduz repeated load agressivamente durante failure prolongada e permite a transient errors iniciais recuperar com delay menor.",
      when: "Use-o em retryable remote operations sob shared contention, escolhendo base, multiplier, cap, jitter, attempts e overall deadline conforme tolerances.",
      context:
        "Uma broker connection falha entre workers e immediate fixed retries criam synchronized connection storms durante recovery.",
      application:
        "Workers calculam capped exponential delay, randomizam intervalo, respeitam cancellation e server guidance, resetam após stable success e reportam attempt state.",
      phrase:
        "Exponential Backoff com full jitter distribui reconnect attempts enquanto broker restaura capacity.",
      aliases: [
        "exponential retry backoff",
        "binary exponential backoff",
        "espera exponencial",
      ],
      confusion:
        "Exponential Backoff define delay-growth rule específica; Backoff é classe ampla com fixed, linear, adaptive e outras policies.",
    }),
  },
  acknowledgement: {
    en: content({
      definition:
        "An Acknowledgement is a signal from a receiver or consumer confirming that a message, delivery, or processing stage has reached a defined success point.",
      purpose:
        "It lets the sender or broker decide that custody or processing succeeded and that the message can be removed, committed, advanced, or no longer redelivered.",
      when: "Acknowledge only after the durability boundary promised by the system is satisfied, defining positive and negative acknowledgement, timeout, batch, transaction, and crash behavior.",
      context:
        "A consumer receives an order message, sends acknowledgement immediately, then crashes before committing the shipment, permanently losing work.",
      application:
        "The consumer validates and processes idempotently, commits shipment and inbox state, then acknowledges; retryable failure leaves delivery unacknowledged or negatively acknowledges according to policy.",
      phrase:
        "Delay the Acknowledgement until the shipment state is durable, or a crash can convert an accepted message into lost work.",
      aliases: [
        "ack",
        "message acknowledgement",
        "acknowledgment",
        "confirmação de recebimento",
      ],
      confusion:
        "An Acknowledgement confirms a defined delivery or processing point; a response is application data returned to a requester and may not imply durable message handling.",
    }),
    "pt-BR": content({
      definition:
        "Acknowledgement é um signal de receiver ou consumer confirmando que message, delivery ou processing stage alcançou success point definido.",
      purpose:
        "Ele permite a sender ou broker decidir que custody ou processing teve sucesso e message pode ser removida, committed, avançada ou não redelivered.",
      when: "Faça acknowledge somente depois do durability boundary prometido, definindo positive e negative acknowledgement, timeout, batch, transaction e crash behavior.",
      context:
        "Consumer recebe order message, acknowledge imediatamente e crash antes de commit do shipment, perdendo work permanentemente.",
      application:
        "Consumer valida e processa idempotentemente, commita shipment e inbox state e então acknowledge; retryable failure segue policy sem ack ou com negative ack.",
      phrase:
        "Atrase Acknowledgement até shipment state durable ou crash transforma accepted message em lost work.",
      aliases: [
        "ack",
        "message acknowledgement",
        "acknowledgment",
        "confirmação de recebimento",
      ],
      confusion:
        "Acknowledgement confirma delivery ou processing point; response é application data retornada e pode não implicar durable handling.",
    }),
  },
  "at-most-once-delivery": {
    en: content({
      definition:
        "At-Most-Once Delivery is a messaging guarantee under which each message is delivered zero or one time, avoiding redelivery but allowing loss when failure occurs around transfer or processing.",
      purpose:
        "It favors non-duplication and low overhead where missing an occasional message is less harmful than processing one more than once.",
      when: "Use it for disposable or replaceable information such as frequent telemetry samples where loss is acceptable and later data supersedes the missing value.",
      context:
        "A live cursor-position update becomes obsolete within milliseconds, while replaying old positions after reconnect would make collaboration look incorrect.",
      application:
        "The channel sends without durable storage or retry, the receiver processes best-effort, and the next update replaces missing state rather than recovering every prior message.",
      phrase:
        "At-Most-Once Delivery suits cursor updates because losing one is acceptable and redelivering stale movement is not useful.",
      aliases: [
        "at most once",
        "zero-or-once delivery",
        "entrega no máximo uma vez",
      ],
      confusion:
        "At-Most-Once avoids duplicate delivery but permits loss; At-Least-Once avoids loss within the guarantee but permits duplicates.",
    }),
    "pt-BR": content({
      definition:
        "At-Most-Once Delivery é uma messaging guarantee em que cada message é entregue zero ou uma vez, evitando redelivery mas permitindo loss em failure de transfer ou processing.",
      purpose:
        "Ela favorece non-duplication e baixo overhead onde perder message ocasional causa menos dano que processá-la mais de uma vez.",
      when: "Use-a em informação descartável ou substituível, como telemetry samples frequentes, onde loss é aceitável e data posterior substitui a ausente.",
      context:
        "Um live cursor-position update fica obsoleto em milissegundos e replay de old positions após reconnect seria incorreto.",
      application:
        "O channel envia sem durable storage ou retry, receiver processa best-effort e next update substitui missing state em vez de recuperar toda message.",
      phrase:
        "At-Most-Once Delivery serve a cursor updates porque perder um é aceitável e redeliver stale movement não ajuda.",
      aliases: [
        "at most once",
        "zero-or-once delivery",
        "entrega no máximo uma vez",
      ],
      confusion:
        "At-Most-Once evita duplicate delivery mas permite loss; At-Least-Once evita loss no guarantee scope mas permite duplicates.",
    }),
  },
  "at-least-once-delivery": {
    en: content({
      definition:
        "At-Least-Once Delivery is a messaging guarantee under which the system retries until a message is delivered one or more times within its guarantee boundary, making duplicates possible.",
      purpose:
        "It favors eventual delivery over non-duplication for important work, relying on consumers and business operations to tolerate or remove duplicate effects.",
      when: "Use it when message loss is unacceptable and processing can be made idempotent or deduplicated, with bounded retention, retry, acknowledgement, and poison-message handling.",
      context:
        "A worker commits an invoice but crashes before acknowledgement, so the broker redelivers the same invoice command.",
      application:
        "The message carries a stable identity; the consumer stores processed identity or applies an idempotent business key in the same transaction, then acknowledges durable success.",
      phrase:
        "At-Least-Once Delivery means duplicate processing attempts are normal, so invoice creation must use a stable idempotency key.",
      aliases: [
        "at least once",
        "one-or-more delivery",
        "entrega pelo menos uma vez",
      ],
      confusion:
        "At-Least-Once ensures one or more deliveries within scope but allows duplicates; Exactly-Once Semantics aims for one observable business effect despite retries and failures.",
    }),
    "pt-BR": content({
      definition:
        "At-Least-Once Delivery é uma messaging guarantee em que system faz retry até message ser entregue uma ou mais vezes dentro do boundary, permitindo duplicates.",
      purpose:
        "Ela favorece eventual delivery sobre non-duplication em work importante, dependendo de consumers e business operations tolerarem ou removerem duplicate effects.",
      when: "Use-a quando message loss for inaceitável e processing puder ser idempotent ou deduplicated, com retention, retry, acknowledgement e poison-message handling.",
      context:
        "Worker commita invoice e crash antes do acknowledgement, então broker redeliver mesma invoice command.",
      application:
        "Message carrega stable identity; consumer armazena processed identity ou aplica idempotent business key na mesma transaction e acknowledge durable success.",
      phrase:
        "At-Least-Once Delivery torna duplicate attempts normais; invoice creation precisa de stable idempotency key.",
      aliases: [
        "at least once",
        "one-or-more delivery",
        "entrega pelo menos uma vez",
      ],
      confusion:
        "At-Least-Once permite duplicates; Exactly-Once Semantics busca um observable business effect apesar de retries e failures.",
    }),
  },
  "exactly-once-semantics": {
    en: content({
      definition:
        "Exactly-Once Semantics is the property that a logical operation has one observable committed effect despite duplicate delivery, retry, crash, replay, or uncertain acknowledgement within a defined system scope.",
      purpose:
        "It protects business correctness from duplicate or missing effects by coordinating identity, state, transactions, deduplication, and recovery rather than assuming a network sends only once.",
      when: "Pursue it where duplicate effects are unacceptable, state the exact boundary and failure model, and use transactional messaging, idempotency, deduplication, reconciliation, or workflow design as required.",
      context:
        "A payment event may be replayed after consumer recovery, but the ledger must post exactly one debit for the logical transaction.",
      application:
        "The consumer uses stable transaction identity and atomically records event consumption with the ledger entry; replay finds the committed result and returns success without another debit.",
      phrase:
        "Exactly-Once Semantics applies to the ledger effect within this transaction boundary, not to every network packet and external notification.",
      aliases: [
        "exactly once",
        "single-effect semantics",
        "semântica de exatamente uma vez",
      ],
      confusion:
        "Exactly-Once Semantics concerns one observable effect in a defined scope; exactly-once delivery across arbitrary distributed boundaries is generally not a simple transport guarantee.",
    }),
    "pt-BR": content({
      definition:
        "Exactly-Once Semantics é a propriedade de logical operation ter um observable committed effect apesar de duplicate delivery, retry, crash, replay ou uncertain acknowledgement num scope definido.",
      purpose:
        "Ela protege business correctness de duplicate ou missing effects coordenando identity, state, transactions, deduplication e recovery, não presumindo network send único.",
      when: "Busque-a onde duplicate effects forem inaceitáveis, declarando boundary e failure model e usando transactional messaging, idempotency, deduplication, reconciliation ou workflow design.",
      context:
        "Um payment event pode ser replayed, mas ledger deve postar exatamente um debit para logical transaction.",
      application:
        "Consumer usa stable transaction identity e registra event consumption e ledger entry atomicamente; replay encontra committed result e não debita novamente.",
      phrase:
        "Exactly-Once Semantics vale para ledger effect neste transaction boundary, não para todo network packet e external notification.",
      aliases: [
        "exactly once",
        "single-effect semantics",
        "semântica de exatamente uma vez",
      ],
      confusion:
        "Exactly-Once Semantics trata um observable effect num scope; exactly-once delivery entre arbitrary distributed boundaries não é simples transport guarantee.",
    }),
  },
  event: {
    en: content({
      definition:
        "An Event is an immutable statement that something of significance happened at a particular time in a domain, system, or process.",
      purpose:
        "It records a fact that can drive reaction, history, integration, audit, or derived state without commanding how each interested participant must respond.",
      when: "Emit an Event after the represented fact is valid and durable, naming it in past tense and defining identity, occurrence time, subject, schema, ownership, and evolution.",
      context:
        "After an order is accepted, inventory, fulfillment, analytics, and notification need to know the fact while owning separate reactions.",
      application:
        "The order domain emits OrderPlaced with event ID, occurred time, order reference, relevant immutable snapshot or references, schema version, and trace context after commit.",
      phrase:
        "OrderPlaced is an Event describing a completed fact; ReserveInventory is a command requesting a future action.",
      aliases: ["domain event", "integration event", "evento"],
      confusion:
        "An Event reports a past fact; a Command requests that a specific capability perform an action and may be rejected.",
    }),
    "pt-BR": content({
      definition:
        "Event é uma declaração imutável de que algo significativo aconteceu num momento em domain, system ou process.",
      purpose:
        "Ele registra um fact capaz de acionar reaction, history, integration, audit ou derived state sem comandar como cada participant responde.",
      when: "Emita Event depois de o fact representado ser válido e durable, nomeando no passado e definindo identity, occurrence time, subject, schema, ownership e evolution.",
      context:
        "Depois de order aceita, inventory, fulfillment, analytics e notification precisam conhecer fact e possuem reactions separadas.",
      application:
        "Order domain emite OrderPlaced com event ID, occurred time, order reference, immutable snapshot ou references, schema version e trace context após commit.",
      phrase:
        "OrderPlaced é Event de fact concluído; ReserveInventory é command que solicita future action.",
      aliases: ["domain event", "integration event", "evento"],
      confusion:
        "Event relata past fact; Command pede action a capability específica e pode ser rejeitado.",
    }),
  },
  "event-bus": {
    en: content({
      definition:
        "An Event Bus is a communication mechanism or architectural role through which publishers emit events and interested handlers or subscribers receive them without direct point-to-point coupling.",
      purpose:
        "It centralizes event distribution and enables independent reactions, extensibility, and integration while keeping event producers unaware of specific receivers.",
      when: "Use one for event-driven communication within a process or across systems, defining scope, ownership, contracts, ordering, delivery, isolation, observability, and avoiding an ungoverned global dependency.",
      context:
        "A desktop application must let navigation, analytics, autosave, and notifications react to document lifecycle events without each module importing the others.",
      application:
        "Modules publish typed events to an in-process bus, handlers subscribe by contract, failures are isolated and observed, lifecycle removes subscriptions, and business-critical persistence uses a durable external mechanism.",
      phrase:
        "Use the Event Bus for independent document reactions, but do not hide a required transactional workflow behind anonymous handlers.",
      aliases: [
        "event message bus",
        "application event bus",
        "barramento de eventos",
      ],
      confusion:
        "An Event Bus is the distribution mechanism or role; a Message Broker is deployable middleware that may provide durable bus behavior among other capabilities.",
    }),
    "pt-BR": content({
      definition:
        "Event Bus é um communication mechanism ou architectural role pelo qual publishers emitem events e handlers ou subscribers interessados os recebem sem point-to-point coupling.",
      purpose:
        "Ele centraliza event distribution e permite independent reactions, extensibility e integration mantendo producers sem conhecimento de receivers.",
      when: "Use-o para event-driven communication in-process ou entre systems, definindo scope, ownership, contracts, ordering, delivery, isolation e observability sem global dependency sem governance.",
      context:
        "Um desktop app permite a navigation, analytics, autosave e notifications reagir a document lifecycle events sem modules importarem uns aos outros.",
      application:
        "Modules publicam typed events em in-process bus, handlers assinam por contract, failures são isoladas e observadas, lifecycle remove subscriptions e persistence crítica usa mecanismo durable.",
      phrase:
        "Use Event Bus para document reactions independentes, mas não esconda required transactional workflow em anonymous handlers.",
      aliases: [
        "event message bus",
        "application event bus",
        "barramento de eventos",
      ],
      confusion:
        "Event Bus é mechanism ou role de distribution; Message Broker é middleware deployable que pode oferecer durable bus behavior.",
    }),
  },
  "event-stream": {
    en: content({
      definition:
        "An Event Stream is an ordered, append-oriented sequence of event records over time, often retained so consumers can read from positions, replay history, and process continuously.",
      purpose:
        "It represents evolving activity as durable temporal data and supports multiple independent consumers, state derivation, audit, analytics, and reprocessing.",
      when: "Use one where ordered history and replay are valuable, defining event identity, partitioning and order scope, retention, schemas, timestamps, access, compaction, and consumer positions.",
      context:
        "Account balance, fraud models, statements, and analytics all need the same sequence of financial transaction facts with independent processing speeds.",
      application:
        "Transactions append to partitions keyed by account, consumers maintain offsets and idempotent state, schemas evolve compatibly, retention meets audit needs, and lag is monitored.",
      phrase:
        "The Event Stream preserves order per account partition, not a single global order across every customer.",
      aliases: ["event log stream", "stream of events", "fluxo de eventos"],
      confusion:
        "An Event Stream is the ordered sequence of records; stream processing is the computation performed continuously over one or more streams.",
    }),
    "pt-BR": content({
      definition:
        "Event Stream é uma sequência ordenada e append-oriented de event records no tempo, normalmente retida para consumers lerem positions, replay history e processarem continuamente.",
      purpose:
        "Ele representa evolving activity como durable temporal data e suporta independent consumers, state derivation, audit, analytics e reprocessing.",
      when: "Use-o quando ordered history e replay forem valiosos, definindo event identity, partitioning e order scope, retention, schemas, timestamps, access, compaction e consumer positions.",
      context:
        "Account balance, fraud models, statements e analytics precisam da mesma sequência de financial transaction facts em velocidades diferentes.",
      application:
        "Transactions entram em partitions por account, consumers mantêm offsets e idempotent state, schemas evoluem compatibly, retention atende audit e lag é monitorado.",
      phrase:
        "Event Stream preserva order por account partition, não global order de todos os customers.",
      aliases: ["event log stream", "stream of events", "fluxo de eventos"],
      confusion:
        "Event Stream é a ordered sequence de records; stream processing é computation contínua sobre streams.",
    }),
  },
  "event-sourcing": {
    en: content({
      definition:
        "Event Sourcing is a persistence pattern in which an aggregate's authoritative state is represented by an append-only sequence of domain events and current state is reconstructed by replaying them.",
      purpose:
        "It preserves decision history, supports temporal reconstruction and new projections, and makes state transitions explicit rather than storing only the latest snapshot.",
      when: "Use it in domains where audit, temporal behavior, complex decisions, and history-derived views justify the substantial complexity of event design, evolution, replay, storage, and operations.",
      context:
        "A trading account must explain every balance and entitlement transition at any historical point and derive new regulatory views from past decisions.",
      application:
        "Commands load an aggregate's events, validate invariants, append new versioned domain events with optimistic concurrency, update projections asynchronously, snapshot carefully, and test replay and migrations.",
      phrase:
        "With Event Sourcing, AccountDebited is part of authoritative history; the current balance table is a rebuildable projection.",
      aliases: [
        "event-sourced persistence",
        "event source pattern",
        "persistência por eventos",
      ],
      confusion:
        "Event Sourcing uses events as the authoritative state history; event-driven architecture merely uses events for communication and may store current state conventionally.",
    }),
    "pt-BR": content({
      definition:
        "Event Sourcing é um persistence pattern em que authoritative state de aggregate é uma append-only sequence de domain events e current state é reconstruído por replay.",
      purpose:
        "Ele preserva decision history, suporta temporal reconstruction e novas projections e torna state transitions explícitas em vez de guardar somente latest snapshot.",
      when: "Use-o em domains onde audit, temporal behavior, complex decisions e history-derived views justificam complexity de event design, evolution, replay, storage e operations.",
      context:
        "Uma trading account explica toda balance e entitlement transition em qualquer ponto histórico e deriva novas regulatory views.",
      application:
        "Commands carregam aggregate events, validam invariants, append versioned domain events com optimistic concurrency, atualizam projections, fazem snapshot e testam replay.",
      phrase:
        "Com Event Sourcing, AccountDebited é authoritative history; current balance table é projection reconstruível.",
      aliases: [
        "event-sourced persistence",
        "event source pattern",
        "persistência por eventos",
      ],
      confusion:
        "Event Sourcing usa events como authoritative state history; event-driven architecture usa events para communication e pode guardar current state convencionalmente.",
    }),
  },
  cqrs: {
    en: content({
      definition:
        "Command Query Responsibility Segregation is an architectural pattern that separates models and paths that change system state from those that read and present state.",
      purpose:
        "It allows command invariants and read needs to evolve and scale independently, supporting specialized projections, permissions, performance, and consistency choices.",
      when: "Use CQRS where write-domain complexity and diverse read models justify duplicated models and synchronization, not as a default split for simple create-read-update-delete applications.",
      context:
        "A trading system enforces complex order invariants while dashboards need denormalized, high-volume, low-latency views across accounts and markets.",
      application:
        "Commands target the domain model and emit changes; projection consumers build read stores optimized for queries, APIs expose staleness semantics, and recovery can rebuild views.",
      phrase:
        "CQRS lets the order command model protect trading invariants while the dashboard reads a separate projection.",
      aliases: [
        "command query responsibility segregation",
        "command-query separation architecture",
        "segregação de comando e consulta",
      ],
      confusion:
        "CQRS separates command and query models or paths; Event Sourcing stores state as events and can be used with or without CQRS.",
    }),
    "pt-BR": content({
      definition:
        "Command Query Responsibility Segregation é um architectural pattern que separa models e paths que mudam system state daqueles que leem e apresentam state.",
      purpose:
        "Ele permite a command invariants e read needs evoluir e escalar independentemente, suportando specialized projections, permissions, performance e consistency choices.",
      when: "Use CQRS onde write-domain complexity e read models diversos justificarem models duplicados e synchronization, não como default em CRUD simples.",
      context:
        "Um trading system aplica complex order invariants enquanto dashboards precisam de denormalized low-latency views entre accounts e markets.",
      application:
        "Commands atingem domain model e emitem changes; projection consumers constroem read stores, APIs expõem staleness semantics e recovery reconstrói views.",
      phrase:
        "CQRS permite order command model proteger trading invariants enquanto dashboard lê projection separada.",
      aliases: [
        "command query responsibility segregation",
        "command-query separation architecture",
        "segregação de comando e consulta",
      ],
      confusion:
        "CQRS separa command e query models ou paths; Event Sourcing guarda state como events e pode ser usado com ou sem CQRS.",
    }),
  },
  saga: {
    en: content({
      definition:
        "A Saga is a distributed transaction pattern that coordinates a sequence of local transactions across services and uses compensating actions or forward recovery when later steps fail.",
      purpose:
        "It maintains business consistency for long-running cross-service workflows without holding one atomic database transaction or distributed lock across participants.",
      when: "Use a Saga when a business process crosses independent transactional boundaries and temporary inconsistency is acceptable, defining state, idempotency, deadlines, compensation limits, observability, and manual recovery.",
      context:
        "Booking a trip requires reserving flight, hotel, and payment in separate systems, and a later failure may require canceling earlier reservations.",
      application:
        "The workflow records saga identity and step state, invokes idempotent local actions, handles retries and timeouts, runs compensations in safe order, and escalates irreversible failures.",
      phrase:
        "The Saga compensates the hotel reservation if payment fails, but it cannot pretend every external cancellation is instantaneous or guaranteed.",
      aliases: ["saga pattern", "distributed saga", "transação saga"],
      confusion:
        "A Saga coordinates local transactions and compensation for one business process; two-phase commit attempts atomic agreement among participants before committing.",
    }),
    "pt-BR": content({
      definition:
        "Saga é um distributed transaction pattern que coordena sequência de local transactions entre services e usa compensating actions ou forward recovery quando steps posteriores falham.",
      purpose:
        "Ela mantém business consistency em long-running cross-service workflows sem manter uma atomic database transaction ou distributed lock entre participantes.",
      when: "Use Saga quando business process cruzar transactional boundaries e temporary inconsistency for aceitável, definindo state, idempotency, deadlines, compensation limits, observability e manual recovery.",
      context:
        "Reservar viagem exige flight, hotel e payment em systems separados, e later failure pode exigir cancelamentos anteriores.",
      application:
        "Workflow registra saga identity e step state, invoca idempotent local actions, trata retries e timeouts, executa compensations em safe order e escala irreversible failures.",
      phrase:
        "Saga compensa hotel se payment falha, mas não presume external cancellation instantâneo ou garantido.",
      aliases: ["saga pattern", "distributed saga", "transação saga"],
      confusion:
        "Saga coordena local transactions e compensation; two-phase commit tenta atomic agreement entre participants antes de commit.",
    }),
  },
  orchestration: {
    en: content({
      definition:
        "Orchestration is a coordination style in which a central workflow component explicitly directs participants, tracks progress, applies decisions, and manages completion, retry, timeout, or compensation.",
      purpose:
        "It makes end-to-end process state and control visible in one place, supporting complex sequencing, governance, observability, and recovery across distributed steps.",
      when: "Use Orchestration when a workflow has significant sequencing, deadlines, compensation, conditional logic, or audit needs, protecting the orchestrator from absorbing participants' domain logic.",
      context:
        "Opening a business account requires identity, risk, document, funding, and notification steps with timeouts, manual review, and compensating closure.",
      application:
        "A durable orchestrator stores workflow state, sends idempotent commands, correlates outcomes, advances rules, schedules timeouts, retries transient failures, invokes compensation, and exposes status.",
      phrase:
        "The Orchestration owns account-opening sequence and recovery, while Identity remains responsible for verification rules.",
      aliases: [
        "workflow orchestration",
        "process orchestration",
        "orquestração",
      ],
      confusion:
        "Orchestration uses explicit central coordination; Choreography lets participants react to events without one component directing the full process.",
    }),
    "pt-BR": content({
      definition:
        "Orchestration é um coordination style em que workflow component central dirige participants, acompanha progress, aplica decisions e administra completion, retry, timeout ou compensation.",
      purpose:
        "Ela torna end-to-end process state e control visíveis num lugar, suportando sequencing, governance, observability e recovery entre distributed steps.",
      when: "Use-a quando workflow tiver sequencing, deadlines, compensation, conditional logic ou audit relevantes, evitando que orchestrator absorva domain logic dos participants.",
      context:
        "Abrir business account exige identity, risk, document, funding e notification steps com timeouts, manual review e compensating closure.",
      application:
        "Durable orchestrator guarda workflow state, envia idempotent commands, correlaciona outcomes, avança rules, agenda timeouts, faz retries e compensation e expõe status.",
      phrase:
        "Orchestration possui account-opening sequence e recovery; Identity continua responsável por verification rules.",
      aliases: [
        "workflow orchestration",
        "process orchestration",
        "orquestração",
      ],
      confusion:
        "Orchestration usa central coordination explícita; Choreography permite reactions a events sem component dirigir processo inteiro.",
    }),
  },
  choreography: {
    en: content({
      definition:
        "Choreography is a decentralized coordination style in which participants publish events and react to other events so the overall process emerges without one central controller directing every step.",
      purpose:
        "It preserves participant autonomy and loose coupling, allowing independent capabilities to evolve and join event-driven processes through contracts.",
      when: "Use Choreography for relatively understandable, loosely coupled reactions with clear ownership, limiting event chains and adding process visibility, deadlines, and recovery where business completion matters.",
      context:
        "After an order is placed, inventory reserves stock, payment authorizes, and fulfillment prepares shipment by reacting to facts, with no central workflow service.",
      application:
        "Each service owns local state and event handlers, publishes outcome events, processes idempotently, documents contracts and expected process, correlates business identity, and exposes end-to-end monitoring.",
      phrase:
        "Choreography keeps Order unaware of Notification, but the business process still needs a way to detect missing fulfillment progress.",
      aliases: ["event choreography", "decentralized workflow", "coreografia"],
      confusion:
        "Choreography coordinates through distributed event reactions; Orchestration uses a central component to direct and track the workflow.",
    }),
    "pt-BR": content({
      definition:
        "Choreography é um coordination style descentralizado em que participants publicam events e reagem a outros, formando processo geral sem central controller dirigir cada step.",
      purpose:
        "Ela preserva participant autonomy e loose coupling, permitindo capabilities independentes evoluírem e entrarem em event-driven processes por contracts.",
      when: "Use-a em reactions compreensíveis e loosely coupled com ownership claro, limitando event chains e adicionando process visibility, deadlines e recovery onde completion importa.",
      context:
        "Após order placed, inventory reserva stock, payment autoriza e fulfillment prepara shipment reagindo a facts, sem central workflow service.",
      application:
        "Cada service possui local state e handlers, publica outcome events, processa idempotently, documenta contracts e process, correlaciona business identity e expõe monitoring.",
      phrase:
        "Choreography mantém Order sem conhecer Notification, mas business process precisa detectar missing fulfillment progress.",
      aliases: ["event choreography", "decentralized workflow", "coreografia"],
      confusion:
        "Choreography coordena por distributed event reactions; Orchestration usa central component para dirigir e acompanhar workflow.",
    }),
  },
  "outbox-pattern": {
    en: content({
      definition:
        "The Outbox Pattern is a reliable messaging pattern that stores an outgoing message record in the same local transaction as the business state change, then publishes it asynchronously.",
      purpose:
        "It closes the consistency gap between committing database state and publishing a message without requiring one distributed transaction across the database and broker.",
      when: "Use it when a service must reliably publish after local state changes, designing polling or log capture, ordering, duplicate publication, cleanup, backlog, privacy, and monitoring.",
      context:
        "An order commits successfully but the process crashes before sending OrderPlaced, leaving fulfillment permanently unaware.",
      application:
        "The database transaction inserts order and outbox record; a relay reads unpublished records, sends versioned events with stable IDs, confirms broker acceptance, marks progress, retries, and archives safely.",
      phrase:
        "The Outbox Pattern guarantees the event record exists with the order, but consumers still need idempotency because publication can repeat.",
      aliases: [
        "transactional outbox",
        "outbox messaging pattern",
        "padrão outbox",
      ],
      confusion:
        "The Outbox Pattern makes outgoing publication reliable after local commit; the Inbox Pattern makes incoming message processing and deduplication reliable at a consumer.",
    }),
    "pt-BR": content({
      definition:
        "Outbox Pattern é um reliable messaging pattern que armazena outgoing message record na mesma local transaction da business state change e publica assincronamente.",
      purpose:
        "Ele fecha consistency gap entre database commit e message publication sem distributed transaction entre database e broker.",
      when: "Use-o quando service precisar publicar confiavelmente após local state changes, projetando polling ou log capture, ordering, duplicate publication, cleanup, backlog, privacy e monitoring.",
      context:
        "Um order commita, mas process crash antes de enviar OrderPlaced, deixando fulfillment sem conhecimento.",
      application:
        "Database transaction insere order e outbox record; relay lê records, envia versioned events com stable IDs, confirma broker, marca progress, faz retry e archive.",
      phrase:
        "Outbox Pattern garante event record com order, mas consumers ainda precisam de idempotency porque publication pode repetir.",
      aliases: [
        "transactional outbox",
        "outbox messaging pattern",
        "padrão outbox",
      ],
      confusion:
        "Outbox Pattern torna outgoing publication confiável; Inbox Pattern torna incoming processing e deduplication confiáveis.",
    }),
  },
  "inbox-pattern": {
    en: content({
      definition:
        "The Inbox Pattern is a reliable consumer pattern that records an incoming message's identity and processing state, usually transactionally with local effects, to support deduplication and recovery.",
      purpose:
        "It lets consumers handle at-least-once delivery safely by recognizing completed messages and resuming or investigating messages whose processing was interrupted.",
      when: "Use it where duplicate effects are harmful or processing must be auditable, defining identity scope, atomicity, retention, concurrent delivery, failed state, replay, and cleanup.",
      context:
        "A billing consumer may receive CustomerUpgraded repeatedly after acknowledgement timeout but must create only one entitlement change and invoice adjustment.",
      application:
        "The consumer starts a transaction, inserts or locks the inbox identity, skips already completed events, applies local changes, records completion, commits, and then acknowledges delivery.",
      phrase:
        "The Inbox Pattern treats redelivery as completed when the stable event ID already committed with the entitlement change.",
      aliases: [
        "transactional inbox",
        "consumer inbox pattern",
        "padrão inbox",
      ],
      confusion:
        "The Inbox Pattern protects incoming processing from duplicates and interruption; a DLQ isolates messages that normal processing policy cannot complete.",
    }),
    "pt-BR": content({
      definition:
        "Inbox Pattern é um reliable consumer pattern que registra identity e processing state de incoming message, geralmente atomicamente com local effects, para deduplication e recovery.",
      purpose:
        "Ele permite tratar at-least-once delivery com segurança reconhecendo completed messages e retomando ou investigando interrupted processing.",
      when: "Use-o onde duplicate effects forem nocivos ou processing auditável, definindo identity scope, atomicity, retention, concurrent delivery, failed state, replay e cleanup.",
      context:
        "Um billing consumer recebe CustomerUpgraded repetidamente por ack timeout, mas cria somente uma entitlement change e invoice adjustment.",
      application:
        "Consumer inicia transaction, insere ou bloqueia inbox identity, pula completed events, aplica local changes, registra completion, commita e então acknowledge.",
      phrase:
        "Inbox Pattern trata redelivery como concluída quando stable event ID já commited com entitlement change.",
      aliases: [
        "transactional inbox",
        "consumer inbox pattern",
        "padrão inbox",
      ],
      confusion:
        "Inbox Pattern protege incoming processing de duplicates e interruption; DLQ isola messages que normal policy não conclui.",
    }),
  },
  rabbitmq: {
    en: content({
      definition:
        "RabbitMQ is an open-source message broker that implements messaging protocols and provides exchanges, queues, bindings, acknowledgements, routing, durability, and operational controls for message delivery.",
      purpose:
        "It supports asynchronous communication and work distribution with flexible broker-side routing and established delivery, retry, access, and clustering capabilities.",
      when: "Use RabbitMQ when queue-oriented messaging and exchange routing fit workload and operational skills, designing topology, confirmation, acknowledgement, quorum, capacity, backpressure, and recovery.",
      context:
        "A commerce platform needs priority work queues, direct and topic routing, delayed retry topology, and per-consumer acknowledgements for operational tasks.",
      application:
        "Teams declare durable exchanges and quorum queues, bind routing patterns, publish with confirms, consume with bounded prefetch and manual acknowledgements, dead-letter failures, secure virtual hosts, and monitor backlog.",
      phrase:
        "RabbitMQ publisher confirms cover broker acceptance, while consumer acknowledgements separately cover downstream processing.",
      aliases: ["rabbit mq", "rabbitmq broker", "broker rabbitmq"],
      confusion:
        "RabbitMQ is a message broker optimized around exchanges and queues; Apache Kafka is a distributed event-streaming platform centered on partitioned retained logs.",
    }),
    "pt-BR": content({
      definition:
        "RabbitMQ é um open-source message broker que implementa messaging protocols e oferece exchanges, queues, bindings, acknowledgements, routing, durability e operational controls.",
      purpose:
        "Ele suporta async communication e work distribution com broker-side routing flexível e capabilities de delivery, retry, access e clustering.",
      when: "Use RabbitMQ quando queue-oriented messaging e exchange routing atenderem workload e operations, projetando topology, confirmation, acknowledgement, quorum, capacity, backpressure e recovery.",
      context:
        "Uma commerce platform precisa de priority work queues, direct e topic routing, delayed retry topology e per-consumer acknowledgements.",
      application:
        "Times declaram durable exchanges e quorum queues, ligam routing patterns, publicam com confirms, consomem com bounded prefetch e manual acks, dead-letter failures e monitoram backlog.",
      phrase:
        "RabbitMQ publisher confirms cobrem broker acceptance; consumer acknowledgements cobrem downstream processing separadamente.",
      aliases: ["rabbit mq", "rabbitmq broker", "broker rabbitmq"],
      confusion:
        "RabbitMQ é message broker de exchanges e queues; Apache Kafka é distributed event-streaming platform de partitioned retained logs.",
    }),
  },
  "apache-kafka": {
    en: content({
      definition:
        "Apache Kafka is an open-source distributed event-streaming platform that stores ordered records in partitioned replicated topics and lets producers and consumer groups write and read them at scale.",
      purpose:
        "It provides durable high-throughput event logs for streaming integration, replay, independent consumption, state derivation, analytics, and continuous processing.",
      when: "Use Kafka when retained ordered streams, replay, throughput, and multiple independent consumers justify its partitioning, schema, capacity, security, and operational complexity.",
      context:
        "A commerce company needs years of order events consumed independently by fulfillment, fraud, analytics, search, and new future applications.",
      application:
        "The platform defines versioned schemas and topics, partitions by order ID, configures replication and retention, secures producers and groups, commits offsets after safe processing, and monitors lag and broker health.",
      phrase:
        "Apache Kafka retains the order stream after consumption, so a new analytics group can replay history from its own offset.",
      aliases: ["kafka", "kafka event streaming", "plataforma apache kafka"],
      confusion:
        "Kafka centers on retained partitioned event logs; RabbitMQ centers on broker-mediated exchanges and queues, though both can support overlapping messaging use cases.",
    }),
    "pt-BR": content({
      definition:
        "Apache Kafka é uma open-source distributed event-streaming platform que armazena ordered records em partitioned replicated topics e permite producers e consumer groups escreverem e lerem em escala.",
      purpose:
        "Ele fornece durable high-throughput event logs para streaming integration, replay, independent consumption, state derivation, analytics e continuous processing.",
      when: "Use Kafka quando retained ordered streams, replay, throughput e independent consumers justificarem complexity de partitioning, schemas, capacity, security e operations.",
      context:
        "Uma commerce company mantém anos de order events consumidos por fulfillment, fraud, analytics, search e future applications.",
      application:
        "A platform define schemas e topics, particiona por order ID, configura replication e retention, protege producers e groups, commita offsets após safe processing e monitora lag.",
      phrase:
        "Apache Kafka retém order stream após consumption, então novo analytics group pode replay history do próprio offset.",
      aliases: ["kafka", "kafka event streaming", "plataforma apache kafka"],
      confusion:
        "Kafka centra retained partitioned logs; RabbitMQ centra broker-mediated exchanges e queues, embora os use cases se sobreponham.",
    }),
  },
  bullmq: {
    en: content({
      definition:
        "BullMQ is a Node.js queue library built on Redis that provides background jobs, workers, scheduling, retries, delays, priorities, dependencies, rate controls, and operational events.",
      purpose:
        "It lets JavaScript and TypeScript applications move asynchronous work out of request paths and coordinate distributed workers through Redis-backed job state.",
      when: "Use BullMQ for application job processing when Redis and its operational model fit durability and scale needs, designing idempotency, retention, concurrency, retries, stalled work, security, and monitoring.",
      context:
        "A Node.js API must generate reports, send notifications, and process imports after responding to users, with retry and progress tracking.",
      application:
        "The API enqueues typed jobs with stable IDs; dedicated workers validate and process them idempotently with bounded concurrency, backoff and progress, while dashboards track failures and queue age.",
      phrase:
        "Give the BullMQ report job a stable business ID so a request retry does not enqueue two expensive reports.",
      aliases: ["bull mq", "bullmq queue", "biblioteca bullmq"],
      confusion:
        "BullMQ is an application job-queue library using Redis; RabbitMQ is a standalone message broker with protocol and routing abstractions.",
    }),
    "pt-BR": content({
      definition:
        "BullMQ é uma Node.js queue library baseada em Redis que oferece background jobs, workers, scheduling, retries, delays, priorities, dependencies, rate controls e operational events.",
      purpose:
        "Ela permite a JavaScript e TypeScript apps mover async work para fora de request paths e coordenar distributed workers por Redis-backed job state.",
      when: "Use BullMQ para application job processing quando Redis e operational model atenderem durability e scale, projetando idempotency, retention, concurrency, retries, stalled work, security e monitoring.",
      context:
        "Uma Node.js API gera reports, envia notifications e processa imports depois de responder aos users, com retry e progress tracking.",
      application:
        "A API enfileira typed jobs com stable IDs; workers processam idempotently com bounded concurrency, backoff e progress, e dashboards acompanham failures e queue age.",
      phrase:
        "Dê ao BullMQ report job stable business ID para request retry não enfileirar dois reports caros.",
      aliases: ["bull mq", "bullmq queue", "biblioteca bullmq"],
      confusion:
        "BullMQ é application job-queue library em Redis; RabbitMQ é standalone message broker com protocol e routing abstractions.",
    }),
  },
  "background-job": {
    en: content({
      definition:
        "A Background Job is a defined unit of work executed outside the initiating user's immediate request or interactive flow, often asynchronously by a scheduler or worker.",
      purpose:
        "It removes slow, resource-intensive, retryable, or scheduled work from latency-sensitive paths and enables independent capacity and recovery.",
      when: "Use one when the result need not complete before response or when work requires durable retry, batching, scheduling, throttling, or specialized resources, exposing status to users where relevant.",
      context:
        "Generating a year-long financial export takes minutes and can fail transiently, so holding the browser request open is unreliable.",
      application:
        "The API validates and records an export request, enqueues a job with identity and permissions snapshot, returns status, a worker generates securely, records progress and result, and notifies completion.",
      phrase:
        "Run the export as a Background Job and give the user durable status instead of a request that times out silently.",
      aliases: ["async job", "background task", "trabalho em segundo plano"],
      confusion:
        "A Background Job describes work outside the interactive path; a Cron Job is a job triggered by a time-based cron schedule.",
    }),
    "pt-BR": content({
      definition:
        "Background Job é uma unidade definida de work executada fora do immediate request ou interactive flow do usuário, geralmente assincronamente por scheduler ou worker.",
      purpose:
        "Ele remove work lento, resource-intensive, retryable ou scheduled de latency-sensitive paths e permite capacity e recovery independentes.",
      when: "Use-o quando result não precisar terminar antes da response ou trabalho exigir durable retry, batching, scheduling, throttling ou specialized resources, expondo status quando relevante.",
      context:
        "Gerar financial export anual leva minutos e pode falhar transitoriamente, então manter browser request aberto é unreliable.",
      application:
        "API valida e registra export request, enfileira job com identity e permissions snapshot, retorna status; worker gera com segurança e notifica completion.",
      phrase:
        "Execute export como Background Job e ofereça durable status em vez de request que expira silenciosamente.",
      aliases: ["async job", "background task", "trabalho em segundo plano"],
      confusion:
        "Background Job descreve work fora do interactive path; Cron Job é job acionado por time-based cron schedule.",
    }),
  },
  worker: {
    en: content({
      definition:
        "A Worker is a process, thread, or service instance that obtains units of queued or scheduled work and executes their processing logic outside the producer's immediate flow.",
      purpose:
        "It provides independently scalable execution capacity for asynchronous work and isolates resource use, failure, concurrency, and deployment from request-serving components.",
      when: "Use Workers for background or stream processing, defining concurrency, leasing, heartbeat, acknowledgement, graceful shutdown, idempotency, retry, resource limits, and poison-work handling.",
      context:
        "Image transformations should scale with upload volume without consuming web API threads or making uploads wait for every variant.",
      application:
        "Worker instances reserve jobs, renew visibility or heartbeat, fetch source safely, generate idempotent variants, commit results, acknowledge success, release resources, and report health and lag.",
      phrase:
        "The Worker must stop accepting jobs and finish or release its lease before deployment shutdown.",
      aliases: ["job worker", "background worker", "processador de trabalhos"],
      confusion:
        "A Worker is the executor that processes work; a Job is the data and lifecycle representation of one unit of work.",
    }),
    "pt-BR": content({
      definition:
        "Worker é um process, thread ou service instance que obtém queued ou scheduled work units e executa processing logic fora do immediate flow do producer.",
      purpose:
        "Ele fornece execution capacity escalável para async work e isola resource use, failure, concurrency e deployment de request-serving components.",
      when: "Use Workers para background ou stream processing, definindo concurrency, leasing, heartbeat, acknowledgement, graceful shutdown, idempotency, retry, resource limits e poison handling.",
      context:
        "Image transformations escalam com upload volume sem consumir web API threads nem fazer uploads aguardarem cada variant.",
      application:
        "Worker instances reservam jobs, renovam lease, buscam source, geram idempotent variants, commitem results, acknowledge success, liberam resources e reportam health e lag.",
      phrase:
        "Worker deve parar de aceitar jobs e concluir ou liberar lease antes de deployment shutdown.",
      aliases: ["job worker", "background worker", "processador de trabalhos"],
      confusion:
        "Worker é executor de work; Job é data e lifecycle representation de uma work unit.",
    }),
  },
  job: {
    en: content({
      definition:
        "A Job is a named unit of executable work with input, identity, state, ownership, and lifecycle that a worker or scheduler processes independently from its creator.",
      purpose:
        "It makes work durable, schedulable, retryable, observable, and distributable while providing a boundary for progress, result, failure, and cancellation.",
      when: "Represent work as a Job when it needs asynchronous execution or lifecycle management, defining payload, version, idempotency, priority, timeout, attempts, result retention, and authorization.",
      context:
        "A customer requests a data import whose validation and processing may take hours, must survive deployments, and needs visible progress and controlled retry.",
      application:
        "The system stores an ImportCustomerData job with stable identity and source reference, queues it, transitions waiting to active and completed or failed, records progress, and exposes safe status.",
      phrase:
        "The Job payload should reference the protected import file, not duplicate a huge sensitive dataset inside the queue.",
      aliases: ["queued job", "work item job", "tarefa agendada"],
      confusion:
        "A Job is one managed unit of work; a Worker is the execution process that can handle many jobs over time.",
    }),
    "pt-BR": content({
      definition:
        "Job é uma executable work unit nomeada com input, identity, state, ownership e lifecycle que worker ou scheduler processa independentemente do creator.",
      purpose:
        "Ele torna work durable, schedulable, retryable, observable e distributable e cria boundary para progress, result, failure e cancellation.",
      when: "Represente work como Job quando exigir async execution ou lifecycle management, definindo payload, version, idempotency, priority, timeout, attempts, result retention e authorization.",
      context:
        "Um cliente solicita data import de horas que deve sobreviver deployments e precisa de visible progress e controlled retry.",
      application:
        "O system armazena ImportCustomerData job com stable identity e source reference, enfileira, transita waiting a active e completed ou failed, registra progress e expõe status.",
      phrase:
        "Job payload deve referenciar protected import file, não duplicar sensitive dataset enorme na queue.",
      aliases: ["queued job", "work item job", "tarefa agendada"],
      confusion:
        "Job é uma managed work unit; Worker é execution process que trata muitos jobs ao longo do tempo.",
    }),
  },
  scheduler: {
    en: content({
      definition:
        "A Scheduler is a software component or service that determines when eligible jobs, tasks, workflows, or resources should be activated according to time, dependency, priority, capacity, or policy.",
      purpose:
        "It separates timing and admission decisions from execution, enabling recurring work, delayed work, dependency coordination, fairness, capacity control, and recovery.",
      when: "Use one when work must run later or under controlled conditions, defining clock and timezone, persistence, duplicate firing, leader election, misfires, catch-up, concurrency, deadlines, and observability.",
      context:
        "A billing platform must initiate monthly invoices in each tenant's timezone without running duplicates during failover or overwhelming downstream payment capacity.",
      application:
        "The Scheduler stores durable schedules, calculates next run in explicit timezone, claims due work with fencing, emits idempotent jobs, limits concurrency, records misfires, and monitors scheduling delay.",
      phrase:
        "The Scheduler decides when invoice jobs become eligible; Workers perform the invoice generation.",
      aliases: ["job scheduler", "task scheduler", "agendador"],
      confusion:
        "A Scheduler decides when work should run; a Worker executes the work after it becomes available.",
    }),
    "pt-BR": content({
      definition:
        "Scheduler é um software component ou service que decide quando jobs, tasks, workflows ou resources elegíveis devem ser ativados por time, dependency, priority, capacity ou policy.",
      purpose:
        "Ele separa timing e admission decisions de execution, permitindo recurring work, delayed work, dependency coordination, fairness, capacity control e recovery.",
      when: "Use-o quando work rodar depois ou sob condições controladas, definindo clock e timezone, persistence, duplicate firing, leader election, misfires, catch-up, concurrency, deadlines e observability.",
      context:
        "Uma billing platform inicia monthly invoices no timezone de cada tenant sem duplicates em failover nem overload de payment capacity.",
      application:
        "Scheduler guarda durable schedules, calcula next run em timezone explícito, claims due work com fencing, emite idempotent jobs, limita concurrency e monitora delay.",
      phrase:
        "Scheduler decide quando invoice jobs ficam elegíveis; Workers executam invoice generation.",
      aliases: ["job scheduler", "task scheduler", "agendador"],
      confusion:
        "Scheduler decide quando work roda; Worker executa work depois de disponibilizado.",
    }),
  },
  "cron-job": {
    en: content({
      definition:
        "A Cron Job is a command or job triggered on a recurring calendar schedule expressed through cron-style time fields.",
      purpose:
        "It automates predictable time-based work such as cleanup, reports, synchronization, maintenance, or recurring queue submission.",
      when: "Use one for calendar-driven tasks whose schedule can be expressed predictably, handling timezone, daylight saving, overlap, missed runs, idempotency, duration, failure, access, and output.",
      context:
        "A service must archive expired audit exports every night and remain safe if one run overlaps or the scheduler restarts around the scheduled time.",
      application:
        "The deployment defines an explicit UTC cron schedule, acquires a bounded lease, selects records idempotently, records run identity and metrics, retries safely, alerts failure, and prevents uncontrolled overlap.",
      phrase:
        "Make the Cron Job idempotent because failover can trigger a repeated run even when the schedule appears singular.",
      aliases: ["cron task", "scheduled cron job", "tarefa cron"],
      confusion:
        "A Cron Job is triggered by a cron calendar expression; a Background Job can be triggered by user activity, messages, APIs, dependencies, or any other mechanism.",
    }),
    "pt-BR": content({
      definition:
        "Cron Job é um command ou job acionado por recurring calendar schedule expresso em cron-style time fields.",
      purpose:
        "Ele automatiza predictable time-based work como cleanup, reports, synchronization, maintenance ou recurring queue submission.",
      when: "Use-o em calendar-driven tasks previsíveis, tratando timezone, daylight saving, overlap, missed runs, idempotency, duration, failure, access e output.",
      context:
        "Um service arquiva expired audit exports toda noite e precisa ser seguro se run sobrepuser ou scheduler reiniciar perto do horário.",
      application:
        "Deployment define UTC cron schedule, adquire bounded lease, seleciona records idempotently, registra run identity e metrics, faz safe retry, alerta failure e evita overlap.",
      phrase:
        "Torne Cron Job idempotent porque failover pode disparar repeated run mesmo com schedule singular.",
      aliases: ["cron task", "scheduled cron job", "tarefa cron"],
      confusion:
        "Cron Job é acionado por cron calendar expression; Background Job pode ser acionado por user activity, messages, APIs, dependencies ou outro mecanismo.",
    }),
  },
};
