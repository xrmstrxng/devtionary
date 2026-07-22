import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const securityExpansionEditorialOverrides: Record<
  string,
  EditorialPair
> = {
  identity: {
    en: content({
      definition:
        "Identity is the set of identifiers and attributes by which a system represents and distinguishes a human, service, device, organization, or other security subject.",
      purpose:
        "It gives authentication, authorization, auditing, lifecycle management, and personalization a stable subject to reason about without equating that subject with one credential.",
      when: "Model identity whenever a system must recognize an actor across interactions, defining authoritative identifiers, attribute sources, linking, verification, lifecycle, privacy, and deletion rules.",
      context:
        "An employee changes name and replaces a password, but access history and account ownership must remain attached to the same internal subject.",
      application:
        "The directory assigns an immutable subject identifier, treats email and display name as changeable attributes, links verified credentials, records lifecycle events, and removes access when employment ends.",
      phrase:
        "Use the immutable Identity subject as the audit key; email is a mutable attribute, not the account's permanent identity.",
      aliases: ["digital identity", "security subject", "identidade digital"],
      confusion:
        "Identity describes the represented subject; Authentication verifies evidence that a requester controls or is associated with that identity.",
    }),
    "pt-BR": content({
      definition:
        "Identity é o conjunto de identifiers e attributes com que um system representa e distingue uma pessoa, service, device, organization ou outro security subject.",
      purpose:
        "Ela oferece a authentication, authorization, auditing e lifecycle management um subject estável sem confundi-lo com uma credential específica.",
      when: "Modele-a quando o system precisar reconhecer actor entre interactions, definindo authoritative IDs, attribute sources, linking, verification, lifecycle, privacy e deletion.",
      context:
        "Uma employee muda nome e password, mas access history e account ownership permanecem ligados ao mesmo internal subject.",
      application:
        "O directory atribui immutable subject ID, trata email e display name como attributes mutáveis, vincula credentials verificadas e remove access no fim do vínculo.",
      phrase:
        "Use o subject imutável da Identity como audit key; email é attribute mutável, não identidade permanente da account.",
      aliases: ["digital identity", "security subject", "identidade digital"],
      confusion:
        "Identity descreve o subject representado; Authentication verifica evidence de que requester controla ou está associado a ele.",
    }),
  },
  "identity-provider": {
    en: content({
      definition:
        "Identity Provider (IdP) is a trusted system that authenticates subjects and issues identity assertions or tokens that relying applications use according to an established federation protocol and trust configuration.",
      purpose:
        "It centralizes sign-in, credential controls, identity lifecycle, and authentication policy so applications do not independently store and verify every user's primary credentials.",
      when: "Use an IdP for workforce or customer federation, defining protocols, client registration, redirect URIs, claims, assurance, key rotation, session policy, provisioning, deprovisioning, and outage behavior.",
      context:
        "Employees need to access dozens of internal applications using corporate multifactor authentication and lose all access promptly when their employment ends.",
      application:
        "Applications trust signed OIDC tokens from the corporate IdP, validate issuer, audience, signature and time, map minimal claims to local authorization, and synchronize account lifecycle events.",
      phrase:
        "The Identity Provider authenticates the employee; this application still owns the authorization decision for its resources.",
      aliases: ["IdP", "identity service", "provedor de identidade"],
      confusion:
        "An Identity Provider authenticates and asserts identity; a Service Provider or relying party consumes that assertion to provide an application capability.",
    }),
    "pt-BR": content({
      definition:
        "Identity Provider (IdP) é um trusted system que autentica subjects e emite identity assertions ou tokens usados por relying applications conforme federation protocol e trust config.",
      purpose:
        "Ele centraliza sign-in, credential controls, identity lifecycle e authentication policy para applications não verificarem separadamente toda primary credential.",
      when: "Use IdP em workforce ou customer federation, definindo protocols, client registration, redirect URIs, claims, assurance, key rotation, sessions, provisioning e outage behavior.",
      context:
        "Employees acessam dezenas de internal apps com corporate MFA e precisam perder todos os acessos no fim do vínculo.",
      application:
        "Applications confiam em OIDC tokens assinados pelo IdP, validam issuer, audience, signature e time, mapeiam claims mínimos e sincronizam lifecycle events.",
      phrase:
        "O Identity Provider autentica a employee; a application continua responsável por autorizar seus resources.",
      aliases: ["IdP", "identity service", "provedor de identidade"],
      confusion:
        "Identity Provider autentica e declara identity; Service Provider ou relying party consome a assertion e fornece a capability.",
    }),
  },
  "single-sign-on": {
    en: content({
      definition:
        "Single Sign-On (SSO) is an authentication experience in which one established login session enables access to multiple participating applications without requiring the user to enter primary credentials again for each one.",
      purpose:
        "It reduces repeated credential handling and sign-in friction while centralizing authentication policy, session controls, and account disablement across integrated applications.",
      when: "Implement SSO across applications that share an identity trust domain, selecting a federation protocol and defining session lifetime, reauthentication, logout scope, assurance, application authorization, and recovery.",
      context:
        "An employee signs in to the company portal with MFA and then opens payroll and support tools without submitting the password again.",
      application:
        "Each application redirects to the IdP, validates its own short-lived assertion, creates a bounded local session, applies local permissions, requests stronger authentication for sensitive actions, and handles central disablement.",
      phrase:
        "SSO reuses the trusted login session, but payroll still evaluates its own roles and may require step-up authentication.",
      aliases: ["SSO", "federated sign-on", "login único"],
      confusion:
        "Single Sign-On reduces repeated login across applications; password synchronization merely gives separate accounts the same password and does not create one trusted session.",
    }),
    "pt-BR": content({
      definition:
        "Single Sign-On (SSO) é uma authentication experience em que uma login session estabelecida libera várias participating applications sem pedir primary credentials novamente em cada uma.",
      purpose:
        "Ele reduz repeated credential handling e sign-in friction, centralizando authentication policy, session controls e account disablement.",
      when: "Implemente SSO entre applications no mesmo identity trust domain, escolhendo federation protocol e definindo session lifetime, reauthentication, logout, assurance, authorization e recovery.",
      context:
        "Uma employee entra no portal com MFA e abre payroll e support tools sem informar password novamente.",
      application:
        "Cada app redireciona ao IdP, valida assertion própria e curta, cria bounded local session, aplica permissions locais e exige stronger authentication em sensitive actions.",
      phrase:
        "SSO reutiliza trusted login session, mas payroll ainda avalia roles e pode exigir step-up authentication.",
      aliases: ["SSO", "federated sign-on", "login único"],
      confusion:
        "Single Sign-On reduz logins repetidos; password synchronization apenas usa a mesma senha em accounts separadas e não cria trusted session única.",
    }),
  },
  "openid-connect": {
    en: content({
      definition:
        "OpenID Connect (OIDC) is an identity layer built on OAuth 2.0 that lets a client verify an end user's authentication and obtain standardized identity claims through an ID Token and defined endpoints.",
      purpose:
        "It provides interoperable login and identity federation while separating authentication assertions from authorization to protected APIs.",
      when: "Use OIDC for web, mobile, and native sign-in with a trusted provider, choosing the appropriate flow and validating discovery metadata, issuer, client, redirect URI, state, nonce, signatures, time, and token storage.",
      context:
        "A web application needs corporate login and basic employee identity without receiving or storing the employee's directory password.",
      application:
        "The app uses Authorization Code flow with PKCE, validates state and nonce, exchanges the code at the provider, verifies the ID Token issuer, audience, signature and expiry, then creates its own secure session.",
      phrase:
        "Use the OIDC ID Token to establish login identity; use an access token with the proper audience to call the API.",
      aliases: [
        "OIDC",
        "OpenID authentication layer",
        "OpenID Connect protocol",
      ],
      confusion:
        "OpenID Connect adds authentication and identity claims; OAuth 2.0 defines delegated authorization and does not by itself specify user login identity.",
    }),
    "pt-BR": content({
      definition:
        "OpenID Connect (OIDC) é uma identity layer sobre OAuth 2.0 que permite ao client verificar end-user authentication e obter standardized identity claims por ID Token e endpoints definidos.",
      purpose:
        "Ele fornece login e identity federation interoperáveis, separando authentication assertions da autorização de protected APIs.",
      when: "Use OIDC em web, mobile e native sign-in com trusted provider, escolhendo flow e validando metadata, issuer, client, redirect URI, state, nonce, signatures, time e token storage.",
      context:
        "Uma web app precisa de corporate login e employee identity sem receber ou guardar directory password.",
      application:
        "A app usa Authorization Code com PKCE, valida state e nonce, troca code, verifica issuer, audience, signature e expiry do ID Token e cria secure session própria.",
      phrase:
        "Use OIDC ID Token para estabelecer login identity; use access token com audience correta para chamar API.",
      aliases: [
        "OIDC",
        "OpenID authentication layer",
        "OpenID Connect protocol",
      ],
      confusion:
        "OpenID Connect adiciona authentication e identity claims; OAuth 2.0 define delegated authorization e sozinho não especifica user login.",
    }),
  },
  permission: {
    en: content({
      definition:
        "Permission is an explicitly named authorization capability that allows a subject to perform a defined action on a resource or resource class under stated conditions.",
      purpose:
        "It converts access policy into reviewable, assignable, and enforceable units instead of scattering implicit privilege checks throughout application code.",
      when: "Define permissions around business actions and resource boundaries, using least privilege, stable names, centralized enforcement, auditable assignment, and default denial.",
      context:
        "Support agents may view customer profiles but only a smaller finance group may issue refunds above a controlled threshold.",
      application:
        "The service checks customer.read and refund.issue against the authenticated subject, resource tenant and amount condition at the server boundary, records the decision, and tests denied paths.",
      phrase:
        "Grant the refund.issue Permission to the finance role; do not infer it from a hidden user-interface button.",
      aliases: ["access permission", "authorization privilege", "permissão"],
      confusion:
        "A Permission represents an allowed action; a Role groups permissions for assignment to subjects according to job or responsibility.",
    }),
    "pt-BR": content({
      definition:
        "Permission é uma authorization capability nomeada que permite a um subject executar action definida sobre resource ou resource class sob conditions declaradas.",
      purpose:
        "Ela transforma access policy em unidades revisáveis, atribuíveis e enforceable, evitando privilege checks implícitos espalhados pelo code.",
      when: "Defina permissions por business actions e resource boundaries, usando least privilege, stable names, centralized enforcement, assignment auditável e default denial.",
      context:
        "Support agents podem ver customer profiles, mas somente finance group menor emite refunds acima de threshold controlado.",
      application:
        "O service verifica customer.read e refund.issue contra authenticated subject, resource tenant e amount condition no server boundary, registra decision e testa denied paths.",
      phrase:
        "Conceda a Permission refund.issue ao finance role; não a deduza de um UI button oculto.",
      aliases: ["access permission", "authorization privilege", "permissão"],
      confusion:
        "Permission representa action permitida; Role agrupa permissions para assignment a subjects conforme responsabilidade.",
    }),
  },
  role: {
    en: content({
      definition:
        "Role is a named collection of responsibilities and permissions assigned to subjects so authorization can reflect a stable job function or system duty.",
      purpose:
        "It simplifies access administration and review by grouping capabilities that should commonly be granted and revoked together.",
      when: "Define roles for recurring responsibilities, keeping them few, composable, least-privileged, separated where duties conflict, and governed through assignment and periodic review.",
      context:
        "Customer-support agents need profile and ticket access, while finance reviewers need refund approval but must not administer user accounts.",
      application:
        "The authorization model maps support-agent and finance-reviewer roles to explicit permissions, requires approval for assignment, records changes, limits tenant scope, and recertifies membership.",
      phrase:
        "Assign the finance-reviewer Role for the review period; do not grant unrelated administrator permissions.",
      aliases: ["security role", "access role", "papel de acesso"],
      confusion:
        "A Role groups permissions for assignment; a Permission represents one allowed action on a resource or resource class.",
    }),
    "pt-BR": content({
      definition:
        "Role é uma coleção nomeada de responsibilities e permissions atribuída a subjects para authorization refletir uma job function ou system duty estável.",
      purpose:
        "Ela simplifica access administration e review ao agrupar capabilities que devem ser concedidas e removidas juntas.",
      when: "Defina roles para responsibilities recorrentes, mantendo-as poucas, composable, least-privileged, separadas quando duties conflitarem e governadas por review.",
      context:
        "Customer-support agents acessam profiles e tickets; finance reviewers aprovam refunds, mas não administram user accounts.",
      application:
        "O authorization model mapeia roles a permissions explícitas, exige approval no assignment, registra changes, limita tenant scope e recertifica membership.",
      phrase:
        "Atribua o Role finance-reviewer durante o review; não conceda administrator permissions sem relação.",
      aliases: ["security role", "access role", "papel de acesso"],
      confusion:
        "Role agrupa permissions para assignment; Permission representa uma action permitida sobre resource.",
    }),
  },
  policy: {
    en: content({
      definition:
        "Policy is an explicit rule set that determines whether a requested action is allowed, denied, or subject to obligations based on subject, resource, action, context, and organizational requirements.",
      purpose:
        "It makes authorization decisions consistent, reviewable, testable, and change-controlled instead of embedding scattered assumptions in application branches.",
      when: "Create a policy where access depends on reusable rules, defining authoritative attributes, default behavior, precedence, exceptions, enforcement points, versioning, audit, and failure handling.",
      context:
        "A clinician may open a patient record only within the same organization, for an assigned case, during an active shift, except under audited emergency access.",
      application:
        "A policy engine evaluates verified subject and resource attributes, denies by default, returns a reason and obligations, logs the decision version, and tests ordinary, boundary, and emergency cases.",
      phrase:
        "The Policy permits this read only for an assigned case and requires an emergency justification otherwise.",
      aliases: ["access policy", "authorization policy", "política de acesso"],
      confusion:
        "A Policy expresses decision rules; a Permission is a named capability that a policy or role may grant under conditions.",
    }),
    "pt-BR": content({
      definition:
        "Policy é um rule set explícito que decide se requested action é allowed, denied ou exige obligations conforme subject, resource, action, context e organizational requirements.",
      purpose:
        "Ela torna authorization decisions consistentes, reviewable, testable e change-controlled, sem assumptions espalhadas no application code.",
      when: "Crie policy quando access depender de reusable rules, definindo authoritative attributes, defaults, precedence, exceptions, enforcement points, versioning, audit e failure handling.",
      context:
        "Uma clinician abre patient record somente na mesma organization, em assigned case e active shift, exceto por audited emergency access.",
      application:
        "Policy engine avalia subject e resource attributes verificados, deny by default, retorna reason e obligations, registra decision version e testa boundary cases.",
      phrase:
        "A Policy permite este read somente em assigned case e exige emergency justification caso contrário.",
      aliases: ["access policy", "authorization policy", "política de acesso"],
      confusion:
        "Policy expressa decision rules; Permission é capability nomeada que policy ou role concede sob conditions.",
    }),
  },
  claim: {
    en: content({
      definition:
        "Claim is a named assertion about a subject, token, issuer, authentication event, or authorization context carried in a security statement such as a signed token.",
      purpose:
        "It conveys identity and security facts between trusted parties in a structured form that a receiver can validate and interpret under an agreed contract.",
      when: "Use claims in federated identity and token-based access, minimizing disclosed data and defining issuer, audience, meaning, source, freshness, mutability, and authorization relevance for each claim.",
      context:
        "An API receives a signed access token containing subject, tenant, audience, expiry, and approved scopes from its trusted authorization server.",
      application:
        "The API verifies token signature and standard claims before reading application claims, treats display name as informational, uses immutable subject identity, and still evaluates resource-specific policy.",
      phrase:
        "Validate issuer and audience before trusting this tenant Claim, and do not treat an unverified client field as a claim.",
      aliases: [
        "token claim",
        "identity assertion",
        "declaração de identidade",
      ],
      confusion:
        "A Claim is an asserted fact; an Attribute is a property in a source system and becomes a claim only when an issuer represents it in an assertion.",
    }),
    "pt-BR": content({
      definition:
        "Claim é uma assertion nomeada sobre subject, token, issuer, authentication event ou authorization context transportada em security statement como signed token.",
      purpose:
        "Ela comunica identity e security facts entre trusted parties em formato estruturado que receiver valida e interpreta sob contract acordado.",
      when: "Use claims em federated identity e token-based access, minimizando data e definindo issuer, audience, meaning, source, freshness, mutability e authorization relevance.",
      context:
        "Uma API recebe signed access token com subject, tenant, audience, expiry e approved scopes do trusted authorization server.",
      application:
        "A API valida signature e standard claims antes de application claims, trata display name como informativo, usa subject imutável e ainda avalia resource policy.",
      phrase:
        "Valide issuer e audience antes de confiar neste tenant Claim; client field não verificado não é claim.",
      aliases: [
        "token claim",
        "identity assertion",
        "declaração de identidade",
      ],
      confusion:
        "Claim é um asserted fact; Attribute é propriedade num source system e só vira claim quando issuer a representa numa assertion.",
    }),
  },
  "refresh-token": {
    en: content({
      definition:
        "Refresh Token is a credential issued to an authorized client for obtaining new access tokens without requiring the resource owner to repeat the full authorization interaction.",
      purpose:
        "It supports longer-lived client sessions while allowing access tokens to remain short-lived and narrowly exposed.",
      when: "Issue one only to eligible clients and flows, binding it to client and grant, storing it securely, limiting lifetime and scope, rotating or sender-constraining it, detecting reuse, and supporting revocation.",
      context:
        "A mobile application needs continued API access after its fifteen-minute access token expires without asking the user to sign in every fifteen minutes.",
      application:
        "The app stores the refresh token in protected platform storage, sends it only to the authorization server, receives a rotated token pair, replaces the old token atomically, and signs out on detected reuse.",
      phrase:
        "The Refresh Token belongs only at the authorization server's token endpoint, never in a resource API request.",
      aliases: [
        "token renewal credential",
        "refresh credential",
        "token de atualização",
      ],
      confusion:
        "A Refresh Token obtains new access tokens from the authorization server; an Access Token authorizes a call to its intended resource server.",
    }),
    "pt-BR": content({
      definition:
        "Refresh Token é uma credential emitida a authorized client para obter novos access tokens sem o resource owner repetir toda authorization interaction.",
      purpose:
        "Ele sustenta client sessions longas enquanto access tokens permanecem short-lived e menos expostos.",
      when: "Emita-o somente a clients e flows elegíveis, vinculando a client e grant, protegendo storage, limitando lifetime e scope, usando rotation, reuse detection e revocation.",
      context:
        "Uma mobile app precisa continuar acessando API após access token de quinze minutos expirar sem pedir login novamente.",
      application:
        "A app guarda refresh token em protected platform storage, envia somente ao authorization server, recebe rotated pair, troca atomicamente e encerra session se houver reuse.",
      phrase:
        "Refresh Token pertence apenas ao token endpoint do authorization server, nunca a uma resource API request.",
      aliases: [
        "token renewal credential",
        "refresh credential",
        "token de atualização",
      ],
      confusion:
        "Refresh Token obtém novos access tokens; Access Token autoriza chamada ao resource server pretendido.",
    }),
  },
  "access-token": {
    en: content({
      definition:
        "Access Token is a credential representing delegated authorization that a client presents to a resource server to request actions within a defined audience, scope, subject, and lifetime.",
      purpose:
        "It lets an API authorize calls without receiving the user's primary credentials and bounds the authority exposed to the client and network.",
      when: "Use it for protected API calls, issuing minimal scope and short lifetime, validating audience and authorization-server context, protecting transport and storage, and choosing opaque or structured format deliberately.",
      context:
        "A calendar application receives authorization to read events but not modify them and calls only the calendar API for the next ten minutes.",
      application:
        "The API accepts the bearer token over TLS, validates issuer, audience, expiry, signature or introspection status and required scope, enforces resource ownership, and never logs the raw credential.",
      phrase:
        "This Access Token has calendar.read for the calendar API; it cannot authorize writes or calls to payroll.",
      aliases: ["API access token", "bearer access token", "token de acesso"],
      confusion:
        "An Access Token authorizes resource access; an ID Token tells an OIDC client about an authentication event and is not an API authorization credential.",
    }),
    "pt-BR": content({
      definition:
        "Access Token é uma credential que representa delegated authorization e que client apresenta a resource server para actions dentro de audience, scope, subject e lifetime definidos.",
      purpose:
        "Ele permite à API autorizar calls sem receber primary credentials e limita authority exposta ao client e network.",
      when: "Use-o em protected API calls, emitindo minimal scope e short lifetime, validando audience e authorization-server context, protegendo transport e storage e escolhendo format.",
      context:
        "Uma calendar app recebe autorização para ler events, não alterá-los, e chama somente calendar API nos próximos dez minutos.",
      application:
        "A API recebe bearer token por TLS, valida issuer, audience, expiry, signature ou introspection e required scope, aplica resource ownership e não registra credential.",
      phrase:
        "Este Access Token tem calendar.read para calendar API; não autoriza writes nem calls a payroll.",
      aliases: ["API access token", "bearer access token", "token de acesso"],
      confusion:
        "Access Token autoriza resource access; ID Token informa OIDC client sobre authentication e não é API credential.",
    }),
  },
  "session-hijacking": {
    en: content({
      definition:
        "Session Hijacking is the unauthorized takeover of an authenticated session by stealing, predicting, fixing, replaying, or otherwise gaining control of its session identifier or proof.",
      purpose:
        "Recognizing it focuses defenses on the entire session lifecycle because strong login cannot protect a reusable session credential after it is compromised.",
      when: "Threat-model it for cookie, token, and device sessions, protecting issuance, transport, storage, rotation, binding, revocation, inactivity, privilege changes, and incident detection.",
      context:
        "An attacker extracts a support agent's session cookie through malicious browser code and reuses it from another device to access customer records.",
      application:
        "The service uses TLS and Secure HttpOnly SameSite cookies, rotates identifiers after authentication and privilege change, limits lifetime, detects anomalous reuse, revokes sessions, and requires step-up for sensitive actions.",
      phrase:
        "Resetting the password is insufficient; revoke every stolen session to contain Session Hijacking.",
      aliases: ["session takeover", "cookie hijacking", "sequestro de sessão"],
      confusion:
        "Session Hijacking takes control of an already authenticated session; Credential Stuffing attempts a new login with reused username-password pairs.",
    }),
    "pt-BR": content({
      definition:
        "Session Hijacking é a tomada não autorizada de authenticated session por roubo, prediction, fixation, replay ou controle de seu session identifier ou proof.",
      purpose:
        "Reconhecê-lo concentra defenses no session lifecycle, pois login forte não protege reusable session credential após compromise.",
      when: "Modele a threat em cookie, token e device sessions, protegendo issuance, transport, storage, rotation, binding, revocation, inactivity e privilege changes.",
      context:
        "Um attacker extrai session cookie de support agent por malicious browser code e o reutiliza em outro device para acessar customer records.",
      application:
        "O service usa TLS e Secure HttpOnly SameSite cookies, rotaciona IDs, limita lifetime, detecta anomalous reuse, revoga sessions e exige step-up em sensitive actions.",
      phrase:
        "Trocar password não basta; revogue todas as sessions roubadas para conter Session Hijacking.",
      aliases: ["session takeover", "cookie hijacking", "sequestro de sessão"],
      confusion:
        "Session Hijacking controla session já autenticada; Credential Stuffing tenta novo login com username-password pairs reutilizados.",
    }),
  },
  "credential-stuffing": {
    en: content({
      definition:
        "Credential Stuffing is an automated account-takeover attack that tests username and password pairs stolen from other services against a target where people may have reused them.",
      purpose:
        "The term distinguishes reuse-based login abuse from password guessing so defenses can combine compromised-credential intelligence, bot resistance, and user protection.",
      when: "Defend any public password login, especially during breach circulation and traffic anomalies, without relying solely on per-account failure thresholds that distributed attackers can evade.",
      context:
        "A botnet submits millions of previously breached email-password pairs from rotating addresses and successfully enters accounts whose owners reused passwords.",
      application:
        "The platform checks breached credentials at creation and login, applies risk-based rate and bot controls, requires MFA or step-up on suspicious attempts, alerts affected users, revokes sessions, and monitors takeover outcomes.",
      phrase:
        "This is Credential Stuffing across many accounts and addresses, so one-IP throttling will not contain it.",
      aliases: [
        "credential reuse attack",
        "breached-password attack",
        "preenchimento de credenciais",
      ],
      confusion:
        "Credential Stuffing uses known credential pairs from prior breaches; Brute Force generates or guesses many candidate passwords.",
    }),
    "pt-BR": content({
      definition:
        "Credential Stuffing é automated account-takeover attack que testa username e password pairs roubados de outros services onde users podem tê-los reutilizado.",
      purpose:
        "O termo distingue login abuse por reuse de password guessing e direciona compromised-credential intelligence, bot resistance e user protection.",
      when: "Proteja todo public password login, sobretudo durante breach circulation e traffic anomalies, sem depender apenas de per-account failure thresholds.",
      context:
        "Uma botnet envia milhões de breached email-password pairs de addresses rotativos e entra em accounts com password reutilizada.",
      application:
        "A platform verifica breached credentials, aplica risk-based rate e bot controls, exige MFA em attempts suspeitas, alerta users, revoga sessions e monitora takeover.",
      phrase:
        "Isto é Credential Stuffing distribuído entre accounts e addresses; one-IP throttling não o contém.",
      aliases: [
        "credential reuse attack",
        "breached-password attack",
        "preenchimento de credenciais",
      ],
      confusion:
        "Credential Stuffing usa credential pairs conhecidas de breaches; Brute Force gera ou adivinha muitas candidate passwords.",
    }),
  },
  "replay-attack": {
    en: content({
      definition:
        "Replay Attack is the malicious retransmission of a previously valid message, credential, or protocol exchange to make a receiver accept an action or authentication more than once or at an unauthorized time.",
      purpose:
        "It exposes protocols that verify authenticity but fail to verify freshness, uniqueness, ordering, or one-time use.",
      when: "Prevent replay for signed requests, payment commands, login assertions, reset links, and other captured messages by defining nonces, timestamps, sequence numbers, narrow validity, idempotency, and server-side reuse state.",
      context:
        "An attacker records a correctly signed transfer request and sends the identical body and signature again to attempt a second transfer.",
      application:
        "The API signs method, path, body hash, timestamp and unique nonce, enforces clock tolerance, atomically records nonce use, applies an idempotency key, and rejects duplicates while retaining audit evidence.",
      phrase:
        "The signature is valid, but the nonce was already consumed, so reject this Replay Attack.",
      aliases: [
        "message replay",
        "retransmission attack",
        "ataque de repetição",
      ],
      confusion:
        "A Replay Attack resends valid captured material; forgery creates or alters material without possessing a valid original exchange.",
    }),
    "pt-BR": content({
      definition:
        "Replay Attack é a retransmissão maliciosa de message, credential ou protocol exchange antes válida para receiver aceitar action ou authentication novamente ou fora do momento autorizado.",
      purpose:
        "Ele expõe protocols que validam authenticity, mas não freshness, uniqueness, ordering ou one-time use.",
      when: "Previna-o em signed requests, payment commands, login assertions e reset links usando nonces, timestamps, sequence numbers, short validity, idempotency e reuse state.",
      context:
        "Um attacker grava correctly signed transfer request e envia body e signature idênticos para tentar segunda transferência.",
      application:
        "A API assina method, path, body hash, timestamp e unique nonce, limita clock skew, registra nonce atomicamente, aplica idempotency key e rejeita duplicate.",
      phrase:
        "A signature é válida, mas nonce já foi consumido; rejeite este Replay Attack.",
      aliases: [
        "message replay",
        "retransmission attack",
        "ataque de repetição",
      ],
      confusion:
        "Replay Attack reenvia material válido capturado; forgery cria ou altera material sem valid original exchange.",
    }),
  },
  "man-in-the-middle": {
    en: content({
      definition:
        "Man-in-the-Middle (MITM) is an attack in which an adversary positions itself between communicating parties to observe, relay, block, or alter exchanges while each party may believe it communicates directly with the other.",
      purpose:
        "It explains why encryption without authenticated peer identity can still permit interception and modification by an active intermediary.",
      when: "Threat-model MITM across untrusted networks, proxies, service meshes, certificate issuance, DNS, Wi-Fi, and client update channels, establishing authenticated encryption and trust-anchor protection.",
      context:
        "A user connects through a hostile wireless access point that redirects traffic to a proxy presenting an untrusted certificate and attempting to capture credentials.",
      application:
        "The client validates the server certificate and hostname, refuses trust errors, uses modern TLS, protects certificate and DNS operations, applies mutual authentication where required, and never sends secrets before validation.",
      phrase:
        "Do not bypass the certificate error; it is the control preventing this possible MITM interception.",
      aliases: ["MITM", "on-path attack", "adversary in the middle"],
      confusion:
        "MITM is an active on-path position capable of relaying or modifying communication; passive eavesdropping only observes traffic.",
    }),
    "pt-BR": content({
      definition:
        "Man-in-the-Middle (MITM) é attack em que adversary se posiciona entre communicating parties para observar, relay, bloquear ou alterar exchanges enquanto elas creem falar diretamente.",
      purpose:
        "Ele mostra por que encryption sem authenticated peer identity ainda permite interception e modification por active intermediary.",
      when: "Modele MITM em untrusted networks, proxies, service meshes, certificate issuance, DNS, Wi-Fi e update channels, usando authenticated encryption e trust-anchor protection.",
      context:
        "Um user conecta em hostile Wi-Fi que redireciona traffic a proxy com untrusted certificate e tenta capturar credentials.",
      application:
        "O client valida server certificate e hostname, recusa trust errors, usa modern TLS, protege certificate e DNS operations e não envia secrets antes da validação.",
      phrase:
        "Não ignore certificate error; ele é o control que impede possível interception MITM.",
      aliases: ["MITM", "on-path attack", "adversary in the middle"],
      confusion:
        "MITM é active on-path position capaz de relay ou modification; passive eavesdropping apenas observa traffic.",
    }),
  },
  "security-header": {
    en: content({
      definition:
        "Security Header is an HTTP response or request header whose defined semantics activate, constrain, or communicate a browser or intermediary security control.",
      purpose:
        "It lets a server enforce transport, content, framing, referrer, permission, and MIME-handling rules in the user agent as part of layered web defense.",
      when: "Configure relevant headers for every web response at the correct application or edge boundary, using tested values, consistent coverage, monitoring, and compatibility review rather than copying an arbitrary checklist.",
      context:
        "A web application must prevent framing by other origins, force HTTPS, restrict referrer disclosure, and stop browsers from guessing executable content types.",
      application:
        "The edge emits HSTS after HTTPS readiness, a tested CSP, frame-ancestors, X-Content-Type-Options, Referrer-Policy and Permissions-Policy, verifies them in integration tests, and reports policy violations.",
      phrase:
        "Add this Security Header at the shared edge and test its effective browser behavior on every response class.",
      aliases: [
        "HTTP security header",
        "browser security header",
        "cabeçalho de segurança",
      ],
      confusion:
        "A Security Header communicates one protocol-level control; Content Security Policy is a specific policy delivered by one such header or a limited HTML meta mechanism.",
    }),
    "pt-BR": content({
      definition:
        "Security Header é um HTTP response ou request header cuja semântica ativa, restringe ou comunica browser ou intermediary security control.",
      purpose:
        "Ele permite ao server aplicar transport, content, framing, referrer, permission e MIME-handling rules no user agent como layered defense.",
      when: "Configure headers relevantes em cada web response no application ou edge boundary correto, com values testados, coverage consistente, monitoring e compatibility review.",
      context:
        "Uma web app precisa impedir framing externo, forçar HTTPS, limitar referrer disclosure e evitar executable MIME guessing.",
      application:
        "A edge emite HSTS, CSP testada, frame-ancestors, X-Content-Type-Options, Referrer-Policy e Permissions-Policy, verifica integration tests e reporta violations.",
      phrase:
        "Adicione este Security Header na shared edge e teste o browser behavior efetivo em toda response class.",
      aliases: [
        "HTTP security header",
        "browser security header",
        "cabeçalho de segurança",
      ],
      confusion:
        "Security Header comunica um protocol control; Content Security Policy é policy específica entregue por um desses headers.",
    }),
  },
  "content-security-policy": {
    en: content({
      definition:
        "Content Security Policy (CSP) is a browser-enforced policy that restricts which sources and execution contexts a document may use for scripts, styles, images, frames, connections, and other resources.",
      purpose:
        "It reduces the impact of content injection, especially cross-site scripting, and can report violations, while complementing rather than replacing output encoding and safe DOM use.",
      when: "Deploy CSP on web applications by inventorying legitimate resources, removing unsafe inline execution, using nonces or hashes, restricting defaults and framing, reporting first, and tightening from observed evidence.",
      context:
        "A comment field contains injected script markup, but the page should execute only application scripts carrying a server-generated nonce.",
      application:
        "The response sends a unique nonce in a strict script-src policy, sets object-src 'none' and base-uri restrictions, avoids broad wildcards and unsafe-inline, collects reports, and tests every route.",
      phrase:
        "The CSP nonce authorizes this generated script element; it must be unpredictable and different for every response.",
      aliases: [
        "CSP",
        "browser content policy",
        "política de segurança de conteúdo",
      ],
      confusion:
        "CSP constrains resource loading and execution in the browser; CORS controls whether browser code may read cross-origin responses.",
    }),
    "pt-BR": content({
      definition:
        "Content Security Policy (CSP) é uma browser-enforced policy que restringe sources e execution contexts permitidos a scripts, styles, images, frames, connections e outros resources.",
      purpose:
        "Ela reduz impacto de content injection, sobretudo XSS, e reporta violations, complementando output encoding e safe DOM use sem substituí-los.",
      when: "Implante CSP inventariando legitimate resources, removendo unsafe inline execution, usando nonces ou hashes, restringindo defaults e framing, observando reports e endurecendo gradualmente.",
      context:
        "Um comment field contém injected script markup, mas a page executa apenas application scripts com server-generated nonce.",
      application:
        "A response envia unique nonce em strict script-src, usa object-src 'none' e base-uri, evita wildcards e unsafe-inline, coleta reports e testa routes.",
      phrase:
        "O nonce da CSP autoriza este generated script; precisa ser imprevisível e diferente em cada response.",
      aliases: [
        "CSP",
        "browser content policy",
        "política de segurança de conteúdo",
      ],
      confusion:
        "CSP restringe resource loading e execution no browser; CORS controla se browser code pode ler cross-origin responses.",
    }),
  },
  samesite: {
    en: content({
      definition:
        "SameSite is a cookie attribute that controls whether a browser includes the cookie on requests whose site context is same-site or cross-site, using Strict, Lax, or None behavior.",
      purpose:
        "It limits ambient credential exposure on cross-site requests and therefore provides an important layer against cross-site request forgery and tracking.",
      when: "Set it deliberately for every sensitive cookie according to required navigation and embedding flows, testing redirects and federation; use None only when cross-site use is necessary and pair it with Secure.",
      context:
        "A banking session cookie should accompany direct navigation within the bank but not an attacker site's hidden cross-site form submission.",
      application:
        "The server chooses Lax or Strict for the session, keeps server-side CSRF validation for state changes, uses None; Secure only for a justified federated flow, and tests supported browsers.",
      phrase:
        "Set SameSite=Lax on this session cookie and retain the CSRF token for state-changing requests.",
      aliases: [
        "SameSite cookie attribute",
        "site-context cookie control",
        "atributo SameSite",
      ],
      confusion:
        "SameSite governs cross-site cookie sending; Same-Origin Policy governs how browser documents and scripts interact across origins.",
    }),
    "pt-BR": content({
      definition:
        "SameSite é um cookie attribute que controla se browser inclui cookie em requests de context same-site ou cross-site, com behavior Strict, Lax ou None.",
      purpose:
        "Ele limita ambient credential exposure em cross-site requests e cria camada importante contra CSRF e tracking.",
      when: "Defina-o por sensitive cookie conforme navigation e embedding flows, testando redirects e federation; use None somente para cross-site necessário e junto de Secure.",
      context:
        "Um banking session cookie acompanha direct navigation no banco, mas não hidden cross-site form de attacker site.",
      application:
        "O server escolhe Lax ou Strict, mantém server-side CSRF validation em state changes, usa None; Secure apenas em justified flow e testa browsers.",
      phrase:
        "Defina SameSite=Lax neste session cookie e preserve CSRF token para state-changing requests.",
      aliases: [
        "SameSite cookie attribute",
        "site-context cookie control",
        "atributo SameSite",
      ],
      confusion:
        "SameSite governa cross-site cookie sending; Same-Origin Policy governa interação de documents e scripts entre origins.",
    }),
  },
  "secure-cookie": {
    en: content({
      definition:
        "Secure Cookie is a cookie carrying the Secure attribute, which instructs supporting user agents to send it only over authenticated secure transport such as HTTPS.",
      purpose:
        "It prevents the browser from exposing that cookie on ordinary unencrypted HTTP requests where network observers could capture it.",
      when: "Mark every session and sensitive cookie Secure after enforcing HTTPS across the complete application path, including redirects, subdomains, proxies, development behavior, and cookie prefixes.",
      context:
        "A user follows an old HTTP bookmark before redirection, and a session cookie must not be attached to that initial plaintext request.",
      application:
        "The application serves HTTPS only, sets Secure together with HttpOnly and an appropriate SameSite value, uses HSTS, verifies proxy scheme handling, and tests that HTTP receives no credential cookie.",
      phrase:
        "The Secure Cookie must never leave the browser over the initial HTTP request, even if that request immediately redirects.",
      aliases: ["Secure-flagged cookie", "HTTPS-only cookie", "cookie seguro"],
      confusion:
        "Secure restricts cookie transport to HTTPS; HttpOnly restricts access from browser scripting APIs.",
    }),
    "pt-BR": content({
      definition:
        "Secure Cookie é um cookie com Secure attribute, que instrui user agents a enviá-lo somente por authenticated secure transport como HTTPS.",
      purpose:
        "Ele impede o browser de expor cookie em plaintext HTTP requests onde network observer poderia capturá-lo.",
      when: "Marque session e sensitive cookies como Secure após impor HTTPS em todo application path, incluindo redirects, subdomains, proxies, development e cookie prefixes.",
      context:
        "Um user abre bookmark HTTP antigo antes do redirect, e session cookie não pode acompanhar essa initial plaintext request.",
      application:
        "A app usa HTTPS only, define Secure com HttpOnly e SameSite adequado, habilita HSTS, verifica proxy scheme e testa que HTTP não recebe credential cookie.",
      phrase:
        "O Secure Cookie nunca deve sair por initial HTTP request, mesmo que ela redirecione imediatamente.",
      aliases: ["Secure-flagged cookie", "HTTPS-only cookie", "cookie seguro"],
      confusion:
        "Secure limita cookie transport a HTTPS; HttpOnly limita acesso por browser scripting APIs.",
    }),
  },
  httponly: {
    en: content({
      definition:
        "HttpOnly is a cookie attribute that prevents client-side scripts from reading or modifying the cookie through ordinary browser scripting interfaces while the browser can still send it on eligible HTTP requests.",
      purpose:
        "It reduces direct theft of session credentials through cross-site scripting, although injected scripts may still perform authenticated actions from the victim's page.",
      when: "Set it on session identifiers and cookies that never require JavaScript access, combining it with Secure, appropriate SameSite, short lifetime, CSP, output safety, and server-side request protections.",
      context:
        "A vulnerable page executes injected JavaScript, but its session identifier should not be available through document.cookie for exfiltration.",
      application:
        "The server stores the session in a Secure HttpOnly cookie, keeps non-sensitive UI preferences separate, verifies flags in browser tests, rotates the session, and fixes the underlying injection flaw.",
      phrase:
        "Mark the session cookie HttpOnly; front-end code does not need to read the authentication credential.",
      aliases: [
        "HttpOnly cookie attribute",
        "script-inaccessible cookie",
        "atributo HttpOnly",
      ],
      confusion:
        "HttpOnly prevents script access to a cookie; it does not prevent the browser from attaching that cookie to a forged request.",
    }),
    "pt-BR": content({
      definition:
        "HttpOnly é um cookie attribute que impede client-side scripts de ler ou alterar cookie por browser scripting interfaces, embora browser ainda o envie em eligible HTTP requests.",
      purpose:
        "Ele reduz roubo direto de session credentials por XSS, mas injected scripts ainda podem executar authenticated actions na victim page.",
      when: "Defina-o em session IDs e cookies sem necessidade de JavaScript, junto de Secure, SameSite adequado, short lifetime, CSP, output safety e server-side protections.",
      context:
        "Uma vulnerable page executa injected JavaScript, mas session identifier não fica disponível por document.cookie para exfiltration.",
      application:
        "O server guarda session em Secure HttpOnly cookie, separa UI preferences, verifica flags em browser tests, rotaciona session e corrige injection flaw.",
      phrase:
        "Marque session cookie como HttpOnly; front-end code não precisa ler authentication credential.",
      aliases: [
        "HttpOnly cookie attribute",
        "script-inaccessible cookie",
        "atributo HttpOnly",
      ],
      confusion:
        "HttpOnly impede script access ao cookie; não impede browser de anexá-lo a forged request.",
    }),
  },
  "secret-management": {
    en: content({
      definition:
        "Secret Management is the controlled lifecycle of sensitive machine-readable values such as passwords, API keys, private keys, and tokens from generation through storage, distribution, use, rotation, revocation, audit, and destruction.",
      purpose:
        "It limits secret exposure and makes access, replacement, and incident response governable instead of embedding long-lived credentials in code, images, logs, or unmanaged files.",
      when: "Establish it for every workload credential, using a dedicated secret system, strong identity-based access, least privilege, encryption, short lifetime where possible, automated rotation, and leak detection.",
      context:
        "Multiple services share a database password copied into repositories and deployment variables, making ownership, rotation, and breach containment unclear.",
      application:
        "Each workload authenticates to a secret manager with its runtime identity, receives only its scoped credential, avoids logging it, rotates without downtime, audits reads, scans leaks, and revokes on compromise.",
      phrase:
        "Move this credential into Secret Management and give each workload a separately revocable identity and secret.",
      aliases: [
        "secrets management",
        "credential vaulting",
        "gestão de segredos",
      ],
      confusion:
        "Secret Management governs sensitive-value lifecycle; Configuration Management handles broader operational settings, most of which are not secret.",
    }),
    "pt-BR": content({
      definition:
        "Secret Management é o controlled lifecycle de values sensíveis como passwords, API keys, private keys e tokens, da generation a storage, distribution, rotation, revocation, audit e destruction.",
      purpose:
        "Ele limita secret exposure e torna access, replacement e incident response governáveis, sem long-lived credentials em code, images, logs ou files.",
      when: "Adote-o para toda workload credential, usando dedicated secret system, identity-based access, least privilege, encryption, short lifetime, automated rotation e leak detection.",
      context:
        "Vários services compartilham database password copiada em repositories e deployment variables, sem ownership ou rotation claros.",
      application:
        "Cada workload autentica no secret manager por runtime identity, recebe scoped credential, não registra value, rotaciona sem downtime, audita reads e revoga em compromise.",
      phrase:
        "Mova esta credential para Secret Management e dê a cada workload identity e secret revogáveis separadamente.",
      aliases: [
        "secrets management",
        "credential vaulting",
        "gestão de segredos",
      ],
      confusion:
        "Secret Management governa sensitive-value lifecycle; Configuration Management trata settings operacionais mais amplos e geralmente não secretos.",
    }),
  },
  "key-rotation": {
    en: content({
      definition:
        "Key Rotation is the controlled replacement of a cryptographic key or credential with a new version while preserving required verification, decryption, availability, and rollback behavior during transition.",
      purpose:
        "It limits exposure time, supports algorithm and policy changes, and makes routine replacement possible before compromise or expiration becomes an emergency.",
      when: "Rotate on a risk-based schedule and immediately after suspected compromise, defining key versions, activation, overlap, distribution, re-encryption, cache refresh, revocation, destruction, and recovery.",
      context:
        "A token-signing key approaches its policy age while services around the world cache the public verification set.",
      application:
        "The issuer publishes the new public key, waits for verifier propagation, begins signing with its new key ID, retains the old verification key until issued tokens expire, monitors failures, then revokes and destroys old private material.",
      phrase:
        "Publish the new verification key before Key Rotation changes the active signer, and retain the old key only for its validation window.",
      aliases: [
        "cryptographic key rotation",
        "credential rotation",
        "rotação de chaves",
      ],
      confusion:
        "Key Rotation replaces key material according to a lifecycle; certificate renewal may reissue a certificate while retaining the same key, though fresh keys are often preferable.",
    }),
    "pt-BR": content({
      definition:
        "Key Rotation é a substituição controlada de cryptographic key ou credential por nova version, preservando verification, decryption, availability e rollback durante transition.",
      purpose:
        "Ela limita exposure time, suporta algorithm e policy changes e torna replacement rotineiro antes de compromise ou expiration virar emergência.",
      when: "Rotacione por risk-based schedule e após suspected compromise, definindo key versions, activation, overlap, distribution, re-encryption, cache refresh, revocation e destruction.",
      context:
        "Uma token-signing key chega ao policy age enquanto services globais mantêm cached public verification set.",
      application:
        "O issuer publica nova public key, espera propagation, assina com novo key ID, mantém old verification key até tokens expirarem, monitora failures e destrói private material antigo.",
      phrase:
        "Publique verification key antes de Key Rotation trocar signer ativo e preserve a antiga somente na validation window.",
      aliases: [
        "cryptographic key rotation",
        "credential rotation",
        "rotação de chaves",
      ],
      confusion:
        "Key Rotation substitui key material; certificate renewal pode reemitir certificate mantendo a mesma key.",
    }),
  },
  certificate: {
    en: content({
      definition:
        "Certificate is a digitally signed document that binds a public key to an identified subject, names, attributes, validity interval, and permitted uses under an issuer's trust framework.",
      purpose:
        "It lets a verifier authenticate a peer or signature by validating a chain from the presented key binding to a trusted authority.",
      when: "Use certificates for TLS, mutual authentication, code signing, or document signing, validating names, chain, time, key use, policy, revocation where applicable, and protecting the associated private key.",
      context:
        "A browser connects to an HTTPS service and must establish that the server key is authorized for the requested hostname.",
      application:
        "The server presents its leaf and intermediate certificates, the browser verifies signatures to a trusted root, hostname, validity and usage, and the server proves possession of the matching private key.",
      phrase:
        "The Certificate binds this public key to the hostname; successful validation still requires proof of the corresponding private key.",
      aliases: [
        "digital certificate",
        "public-key certificate",
        "certificado digital",
      ],
      confusion:
        "A Certificate is a signed public-key binding; the Private Key is secret material held by the subject and is never contained in a public certificate.",
    }),
    "pt-BR": content({
      definition:
        "Certificate é um digitally signed document que vincula public key a subject, names, attributes, validity interval e permitted uses sob issuer trust framework.",
      purpose:
        "Ele permite ao verifier autenticar peer ou signature validando chain entre key binding apresentada e trusted authority.",
      when: "Use certificates em TLS, mutual authentication, code signing ou document signing, validando names, chain, time, key use, policy e protegendo associated private key.",
      context:
        "Um browser conecta a HTTPS service e precisa confirmar que server key está autorizada para requested hostname.",
      application:
        "O server apresenta leaf e intermediate certificates, browser verifica signatures até trusted root, hostname, validity e usage, e server prova posse da private key.",
      phrase:
        "O Certificate vincula public key ao hostname; validação ainda exige proof da corresponding private key.",
      aliases: [
        "digital certificate",
        "public-key certificate",
        "certificado digital",
      ],
      confusion:
        "Certificate é signed public-key binding; Private Key é secret material do subject e não fica no public certificate.",
    }),
  },
  "public-key": {
    en: content({
      definition:
        "Public Key is the non-secret member of an asymmetric cryptographic key pair, distributed so others can verify signatures or perform an algorithm's public operation for the holder of the private key.",
      purpose:
        "It enables verification and protected key exchange without sharing the private key, provided the public key's identity and intended use are authenticated.",
      when: "Publish it through a trusted certificate, pinned configuration, key directory, or authenticated key set, including algorithm, use, version, owner, validity, and revocation metadata.",
      context:
        "APIs need to verify access tokens signed by an authorization server without receiving the server's signing secret.",
      application:
        "The authorization server publishes versioned verification keys over an authenticated endpoint, tokens identify the key ID, APIs validate source and algorithm, cache with limits, and refresh safely on rotation.",
      phrase:
        "This Public Key verifies the token signature; authenticate the key set before trusting what that signature means.",
      aliases: ["verification key", "public half of key pair", "chave pública"],
      confusion:
        "A Public Key may be distributed and performs public operations; a Private Key must remain controlled and performs the corresponding secret operation.",
    }),
    "pt-BR": content({
      definition:
        "Public Key é o member não secreto de asymmetric cryptographic key pair, distribuído para outros verificarem signatures ou executarem public operation do algorithm.",
      purpose:
        "Ela habilita verification e protected key exchange sem compartilhar private key, desde que identity e intended use da public key sejam autenticados.",
      when: "Publique-a por trusted certificate, pinned config, key directory ou authenticated key set, incluindo algorithm, use, version, owner, validity e revocation metadata.",
      context:
        "APIs verificam access tokens assinados por authorization server sem receber signing secret do server.",
      application:
        "Authorization server publica versioned verification keys, tokens indicam key ID, APIs validam source e algorithm, fazem bounded cache e refresh na rotation.",
      phrase:
        "Esta Public Key verifica token signature; autentique key set antes de confiar no significado.",
      aliases: ["verification key", "public half of key pair", "chave pública"],
      confusion:
        "Public Key pode ser distribuída; Private Key deve permanecer controlada e executa corresponding secret operation.",
    }),
  },
  "private-key": {
    en: content({
      definition:
        "Private Key is the secret member of an asymmetric cryptographic key pair, used to create signatures, decrypt or unwrap data, or establish shared secrets according to the selected algorithm.",
      purpose:
        "Its exclusive control provides proof tied to the key holder and protects operations that anyone with the public key must not be able to perform.",
      when: "Generate and use it in approved cryptographic modules or secret systems, limiting export, identities, permissions, backups, lifetime, algorithms, audit, rotation, and compromise response.",
      context:
        "A certificate authority's service must sign issued certificates without exposing its signing key to application memory or administrators.",
      application:
        "The key is generated inside a hardware security module, signing requests require tightly authorized service identity and audit, quorum protects administration, backups are controlled, and rotation and revocation are rehearsed.",
      phrase:
        "The Private Key never leaves the cryptographic module; the service requests a permitted signing operation instead.",
      aliases: [
        "secret key of asymmetric pair",
        "signing private key",
        "chave privada",
      ],
      confusion:
        "A Private Key belongs to an asymmetric pair; a symmetric key is also secret but the same shared key performs both sides of the symmetric operation.",
    }),
    "pt-BR": content({
      definition:
        "Private Key é o member secreto de asymmetric cryptographic key pair, usado para criar signatures, decrypt ou unwrap data ou estabelecer shared secrets conforme algorithm.",
      purpose:
        "Seu exclusive control fornece proof ligada ao key holder e protege operations que quem possui public key não pode executar.",
      when: "Gere e use-a em approved cryptographic modules ou secret systems, limitando export, identities, permissions, backups, lifetime, algorithms, audit, rotation e compromise response.",
      context:
        "O service de uma certificate authority assina issued certificates sem expor signing key a application memory ou admins.",
      application:
        "A key nasce em hardware security module, signing requests exigem authorized service identity e audit, quorum protege administration e rotation e revocation são ensaiadas.",
      phrase:
        "A Private Key nunca sai do cryptographic module; o service solicita permitted signing operation.",
      aliases: [
        "secret key of asymmetric pair",
        "signing private key",
        "chave privada",
      ],
      confusion:
        "Private Key pertence a asymmetric pair; symmetric key também é secreta, mas a mesma shared key opera os dois lados.",
    }),
  },
  "symmetric-encryption": {
    en: content({
      definition:
        "Symmetric Encryption is encryption in which the same secret key, or directly related shared secret material, is used to transform plaintext into ciphertext and recover it.",
      purpose:
        "It protects large amounts of data efficiently when authorized parties can securely establish and control the shared key.",
      when: "Use an approved authenticated-encryption mode for data at rest or in transit after solving key generation, distribution, nonce uniqueness, access, rotation, backup, and destruction.",
      context:
        "A storage service encrypts each uploaded object efficiently while preventing undetected modification of its ciphertext and metadata.",
      application:
        "The service generates a random data-encryption key, uses AEAD with a unique nonce and authenticated context, wraps the key under a managed master key, stores version metadata, and verifies before releasing plaintext.",
      phrase:
        "Use authenticated Symmetric Encryption for the object and bind its tenant and version as associated data.",
      aliases: [
        "secret-key encryption",
        "shared-key encryption",
        "criptografia simétrica",
      ],
      confusion:
        "Symmetric Encryption uses shared secret key material and is efficient for bulk data; Asymmetric Encryption uses a public-private pair and serves different key-distribution and identity needs.",
    }),
    "pt-BR": content({
      definition:
        "Symmetric Encryption é encryption em que a mesma secret key, ou shared secret material diretamente relacionado, transforma plaintext em ciphertext e o recupera.",
      purpose:
        "Ela protege grande volume de data eficientemente quando authorized parties estabelecem e controlam shared key com segurança.",
      when: "Use approved authenticated-encryption mode em data at rest ou transit após resolver key generation, distribution, nonce uniqueness, access, rotation, backup e destruction.",
      context:
        "Um storage service cifra cada uploaded object evitando undetected modification do ciphertext e metadata.",
      application:
        "O service gera random data-encryption key, usa AEAD com unique nonce e authenticated context, envolve key sob managed master key e verifica antes de liberar plaintext.",
      phrase:
        "Use authenticated Symmetric Encryption no object e vincule tenant e version como associated data.",
      aliases: [
        "secret-key encryption",
        "shared-key encryption",
        "criptografia simétrica",
      ],
      confusion:
        "Symmetric Encryption usa shared secret e é eficiente em bulk data; Asymmetric Encryption usa public-private pair para outras necessidades.",
    }),
  },
  "asymmetric-encryption": {
    en: content({
      definition:
        "Asymmetric Encryption is encryption based on a mathematically related public-private key pair, where an operation with the public key can protect data that only the private-key holder can recover under the scheme.",
      purpose:
        "It enables protected exchange without a pre-shared secret, typically to establish or wrap efficient symmetric keys rather than encrypt large payloads directly.",
      when: "Use a reviewed hybrid encryption protocol with authenticated recipient keys, approved algorithms and padding, bounded plaintext, private-key protection, versioning, rotation, and explicit integrity guarantees.",
      context:
        "A client must send a fresh data-encryption key to a service without already sharing a secret over the application layer.",
      application:
        "The client authenticates the service public key, encapsulates a random shared key with the approved scheme, encrypts the payload using AEAD, binds context, and the service decapsulates inside protected key storage.",
      phrase:
        "Use Asymmetric Encryption to establish the data key, then authenticated symmetric encryption for the payload.",
      aliases: [
        "public-key encryption",
        "public-key cryptography for encryption",
        "criptografia assimétrica",
      ],
      confusion:
        "Asymmetric Encryption protects confidentiality using a key pair; Digital Signature uses a private-key operation to provide verifiable authenticity and integrity.",
    }),
    "pt-BR": content({
      definition:
        "Asymmetric Encryption é encryption baseada em public-private key pair matematicamente relacionada, onde public-key operation protege data recuperável pelo private-key holder.",
      purpose:
        "Ela permite protected exchange sem pre-shared secret, normalmente estabelecendo ou envolvendo symmetric keys eficientes em vez de cifrar payload grande diretamente.",
      when: "Use reviewed hybrid encryption protocol com authenticated recipient keys, approved algorithms e padding, bounded plaintext, private-key protection, versioning, rotation e integrity guarantees.",
      context:
        "Um client envia fresh data-encryption key a um service sem shared secret anterior na application layer.",
      application:
        "O client autentica service public key, encapsula random shared key, cifra payload com AEAD, vincula context e service decapsula em protected key storage.",
      phrase:
        "Use Asymmetric Encryption para estabelecer data key e authenticated symmetric encryption no payload.",
      aliases: [
        "public-key encryption",
        "public-key cryptography for encryption",
        "criptografia assimétrica",
      ],
      confusion:
        "Asymmetric Encryption protege confidentiality; Digital Signature fornece verifiable authenticity e integrity.",
    }),
  },
  "digital-signature": {
    en: content({
      definition:
        "Digital Signature is a cryptographic value created with a private key over a message or its representation and verified with the corresponding public key to detect modification and authenticate control of the signing key.",
      purpose:
        "It provides message integrity and origin authentication within a key-trust and identity framework, supporting software, document, token, and protocol verification.",
      when: "Sign canonical, context-bound data with approved algorithms and protected keys, and verify the exact bytes, public-key trust, algorithm, purpose, identity, time, revocation, and replay rules.",
      context:
        "A deployment agent must accept a software package only if it was released by the authorized build service and remained unchanged.",
      application:
        "The build service signs the artifact digest and release context in a hardware-backed key, publishes provenance, and the agent validates signature, certificate chain, expected identity, artifact digest and release policy before installation.",
      phrase:
        "The Digital Signature verifies this artifact and signer only after the public key and release identity are trusted.",
      aliases: [
        "cryptographic signature",
        "public-key signature",
        "assinatura digital",
      ],
      confusion:
        "A Digital Signature provides public-key-verifiable integrity and origin; a handwritten-signature image is merely copyable visual data.",
    }),
    "pt-BR": content({
      definition:
        "Digital Signature é um cryptographic value criado com private key sobre message e verificado com corresponding public key para detectar modification e autenticar control da signing key.",
      purpose:
        "Ela fornece message integrity e origin authentication dentro de key-trust e identity framework para software, documents, tokens e protocols.",
      when: "Assine canonical context-bound data com approved algorithms e protected keys e verifique exact bytes, key trust, algorithm, purpose, identity, time, revocation e replay.",
      context:
        "Um deployment agent aceita software package somente se authorized build service o publicou sem alteração.",
      application:
        "Build service assina artifact digest e release context em hardware-backed key; agent valida signature, certificate chain, identity, digest e release policy.",
      phrase:
        "Digital Signature verifica artifact e signer somente após confiar em public key e release identity.",
      aliases: [
        "cryptographic signature",
        "public-key signature",
        "assinatura digital",
      ],
      confusion:
        "Digital Signature dá verifiable integrity e origin; imagem de handwritten signature é apenas visual data copiável.",
    }),
  },
  hmac: {
    en: content({
      definition:
        "HMAC, short for Hash-based Message Authentication Code, is a keyed construction that combines a cryptographic hash with a shared secret to produce a tag verifying message integrity and shared-secret authenticity.",
      purpose:
        "It lets parties sharing a key detect message modification and authenticate that the sender knew the key without exposing it in the message.",
      when: "Use HMAC with an approved hash and strong dedicated key for request signing, webhook verification, or internal protocols, defining canonicalization, context, freshness, key IDs, rotation, and constant-time comparison.",
      context:
        "A payment provider signs each webhook body so the receiver can reject altered payloads and unauthenticated senders.",
      application:
        "The receiver reads exact raw bytes, validates timestamp and event identifier, selects the key version, computes HMAC over the documented canonical input, compares tags in constant time, and records replay state.",
      phrase:
        "Verify the HMAC over the raw webhook body and timestamp before parsing or acting on the event.",
      aliases: [
        "Hash-based Message Authentication Code",
        "keyed hash authentication",
        "código HMAC",
      ],
      confusion:
        "HMAC uses a shared secret so any verifier can also create tags; a Digital Signature separates private signing from public verification.",
    }),
    "pt-BR": content({
      definition:
        "HMAC, sigla de Hash-based Message Authentication Code, é uma keyed construction que combina cryptographic hash e shared secret para gerar tag de message integrity e shared-secret authenticity.",
      purpose:
        "Ele permite a parties com a mesma key detectar modification e autenticar conhecimento do secret sem expô-lo na message.",
      when: "Use HMAC com approved hash e strong dedicated key em request signing, webhook verification ou internal protocols, definindo canonicalization, context, freshness, key IDs, rotation e constant-time comparison.",
      context:
        "Um payment provider assina webhook body para receiver rejeitar altered payloads e unauthenticated senders.",
      application:
        "Receiver lê exact raw bytes, valida timestamp e event ID, escolhe key version, calcula HMAC sobre canonical input, compara tag em constant time e registra replay state.",
      phrase:
        "Verifique HMAC sobre raw webhook body e timestamp antes de parsear ou executar o event.",
      aliases: [
        "Hash-based Message Authentication Code",
        "keyed hash authentication",
        "código HMAC",
      ],
      confusion:
        "HMAC usa shared secret e qualquer verifier cria tags; Digital Signature separa private signing e public verification.",
    }),
  },
  "data-masking": {
    en: content({
      definition:
        "Data Masking is the transformation or selective concealment of sensitive values so a viewer or environment receives a reduced representation while required structure or utility is preserved.",
      purpose:
        "It minimizes unnecessary exposure in interfaces, logs, analytics, support, testing, and data sharing according to audience and use.",
      when: "Mask data when full values are not needed, defining threat model, irreversibility or access-controlled reveal, format preservation, referential consistency, authorization, and protection of originals.",
      context:
        "A support dashboard needs to distinguish payment cards and help customers without exposing complete primary account numbers to every agent.",
      application:
        "The API returns only brand and last four digits by default, authorizes exceptional reveal separately, masks logs before ingestion, uses irreversible synthetic test values, and audits access to originals.",
      phrase:
        "Data Masking shows only the last four digits; the support role has no need for the original card number.",
      aliases: ["data obfuscation", "value masking", "mascaramento de dados"],
      confusion:
        "Data Masking hides parts or substitutes representations for a use context; Encryption protects data with a key and normally restores the exact plaintext for authorized use.",
    }),
    "pt-BR": content({
      definition:
        "Data Masking é a transformação ou concealment seletivo de sensitive values para audience ou environment receber reduced representation preservando structure ou utility necessária.",
      purpose:
        "Ele minimiza exposure desnecessária em interfaces, logs, analytics, support, testing e data sharing conforme audience e use.",
      when: "Masque quando full values não forem necessários, definindo threat model, irreversibility ou controlled reveal, format, referential consistency, authorization e original protection.",
      context:
        "Um support dashboard distingue payment cards sem expor complete account numbers a cada agent.",
      application:
        "A API retorna brand e last four digits, autoriza reveal excepcional, mascara logs antes de ingestion, usa synthetic test values e audita originals.",
      phrase:
        "Data Masking mostra apenas últimos quatro dígitos; support role não precisa do card number original.",
      aliases: ["data obfuscation", "value masking", "mascaramento de dados"],
      confusion:
        "Data Masking oculta ou substitui representation por context; Encryption protege data com key e restaura exact plaintext.",
    }),
  },
  tokenization: {
    en: content({
      definition:
        "Tokenization is the replacement of a sensitive value with a non-sensitive surrogate token whose relationship to the original is maintained in a protected token service or produced by a controlled scheme.",
      purpose:
        "It reduces where sensitive data is stored and processed while letting authorized workflows reference the same underlying value without broadly exposing it.",
      when: "Use it for payment, identity, or regulated identifiers when systems need stable references but not plaintext, defining token domain, format, uniqueness, reversibility, access, vault isolation, lifecycle, and breach scope.",
      context:
        "An order platform needs to charge a stored card through a payment provider but should not retain the card number in its own database.",
      application:
        "The provider receives the card over a compliant channel and returns a merchant-scoped token; the platform stores only token and display metadata, restricts detokenization, rotates credentials, and handles token expiry.",
      phrase:
        "Store the provider Tokenization reference with last-four metadata, not the original card number.",
      aliases: ["data tokenization", "vault tokenization", "tokenização"],
      confusion:
        "Tokenization substitutes a reference whose mapping is separately controlled; Encryption mathematically transforms data into ciphertext recoverable with a key.",
    }),
    "pt-BR": content({
      definition:
        "Tokenization é a substituição de sensitive value por surrogate token não sensível cuja relação com original fica em protected token service ou controlled scheme.",
      purpose:
        "Ela reduz onde sensitive data é armazenada e processada, permitindo authorized workflows referenciá-la sem ampla exposição.",
      when: "Use-a em payment, identity ou regulated IDs quando systems precisam de stable references, definindo token domain, format, uniqueness, reversibility, access, vault isolation e lifecycle.",
      context:
        "Uma order platform cobra stored card por payment provider sem guardar card number no próprio database.",
      application:
        "Provider recebe card por compliant channel e devolve merchant-scoped token; platform guarda token e display metadata, restringe detokenization e trata expiry.",
      phrase:
        "Armazene a referência de Tokenization do provider e last-four metadata, não card number original.",
      aliases: ["data tokenization", "vault tokenization", "tokenização"],
      confusion:
        "Tokenization substitui por reference com mapping controlado; Encryption transforma data matematicamente em ciphertext recuperável com key.",
    }),
  },
  "penetration-test": {
    en: content({
      definition:
        "Penetration Test is an authorized, time-bounded security assessment in which skilled testers actively attempt to exploit realistic attack paths in a defined target and scope.",
      purpose:
        "It demonstrates whether vulnerabilities can be combined into meaningful impact and evaluates detection and response using evidence that automated identification alone cannot provide.",
      when: "Commission one for high-risk systems, major changes, regulatory needs, or periodic assurance, defining authorization, scope, rules of engagement, data handling, safety limits, contacts, reporting, remediation, and retest.",
      context:
        "A new financial portal exposes authentication, account, document, and payment workflows before public launch.",
      application:
        "Independent testers map the authorized surface, validate weaknesses without exceeding impact limits, preserve evidence, immediately escalate critical findings, explain attack chains, and retest fixes in the same environment.",
      phrase:
        "The Penetration Test may validate this authorization bypass only within the approved tenant and data-handling rules.",
      aliases: [
        "pentest",
        "authorized offensive assessment",
        "teste de penetração",
      ],
      confusion:
        "A Penetration Test actively validates exploitable paths in scope; a Vulnerability Scan primarily identifies suspected weaknesses through automated checks.",
    }),
    "pt-BR": content({
      definition:
        "Penetration Test é uma authorized, time-bounded security assessment em que testers tentam explorar realistic attack paths num target e scope definidos.",
      purpose:
        "Ele demonstra se vulnerabilities formam meaningful impact e avalia detection e response com evidence além de automated identification.",
      when: "Contrate-o para high-risk systems, major changes, regulation ou assurance periódica, definindo authorization, scope, rules of engagement, data handling, safety, reporting, remediation e retest.",
      context:
        "Um financial portal novo expõe authentication, account, document e payment workflows antes do public launch.",
      application:
        "Independent testers mapeiam authorized surface, validam weaknesses sob impact limits, preservam evidence, escalam critical findings, explicam attack chains e retestam fixes.",
      phrase:
        "O Penetration Test valida este authorization bypass somente dentro do tenant e data-handling rules aprovados.",
      aliases: [
        "pentest",
        "authorized offensive assessment",
        "teste de penetração",
      ],
      confusion:
        "Penetration Test valida exploitable paths ativamente; Vulnerability Scan identifica suspeitas principalmente por automated checks.",
    }),
  },
  "threat-modeling": {
    en: content({
      definition:
        "Threat Modeling is a structured process for identifying assets, trust boundaries, actors, attack paths, misuse cases, and security controls in a system design and its operating context.",
      purpose:
        "It finds security design risks early, makes assumptions explicit, and prioritizes mitigations according to credible threats and impact rather than applying a generic checklist.",
      when: "Perform it during architecture and whenever data flows, privileges, dependencies, deployment boundaries, or adversary exposure materially change; revisit it with incidents and new evidence.",
      context:
        "A document-sharing feature introduces external links, malware processing, tenant permissions, object storage, preview generation, and notification callbacks.",
      application:
        "The team diagrams flows and trust boundaries, classifies assets and attackers, walks spoofing, tampering, disclosure and abuse cases, records assumptions, assigns mitigations and tests, and tracks residual risk.",
      phrase:
        "Threat Modeling shows the preview worker crosses a tenant trust boundary, so object identity and authorization must be revalidated there.",
      aliases: [
        "security threat model",
        "adversarial design analysis",
        "modelagem de ameaças",
      ],
      confusion:
        "Threat Modeling analyzes credible threats and design before or during implementation; Risk Assessment is broader and also evaluates likelihood, impact, and treatment across organizational risks.",
    }),
    "pt-BR": content({
      definition:
        "Threat Modeling é um structured process para identificar assets, trust boundaries, actors, attack paths, misuse cases e security controls no system design e contexto operacional.",
      purpose:
        "Ela encontra security design risks cedo, explicita assumptions e prioriza mitigations conforme credible threats e impact, não por generic checklist.",
      when: "Faça-a durante architecture e quando data flows, privileges, dependencies, deployment boundaries ou adversary exposure mudarem; revise após incidents e evidence.",
      context:
        "Uma document-sharing feature introduz external links, malware processing, tenant permissions, object storage, preview generation e callbacks.",
      application:
        "O time diagrama flows e boundaries, classifica assets e attackers, percorre spoofing, tampering, disclosure e abuse cases, registra assumptions, mitigations, tests e residual risk.",
      phrase:
        "Threat Modeling mostra que preview worker cruza tenant trust boundary; identity e authorization precisam ser revalidadas ali.",
      aliases: [
        "security threat model",
        "adversarial design analysis",
        "modelagem de ameaças",
      ],
      confusion:
        "Threat Modeling analisa threats e design; Risk Assessment é mais amplo e avalia likelihood, impact e treatment de organizational risks.",
    }),
  },
  owasp: {
    en: content({
      definition:
        "OWASP, originally named the Open Worldwide Application Security Project, is a nonprofit open community that produces freely available application-security projects, guidance, tools, standards, and educational resources.",
      purpose:
        "It gives practitioners shared, vendor-neutral material for building, verifying, and operating secure software across many technologies and maturity levels.",
      when: "Use the specific OWASP project that matches the task, such as ASVS for verification requirements, SAMM for program maturity, Cheat Sheet Series for implementation guidance, or Top 10 for awareness.",
      context:
        "A team needs testable authentication and session requirements for a new application rather than only a list of common vulnerability categories.",
      application:
        "The security lead selects an appropriate ASVS level, maps relevant requirements to stories and tests, consults focused cheat sheets, records project versions, and treats guidance as an input to system-specific risk decisions.",
      phrase:
        "Use OWASP ASVS for verifiable controls here; the Top 10 alone is an awareness document, not a complete standard.",
      aliases: [
        "Open Worldwide Application Security Project",
        "OWASP Foundation",
        "projeto OWASP",
      ],
      confusion:
        "OWASP is the organization and ecosystem of projects; OWASP Top 10 is one awareness document produced within that ecosystem.",
    }),
    "pt-BR": content({
      definition:
        "OWASP, nome originado de Open Worldwide Application Security Project, é uma nonprofit open community que produz application-security projects, guidance, tools, standards e educational resources gratuitos.",
      purpose:
        "Ela oferece material shared e vendor-neutral para construir, verificar e operar secure software em várias technologies e maturity levels.",
      when: "Use o OWASP project adequado: ASVS para verification requirements, SAMM para program maturity, Cheat Sheet Series para implementation guidance ou Top 10 para awareness.",
      context:
        "Um time precisa de authentication e session requirements testáveis para nova app, não apenas lista de common vulnerability categories.",
      application:
        "Security lead escolhe ASVS level, mapeia requirements para stories e tests, consulta cheat sheets, registra project versions e adapta guidance ao system risk.",
      phrase:
        "Use OWASP ASVS para verifiable controls; Top 10 é awareness document, não standard completo.",
      aliases: [
        "Open Worldwide Application Security Project",
        "OWASP Foundation",
        "projeto OWASP",
      ],
      confusion:
        "OWASP é organization e project ecosystem; OWASP Top 10 é um awareness document desse ecossistema.",
    }),
  },
  "owasp-top-10": {
    en: content({
      definition:
        "OWASP Top 10 is an awareness document that summarizes ten broad categories of significant web-application security risk based on community data, research, and expert analysis for a published edition.",
      purpose:
        "It creates a common entry point for discussing prevalent and consequential application-security failures with developers, leaders, educators, and organizations.",
      when: "Use it for awareness, training, initial review, and communication, always naming the edition and supplementing it with threat modeling and comprehensive verification requirements suited to the application.",
      context:
        "A product team begins a secure-development program and needs a recognizable overview before adopting detailed engineering and verification controls.",
      application:
        "Training connects each edition category to product examples, the team maps relevant risks to its threat model, derives testable ASVS controls, records exceptions, and avoids declaring security merely because ten checks passed.",
      phrase:
        "Map this issue to the current OWASP Top 10 for communication, but remediate and verify the specific root cause and control.",
      aliases: [
        "OWASP Web Top Ten",
        "OWASP application risk list",
        "Top 10 da OWASP",
      ],
      confusion:
        "OWASP Top 10 is a prioritized awareness list of broad risk categories; OWASP ASVS is a larger set of testable application-security verification requirements.",
    }),
    "pt-BR": content({
      definition:
        "OWASP Top 10 é um awareness document que resume dez broad categories de web-application security risk com base em community data, research e expert analysis de uma edição publicada.",
      purpose:
        "Ele cria common entry point para discutir application-security failures prevalentes e relevantes com developers, leaders, educators e organizations.",
      when: "Use-o em awareness, training, initial review e communication, nomeando edition e complementando com threat modeling e comprehensive verification requirements.",
      context:
        "Um product team inicia secure-development program e precisa de overview reconhecível antes de detailed engineering controls.",
      application:
        "Training liga categories a product examples, time mapeia risks ao threat model, deriva testable ASVS controls e não declara security só porque dez checks passaram.",
      phrase:
        "Mapeie para a edição atual do OWASP Top 10 na comunicação, mas corrija e verifique root cause e control específicos.",
      aliases: [
        "OWASP Web Top Ten",
        "OWASP application risk list",
        "Top 10 da OWASP",
      ],
      confusion:
        "OWASP Top 10 é awareness list de broad risks; OWASP ASVS é conjunto maior de testable verification requirements.",
    }),
  },
  "security-audit": {
    en: content({
      definition:
        "Security Audit is a systematic, evidence-based examination of security controls, configurations, processes, records, and responsibilities against defined criteria and scope.",
      purpose:
        "It determines whether required controls are designed, implemented, operating, and evidenced as expected, and records gaps for accountable remediation.",
      when: "Conduct it for internal assurance, customers, certification, regulation, major change, or incidents, establishing independence, criteria, sampling period, evidence handling, findings, owners, deadlines, and follow-up.",
      context:
        "A platform claims privileged production access is approved, time-limited, logged, and reviewed, and an auditor must verify that claim across a defined period.",
      application:
        "The auditor samples access grants and logs, inspects policy and enforcement configuration, interviews owners, reproduces selected controls, grades findings by evidence and impact, and verifies corrective actions.",
      phrase:
        "The Security Audit needs operating evidence for the review period, not only a policy document describing the intended control.",
      aliases: [
        "information security audit",
        "control audit",
        "auditoria de segurança",
      ],
      confusion:
        "A Security Audit evaluates controls against criteria using evidence; a Penetration Test attempts exploitation of technical attack paths under rules of engagement.",
    }),
    "pt-BR": content({
      definition:
        "Security Audit é um exame systematic e evidence-based de security controls, configurations, processes, records e responsibilities contra criteria e scope definidos.",
      purpose:
        "Ela determina se required controls estão designed, implemented, operating e evidenciados, registrando gaps para accountable remediation.",
      when: "Conduza-a para internal assurance, customers, certification, regulation, major change ou incidents, definindo independence, criteria, sampling, evidence, findings, owners e follow-up.",
      context:
        "Uma platform afirma que privileged production access é approved, time-limited, logged e reviewed durante período definido.",
      application:
        "Auditor amostra access grants e logs, inspeciona policy e enforcement config, entrevista owners, reproduz controls, classifica findings e verifica corrective actions.",
      phrase:
        "Security Audit exige operating evidence do período, não apenas policy document com intended control.",
      aliases: [
        "information security audit",
        "control audit",
        "auditoria de segurança",
      ],
      confusion:
        "Security Audit avalia controls contra criteria; Penetration Test tenta explorar technical attack paths sob rules of engagement.",
    }),
  },
  compliance: {
    en: content({
      definition:
        "Compliance is the demonstrable state of meeting applicable laws, regulations, contractual commitments, standards, and internal policies within a defined scope and period.",
      purpose:
        "It translates external and organizational obligations into owned controls, operating evidence, exceptions, reporting, and corrective action that can be independently assessed.",
      when: "Manage it continuously wherever a product handles regulated data or enters governed markets, identifying obligations, scope, control owners, evidence, change monitoring, third parties, exceptions, and review cadence.",
      context:
        "A payment platform must show that cardholder data is limited, protected, monitored, and handled by trained personnel under its contractual and industry obligations.",
      application:
        "The organization maps each requirement to technical and procedural controls, assigns owners, automates evidence collection, tests operation, tracks gaps and compensating controls, reviews suppliers, and updates the map when systems or rules change.",
      phrase:
        "Compliance requires evidence that this access-review control operated throughout the period, not just that the policy exists today.",
      aliases: ["regulatory compliance", "control conformance", "conformidade"],
      confusion:
        "Compliance demonstrates adherence to defined obligations; Security manages risk and may require protections beyond, or different from, the minimum compliance baseline.",
    }),
    "pt-BR": content({
      definition:
        "Compliance é o estado demonstrável de cumprir laws, regulations, contractual commitments, standards e internal policies aplicáveis num scope e período definidos.",
      purpose:
        "Ela transforma obligations externas e organizacionais em owned controls, operating evidence, exceptions, reporting e corrective action avaliáveis independentemente.",
      when: "Gerencie-a continuamente onde product trata regulated data ou entra em governed markets, identificando obligations, scope, control owners, evidence, change monitoring, third parties e reviews.",
      context:
        "Uma payment platform demonstra que cardholder data é limitada, protegida, monitorada e tratada por pessoal treinado conforme obligations.",
      application:
        "A organization mapeia requirement a technical e procedural controls, atribui owners, automatiza evidence, testa operation, acompanha gaps, revisa suppliers e atualiza mapa.",
      phrase:
        "Compliance exige evidence de que access-review control operou no período, não apenas policy existente hoje.",
      aliases: ["regulatory compliance", "control conformance", "conformidade"],
      confusion:
        "Compliance demonstra adesão a obligations; Security gerencia risk e pode exigir protections além do minimum compliance baseline.",
    }),
  },
  "vulnerability-scan": {
    en: content({
      definition:
        "Vulnerability Scan is an automated examination of hosts, applications, images, dependencies, configurations, or code for signatures and patterns associated with known security weaknesses.",
      purpose:
        "It provides repeatable broad coverage and prioritization signals for finding likely exposures across changing assets, while requiring validation and remediation workflow.",
      when: "Run authenticated and unauthenticated scans as appropriate throughout build and operations, maintaining asset coverage, safe schedules, current signatures, ownership, deduplication, exception expiry, and rescans after fixes.",
      context:
        "A fleet contains hundreds of server images and packages, and newly disclosed vulnerabilities must be located before reachable instances are exploited.",
      application:
        "The scanner inventories assets and package versions, tests configuration safely, enriches findings with reachability and business criticality, validates suspected results, assigns deadlines, records justified exceptions, and rescans corrected targets.",
      phrase:
        "The Vulnerability Scan found a matching package version; validate reachability and patch the exposed instances before closing the finding.",
      aliases: [
        "vulnerability scanning",
        "automated weakness scan",
        "varredura de vulnerabilidades",
      ],
      confusion:
        "A Vulnerability Scan automates broad detection of suspected weaknesses; a Penetration Test uses human-led exploitation to validate attack paths and impact.",
    }),
    "pt-BR": content({
      definition:
        "Vulnerability Scan é um automated examination de hosts, applications, images, dependencies, configurations ou code por signatures e patterns de known security weaknesses.",
      purpose:
        "Ele fornece repeatable broad coverage e prioritization signals para provável exposure em assets variáveis, exigindo validation e remediation workflow.",
      when: "Execute authenticated e unauthenticated scans conforme o caso no build e operations, mantendo asset coverage, safe schedules, signatures atuais, ownership, exception expiry e rescans.",
      context:
        "Uma fleet possui centenas de server images e packages, e newly disclosed vulnerabilities precisam ser localizadas antes de exploitation.",
      application:
        "Scanner inventaria assets e versions, testa config com segurança, enriquece findings com reachability e business criticality, valida results, atribui deadlines e rescaneia fixes.",
      phrase:
        "Vulnerability Scan encontrou package version correspondente; valide reachability e corrija exposed instances antes de fechar finding.",
      aliases: [
        "vulnerability scanning",
        "automated weakness scan",
        "varredura de vulnerabilidades",
      ],
      confusion:
        "Vulnerability Scan automatiza broad detection; Penetration Test usa human-led exploitation para validar attack paths e impact.",
    }),
  },
};
