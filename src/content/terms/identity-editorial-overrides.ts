import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const identityEditorialOverrides: Record<string, EditorialPair> = {
  authentication: {
    en: content({
      definition:
        "Authentication is the process of verifying that a user, device, or service is the identity it claims to be.",
      purpose:
        "It establishes a trustworthy identity before a system creates a session, issues credentials, records activity, or evaluates access permissions.",
      when: "Require authentication before exposing private data or protected operations, and choose evidence appropriate to the risk, such as a password, security key, certificate, or multiple factors.",
      context:
        "An employee attempts to open an administration dashboard containing customer and billing information.",
      application:
        "The identity provider verifies the employee's password and security-key challenge, then returns a signed identity assertion to the dashboard.",
      phrase:
        "“Authentication succeeded, but we still need to check whether this identity may administer billing.”",
      aliases: [
        "identity verification",
        "autenticação",
        "verificação de identidade",
      ],
      confusion:
        "Authentication proves who the actor is; authorization determines what that authenticated actor is allowed to do.",
    }),
    "pt-BR": content({
      definition:
        "Authentication é o processo de verificar se uma pessoa, dispositivo ou serviço corresponde à identidade que afirma possuir.",
      purpose:
        "Ela estabelece uma identidade confiável antes de o sistema criar sessão, emitir credenciais, registrar atividade ou avaliar permissões de acesso.",
      when: "Exija autenticação antes de expor dados privados ou operações protegidas e escolha evidências proporcionais ao risco, como senha, chave de segurança, certificado ou múltiplos fatores.",
      context:
        "Uma pessoa funcionária tenta abrir um painel administrativo com informações de clientes e cobrança.",
      application:
        "O provedor de identidade verifica a senha e o desafio da chave de segurança e devolve ao painel uma declaração de identidade assinada.",
      phrase:
        "“A autenticação funcionou, mas ainda precisamos verificar se essa identidade pode administrar a cobrança.”",
      aliases: [
        "identity verification",
        "autenticação",
        "verificação de identidade",
      ],
      confusion:
        "Authentication prova quem é o agente; authorization determina o que esse agente autenticado pode fazer.",
    }),
  },
  authorization: {
    en: content({
      definition:
        "Authorization is the decision process that determines whether an identified actor may perform a particular action on a particular resource.",
      purpose:
        "It enforces access policy using roles, permissions, ownership, attributes, scopes, or contextual rules so authenticated identities receive only approved capabilities.",
      when: "Evaluate authorization at every protected operation and resource boundary, including server-side checks even when the interface hides unavailable actions.",
      context:
        "Two authenticated employees can open the finance application, but only one is responsible for approving refunds above a threshold.",
      application:
        "The service checks the refund amount, employee role, business unit, and approval scope before executing the operation.",
      phrase:
        "“Do the authorization check in the service; hiding the button is not an access-control boundary.”",
      aliases: ["access control decision", "autorização", "controle de acesso"],
      confusion:
        "Authorization grants or denies an action after identity is known; authentication is the earlier verification of that identity.",
    }),
    "pt-BR": content({
      definition:
        "Authorization é o processo que decide se uma identidade pode executar determinada ação sobre um recurso específico.",
      purpose:
        "Ela aplica políticas com papéis, permissões, propriedade, atributos, escopos ou contexto para entregar somente as capacidades aprovadas.",
      when: "Avalie authorization em toda operação protegida e fronteira de recurso, inclusive no servidor quando a interface já esconde ações indisponíveis.",
      context:
        "Duas pessoas autenticadas acessam o sistema financeiro, mas somente uma pode aprovar estornos acima de certo valor.",
      application:
        "O serviço verifica valor, papel, unidade de negócio e escopo de aprovação antes de executar o estorno.",
      phrase:
        "“Faça a verificação de authorization no serviço; esconder o botão não cria uma fronteira de acesso.”",
      aliases: ["access control decision", "autorização", "controle de acesso"],
      confusion:
        "Authorization permite ou nega uma ação depois que a identidade é conhecida; authentication verifica essa identidade antes.",
    }),
  },
  token: {
    en: content({
      definition:
        "A token is a compact value issued or recognized by a system to represent authority, identity state, a one-time action, or a reference to protected data.",
      purpose:
        "It lets software carry a limited capability or lookup reference without repeatedly transmitting the original secret or complete underlying record.",
      when: "Use a token for delegated API access, session references, password-reset links, verification actions, or substituting sensitive values, with scope and lifetime matched to the purpose.",
      context:
        "A user authorizes a calendar application to read events without giving that application the account password.",
      application:
        "The authorization server issues a short-lived token restricted to calendar-read scope, and the API validates it on each request.",
      phrase:
        "“This token grants production access, so redact it from logs and rotate it immediately if exposed.”",
      aliases: ["security token", "access credential", "credencial de acesso"],
      confusion:
        "Token is a broad credential or reference concept; JWT is one structured token format and not every token is a JWT.",
    }),
    "pt-BR": content({
      definition:
        "Token é um valor compacto emitido ou reconhecido por um sistema para representar autoridade, estado de identidade, ação única ou referência a dados protegidos.",
      purpose:
        "Ele transporta uma capacidade limitada ou referência sem reenviar repetidamente o segredo original ou todo o registro representado.",
      when: "Use token para acesso delegado a APIs, referência de sessão, recuperação de senha, verificação ou substituição de valores sensíveis, com escopo e validade adequados.",
      context:
        "Uma pessoa autoriza um aplicativo de agenda a ler eventos sem fornecer a senha de sua conta.",
      application:
        "O servidor de autorização emite um token de curta duração limitado ao escopo de leitura, e a API o valida em cada request.",
      phrase:
        "“Esse token permite acesso à produção; remova-o dos logs e faça a rotação imediatamente se ele vazar.”",
      aliases: ["security token", "access credential", "credencial de acesso"],
      confusion:
        "Token é um conceito amplo de credencial ou referência; JWT é um formato estruturado e nem todo token é um JWT.",
    }),
  },
  session: {
    en: content({
      definition:
        "A session is a bounded period of interaction during which a system associates multiple requests with the same authenticated client and stored state.",
      purpose:
        "It preserves continuity across otherwise independent requests, such as login state, security context, workflow progress, or temporary user preferences.",
      when: "Create a session when an application must remember a client between interactions, and define secure creation, expiration, renewal, revocation, and concurrent-use rules.",
      context:
        "After signing in, a shopper navigates through several pages and expects the site to recognize the account without requesting a password each time.",
      application:
        "The server stores session state under a random identifier sent in a secure cookie and invalidates it on logout or inactivity timeout.",
      phrase:
        "“Rotate the session identifier after login to prevent the pre-authentication session from being reused.”",
      aliases: ["user session", "sessão de usuário"],
      confusion:
        "A session is the continuing interaction state; a cookie is one browser storage and transport mechanism often used to carry its identifier.",
    }),
    "pt-BR": content({
      definition:
        "Session é um período delimitado de interação no qual um sistema associa várias requests ao mesmo cliente autenticado e a um estado armazenado.",
      purpose:
        "Ela mantém continuidade entre requests independentes, preservando login, contexto de segurança, progresso de fluxo ou preferências temporárias.",
      when: "Crie uma session quando a aplicação precisar lembrar o cliente entre interações e defina regras seguras de criação, expiração, renovação, revogação e concorrência.",
      context:
        "Depois do login, uma pessoa navega por várias páginas da loja e espera ser reconhecida sem fornecer a senha novamente.",
      application:
        "O servidor guarda o estado sob um identificador aleatório enviado em cookie seguro e o invalida no logout ou após inatividade.",
      phrase:
        "“Troque o identificador da session depois do login para impedir o reaproveitamento da sessão pré-autenticada.”",
      aliases: ["user session", "sessão de usuário"],
      confusion:
        "Session é o estado contínuo da interação; cookie é um mecanismo do navegador frequentemente usado para transportar seu identificador.",
    }),
  },
  cookie: {
    en: content({
      definition:
        "A cookie is a small name-value record that a web server asks a browser to store and automatically return on matching future HTTP requests.",
      purpose:
        "It maintains browser-specific state such as a session identifier, preference, or consent choice across pages and requests governed by domain, path, lifetime, and security attributes.",
      when: "Use a cookie when the server needs browser-managed state, applying Secure, HttpOnly, SameSite, narrow scope, and appropriate expiration according to the data's risk.",
      context:
        "A web application uses a server-side session and needs the browser to present the opaque session identifier on subsequent requests.",
      application:
        "The login response sets a Secure, HttpOnly, SameSite cookie; the browser sends it only under the configured origin and path conditions.",
      phrase:
        "“Keep the session cookie HttpOnly so injected JavaScript cannot read the credential directly.”",
      aliases: ["http cookie", "browser cookie", "cookie http"],
      confusion:
        "A cookie is automatically attached to matching HTTP requests; localStorage is script-accessible storage and is not sent by the browser automatically.",
    }),
    "pt-BR": content({
      definition:
        "Cookie é um pequeno registro de nome e valor que um servidor pede ao navegador para armazenar e devolver automaticamente em requests HTTP compatíveis.",
      purpose:
        "Ele mantém estado específico do navegador, como identificador de sessão, preferência ou consentimento, conforme regras de domínio, caminho, validade e segurança.",
      when: "Use cookie quando o servidor precisar de estado administrado pelo navegador, aplicando Secure, HttpOnly, SameSite, escopo restrito e expiração proporcional ao risco.",
      context:
        "Uma aplicação usa sessão armazenada no servidor e precisa que o navegador apresente o identificador opaco nas próximas requests.",
      application:
        "A response de login define um cookie Secure, HttpOnly e SameSite; o navegador só o envia nas condições configuradas de origem e caminho.",
      phrase:
        "“Mantenha o cookie de sessão como HttpOnly para um JavaScript injetado não conseguir ler a credencial diretamente.”",
      aliases: ["http cookie", "browser cookie", "cookie http"],
      confusion:
        "Cookie acompanha automaticamente requests compatíveis; localStorage é acessível por script e não é enviado automaticamente pelo navegador.",
    }),
  },
  jwt: {
    en: content({
      definition:
        "JSON Web Token is a compact, URL-safe format for carrying a set of claims that can be signed and optionally encrypted.",
      purpose:
        "It lets a recipient verify the issuer and integrity of claims without querying the issuer for every use, provided keys, algorithms, audience, and lifetime are validated correctly.",
      when: "Use a JWT when independently verifiable claims must cross a system boundary; keep it short-lived and avoid placing secrets in an ordinary signed token.",
      context:
        "An identity provider must assert a user's identifier and audience to several APIs operated within the same platform.",
      application:
        "The provider signs a JWT containing issuer, subject, audience, issued-at, and expiration claims; each API validates all of them with the trusted public key.",
      phrase:
        "“Decoding the JWT is not validation; verify its signature, issuer, audience, algorithm, and expiration.”",
      aliases: ["json web token"],
      confusion:
        "JWT defines a token representation; OAuth defines authorization flows and may use either JWTs or opaque tokens.",
    }),
    "pt-BR": content({
      definition:
        "JSON Web Token é um formato compacto e seguro para URLs que transporta claims e pode ser assinado e, opcionalmente, criptografado.",
      purpose:
        "Ele permite verificar emissor e integridade dos claims sem consultar o emissor a cada uso, desde que chaves, algoritmo, audiência e validade sejam conferidos.",
      when: "Use JWT quando claims verificáveis precisarem atravessar uma fronteira de sistema; prefira curta duração e não coloque segredos em um token apenas assinado.",
      context:
        "Um provedor de identidade precisa declarar identificador e audiência de uma pessoa para várias APIs da mesma plataforma.",
      application:
        "O provedor assina um JWT com emissor, sujeito, audiência, emissão e expiração; cada API valida todos esses claims com a chave pública confiável.",
      phrase:
        "“Decodificar o JWT não é validar; confira assinatura, emissor, audiência, algoritmo e expiração.”",
      aliases: ["json web token"],
      confusion:
        "JWT define uma representação de token; OAuth define fluxos de autorização e pode usar JWTs ou tokens opacos.",
    }),
  },
  oauth: {
    en: content({
      definition:
        "OAuth is an authorization framework that lets a resource owner grant a client limited access to a service without sharing the owner's password with that client.",
      purpose:
        "It separates client applications from user credentials and expresses delegated access through approved flows, scopes, access tokens, consent, and revocation.",
      when: "Use OAuth when third-party or first-party clients need delegated API access, selecting the flow and client authentication method for the application type and threat model.",
      context:
        "A photo-printing application needs permission to read selected images from a user's cloud account but should never receive the cloud password.",
      application:
        "The app redirects the user to the provider, receives an authorization code, exchanges it securely, and calls the photo API with a scoped access token.",
      phrase:
        "“Use Authorization Code with PKCE for this public client and request only the photo-read scope.”",
      aliases: [
        "open authorization",
        "delegated authorization",
        "autorização delegada",
      ],
      confusion:
        "OAuth delegates authorization; OpenID Connect adds an identity layer for authentication on top of OAuth 2.0.",
    }),
    "pt-BR": content({
      definition:
        "OAuth é um framework de autorização que permite ao proprietário de um recurso conceder acesso limitado a um cliente sem compartilhar sua senha com ele.",
      purpose:
        "Ele separa aplicações clientes das credenciais da pessoa e representa acesso delegado por fluxos, escopos, access tokens, consentimento e revogação.",
      when: "Use OAuth quando clientes próprios ou de terceiros precisarem de acesso delegado a APIs, escolhendo fluxo e autenticação do cliente conforme seu tipo e riscos.",
      context:
        "Um aplicativo de impressão precisa ler fotos escolhidas em uma conta cloud, mas nunca deve receber a senha dessa conta.",
      application:
        "O aplicativo redireciona ao provedor, recebe um authorization code, faz a troca segura e chama a API com access token de escopo limitado.",
      phrase:
        "“Use Authorization Code com PKCE neste cliente público e solicite somente o escopo de leitura de fotos.”",
      aliases: [
        "open authorization",
        "delegated authorization",
        "autorização delegada",
      ],
      confusion:
        "OAuth delega autorização; OpenID Connect adiciona uma camada de identidade para autenticação sobre o OAuth 2.0.",
    }),
  },
  "api-key": {
    en: content({
      definition:
        "An API key is a secret value assigned to a calling application or project so an API can identify it, apply policy, meter usage, and sometimes authorize limited access.",
      purpose:
        "It gives providers a simple credential for client identification, quota enforcement, analytics, revocation, and separation of traffic among integrations.",
      when: "Use an API key for controlled machine access with modest identity requirements, keeping it server-side and combining it with stronger authentication for sensitive user actions.",
      context:
        "A backend service calls a weather provider that tracks requests and enforces a monthly quota for each subscribed project.",
      application:
        "The service reads its key from a secret manager, sends it over HTTPS, restricts its allowed APIs, and rotates it after suspected exposure.",
      phrase:
        "“Remove the API key from the repository, revoke it, and issue a replacement from the secret manager.”",
      aliases: ["application programming interface key", "chave de api"],
      confusion:
        "An API key usually identifies an application; an OAuth access token represents delegated, scoped authorization and often a user or client grant.",
    }),
    "pt-BR": content({
      definition:
        "API key é um valor secreto atribuído a uma aplicação ou projeto para uma API identificá-lo, aplicar políticas, medir uso e, às vezes, autorizar acesso limitado.",
      purpose:
        "Ela oferece ao provedor uma credencial simples para identificar o cliente, impor cotas, produzir métricas, revogar acesso e separar integrações.",
      when: "Use API key em acesso controlado entre máquinas com requisitos modestos de identidade, mantendo-a no servidor e usando autenticação mais forte em ações sensíveis.",
      context:
        "Um serviço backend chama um provedor de clima que mede requests e impõe uma cota mensal para cada projeto contratado.",
      application:
        "O serviço lê a chave de um gerenciador de segredos, envia por HTTPS, restringe as APIs permitidas e faz rotação após possível vazamento.",
      phrase:
        "“Remova a API key do repositório, revogue-a e emita outra pelo gerenciador de segredos.”",
      aliases: ["application programming interface key", "chave de api"],
      confusion:
        "API key normalmente identifica uma aplicação; access token OAuth representa autorização delegada e limitada por escopos.",
    }),
  },
  "rate-limit": {
    en: content({
      definition:
        "A rate limit is a policy that caps how many operations a client may perform within a defined time window or resource budget.",
      purpose:
        "It protects capacity, fairness, availability, and cost by preventing one caller, credential, tenant, or address from consuming an uncontrolled share of a service.",
      when: "Apply rate limits to public and costly operations, selecting an identity, algorithm, burst allowance, response headers, and retry behavior that fit legitimate traffic.",
      context:
        "A search API receives automated bursts that exhaust database connections and slow requests for every other customer.",
      application:
        "The gateway applies a token-bucket limit per customer, permits a small burst, and returns 429 with Retry-After when the allowance is exhausted.",
      phrase:
        "“Set the rate limit per tenant rather than per IP, because many customers share corporate network addresses.”",
      aliases: ["rate limiting", "request limit", "limite de requisições"],
      confusion:
        "Rate limiting restricts frequency or volume; throttling may deliberately slow accepted traffic instead of rejecting requests above the limit.",
    }),
    "pt-BR": content({
      definition:
        "Rate limit é uma política que limita quantas operações um cliente pode executar dentro de uma janela de tempo ou orçamento de recursos.",
      purpose:
        "Ele protege capacidade, disponibilidade, custo e uso justo, impedindo que um cliente, credencial, tenant ou endereço consuma uma parcela descontrolada do serviço.",
      when: "Aplique rate limits em operações públicas ou caras, escolhendo identidade, algoritmo, tolerância a rajadas, headers e repetição adequados ao tráfego legítimo.",
      context:
        "Uma API de busca recebe rajadas automatizadas que esgotam conexões do banco e atrasam requests de todos os outros clientes.",
      application:
        "O gateway aplica token bucket por cliente, permite uma pequena rajada e retorna 429 com Retry-After quando a cota termina.",
      phrase:
        "“Defina o rate limit por tenant, não por IP, pois muitos clientes compartilham endereços de redes corporativas.”",
      aliases: ["rate limiting", "request limit", "limite de requisições"],
      confusion:
        "Rate limiting restringe frequência ou volume; throttling pode desacelerar tráfego aceito em vez de rejeitar requests acima do limite.",
    }),
  },
};
