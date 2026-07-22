import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const applicationEditorialOverrides: Record<string, EditorialPair> = {
  idempotency: {
    en: content({
      definition:
        "Idempotency is the property that repeating the same operation produces no additional effect beyond the effect of its first successful execution.",
      purpose:
        "It makes retries safe when clients cannot tell whether a previous request completed, preventing duplicate payments, orders, messages, or state transitions.",
      when: "Design for idempotency in operations that may be retried because of timeouts, network failures, message redelivery, or user repetition, especially when they create irreversible effects.",
      context:
        "A payment request reaches the provider, but the connection closes before the checkout receives the confirmation and the client retries.",
      application:
        "The checkout sends a unique idempotency key; the payment service stores the first result and returns it for later requests carrying the same key and parameters.",
      phrase:
        "“Use the order identifier as the idempotency boundary so this retry cannot create a second charge.”",
      aliases: ["idempotent operation", "operação idempotente", "idempotência"],
      confusion:
        "Idempotency prevents repeated effects; deduplication detects equivalent records or messages and may use different identity and time rules.",
    }),
    "pt-BR": content({
      definition:
        "Idempotency é a propriedade pela qual repetir a mesma operação não produz efeito adicional além daquele causado pela primeira execução bem-sucedida.",
      purpose:
        "Ela torna retries seguros quando o cliente não sabe se a request anterior terminou, evitando pagamentos, pedidos, mensagens ou transições duplicadas.",
      when: "Projete idempotência em operações sujeitas a repetição por timeout, falha de rede, reentrega de mensagem ou ação da pessoa, especialmente quando houver efeitos irreversíveis.",
      context:
        "Uma cobrança chega ao provedor, mas a conexão termina antes de o checkout receber a confirmação e o cliente repete a request.",
      application:
        "O checkout envia uma chave única; o serviço guarda o primeiro resultado e o devolve nas próximas requests com a mesma chave e parâmetros.",
      phrase:
        "“Use o identificador do pedido como fronteira de idempotency para este retry não criar uma segunda cobrança.”",
      aliases: ["idempotent operation", "operação idempotente", "idempotência"],
      confusion:
        "Idempotency impede efeitos repetidos; deduplicação detecta registros ou mensagens equivalentes e pode usar outras regras de identidade e tempo.",
    }),
  },
  middleware: {
    en: content({
      definition:
        "Middleware is a component placed in a request-processing chain that can inspect, modify, reject, or pass control before and after the next handler.",
      purpose:
        "It centralizes transport-level concerns shared by many routes, such as request logging, correlation, authentication parsing, compression, cross-origin policy, and error conversion.",
      when: "Use middleware when the same protocol-oriented behavior must wrap several handlers and does not belong to one route's business rules.",
      context:
        "Every API request needs a correlation identifier and a structured completion log containing status and elapsed time.",
      application:
        "A middleware creates or reads the identifier, records the start time, invokes the next handler, and logs the response after that handler finishes.",
      phrase:
        "“Put correlation in middleware so every route participates, including requests that fail before reaching a controller.”",
      aliases: ["request middleware", "middleware de requisição"],
      confusion:
        "Middleware wraps a broad processing pipeline; an interceptor is often tied to a framework invocation and can transform a particular method's input or result.",
    }),
    "pt-BR": content({
      definition:
        "Middleware é um componente inserido na cadeia de processamento que pode inspecionar, modificar, rejeitar ou repassar o controle antes e depois do próximo handler.",
      purpose:
        "Ele centraliza responsabilidades de transporte compartilhadas por várias routes, como logs, correlação, leitura de autenticação, compressão, CORS e conversão de erros.",
      when: "Use middleware quando o mesmo comportamento relacionado ao protocolo precisar envolver vários handlers e não pertencer às regras de negócio de uma route.",
      context:
        "Toda request da API precisa de identificador de correlação e log estruturado com status e tempo de execução.",
      application:
        "Um middleware cria ou lê o identificador, registra o início, chama o próximo handler e grava a response quando ele termina.",
      phrase:
        "“Coloque a correlação no middleware para incluir todas as routes, até as requests que falham antes do controller.”",
      aliases: ["request middleware", "middleware de requisição"],
      confusion:
        "Middleware envolve uma cadeia ampla; interceptor normalmente acompanha uma invocação do framework e pode transformar entrada ou resultado de um método.",
    }),
  },
  interceptor: {
    en: content({
      definition:
        "An interceptor is a component that surrounds a method or handler invocation to observe or transform its arguments, execution, result, or error.",
      purpose:
        "It applies reusable behavior at an invocation boundary, including result serialization, timing, caching, transactions, retries, or framework-specific response mapping.",
      when: "Use an interceptor when cross-cutting behavior needs access to both the call and its returned value and the framework provides a defined interception lifecycle.",
      context:
        "All controller methods return domain objects, but public responses must remove private fields and use a standard envelope.",
      application:
        "A response interceptor awaits the controller result, serializes allowed fields, adds metadata, and passes errors to the common exception handler.",
      phrase:
        "“Apply the serialization interceptor here so the controller can return the domain result without constructing the HTTP envelope.”",
      aliases: ["method interceptor", "interceptador"],
      confusion:
        "An interceptor wraps a specific invocation and often its result; middleware commonly operates earlier on the general request-response pipeline.",
    }),
    "pt-BR": content({
      definition:
        "Interceptor é um componente que envolve a invocação de método ou handler para observar ou transformar argumentos, execução, resultado ou erro.",
      purpose:
        "Ele aplica comportamento reutilizável na fronteira de uma chamada, como serialização, medição, cache, transação, retry ou mapeamento de response.",
      when: "Use interceptor quando uma responsabilidade transversal precisar acessar a chamada e o valor retornado e o framework oferecer um ciclo de interceptação definido.",
      context:
        "Os controllers retornam objetos de domínio, mas as responses públicas devem remover campos privados e adotar um envelope padrão.",
      application:
        "Um interceptor aguarda o resultado, serializa os campos permitidos, adiciona metadados e repassa erros ao tratador comum.",
      phrase:
        "“Aplique o interceptor de serialização para o controller retornar o resultado sem montar o envelope HTTP.”",
      aliases: ["method interceptor", "interceptador"],
      confusion:
        "Interceptor envolve uma invocação específica e seu resultado; middleware costuma atuar antes na cadeia geral de request e response.",
    }),
  },
  guard: {
    en: content({
      definition:
        "A guard is a component that decides whether execution may enter a protected route, handler, or state transition based on the current context.",
      purpose:
        "It keeps access conditions explicit at the boundary and stops unauthorized or contextually invalid execution before business behavior begins.",
      when: "Use a guard for route authorization, role or policy checks, feature availability, workflow preconditions, or navigation rules supported by a framework.",
      context:
        "An authenticated support agent opens a route that exports personal data, but only privacy officers may perform that action.",
      application:
        "The guard reads the verified identity and route policy, denies the request before the controller, and records the rejected access attempt.",
      phrase:
        "“Attach the privacy-role guard to the export route and keep the domain permission check in the use case as defense in depth.”",
      aliases: ["route guard", "authorization guard", "guarda de rota"],
      confusion:
        "A guard answers whether execution may proceed; middleware can perform broader preprocessing and may not represent an access decision.",
    }),
    "pt-BR": content({
      definition:
        "Guard é um componente que decide se a execução pode entrar em uma route, handler ou transição protegida conforme o contexto atual.",
      purpose:
        "Ele torna condições de acesso explícitas na fronteira e interrompe execuções não autorizadas ou inválidas antes do comportamento de negócio.",
      when: "Use guard em autorização de routes, papéis, políticas, disponibilidade de funcionalidades, pré-condições de fluxo ou regras de navegação do framework.",
      context:
        "Uma pessoa autenticada do suporte acessa a exportação de dados pessoais, mas somente o time de privacidade pode executar essa ação.",
      application:
        "O guard lê a identidade verificada e a política da route, nega a request antes do controller e registra a tentativa.",
      phrase:
        "“Anexe o guard de privacidade à route e mantenha a permissão de domínio no use case como defesa adicional.”",
      aliases: ["route guard", "authorization guard", "guarda de rota"],
      confusion:
        "Guard responde se a execução pode continuar; middleware realiza processamento mais amplo e não representa necessariamente uma decisão de acesso.",
    }),
  },
  "dependency-injection": {
    en: content({
      definition:
        "Dependency Injection is a design technique in which an object's required collaborators are supplied from outside instead of being constructed or located by that object.",
      purpose:
        "It separates behavior from object creation, makes dependencies visible, supports alternative implementations, and enables focused tests with controlled collaborators.",
      when: "Use dependency injection when a class depends on databases, gateways, clocks, configuration, or other services whose implementation or lifecycle should be managed separately.",
      context:
        "An order use case sends email through a concrete provider created inside its constructor, making local tests call external infrastructure.",
      application:
        "The use case receives a NotificationPort through its constructor; production injects the provider adapter and tests inject an in-memory fake.",
      phrase:
        "“Inject the clock instead of reading system time directly so expiration behavior remains deterministic in tests.”",
      aliases: ["dependency injection", "injeção de dependência", "DI"],
      confusion:
        "Dependency Injection supplies collaborators; a Dependency Injection container is an optional tool that constructs and connects them.",
    }),
    "pt-BR": content({
      definition:
        "Dependency Injection é uma técnica na qual os colaboradores necessários de um objeto são fornecidos externamente, em vez de construídos ou localizados pelo próprio objeto.",
      purpose:
        "Ela separa comportamento de criação, deixa dependências visíveis, permite trocar implementações e facilita testes focados com colaboradores controlados.",
      when: "Use injeção quando uma classe depender de bancos, gateways, relógio, configuração ou serviços cuja implementação e ciclo de vida devam ser administrados separadamente.",
      context:
        "Um use case cria internamente um provedor de e-mail, fazendo com que testes locais dependam de infraestrutura externa.",
      application:
        "O use case recebe uma NotificationPort no construtor; produção injeta o adapter do provedor e testes usam uma implementação em memória.",
      phrase:
        "“Injete o relógio em vez de consultar a hora do sistema para o teste de expiração continuar determinístico.”",
      aliases: ["dependency injection", "injeção de dependência", "DI"],
      confusion:
        "Dependency Injection fornece colaboradores; container de injeção é uma ferramenta opcional que os constrói e conecta.",
    }),
  },
  entity: {
    en: content({
      definition:
        "An entity is a domain object defined by a stable identity that persists through changes to its attributes and state over time.",
      purpose:
        "It represents a distinct business subject and protects the rules governing its lifecycle, relationships, and valid state transitions.",
      when: "Model something as an entity when the business must distinguish one instance from another and track its continuity even when their current values are equal.",
      context:
        "Two customers have the same name and address, but their accounts, orders, consent history, and lifecycle must remain separate.",
      application:
        "Each Customer entity receives a unique identifier and exposes operations that change contact data only after enforcing domain rules.",
      phrase:
        "“Compare these customers by identity; matching attributes do not make them the same entity.”",
      aliases: ["domain entity", "entidade de domínio"],
      confusion:
        "An entity is defined by identity and lifecycle; a value object is defined entirely by its values and is usually immutable.",
    }),
    "pt-BR": content({
      definition:
        "Entity é um objeto de domínio definido por uma identidade estável que permanece enquanto seus atributos e estado mudam ao longo do tempo.",
      purpose:
        "Ela representa um elemento distinto do negócio e protege as regras de seu ciclo de vida, relações e transições válidas.",
      when: "Modele como entity quando o negócio precisar distinguir uma instância de outra e acompanhar sua continuidade mesmo que os valores atuais sejam iguais.",
      context:
        "Duas pessoas clientes possuem o mesmo nome e endereço, mas contas, pedidos, consentimentos e ciclos de vida precisam continuar separados.",
      application:
        "Cada entity Customer recebe identificador único e expõe operações que alteram contatos somente após validar regras do domínio.",
      phrase:
        "“Compare esses clientes pela identidade; atributos iguais não os tornam a mesma entity.”",
      aliases: ["domain entity", "entidade de domínio"],
      confusion:
        "Entity é definida por identidade e ciclo de vida; value object é definido por seus valores e normalmente é imutável.",
    }),
  },
  repository: {
    en: content({
      definition:
        "A repository is an abstraction that provides collection-like access to domain objects while hiding how they are stored, retrieved, and reconstructed.",
      purpose:
        "It keeps persistence details outside domain and application logic and expresses data access in terms meaningful to the model rather than tables or transport APIs.",
      when: "Use a repository for aggregate or entity persistence when application code needs lookup and save operations without depending directly on a database technology.",
      context:
        "An order use case needs to load an order with its items and save a valid status change, but should not construct SQL or ORM queries.",
      application:
        "The use case calls OrderRepository.findById and save; a database adapter implements those operations and reconstructs the aggregate.",
      phrase:
        "“Keep this query behind the order repository so the use case depends on domain language, not ORM details.”",
      aliases: ["repository pattern", "repositório", "repositório de domínio"],
      confusion:
        "A repository exposes domain-oriented persistence operations; a Data Access Object usually mirrors storage-level queries and records more directly.",
    }),
    "pt-BR": content({
      definition:
        "Repository é uma abstração que oferece acesso semelhante a uma coleção de objetos de domínio e esconde como eles são armazenados, consultados e reconstruídos.",
      purpose:
        "Ele mantém detalhes de persistência fora do domínio e da aplicação e expressa acesso a dados na linguagem do modelo, não de tabelas ou APIs externas.",
      when: "Use repository para persistir aggregates ou entities quando a aplicação precisar buscar e salvar sem depender diretamente de uma tecnologia de banco.",
      context:
        "Um use case precisa carregar um pedido com itens e salvar a mudança de status, mas não deve construir SQL nem consultas do ORM.",
      application:
        "O use case chama OrderRepository.findById e save; um adapter de banco implementa as operações e reconstrói o aggregate.",
      phrase:
        "“Mantenha essa consulta no repository de pedidos para o use case depender da linguagem do domínio, não do ORM.”",
      aliases: ["repository pattern", "repositório", "repositório de domínio"],
      confusion:
        "Repository oferece persistência orientada ao domínio; Data Access Object costuma refletir consultas e registros do armazenamento mais diretamente.",
    }),
  },
  service: {
    en: content({
      definition:
        "A service is a software component that groups operations around a coherent capability and exposes them through a defined interface.",
      purpose:
        "It gives behavior with no natural home in a single value or entity an explicit boundary and lets callers depend on a capability instead of scattered implementation steps.",
      when: "Use a service when an operation coordinates several collaborators or represents a stateless domain or application capability; name it after that specific responsibility.",
      context:
        "Calculating a shipping quote depends on package measurements, destination rules, carrier prices, and delivery promises rather than one order attribute.",
      application:
        "A ShippingQuoteService receives the required policies and carrier port, evaluates the options, and returns eligible quotes without owning request handling.",
      phrase:
        "“Move carrier selection to the shipping service, but leave HTTP parsing in the controller.”",
      aliases: ["application service", "domain service", "serviço"],
      confusion:
        "Service is a broad responsibility boundary; a use case represents one user or system goal and often coordinates services and repositories.",
    }),
    "pt-BR": content({
      definition:
        "Service é um componente que agrupa operações em torno de uma capacidade coerente e as expõe por uma interface definida.",
      purpose:
        "Ele cria uma fronteira explícita para comportamentos que não pertencem naturalmente a um único valor ou entity e evita espalhar etapas entre chamadores.",
      when: "Use service quando uma operação coordenar colaboradores ou representar uma capacidade sem estado do domínio ou aplicação; dê a ele um nome específico.",
      context:
        "Calcular frete depende de medidas, destino, preços das transportadoras e promessas de entrega, não de um único atributo do pedido.",
      application:
        "Um ShippingQuoteService recebe políticas e a porta das transportadoras, avalia opções e retorna cotações elegíveis sem tratar HTTP.",
      phrase:
        "“Mova a escolha da transportadora para o shipping service, mas mantenha a leitura HTTP no controller.”",
      aliases: ["application service", "domain service", "serviço"],
      confusion:
        "Service é uma fronteira ampla de responsabilidade; use case representa um objetivo e frequentemente coordena services e repositories.",
    }),
  },
  controller: {
    en: content({
      definition:
        "A controller is an input-boundary component that translates an incoming request or interface action into a call to application behavior and maps the result back to the caller.",
      purpose:
        "It isolates transport concerns such as parsing, input validation, status selection, and response formatting from business rules and orchestration.",
      when: "Use a controller at HTTP, command-line, desktop, or other delivery boundaries, keeping it thin and delegating business decisions to use cases or domain objects.",
      context:
        "An HTTP endpoint receives a JSON registration request and must return protocol-specific success or validation responses.",
      application:
        "The controller validates the DTO, calls RegisterCustomer, converts its result to an HTTP response, and contains no customer eligibility rule.",
      phrase:
        "“The controller should translate this request; the discount decision belongs in the application or domain layer.”",
      aliases: ["request controller", "controlador"],
      confusion:
        "A controller adapts an external input boundary; a service performs an application or domain capability independent of that transport.",
    }),
    "pt-BR": content({
      definition:
        "Controller é um componente de entrada que traduz uma request ou ação de interface em uma chamada à aplicação e transforma o resultado para o chamador.",
      purpose:
        "Ele isola detalhes de transporte, como leitura, validação de entrada, status e formato da response, das regras e da orquestração do negócio.",
      when: "Use controller em fronteiras HTTP, linha de comando, desktop ou outras interfaces, mantendo-o pequeno e delegando decisões a use cases ou ao domínio.",
      context:
        "Um endpoint recebe um cadastro em JSON e precisa retornar responses específicas de sucesso ou erro de validação.",
      application:
        "O controller valida o DTO, chama RegisterCustomer e converte o resultado em HTTP, sem conter a regra de elegibilidade da pessoa.",
      phrase:
        "“O controller deve traduzir a request; a decisão de desconto pertence à aplicação ou ao domínio.”",
      aliases: ["request controller", "controlador"],
      confusion:
        "Controller adapta uma entrada externa; service executa uma capacidade da aplicação ou domínio sem depender daquele transporte.",
    }),
  },
  "use-case": {
    en: content({
      definition:
        "A use case is an application operation that represents one complete goal an external actor can accomplish through the system.",
      purpose:
        "It defines the workflow boundary, coordinates domain objects and ports, controls transaction intent, and returns an outcome without depending on a specific user interface.",
      when: "Create a use case for meaningful commands or queries such as PlaceOrder, ApproveRefund, or GetAccountStatement, especially when several collaborators participate.",
      context:
        "Placing an order requires validation, price calculation, inventory reservation, persistence, and publication of a resulting event.",
      application:
        "PlaceOrder coordinates the domain model, inventory port, order repository, and event publisher while the HTTP controller only translates input and output.",
      phrase:
        "“Put the transaction boundary around the use case because it coordinates all steps of placing the order.”",
      aliases: ["application use case", "caso de uso", "application operation"],
      confusion:
        "A use case represents an actor's goal and orchestration; a user story is a planning artifact describing desired value and acceptance expectations.",
    }),
    "pt-BR": content({
      definition:
        "Use Case é uma operação da aplicação que representa um objetivo completo que um agente externo consegue realizar pelo sistema.",
      purpose:
        "Ele define a fronteira do fluxo, coordena objetos de domínio e portas, controla a intenção transacional e retorna um resultado sem depender da interface.",
      when: "Crie um use case para comandos ou consultas significativos, como PlaceOrder, ApproveRefund ou GetAccountStatement, especialmente quando houver vários colaboradores.",
      context:
        "Criar um pedido exige validação, cálculo de preços, reserva de estoque, persistência e publicação de um evento.",
      application:
        "PlaceOrder coordena domínio, porta de estoque, repository e publicador, enquanto o controller HTTP apenas traduz entrada e saída.",
      phrase:
        "“Coloque a fronteira transacional no use case porque ele coordena todas as etapas de criação do pedido.”",
      aliases: ["application use case", "caso de uso", "operação da aplicação"],
      confusion:
        "Use case representa objetivo e orquestração; user story é um artefato de planejamento que descreve valor desejado e critérios de aceitação.",
    }),
  },
  domain: {
    en: content({
      definition:
        "Domain has two common software meanings: the field of knowledge and business rules a system serves, or a hierarchical internet name registered and resolved through DNS.",
      purpose:
        "A business domain supplies meaning for models and rules; an internet domain gives services stable human-readable names while their underlying network addresses can change.",
      when: "State which meaning applies: study the business domain when modeling behavior, and configure an internet domain when publishing services, email, ownership records, or subdomains through DNS.",
      context:
        "A delivery product models the logistics domain while its public API is reached through the internet domain example.com.",
      application:
        "Engineers use logistics vocabulary for code and rules, while operators publish api.example.com in DNS and route it to the production gateway.",
      phrase:
        "“Specify whether this decision concerns the business domain model or the DNS domain, because they have different owners and effects.”",
      aliases: [
        "business domain",
        "problem domain",
        "internet domain",
        "domain name",
        "domínio de negócio",
        "nome de domínio",
      ],
      confusion:
        "Business domain describes the field the software serves; internet domain is a hierarchical DNS name. Context must disambiguate them.",
    }),
    "pt-BR": content({
      definition:
        "Domain possui dois sentidos comuns: o campo de conhecimento e regras de negócio atendido pelo sistema ou um nome hierárquico da internet registrado e resolvido pelo DNS.",
      purpose:
        "Business domain fornece significado aos modelos e regras; domínio de internet oferece nomes legíveis e estáveis enquanto os endereços de rede mudam.",
      when: "Declare qual sentido se aplica: estude o business domain ao modelar comportamento e configure domínio de internet ao publicar serviços, e-mail, registros ou subdomínios no DNS.",
      context:
        "Um produto modela o domain de logística enquanto sua API pública é acessada pelo domínio de internet example.com.",
      application:
        "Engenharia usa o vocabulário logístico no código, enquanto operações publica api.example.com no DNS e o direciona ao gateway de produção.",
      phrase:
        "“Especifique se a decisão envolve o business domain ou o domínio DNS, pois eles possuem responsáveis e efeitos diferentes.”",
      aliases: [
        "business domain",
        "problem domain",
        "internet domain",
        "domain name",
        "domínio de negócio",
        "nome de domínio",
      ],
      confusion:
        "Business domain descreve o campo atendido pelo software; domínio de internet é um nome hierárquico do DNS. O contexto deve diferenciá-los.",
    }),
  },
  "business-rule": {
    en: content({
      definition:
        "A business rule is a specific statement that constrains, derives, permits, or requires behavior according to the policies and facts of an organization or domain.",
      purpose:
        "It turns business intent into a condition that can guide decisions consistently and be explained, tested, traced, and changed independently of interface details.",
      when: "Identify a business rule whenever an outcome depends on policy, eligibility, calculation, timing, obligation, or a domain invariant rather than a technical limitation.",
      context:
        "A lending company permits early repayment but must calculate a regulated interest adjustment according to the remaining contract period.",
      application:
        "The repayment policy is represented in domain code with named inputs and examples, then verified against scenarios approved by the compliance team.",
      phrase:
        "“The thirty-day cutoff is a business rule; link this implementation to the policy and cover both boundary dates.”",
      aliases: ["domain rule", "regra de negócio", "business policy"],
      confusion:
        "A business rule expresses domain policy; input validation only checks whether supplied data has an acceptable shape or basic value.",
    }),
    "pt-BR": content({
      definition:
        "Business Rule é uma declaração específica que restringe, deriva, permite ou exige comportamento conforme políticas e fatos de uma organização ou domínio.",
      purpose:
        "Ela transforma intenção do negócio em uma condição que orienta decisões consistentemente e pode ser explicada, testada, rastreada e alterada sem depender da interface.",
      when: "Identifique uma business rule quando o resultado depender de política, elegibilidade, cálculo, prazo, obrigação ou invariante do domínio, não de limitação técnica.",
      context:
        "Uma financeira permite quitação antecipada, mas precisa calcular um ajuste regulamentado conforme o período restante do contrato.",
      application:
        "A política é representada no domínio com entradas nomeadas e exemplos e verificada com cenários aprovados pelo time de conformidade.",
      phrase:
        "“O limite de trinta dias é uma business rule; relacione a implementação à política e teste as duas datas de fronteira.”",
      aliases: ["domain rule", "regra de negócio", "business policy"],
      confusion:
        "Business rule expressa política do domínio; validação de entrada apenas verifica formato ou valores básicos dos dados recebidos.",
    }),
  },
  validation: {
    en: content({
      definition:
        "Validation is the process of checking data or an attempted operation against explicit requirements before accepting it for a particular purpose.",
      purpose:
        "It prevents malformed, incomplete, inconsistent, or disallowed input from entering later processing and returns actionable reasons for rejection.",
      when: "Validate untrusted input at system boundaries and enforce domain invariants where state changes occur, distinguishing syntax checks from business decisions.",
      context:
        "A registration request contains an invalid email format and a birth date that would violate the product's eligibility policy.",
      application:
        "The request schema rejects the malformed email, while the domain policy evaluates age eligibility using a validated date and the applicable jurisdiction.",
      phrase:
        "“Validate the identifier format at the boundary, then let the domain decide whether that account can receive the transfer.”",
      aliases: ["data validation", "input validation", "validação de dados"],
      confusion:
        "Validation checks whether data or action meets requirements; sanitization transforms input to remove or neutralize unsafe content.",
    }),
    "pt-BR": content({
      definition:
        "Validation é o processo de verificar dados ou uma operação pretendida contra requisitos explícitos antes de aceitá-los para determinada finalidade.",
      purpose:
        "Ela impede entradas malformadas, incompletas, inconsistentes ou proibidas de chegar ao processamento e devolve motivos úteis para a rejeição.",
      when: "Valide entradas não confiáveis nas fronteiras e aplique invariantes do domínio onde o estado muda, separando verificações de sintaxe de decisões de negócio.",
      context:
        "Um cadastro contém e-mail com formato inválido e uma data de nascimento que pode violar a política de elegibilidade do produto.",
      application:
        "O schema rejeita o e-mail malformado, enquanto a política do domínio avalia idade usando uma data válida e a jurisdição aplicável.",
      phrase:
        "“Valide o formato do identificador na fronteira e deixe o domínio decidir se a conta pode receber a transferência.”",
      aliases: ["data validation", "input validation", "validação de dados"],
      confusion:
        "Validation confere requisitos; sanitization transforma a entrada para remover ou neutralizar conteúdo inseguro.",
    }),
  },
  serialization: {
    en: content({
      definition:
        "Serialization is the conversion of an in-memory value or object graph into a defined representation that can be transmitted, stored, or reconstructed later.",
      purpose:
        "It creates a portable form such as JSON, a binary message, or a byte stream while applying explicit rules for field names, types, versions, and unsupported values.",
      when: "Serialize data when crossing a process or persistence boundary, and define compatibility and security rules rather than exposing internal objects automatically.",
      context:
        "An order service publishes events consumed by applications written in different languages and released on independent schedules.",
      application:
        "The producer serializes a versioned event contract, represents dates in an agreed format, and omits internal fields not promised to consumers.",
      phrase:
        "“Add the field as optional in the serialized contract so older consumers can continue reading the event.”",
      aliases: ["object serialization", "serialização", "encoding objects"],
      confusion:
        "Serialization converts structured values to a representation; encoding maps data to a particular symbol or byte scheme and may be only one serialization step.",
    }),
    "pt-BR": content({
      definition:
        "Serialization é a conversão de um valor ou grafo de objetos em memória para uma representação definida que possa ser transmitida, armazenada ou reconstruída.",
      purpose:
        "Ela cria uma forma portável, como JSON, mensagem binária ou bytes, aplicando regras explícitas para nomes, tipos, versões e valores não suportados.",
      when: "Serialize dados ao atravessar fronteiras de processo ou persistência e defina compatibilidade e segurança em vez de expor objetos internos automaticamente.",
      context:
        "Um serviço publica eventos consumidos por aplicações em linguagens diferentes e lançadas em calendários independentes.",
      application:
        "O produtor serializa um contrato versionado, representa datas no formato combinado e omite campos internos não prometidos aos consumidores.",
      phrase:
        "“Adicione o campo como opcional no contrato serializado para consumidores antigos continuarem lendo o evento.”",
      aliases: [
        "object serialization",
        "serialização",
        "codificação de objetos",
      ],
      confusion:
        "Serialization converte valores estruturados em uma representação; encoding mapeia dados para símbolos ou bytes e pode ser apenas uma etapa.",
    }),
  },
  pagination: {
    en: content({
      definition:
        "Pagination is the division of a large ordered result set into smaller pages that clients retrieve separately using a position, offset, cursor, or continuation token.",
      purpose:
        "It limits response size, latency, memory use, and database work while giving clients a controlled way to navigate more results.",
      when: "Paginate list operations that can grow beyond a safe response size, choosing offset or cursor semantics according to data volatility and navigation needs.",
      context:
        "An activity feed contains millions of records and receives new entries while a user scrolls through older results.",
      application:
        "The API returns a fixed number of records ordered by time and ID plus an opaque cursor that continues after the final item without relying on a shifting offset.",
      phrase:
        "“Use cursor pagination for this feed so inserts at the top do not cause duplicate or skipped entries.”",
      aliases: [
        "paged results",
        "paginação",
        "cursor pagination",
        "offset pagination",
      ],
      confusion:
        "Offset pagination selects a numeric position and supports direct page jumps; cursor pagination continues from a stable ordered value and handles changing data better.",
    }),
    "pt-BR": content({
      definition:
        "Pagination é a divisão de um conjunto grande e ordenado em páginas menores recuperadas separadamente por posição, offset, cursor ou token de continuação.",
      purpose:
        "Ela limita tamanho da response, latência, memória e trabalho no banco enquanto oferece ao cliente uma forma controlada de buscar mais resultados.",
      when: "Paginate listagens que possam ultrapassar um tamanho seguro, escolhendo offset ou cursor conforme a volatilidade dos dados e a navegação necessária.",
      context:
        "Um feed possui milhões de registros e recebe novas entradas enquanto uma pessoa percorre resultados antigos.",
      application:
        "A API retorna uma quantidade fixa ordenada por data e ID e um cursor opaco que continua após o último item sem depender de offset variável.",
      phrase:
        "“Use cursor pagination neste feed para inserções no topo não duplicarem nem omitirem itens.”",
      aliases: [
        "paged results",
        "paginação",
        "cursor pagination",
        "offset pagination",
      ],
      confusion:
        "Offset pagination usa posição numérica e permite saltar páginas; cursor pagination continua a partir de um valor estável e lida melhor com dados mutáveis.",
    }),
  },
};
