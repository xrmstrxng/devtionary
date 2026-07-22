import type { GlossaryTerm } from "@/entities/glossary-term/model";

export type LocalizedContent = GlossaryTerm["localizedContent"]["en"];
export type EditorialPair = { en: LocalizedContent; "pt-BR": LocalizedContent };

export function content(values: {
  definition: string;
  purpose: string;
  when: string;
  context: string;
  application: string;
  phrase: string;
  aliases?: string[];
  confusion?: string;
}): LocalizedContent {
  return {
    shortDefinition: values.definition,
    fullDefinition: values.definition,
    professionalContext: values.when,
    purpose: values.purpose,
    whenToUse: values.when,
    practicalExample: {
      context: values.context,
      application: values.application,
    },
    professionalPhrase: values.phrase,
    commonConfusions: values.confusion,
    examples: [values.phrase],
    searchableAliases: values.aliases ?? [],
  };
}

export const editorialOverrides: Record<string, EditorialPair> = {
  gateway: {
    en: content({
      definition:
        "A gateway is an entry point between different systems or networks. It receives traffic, decides where it should go, and may validate or transform the communication before forwarding it.",
      purpose:
        "It centralizes routing and cross-cutting rules while hiding the internal layout of downstream services. A gateway can enforce authentication, rate limits, protocol translation, or network access in one place.",
      when: "Use a gateway when several services need a shared entry point, when security rules must be consistent, or when two sides communicate through different protocols or network boundaries.",
      context:
        "An application has separate services for users, payments, and notifications, but its clients should not know the address or security rules of each service.",
      application:
        "Every request enters through the gateway. It validates the access token, applies rate limiting, and routes the call to the correct internal service.",
      phrase:
        "“Let’s centralize authentication and routing in the gateway so we do not repeat those rules across every service.”",
      confusion:
        "A gateway controls entry to a broader system and may transform traffic; a reverse proxy mainly forwards requests to servers, while an API Gateway specializes in API concerns.",
    }),
    "pt-BR": content({
      definition:
        "Um gateway é um ponto de entrada entre sistemas ou redes diferentes. Ele recebe o tráfego, decide para onde deve encaminhá-lo e pode validar ou transformar a comunicação antes do envio.",
      purpose:
        "Ele centraliza roteamento e regras compartilhadas, escondendo a organização interna dos serviços. Pode aplicar autenticação, rate limit, tradução de protocolos ou controle de acesso em um único lugar.",
      when: "Use um gateway quando vários serviços precisarem de uma entrada comum, quando regras de segurança tiverem que ser consistentes ou quando as partes utilizarem protocolos ou redes diferentes.",
      context:
        "Uma aplicação possui serviços separados de usuários, pagamentos e notificações, mas os clientes não devem conhecer o endereço e as regras de segurança de cada serviço.",
      application:
        "Todas as requisições entram pelo gateway, que valida o token, aplica rate limit e encaminha a chamada para o serviço interno correto.",
      phrase:
        "“Vamos concentrar autenticação e roteamento no gateway para não repetir essas regras em todos os serviços.”",
      confusion:
        "Gateway controla a entrada de um sistema mais amplo e pode transformar tráfego; reverse proxy encaminha principalmente requisições, enquanto API Gateway é especializado em necessidades de APIs.",
    }),
  },
  nginx: {
    en: content({
      definition:
        "Nginx is high-performance server software that can serve static files, receive HTTP traffic, proxy requests to applications, balance load, and terminate TLS connections.",
      purpose:
        "It places an efficient network layer in front of applications, offloading static content and connection handling while controlling how traffic reaches backend instances.",
      when: "Use Nginx when a site needs a web server, when an API needs a reverse proxy, when traffic must be distributed across instances, or when TLS should terminate before the application.",
      context:
        "Three API instances run on private ports, while the public domain must expose one HTTPS address and also serve frontend assets.",
      application:
        "Nginx terminates TLS, serves the static assets directly, and balances API requests across the three healthy backend instances.",
      phrase:
        "“Let’s put Nginx in front of the API as a reverse proxy and keep the application instances private.”",
      aliases: ["web server", "reverse proxy", "servidor web", "proxy reverso"],
    }),
    "pt-BR": content({
      definition:
        "Nginx é um software de servidor de alto desempenho que entrega arquivos estáticos, recebe tráfego HTTP, encaminha requisições, balanceia carga e encerra conexões TLS.",
      purpose:
        "Ele cria uma camada de rede eficiente na frente das aplicações, assumindo arquivos estáticos e conexões enquanto controla como o tráfego chega às instâncias do backend.",
      when: "Use Nginx quando um site precisar de servidor web, uma API precisar de reverse proxy, o tráfego tiver que ser distribuído ou o TLS precisar terminar antes da aplicação.",
      context:
        "Três instâncias da API executam em portas privadas, enquanto o domínio público deve oferecer um único endereço HTTPS e servir os arquivos do frontend.",
      application:
        "O Nginx encerra o TLS, entrega os arquivos estáticos diretamente e balanceia as requisições entre as três instâncias saudáveis do backend.",
      phrase:
        "“Vamos colocar o Nginx como reverse proxy na frente da API e manter as instâncias da aplicação privadas.”",
      aliases: ["servidor web", "proxy reverso", "web server", "reverse proxy"],
    }),
  },
  cache: {
    en: content({
      definition:
        "A cache is temporary storage for data that is expensive or slow to obtain repeatedly. It keeps reusable results closer to the code or user that needs them.",
      purpose:
        "It reduces latency and load by avoiding repeated database queries, network calls, or calculations. Entries usually have expiration and invalidation rules so stale data does not remain indefinitely.",
      when: "Use a cache for frequently read data whose temporary reuse is acceptable, especially when its original source is slower than the response-time target.",
      context:
        "A product catalog endpoint queries several tables for the same popular products on thousands of requests each minute.",
      application:
        "The API stores each assembled product response in Redis for five minutes and invalidates the entry when the product is updated.",
      phrase:
        "“The database is doing the same work on every request; let’s cache the catalog response and define an invalidation rule.”",
      confusion:
        "A cache is disposable and optimized for reuse; a database is the authoritative durable source of data.",
    }),
    "pt-BR": content({
      definition:
        "Cache é um armazenamento temporário para dados custosos ou lentos de obter repetidamente. Ele mantém resultados reutilizáveis mais perto do código ou da pessoa que precisa deles.",
      purpose:
        "Reduz latência e carga ao evitar consultas, chamadas de rede ou cálculos repetidos. As entradas costumam ter expiração e invalidação para impedir que dados antigos permaneçam indefinidamente.",
      when: "Use cache para dados lidos com frequência cuja reutilização temporária seja aceitável, principalmente quando a fonte original for mais lenta que o tempo de resposta desejado.",
      context:
        "Um endpoint de catálogo consulta várias tabelas para montar os mesmos produtos populares em milhares de requisições por minuto.",
      application:
        "A API armazena cada resposta montada no Redis por cinco minutos e invalida a entrada quando o produto é atualizado.",
      phrase:
        "“O banco está repetindo o mesmo trabalho; vamos colocar a resposta do catálogo em cache e definir a invalidação.”",
      confusion:
        "Cache é descartável e otimizado para reutilização; banco de dados é a fonte durável e autoritativa da informação.",
    }),
  },
  queue: {
    en: content({
      definition:
        "A queue stores messages in an ordered waiting line until a consumer can process them. Producers can submit work without waiting for that work to finish.",
      purpose:
        "It decouples producers from consumers, absorbs traffic spikes, and enables asynchronous processing with controlled retries and failure handling.",
      when: "Use a queue when work can happen after the user response, when processing rates differ, or when a temporary consumer failure must not discard the request.",
      context:
        "An online store must send invoices and confirmation emails after checkout, but generating them would make the payment response slow.",
      application:
        "Checkout publishes one message per task to a queue. Independent workers consume the messages, retry temporary failures, and send unrecoverable ones to a dead-letter queue.",
      phrase:
        "“Return the order confirmation first and put invoice generation on the queue for the worker.”",
      confusion:
        "A queue generally distributes each message to one consumer; a topic or publish/subscribe channel can deliver the same event to multiple subscribers.",
    }),
    "pt-BR": content({
      definition:
        "Queue é uma fila que guarda mensagens até que um consumidor possa processá-las. O produtor envia o trabalho sem precisar esperar que ele termine.",
      purpose:
        "Desacopla produtores e consumidores, absorve picos de tráfego e permite processamento assíncrono com controle de tentativas e falhas.",
      when: "Use uma queue quando o trabalho puder ocorrer depois da resposta ao usuário, quando as velocidades de produção e consumo forem diferentes ou quando uma falha temporária não puder perder a solicitação.",
      context:
        "Uma loja precisa gerar a nota e enviar o e-mail após o pagamento, mas executar tudo durante o checkout deixaria a resposta lenta.",
      application:
        "O checkout publica mensagens na fila. Workers independentes processam as tarefas, repetem falhas temporárias e enviam erros irrecuperáveis para uma dead-letter queue.",
      phrase:
        "“Vamos confirmar o pedido primeiro e colocar a geração da nota na queue para o worker processar.”",
      confusion:
        "Uma queue normalmente entrega cada mensagem a um consumidor; um tópico ou canal publish/subscribe pode entregar o mesmo evento a vários assinantes.",
    }),
  },
  dto: {
    en: content({
      definition:
        "A Data Transfer Object is a structure designed to carry data across a boundary, such as an HTTP request, application layer, or external integration.",
      purpose:
        "It defines the accepted or exposed data shape without leaking internal domain entities. DTOs provide a clear place for validation, serialization, and compatibility rules.",
      when: "Use a DTO when input or output must have an explicit contract that differs from the internal model or must remain stable while internal code evolves.",
      context:
        "A user entity contains password hashes and audit fields, but the public API should accept only name and email during registration.",
      application:
        "The controller validates a CreateUserDTO, passes its safe fields to the application service, and returns a separate response DTO without sensitive attributes.",
      phrase:
        "“Do not expose the entity directly; define a response DTO with only the fields in the API contract.”",
      aliases: ["data transfer object"],
    }),
    "pt-BR": content({
      definition:
        "Data Transfer Object é uma estrutura criada para transportar dados através de uma fronteira, como uma requisição HTTP, camada da aplicação ou integração externa.",
      purpose:
        "Define o formato aceito ou exposto sem vazar entidades internas do domínio. O DTO oferece um lugar claro para validação, serialização e compatibilidade.",
      when: "Use DTO quando a entrada ou saída precisar de um contrato explícito diferente do modelo interno ou estável mesmo com a evolução do código.",
      context:
        "A entidade de usuário possui hash de senha e campos de auditoria, mas a API pública deve aceitar somente nome e e-mail no cadastro.",
      application:
        "O controller valida um CreateUserDTO, envia os campos seguros ao serviço e retorna outro DTO sem atributos sensíveis.",
      phrase:
        "“Não exponha a entidade diretamente; crie um DTO de resposta somente com os campos do contrato da API.”",
      aliases: ["data transfer object", "objeto de transferência de dados"],
    }),
  },
  stakeholder: {
    en: content({
      definition:
        "A stakeholder is a person or group affected by an initiative, able to influence it, or responsible for decisions and outcomes around it.",
      purpose:
        "Identifying stakeholders reveals whose needs, constraints, approval, or operational knowledge must be considered before priorities and scope are decided.",
      when: "Map stakeholders at the start of a product, project, major change, or incident, and revisit the map when ownership or impact changes.",
      context:
        "A billing change affects customers, support, finance, legal, engineering, and the executive responsible for revenue.",
      application:
        "The product manager interviews each group, records constraints and decision owners, and includes them at the appropriate review points.",
      phrase:
        "“Finance and support are key stakeholders for this billing change; we need their input before finalizing the scope.”",
    }),
    "pt-BR": content({
      definition:
        "Stakeholder é uma pessoa ou grupo afetado por uma iniciativa, capaz de influenciá-la ou responsável por decisões e resultados relacionados a ela.",
      purpose:
        "Identificar stakeholders revela quais necessidades, restrições, aprovações e conhecimentos operacionais precisam entrar na decisão de prioridade e escopo.",
      when: "Mapeie stakeholders no início de um produto, projeto, mudança relevante ou incidente e revise o mapa quando responsabilidade ou impacto mudar.",
      context:
        "Uma mudança de cobrança afeta clientes, suporte, financeiro, jurídico, engenharia e a liderança responsável pela receita.",
      application:
        "A pessoa de produto entrevista cada grupo, registra restrições e responsáveis pela decisão e inclui cada participante nos momentos corretos de revisão.",
      phrase:
        "“Financeiro e suporte são stakeholders importantes dessa mudança de cobrança; precisamos ouvi-los antes de fechar o escopo.”",
    }),
  },
  sla: {
    en: content({
      definition:
        "A Service Level Agreement is a formal agreement that states measurable service commitments between a provider and a customer or internal consumer.",
      purpose:
        "It makes expectations enforceable through targets such as availability, response time, support hours, or incident-resolution deadlines, often including measurement and consequences.",
      when: "Define an SLA when a service relationship requires explicit reliability and support commitments rather than informal expectations.",
      context:
        "A payments provider supports a critical checkout flow and must define how much downtime and support delay the customer can accept.",
      application:
        "The contract sets 99.95% monthly availability, a 15-minute response for critical incidents, the measurement source, and service credits for violations.",
      phrase:
        "“The SLA promises a fifteen-minute response for severity-one incidents, so we must page the on-call team immediately.”",
      aliases: ["service level agreement"],
      confusion:
        "An SLA is the commitment made to a customer; SLOs are internal targets, and SLIs are the measurements used to evaluate them.",
    }),
    "pt-BR": content({
      definition:
        "Service Level Agreement é um acordo formal que estabelece compromissos mensuráveis de serviço entre um fornecedor e um cliente ou consumidor interno.",
      purpose:
        "Transforma expectativas em metas verificáveis, como disponibilidade, tempo de resposta, horário de suporte ou prazo de resolução, incluindo medição e possíveis consequências.",
      when: "Defina um SLA quando a relação de serviço exigir compromissos explícitos de confiabilidade e suporte, em vez de expectativas informais.",
      context:
        "Um provedor de pagamentos sustenta um checkout crítico e precisa definir quanto tempo de indisponibilidade e atraso de suporte o cliente aceita.",
      application:
        "O contrato estabelece 99,95% de disponibilidade mensal, resposta em quinze minutos para incidentes críticos, fonte da medição e créditos por descumprimento.",
      phrase:
        "“O SLA promete resposta em quinze minutos para incidentes críticos; precisamos acionar o on-call agora.”",
      aliases: ["service level agreement", "acordo de nível de serviço"],
      confusion:
        "SLA é o compromisso com o cliente; SLOs são metas internas e SLIs são as medições usadas para avaliá-las.",
    }),
  },
  b2b: {
    en: content({
      definition:
        "Business-to-Business describes a commercial relationship in which one company sells products or services to another company rather than directly to an individual consumer.",
      purpose:
        "The model addresses organizational needs such as operations, compliance, productivity, or resale, usually with longer sales cycles, contracts, multiple decision-makers, and account management.",
      when: "Use B2B to describe the target market, sales motion, pricing, product requirements, or support model when the paying customer is an organization.",
      context:
        "A software company offers inventory management to retail chains, and purchasing requires approval from operations, finance, IT, and legal.",
      application:
        "The vendor sells annual licenses per store, supports contract negotiation and security review, and provides an account manager after onboarding.",
      phrase:
        "“This is a B2B sale, so the product decision will involve procurement, security, and the operational sponsor.”",
      aliases: ["business to business"],
      confusion:
        "In B2B the buyer is an organization; in B2C the buyer is an individual consumer, usually with a shorter and more self-service purchase.",
    }),
    "pt-BR": content({
      definition:
        "Business-to-Business descreve uma relação comercial em que uma empresa vende produtos ou serviços para outra empresa, e não diretamente para uma pessoa consumidora.",
      purpose:
        "O modelo atende necessidades organizacionais como operação, conformidade, produtividade ou revenda e costuma envolver vendas mais longas, contratos, múltiplas pessoas decisoras e gestão de contas.",
      when: "Use B2B para descrever mercado, processo comercial, preço, requisitos de produto ou suporte quando quem paga é uma organização.",
      context:
        "Uma empresa de software oferece gestão de estoque para redes varejistas, e a compra precisa da aprovação de operações, financeiro, TI e jurídico.",
      application:
        "O fornecedor vende licenças anuais por loja, participa da negociação e revisão de segurança e oferece gestão de conta após o onboarding.",
      phrase:
        "“Essa é uma venda B2B; compras, segurança e a liderança operacional vão participar da decisão.”",
      aliases: ["business to business", "empresa para empresa"],
      confusion:
        "No B2B o comprador é uma organização; no B2C é uma pessoa consumidora, geralmente com compra mais curta e autosserviço.",
    }),
  },
  api: {
    en: content({
      definition:
        "An Application Programming Interface is a documented contract that lets software systems exchange data or request operations without exposing their internal implementation.",
      purpose:
        "It gives applications a stable way to collaborate. The contract defines available operations, accepted inputs, returned data, authentication rules, and failure responses.",
      when: "Use an API when a capability or dataset must be consumed by another application, frontend, partner, automation, or service through a controlled interface.",
      context:
        "A mobile banking app needs balances and transfers, but it must not connect directly to the bank's databases.",
      application:
        "The backend exposes authenticated API operations for reading accounts and creating transfers, while keeping validation and persistence private.",
      phrase:
        "“The mobile client should consume the account API instead of depending on the database schema.”",
      aliases: [
        "application programming interface",
        "interface de programação de aplicações",
      ],
      confusion:
        "An API is the complete interaction contract; an endpoint is one address or operation offered through that contract.",
    }),
    "pt-BR": content({
      definition:
        "Application Programming Interface é um contrato documentado que permite a sistemas trocar dados ou solicitar operações sem expor sua implementação interna.",
      purpose:
        "Ela oferece uma forma estável de aplicações colaborarem. O contrato define operações disponíveis, entradas aceitas, dados retornados, autenticação e respostas de erro.",
      when: "Use uma API quando uma funcionalidade ou conjunto de dados precisar ser consumido por outra aplicação, frontend, parceiro, automação ou serviço por meio de uma interface controlada.",
      context:
        "Um aplicativo bancário precisa consultar saldos e realizar transferências, mas não deve acessar diretamente os bancos de dados da instituição.",
      application:
        "O backend expõe operações autenticadas para consultar contas e criar transferências, mantendo validação e persistência privadas.",
      phrase:
        "“O aplicativo deve consumir a API de contas em vez de depender do esquema do banco de dados.”",
      aliases: [
        "application programming interface",
        "interface de programação de aplicações",
      ],
      confusion:
        "API é o contrato completo de interação; endpoint é um endereço ou uma operação específica oferecida por esse contrato.",
    }),
  },
  endpoint: {
    en: content({
      definition:
        "An endpoint is a specific network address and operation through which a client interacts with an API resource or capability.",
      purpose:
        "It maps a concrete request, commonly an HTTP method plus a path, to defined input, authorization, processing, and response behavior.",
      when: "Create or consume an endpoint when one API operation needs a clear address and contract, such as listing orders or updating a profile.",
      context:
        "A storefront needs to retrieve one order without downloading the customer's entire order history.",
      application:
        "The API provides GET /orders/{id}; the endpoint validates access, loads that order, and returns it in the documented response shape.",
      phrase:
        "“The order detail endpoint returns 404 when the identifier does not exist.”",
      confusion:
        "An endpoint is one callable part of an API; a URL identifies a location and does not by itself describe method, contract, or behavior.",
    }),
    "pt-BR": content({
      definition:
        "Endpoint é um endereço de rede e uma operação específicos pelos quais um cliente acessa um recurso ou funcionalidade de uma API.",
      purpose:
        "Ele associa uma requisição concreta, geralmente método HTTP e caminho, a regras definidas de entrada, autorização, processamento e resposta.",
      when: "Crie ou consuma um endpoint quando uma operação da API precisar de endereço e contrato claros, como listar pedidos ou atualizar um perfil.",
      context:
        "Uma loja virtual precisa consultar um pedido sem baixar todo o histórico de compras do cliente.",
      application:
        "A API oferece GET /orders/{id}; o endpoint valida o acesso, carrega aquele pedido e o devolve no formato documentado.",
      phrase:
        "“O endpoint de detalhes do pedido retorna 404 quando o identificador não existe.”",
      confusion:
        "Endpoint é uma parte chamável de uma API; URL identifica uma localização, mas não descreve sozinha método, contrato e comportamento.",
    }),
  },
  request: {
    en: content({
      definition:
        "A request is a message sent by a client to a server asking it to retrieve data, perform an operation, or change a resource.",
      purpose:
        "It carries everything the server needs to interpret the call, including the target, method, headers, parameters, credentials, and sometimes a body.",
      when: "Work with a request whenever a browser, app, service, or command-line client initiates communication with a server or API.",
      context:
        "A checkout screen must submit the selected items, delivery address, and payment token to the order service.",
      application:
        "The client sends a POST request to /orders with authorization and JSON data; the server validates it before creating the order.",
      phrase:
        "“Log the request identifier, not the payment data, so we can trace this failure safely.”",
      aliases: ["requisição", "solicitação"],
      confusion:
        "A request travels from client to server; a response is the server's result sent back to the client.",
    }),
    "pt-BR": content({
      definition:
        "Request é a mensagem enviada por um cliente a um servidor para consultar dados, executar uma operação ou alterar um recurso.",
      purpose:
        "Ela transporta o necessário para o servidor interpretar a chamada, incluindo destino, método, headers, parâmetros, credenciais e, às vezes, um body.",
      when: "Trabalhe com uma request sempre que navegador, aplicativo, serviço ou cliente de linha de comando iniciar uma comunicação com servidor ou API.",
      context:
        "Uma tela de checkout precisa enviar itens, endereço de entrega e token de pagamento ao serviço de pedidos.",
      application:
        "O cliente envia uma request POST para /orders com autorização e dados JSON; o servidor valida o conteúdo antes de criar o pedido.",
      phrase:
        "“Registre o identificador da request, não os dados de pagamento, para rastrearmos a falha com segurança.”",
      aliases: ["requisição", "solicitação"],
      confusion:
        "Request vai do cliente ao servidor; response é o resultado que o servidor devolve ao cliente.",
    }),
  },
  response: {
    en: content({
      definition:
        "A response is the message a server returns after processing a request, containing the outcome, metadata, and optionally a representation of data.",
      purpose:
        "It tells the client whether the operation succeeded and supplies the status, headers, body, or error details needed for the next action.",
      when: "Inspect or design responses when defining an API contract, handling failures, controlling caching, or transforming server results for a user interface.",
      context:
        "After submitting an order, the storefront must know whether it was accepted and which identifier should appear on the confirmation screen.",
      application:
        "The server returns status 201, a Location header, and JSON containing the new order identifier and its initial status.",
      phrase:
        "“Keep the error response stable so clients can handle the code without parsing the message.”",
      aliases: ["resposta"],
      confusion:
        "A response describes the result of one request; an event announces something that happened and may have multiple independent consumers.",
    }),
    "pt-BR": content({
      definition:
        "Response é a mensagem devolvida pelo servidor após processar uma request, contendo o resultado, metadados e, quando necessário, uma representação de dados.",
      purpose:
        "Ela informa se a operação funcionou e fornece status, headers, body ou detalhes de erro para o cliente decidir a próxima ação.",
      when: "Analise ou projete responses ao definir contratos de API, tratar falhas, controlar cache ou transformar resultados do servidor para uma interface.",
      context:
        "Depois de enviar um pedido, a loja precisa saber se ele foi aceito e qual identificador mostrar na tela de confirmação.",
      application:
        "O servidor retorna status 201, um header Location e JSON com o identificador do novo pedido e seu estado inicial.",
      phrase:
        "“Mantenha a response de erro estável para os clientes tratarem o código sem interpretar a mensagem.”",
      aliases: ["resposta"],
      confusion:
        "Response descreve o resultado de uma request; evento anuncia algo que aconteceu e pode ter vários consumidores independentes.",
    }),
  },
  payload: {
    en: content({
      definition:
        "A payload is the application data carried inside a message, excluding transport and routing metadata such as protocol headers.",
      purpose:
        "It contains the business information being delivered, such as form fields, an event's attributes, or the representation returned by an API.",
      when: "Refer to the payload when validating, serializing, encrypting, sizing, or documenting the meaningful data inside a request, response, or message.",
      context:
        "An order-created event must inform the billing worker which order, customer, currency, and amount were involved.",
      application:
        "The producer serializes those fields as the event's JSON payload while the broker adds separate routing and delivery metadata.",
      phrase:
        "“The payload exceeds the broker limit, so store the document externally and send its reference.”",
      aliases: ["carga útil", "message body"],
      confusion:
        "Payload is the meaningful carried data; body is the message section that contains data and may include envelopes or formatting beyond the payload itself.",
    }),
    "pt-BR": content({
      definition:
        "Payload é o dado da aplicação transportado dentro de uma mensagem, sem os metadados de transporte e roteamento, como headers do protocolo.",
      purpose:
        "Ele contém a informação de negócio enviada, como campos de formulário, atributos de um evento ou a representação devolvida por uma API.",
      when: "Use o termo payload ao validar, serializar, criptografar, dimensionar ou documentar os dados relevantes de uma request, response ou mensagem.",
      context:
        "Um evento de pedido criado precisa informar ao worker de cobrança qual pedido, cliente, moeda e valor estão envolvidos.",
      application:
        "O produtor serializa esses campos como payload JSON do evento, enquanto o broker adiciona metadados separados de roteamento e entrega.",
      phrase:
        "“O payload ultrapassa o limite do broker; armazene o documento fora da mensagem e envie a referência.”",
      aliases: ["carga útil", "corpo da mensagem"],
      confusion:
        "Payload é o dado relevante transportado; body é a seção da mensagem que contém dados e pode incluir envelopes ou formatação adicional.",
    }),
  },
  http: {
    en: content({
      definition:
        "Hypertext Transfer Protocol is the application-layer protocol used to exchange requests and responses between web clients, servers, proxies, and APIs.",
      purpose:
        "It standardizes methods, addresses, headers, status codes, and message bodies so independently implemented systems can communicate on the web.",
      when: "Use HTTP semantics when building websites and web APIs or when configuring intermediaries such as caches, proxies, gateways, and load balancers.",
      context:
        "A browser needs to retrieve a page, cache its assets, submit a form, and understand whether each operation succeeded.",
      application:
        "The browser sends HTTP requests with methods and headers; the server replies with status codes, cache directives, content type, and body.",
      phrase:
        "“This operation is read-only, so expose it with GET and return cache headers consistent with HTTP semantics.”",
      aliases: [
        "hypertext transfer protocol",
        "protocolo de transferência de hipertexto",
      ],
      confusion:
        "HTTP defines web message exchange; HTTPS is HTTP carried through a TLS-protected connection.",
    }),
    "pt-BR": content({
      definition:
        "Hypertext Transfer Protocol é o protocolo da camada de aplicação usado para trocar requests e responses entre clientes web, servidores, proxies e APIs.",
      purpose:
        "Ele padroniza métodos, endereços, headers, status codes e bodies para sistemas implementados separadamente se comunicarem na web.",
      when: "Use a semântica HTTP ao construir sites e APIs web ou configurar intermediários como caches, proxies, gateways e balanceadores.",
      context:
        "Um navegador precisa obter uma página, armazenar recursos em cache, enviar um formulário e entender se cada operação funcionou.",
      application:
        "O navegador envia requests HTTP com métodos e headers; o servidor responde com status, regras de cache, tipo do conteúdo e body.",
      phrase:
        "“Essa operação apenas consulta dados; use GET e retorne headers de cache coerentes com a semântica HTTP.”",
      aliases: [
        "hypertext transfer protocol",
        "protocolo de transferência de hipertexto",
      ],
      confusion:
        "HTTP define a troca de mensagens web; HTTPS é HTTP transportado por uma conexão protegida com TLS.",
    }),
  },
  https: {
    en: content({
      definition:
        "Hypertext Transfer Protocol Secure is HTTP transmitted through TLS, which encrypts traffic, verifies the server's identity, and protects messages against tampering in transit.",
      purpose:
        "It prevents observers on the network from reading or silently altering web traffic and lets clients confirm they connected to the domain represented by the certificate.",
      when: "Use HTTPS for every public website and API, and for internal traffic whenever credentials, personal data, or trusted operations cross a network.",
      context:
        "A customer signs in over public Wi-Fi and sends a password and session cookie to an online store.",
      application:
        "The server presents a valid TLS certificate; the browser verifies it, negotiates encryption, and only then exchanges HTTP messages.",
      phrase:
        "“Redirect HTTP to HTTPS and enable HSTS so browsers do not retry this site over an unencrypted connection.”",
      aliases: [
        "hypertext transfer protocol secure",
        "http over tls",
        "http seguro",
      ],
      confusion:
        "HTTPS protects data while it travels; it does not guarantee that the application is free of vulnerabilities or that stored data is encrypted.",
    }),
    "pt-BR": content({
      definition:
        "Hypertext Transfer Protocol Secure é HTTP transmitido por TLS, que criptografa o tráfego, verifica a identidade do servidor e protege mensagens contra alterações durante o transporte.",
      purpose:
        "Ele impede que observadores da rede leiam ou modifiquem silenciosamente o tráfego e permite confirmar que o domínio corresponde ao certificado apresentado.",
      when: "Use HTTPS em todos os sites e APIs públicos e também no tráfego interno quando credenciais, dados pessoais ou operações confiáveis atravessarem uma rede.",
      context:
        "Uma pessoa entra em uma loja usando Wi-Fi público e envia senha e cookie de sessão ao servidor.",
      application:
        "O servidor apresenta um certificado TLS válido; o navegador o verifica, negocia a criptografia e só então troca mensagens HTTP.",
      phrase:
        "“Redirecione HTTP para HTTPS e habilite HSTS para o navegador não tentar uma conexão sem criptografia.”",
      aliases: [
        "hypertext transfer protocol secure",
        "http sobre tls",
        "http seguro",
      ],
      confusion:
        "HTTPS protege dados em trânsito; não garante que a aplicação não tenha vulnerabilidades nem que os dados armazenados estejam criptografados.",
    }),
  },
  "status-code": {
    en: content({
      definition:
        "An HTTP status code is a three-digit value in a response that summarizes how the server handled the request, using standardized success, redirection, client-error, and server-error classes.",
      purpose:
        "It gives clients and infrastructure a machine-readable first signal for choosing behavior such as following a redirect, retrying, authenticating, or showing validation feedback.",
      when: "Choose a status code for every HTTP response and inspect it before interpreting the response body or deciding how a client should recover.",
      context:
        "A client submits invalid registration data and must distinguish that problem from authentication failure or temporary server outage.",
      application:
        "The API returns 422 with field errors for invalid input, 401 for missing authentication, and 503 when a dependency is temporarily unavailable.",
      phrase:
        "“Return the specific status code that represents the failure; a 200 response with an error body breaks client and monitoring behavior.”",
      aliases: [
        "http status code",
        "código de status http",
        "código de estado http",
      ],
      confusion:
        "A status code classifies the outcome at the HTTP layer; an application error code identifies a domain-specific condition inside the response.",
    }),
    "pt-BR": content({
      definition:
        "Status code HTTP é um valor de três dígitos na response que resume como o servidor tratou a request, com classes padronizadas de sucesso, redirecionamento e erros.",
      purpose:
        "Ele oferece a clientes e infraestrutura um primeiro sinal legível por máquina para redirecionar, repetir, autenticar ou mostrar uma falha de validação.",
      when: "Escolha um status code para toda response HTTP e analise-o antes de interpretar o body ou decidir como o cliente deve se recuperar.",
      context:
        "Um cliente envia dados inválidos de cadastro e precisa diferenciar esse problema de falta de autenticação ou indisponibilidade temporária.",
      application:
        "A API retorna 422 com erros por campo para entrada inválida, 401 quando falta autenticação e 503 quando uma dependência está indisponível.",
      phrase:
        "“Retorne o status code específico da falha; responder 200 com erro no body prejudica clientes e monitoramento.”",
      aliases: [
        "http status code",
        "código de status http",
        "código de estado http",
      ],
      confusion:
        "Status code classifica o resultado na camada HTTP; código de erro da aplicação identifica uma condição específica do domínio.",
    }),
  },
  rest: {
    en: content({
      definition:
        "Representational State Transfer is an architectural style for networked systems in which clients manipulate resource representations through a uniform, stateless interface.",
      purpose:
        "It reduces coupling by organizing interactions around resources, standard operations, cacheable representations, and messages that contain the context required for processing.",
      when: "Apply REST when designing an HTTP API that benefits from predictable resource URLs, standard method semantics, independent clients, and intermediary caching.",
      context:
        "Several web and mobile clients need to manage the same customer and order data without learning backend implementation details.",
      application:
        "The API models customers and orders as resources, uses HTTP methods consistently, keeps requests stateless, and returns links or identifiers to related resources.",
      phrase:
        "“Model the cancellation as a change to the order resource and preserve HTTP semantics instead of inventing unrelated actions.”",
      aliases: [
        "representational state transfer",
        "transferência de estado representacional",
      ],
      confusion:
        "REST is an architectural style with constraints; HTTP is the protocol commonly used to implement those constraints.",
    }),
    "pt-BR": content({
      definition:
        "Representational State Transfer é um estilo arquitetural no qual clientes manipulam representações de recursos por uma interface uniforme e sem estado de sessão no servidor.",
      purpose:
        "Ele reduz acoplamento ao organizar interações em torno de recursos, operações padronizadas, representações cacheáveis e mensagens com todo o contexto necessário.",
      when: "Aplique REST ao projetar uma API HTTP que se beneficie de URLs previsíveis, semântica padronizada de métodos, clientes independentes e cache intermediário.",
      context:
        "Vários clientes web e mobile precisam administrar os mesmos clientes e pedidos sem conhecer detalhes internos do backend.",
      application:
        "A API modela clientes e pedidos como recursos, usa métodos HTTP consistentemente, mantém requests sem estado e retorna referências para recursos relacionados.",
      phrase:
        "“Modele o cancelamento como mudança no recurso pedido e preserve a semântica HTTP em vez de criar ações desconectadas.”",
      aliases: [
        "representational state transfer",
        "transferência de estado representacional",
      ],
      confusion:
        "REST é um estilo arquitetural com restrições; HTTP é o protocolo normalmente usado para implementá-las.",
    }),
  },
  restful: {
    en: content({
      definition:
        "RESTful describes a system or API whose design follows the constraints and interaction principles of Representational State Transfer.",
      purpose:
        "The label communicates that resource modeling, stateless requests, uniform interfaces, cache behavior, and layered components are intentional parts of the design.",
      when: "Call an API RESTful only when its behavior consistently follows REST constraints, not merely because it exchanges JSON over HTTP.",
      context:
        "A team reviews an API that uses resource URLs and HTTP methods but stores client workflow state in server memory between calls.",
      application:
        "They remove the hidden session dependency and require every request to carry its authentication and processing context before describing the API as RESTful.",
      phrase:
        "“JSON does not make this RESTful; we also need a stateless, uniform resource interface.”",
      aliases: ["restful api", "api restful"],
      confusion:
        "REST names the architectural style; RESTful is an adjective for an implementation that conforms to it.",
    }),
    "pt-BR": content({
      definition:
        "RESTful descreve um sistema ou API cujo projeto segue as restrições e os princípios de interação do Representational State Transfer.",
      purpose:
        "O termo indica que modelagem de recursos, requests sem estado, interface uniforme, cache e componentes em camadas fazem parte intencional do projeto.",
      when: "Chame uma API de RESTful apenas quando seu comportamento seguir consistentemente as restrições REST, não só porque troca JSON por HTTP.",
      context:
        "Um time avalia uma API que usa recursos e métodos HTTP, mas guarda na memória do servidor o estado do fluxo do cliente entre chamadas.",
      application:
        "O time remove a dependência da sessão oculta e exige que cada request carregue autenticação e contexto antes de classificar a API como RESTful.",
      phrase:
        "“Usar JSON não torna a API RESTful; também precisamos de uma interface uniforme e sem estado.”",
      aliases: ["restful api", "api restful"],
      confusion:
        "REST nomeia o estilo arquitetural; RESTful é o adjetivo dado a uma implementação que segue esse estilo.",
    }),
  },
  route: {
    en: content({
      definition:
        "A route is a rule that matches an incoming request to the code responsible for handling it, usually according to an HTTP method and path pattern.",
      purpose:
        "It connects an external address to application behavior and can capture parameters or attach middleware before the selected handler executes.",
      when: "Define a route whenever a web server or framework must direct a family of requests to a page, controller, function, or proxy destination.",
      context:
        "A backend must send product-list requests and individual product requests to different controller methods.",
      application:
        "The router maps GET /products to listProducts and GET /products/:id to getProduct, extracting the identifier from the second path.",
      phrase:
        "“Register the specific export route before the parameterized route so the router does not interpret ‘export’ as an ID.”",
      aliases: ["rota", "routing rule"],
      confusion:
        "A route is the application's matching rule; an endpoint is the externally callable operation produced by a route and its handler contract.",
    }),
    "pt-BR": content({
      definition:
        "Route é uma regra que associa uma request recebida ao código responsável por tratá-la, normalmente usando método HTTP e padrão de caminho.",
      purpose:
        "Ela conecta um endereço externo ao comportamento da aplicação e pode capturar parâmetros ou anexar middlewares antes de executar o handler escolhido.",
      when: "Defina uma route quando servidor ou framework precisar direcionar um conjunto de requests para página, controller, função ou destino de proxy.",
      context:
        "Um backend precisa encaminhar a listagem de produtos e a consulta de um produto para métodos diferentes do controller.",
      application:
        "O roteador associa GET /products a listProducts e GET /products/:id a getProduct, extraindo o identificador no segundo caminho.",
      phrase:
        "“Registre a route específica de exportação antes da parametrizada para ‘export’ não ser interpretado como ID.”",
      aliases: ["rota", "regra de roteamento"],
      confusion:
        "Route é a regra de associação da aplicação; endpoint é a operação externa formada pela route e pelo contrato de seu handler.",
    }),
  },
  header: {
    en: content({
      definition:
        "A header is a named metadata field attached to an HTTP request or response that describes how the message should be interpreted, authorized, cached, or transported.",
      purpose:
        "Headers carry control information separately from application data, including content type, accepted formats, credentials, cache directives, tracing identifiers, and cookies.",
      when: "Use a standard header when information affects message handling rather than representing a field of the business resource itself.",
      context:
        "An API receives JSON from an authenticated client and needs to correlate the call across several services.",
      application:
        "The client sends Content-Type, Authorization, and X-Request-ID headers while placing the order fields in the body.",
      phrase:
        "“Read the content type from the header before attempting to parse the request body.”",
      aliases: ["http header", "cabeçalho http"],
      confusion:
        "Headers describe and control the message; the body normally carries its main application content.",
    }),
    "pt-BR": content({
      definition:
        "Header é um campo nomeado de metadados anexado a uma request ou response HTTP para indicar como a mensagem deve ser interpretada, autorizada, armazenada ou transportada.",
      purpose:
        "Headers separam informações de controle dos dados da aplicação, como tipo de conteúdo, formatos aceitos, credenciais, cache, rastreamento e cookies.",
      when: "Use um header padronizado quando a informação controlar o tratamento da mensagem em vez de representar um campo do recurso de negócio.",
      context:
        "Uma API recebe JSON de um cliente autenticado e precisa correlacionar a chamada entre vários serviços.",
      application:
        "O cliente envia Content-Type, Authorization e X-Request-ID nos headers, mantendo os campos do pedido no body.",
      phrase:
        "“Leia o tipo de conteúdo no header antes de tentar interpretar o body da request.”",
      aliases: ["http header", "cabeçalho http"],
      confusion:
        "Headers descrevem e controlam a mensagem; body normalmente transporta seu conteúdo principal de aplicação.",
    }),
  },
  body: {
    en: content({
      definition:
        "A body is the optional content section of an HTTP message, located after its headers and used to carry submitted or returned data.",
      purpose:
        "It transports representations that do not fit naturally in the URL or metadata, such as JSON objects, uploaded files, HTML documents, and encoded form values.",
      when: "Use a request body for structured input or files and a response body when the server needs to return content beyond status and headers.",
      context:
        "A profile update sends a name, biography, and several preferences that would be awkward and unsafe to encode in the URL.",
      application:
        "The client serializes the fields as JSON in the request body and declares application/json in the Content-Type header.",
      phrase:
        "“Validate the body against the update schema before passing any fields to the service.”",
      aliases: ["http body", "message body", "corpo da mensagem"],
      confusion:
        "The body is a structural section of the protocol message; payload refers to the meaningful application data carried by a message.",
    }),
    "pt-BR": content({
      definition:
        "Body é a seção opcional de conteúdo de uma mensagem HTTP, localizada depois dos headers e usada para transportar dados enviados ou retornados.",
      purpose:
        "Ele carrega representações que não cabem naturalmente na URL ou nos metadados, como objetos JSON, arquivos, documentos HTML e formulários.",
      when: "Use um request body para entradas estruturadas ou arquivos e um response body quando o servidor precisar devolver conteúdo além de status e headers.",
      context:
        "Uma atualização de perfil envia nome, biografia e preferências que seriam inadequados e inseguros se codificados na URL.",
      application:
        "O cliente serializa os campos como JSON no body da request e declara application/json no header Content-Type.",
      phrase:
        "“Valide o body com o schema de atualização antes de enviar qualquer campo ao serviço.”",
      aliases: ["http body", "message body", "corpo da mensagem"],
      confusion:
        "Body é uma seção estrutural da mensagem; payload se refere aos dados relevantes de aplicação transportados por ela.",
    }),
  },
  "query-parameter": {
    en: content({
      definition:
        "A query parameter is a key-value item appended after the question mark in a URL to modify how a resource collection or representation is retrieved.",
      purpose:
        "It expresses optional controls such as filters, sorting, search, pagination, field selection, or display variants without changing the resource path.",
      when: "Use query parameters for optional retrieval criteria; document accepted values, defaults, repetition rules, and encoding.",
      context:
        "A product catalog needs one endpoint that can filter by category, sort by price, and return a selected page.",
      application:
        "The client calls /products?category=books&sort=price&page=2, and the server validates each parameter before constructing the query.",
      phrase:
        "“Make the sort query parameter optional and use relevance as the documented default.”",
      aliases: ["query string parameter", "parâmetro de consulta"],
      confusion:
        "A query parameter adjusts retrieval; a path parameter identifies a specific resource or required position in the route hierarchy.",
    }),
    "pt-BR": content({
      definition:
        "Query parameter é um item chave-valor colocado depois do ponto de interrogação na URL para modificar a consulta de uma coleção ou representação.",
      purpose:
        "Ele expressa controles opcionais como filtros, ordenação, busca, paginação, seleção de campos ou variantes sem mudar o caminho do recurso.",
      when: "Use query parameters para critérios opcionais de consulta e documente valores aceitos, padrões, repetição e codificação.",
      context:
        "Um catálogo precisa de um endpoint que filtre por categoria, ordene por preço e retorne uma página escolhida.",
      application:
        "O cliente chama /products?category=books&sort=price&page=2, e o servidor valida cada parâmetro antes de montar a consulta.",
      phrase:
        "“Deixe o query parameter de ordenação opcional e documente relevância como valor padrão.”",
      aliases: ["query string parameter", "parâmetro de consulta"],
      confusion:
        "Query parameter ajusta a consulta; path parameter identifica um recurso ou posição obrigatória na hierarquia da rota.",
    }),
  },
  "path-parameter": {
    en: content({
      definition:
        "A path parameter is a variable segment inside a URL path that identifies a resource or a required position in a route hierarchy.",
      purpose:
        "It lets one route pattern address many concrete resources while preserving readable relationships such as an order belonging to a customer.",
      when: "Use a path parameter when the value is essential to locating the target resource, and validate its format before performing work.",
      context:
        "The same order-detail operation must serve millions of orders, each identified by a unique value.",
      application:
        "The route /orders/{orderId} captures orderId, validates it as a UUID, and uses it to load the requested order.",
      phrase:
        "“The tenant ID belongs in the path because it selects the resource boundary for this operation.”",
      aliases: ["route parameter", "parâmetro de caminho", "parâmetro de rota"],
      confusion:
        "A path parameter is required to resolve the route target; a query parameter usually supplies optional filtering or presentation controls.",
    }),
    "pt-BR": content({
      definition:
        "Path parameter é um segmento variável dentro do caminho da URL que identifica um recurso ou posição obrigatória na hierarquia de uma rota.",
      purpose:
        "Ele permite que um padrão de rota enderece muitos recursos concretos e preserve relações legíveis, como um pedido pertencente a um cliente.",
      when: "Use path parameter quando o valor for indispensável para localizar o recurso e valide seu formato antes de executar a operação.",
      context:
        "A mesma operação de detalhes precisa atender milhões de pedidos, cada um identificado por um valor único.",
      application:
        "A route /orders/{orderId} captura orderId, valida se é um UUID e usa o valor para carregar o pedido solicitado.",
      phrase:
        "“O ID do tenant deve ficar no path porque ele seleciona a fronteira de recurso desta operação.”",
      aliases: ["route parameter", "parâmetro de caminho", "parâmetro de rota"],
      confusion:
        "Path parameter é necessário para resolver o alvo da rota; query parameter normalmente fornece filtro ou apresentação opcional.",
    }),
  },
  webhook: {
    en: content({
      definition:
        "A webhook is an HTTP callback in which one system sends an event notification to a URL registered by another system when a relevant change occurs.",
      purpose:
        "It delivers changes promptly without requiring the receiving system to poll repeatedly, enabling asynchronous integrations between independently deployed applications.",
      when: "Use a webhook when a provider can notify consumers about events such as payment confirmation, repository changes, or document completion.",
      context:
        "A store needs to update an order as soon as an external payment provider confirms the transaction.",
      application:
        "The provider signs an event and POSTs it to the store's webhook URL; the receiver verifies the signature, records the event idempotently, and responds quickly.",
      phrase:
        "“Acknowledge the webhook before starting heavy processing, because the provider retries on timeout.”",
      aliases: ["http callback", "event callback"],
      confusion:
        "A webhook is initiated by the event producer; polling is initiated repeatedly by the system waiting for a change.",
    }),
    "pt-BR": content({
      definition:
        "Webhook é um callback HTTP no qual um sistema envia a uma URL registrada uma notificação quando ocorre uma mudança relevante.",
      purpose:
        "Ele entrega mudanças rapidamente sem o receptor consultar o provedor repetidamente, permitindo integrações assíncronas entre aplicações independentes.",
      when: "Use webhook quando um provedor puder avisar consumidores sobre eventos como pagamento confirmado, alteração de repositório ou documento concluído.",
      context:
        "Uma loja precisa atualizar o pedido assim que um provedor externo confirmar a transação.",
      application:
        "O provedor assina o evento e envia um POST à URL do webhook; o receptor verifica a assinatura, registra o evento de forma idempotente e responde rapidamente.",
      phrase:
        "“Confirme o recebimento do webhook antes do processamento pesado, pois o provedor repete a entrega quando ocorre timeout.”",
      aliases: ["http callback", "callback de evento"],
      confusion:
        "Webhook é iniciado pelo produtor do evento; polling é iniciado repetidamente pelo sistema que espera uma mudança.",
    }),
  },
  callback: {
    en: content({
      definition:
        "A callback is a function or address supplied to another component so it can invoke that supplied behavior after an operation, event, or asynchronous result.",
      purpose:
        "It allows the initiating code to define what should happen later without blocking or tightly coupling the producer to a specific follow-up implementation.",
      when: "Use a callback for event handlers, asynchronous library results, completion hooks, or integration flows that must return control to a caller-provided destination.",
      context:
        "A file-processing function completes at an unknown time and must notify the caller whether parsing succeeded.",
      application:
        "The caller passes a callback that receives either the parsed result or an error, and the processor invokes it exactly once after finishing.",
      phrase:
        "“Make sure every branch invokes the callback once; otherwise this request can hang or complete twice.”",
      aliases: ["callback function", "função de retorno"],
      confusion:
        "A callback is the general supplied continuation mechanism; a webhook is a callback delivered specifically through an HTTP request.",
    }),
    "pt-BR": content({
      definition:
        "Callback é uma função ou endereço fornecido a outro componente para que ele invoque o comportamento indicado depois de uma operação, evento ou resultado assíncrono.",
      purpose:
        "Ele permite ao código iniciador definir o que deve acontecer depois, sem bloquear nem acoplar o produtor a uma implementação específica da próxima ação.",
      when: "Use callback em handlers de eventos, resultados assíncronos, hooks de conclusão ou integrações que precisem devolver o controle a um destino fornecido.",
      context:
        "Uma função de processamento de arquivo termina em um momento desconhecido e precisa informar se a leitura funcionou.",
      application:
        "O chamador fornece um callback que recebe resultado ou erro, e o processador o invoca exatamente uma vez ao terminar.",
      phrase:
        "“Garanta que todo fluxo invoque o callback uma única vez; caso contrário, a operação pode travar ou concluir duas vezes.”",
      aliases: ["callback function", "função de retorno"],
      confusion:
        "Callback é o mecanismo geral de continuação fornecida; webhook é um callback entregue especificamente por uma request HTTP.",
    }),
  },
  polling: {
    en: content({
      definition:
        "Polling is a communication technique in which a client repeatedly asks a source whether data or state has changed.",
      purpose:
        "It provides a simple way to observe asynchronous progress when the source cannot initiate notifications, trading freshness for repeated requests and resource usage.",
      when: "Use polling when updates are infrequent or delay is acceptable, and choose an interval, backoff, timeout, and stopping condition appropriate to the workload.",
      context:
        "A document conversion service starts a job but cannot maintain a connection or call the customer's network when processing finishes.",
      application:
        "The client checks the job endpoint after increasing delays until it receives completed, failed, or an overall timeout.",
      phrase:
        "“Add exponential backoff to the polling loop so thousands of clients do not overload the status endpoint.”",
      aliases: ["consulta periódica", "periodic polling"],
      confusion:
        "Polling repeatedly asks for changes; a webhook pushes a notification, while a WebSocket maintains a bidirectional connection.",
    }),
    "pt-BR": content({
      definition:
        "Polling é uma técnica de comunicação na qual um cliente pergunta repetidamente a uma fonte se o dado ou estado mudou.",
      purpose:
        "Ele permite observar progresso assíncrono quando a fonte não inicia notificações, trocando atualização imediata por requests repetidas e consumo de recursos.",
      when: "Use polling quando atualizações forem pouco frequentes ou algum atraso for aceitável, definindo intervalo, backoff, timeout e condição de parada.",
      context:
        "Um serviço inicia a conversão de um documento, mas não pode manter conexão nem chamar a rede do cliente quando terminar.",
      application:
        "O cliente consulta o endpoint do job em intervalos crescentes até receber concluído, falhou ou atingir o timeout total.",
      phrase:
        "“Adicione backoff exponencial ao polling para milhares de clientes não sobrecarregarem o endpoint de status.”",
      aliases: ["consulta periódica", "periodic polling"],
      confusion:
        "Polling consulta mudanças repetidamente; webhook envia uma notificação e WebSocket mantém uma conexão bidirecional.",
    }),
  },
  websocket: {
    en: content({
      definition:
        "WebSocket is a protocol that upgrades an HTTP connection into a persistent, full-duplex channel where client and server can send messages independently.",
      purpose:
        "It supports low-latency, bidirectional updates without opening a new HTTP request for every message, which is useful for interactive and rapidly changing experiences.",
      when: "Use WebSocket for chat, collaborative editing, multiplayer state, live dashboards, or other flows where both sides send frequent time-sensitive updates.",
      context:
        "A collaborative editor must show cursor movement and text changes from multiple users almost immediately.",
      application:
        "Each browser authenticates a WebSocket connection, joins the document channel, and exchanges incremental operations while the server handles reconnection and ordering.",
      phrase:
        "“Send a heartbeat over the WebSocket so we can detect broken connections and clean up presence state.”",
      aliases: ["web socket", "full-duplex web protocol"],
      confusion:
        "WebSocket is bidirectional and persistent; Server-Sent Events stream only from server to client, and ordinary HTTP uses discrete request-response exchanges.",
    }),
    "pt-BR": content({
      definition:
        "WebSocket é um protocolo que transforma uma conexão HTTP em um canal persistente e full-duplex no qual cliente e servidor enviam mensagens independentemente.",
      purpose:
        "Ele permite atualizações bidirecionais de baixa latência sem abrir uma request HTTP para cada mensagem, atendendo experiências interativas e muito dinâmicas.",
      when: "Use WebSocket em chat, edição colaborativa, jogos, painéis ao vivo ou outros fluxos em que os dois lados enviem atualizações frequentes.",
      context:
        "Um editor colaborativo precisa mostrar movimentos do cursor e alterações de texto de várias pessoas quase imediatamente.",
      application:
        "Cada navegador autentica uma conexão WebSocket, entra no canal do documento e troca operações incrementais enquanto o servidor controla reconexão e ordem.",
      phrase:
        "“Envie um heartbeat pelo WebSocket para detectarmos conexões interrompidas e removermos o estado de presença.”",
      aliases: ["web socket", "protocolo web full-duplex"],
      confusion:
        "WebSocket é bidirecional e persistente; Server-Sent Events envia apenas do servidor ao cliente, e HTTP comum usa trocas isoladas de request e response.",
    }),
  },
};
