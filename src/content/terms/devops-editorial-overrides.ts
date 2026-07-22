import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const devopsEditorialOverrides: Record<string, EditorialPair> = {
  proxy: {
    en: content({
      definition:
        "A proxy is an intermediary that receives network traffic on behalf of another participant and forwards it according to routing, access, transformation, or caching rules.",
      purpose:
        "It inserts a controlled boundary between clients and destinations, allowing addresses to remain hidden and shared policies to be applied without changing every endpoint.",
      when: "Use a proxy when traffic must pass through a managed intermediary for isolation, policy enforcement, protocol handling, observation, caching, or controlled routing.",
      context:
        "A company needs all outbound web traffic and all inbound application traffic to cross separately managed security boundaries.",
      application:
        "A forward proxy governs employee clients, while a reverse proxy receives public requests for the company's internal servers.",
      phrase:
        "“Clarify which side the proxy represents before choosing its authentication and routing rules.”",
      aliases: ["proxy server", "servidor proxy", "intermediary server"],
      confusion:
        "Proxy is the general intermediary concept; forward and reverse proxies differ according to whether they represent the client side or server side.",
    }),
    "pt-BR": content({
      definition:
        "Proxy é um intermediário que recebe tráfego de rede em nome de outro participante e o encaminha conforme regras de rota, acesso, transformação ou cache.",
      purpose:
        "Ele cria uma fronteira controlada entre clientes e destinos, ocultando endereços e aplicando políticas compartilhadas sem alterar todas as pontas.",
      when: "Use proxy quando o tráfego precisar atravessar um intermediário administrado para isolamento, políticas, protocolo, observação, cache ou roteamento.",
      context:
        "Uma empresa precisa que o tráfego web de saída e as requests públicas de entrada atravessem fronteiras de segurança administradas separadamente.",
      application:
        "Um forward proxy governa os clientes internos, enquanto um reverse proxy recebe requests públicas destinadas aos servidores da empresa.",
      phrase:
        "“Defina qual lado o proxy representa antes de escolher suas regras de autenticação e roteamento.”",
      aliases: ["proxy server", "servidor proxy", "servidor intermediário"],
      confusion:
        "Proxy é o conceito geral; forward e reverse proxies diferem conforme representam o lado cliente ou o lado servidor.",
    }),
  },
  "forward-proxy": {
    en: content({
      definition:
        "A forward proxy is an intermediary that acts on behalf of clients when they connect to external servers, so destinations see the proxy as the requester.",
      purpose:
        "It centralizes outbound access control, content filtering, usage records, caching, destination restrictions, and masking of internal client addresses.",
      when: "Use a forward proxy when an organization must govern or observe outbound network access from browsers, workloads, or restricted private networks.",
      context:
        "Build machines in a private network may download approved dependencies but must not connect freely to arbitrary internet destinations.",
      application:
        "The machines send outbound HTTP traffic through an authenticated proxy that permits package registries, logs requests, and rejects other domains.",
      phrase:
        "“Configure the build agents to use the forward proxy and allow only the registries required by the dependency policy.”",
      aliases: ["client proxy", "outbound proxy", "proxy de saída"],
      confusion:
        "A forward proxy represents clients reaching external servers; a reverse proxy represents servers receiving traffic from external clients.",
    }),
    "pt-BR": content({
      definition:
        "Forward Proxy é um intermediário que representa clientes ao conectá-los a servidores externos, fazendo o destino enxergar o proxy como solicitante.",
      purpose:
        "Ele centraliza controle de saída, filtragem, registros de uso, cache, restrições de destino e ocultação dos endereços internos dos clientes.",
      when: "Use forward proxy quando uma organização precisar governar ou observar acesso externo de navegadores, workloads ou redes privadas restritas.",
      context:
        "Máquinas de build em rede privada podem baixar dependências aprovadas, mas não devem acessar livremente qualquer destino da internet.",
      application:
        "As máquinas enviam tráfego HTTP por um proxy autenticado que permite registries aprovados, registra requests e rejeita outros domínios.",
      phrase:
        "“Configure os agentes de build no forward proxy e permita somente os registries exigidos pela política de dependências.”",
      aliases: ["client proxy", "outbound proxy", "proxy de saída"],
      confusion:
        "Forward proxy representa clientes que acessam servidores externos; reverse proxy representa servidores que recebem tráfego de clientes externos.",
    }),
  },
  "reverse-proxy": {
    en: content({
      definition:
        "A reverse proxy is an intermediary that receives client traffic on behalf of one or more origin servers and forwards each request to an appropriate backend.",
      purpose:
        "It hides backend topology and centralizes TLS termination, routing, compression, caching, protection, and traffic distribution at the server boundary.",
      when: "Use a reverse proxy in front of web applications or APIs when clients need one public address and backend instances should remain private or change independently.",
      context:
        "A public application runs several frontend and API instances on private addresses that are replaced during deployments.",
      application:
        "The reverse proxy exposes the domain, terminates TLS, routes paths to the correct pool, and removes unhealthy instances without changing client configuration.",
      phrase:
        "“Keep the application ports private and publish only the reverse proxy's HTTPS listener.”",
      aliases: ["server-side proxy", "inbound proxy", "proxy reverso"],
      confusion:
        "A reverse proxy fronts servers; a load balancer specifically distributes traffic and may be one capability of a reverse proxy.",
    }),
    "pt-BR": content({
      definition:
        "Reverse Proxy é um intermediário que recebe tráfego de clientes em nome de um ou mais servidores de origem e encaminha cada request ao backend adequado.",
      purpose:
        "Ele esconde a topologia do backend e centraliza TLS, roteamento, compressão, cache, proteção e distribuição de tráfego na fronteira dos servidores.",
      when: "Use reverse proxy na frente de sites ou APIs quando clientes precisarem de um único endereço público e as instâncias internas devam permanecer privadas ou mudar independentemente.",
      context:
        "Uma aplicação pública executa várias instâncias de frontend e API em endereços privados substituídos durante deploys.",
      application:
        "O reverse proxy expõe o domínio, encerra TLS, roteia caminhos ao pool correto e remove instâncias sem saúde sem alterar os clientes.",
      phrase:
        "“Mantenha as portas da aplicação privadas e publique somente o listener HTTPS do reverse proxy.”",
      aliases: ["server-side proxy", "inbound proxy", "proxy reverso"],
      confusion:
        "Reverse proxy fica na frente de servidores; load balancer distribui tráfego especificamente e pode ser uma capacidade do reverse proxy.",
    }),
  },
  "load-balancer": {
    en: content({
      definition:
        "A load balancer distributes incoming connections or requests among multiple eligible backend instances according to a routing algorithm and health information.",
      purpose:
        "It spreads workload, prevents a single instance from becoming the only entry point, and stops sending new traffic to backends that cannot serve it safely.",
      when: "Use a load balancer when a service runs multiple instances for capacity, availability, geographic distribution, or controlled deployment changes.",
      context:
        "An API has six instances across three availability zones and must continue serving traffic if one instance or zone fails.",
      application:
        "The balancer checks instance health, distributes requests across healthy zones, and drains an instance before it is removed during deployment.",
      phrase:
        "“Enable connection draining on the load balancer before terminating the old application instances.”",
      aliases: ["traffic balancer", "balanceador de carga", "load balancing"],
      confusion:
        "A load balancer distributes traffic among targets; a reverse proxy is a broader server-side intermediary that may also perform load balancing.",
    }),
    "pt-BR": content({
      definition:
        "Load Balancer distribui conexões ou requests recebidas entre várias instâncias elegíveis conforme um algoritmo de roteamento e informações de saúde.",
      purpose:
        "Ele divide a carga, evita uma instância única como ponto de entrada e deixa de enviar tráfego novo a backends incapazes de atendê-lo com segurança.",
      when: "Use load balancer quando um serviço possuir várias instâncias por capacidade, disponibilidade, distribuição geográfica ou mudanças controladas de deploy.",
      context:
        "Uma API possui seis instâncias em três zonas e precisa continuar funcionando quando uma instância ou zona falhar.",
      application:
        "O balanceador verifica a saúde, distribui requests pelas zonas saudáveis e drena conexões antes de remover uma instância durante o deploy.",
      phrase:
        "“Habilite connection draining no load balancer antes de encerrar as instâncias antigas da aplicação.”",
      aliases: ["traffic balancer", "balanceador de carga", "load balancing"],
      confusion:
        "Load balancer distribui tráfego entre destinos; reverse proxy é um intermediário mais amplo que também pode realizar balanceamento.",
    }),
  },
  "api-gateway": {
    en: content({
      definition:
        "An API Gateway is a managed entry point that receives API calls and applies API-specific routing and policies before forwarding them to backend services.",
      purpose:
        "It centralizes concerns such as authentication enforcement, quotas, rate limits, request transformation, version routing, analytics, and composition of service responses.",
      when: "Use an API Gateway when multiple APIs need consistent external governance or clients should not depend directly on the addresses and protocols of internal services.",
      context:
        "Mobile and partner clients call dozens of microservices that use different authentication, versions, and internal network locations.",
      application:
        "The gateway verifies access tokens, enforces each consumer's quota, maps a public version to internal routes, and records API usage metrics.",
      phrase:
        "“Apply the partner quota at the API Gateway, but keep order eligibility inside the order service.”",
      aliases: ["application programming interface gateway", "gateway de api"],
      confusion:
        "An API Gateway specializes in API governance; a general gateway may bridge networks or protocols beyond APIs, and a reverse proxy focuses mainly on forwarding server traffic.",
    }),
    "pt-BR": content({
      definition:
        "API Gateway é um ponto de entrada administrado que recebe chamadas de APIs e aplica roteamento e políticas específicas antes de encaminhá-las aos serviços.",
      purpose:
        "Ele centraliza autenticação, cotas, rate limits, transformação de requests, versões, métricas e composição de responses de serviços.",
      when: "Use API Gateway quando várias APIs precisarem de governança externa consistente ou clientes não devam depender de endereços e protocolos internos.",
      context:
        "Clientes mobile e parceiros chamam dezenas de microsserviços com autenticação, versões e localizações de rede diferentes.",
      application:
        "O gateway valida access tokens, aplica cotas, mapeia a versão pública para routes internas e registra métricas de uso.",
      phrase:
        "“Aplique a cota do parceiro no API Gateway, mas mantenha a elegibilidade do pedido dentro do serviço.”",
      aliases: ["application programming interface gateway", "gateway de api"],
      confusion:
        "API Gateway é especializado em governança de APIs; gateway geral pode conectar outras redes ou protocolos, e reverse proxy foca encaminhamento.",
    }),
  },
  "web-server": {
    en: content({
      definition:
        "A web server is software that listens for HTTP requests and returns web resources or forwards dynamic requests to application code.",
      purpose:
        "It handles network connections and protocol concerns efficiently while serving files, negotiating compression, applying cache headers, and controlling access to web content.",
      when: "Use a web server to publish static sites and assets or as the HTTP-facing layer in front of an application runtime.",
      context:
        "A product site contains immutable images and scripts plus dynamic account pages produced by an application.",
      application:
        "The web server serves versioned assets directly, applies long cache lifetimes, and proxies account requests to the application server.",
      phrase:
        "“Let the web server deliver the static bundle and forward only dynamic routes to the application.”",
      aliases: ["http server", "servidor web"],
      confusion:
        "A web server specializes in HTTP and content delivery; an application server executes application behavior and business logic.",
    }),
    "pt-BR": content({
      definition:
        "Web Server é um software que escuta requests HTTP e devolve recursos web ou encaminha requests dinâmicas ao código da aplicação.",
      purpose:
        "Ele trata conexões e protocolo com eficiência enquanto entrega arquivos, negocia compressão, aplica headers de cache e controla acesso ao conteúdo.",
      when: "Use web server para publicar sites e arquivos estáticos ou como camada HTTP diante de um runtime de aplicação.",
      context:
        "Um site possui imagens e scripts imutáveis, além de páginas de conta geradas dinamicamente por uma aplicação.",
      application:
        "O web server entrega assets versionados com cache longo e encaminha somente as routes de conta ao application server.",
      phrase:
        "“Deixe o web server entregar o bundle estático e encaminhe apenas as routes dinâmicas à aplicação.”",
      aliases: ["http server", "servidor web"],
      confusion:
        "Web server é especializado em HTTP e conteúdo; application server executa comportamento da aplicação e regras de negócio.",
    }),
  },
  "application-server": {
    en: content({
      definition:
        "An application server is a runtime environment that executes server-side application components and provides infrastructure services around their business operations.",
      purpose:
        "It hosts dynamic code and may manage concurrency, dependency lifecycles, transactions, messaging, security integration, connection pools, and deployment units.",
      when: "Use an application server or equivalent runtime when backend logic needs a managed execution environment rather than simple delivery of static files.",
      context:
        "An insurance portal must execute policy calculations, coordinate database transactions, and consume messages while serving HTTP requests.",
      application:
        "The application server hosts the deployed service, manages its request workers and database pool, and exposes health information to the platform.",
      phrase:
        "“The application server owns the database pool; the web server should only proxy this dynamic request.”",
      aliases: ["app server", "servidor de aplicação", "application runtime"],
      confusion:
        "An application server runs dynamic application logic; a web server primarily handles HTTP connections and content delivery, though products can provide both roles.",
    }),
    "pt-BR": content({
      definition:
        "Application Server é um ambiente de execução que hospeda componentes da aplicação no servidor e fornece infraestrutura às operações de negócio.",
      purpose:
        "Ele executa código dinâmico e pode administrar concorrência, dependências, transações, mensageria, segurança, pools de conexão e unidades de deploy.",
      when: "Use application server ou runtime equivalente quando o backend precisar de ambiente administrado para lógica dinâmica, não apenas entrega de arquivos.",
      context:
        "Um portal de seguros calcula apólices, coordena transações e consome mensagens enquanto atende requests HTTP.",
      application:
        "O application server hospeda o serviço, administra workers e pool do banco e expõe informações de saúde à plataforma.",
      phrase:
        "“O application server administra o pool do banco; o web server deve apenas encaminhar esta request dinâmica.”",
      aliases: ["app server", "servidor de aplicação", "application runtime"],
      confusion:
        "Application server executa lógica dinâmica; web server trata principalmente HTTP e entrega de conteúdo, embora um produto possa exercer os dois papéis.",
    }),
  },
  dns: {
    en: content({
      definition:
        "The Domain Name System is a distributed hierarchical naming system that resolves domain names and service records into information such as IP addresses.",
      purpose:
        "It lets users and applications locate network services through stable names while addresses and hosting infrastructure can change independently.",
      when: "Configure DNS when publishing a domain, routing mail, delegating subdomains, verifying ownership, discovering services, or moving traffic between infrastructure targets.",
      context:
        "A company moves its website to a new load balancer but wants visitors to keep using the same public hostname.",
      application:
        "The operator updates the relevant DNS record with an appropriate time to live and verifies resolution before retiring the former target.",
      phrase:
        "“Lower the DNS TTL before the migration so cached answers expire sooner during the cutover.”",
      aliases: ["domain name system", "sistema de nomes de domínio"],
      confusion:
        "DNS resolves names and publishes service metadata; an HTTP redirect tells a client already connected to a web server to request another URL.",
    }),
    "pt-BR": content({
      definition:
        "Domain Name System é um sistema hierárquico e distribuído que resolve nomes de domínio para informações como endereços IP e registros de serviço.",
      purpose:
        "Ele permite localizar serviços por nomes estáveis enquanto endereços e infraestrutura de hospedagem mudam independentemente.",
      when: "Configure DNS ao publicar domínio, rotear e-mail, delegar subdomínios, comprovar propriedade, descobrir serviços ou mover tráfego.",
      context:
        "Uma empresa muda o site para outro load balancer, mas visitantes devem continuar usando o mesmo hostname público.",
      application:
        "A operação atualiza o registro DNS com TTL adequado e verifica a resolução antes de desligar o destino anterior.",
      phrase:
        "“Reduza o TTL do DNS antes da migração para as respostas em cache expirarem mais cedo durante a troca.”",
      aliases: ["domain name system", "sistema de nomes de domínio"],
      confusion:
        "DNS resolve nomes e publica metadados; redirect HTTP orienta um cliente já conectado a solicitar outra URL.",
    }),
  },
  port: {
    en: content({
      definition:
        "A network port is a numbered transport-layer endpoint that lets an operating system direct TCP or UDP traffic arriving at one address to the correct process or service.",
      purpose:
        "It allows many services to share an IP address while keeping their connections distinguishable by protocol and port number.",
      when: "Choose and configure ports when exposing a listener, connecting to a service, writing firewall policy, publishing a container, or diagnosing reachability.",
      context:
        "One host runs an HTTPS proxy, a database, and an internal metrics service on the same network interface.",
      application:
        "Each process listens on a different port; the firewall permits public TCP 443 and restricts database and metrics ports to approved private sources.",
      phrase:
        "“The host responds, but nothing is listening on the application port, so check the service binding.”",
      aliases: ["network port", "tcp port", "udp port", "porta de rede"],
      confusion:
        "A port identifies a service endpoint on a host; an IP address identifies a network interface or host location.",
    }),
    "pt-BR": content({
      definition:
        "Port é um endpoint numérico da camada de transporte que permite ao sistema operacional direcionar tráfego TCP ou UDP de um endereço ao processo correto.",
      purpose:
        "Ela permite que vários serviços compartilhem um endereço IP e mantenham suas conexões separadas por protocolo e número.",
      when: "Escolha e configure ports ao expor um listener, conectar a serviço, escrever regras de firewall, publicar container ou diagnosticar conectividade.",
      context:
        "Um host executa proxy HTTPS, banco de dados e métricas internas na mesma interface de rede.",
      application:
        "Cada processo escuta uma porta; o firewall libera TCP 443 publicamente e restringe as portas de banco e métricas às origens privadas aprovadas.",
      phrase:
        "“O host responde, mas nada está escutando na port da aplicação; verifique o binding do serviço.”",
      aliases: ["network port", "tcp port", "udp port", "porta de rede"],
      confusion:
        "Port identifica um endpoint de serviço no host; endereço IP identifica uma interface ou localização de rede.",
    }),
  },
  firewall: {
    en: content({
      definition:
        "A firewall is a security control that permits, rejects, or records network traffic according to rules about source, destination, protocol, port, connection state, or application context.",
      purpose:
        "It reduces reachable attack surface and enforces boundaries between public, private, trusted, and restricted networks or workloads.",
      when: "Use firewalls at network and host boundaries with least-privilege rules, explicit ownership, logging for sensitive paths, and periodic removal of obsolete access.",
      context:
        "An application server needs database access, but the database must not accept connections from the internet or unrelated internal workloads.",
      application:
        "A firewall rule allows the application security group to reach the database port and denies every other source, while logging rejected attempts.",
      phrase:
        "“Restrict the database firewall rule to the application identity instead of opening the port to the whole subnet.”",
      aliases: ["network firewall", "host firewall", "firewall de rede"],
      confusion:
        "A firewall controls network reachability; a Web Application Firewall inspects HTTP application traffic for web-specific attack patterns.",
    }),
    "pt-BR": content({
      definition:
        "Firewall é um controle de segurança que permite, rejeita ou registra tráfego conforme origem, destino, protocolo, porta, estado da conexão ou contexto da aplicação.",
      purpose:
        "Ele reduz a superfície alcançável e aplica fronteiras entre redes ou workloads públicos, privados, confiáveis e restritos.",
      when: "Use firewalls nas fronteiras de rede e host com privilégio mínimo, responsável explícito, logs em caminhos sensíveis e remoção periódica de acessos antigos.",
      context:
        "Um application server precisa acessar o banco, mas ele não pode aceitar conexões da internet nem de workloads internos sem relação.",
      application:
        "Uma regra permite que somente a identidade da aplicação alcance a port do banco, rejeitando e registrando todas as outras origens.",
      phrase:
        "“Restrinja a regra de firewall do banco à identidade da aplicação em vez de abrir a port para toda a subnet.”",
      aliases: ["network firewall", "host firewall", "firewall de rede"],
      confusion:
        "Firewall controla alcance de rede; Web Application Firewall inspeciona tráfego HTTP em busca de ataques específicos da web.",
    }),
  },
  cdn: {
    en: content({
      definition:
        "A Content Delivery Network is a geographically distributed set of edge servers that caches or forwards content close to users on behalf of an origin.",
      purpose:
        "It lowers delivery latency and origin load while absorbing traffic peaks and providing a managed edge for TLS, caching, request filtering, and traffic routing.",
      when: "Use a CDN for public assets, downloads, video, cacheable pages, or globally accessed APIs, with explicit cache keys, expiration, invalidation, and origin-protection rules.",
      context:
        "A Brazilian media site serves large images to readers in South America, Europe, and Asia from one origin region.",
      application:
        "The CDN stores resized images at nearby points of presence and contacts the origin only on a cache miss or after expiration.",
      phrase:
        "“Include the locale in the CDN cache key so translated pages do not overwrite one another.”",
      aliases: [
        "content delivery network",
        "content distribution network",
        "rede de entrega de conteúdo",
      ],
      confusion:
        "A CDN distributes cached content across edge locations; a load balancer distributes traffic among service instances and may operate within one region.",
    }),
    "pt-BR": content({
      definition:
        "Content Delivery Network é uma rede geograficamente distribuída de servidores de borda que armazena ou encaminha conteúdo próximo às pessoas em nome da origem.",
      purpose:
        "Ela reduz latência e carga na origem, absorve picos e oferece uma borda administrada para TLS, cache, filtragem e roteamento.",
      when: "Use CDN em assets públicos, downloads, vídeo, páginas cacheáveis ou APIs globais, definindo chave de cache, expiração, invalidação e proteção da origem.",
      context:
        "Um portal brasileiro entrega imagens grandes a leitores na América do Sul, Europa e Ásia a partir de uma única região.",
      application:
        "A CDN guarda imagens redimensionadas em pontos próximos e consulta a origem somente quando não houver cache ou após a expiração.",
      phrase:
        "“Inclua o locale na chave de cache da CDN para páginas traduzidas não sobrescreverem umas às outras.”",
      aliases: [
        "content delivery network",
        "content distribution network",
        "rede de entrega de conteúdo",
      ],
      confusion:
        "CDN distribui conteúdo em cache por locais de borda; load balancer distribui tráfego entre instâncias e pode operar em uma região.",
    }),
  },
  vps: {
    en: content({
      definition:
        "A Virtual Private Server is an isolated virtual server allocated on a shared physical host with its own operating system, resources, network configuration, and administrative access.",
      purpose:
        "It offers server-level control at lower cost than dedicated hardware while separating workloads through virtualization and defined CPU, memory, storage, and network limits.",
      when: "Use a VPS for small services, learning environments, self-managed sites, or predictable workloads when the team can operate the operating system and does not need a fully managed platform.",
      context:
        "A small company needs root access to host an internal application and database but cannot justify purchasing or renting a dedicated machine.",
      application:
        "It provisions a VPS, hardens SSH, configures backups and firewall rules, installs the runtime, and monitors resource saturation.",
      phrase:
        "“The VPS is unmanaged, so patching the operating system and testing backups remain our responsibility.”",
      aliases: ["virtual private server", "servidor virtual privado"],
      confusion:
        "A VPS is a commercial virtual-server allocation; a virtual machine is the general virtualization construct used to create such isolated systems.",
    }),
    "pt-BR": content({
      definition:
        "Virtual Private Server é um servidor virtual isolado em um host físico compartilhado, com sistema operacional, recursos, rede e acesso administrativo próprios.",
      purpose:
        "Ele oferece controle de servidor por custo menor que hardware dedicado, separando workloads por virtualização e limites de CPU, memória, disco e rede.",
      when: "Use VPS para serviços pequenos, estudo, sites autogerenciados ou carga previsível quando o time puder operar o sistema e não precisar de plataforma gerenciada.",
      context:
        "Uma pequena empresa precisa de acesso root para hospedar aplicação e banco internos, mas não justifica uma máquina dedicada.",
      application:
        "Ela provisiona uma VPS, protege SSH, configura backup e firewall, instala o runtime e monitora saturação dos recursos.",
      phrase:
        "“A VPS não é gerenciada; correções do sistema e testes de backup continuam sob nossa responsabilidade.”",
      aliases: ["virtual private server", "servidor virtual privado"],
      confusion:
        "VPS é uma oferta de servidor virtual; virtual machine é o conceito geral de virtualização usado para criar sistemas isolados.",
    }),
  },
  "virtual-machine": {
    en: content({
      definition:
        "A virtual machine is a software-defined computer that emulates hardware and runs a complete guest operating system in isolation through a hypervisor.",
      purpose:
        "It lets several operating-system environments share physical hardware while retaining separate kernels, memory allocation, disks, devices, and administrative boundaries.",
      when: "Use a virtual machine when a workload needs operating-system isolation, a different kernel or platform, legacy compatibility, or infrastructure shaped like a conventional server.",
      context:
        "A test laboratory must run Linux and Windows server configurations on the same physical host without allowing either system to control the other.",
      application:
        "The hypervisor assigns virtual CPUs, memory, disks, and network adapters to two VMs, each booting and being patched independently.",
      phrase:
        "“Take an application-consistent backup of the virtual machine; a crash-consistent disk snapshot alone may not protect the database transaction.”",
      aliases: ["vm", "máquina virtual", "guest machine"],
      confusion:
        "A virtual machine includes a guest operating system and kernel; a container shares the host kernel and isolates processes with lower overhead.",
    }),
    "pt-BR": content({
      definition:
        "Virtual Machine é um computador definido por software que emula hardware e executa um sistema operacional convidado completo, isolado por um hypervisor.",
      purpose:
        "Ela permite que vários ambientes compartilhem hardware físico mantendo kernels, memória, discos, dispositivos e administração separados.",
      when: "Use virtual machine quando o workload precisar de isolamento de sistema operacional, outro kernel, compatibilidade legada ou infraestrutura semelhante a servidor convencional.",
      context:
        "Um laboratório precisa executar configurações Linux e Windows no mesmo host sem permitir que um sistema controle o outro.",
      application:
        "O hypervisor atribui CPUs, memória, discos e interfaces virtuais a duas VMs, inicializadas e atualizadas independentemente.",
      phrase:
        "“Faça backup consistente com a aplicação; snapshot do disco da virtual machine pode não proteger a transação do banco.”",
      aliases: ["vm", "máquina virtual", "guest machine"],
      confusion:
        "Virtual machine inclui sistema e kernel convidados; container compartilha o kernel do host e isola processos com menos overhead.",
    }),
  },
  container: {
    en: content({
      definition:
        "A container is an isolated process environment packaged with an application's filesystem and runtime dependencies while sharing the host operating-system kernel.",
      purpose:
        "It provides a consistent, lightweight deployment unit whose code and dependencies move together across development, testing, and production environments.",
      when: "Use containers for applications that benefit from reproducible packaging, rapid startup, process isolation, and scheduling on shared hosts.",
      context:
        "An API behaves differently on developer laptops because each machine has a different runtime version and system library set.",
      application:
        "The team builds an immutable image containing the API and required libraries, then runs that image with environment-specific configuration and resource limits.",
      phrase:
        "“Write state outside the container filesystem because this instance may be replaced at any time.”",
      aliases: ["software container", "contêiner", "process container"],
      confusion:
        "A container isolates processes while sharing the host kernel; a virtual machine runs a separate guest operating system and kernel.",
    }),
    "pt-BR": content({
      definition:
        "Container é um ambiente isolado de processo empacotado com o filesystem e as dependências da aplicação, compartilhando o kernel do sistema host.",
      purpose:
        "Ele cria uma unidade leve e consistente de deploy cujo código e dependências transitam juntos entre desenvolvimento, testes e produção.",
      when: "Use containers em aplicações que se beneficiem de empacotamento reproduzível, início rápido, isolamento de processos e agendamento em hosts compartilhados.",
      context:
        "Uma API se comporta de modo diferente nos computadores porque cada máquina possui outra versão de runtime e bibliotecas.",
      application:
        "O time constrói uma image imutável com a API e bibliotecas e a executa com configuração externa e limites de recursos.",
      phrase:
        "“Grave o estado fora do filesystem do container, pois esta instância pode ser substituída a qualquer momento.”",
      aliases: ["software container", "contêiner", "process container"],
      confusion:
        "Container isola processos compartilhando o kernel; virtual machine executa sistema operacional e kernel convidados separados.",
    }),
  },
  docker: {
    en: content({
      definition:
        "Docker is a platform and toolset for building container images, running containers, distributing images through registries, and managing local container resources.",
      purpose:
        "It provides a common workflow and image format for packaging applications with dependencies and executing them predictably through a container runtime.",
      when: "Use Docker to create and test containerized applications, automate image builds, run isolated local dependencies, or publish artifacts for a deployment platform.",
      context:
        "Developers need the same API, PostgreSQL, and Redis versions locally and in continuous integration without installing each service directly.",
      application:
        "Docker builds the API image from a Dockerfile and runs the required containers on an isolated network with mounted development configuration.",
      phrase:
        "“Pin the base image by supported version and rebuild it regularly to include security fixes.”",
      aliases: ["docker engine", "docker platform", "plataforma docker"],
      confusion:
        "Docker is a product ecosystem for containers; a container is the isolated running unit and is not inherently tied to Docker.",
    }),
    "pt-BR": content({
      definition:
        "Docker é uma plataforma e conjunto de ferramentas para construir images, executar containers, distribuí-las por registries e administrar recursos locais.",
      purpose:
        "Ele oferece um workflow e formato comuns para empacotar aplicações com dependências e executá-las previsivelmente em um runtime de containers.",
      when: "Use Docker para criar e testar aplicações conteinerizadas, automatizar builds, executar dependências locais isoladas ou publicar artefatos para deploy.",
      context:
        "Desenvolvedores precisam das mesmas versões da API, PostgreSQL e Redis localmente e no CI sem instalar cada serviço diretamente.",
      application:
        "Docker constrói a image da API pelo Dockerfile e executa os containers necessários em rede isolada com configuração de desenvolvimento.",
      phrase:
        "“Fixe uma versão suportada da base image e refaça o build regularmente para incorporar correções de segurança.”",
      aliases: ["docker engine", "docker platform", "plataforma docker"],
      confusion:
        "Docker é um ecossistema de produtos; container é a unidade isolada em execução e não depende necessariamente do Docker.",
    }),
  },
  "docker-compose": {
    en: content({
      definition:
        "Docker Compose is a tool and declarative file format for defining and running a group of related Docker services, networks, volumes, configuration, and dependencies.",
      purpose:
        "It makes a multi-container environment repeatable with one versioned description instead of a collection of manual docker run commands.",
      when: "Use Docker Compose for local development, integration testing, demonstrations, or small single-host environments that need several cooperating containers.",
      context:
        "A developer must start an API, database, cache, and message broker with consistent ports and initialization settings.",
      application:
        "A compose.yaml defines the four services, a private network, persistent database volume, health checks, and required environment variables.",
      phrase:
        "“Add a health check instead of relying only on depends_on, because a started database may not be ready for connections.”",
      aliases: ["compose", "docker compose", "compose file"],
      confusion:
        "Docker Compose coordinates containers mainly on one Docker environment; Kubernetes orchestrates workloads across a cluster with broader scheduling and reconciliation features.",
    }),
    "pt-BR": content({
      definition:
        "Docker Compose é uma ferramenta e formato declarativo para definir e executar um grupo de serviços Docker, redes, volumes, configurações e dependências.",
      purpose:
        "Ele torna um ambiente com vários containers reproduzível por uma descrição versionada, em vez de vários comandos docker run manuais.",
      when: "Use Docker Compose em desenvolvimento local, testes de integração, demonstrações ou ambientes pequenos de um host com containers cooperando.",
      context:
        "Uma pessoa precisa iniciar API, banco, cache e broker com portas e configurações de inicialização consistentes.",
      application:
        "Um compose.yaml define os quatro serviços, rede privada, volume persistente, health checks e variáveis obrigatórias.",
      phrase:
        "“Adicione health check em vez de depender apenas de depends_on, pois banco iniciado pode ainda não aceitar conexões.”",
      aliases: ["compose", "docker compose", "compose file"],
      confusion:
        "Docker Compose coordena containers principalmente em um ambiente; Kubernetes orquestra workloads por um cluster com agendamento e reconciliação.",
    }),
  },
  kubernetes: {
    en: content({
      definition:
        "Kubernetes is a container orchestration platform that schedules workloads across a cluster and continuously reconciles declared resources with their observed state.",
      purpose:
        "It automates placement, recovery, scaling, service discovery, configuration rollout, and controlled replacement of containerized workloads across multiple nodes.",
      when: "Use Kubernetes when many containerized services require shared orchestration, resilient scheduling, standardized deployment controls, and a team able to operate the platform's complexity.",
      context:
        "A platform runs dozens of services across several machines and must replace failed instances, distribute configuration, and roll out versions without manual host selection.",
      application:
        "Teams submit workload declarations; Kubernetes schedules Pods, restarts failures, exposes Services, and gradually reconciles Deployments to the requested image version.",
      phrase:
        "“Set requests and limits before increasing replicas so the Kubernetes scheduler has meaningful capacity information.”",
      aliases: [
        "k8s",
        "container orchestration platform",
        "orquestrador de containers",
      ],
      confusion:
        "Kubernetes orchestrates container workloads; Docker builds and runs containers and can supply images consumed by Kubernetes.",
    }),
    "pt-BR": content({
      definition:
        "Kubernetes é uma plataforma de orquestração que agenda workloads em um cluster e reconcilia continuamente recursos declarados com o estado observado.",
      purpose:
        "Ele automatiza posicionamento, recuperação, escala, descoberta de serviços, distribuição de configuração e substituição controlada de workloads.",
      when: "Use Kubernetes quando muitos serviços conteinerizados exigirem orquestração comum, agendamento resiliente, deploy padronizado e um time capaz de operar sua complexidade.",
      context:
        "Uma plataforma executa dezenas de serviços em várias máquinas e precisa substituir falhas e distribuir versões sem escolher hosts manualmente.",
      application:
        "Times enviam declarações; Kubernetes agenda Pods, reinicia falhas, expõe Services e reconcilia Deployments gradualmente para a image pedida.",
      phrase:
        "“Defina requests e limits antes de aumentar réplicas para o scheduler do Kubernetes conhecer a capacidade necessária.”",
      aliases: [
        "k8s",
        "container orchestration platform",
        "orquestrador de containers",
      ],
      confusion:
        "Kubernetes orquestra workloads; Docker constrói e executa containers e pode fornecer as images consumidas pelo Kubernetes.",
    }),
  },
  cluster: {
    en: content({
      definition:
        "A cluster is a group of connected computers or runtime instances operated together as one logical system for capacity, availability, or coordinated processing.",
      purpose:
        "It combines resources and distributes work or replicas so a service can grow beyond one machine and tolerate selected member failures.",
      when: "Use a cluster when a workload needs horizontal capacity, failover, distributed storage, parallel computation, or a shared orchestration boundary.",
      context:
        "A search platform cannot fit its index or query traffic safely on one server and must remain available during maintenance.",
      application:
        "The index is partitioned and replicated across cluster members, and routing sends queries to healthy replicas while one node is upgraded.",
      phrase:
        "“Confirm the cluster still has quorum before taking a second member offline.”",
      aliases: [
        "computer cluster",
        "computing cluster",
        "agrupamento de servidores",
      ],
      confusion:
        "A cluster is the complete cooperating group; a node is one participating machine or instance within that group.",
    }),
    "pt-BR": content({
      definition:
        "Cluster é um grupo de computadores ou instâncias conectados e operados como um sistema lógico para capacidade, disponibilidade ou processamento coordenado.",
      purpose:
        "Ele combina recursos e distribui trabalho ou réplicas para o serviço crescer além de uma máquina e tolerar falhas de alguns membros.",
      when: "Use cluster quando um workload precisar de escala horizontal, failover, armazenamento distribuído, processamento paralelo ou orquestração compartilhada.",
      context:
        "Uma busca não consegue manter índice e tráfego com segurança em um servidor e precisa funcionar durante manutenção.",
      application:
        "O índice é particionado e replicado entre membros, e o roteamento envia consultas a réplicas saudáveis enquanto um node é atualizado.",
      phrase:
        "“Confirme que o cluster mantém quorum antes de retirar um segundo membro.”",
      aliases: [
        "computer cluster",
        "computing cluster",
        "agrupamento de servidores",
      ],
      confusion:
        "Cluster é o grupo cooperante completo; node é uma máquina ou instância participante desse grupo.",
    }),
  },
  node: {
    en: content({
      definition:
        "A node is an individual machine, virtual machine, or runtime member that participates in a cluster and contributes compute, storage, networking, or coordination.",
      purpose:
        "It provides one addressable unit of cluster capacity and failure, allowing the system to place work and reason about member health separately.",
      when: "Refer to nodes when scheduling workloads, distributing replicas, planning capacity, draining maintenance targets, or diagnosing a cluster member.",
      context:
        "A Kubernetes worker requires an operating-system update without abruptly terminating customer-facing workloads.",
      application:
        "The operator cordons and drains the node, verifies that Pods moved to other capacity, performs the update, and returns it to scheduling.",
      phrase:
        "“Drain the node before maintenance so the scheduler can relocate workloads gracefully.”",
      aliases: ["cluster node", "worker node", "nó do cluster"],
      confusion:
        "A node supplies host-level cluster resources; a Kubernetes Pod is a scheduled workload unit that runs on a node.",
    }),
    "pt-BR": content({
      definition:
        "Node é uma máquina, virtual machine ou instância individual que participa de um cluster oferecendo computação, armazenamento, rede ou coordenação.",
      purpose:
        "Ele fornece uma unidade de capacidade e falha do cluster, permitindo posicionar workloads e acompanhar a saúde de cada membro.",
      when: "Use node ao agendar workloads, distribuir réplicas, planejar capacidade, drenar manutenção ou diagnosticar um membro do cluster.",
      context:
        "Um worker Kubernetes precisa de atualização do sistema sem encerrar abruptamente workloads de clientes.",
      application:
        "A operação impede novos agendamentos, drena o node, confirma a mudança dos Pods, atualiza e libera o agendamento novamente.",
      phrase:
        "“Drene o node antes da manutenção para o scheduler realocar os workloads de forma controlada.”",
      aliases: ["cluster node", "worker node", "nó do cluster"],
      confusion:
        "Node fornece recursos do host ao cluster; Pod do Kubernetes é uma unidade de workload agendada em um node.",
    }),
  },
  pod: {
    en: content({
      definition:
        "A Pod is Kubernetes' smallest schedulable workload unit, containing one or more tightly coupled containers that share networking and declared storage volumes.",
      purpose:
        "It gives colocated containers one lifecycle and network identity so a main application and necessary helper processes can run together on the same node.",
      when: "Define a Pod through a workload controller for containers that must share localhost, volumes, and fate; keep independently scalable services in separate Pods.",
      context:
        "An application container must expose metrics through a helper that reads the same local files and should always start and stop with it.",
      application:
        "A Deployment creates Pods containing the application and sidecar, which communicate over localhost and mount the same metrics volume.",
      phrase:
        "“Do not place the database in this Pod merely for connectivity; it has a separate lifecycle and scaling requirement.”",
      aliases: ["kubernetes pod", "k8s pod", "unidade de workload kubernetes"],
      confusion:
        "A Pod is the Kubernetes scheduling and lifecycle unit; a container is one isolated process environment inside that unit.",
    }),
    "pt-BR": content({
      definition:
        "Pod é a menor unidade de workload agendável do Kubernetes, contendo um ou mais containers fortemente relacionados que compartilham rede e volumes declarados.",
      purpose:
        "Ele oferece aos containers colocados juntos um ciclo de vida e identidade de rede para aplicação principal e processos auxiliares rodarem no mesmo node.",
      when: "Defina Pod por um controller para containers que precisem compartilhar localhost, volumes e destino; mantenha serviços escaláveis independentemente em Pods separados.",
      context:
        "Um container de aplicação precisa expor métricas por um auxiliar que lê os mesmos arquivos e deve sempre iniciar e parar com ele.",
      application:
        "Um Deployment cria Pods com aplicação e sidecar, que se comunicam por localhost e montam o mesmo volume de métricas.",
      phrase:
        "“Não coloque o banco neste Pod apenas pela conectividade; ele possui outro ciclo de vida e requisito de escala.”",
      aliases: ["kubernetes pod", "k8s pod", "unidade de workload kubernetes"],
      confusion:
        "Pod é a unidade de agendamento e ciclo de vida do Kubernetes; container é um ambiente de processo dentro dela.",
    }),
  },
  image: {
    en: content({
      definition:
        "A container image is an immutable, versioned filesystem package containing application code, runtime dependencies, metadata, and default execution configuration.",
      purpose:
        "It serves as the reproducible artifact from which containers are created, ensuring the same packaged bytes can be promoted through testing and production.",
      when: "Build an image for every releasable containerized application, minimizing its contents, pinning trusted bases, scanning vulnerabilities, and identifying it by an immutable digest.",
      context:
        "A team needs confidence that the binary tested in staging is exactly the artifact later executed in production.",
      application:
        "CI builds one image, records its digest and provenance, scans it, and promotes that digest between environments without rebuilding.",
      phrase:
        "“Deploy the tested image digest rather than rebuilding the same tag for production.”",
      aliases: ["container image", "docker image", "imagem de container"],
      confusion:
        "An image is an immutable container template; a container is a running or stopped instance created from that image.",
    }),
    "pt-BR": content({
      definition:
        "Image de container é um pacote imutável e versionado com filesystem, código, dependências, metadados e configuração padrão de execução.",
      purpose:
        "Ela é o artefato reproduzível usado para criar containers e permite promover os mesmos bytes testados até produção.",
      when: "Construa uma image para cada aplicação conteinerizada lançável, reduzindo conteúdo, fixando bases confiáveis, examinando vulnerabilidades e usando digest imutável.",
      context:
        "Um time precisa garantir que o binário testado em staging seja exatamente o artefato executado depois em produção.",
      application:
        "O CI constrói uma image, registra digest e proveniência, examina vulnerabilidades e promove o mesmo digest sem novo build.",
      phrase:
        "“Faça deploy do digest testado em vez de reconstruir a mesma tag para produção.”",
      aliases: ["container image", "docker image", "imagem de container"],
      confusion:
        "Image é um modelo imutável; container é uma instância em execução ou parada criada a partir dela.",
    }),
  },
  registry: {
    en: content({
      definition:
        "A container registry is a service that stores, indexes, secures, and distributes container images and their manifests by repository, tag, and digest.",
      purpose:
        "It gives build systems and deployment platforms a controlled source for publishing and retrieving versioned container artifacts.",
      when: "Use a registry in container delivery pipelines, enforcing authenticated access, retention, vulnerability scanning, immutable release references, and replication where required.",
      context:
        "Continuous integration produces private application images that several Kubernetes clusters must retrieve during deployments.",
      application:
        "CI authenticates with a narrow publish credential, pushes the image, and clusters pull its digest using read-only workload credentials.",
      phrase:
        "“Keep release tags immutable in the registry so an existing version cannot silently point to different bytes.”",
      aliases: ["container registry", "image registry", "registro de imagens"],
      confusion:
        "A registry hosts image repositories and distribution APIs; a repository is one named collection of related image versions inside it.",
    }),
    "pt-BR": content({
      definition:
        "Registry de containers é um serviço que armazena, indexa, protege e distribui images e manifests por repository, tag e digest.",
      purpose:
        "Ele oferece aos sistemas de build e plataformas de deploy uma fonte controlada para publicar e obter artefatos conteinerizados versionados.",
      when: "Use registry em pipelines de containers com acesso autenticado, retenção, análise de vulnerabilidades, referências imutáveis e replicação quando necessária.",
      context:
        "O CI produz images privadas que vários clusters Kubernetes precisam obter durante deploys.",
      application:
        "O CI publica com credencial restrita, e os clusters baixam o digest usando credenciais somente de leitura dos workloads.",
      phrase:
        "“Mantenha tags de release imutáveis no registry para uma versão existente não apontar silenciosamente a outros bytes.”",
      aliases: ["container registry", "image registry", "registro de imagens"],
      confusion:
        "Registry hospeda repositories e APIs de distribuição; repository é uma coleção nomeada de versões de uma image dentro dele.",
    }),
  },
  volume: {
    en: content({
      definition:
        "A volume is storage attached or mounted to a workload through a path and lifecycle that is managed separately from the workload's temporary writable filesystem.",
      purpose:
        "It preserves or shares data across process and container replacement and gives storage an explicit source, capacity, access mode, backup, and retention policy.",
      when: "Use a volume for durable databases, uploaded files, shared working data, or injected configuration that must not live only inside an ephemeral container layer.",
      context:
        "A database container is replaced during an upgrade but its data files must survive and attach to the new instance.",
      application:
        "The database mounts a persistent volume at its data directory, and the storage system snapshots and retains it independently of the Pod.",
      phrase:
        "“Verify the volume backup before replacing the stateful workload; the container image does not contain its live data.”",
      aliases: [
        "storage volume",
        "persistent volume",
        "volume de armazenamento",
      ],
      confusion:
        "A volume provides mounted storage; an image supplies the immutable filesystem used to create the container itself.",
    }),
    "pt-BR": content({
      definition:
        "Volume é um armazenamento anexado ou montado em um workload por um caminho e ciclo de vida administrado separadamente de seu filesystem temporário.",
      purpose:
        "Ele preserva ou compartilha dados durante substituições e dá ao armazenamento origem, capacidade, modo de acesso, backup e retenção explícitos.",
      when: "Use volume para bancos duráveis, uploads, dados compartilhados ou configuração injetada que não possa existir somente na camada efêmera do container.",
      context:
        "Um container de banco é substituído durante atualização, mas seus arquivos precisam sobreviver e ser anexados à nova instância.",
      application:
        "O banco monta um volume persistente no diretório de dados, e o armazenamento cria snapshots e o retém independentemente do Pod.",
      phrase:
        "“Verifique o backup do volume antes de substituir o workload; a image não contém os dados vivos do banco.”",
      aliases: [
        "storage volume",
        "persistent volume",
        "volume de armazenamento",
      ],
      confusion:
        "Volume fornece armazenamento montado; image fornece o filesystem imutável usado para criar o container.",
    }),
  },
  "environment-variable": {
    en: content({
      definition:
        "An environment variable is a named string value supplied by an operating system or runtime to a process as part of its execution environment.",
      purpose:
        "It injects deployment-specific settings without modifying application code or rebuilding an artifact, supporting the same package in multiple environments.",
      when: "Use environment variables for small runtime configuration such as addresses and feature settings, validating values at startup and using a secret manager for sensitive material.",
      context:
        "The same application image connects to different database endpoints in development, staging, and production.",
      application:
        "Each deployment supplies DATABASE_URL externally; the application reads and validates it during startup and fails clearly when it is missing.",
      phrase:
        "“Document the environment variable and validate it on boot instead of failing on the first customer request.”",
      aliases: ["env var", "environment configuration", "variável de ambiente"],
      confusion:
        "An environment variable transports configuration into a process; a secret is sensitive data requiring stronger storage, access, and rotation controls.",
    }),
    "pt-BR": content({
      definition:
        "Environment Variable é um valor textual nomeado fornecido pelo sistema operacional ou runtime a um processo como parte de seu ambiente de execução.",
      purpose:
        "Ela injeta configurações específicas do ambiente sem alterar código nem reconstruir artefatos, permitindo usar o mesmo pacote em vários locais.",
      when: "Use variáveis de ambiente para configurações pequenas, como endereços e features, validando no início e usando gerenciador de segredos para conteúdo sensível.",
      context:
        "A mesma image da aplicação conecta a endpoints de banco diferentes em desenvolvimento, staging e produção.",
      application:
        "Cada deploy fornece DATABASE_URL externamente; a aplicação lê e valida no startup e falha claramente quando estiver ausente.",
      phrase:
        "“Documente a environment variable e valide no boot, em vez de falhar na primeira request de cliente.”",
      aliases: ["env var", "environment configuration", "variável de ambiente"],
      confusion:
        "Environment variable transporta configuração; secret é dado sensível que exige armazenamento, acesso e rotação mais fortes.",
    }),
  },
  "ci-cd": {
    en: content({
      definition:
        "CI/CD combines Continuous Integration with Continuous Delivery or Deployment to build, verify, package, and release software through automated, repeatable workflows.",
      purpose:
        "It shortens feedback and reduces manual variation by testing changes early and moving trusted artifacts through defined quality and release controls.",
      when: "Adopt CI/CD for actively maintained software, beginning with reproducible builds and tests and adding safe promotion, approval, observability, and rollback practices.",
      context:
        "A team merges changes frequently but manual packaging and server updates cause missed steps and inconsistent releases.",
      application:
        "Every commit triggers tests and an artifact build; successful versions are promoted through staging and production using the same automated deployment definition.",
      phrase:
        "“Build the artifact once in CI and promote it through CD rather than compiling separately in each environment.”",
      aliases: [
        "continuous integration and continuous delivery",
        "continuous integration and continuous deployment",
        "integração e entrega contínuas",
      ],
      confusion:
        "Continuous Delivery keeps software releasable and may require approval; Continuous Deployment automatically releases every change that passes the controls.",
    }),
    "pt-BR": content({
      definition:
        "CI/CD combina Continuous Integration com Continuous Delivery ou Deployment para construir, verificar, empacotar e lançar software por workflows automatizados.",
      purpose:
        "Ele reduz o tempo de feedback e a variação manual ao testar mudanças cedo e promover artefatos confiáveis por controles definidos.",
      when: "Adote CI/CD em software mantido ativamente, começando por builds e testes reproduzíveis e adicionando promoção, aprovação, observabilidade e rollback seguros.",
      context:
        "Um time integra mudanças com frequência, mas o empacotamento e atualização manual causam etapas esquecidas e releases inconsistentes.",
      application:
        "Cada commit dispara testes e build; versões aprovadas são promovidas por staging e produção usando a mesma definição automatizada.",
      phrase:
        "“Construa o artefato uma vez no CI e promova pelo CD, sem compilar separadamente em cada ambiente.”",
      aliases: [
        "continuous integration and continuous delivery",
        "continuous integration and continuous deployment",
        "integração e entrega contínuas",
      ],
      confusion:
        "Continuous Delivery mantém o software lançável e pode exigir aprovação; Continuous Deployment publica automaticamente mudanças aprovadas pelos controles.",
    }),
  },
  pipeline: {
    en: content({
      definition:
        "A pipeline is an ordered automated workflow that moves an input through stages and gates to produce, verify, or deliver an output.",
      purpose:
        "It makes the execution path repeatable and observable, records evidence from each stage, and prevents later actions when required checks fail.",
      when: "Create a pipeline for recurring build, test, security, data-processing, infrastructure, or deployment flows whose sequence and criteria must remain consistent.",
      context:
        "Every application change must be compiled, tested, scanned, packaged, approved, and deployed in the same controlled order.",
      application:
        "The delivery pipeline runs parallel tests, creates a signed artifact, waits for an environment approval, deploys it, and executes a health verification.",
      phrase:
        "“Make the migration check a pipeline gate so incompatible schema changes cannot reach deployment.”",
      aliases: [
        "delivery pipeline",
        "automation pipeline",
        "pipeline de entrega",
      ],
      confusion:
        "A pipeline is the complete staged workflow; a job is one execution unit within a stage and a step is an individual command or action.",
    }),
    "pt-BR": content({
      definition:
        "Pipeline é um workflow automatizado e ordenado que move uma entrada por estágios e gates para produzir, verificar ou entregar uma saída.",
      purpose:
        "Ele torna o caminho reproduzível e observável, registra evidências de cada estágio e impede ações posteriores quando verificações obrigatórias falham.",
      when: "Crie pipeline para fluxos recorrentes de build, testes, segurança, dados, infraestrutura ou deploy cuja sequência e critérios devam ser consistentes.",
      context:
        "Toda mudança precisa ser compilada, testada, examinada, empacotada, aprovada e implantada na mesma ordem controlada.",
      application:
        "A pipeline executa testes paralelos, cria artefato assinado, aguarda aprovação, faz deploy e verifica a saúde do serviço.",
      phrase:
        "“Transforme a verificação da migration em gate da pipeline para mudanças incompatíveis não chegarem ao deploy.”",
      aliases: [
        "delivery pipeline",
        "automation pipeline",
        "pipeline de entrega",
      ],
      confusion:
        "Pipeline é o workflow completo; job é uma unidade de execução de um estágio e step é um comando ou ação individual.",
    }),
  },
  build: {
    en: content({
      definition:
        "A build is the process and resulting artifact produced by transforming source code and declared dependencies into a form that can be tested, packaged, or executed.",
      purpose:
        "It resolves and compiles inputs, generates assets, applies deterministic transformations, and creates traceable output suitable for later delivery stages.",
      when: "Run a build for each candidate change and release, pinning toolchains and dependencies so identical inputs can produce verifiably equivalent artifacts.",
      context:
        "A frontend repository contains TypeScript, styles, images, and dependencies that browsers cannot consume directly in their development form.",
      application:
        "The build type-checks and bundles code, optimizes assets, records a version, and emits static files that CI packages as one artifact.",
      phrase:
        "“The source is unchanged, but the build differs; compare the locked dependencies and toolchain version.”",
      aliases: [
        "software build",
        "build process",
        "compilação e empacotamento",
      ],
      confusion:
        "A build creates a runnable or deployable artifact; a deployment places and activates an existing artifact in an environment.",
    }),
    "pt-BR": content({
      definition:
        "Build é o processo e o artefato resultante da transformação de código-fonte e dependências declaradas em uma forma testável, empacotável ou executável.",
      purpose:
        "Ele resolve e compila entradas, gera assets, aplica transformações determinísticas e cria uma saída rastreável para as etapas de entrega.",
      when: "Execute build para cada mudança candidata e release, fixando ferramentas e dependências para entradas iguais produzirem artefatos verificavelmente equivalentes.",
      context:
        "Um frontend contém TypeScript, estilos, imagens e dependências que navegadores não consomem diretamente no formato de desenvolvimento.",
      application:
        "O build verifica tipos, cria bundles, otimiza assets, registra versão e emite arquivos que o CI empacota como um artefato.",
      phrase:
        "“O código não mudou, mas o build difere; compare dependências travadas e versão da toolchain.”",
      aliases: [
        "software build",
        "build process",
        "compilação e empacotamento",
      ],
      confusion:
        "Build cria artefato executável ou implantável; deployment posiciona e ativa um artefato existente em um ambiente.",
    }),
  },
  deploy: {
    en: content({
      definition:
        "Deploy is the action of placing a selected software or configuration version into a target environment and making it available to run or serve traffic.",
      purpose:
        "It moves an approved change from an artifact store into operational infrastructure through controlled installation, configuration, activation, and verification steps.",
      when: "Deploy when a version is ready for an environment, using automation, health checks, compatibility safeguards, observability, and a documented recovery path.",
      context:
        "A tested API image must replace the current production version without losing requests or leaving half-updated instances.",
      application:
        "Automation rolls the image out gradually, waits for readiness, monitors errors, and stops or reverts if the acceptance threshold fails.",
      phrase:
        "“Pause the deploy because the new instances are healthy but the checkout error rate crossed the release threshold.”",
      aliases: ["deploy action", "implantação", "software rollout"],
      confusion:
        "Deploy is commonly used as the verb or action; deployment can mean the overall process, resulting installation, or a platform resource.",
    }),
    "pt-BR": content({
      definition:
        "Deploy é a ação de colocar uma versão escolhida de software ou configuração em um ambiente e disponibilizá-la para executar ou receber tráfego.",
      purpose:
        "Ele move uma mudança aprovada do armazenamento de artefatos para a infraestrutura por instalação, configuração, ativação e verificação controladas.",
      when: "Faça deploy quando uma versão estiver pronta, usando automação, health checks, proteção de compatibilidade, observabilidade e caminho documentado de recuperação.",
      context:
        "Uma image testada da API precisa substituir a versão em produção sem perder requests nem deixar instâncias parcialmente atualizadas.",
      application:
        "A automação libera gradualmente, espera readiness, monitora erros e interrompe ou reverte se o limite de aceitação falhar.",
      phrase:
        "“Pause o deploy: as instâncias estão saudáveis, mas a taxa de erro do checkout ultrapassou o limite.”",
      aliases: ["deploy action", "implantação", "software rollout"],
      confusion:
        "Deploy costuma indicar a ação; deployment pode significar processo completo, instalação resultante ou recurso da plataforma.",
    }),
  },
  deployment: {
    en: content({
      definition:
        "A deployment is the controlled process or resulting installation of a particular application version and configuration in an environment.",
      purpose:
        "It defines which artifact runs, how capacity is replaced, what configuration accompanies it, and how readiness, failure, history, and recovery are managed.",
      when: "Create or execute a deployment when releasing a workload, recording version and configuration together and selecting a strategy suited to its availability risk.",
      context:
        "A service needs four production replicas and must replace version 12 with version 13 while keeping at least three available.",
      application:
        "The deployment controller incrementally creates version 13 replicas, verifies readiness, removes version 12 instances, and retains revision history.",
      phrase:
        "“The deployment completed, but keep the previous revision available until the post-release checks finish.”",
      aliases: [
        "software deployment",
        "implantação de software",
        "deployed release",
      ],
      confusion:
        "A deployment installs or updates software in an environment; a release is the business and user-facing decision to make a version or capability available.",
    }),
    "pt-BR": content({
      definition:
        "Deployment é o processo controlado ou a instalação resultante de uma versão e configuração específicas em determinado ambiente.",
      purpose:
        "Ele define qual artefato executa, como capacidade é substituída, qual configuração o acompanha e como readiness, falha, histórico e recuperação são administrados.",
      when: "Crie ou execute deployment ao implantar workload, registrando versão e configuração juntas e escolhendo estratégia adequada ao risco de disponibilidade.",
      context:
        "Um serviço precisa de quatro réplicas e deve trocar a versão 12 pela 13 mantendo pelo menos três disponíveis.",
      application:
        "O controller cria réplicas da versão 13, verifica readiness, remove instâncias da versão 12 e preserva o histórico.",
      phrase:
        "“O deployment terminou, mas mantenha a revisão anterior disponível até concluirmos as verificações pós-release.”",
      aliases: [
        "software deployment",
        "implantação de software",
        "deployed release",
      ],
      confusion:
        "Deployment instala ou atualiza software; release é a decisão de disponibilizar uma versão ou capacidade às pessoas.",
    }),
  },
  release: {
    en: content({
      definition:
        "A release is a named, traceable version or set of capabilities approved for availability to users, customers, or another consuming audience.",
      purpose:
        "It groups artifacts, changes, compatibility information, communication, and support decisions into a controlled product delivery event.",
      when: "Create a release when tested changes are ready for an audience, recording contents, ownership, rollout criteria, known limitations, and recovery expectations.",
      context:
        "A product has deployed new code behind a disabled feature flag and waits for support preparation and customer communication.",
      application:
        "The release owner approves the change set, publishes notes, enables the feature gradually, and monitors adoption and failures.",
      phrase:
        "“The deployment is complete, but the release remains scheduled for Monday after support receives the documentation.”",
      aliases: ["software release", "product release", "lançamento de versão"],
      confusion:
        "A deployment changes software running in an environment; a release makes a version or feature available to its intended audience and may occur later.",
    }),
    "pt-BR": content({
      definition:
        "Release é uma versão ou conjunto de capacidades nomeado e rastreável, aprovado para ficar disponível a pessoas usuárias, clientes ou consumidores.",
      purpose:
        "Ela agrupa artefatos, mudanças, compatibilidade, comunicação e suporte em um evento controlado de entrega do produto.",
      when: "Crie release quando mudanças testadas estiverem prontas para um público, registrando conteúdo, responsável, rollout, limitações e recuperação.",
      context:
        "Um produto já implantou código atrás de uma feature flag desativada e aguarda preparação do suporte e comunicação aos clientes.",
      application:
        "A pessoa responsável aprova o conjunto, publica notas, habilita a funcionalidade gradualmente e monitora adoção e falhas.",
      phrase:
        "“O deployment terminou, mas a release continua marcada para segunda-feira, após o suporte receber a documentação.”",
      aliases: ["software release", "product release", "lançamento de versão"],
      confusion:
        "Deployment muda o software em um ambiente; release disponibiliza uma versão ou feature ao público e pode ocorrer depois.",
    }),
  },
  rollback: {
    en: content({
      definition:
        "Rollback means reversing uncommitted database transaction work or restoring a deployment, configuration, or system to a previously known operational state.",
      purpose:
        "In a transaction it preserves atomicity after failure; in delivery it reduces incident duration by providing a prepared path away from a harmful change.",
      when: "Roll back a transaction when its complete unit of work cannot safely commit, or a release when health violates thresholds and the previous state remains recoverable and compatible.",
      context:
        "A checkout transaction fails after reserving inventory, while a separate application release sharply increases payment errors in production.",
      application:
        "The database rollback discards the incomplete reservation; release automation restores the previous compatible artifact and verifies recovery metrics.",
      phrase:
        "“Roll back the failed transaction, and trigger a deployment rollback because the previous version remains schema-compatible.”",
      aliases: [
        "deployment rollback",
        "release rollback",
        "reversão de versão",
        "restauração",
      ],
      confusion:
        "Transaction rollback cancels uncommitted changes; deployment rollback restores an earlier operational version, while roll forward deploys a newer correction.",
    }),
    "pt-BR": content({
      definition:
        "Rollback significa desfazer mudanças não confirmadas de uma transaction ou restaurar deployment, configuração ou sistema a um estado operacional anterior.",
      purpose:
        "Em transaction ele preserva atomicidade após falha; em entrega reduz o incidente ao oferecer uma saída preparada de uma mudança prejudicial.",
      when: "Faça rollback da transaction quando o trabalho completo não puder receber commit ou da release quando a saúde ultrapassar limites e o estado anterior continuar recuperável.",
      context:
        "Uma transaction falha após reservar estoque, enquanto uma release separada aumenta fortemente os erros de pagamento.",
      application:
        "O database rollback descarta a reserva incompleta; a automação restaura o artefato compatível anterior e verifica métricas.",
      phrase:
        "“Faça rollback da transaction com falha e do deployment, pois a versão anterior continua compatível com o schema.”",
      aliases: [
        "deployment rollback",
        "release rollback",
        "reversão de versão",
        "restauração",
      ],
      confusion:
        "Transaction rollback cancela mudanças sem commit; deployment rollback restaura versão anterior, enquanto roll forward implanta uma correção nova.",
    }),
  },
  "blue-green-deployment": {
    en: content({
      definition:
        "Blue-Green Deployment is a release strategy that maintains two equivalent production environments, with one serving traffic and the other hosting the candidate version.",
      purpose:
        "It separates deployment from traffic switching, enabling realistic verification and rapid reversal by directing traffic back to the unchanged environment.",
      when: "Use blue-green deployment when duplicate capacity is affordable and the application, database, and external effects can support two versions during the switch.",
      context:
        "A critical portal needs near-instant application rollback and cannot tolerate replacing production instances gradually.",
      application:
        "Version 8 runs in blue while version 9 is prepared in green; after checks, routing moves to green and blue remains available for recovery.",
      phrase:
        "“Keep blue intact until green passes the live smoke tests and the rollback window closes.”",
      aliases: [
        "blue green deployment",
        "blue-green release",
        "implantação azul-verde",
      ],
      confusion:
        "Blue-green switches between complete environments; canary sends a small portion of live traffic to the new version and increases it gradually.",
    }),
    "pt-BR": content({
      definition:
        "Blue-Green Deployment é uma estratégia que mantém dois ambientes de produção equivalentes, um atendendo tráfego e outro hospedando a versão candidata.",
      purpose:
        "Ela separa deployment da troca de tráfego, permitindo verificação realista e reversão rápida ao redirecionar para o ambiente preservado.",
      when: "Use blue-green quando duplicar capacidade for viável e aplicação, banco e efeitos externos suportarem duas versões durante a troca.",
      context:
        "Um portal crítico precisa de rollback quase imediato e não pode substituir instâncias de produção gradualmente.",
      application:
        "A versão 8 roda em blue e a 9 é preparada em green; após os checks, o tráfego muda para green e blue fica disponível.",
      phrase:
        "“Mantenha blue intacto até green passar pelos smoke tests reais e a janela de rollback encerrar.”",
      aliases: [
        "blue green deployment",
        "blue-green release",
        "implantação azul-verde",
      ],
      confusion:
        "Blue-green troca ambientes completos; canary envia uma pequena parcela do tráfego à nova versão e aumenta gradualmente.",
    }),
  },
  "canary-release": {
    en: content({
      definition:
        "A Canary Release is a rollout strategy that exposes a new version to a small, controlled portion of real traffic before progressively expanding its audience.",
      purpose:
        "It limits the impact of unknown production defects and uses live technical and business signals to decide whether to continue, pause, or reverse a release.",
      when: "Use a canary when traffic can be segmented reliably, versions can coexist, and representative metrics provide fast evidence about safety.",
      context:
        "A recommendation change passed testing but could affect latency and conversion differently under real customer behavior.",
      application:
        "The platform sends one percent of eligible traffic to the candidate, compares errors, latency, and conversion, then increases stages automatically.",
      phrase:
        "“Hold the canary at five percent until conversion and latency remain within the guardrails for thirty minutes.”",
      aliases: ["canary deployment", "canary rollout", "lançamento canário"],
      confusion:
        "A canary gradually changes the traffic share; an A/B test intentionally compares product outcomes and may keep variants active for experimentation.",
    }),
    "pt-BR": content({
      definition:
        "Canary Release é uma estratégia que expõe a nova versão a uma parcela pequena e controlada do tráfego real antes de ampliar seu público progressivamente.",
      purpose:
        "Ela limita o impacto de defeitos desconhecidos e usa sinais técnicos e de negócio para continuar, pausar ou reverter a release.",
      when: "Use canary quando o tráfego puder ser segmentado, versões coexistirem e métricas representativas oferecerem evidência rápida de segurança.",
      context:
        "Uma mudança de recomendações passou nos testes, mas pode afetar latência e conversão sob comportamento real.",
      application:
        "A plataforma envia 1% do tráfego à candidata, compara erros, latência e conversão e aumenta os estágios automaticamente.",
      phrase:
        "“Mantenha o canary em 5% até conversão e latência ficarem dentro dos limites por trinta minutos.”",
      aliases: ["canary deployment", "canary rollout", "lançamento canário"],
      confusion:
        "Canary altera a parcela de tráfego gradualmente; teste A/B compara resultados de produto e pode manter variantes para experimento.",
    }),
  },
  "infrastructure-as-code": {
    en: content({
      definition:
        "Infrastructure as Code is the practice of defining and managing infrastructure through machine-readable, version-controlled declarations or programs instead of undocumented manual changes.",
      purpose:
        "It makes infrastructure reviewable, repeatable, testable, traceable, and recoverable across environments while reducing configuration drift.",
      when: "Use Infrastructure as Code for cloud resources, networks, permissions, clusters, and platform configuration that must be recreated or changed consistently.",
      context:
        "Staging and production networks were created manually and now differ in undocumented security and routing settings.",
      application:
        "The team encodes both environments as modules, reviews planned changes in pull requests, and applies them through an audited pipeline.",
      phrase:
        "“Import the existing resource into Infrastructure as Code before changing it, so the next plan does not attempt to recreate it.”",
      aliases: ["iac", "infrastructure as code", "infraestrutura como código"],
      confusion:
        "Infrastructure as Code defines infrastructure state and changes; configuration management primarily configures operating systems and software on provisioned machines.",
    }),
    "pt-BR": content({
      definition:
        "Infrastructure as Code é a prática de definir e administrar infraestrutura por declarações ou programas versionados, em vez de mudanças manuais não documentadas.",
      purpose:
        "Ela torna infraestrutura revisável, reproduzível, testável, rastreável e recuperável entre ambientes, reduzindo configuration drift.",
      when: "Use Infrastructure as Code em recursos cloud, redes, permissões, clusters e plataforma que precisem ser recriados ou alterados consistentemente.",
      context:
        "Redes de staging e produção foram criadas manualmente e agora diferem em regras de segurança e roteamento não documentadas.",
      application:
        "O time codifica os ambientes em módulos, revisa planos em pull requests e aplica mudanças por pipeline auditada.",
      phrase:
        "“Importe o recurso existente para Infrastructure as Code antes de alterá-lo, evitando que o próximo plan tente recriá-lo.”",
      aliases: ["iac", "infrastructure as code", "infraestrutura como código"],
      confusion:
        "Infrastructure as Code define infraestrutura; configuration management configura sistemas e software em máquinas já provisionadas.",
    }),
  },
  terraform: {
    en: content({
      definition:
        "Terraform is an Infrastructure as Code tool that uses declarative configuration and provider plugins to plan and apply changes to infrastructure resources.",
      purpose:
        "It compares configuration with recorded and observed resource state, builds a dependency graph, previews intended actions, and executes them through provider APIs.",
      when: "Use Terraform to manage supported cloud, platform, and service resources when teams need reviewed plans, reusable modules, and consistent lifecycle automation.",
      context:
        "A platform must provision identical network, cluster, database, and monitoring foundations in several accounts.",
      application:
        "Reusable Terraform modules define the resources, remote state is locked, CI publishes a plan, and approved changes are applied with a controlled identity.",
      phrase:
        "“Review the Terraform plan carefully; this replacement changes the resource identity and may cause downtime.”",
      aliases: [
        "hashicorp terraform",
        "terraform iac",
        "terraform infrastructure as code",
      ],
      confusion:
        "Terraform is one tool that implements Infrastructure as Code; Infrastructure as Code is the broader practice and is not limited to Terraform.",
    }),
    "pt-BR": content({
      definition:
        "Terraform é uma ferramenta de Infrastructure as Code que usa configuração declarativa e providers para planejar e aplicar mudanças em recursos.",
      purpose:
        "Ele compara configuração com estado registrado e observado, cria grafo de dependências, mostra ações pretendidas e as executa por APIs dos providers.",
      when: "Use Terraform para administrar recursos suportados quando o time precisar de plans revisados, módulos reutilizáveis e automação consistente do ciclo de vida.",
      context:
        "Uma plataforma precisa provisionar fundações iguais de rede, cluster, banco e monitoramento em várias contas.",
      application:
        "Módulos definem recursos, o state remoto usa lock, o CI publica um plan e mudanças aprovadas são aplicadas com identidade controlada.",
      phrase:
        "“Revise o Terraform plan; esta substituição muda a identidade do recurso e pode causar downtime.”",
      aliases: [
        "hashicorp terraform",
        "terraform iac",
        "terraform infrastructure as code",
      ],
      confusion:
        "Terraform é uma ferramenta de Infrastructure as Code; IaC é a prática mais ampla e não se limita ao Terraform.",
    }),
  },
  "cloud-computing": {
    en: content({
      definition:
        "Cloud Computing is the on-demand delivery of pooled computing capabilities such as servers, storage, databases, networking, and software through service APIs with measured usage.",
      purpose:
        "It lets organizations provision and scale technology without purchasing every underlying asset, while shifting responsibility according to the chosen service model.",
      when: "Use cloud computing when elastic capacity, global regions, managed services, rapid provisioning, or usage-based consumption outweigh cost, governance, dependency, and migration tradeoffs.",
      context:
        "A seasonal retailer needs ten times its normal capacity for several weeks but does not want idle physical servers for the rest of the year.",
      application:
        "The retailer provisions services in cloud regions, scales compute with demand, uses managed databases, and applies budgets and policy controls.",
      phrase:
        "“Cloud removes hardware procurement, not operational responsibility; define ownership for cost, security, and reliability.”",
      aliases: ["cloud services", "computação em nuvem", "on-demand computing"],
      confusion:
        "Cloud computing is a service consumption and delivery model; virtualization is an enabling isolation technology that can also run outside a cloud.",
    }),
    "pt-BR": content({
      definition:
        "Cloud Computing é a entrega sob demanda de recursos compartilhados como servidores, armazenamento, bancos, rede e software por APIs e uso medido.",
      purpose:
        "Ela permite provisionar e escalar tecnologia sem comprar todos os ativos, distribuindo responsabilidades conforme o modelo de serviço escolhido.",
      when: "Use cloud quando elasticidade, regiões globais, serviços gerenciados, provisionamento rápido ou consumo variável superarem custos e dependências.",
      context:
        "Um varejista sazonal precisa de dez vezes a capacidade por semanas, mas não quer servidores físicos ociosos no restante do ano.",
      application:
        "Ele provisiona serviços em regiões cloud, escala computação, usa bancos gerenciados e aplica controles de política e orçamento.",
      phrase:
        "“Cloud elimina a compra de hardware, não a responsabilidade operacional; defina responsáveis por custo, segurança e confiabilidade.”",
      aliases: ["cloud services", "computação em nuvem", "on-demand computing"],
      confusion:
        "Cloud computing é um modelo de serviço; virtualização é uma tecnologia de isolamento que também pode existir fora da cloud.",
    }),
  },
  serverless: {
    en: content({
      definition:
        "Serverless is a cloud execution model in which the provider manages servers and runtime capacity while customers deploy functions or services that scale according to demand.",
      purpose:
        "It reduces infrastructure management and can align cost with execution, allowing teams to focus on code while the platform handles provisioning and many availability mechanics.",
      when: "Use serverless for event-driven, intermittent, rapidly scaling, or integration workloads that fit runtime, latency, state, portability, and cost constraints.",
      context:
        "Uploaded images arrive irregularly and require short independent processing without keeping dedicated workers running all day.",
      application:
        "An object-storage event invokes a function that validates and resizes the image, writes outputs, and releases capacity when execution ends.",
      phrase:
        "“Measure cold-start latency before choosing serverless for this synchronous request path.”",
      aliases: [
        "serverless computing",
        "function as a service",
        "computação sem servidor",
      ],
      confusion:
        "Serverless still uses servers managed by a provider; it means the consumer does not provision or operate those servers directly.",
    }),
    "pt-BR": content({
      definition:
        "Serverless é um modelo cloud no qual o provedor administra servidores e capacidade enquanto clientes implantam funções ou serviços que escalam conforme a demanda.",
      purpose:
        "Ele reduz gestão de infraestrutura e pode alinhar custo à execução, deixando provisionamento e mecanismos de disponibilidade para a plataforma.",
      when: "Use serverless em workloads orientados a eventos, intermitentes, muito elásticos ou de integração que atendam limites de runtime, latência, estado e custo.",
      context:
        "Uploads de imagens chegam irregularmente e exigem processamento curto sem manter workers dedicados o dia inteiro.",
      application:
        "Um evento do storage invoca uma função que valida e redimensiona a imagem, grava saídas e libera capacidade ao terminar.",
      phrase:
        "“Meça a latência de cold start antes de escolher serverless para este caminho síncrono.”",
      aliases: [
        "serverless computing",
        "function as a service",
        "computação sem servidor",
      ],
      confusion:
        "Serverless ainda usa servidores administrados pelo provedor; o consumidor apenas não os provisiona nem opera diretamente.",
    }),
  },
  "horizontal-scaling": {
    en: content({
      definition:
        "Horizontal Scaling increases or decreases capacity by adding or removing service instances, machines, partitions, or replicas that share a workload.",
      purpose:
        "It expands capacity beyond one machine's limits and can improve failure tolerance by distributing work across independently replaceable members.",
      when: "Scale horizontally when a workload can be partitioned or balanced and needs elasticity or availability, after addressing shared state, coordination, and downstream limits.",
      context:
        "An API exceeds the safe request capacity of one instance during daily peaks but each request can be handled by any stateless replica.",
      application:
        "Autoscaling adds replicas behind the load balancer as demand rises and removes them gradually after utilization falls.",
      phrase:
        "“Before scaling horizontally, move the in-memory session state to a shared or client-carried mechanism.”",
      aliases: ["scale out", "scaling out", "escala horizontal"],
      confusion:
        "Horizontal scaling adds parallel units; vertical scaling gives an existing unit more CPU, memory, storage, or throughput.",
    }),
    "pt-BR": content({
      definition:
        "Horizontal Scaling aumenta ou reduz capacidade adicionando ou removendo instâncias, máquinas, partições ou réplicas que compartilham um workload.",
      purpose:
        "Ele ultrapassa limites de uma máquina e pode melhorar tolerância a falhas ao distribuir trabalho entre membros substituíveis.",
      when: "Escale horizontalmente quando o workload puder ser particionado ou balanceado e precisar de elasticidade ou disponibilidade, tratando estado e dependências.",
      context:
        "Uma API ultrapassa a capacidade segura de uma instância nos picos, mas qualquer réplica stateless pode atender cada request.",
      application:
        "O autoscaling adiciona réplicas atrás do load balancer conforme a demanda e as remove gradualmente quando a utilização cai.",
      phrase:
        "“Antes do horizontal scaling, mova o estado da session em memória para um mecanismo compartilhado ou levado pelo cliente.”",
      aliases: ["scale out", "scaling out", "escala horizontal"],
      confusion:
        "Horizontal scaling adiciona unidades paralelas; vertical scaling oferece mais CPU, memória, disco ou throughput a uma unidade.",
    }),
  },
  "vertical-scaling": {
    en: content({
      definition:
        "Vertical Scaling increases or decreases the compute, memory, storage, or network capacity assigned to an existing machine or service instance.",
      purpose:
        "It raises the capacity of a workload without distributing it across additional members, often requiring fewer application-level coordination changes.",
      when: "Scale vertically when a workload is difficult to partition, needs quick capacity relief, or remains comfortably below platform limits and restart constraints are acceptable.",
      context:
        "A relational database is memory-constrained, while redesigning and distributing its workload would take substantially longer than the immediate capacity need.",
      application:
        "The operator moves the database to a larger instance class during a maintenance window and confirms memory, I/O, cost, and failover behavior.",
      phrase:
        "“Vertical scaling buys capacity quickly, but document the instance ceiling and the next partitioning trigger.”",
      aliases: ["scale up", "scaling up", "escala vertical"],
      confusion:
        "Vertical scaling enlarges one unit and has an upper bound; horizontal scaling distributes capacity across more units.",
    }),
    "pt-BR": content({
      definition:
        "Vertical Scaling aumenta ou reduz CPU, memória, armazenamento ou rede atribuídos a uma máquina ou instância existente.",
      purpose:
        "Ele eleva a capacidade sem distribuir o workload entre novos membros e normalmente exige menos mudanças de coordenação na aplicação.",
      when: "Escale verticalmente quando o workload for difícil de particionar, precisar de alívio rápido ou permanecer abaixo dos limites da plataforma.",
      context:
        "Um banco relacional sofre por memória, enquanto redesenhar e distribuir sua carga levaria muito mais tempo que a necessidade imediata.",
      application:
        "A operação move o banco para uma classe maior em janela de manutenção e confirma memória, I/O, custo e failover.",
      phrase:
        "“Vertical scaling oferece capacidade rapidamente, mas documente o limite da instância e o gatilho para particionamento.”",
      aliases: ["scale up", "scaling up", "escala vertical"],
      confusion:
        "Vertical scaling amplia uma unidade e possui limite superior; horizontal scaling distribui capacidade entre mais unidades.",
    }),
  },
  "high-availability": {
    en: content({
      definition:
        "High Availability is a system design objective that keeps a service accessible through component failures and maintenance by eliminating critical single points of failure.",
      purpose:
        "It reduces interruption through redundancy, failure detection, automated failover, capacity reserves, isolation, and tested operational recovery.",
      when: "Design for high availability when service interruption has material user or business impact, defining the tolerated failures and measurable availability target.",
      context:
        "A payment authorization service must continue operating when one application instance or an entire availability zone fails.",
      application:
        "The service runs redundant instances across zones, uses health-aware routing and replicated data, and regularly tests failover under expected load.",
      phrase:
        "“Two replicas on the same host are not high availability; that host remains a shared failure domain.”",
      aliases: ["ha", "highly available", "alta disponibilidade"],
      confusion:
        "High availability minimizes service interruption; disaster recovery restores service after larger destructive events and may accept a longer recovery period.",
    }),
    "pt-BR": content({
      definition:
        "High Availability é um objetivo de projeto que mantém um serviço acessível durante falhas e manutenção, eliminando pontos únicos críticos.",
      purpose:
        "Ela reduz interrupção por redundância, detecção de falhas, failover automático, reserva de capacidade, isolamento e recuperação testada.",
      when: "Projete alta disponibilidade quando interrupção causar impacto relevante, definindo as falhas toleradas e uma meta mensurável.",
      context:
        "Um serviço de autorização de pagamentos precisa continuar quando uma instância ou uma zona inteira falhar.",
      application:
        "O serviço roda instâncias entre zonas, usa roteamento por saúde e dados replicados e testa failover regularmente sob carga.",
      phrase:
        "“Duas réplicas no mesmo host não oferecem high availability; o host continua sendo um domínio de falha comum.”",
      aliases: ["ha", "highly available", "alta disponibilidade"],
      confusion:
        "High availability minimiza interrupção; disaster recovery restaura após eventos destrutivos maiores e pode aceitar recuperação mais longa.",
    }),
  },
  downtime: {
    en: content({
      definition:
        "Downtime is a period in which a service, feature, or dependency is unavailable or unable to meet its defined successful-use criteria.",
      purpose:
        "Measuring downtime quantifies service interruption for reliability analysis, customer commitments, incident review, and prioritization of resilience work.",
      when: "Track downtime against a precise service boundary and observation window, distinguishing planned maintenance, partial degradation, and complete outage according to policy.",
      context:
        "The website loads, but every checkout attempt fails for twelve minutes because its payment dependency is unreachable.",
      application:
        "The team counts checkout as down for the affected interval, calculates the availability impact, and links it to the incident record.",
      phrase:
        "“The homepage uptime does not erase checkout downtime; measure availability at the user journey boundary.”",
      aliases: [
        "service downtime",
        "outage duration",
        "tempo de indisponibilidade",
      ],
      confusion:
        "Downtime is the unavailable interval; an outage is the disruptive event, while degradation may still provide reduced service.",
    }),
    "pt-BR": content({
      definition:
        "Downtime é o período em que um serviço, funcionalidade ou dependência fica indisponível ou não atende aos critérios definidos de uso bem-sucedido.",
      purpose:
        "Medi-lo quantifica interrupção para análise de confiabilidade, compromissos com clientes, revisão de incidentes e priorização de resiliência.",
      when: "Registre downtime em uma fronteira e janela precisas, separando manutenção planejada, degradação parcial e indisponibilidade conforme a política.",
      context:
        "O site abre, mas todo checkout falha por doze minutos porque a dependência de pagamento está inacessível.",
      application:
        "O time considera checkout indisponível no intervalo, calcula o impacto na disponibilidade e relaciona ao incidente.",
      phrase:
        "“O uptime da página inicial não elimina o downtime do checkout; meça na fronteira da jornada da pessoa.”",
      aliases: [
        "service downtime",
        "outage duration",
        "tempo de indisponibilidade",
      ],
      confusion:
        "Downtime é o intervalo indisponível; outage é o evento, enquanto degradação ainda pode oferecer serviço reduzido.",
    }),
  },
  uptime: {
    en: content({
      definition:
        "Uptime is the duration or proportion of a measurement window during which a service satisfies its defined availability criteria.",
      purpose:
        "It summarizes observed availability for operational goals and commitments, provided the measured checks represent meaningful user success.",
      when: "Report uptime for a named service and time window with an explicit calculation, exclusions, data source, and definition of successful availability.",
      context:
        "A monthly service report must compare the observed availability of the order API with its contractual target.",
      application:
        "Monitoring measures successful external requests, subtracts qualifying downtime from the window, and publishes the percentage with incident annotations.",
      phrase:
        "“State the measurement window beside uptime; 99.9 percent has different consequences per month and per year.”",
      aliases: ["service uptime", "availability time", "tempo disponível"],
      confusion:
        "Uptime reports time available; reliability also considers whether the service behaves correctly and consistently during that time.",
    }),
    "pt-BR": content({
      definition:
        "Uptime é a duração ou proporção de uma janela na qual um serviço atende aos critérios definidos de disponibilidade.",
      purpose:
        "Ele resume disponibilidade observada para metas e compromissos, desde que as medições representem sucesso significativo para quem usa.",
      when: "Informe uptime para serviço e período nomeados, com cálculo, exclusões, fonte de dados e definição de disponibilidade explícitos.",
      context:
        "Um relatório mensal precisa comparar a disponibilidade observada da API de pedidos com sua meta contratual.",
      application:
        "O monitoramento mede requests externas bem-sucedidas, desconta downtime qualificável e publica o percentual com incidentes anotados.",
      phrase:
        "“Informe a janela ao lado do uptime; 99,9% produz consequências diferentes por mês e por ano.”",
      aliases: ["service uptime", "availability time", "tempo disponível"],
      confusion:
        "Uptime informa tempo disponível; reliability também considera comportamento correto e consistente durante esse tempo.",
    }),
  },
  "health-check": {
    en: content({
      definition:
        "A health check is an automated probe that evaluates whether a component is alive, ready for work, or functioning according to a defined condition.",
      purpose:
        "It gives orchestrators, load balancers, monitors, and operators a machine-readable signal for routing traffic, restarting processes, and detecting failures.",
      when: "Provide separate checks when needed for liveness and readiness, keeping them fast and choosing dependencies carefully to avoid cascading restarts or false health.",
      context:
        "An API process has started, but it must finish loading configuration and establish essential resources before receiving customer traffic.",
      application:
        "The liveness check confirms the event loop responds; readiness remains false until initialization completes and then admits the instance to the load balancer.",
      phrase:
        "“Do not fail liveness because a remote dependency is briefly unavailable; that would restart every healthy application process.”",
      aliases: [
        "health probe",
        "liveness check",
        "readiness check",
        "verificação de saúde",
      ],
      confusion:
        "Liveness asks whether a process should be restarted; readiness asks whether it should currently receive traffic.",
    }),
    "pt-BR": content({
      definition:
        "Health Check é uma sonda automática que avalia se um componente está vivo, pronto para trabalho ou funcionando conforme uma condição definida.",
      purpose:
        "Ele oferece a orquestradores, balanceadores e monitoramento um sinal legível por máquina para rotear tráfego, reiniciar processos e detectar falhas.",
      when: "Separe checks de liveness e readiness quando necessário, mantendo-os rápidos e escolhendo dependências para evitar reinícios em cascata ou falsos positivos.",
      context:
        "O processo de uma API iniciou, mas precisa carregar configuração e recursos essenciais antes de receber tráfego.",
      application:
        "Liveness confirma resposta do processo; readiness permanece falso até o fim da inicialização e depois libera a instância no load balancer.",
      phrase:
        "“Não falhe liveness porque uma dependência remota caiu brevemente; isso reiniciaria todos os processos saudáveis.”",
      aliases: [
        "health probe",
        "liveness check",
        "readiness check",
        "verificação de saúde",
      ],
      confusion:
        "Liveness pergunta se o processo deve reiniciar; readiness pergunta se ele deve receber tráfego agora.",
    }),
  },
  subdomain: {
    en: content({
      definition:
        "A subdomain is a DNS name created beneath another domain by adding one or more labels to its left, such as api.example.com under example.com.",
      purpose:
        "It partitions a domain namespace so different services, environments, regions, or organizational areas can have independent DNS records and routing.",
      when: "Use a subdomain when a service needs a distinct hostname, ownership boundary, certificate scope, cookie boundary, or routing policy while remaining under a parent domain.",
      context:
        "A company publishes its website, public API, documentation, and customer support through separately operated services.",
      application:
        "DNS assigns www, api, docs, and support subdomains to different targets, and each team manages its records through delegated permissions.",
      phrase:
        "“Place the API on its own subdomain so its routing and security policy can evolve independently from the website.”",
      aliases: ["dns subdomain", "child domain", "subdomínio"],
      confusion:
        "A subdomain extends the DNS namespace of a parent domain; a URL path comes after the hostname and is interpreted by the web server or application.",
    }),
    "pt-BR": content({
      definition:
        "Subdomain é um nome DNS criado abaixo de outro domínio pela adição de um ou mais rótulos à esquerda, como api.example.com sob example.com.",
      purpose:
        "Ele divide o namespace para serviços, ambientes, regiões ou áreas possuírem registros DNS e roteamento independentes.",
      when: "Use subdomain quando um serviço precisar de hostname, responsabilidade, certificado, cookie ou política de roteamento distintos sob um domínio pai.",
      context:
        "Uma empresa publica site, API, documentação e suporte por serviços operados separadamente.",
      application:
        "O DNS associa os subdomínios www, api, docs e support a destinos diferentes, e cada time administra seus registros com permissões delegadas.",
      phrase:
        "“Coloque a API em um subdomain próprio para roteamento e segurança evoluírem independentemente do site.”",
      aliases: ["dns subdomain", "child domain", "subdomínio"],
      confusion:
        "Subdomain estende o namespace DNS de um domínio pai; caminho da URL vem após o hostname e é interpretado pelo servidor ou aplicação.",
    }),
  },
};
