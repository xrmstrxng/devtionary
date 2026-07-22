import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const securityEditorialOverrides: Record<string, EditorialPair> = {
  encryption: {
    en: content({
      definition:
        "Encryption transforms readable plaintext into ciphertext using a cryptographic algorithm and key so only an authorized holder of the required key can recover the data.",
      purpose:
        "It protects confidentiality of data in transit or at rest and, in authenticated modes, can also detect unauthorized modification.",
      when: "Encrypt sensitive data across untrusted networks and storage boundaries, using current algorithms, managed keys, rotation, access controls, and authenticated encryption.",
      context:
        "A platform stores identity documents and transfers them between an upload service and a restricted verification system.",
      application:
        "TLS protects transport, object storage encrypts each document with managed keys, and only the verification workload receives decrypt permission.",
      phrase:
        "“Separate key access from data access; encryption adds little protection if every workload can decrypt every document.”",
      aliases: [
        "data encryption",
        "cryptographic encryption",
        "criptografia de dados",
      ],
      confusion:
        "Encryption is reversible with a key; hashing is designed as a one-way transformation and should not be used when original data must be recovered.",
    }),
    "pt-BR": content({
      definition:
        "Encryption transforma plaintext em ciphertext por algoritmo e key criptográficos para somente quem possui a key necessária recuperar os dados.",
      purpose:
        "Ela protege confidentiality em trânsito ou armazenamento e, em modos autenticados, detecta alteração não autorizada.",
      when: "Criptografe dados sensíveis em redes e storage não confiáveis com algoritmos atuais, keys gerenciadas, rotation, access control e authenticated encryption.",
      context:
        "Uma plataforma armazena documentos e os transfere entre upload e sistema restrito de verificação.",
      application:
        "TLS protege transporte, storage cifra cada documento e somente o workload verificador pode decrypt.",
      phrase:
        "“Separe acesso à key do acesso aos dados; encryption protege pouco se todo workload pode decrypt.”",
      aliases: [
        "data encryption",
        "cryptographic encryption",
        "criptografia de dados",
      ],
      confusion:
        "Encryption é reversível com key; hashing é transformação de mão única e não serve quando o original precisa ser recuperado.",
    }),
  },
  hash: {
    en: content({
      definition:
        "A cryptographic hash is a fixed-length digest produced by a one-way function from arbitrary input, designed to make reversal and practical collisions difficult.",
      purpose:
        "It supports integrity checks, content addressing, signatures, and password verification when used through a password-specific slow hashing scheme.",
      when: "Use approved cryptographic hashes for integrity and signatures and dedicated password-hashing functions with salts and cost settings for passwords.",
      context:
        "A download client needs to detect whether an artifact differs from the exact bytes published and signed by the release pipeline.",
      application:
        "The pipeline publishes a SHA-256 digest and signature; the client recalculates the digest and verifies the signature before installation.",
      phrase:
        "“A plain fast hash is not password storage; use a password-hashing function with a unique salt and suitable cost.”",
      aliases: ["cryptographic hash", "hash digest", "resumo criptográfico"],
      confusion:
        "Hashing is one-way and produces a digest; encryption is reversible with a key and protects confidentiality.",
    }),
    "pt-BR": content({
      definition:
        "Cryptographic Hash é um digest de tamanho fixo produzido por função de mão única a partir de input arbitrário, resistente a reversão e colisões práticas.",
      purpose:
        "Ele apoia integridade, content addressing, assinaturas e verificação de senhas quando usado por função lenta específica.",
      when: "Use hashes aprovados em integridade e assinaturas e password hashing com salt e custo em senhas.",
      context:
        "Um client precisa detectar se artefato difere dos bytes publicados e assinados pela pipeline.",
      application:
        "A pipeline publica SHA-256 e assinatura; o client recalcula e verifica a assinatura antes de instalar.",
      phrase:
        "“Hash rápido simples não armazena senha; use password hashing com salt único e custo adequado.”",
      aliases: ["cryptographic hash", "hash digest", "resumo criptográfico"],
      confusion:
        "Hashing é de mão única e gera digest; encryption é reversível com key e protege confidentiality.",
    }),
  },
  salt: {
    en: content({
      definition:
        "A salt is a unique random value combined with a password before password hashing and stored alongside the resulting hash.",
      purpose:
        "It makes equal passwords produce different hashes and defeats reuse of precomputed tables across accounts, forcing attackers to work on each hash separately.",
      when: "Generate a cryptographically random salt for every password using a modern password-hashing library, which normally creates and encodes it automatically.",
      context:
        "Two users choose the same password, and a database breach exposes the password-verifier records.",
      application:
        "Argon2 receives a different random salt for each account and stores algorithm, cost, salt, and hash in the verifier string.",
      phrase:
        "“The salt may be stored with the hash; its protection comes from uniqueness, not secrecy.”",
      aliases: ["password salt", "cryptographic salt", "salt de senha"],
      confusion:
        "A salt is unique and usually public; a pepper is an additional secret value stored separately from the password database.",
    }),
    "pt-BR": content({
      definition:
        "Salt é um valor aleatório e único combinado à senha antes do password hashing e armazenado junto do hash resultante.",
      purpose:
        "Ele faz senhas iguais gerarem hashes diferentes e impede tabelas pré-computadas entre contas, exigindo ataque individual.",
      when: "Gere salt criptograficamente aleatório para cada senha por library moderna, que normalmente o cria e codifica automaticamente.",
      context:
        "Duas pessoas escolhem a mesma senha e um data breach expõe os verificadores.",
      application:
        "Argon2 recebe salt diferente por conta e armazena algoritmo, custo, salt e hash na string verificadora.",
      phrase:
        "“Salt pode ficar junto do hash; sua proteção vem da unicidade, não do segredo.”",
      aliases: ["password salt", "cryptographic salt", "salt de senha"],
      confusion:
        "Salt é único e normalmente público; pepper é um segredo adicional guardado fora do database de senhas.",
    }),
  },
  tls: {
    en: content({
      definition:
        "Transport Layer Security is a cryptographic protocol that authenticates peers and protects network communication against reading and tampering in transit.",
      purpose:
        "It negotiates algorithms and session keys, validates certificates or other credentials, and provides encrypted, integrity-protected transport for protocols such as HTTP.",
      when: "Use supported TLS versions for public and sensitive internal traffic, validating hostnames and trust chains and managing certificates, keys, renewal, and cipher policy.",
      context:
        "A mobile application sends credentials and account data across networks controlled by internet providers and public Wi-Fi operators.",
      application:
        "The client verifies the service certificate and hostname, negotiates TLS 1.3, and exchanges HTTP only through the protected channel.",
      phrase:
        "“Do not disable certificate validation to fix the connection; repair the trust chain and hostname configuration.”",
      aliases: [
        "transport layer security",
        "tls protocol",
        "segurança da camada de transporte",
      ],
      confusion:
        "TLS is the current protocol family; SSL names obsolete predecessors and should not be enabled for modern secure communication.",
    }),
    "pt-BR": content({
      definition:
        "Transport Layer Security é um protocolo criptográfico que autentica peers e protege comunicação de rede contra leitura e alteração em trânsito.",
      purpose:
        "Ele negocia algoritmos e session keys, valida certificates e oferece transporte cifrado e íntegro a protocolos como HTTP.",
      when: "Use versões suportadas de TLS em tráfego público e interno sensível, validando hostname e trust chain e gerenciando certificates e keys.",
      context:
        "Um aplicativo envia credenciais e dados por redes controladas por provedores e Wi-Fi público.",
      application:
        "O client valida certificate e hostname, negocia TLS 1.3 e troca HTTP somente pelo canal protegido.",
      phrase:
        "“Não desative certificate validation; corrija trust chain e hostname.”",
      aliases: [
        "transport layer security",
        "tls protocol",
        "segurança da camada de transporte",
      ],
      confusion:
        "TLS é a família atual; SSL nomeia predecessores obsoletos que não devem ser habilitados.",
    }),
  },
  ssl: {
    en: content({
      definition:
        "Secure Sockets Layer is the obsolete protocol family that preceded TLS; the term is still used informally for certificates or encrypted web connections that actually use TLS.",
      purpose:
        "Understanding the distinction prevents obsolete SSL versions from being enabled while recognizing legacy product names such as 'SSL certificate.'",
      when: "Interpret SSL in modern documentation as likely meaning TLS, verify the actual protocol configuration, and disable SSLv2, SSLv3, and other unsupported versions.",
      context:
        "A hosting panel advertises an SSL certificate, while its server configuration allows selection of protocol versions.",
      application:
        "The operator installs the certificate but configures only supported TLS versions and verifies the handshake with security tooling.",
      phrase:
        "“The vendor calls it SSL, but confirm the endpoint negotiates modern TLS and not an obsolete SSL protocol.”",
      aliases: [
        "secure sockets layer",
        "ssl protocol",
        "camada de sockets seguros",
      ],
      confusion:
        "SSL protocols are obsolete; TLS replaced them. A certificate is credential material used during TLS, not the protocol itself.",
    }),
    "pt-BR": content({
      definition:
        "Secure Sockets Layer é a família obsoleta anterior ao TLS; o termo ainda é usado informalmente para certificates ou conexões que na prática usam TLS.",
      purpose:
        "Entender a diferença impede habilitar SSL obsoleto e permite reconhecer nomes legados como 'SSL certificate'.",
      when: "Interprete SSL moderno como provável TLS, verifique o protocolo real e desabilite SSLv2, SSLv3 e versões sem suporte.",
      context:
        "Um painel anuncia SSL certificate enquanto a configuração permite escolher versões do protocolo.",
      application:
        "A operação instala o certificate, habilita somente TLS suportado e verifica o handshake com ferramentas de segurança.",
      phrase:
        "“O fornecedor chama de SSL, mas confirme que o endpoint negocia TLS moderno.”",
      aliases: [
        "secure sockets layer",
        "ssl protocol",
        "camada de sockets seguros",
      ],
      confusion:
        "Protocolos SSL são obsoletos; TLS os substituiu. Certificate é credencial usada no TLS, não o protocolo.",
    }),
  },
  cors: {
    en: content({
      definition:
        "Cross-Origin Resource Sharing is an HTTP-header mechanism by which a server tells browsers which other origins may read selected responses and under what methods, headers, and credential conditions.",
      purpose:
        "It selectively relaxes the browser same-origin policy for legitimate cross-origin applications without granting every website access.",
      when: "Configure CORS on browser-facing APIs with an explicit origin allowlist, minimal methods and headers, and careful credential handling; it is not server-to-server authentication.",
      context:
        "A web app at app.example.com calls an API at api.example.com, which browsers treat as a different origin.",
      application:
        "The API answers preflight requests and permits only the production app origin and required methods, never reflecting arbitrary origins with credentials.",
      phrase:
        "“Allow the exact frontend origin; wildcard CORS with credentials is neither valid nor a safe access policy.”",
      aliases: [
        "cross origin resource sharing",
        "cross-origin policy",
        "compartilhamento entre origens",
      ],
      confusion:
        "CORS controls whether browser scripts may read cross-origin responses; it does not prevent direct API calls or replace authorization.",
    }),
    "pt-BR": content({
      definition:
        "Cross-Origin Resource Sharing é um mecanismo de headers pelo qual servidor informa ao browser quais outras origins podem ler responses e em quais condições.",
      purpose:
        "Ele relaxa seletivamente same-origin policy para aplicações legítimas sem dar acesso a todo site.",
      when: "Configure CORS em APIs de browser com allowlist de origins, métodos e headers mínimos e credentials cuidadosas; não é authentication server-to-server.",
      context:
        "Um app em app.example.com chama API em api.example.com, considerada outra origin pelo browser.",
      application:
        "A API responde preflight e permite apenas origin de produção e métodos necessários, sem refletir origins arbitrárias com credentials.",
      phrase:
        "“Permita a origin exata; wildcard CORS com credentials não é válido nem seguro.”",
      aliases: [
        "cross origin resource sharing",
        "cross-origin policy",
        "compartilhamento entre origens",
      ],
      confusion:
        "CORS controla leitura por scripts do browser; não impede chamadas diretas nem substitui authorization.",
    }),
  },
  csrf: {
    en: content({
      definition:
        "Cross-Site Request Forgery is an attack that causes a victim's browser to send an unwanted state-changing request using credentials the browser attaches automatically.",
      purpose:
        "Understanding CSRF protects authenticated actions from being triggered by a malicious site exploiting ambient cookies or similar credentials.",
      when: "Protect cookie-authenticated state changes with SameSite policy, unpredictable CSRF tokens or origin checks, safe HTTP methods, and reauthentication for sensitive actions.",
      context:
        "A signed-in banking user visits a malicious page that submits a hidden transfer form to the bank.",
      application:
        "The bank rejects the request because its CSRF token and trusted Origin are absent, even though the browser sent the session cookie.",
      phrase:
        "“Authentication is present automatically, so require a CSRF token tied to the legitimate session.”",
      aliases: [
        "cross site request forgery",
        "xsrf",
        "falsificação de solicitação entre sites",
      ],
      confusion:
        "CSRF abuses a victim's authenticated browser to send requests; XSS executes attacker-controlled script within a trusted origin.",
    }),
    "pt-BR": content({
      definition:
        "Cross-Site Request Forgery é um ataque que faz o browser da vítima enviar request indesejada usando credentials anexadas automaticamente.",
      purpose:
        "Entendê-lo protege ações autenticadas contra sites maliciosos que exploram cookies ou credentials ambientes.",
      when: "Proteja mudanças autenticadas por cookie com SameSite, CSRF tokens imprevisíveis ou origin checks, métodos seguros e reauthentication em ações sensíveis.",
      context:
        "Uma pessoa logada no banco visita página maliciosa que envia formulário oculto de transferência.",
      application:
        "O banco rejeita porque CSRF token e Origin confiável estão ausentes, embora o browser envie session cookie.",
      phrase:
        "“Authentication vai automaticamente; exija CSRF token ligado à session legítima.”",
      aliases: [
        "cross site request forgery",
        "xsrf",
        "falsificação de solicitação entre sites",
      ],
      confusion:
        "CSRF usa browser autenticado para enviar requests; XSS executa script do atacante dentro de origin confiável.",
    }),
  },
  xss: {
    en: content({
      definition:
        "Cross-Site Scripting is a vulnerability in which attacker-controlled content is executed as script in another user's browser under a trusted site's origin.",
      purpose:
        "Preventing XSS protects sessions, displayed data, user actions, and same-origin access from malicious script injected through stored, reflected, or DOM-based paths.",
      when: "Prevent XSS with context-aware output encoding, safe templating, sanitization for allowed HTML, restrictive Content Security Policy, and avoidance of unsafe DOM sinks.",
      context:
        "A support ticket title containing script markup is stored and later rendered into an administrator dashboard as raw HTML.",
      application:
        "The UI renders the title as text, sanitizes separately permitted rich content, and CSP limits script execution if a mistake remains.",
      phrase:
        "“Escape for the HTML attribute context; generic string replacement is not context-aware XSS protection.”",
      aliases: [
        "cross site scripting",
        "script injection",
        "injeção de script entre sites",
      ],
      confusion:
        "XSS injects browser-executed script; SQL Injection alters database commands through unsafe query construction.",
    }),
    "pt-BR": content({
      definition:
        "Cross-Site Scripting é uma vulnerability em que conteúdo controlado pelo atacante executa como script no browser de outra pessoa sob origin confiável.",
      purpose:
        "Preveni-lo protege sessions, dados, ações e acesso same-origin contra scripts por caminhos stored, reflected ou DOM-based.",
      when: "Previna XSS com output encoding por contexto, templates seguros, sanitization de HTML permitido, CSP restritiva e sem DOM sinks inseguros.",
      context:
        "Um título de ticket com markup malicioso é armazenado e renderizado como raw HTML no dashboard.",
      application:
        "A UI renderiza título como texto, sanitiza rich content permitido e CSP limita execução se ocorrer erro.",
      phrase:
        "“Escape para o contexto do atributo HTML; replace genérico não protege contra XSS.”",
      aliases: [
        "cross site scripting",
        "script injection",
        "injeção de script entre sites",
      ],
      confusion:
        "XSS injeta script no browser; SQL Injection altera commands de banco por query insegura.",
    }),
  },
  "sql-injection": {
    en: content({
      definition:
        "SQL Injection is a vulnerability where untrusted input changes the structure or meaning of a database command because data is combined with SQL syntax unsafely.",
      purpose:
        "Preventing it protects confidentiality, integrity, authentication, and availability from unauthorized reads, writes, control bypass, or destructive commands.",
      when: "Use parameterized queries or safe ORM binding for every value, validate dynamic identifiers through allowlists, and restrict database privileges as defense in depth.",
      context:
        "A login query concatenates the supplied username and password directly into its WHERE clause.",
      application:
        "The application sends SQL with placeholders and values separately, and its database role can access only required tables and operations.",
      phrase:
        "“Parameterize the value; escaping by hand will not safely cover every SQL context.”",
      aliases: [
        "sqli",
        "structured query language injection",
        "injeção de sql",
      ],
      confusion:
        "SQL Injection changes database query structure; ordinary invalid input may cause an error without gaining control of the command.",
    }),
    "pt-BR": content({
      definition:
        "SQL Injection é uma vulnerability em que input não confiável muda estrutura ou sentido de command porque dados são combinados com SQL inseguramente.",
      purpose:
        "Preveni-la protege confidentiality, integrity, authentication e availability contra leitura, escrita, bypass ou destruição não autorizados.",
      when: "Use queries parametrizadas ou binding seguro, allowlist em identifiers dinâmicos e privilégios mínimos no database.",
      context:
        "Uma query de login concatena username e password diretamente no WHERE.",
      application:
        "A aplicação envia SQL com placeholders e valores separados, e o role acessa somente tables e operações necessárias.",
      phrase:
        "“Parametrize o valor; escape manual não cobre com segurança todo contexto SQL.”",
      aliases: [
        "sqli",
        "structured query language injection",
        "injeção de sql",
      ],
      confusion:
        "SQL Injection altera estrutura da query; input inválido comum pode causar erro sem controlar o command.",
    }),
  },
  "brute-force": {
    en: content({
      definition:
        "A brute-force attack systematically tries many candidate passwords, keys, tokens, or values until one succeeds, using speed, distribution, or reused credentials to improve odds.",
      purpose:
        "Defending against it limits automated guessing and makes each attempt expensive, detectable, and less useful without blocking legitimate users unnecessarily.",
      when: "Protect authentication and recovery with rate limits, progressive delay, MFA, breached-password checks, strong hashing, monitoring, and risk-based challenges.",
      context:
        "Attackers distribute login attempts across addresses using common and breached passwords against many customer accounts.",
      application:
        "The identity service limits by account and risk signals, detects password spraying, requires MFA, and alerts affected users without revealing account existence.",
      phrase:
        "“Rate-limit by account and behavior, not only IP, because the brute-force traffic is distributed.”",
      aliases: [
        "brute force attack",
        "password guessing",
        "ataque de força bruta",
      ],
      confusion:
        "Brute force tries many values against a target; credential stuffing tests known username-password pairs stolen from other services.",
    }),
    "pt-BR": content({
      definition:
        "Brute Force é um ataque que tenta sistematicamente muitas senhas, keys, tokens ou valores até obter sucesso, usando velocidade ou distribuição.",
      purpose:
        "Defesas limitam guessing automatizado e tornam tentativas caras, detectáveis e menos úteis sem bloquear pessoas legítimas.",
      when: "Proteja authentication e recovery com rate limits, delay, MFA, breached-password checks, hashing forte, monitoring e challenges por risco.",
      context:
        "Atacantes distribuem logins por vários endereços usando senhas comuns e vazadas contra muitas contas.",
      application:
        "O serviço limita por conta e risco, detecta password spraying, exige MFA e alerta sem revelar existência da conta.",
      phrase:
        "“Aplique rate limit por conta e comportamento, não apenas IP, pois brute force está distribuído.”",
      aliases: [
        "brute force attack",
        "password guessing",
        "ataque de força bruta",
      ],
      confusion:
        "Brute force tenta muitos valores; credential stuffing testa pares conhecidos roubados de outros serviços.",
    }),
  },
  phishing: {
    en: content({
      definition:
        "Phishing is social engineering that impersonates a trusted person or service to trick victims into revealing information, approving access, installing malware, or sending money.",
      purpose:
        "Recognizing it helps organizations combine human verification, phishing-resistant authentication, communication controls, and rapid reporting against deception.",
      when: "Defend email, messaging, login, payment, and support workflows with MFA, domain protection, link and attachment controls, independent verification, and incident response.",
      context:
        "An employee receives an urgent message resembling the CEO and is asked to open a fake identity-provider page and approve an MFA prompt.",
      application:
        "The employee reports it; security blocks the domain, revokes sessions, investigates recipients, and the company requires security keys for privileged access.",
      phrase:
        "“Verify the payment request through the known finance channel; urgency and display name are not proof of identity.”",
      aliases: ["phishing attack", "credential phishing", "ataque de phishing"],
      confusion:
        "Phishing is the deceptive delivery technique; malware is malicious software that a phishing message may attempt to install.",
    }),
    "pt-BR": content({
      definition:
        "Phishing é engenharia social que imita pessoa ou serviço confiável para induzir vítimas a revelar dados, aprovar acesso, instalar malware ou enviar dinheiro.",
      purpose:
        "Reconhecê-lo combina verificação humana, authentication resistente, controles de comunicação e denúncia rápida contra fraude.",
      when: "Proteja e-mail, mensagens, login, pagamentos e suporte com MFA, proteção de domínio, controles de links, verificação independente e incident response.",
      context:
        "Uma pessoa recebe mensagem urgente imitando CEO e é enviada a identity provider falso para aprovar MFA.",
      application:
        "Ela denuncia; security bloqueia domínio, revoga sessions, investiga destinatários e exige security keys em acesso privilegiado.",
      phrase:
        "“Confirme pagamento pelo canal conhecido do financeiro; urgência e display name não provam identidade.”",
      aliases: ["phishing attack", "credential phishing", "ataque de phishing"],
      confusion:
        "Phishing é a técnica de engano; malware é software malicioso que a mensagem pode tentar instalar.",
    }),
  },
  vulnerability: {
    en: content({
      definition:
        "A vulnerability is a weakness in design, implementation, configuration, dependency, process, or control that can be exploited to violate a security property.",
      purpose:
        "Identifying vulnerabilities allows teams to assess exposure, likelihood, impact, exploitability, compensating controls, ownership, and remediation priority.",
      when: "Track a vulnerability when evidence shows a security weakness, validating reachability and context rather than ranking solely by a generic scanner score.",
      context:
        "A library flaw permits remote code execution, but only applications exposing one optional parser are reachable through the vulnerable path.",
      application:
        "Security inventories affected versions, confirms which services invoke the parser, patches reachable systems first, and adds temporary input blocking.",
      phrase:
        "“The vulnerable package is present, but verify whether the exploitable function is reachable in this service.”",
      aliases: [
        "security vulnerability",
        "security weakness",
        "vulnerabilidade",
      ],
      confusion:
        "A vulnerability is the weakness; an exploit is the technique or code used to take advantage of it.",
    }),
    "pt-BR": content({
      definition:
        "Vulnerability é uma fraqueza em design, implementação, configuração, dependency, processo ou controle explorável para violar propriedade de security.",
      purpose:
        "Identificá-la permite avaliar exposure, likelihood, impacto, exploitability, controles, ownership e prioridade.",
      when: "Registre vulnerability com evidência da fraqueza, validando reachability e contexto em vez de usar somente score genérico.",
      context:
        "Uma library permite remote code execution, mas apenas aplicações que expõem parser opcional alcançam o caminho.",
      application:
        "Security inventaria versões, confirma serviços alcançáveis, aplica patch prioritário e bloqueia input temporariamente.",
      phrase:
        "“O package vulnerável está presente, mas confirme se a função explorável é reachable neste serviço.”",
      aliases: [
        "security vulnerability",
        "security weakness",
        "vulnerabilidade",
      ],
      confusion:
        "Vulnerability é a fraqueza; exploit é técnica ou código que tira proveito dela.",
    }),
  },
  exploit: {
    en: content({
      definition:
        "An exploit is a technique, sequence, or piece of code that takes advantage of a vulnerability to produce unauthorized behavior or impact.",
      purpose:
        "Understanding exploit conditions helps validate real risk, build detections, reproduce safely, prioritize remediation, and test whether controls block the attack path.",
      when: "Analyze exploits only in authorized controlled environments, preserving evidence and avoiding use against systems or data outside the approved scope.",
      context:
        "A published proof of concept sends a crafted request that reaches a vulnerable parser and executes commands under the service account.",
      application:
        "A security lab reproduces it against an isolated version, confirms indicators and permissions, validates the patch, and creates detection rules.",
      phrase:
        "“Reproduce the exploit only in the isolated environment and capture the exact preconditions for remediation.”",
      aliases: ["security exploit", "exploit code", "código de exploração"],
      confusion:
        "An exploit acts on a vulnerability; a payload is the action or code delivered after exploitation succeeds.",
    }),
    "pt-BR": content({
      definition:
        "Exploit é uma técnica, sequência ou código que aproveita vulnerability para produzir comportamento ou impacto não autorizado.",
      purpose:
        "Entender suas condições ajuda a validar risco, detectar, reproduzir com segurança, priorizar remediation e testar controles.",
      when: "Analise exploits somente em ambiente autorizado e controlado, preservando evidências e respeitando o escopo aprovado.",
      context:
        "Uma proof of concept envia request preparada que alcança parser vulnerável e executa commands com o service account.",
      application:
        "Um lab reproduz em versão isolada, confirma indicadores e permissions, valida patch e cria detection rules.",
      phrase:
        "“Reproduza o exploit apenas no ambiente isolado e capture as preconditions exatas.”",
      aliases: ["security exploit", "exploit code", "código de exploração"],
      confusion:
        "Exploit atua sobre vulnerability; payload é a ação ou código entregue após exploração bem-sucedida.",
    }),
  },
  patch: {
    en: content({
      definition:
        "A patch is a targeted software change distributed to correct defects, close vulnerabilities, improve compatibility, or alter a limited behavior in an existing version.",
      purpose:
        "It delivers a focused correction without requiring consumers to adopt an entirely new major product generation.",
      when: "Apply security and reliability patches through inventory, risk prioritization, compatibility testing, staged rollout, verification, and recovery planning.",
      context:
        "A database vendor releases a patch for an actively exploited privilege-escalation vulnerability affecting production versions.",
      application:
        "Operations identifies instances, tests backup and compatibility, patches replicas first, fails over, patches former primaries, and confirms version and health.",
      phrase:
        "“The patch is urgent, but still verify backups and staged failover before changing the production primary.”",
      aliases: ["software patch", "security patch", "correção de software"],
      confusion:
        "A patch is the corrective change package; an update is a broader release that may include patches, features, and other changes.",
    }),
    "pt-BR": content({
      definition:
        "Patch é uma mudança direcionada distribuída para corrigir defects, fechar vulnerabilities, melhorar compatibilidade ou alterar comportamento limitado.",
      purpose:
        "Ele entrega correção focada sem exigir adoção de uma geração principal totalmente nova.",
      when: "Aplique patches por inventory, prioridade de risco, compatibility tests, rollout gradual, verificação e recovery plan.",
      context:
        "Um vendor de database lança patch para privilege escalation ativamente explorada em produção.",
      application:
        "Operações inventaria, testa backup, atualiza réplicas, faz failover, atualiza primárias anteriores e confirma saúde.",
      phrase:
        "“O patch é urgente, mas verifique backup e failover gradual antes de mudar a primary.”",
      aliases: ["software patch", "security patch", "correção de software"],
      confusion:
        "Patch é correção focada; update é release mais ampla que pode incluir patches e features.",
    }),
  },
  secret: {
    en: content({
      definition:
        "A secret is sensitive authentication or cryptographic material whose unauthorized disclosure enables access or weakens protection, such as passwords, private keys, tokens, or API credentials.",
      purpose:
        "Treating it as a distinct asset enables controlled storage, least-privilege retrieval, rotation, auditing, expiry, and rapid revocation.",
      when: "Store secrets in a dedicated manager, inject them only to authorized workloads, prevent logging and source control exposure, and rotate on schedule or suspicion.",
      context:
        "A deployment needs a database password and signing key but its image and repository are accessible to many developers and systems.",
      application:
        "The workload retrieves short-lived credentials using its identity, while the manager audits access and rotates values without rebuilding the image.",
      phrase:
        "“Remove the secret from Git history, revoke it immediately, and issue a replacement through the secret manager.”",
      aliases: ["application secret", "secret value", "segredo de aplicação"],
      confusion:
        "A secret is the sensitive value; an environment variable is one transport mechanism and does not provide secure storage by itself.",
    }),
    "pt-BR": content({
      definition:
        "Secret é material sensível de authentication ou criptografia cujo vazamento permite acesso ou reduz proteção, como password, private key, token ou API credential.",
      purpose:
        "Tratamento específico permite storage controlado, least privilege, rotation, audit, expiry e revocation rápida.",
      when: "Guarde secrets em manager dedicado, injete somente em workloads autorizados, evite logs e source control e faça rotation.",
      context:
        "Um deployment precisa de database password e signing key, mas image e repository são acessíveis a muitos sistemas.",
      application:
        "O workload obtém credentials curtas por identidade, enquanto o manager audita e gira valores sem rebuild.",
      phrase:
        "“Remova o secret do histórico Git, revogue imediatamente e emita outro pelo secret manager.”",
      aliases: ["application secret", "secret value", "segredo de aplicação"],
      confusion:
        "Secret é o valor sensível; environment variable é apenas transporte e não oferece storage seguro sozinha.",
    }),
  },
  credential: {
    en: content({
      definition:
        "A credential is evidence presented to establish an identity, possession, or authority, such as a password, certificate, token, security key, or signed assertion.",
      purpose:
        "It gives an authentication or authorization system verifiable material for deciding whether a claimed actor or delegated capability should be trusted.",
      when: "Issue credentials with purpose, audience, scope, lifetime, storage, rotation, and revocation matched to risk, and never treat an identifier alone as proof.",
      context:
        "A workload calls a cloud database and must prove its service identity without embedding a long-lived password in its image.",
      application:
        "The platform exchanges the workload identity for a short-lived signed credential restricted to that database and operation.",
      phrase:
        "“Use a short-lived workload credential; the service name is an identifier, not authentication evidence.”",
      aliases: [
        "authentication credential",
        "access credential",
        "credencial de acesso",
      ],
      confusion:
        "An identifier states which identity is claimed; a credential supplies evidence supporting that claim.",
    }),
    "pt-BR": content({
      definition:
        "Credential é evidência apresentada para estabelecer identidade, posse ou autoridade, como password, certificate, token, security key ou assertion assinada.",
      purpose:
        "Ela fornece material verificável para authentication ou authorization decidir se agente ou capacidade deve ser confiado.",
      when: "Emita credentials com purpose, audience, scope, lifetime, storage, rotation e revocation proporcionais ao risco; identifier sozinho não é prova.",
      context:
        "Um workload chama cloud database e prova identidade sem password duradouro na image.",
      application:
        "A plataforma troca workload identity por credential assinada, curta e restrita ao database e operação.",
      phrase:
        "“Use workload credential curta; o nome do serviço é identifier, não evidência de authentication.”",
      aliases: [
        "authentication credential",
        "access credential",
        "credencial de acesso",
      ],
      confusion:
        "Identifier declara qual identidade é alegada; credential fornece evidência da alegação.",
    }),
  },
  "least-privilege": {
    en: content({
      definition:
        "Least Privilege is the security principle of granting an identity, process, or component only the minimum permissions and duration required for its current task.",
      purpose:
        "It limits accidental damage, lateral movement, and exploit impact by shrinking what a compromised or mistaken actor can reach and change.",
      when: "Apply least privilege to users, workloads, databases, cloud roles, networks, and automation, with narrow scope, just-in-time elevation, review, and revocation.",
      context:
        "A report service only reads invoice summaries but currently uses the same database owner account as migrations.",
      application:
        "It receives a read-only role on required views, while schema changes use a separate temporary deployment identity.",
      phrase:
        "“Remove write and schema privileges from the reporting identity; it only needs read access to two views.”",
      aliases: [
        "principle of least privilege",
        "polp",
        "princípio do menor privilégio",
      ],
      confusion:
        "Least privilege minimizes granted authority; zero trust continuously evaluates access without assuming network location is trustworthy.",
    }),
    "pt-BR": content({
      definition:
        "Least Privilege é o princípio de conceder a identidade, processo ou componente somente permissions mínimas e duração necessárias à tarefa atual.",
      purpose:
        "Ele limita dano acidental, lateral movement e impacto de exploit reduzindo o que um agente comprometido pode alcançar.",
      when: "Aplique least privilege a pessoas, workloads, databases, cloud roles, redes e automação com scope estreito, elevação temporária, review e revocation.",
      context:
        "Um serviço de relatório apenas lê resumos, mas usa a mesma conta owner das migrations.",
      application:
        "Ele recebe role read-only em views necessárias; schema usa identidade temporária separada.",
      phrase:
        "“Remova write e schema privileges; reporting só precisa ler duas views.”",
      aliases: [
        "principle of least privilege",
        "polp",
        "princípio do menor privilégio",
      ],
      confusion:
        "Least privilege minimiza autoridade; zero trust avalia acesso continuamente sem confiar na localização de rede.",
    }),
  },
  "two-factor-authentication": {
    en: content({
      definition:
        "Two-Factor Authentication verifies identity using exactly two independent factor categories, such as something known, possessed, or inherent.",
      purpose:
        "It reduces account takeover when one factor such as a password is stolen because the attacker must also satisfy a different factor.",
      when: "Require 2FA for sensitive accounts and actions, preferring phishing-resistant possession factors and providing secure enrollment, recovery, replacement, and revocation.",
      context:
        "An administrator signs in with a password that could be exposed through reuse or phishing.",
      application:
        "After the password, the service requires a registered FIDO2 security key and blocks fallback to insecure knowledge questions.",
      phrase:
        "“Password plus two security questions is not 2FA; all three rely on the knowledge factor.”",
      aliases: [
        "2fa",
        "two factor authentication",
        "autenticação de dois fatores",
      ],
      confusion:
        "2FA specifically uses two factor categories; two-step verification may use two steps from the same category and provide weaker independence.",
    }),
    "pt-BR": content({
      definition:
        "Two-Factor Authentication verifica identidade usando exatamente duas categorias independentes, como conhecimento, posse ou inerência.",
      purpose:
        "Ela reduz account takeover quando um fator como password é roubado, pois o atacante precisa de outro tipo.",
      when: "Exija 2FA em contas e ações sensíveis, preferindo fatores resistentes a phishing e oferecendo enrollment, recovery e revocation seguros.",
      context:
        "Uma pessoa admin entra com password que pode vazar por reutilização ou phishing.",
      application:
        "Após password, o serviço exige security key FIDO2 e bloqueia fallback para perguntas inseguras.",
      phrase:
        "“Password e duas perguntas não são 2FA; todas usam knowledge factor.”",
      aliases: [
        "2fa",
        "two factor authentication",
        "autenticação de dois fatores",
      ],
      confusion:
        "2FA usa duas categorias; two-step pode usar duas etapas da mesma categoria e ter independência menor.",
    }),
  },
  "multi-factor-authentication": {
    en: content({
      definition:
        "Multi-Factor Authentication verifies identity with two or more independent categories of evidence, such as knowledge, possession, and inherence.",
      purpose:
        "It strengthens authentication by requiring an attacker to compromise different kinds of protection rather than one reusable credential.",
      when: "Use MFA for workforce, administrative, financial, and high-risk access, selecting phishing-resistant factors and protecting enrollment and recovery as strongly as login.",
      context:
        "A cloud administrator can modify production infrastructure and access customer data from outside the corporate network.",
      application:
        "The identity provider requires a security key plus device-bound verification and applies additional risk checks for privileged sessions.",
      phrase:
        "“Protect MFA recovery with the same assurance as enrollment, or attackers will bypass the strong login factors.”",
      aliases: ["mfa", "multifactor authentication", "autenticação multifator"],
      confusion:
        "MFA is the general use of multiple factor categories; 2FA is the specific case with exactly two.",
    }),
    "pt-BR": content({
      definition:
        "Multi-Factor Authentication verifica identidade com duas ou mais categorias independentes, como conhecimento, posse e inerência.",
      purpose:
        "Ela exige comprometer tipos diferentes de proteção, não apenas uma credential reutilizável.",
      when: "Use MFA em workforce, administração, finanças e acesso de risco, com fatores resistentes e recovery tão protegido quanto login.",
      context:
        "Uma pessoa cloud admin modifica produção e acessa dados de fora da rede corporativa.",
      application:
        "O identity provider exige security key e verificação ligada ao device e aplica risk checks em sessions privilegiadas.",
      phrase:
        "“Proteja MFA recovery com a mesma assurance do enrollment ou o atacante contornará os fatores.”",
      aliases: ["mfa", "multifactor authentication", "autenticação multifator"],
      confusion:
        "MFA é o uso geral de várias categorias; 2FA é o caso específico com exatamente duas.",
    }),
  },
  "access-control": {
    en: content({
      definition:
        "Access Control is the combination of policies and enforcement mechanisms that determines who or what may perform which actions on specific resources under given conditions.",
      purpose:
        "It protects confidentiality, integrity, and availability by mediating access through identities, permissions, roles, attributes, context, and audit.",
      when: "Apply access control at every trusted boundary and server-side operation, using deny-by-default, least privilege, consistent policy, and logged decisions.",
      context:
        "Employees, customers, support agents, and automated services require different actions on the same account data.",
      application:
        "The service authenticates the actor, evaluates resource ownership, role, action, tenant, and risk, then permits or denies and records sensitive decisions.",
      phrase:
        "“Enforce access control in the API; hiding the action in the interface is not authorization.”",
      aliases: [
        "authorization control",
        "access management",
        "controle de acesso",
      ],
      confusion:
        "Access control is the complete policy and enforcement system; authorization is the decision for a particular requested action.",
    }),
    "pt-BR": content({
      definition:
        "Access Control combina policies e mecanismos que determinam quem pode executar quais ações em recursos sob determinadas condições.",
      purpose:
        "Ele protege confidentiality, integrity e availability por identities, permissions, roles, attributes, contexto e audit.",
      when: "Aplique access control em toda boundary confiável e operação server-side com deny-by-default, least privilege, policy consistente e logs.",
      context:
        "Clientes, suporte, funcionários e serviços automatizados exigem ações diferentes sobre os mesmos dados.",
      application:
        "O serviço autentica, avalia ownership, role, action, tenant e risco, permite ou nega e registra decisões sensíveis.",
      phrase:
        "“Aplique access control na API; esconder a ação na interface não é authorization.”",
      aliases: [
        "authorization control",
        "access management",
        "controle de acesso",
      ],
      confusion:
        "Access control é sistema completo de policy e enforcement; authorization é decisão para uma ação solicitada.",
    }),
  },
  "role-based-access-control": {
    en: content({
      definition:
        "Role-Based Access Control assigns permissions to named roles and grants users or workloads those roles according to their job or responsibility.",
      purpose:
        "It simplifies permission administration by managing common access bundles instead of assigning every permission independently to every identity.",
      when: "Use RBAC when responsibilities map to stable roles, enforcing least privilege, separation of duties, review, expiry, and avoidance of uncontrolled role proliferation.",
      context:
        "A support organization has agents, supervisors, billing specialists, and privacy officers with distinct customer-data operations.",
      application:
        "Permissions are attached to defined roles, people receive approved roles for their assignments, and sensitive combinations require review.",
      phrase:
        "“Grant the refund-approver role temporarily; do not add the permission directly to one user without lifecycle controls.”",
      aliases: [
        "rbac",
        "role based access control",
        "controle de acesso baseado em papéis",
      ],
      confusion:
        "RBAC decides through assigned roles; Attribute-Based Access Control evaluates attributes of actor, resource, action, and context.",
    }),
    "pt-BR": content({
      definition:
        "Role-Based Access Control atribui permissions a roles nomeados e concede esses roles a pessoas ou workloads conforme responsabilidade.",
      purpose:
        "Ele simplifica administração por conjuntos comuns em vez de permission individual para cada identity.",
      when: "Use RBAC quando responsabilidades se mapearem a roles estáveis, com least privilege, separation of duties, review, expiry e controle de proliferação.",
      context:
        "Suporte possui agentes, supervisores, billing e privacy officers com operações diferentes sobre dados.",
      application:
        "Permissions ficam nos roles, pessoas recebem papéis aprovados e combinações sensíveis exigem review.",
      phrase:
        "“Conceda refund-approver role temporário; não adicione permission diretamente sem lifecycle.”",
      aliases: [
        "rbac",
        "role based access control",
        "controle de acesso baseado em papéis",
      ],
      confusion:
        "RBAC decide por roles; Attribute-Based Access Control avalia attributes de actor, resource, action e contexto.",
    }),
  },
  "zero-trust": {
    en: content({
      definition:
        "Zero Trust is a security strategy that grants access through explicit, continually evaluated identity, device, resource, and context signals instead of implicit trust based on network location.",
      purpose:
        "It limits lateral movement and persistent access by verifying each request, minimizing privilege, segmenting resources, and assuming compromise is possible.",
      when: "Apply Zero Trust to workforce and workload access with strong identities, device posture, policy enforcement, short sessions, segmentation, telemetry, and recovery.",
      context:
        "An employee on a corporate network requests production access from an unmanaged device using a valid password.",
      application:
        "Policy requires phishing-resistant MFA, managed-device posture, approved role, time-limited elevation, and complete audit regardless of network.",
      phrase:
        "“Being inside the VPN is only one signal; verify identity, device, resource, and requested action.”",
      aliases: [
        "zero trust architecture",
        "never trust always verify",
        "confiança zero",
      ],
      confusion:
        "Zero Trust does not mean blocking everything or trusting nothing permanently; it means no implicit trust and explicit least-privilege decisions.",
    }),
    "pt-BR": content({
      definition:
        "Zero Trust é uma estratégia que concede acesso por sinais explícitos e continuamente avaliados de identity, device, resource e contexto, não por localização de rede.",
      purpose:
        "Ela limita lateral movement e acesso persistente verificando requests, reduzindo privilege, segmentando e assumindo possível comprometimento.",
      when: "Aplique Zero Trust com identities fortes, device posture, policy enforcement, sessions curtas, segmentação, telemetry e recovery.",
      context:
        "Uma pessoa na rede corporativa solicita produção por device não gerenciado com password válido.",
      application:
        "A policy exige MFA resistente, device gerenciado, role aprovado, elevação temporária e audit independentemente da rede.",
      phrase:
        "“Estar na VPN é apenas um sinal; verifique identity, device, resource e action.”",
      aliases: [
        "zero trust architecture",
        "never trust always verify",
        "confiança zero",
      ],
      confusion:
        "Zero Trust não significa bloquear tudo; significa ausência de confiança implícita e decisões explícitas de least privilege.",
    }),
  },
  "audit-log": {
    en: content({
      definition:
        "An audit log is a protected chronological record of security- or business-relevant actions containing actor, action, target, time, context, and outcome.",
      purpose:
        "It supports accountability, investigation, compliance, dispute resolution, anomaly detection, and reconstruction of sensitive changes.",
      when: "Create audit events for authentication, authorization, privilege, financial, administrative, and data-access actions, protecting integrity and avoiding unnecessary secret or personal content.",
      context:
        "An administrator changes a customer's refund destination and later the organization must determine who approved and performed it.",
      application:
        "An append-protected event records authenticated actor, approval, old and new references, request ID, time, source, and success without storing full bank details.",
      phrase:
        "“Record both the actor and approval context in the audit log; the generic application log is not enough.”",
      aliases: ["audit trail", "security audit log", "log de auditoria"],
      confusion:
        "An audit log records accountable events under stronger retention and integrity controls; an application log primarily supports operation and debugging.",
    }),
    "pt-BR": content({
      definition:
        "Audit Log é um registro cronológico protegido de ações relevantes contendo actor, action, target, time, contexto e outcome.",
      purpose:
        "Ele apoia accountability, investigação, compliance, disputas, detecção e reconstrução de mudanças sensíveis.",
      when: "Crie audit events em authentication, authorization, privilege, finanças, administração e acesso a dados, protegendo integrity e evitando secrets.",
      context:
        "Uma pessoa admin muda destino de refund e depois a organização precisa saber quem aprovou e executou.",
      application:
        "Um event protegido registra actor, approval, referências antigas e novas, request ID, time e resultado sem dados bancários completos.",
      phrase:
        "“Registre actor e approval context no audit log; application log genérico não basta.”",
      aliases: ["audit trail", "security audit log", "log de auditoria"],
      confusion:
        "Audit log registra eventos responsáveis com controles fortes; application log serve principalmente a operação e debug.",
    }),
  },
  "data-breach": {
    en: content({
      definition:
        "A data breach is an incident in which protected data is accessed, disclosed, copied, altered, lost, or destroyed by an unauthorized party or process.",
      purpose:
        "Classifying it triggers containment, evidence preservation, scope analysis, legal and contractual assessment, notification, remediation, and support for affected people.",
      when: "Invoke the breach-response process whenever credible evidence indicates unauthorized data exposure, without waiting for complete certainty before containment and escalation.",
      context:
        "A cloud storage policy accidentally made identity documents public, and access logs show downloads from unknown addresses.",
      application:
        "The team removes public access, preserves logs, identifies objects and people affected, rotates credentials, meets notification duties, and fixes policy controls.",
      phrase:
        "“Contain the data breach and preserve evidence now; scope and notification decisions can proceed in parallel.”",
      aliases: [
        "data exposure incident",
        "information breach",
        "violação de dados",
      ],
      confusion:
        "A data breach involves unauthorized impact to protected data; a security incident is broader and may not involve data exposure.",
    }),
    "pt-BR": content({
      definition:
        "Data Breach é um incident em que dados protegidos são acessados, divulgados, copiados, alterados, perdidos ou destruídos sem autorização.",
      purpose:
        "Classificá-lo aciona containment, preservação de evidência, escopo, avaliação legal, notification, remediation e suporte.",
      when: "Acione breach response quando evidência confiável indicar exposição, sem esperar certeza completa para conter e escalar.",
      context:
        "Uma policy cloud tornou documentos públicos e access logs mostram downloads desconhecidos.",
      application:
        "O time remove acesso, preserva logs, identifica objetos e pessoas, gira credentials, notifica e corrige controls.",
      phrase:
        "“Contenha o data breach e preserve evidência agora; escopo e notification seguem em paralelo.”",
      aliases: [
        "data exposure incident",
        "information breach",
        "violação de dados",
      ],
      confusion:
        "Data breach envolve impacto não autorizado em dados; security incident é mais amplo e pode não expor dados.",
    }),
  },
};
