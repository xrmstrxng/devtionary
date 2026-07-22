import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const frontendEditorialOverrides: Record<string, EditorialPair> = {
  frontend: {
    en: content({
      definition:
        "Frontend is the part of a software product that runs in or directly presents the user-facing experience, handling interface structure, interaction, visual behavior, and access to application services.",
      purpose:
        "It translates product capabilities and data into an accessible, responsive, understandable experience across browsers, devices, and other client environments.",
      when: "Use frontend technologies for presentation and interaction close to the user, while deciding deliberately which rendering, validation, security, and business responsibilities belong elsewhere.",
      context:
        "A banking application must show balances, guide transfers, validate immediate input, manage navigation, and communicate securely with account APIs.",
      application:
        "Frontend engineers implement semantic components, state and interaction, responsive layout, accessibility, error handling, performance, telemetry, and API integration.",
      phrase:
        "The Frontend should explain the failed transfer and preserve safe form state, while the Backend remains authoritative for account rules.",
      aliases: [
        "front end",
        "front-end",
        "client frontend",
        "camada de interface",
      ],
      confusion:
        "Frontend owns the user-facing client experience; Backend provides server-side rules, data, integrations, and capabilities consumed by clients.",
    }),
    "pt-BR": content({
      definition:
        "Frontend é a parte do software que executa ou apresenta diretamente a experiência do usuário, tratando estrutura da interface, interaction, visual e acesso a serviços.",
      purpose:
        "Ele traduz capabilities e dados em experiência acessível, responsiva e compreensível entre browsers, devices e outros client environments.",
      when: "Use frontend para apresentação e interaction próximas do usuário, decidindo quais responsabilidades de rendering, validation, security e business ficam em outro lugar.",
      context:
        "Um banking app exibe saldos, orienta transferências, valida input imediato, administra navigation e conversa com account APIs.",
      application:
        "Frontend engineers implementam semantic components, state e interaction, responsive layout, accessibility, errors, performance, telemetry e API integration.",
      phrase:
        "O Frontend explica a transferência falha e preserva form state seguro; o Backend continua autoritativo para account rules.",
      aliases: [
        "front end",
        "front-end",
        "client frontend",
        "camada de interface",
      ],
      confusion:
        "Frontend cuida da experiência client-facing; Backend fornece regras server-side, dados, integrations e capabilities consumidas pelos clients.",
    }),
  },
  backend: {
    en: content({
      definition:
        "Backend is the server-side portion of a software system that implements application capabilities, domain rules, data access, integrations, security enforcement, and operational processing behind client interfaces.",
      purpose:
        "It provides authoritative, reusable services and durable state while protecting resources and coordinating work that cannot safely or reliably depend on a user's device.",
      when: "Use Backend execution for trusted business rules, shared data, privileged operations, asynchronous work, and integrations that require controlled infrastructure or secrets.",
      context:
        "A commerce application must price orders, reserve stock, authorize payments, persist transactions, and notify fulfillment regardless of the client used.",
      application:
        "Backend services validate authorization and invariants, execute transactions and workflows, call payment and inventory systems, emit events, and expose versioned APIs.",
      phrase:
        "The client may estimate the total for responsiveness, but the Backend recalculates and authorizes the final order.",
      aliases: ["back end", "back-end", "server backend", "camada de servidor"],
      confusion:
        "Backend implements server-side capabilities and authority; a database specifically persists and retrieves data and is only one possible backend component.",
    }),
    "pt-BR": content({
      definition:
        "Backend é a porção server-side que implementa capabilities, domain rules, data access, integrations, security enforcement e processamento por trás dos clients.",
      purpose:
        "Ele fornece serviços autoritativos e reutilizáveis e state durável, protegendo recursos e coordenando trabalho que não deve depender do device do usuário.",
      when: "Use Backend para business rules confiáveis, dados compartilhados, operações privilegiadas, trabalho assíncrono e integrations com infraestrutura controlada.",
      context:
        "Um commerce app precifica pedidos, reserva estoque, autoriza pagamentos, persiste transações e notifica fulfillment independentemente do client.",
      application:
        "Backend services validam authorization e invariants, executam transactions e workflows, chamam pagamentos e estoque, emitem events e expõem APIs versionadas.",
      phrase:
        "O client pode estimar o total, mas o Backend recalcula e autoriza o pedido final.",
      aliases: ["back end", "back-end", "server backend", "camada de servidor"],
      confusion:
        "Backend implementa capabilities e autoridade server-side; database persiste e recupera dados e é apenas um possível componente do backend.",
    }),
  },
  "full-stack": {
    en: content({
      definition:
        "Full Stack describes engineering work or capability spanning multiple layers of an application, commonly the user interface, server-side services, data persistence, and their integration.",
      purpose:
        "It enables end-to-end changes and reasoning across boundaries so a feature can be designed, implemented, tested, and operated without rigid specialization handoffs.",
      when: "Use the term to state actual stack breadth and expected depth, recognizing that one engineer need not be equally expert in every technology or operational concern.",
      context:
        "A small product team needs to add subscription controls across React screens, API authorization, billing webhooks, and database records.",
      application:
        "A Full Stack engineer traces the workflow end to end, changes the interface and service contract, migrates data, adds tests and telemetry, and coordinates specialist review.",
      phrase:
        "This Full Stack change crosses UI, API, database, and billing integration, but Security still reviews the authorization model.",
      aliases: [
        "fullstack",
        "full-stack development",
        "end-to-end application development",
        "pilha completa",
      ],
      confusion:
        "Full Stack indicates breadth across application layers; generalist describes broad capability more generally and may extend beyond one software stack.",
    }),
    "pt-BR": content({
      definition:
        "Full Stack descreve trabalho ou capacidade de engineering que atravessa camadas da aplicação, normalmente interface, serviços server-side, persistence e integração.",
      purpose:
        "Ele permite mudanças e raciocínio end-to-end entre boundaries para feature ser projetada, implementada, testada e operada sem handoffs rígidos.",
      when: "Use o termo declarando amplitude real da stack e profundidade esperada, sem presumir que uma pessoa seja igualmente especialista em toda tecnologia.",
      context:
        "Um product team pequeno adiciona controles de assinatura em telas React, API authorization, billing webhooks e registros de database.",
      application:
        "Uma Full Stack engineer acompanha workflow ponta a ponta, muda interface e contract, migra dados, adiciona testes e telemetry e coordena specialist review.",
      phrase:
        "Esta mudança Full Stack cruza UI, API, database e billing integration, mas Security ainda revisa authorization model.",
      aliases: [
        "fullstack",
        "full-stack development",
        "end-to-end application development",
        "pilha completa",
      ],
      confusion:
        "Full Stack indica amplitude entre application layers; generalist descreve capacidade ampla de modo geral e pode ir além de uma software stack.",
    }),
  },
  "client-side": {
    en: content({
      definition:
        "Client-side describes computation, state, validation, rendering, or storage performed in the user's client environment, such as a web browser or native application.",
      purpose:
        "It enables immediate interaction, local presentation, offline capability, and reduced server round trips while using the client's resources and context.",
      when: "Place behavior Client-side when proximity improves experience and the operation remains safe under an untrusted, variable, user-controlled environment.",
      context:
        "A web form should reveal formatting errors immediately and preserve an unfinished draft during a temporary network interruption.",
      application:
        "JavaScript validates presentation constraints and stores a local draft, but sends submission to the server for authorization and authoritative validation.",
      phrase:
        "Client-side validation improves feedback, but it cannot enforce the payment rule because the browser can be modified.",
      aliases: ["client side", "on the client", "lado do cliente"],
      confusion:
        "Client-side means execution in a consuming client environment; Frontend is the broader user-facing layer and may include server-rendered work.",
    }),
    "pt-BR": content({
      definition:
        "Client-side descreve computação, state, validation, rendering ou storage executados no client environment do usuário, como browser ou native app.",
      purpose:
        "Ele permite interaction imediata, apresentação local, offline capability e menos server round trips usando recursos e contexto do client.",
      when: "Coloque comportamento Client-side quando proximidade melhorar a experiência e a operação permanecer segura num ambiente não confiável e controlado pelo usuário.",
      context:
        "Um web form deve mostrar erros de formatação imediatamente e preservar draft durante interrupção temporária de rede.",
      application:
        "JavaScript valida constraints de apresentação e guarda draft local, mas envia submission ao server para authorization e validação autoritativa.",
      phrase:
        "Client-side validation melhora feedback, mas não impõe payment rule porque o browser pode ser modificado.",
      aliases: ["client side", "on the client", "lado do cliente"],
      confusion:
        "Client-side significa execução no client consumidor; Frontend é a camada user-facing mais ampla e pode incluir server rendering.",
    }),
  },
  "server-side": {
    en: content({
      definition:
        "Server-side describes computation, rendering, validation, storage, or coordination performed on infrastructure controlled by a service provider rather than on the user's client.",
      purpose:
        "It centralizes authoritative behavior, protects privileged resources, accesses shared data, and provides consistent execution independent of client capability.",
      when: "Place behavior Server-side when it requires trust, secrets, shared state, controlled resources, heavy processing, consistency, or protection from client manipulation.",
      context:
        "A checkout must confirm inventory, calculate tax, apply entitlement rules, and create a payment intent without exposing credentials or trusting browser values.",
      application:
        "The server authenticates the request, retrieves current data, enforces domain rules, calls protected integrations, persists the result, and returns a safe response.",
      phrase:
        "Keep discount authorization Server-side even if the client previews the price, because request values are not trustworthy.",
      aliases: ["server side", "on the server", "lado do servidor"],
      confusion:
        "Server-side means execution on controlled service infrastructure; Backend is a broader architectural area that commonly contains such execution.",
    }),
    "pt-BR": content({
      definition:
        "Server-side descreve computação, rendering, validation, storage ou coordenação em infraestrutura controlada pelo provider, não no client do usuário.",
      purpose:
        "Ele centraliza comportamento autoritativo, protege recursos privilegiados, acessa state compartilhado e executa consistentemente independentemente do client.",
      when: "Coloque comportamento Server-side quando exigir trust, secrets, shared state, recursos controlados, processamento pesado, consistência ou proteção contra manipulação.",
      context:
        "Um checkout confirma inventory, calcula tax, aplica entitlement rules e cria payment intent sem expor credentials nem confiar no browser.",
      application:
        "O server autentica request, obtém dados atuais, aplica domain rules, chama integrations protegidas, persiste resultado e retorna response segura.",
      phrase:
        "Mantenha discount authorization Server-side mesmo com preview no client, pois request values não são confiáveis.",
      aliases: ["server side", "on the server", "lado do servidor"],
      confusion:
        "Server-side significa execução em infraestrutura controlada; Backend é uma área arquitetural mais ampla que normalmente a contém.",
    }),
  },
  rendering: {
    en: content({
      definition:
        "Rendering is the process of transforming application data, component structure, styles, and state into a visual or otherwise perceivable interface representation.",
      purpose:
        "It produces the output users can perceive and interact with, connecting logical UI descriptions to browser documents, pixels, accessibility trees, or native views.",
      when: "Reason about Rendering when choosing where and when interface output is produced, updated, streamed, cached, or hydrated for experience, performance, and operability.",
      context:
        "A product page must turn route data and components into HTML and visual layout, then update the price when the selected variant changes.",
      application:
        "The framework renders initial component output on the server and later rerenders affected client subtrees when local state changes.",
      phrase:
        "Rendering the whole list after every keystroke is unnecessary; isolate state so only the filtered result updates.",
      aliases: ["ui rendering", "interface rendering", "renderização"],
      confusion:
        "Rendering creates interface output; painting is the browser step that fills pixels after style, layout, and compositing decisions.",
    }),
    "pt-BR": content({
      definition:
        "Rendering é o processo de transformar dados, component structure, styles e state numa representação visual ou perceptível da interface.",
      purpose:
        "Ele produz o output percebido e usado por pessoas, conectando descrições lógicas da UI a documentos, pixels, accessibility trees ou native views.",
      when: "Analise Rendering ao escolher onde e quando output da interface é produzido, atualizado, streamed, cached ou hydrated por experiência e performance.",
      context:
        "Uma product page transforma route data e components em HTML e layout e atualiza preço quando a variante selecionada muda.",
      application:
        "O framework renderiza output inicial dos components no server e depois rerenderiza subtrees afetadas quando local state muda.",
      phrase:
        "Rendering da lista inteira a cada tecla é desnecessário; isole state para atualizar somente o resultado filtrado.",
      aliases: ["ui rendering", "interface rendering", "renderização"],
      confusion:
        "Rendering cria output da interface; painting é a etapa do browser que preenche pixels após style, layout e compositing.",
    }),
  },
  "client-side-rendering": {
    en: content({
      definition:
        "Client-Side Rendering is a web rendering approach in which browser-executed JavaScript creates or substantially assembles page content after receiving an initial document and application assets.",
      purpose:
        "It supports rich in-browser navigation and interaction by letting the client fetch data and update the interface without requesting a complete HTML page for every transition.",
      when: "Use CSR for highly interactive experiences where client capability and post-load navigation matter, while addressing initial load, resilience, accessibility, caching, and search needs.",
      context:
        "An internal analytics application loads a shell, authenticates the user, fetches dashboard data, and switches views frequently without full document navigation.",
      application:
        "The server delivers minimal HTML and JavaScript bundles; the browser runs the application, requests authorized data, and renders components as routes and state change.",
      phrase:
        "With Client-Side Rendering, users must download and execute enough JavaScript before the dashboard content appears.",
      aliases: [
        "csr",
        "client rendered",
        "browser rendering",
        "renderização no cliente",
      ],
      confusion:
        "Client-Side Rendering builds primary content in the browser; hydration attaches client behavior to HTML already rendered by a server or build process.",
    }),
    "pt-BR": content({
      definition:
        "Client-Side Rendering é uma abordagem web em que JavaScript executado no browser cria ou monta substancialmente o conteúdo após receber documento inicial e assets.",
      purpose:
        "Ela permite navigation e interaction ricas no browser ao buscar dados e atualizar interface sem solicitar página HTML completa em cada transição.",
      when: "Use CSR em experiências muito interativas onde client capability e navigation após load importem, tratando initial load, resilience, accessibility, cache e search.",
      context:
        "Um analytics app interno carrega shell, autentica usuário, busca dashboard data e troca views sem full document navigation.",
      application:
        "O server entrega HTML mínimo e JavaScript bundles; o browser executa app, solicita dados autorizados e renderiza components conforme routes e state.",
      phrase:
        "Com Client-Side Rendering, é preciso baixar e executar JavaScript suficiente antes de o dashboard aparecer.",
      aliases: [
        "csr",
        "client rendered",
        "browser rendering",
        "renderização no cliente",
      ],
      confusion:
        "Client-Side Rendering constrói conteúdo primário no browser; hydration conecta comportamento client a HTML já renderizado no server ou build.",
    }),
  },
  "server-side-rendering": {
    en: content({
      definition:
        "Server-Side Rendering is a web rendering approach in which a server generates HTML for a request before sending the document to the client.",
      purpose:
        "It can provide useful content before client JavaScript runs and supports request-specific data, metadata, access control, and predictable initial document output.",
      when: "Use SSR when content depends on each request or authenticated context and fast initial presentation or crawlable HTML justifies server computation and caching complexity.",
      context:
        "A commerce product page needs current regional price, availability, localization, and metadata in the initial response.",
      application:
        "The server resolves route and request context, fetches data, renders components to HTML, streams or returns the document, and may provide data for hydration.",
      phrase:
        "Server-Side Rendering gives the browser product HTML immediately, but every uncached request consumes server rendering capacity.",
      aliases: [
        "ssr",
        "server rendered",
        "dynamic server rendering",
        "renderização no servidor",
      ],
      confusion:
        "Server-Side Rendering produces HTML per request; Static Site Generation produces HTML ahead of requests during a build or generation step.",
    }),
    "pt-BR": content({
      definition:
        "Server-Side Rendering é uma abordagem web em que o server gera HTML para um request antes de enviar o documento ao client.",
      purpose:
        "Ela fornece conteúdo útil antes do JavaScript client e suporta dados por request, metadata, access control e output inicial previsível.",
      when: "Use SSR quando conteúdo depender de request ou authenticated context e apresentação inicial ou crawlable HTML justificar computação e cache no server.",
      context:
        "Uma commerce page precisa de preço regional, availability, localization e metadata atuais na response inicial.",
      application:
        "O server resolve route e request context, busca dados, renderiza components em HTML, envia documento e pode fornecer dados para hydration.",
      phrase:
        "Server-Side Rendering entrega HTML do produto imediatamente, mas cada request sem cache consome rendering capacity do server.",
      aliases: [
        "ssr",
        "server rendered",
        "dynamic server rendering",
        "renderização no servidor",
      ],
      confusion:
        "Server-Side Rendering produz HTML por request; Static Site Generation produz HTML antes dos requests durante build ou generation.",
    }),
  },
  "static-site-generation": {
    en: content({
      definition:
        "Static Site Generation is a rendering approach that produces HTML and related assets ahead of user requests, usually during a build or content generation process.",
      purpose:
        "It enables fast, cache-friendly delivery from static hosting or a content delivery network without computing the page for every visit.",
      when: "Use SSG when content can be known before requests and its update frequency, build duration, page count, personalization, and freshness requirements are compatible.",
      context:
        "A documentation site has thousands of versioned pages that change when source content is merged, not uniquely for each visitor.",
      application:
        "The build reads documentation data, renders each route to HTML, emits assets, and deploys them to a CDN that serves identical documents until the next generation.",
      phrase:
        "Static Site Generation makes documentation reads inexpensive, but a content change is not visible until regeneration and deployment.",
      aliases: [
        "ssg",
        "static generation",
        "pre-rendering",
        "geração de site estático",
      ],
      confusion:
        "Static Site Generation creates pages ahead of traffic; a traditional static site may consist of manually authored files without an application generation step.",
    }),
    "pt-BR": content({
      definition:
        "Static Site Generation é uma abordagem de rendering que produz HTML e assets antes dos user requests, normalmente durante build ou geração de conteúdo.",
      purpose:
        "Ela permite entrega rápida e cache-friendly por static hosting ou CDN sem calcular a página a cada visita.",
      when: "Use SSG quando conteúdo puder ser conhecido antes e update frequency, build duration, page count, personalization e freshness forem compatíveis.",
      context:
        "Um documentation site possui milhares de páginas versionadas que mudam quando source content recebe merge, não por visitante.",
      application:
        "O build lê dados, renderiza cada route em HTML, emite assets e os publica em CDN que serve documentos iguais até a próxima geração.",
      phrase:
        "Static Site Generation barateia leitura da documentação, mas mudanças só aparecem após regeneration e deployment.",
      aliases: [
        "ssg",
        "static generation",
        "pre-rendering",
        "geração de site estático",
      ],
      confusion:
        "Static Site Generation cria páginas antes do tráfego; site estático tradicional pode ter arquivos manuais sem etapa de application generation.",
    }),
  },
  "incremental-static-regeneration": {
    en: content({
      definition:
        "Incremental Static Regeneration is a framework pattern that updates statically generated pages individually after deployment, commonly using time-based or on-demand revalidation.",
      purpose:
        "It preserves cacheable static delivery while allowing content to become fresh without rebuilding and redeploying the entire site for every change.",
      when: "Use ISR for many cacheable pages whose freshness can follow a revalidation policy, accounting for stale windows, concurrent regeneration, invalidation, and platform behavior.",
      context:
        "A catalog has hundreds of thousands of product pages whose prices update throughout the day, making full rebuilds too slow.",
      application:
        "Pages are served from cache; after a revalidation threshold or content event, the platform regenerates an affected route and replaces the cached output.",
      phrase:
        "Incremental Static Regeneration avoids a full catalog build, but customers may see cached data until the route is revalidated.",
      aliases: [
        "isr",
        "incremental regeneration",
        "incremental static generation",
        "regeneração estática incremental",
      ],
      confusion:
        "Incremental Static Regeneration refreshes cached static pages after deployment; SSR renders a response for each request unless separately cached.",
    }),
    "pt-BR": content({
      definition:
        "Incremental Static Regeneration é um pattern de framework que atualiza páginas estáticas individualmente após deployment, geralmente por revalidation temporal ou on-demand.",
      purpose:
        "Ela preserva entrega estática cacheable e atualiza conteúdo sem reconstruir e publicar todo o site a cada mudança.",
      when: "Use ISR em muitas páginas cacheable cuja freshness possa seguir revalidation policy, considerando stale window, concorrência, invalidation e comportamento da platform.",
      context:
        "Um catálogo tem centenas de milhares de product pages com preços atualizados ao longo do dia, tornando full rebuild lento.",
      application:
        "Pages saem do cache; após threshold ou content event, a platform regenera a route afetada e substitui o output cached.",
      phrase:
        "Incremental Static Regeneration evita full catalog build, mas clientes podem ver cache antigo até revalidation da route.",
      aliases: [
        "isr",
        "incremental regeneration",
        "incremental static generation",
        "regeneração estática incremental",
      ],
      confusion:
        "Incremental Static Regeneration atualiza páginas estáticas cached após deployment; SSR renderiza por request sem cache separado.",
    }),
  },
  hydration: {
    en: content({
      definition:
        "Hydration is the client-side process of attaching application logic, event handling, and framework state to HTML that was already rendered on a server or during static generation.",
      purpose:
        "It turns initially visible markup into an interactive application while reusing the existing DOM instead of rebuilding the entire document from nothing.",
      when: "Use Hydration with server-rendered interactive interfaces, ensuring server and client output match and limiting client JavaScript to the areas that need behavior.",
      context:
        "A product page arrives as complete HTML and is readable immediately, but its variant selector cannot update price until client behavior loads.",
      application:
        "The browser loads the component code, reconstructs the expected tree, associates it with existing DOM nodes, and registers interactions and state.",
      phrase:
        "The page painted before Hydration, but the purchase control became interactive only after its client bundle executed.",
      aliases: ["client hydration", "react hydration", "hidratação"],
      confusion:
        "Hydration activates pre-rendered HTML; Client-Side Rendering creates primary interface content in the browser without relying on matching pre-rendered markup.",
    }),
    "pt-BR": content({
      definition:
        "Hydration é o processo client-side que conecta application logic, event handling e framework state a HTML já renderizado no server ou em static generation.",
      purpose:
        "Ela transforma markup inicialmente visível em aplicação interativa reutilizando o DOM existente em vez de reconstruir todo o documento.",
      when: "Use Hydration em interfaces server-rendered interativas, garantindo correspondência entre outputs server e client e limitando JavaScript às áreas necessárias.",
      context:
        "Uma product page chega como HTML completo, mas seu variant selector não atualiza preço até carregar comportamento client.",
      application:
        "O browser carrega component code, reconstrói a árvore esperada, associa-a aos DOM nodes existentes e registra interactions e state.",
      phrase:
        "A page apareceu antes da Hydration, mas o purchase control só ficou interativo depois do client bundle.",
      aliases: ["client hydration", "react hydration", "hidratação"],
      confusion:
        "Hydration ativa HTML pré-renderizado; Client-Side Rendering cria conteúdo primário no browser sem depender de markup correspondente.",
    }),
  },
  dom: {
    en: content({
      definition:
        "Document Object Model is the browser-provided tree-shaped programming representation of an HTML or XML document, exposing nodes, properties, events, and mutation operations.",
      purpose:
        "It lets scripts and developer tools inspect and change document structure, content, attributes, styles, and event behavior through standardized interfaces.",
      when: "Use DOM APIs when interacting with the actual document environment, while allowing UI frameworks to manage nodes they own to avoid conflicting updates.",
      context:
        "A dialog component must move keyboard focus to its title, listen for Escape, update accessibility attributes, and restore focus when closed.",
      application:
        "The component obtains relevant elements, calls focus, registers and removes event listeners, and updates ARIA attributes through DOM interfaces.",
      phrase:
        "The DOM node exists after commit, so move focus in the lifecycle phase that runs after rendering.",
      aliases: [
        "document object model",
        "document tree",
        "modelo de objeto do documento",
      ],
      confusion:
        "The DOM is the browser's live document representation; the HTML source is serialized text used to create or update that representation.",
    }),
    "pt-BR": content({
      definition:
        "Document Object Model é a representação em árvore fornecida pelo browser para um documento HTML ou XML, expondo nodes, properties, events e mutation operations.",
      purpose:
        "Ele permite que scripts e devtools inspecionem e alterem estrutura, conteúdo, atributos, styles e eventos por interfaces padronizadas.",
      when: "Use DOM APIs ao interagir com o document environment real, deixando frameworks administrarem os nodes que possuem para evitar updates conflitantes.",
      context:
        "Um dialog component move keyboard focus ao título, escuta Escape, atualiza accessibility attributes e restaura focus ao fechar.",
      application:
        "O component obtém elements, chama focus, registra e remove event listeners e atualiza ARIA attributes por interfaces do DOM.",
      phrase:
        "O DOM node existe após commit; mova focus na lifecycle phase posterior ao rendering.",
      aliases: [
        "document object model",
        "document tree",
        "modelo de objeto do documento",
      ],
      confusion:
        "DOM é a representação viva do documento no browser; HTML source é texto serializado usado para criá-la ou atualizá-la.",
    }),
  },
  "virtual-dom": {
    en: content({
      definition:
        "A Virtual DOM is an in-memory representation of a desired interface tree that a UI library compares across renders to determine updates to the host environment such as the browser DOM.",
      purpose:
        "It lets developers describe UI declaratively while the library reconciles tree changes and batches the necessary host operations.",
      when: "Use it through frameworks that adopt the model, designing stable identity and pure rendering while measuring actual performance rather than assuming every abstraction is faster.",
      context:
        "A list component receives new data and the framework must preserve unchanged rows, reorder others, and add one item without manually scripting each DOM mutation.",
      application:
        "The component produces a new virtual tree; reconciliation uses element types and keys to match children and commits only the required host changes.",
      phrase:
        "Stable keys help Virtual DOM reconciliation preserve each row's identity when the list is reordered.",
      aliases: ["vdom", "virtual document object model", "dom virtual"],
      confusion:
        "Virtual DOM is a library-level in-memory representation; Shadow DOM is a browser feature that encapsulates a real DOM subtree and styles.",
    }),
    "pt-BR": content({
      definition:
        "Virtual DOM é uma representação em memória da interface desejada que uma UI library compara entre renders para decidir updates no ambiente real, como o DOM.",
      purpose:
        "Ele permite descrever UI declarativamente enquanto a library reconcilia mudanças da árvore e agrupa host operations necessárias.",
      when: "Use-o por frameworks que adotam o modelo, projetando identity estável e pure rendering e medindo performance real sem presumir que toda abstração é mais rápida.",
      context:
        "Um list component recebe dados novos e precisa preservar rows iguais, reordenar outras e adicionar item sem scripting manual de cada DOM mutation.",
      application:
        "O component produz nova virtual tree; reconciliation usa element types e keys para parear children e comita somente host changes necessárias.",
      phrase:
        "Keys estáveis ajudam Virtual DOM reconciliation a preservar identity de cada row na reordenação.",
      aliases: ["vdom", "virtual document object model", "dom virtual"],
      confusion:
        "Virtual DOM é representação em memória de uma library; Shadow DOM é feature do browser que encapsula subtree real e styles.",
    }),
  },
  component: {
    en: content({
      definition:
        "A Component is a bounded, reusable unit of an interface that encapsulates a recognizable responsibility through structure, behavior, styling, state, and a defined input-output contract.",
      purpose:
        "It decomposes interfaces into understandable parts, supports composition and reuse, and gives design, behavior, testing, and ownership a stable boundary.",
      when: "Create one around a coherent UI concept or behavior that benefits from an explicit contract, avoiding fragmentation into wrappers that add no meaningful responsibility.",
      context:
        "Several product screens need an accessible date-range selector with consistent validation, keyboard behavior, formatting, and visual states.",
      application:
        "The team builds a DateRangePicker with typed props, controlled and default modes, accessible semantics, events, style variants, tests, and documentation.",
      phrase:
        "Keep parsing and keyboard behavior inside the Component, but let its consumer own what the selected date range means to the report.",
      aliases: [
        "ui component",
        "frontend component",
        "interface component",
        "componente",
      ],
      confusion:
        "A Component is a composable interface unit; a page represents a route-level experience and commonly composes many components.",
    }),
    "pt-BR": content({
      definition:
        "Component é uma unidade delimitada e reutilizável de interface que encapsula responsabilidade reconhecível por estrutura, behavior, styling, state e contrato de inputs e outputs.",
      purpose:
        "Ele decompõe interfaces em partes compreensíveis, permite composition e reuse e cria boundary estável para design, behavior, testing e ownership.",
      when: "Crie-o para um conceito ou comportamento coerente de UI que se beneficie de contrato explícito, evitando wrappers sem responsabilidade significativa.",
      context:
        "Várias telas precisam de date-range selector acessível com validation, keyboard behavior, formatting e visual states consistentes.",
      application:
        "O time cria DateRangePicker com typed props, modos controlled e default, semantics acessíveis, events, style variants, tests e documentation.",
      phrase:
        "Mantenha parsing e keyboard behavior no Component, mas deixe o consumer definir o significado do date range no relatório.",
      aliases: [
        "ui component",
        "frontend component",
        "interface component",
        "componente",
      ],
      confusion:
        "Component é unidade componível de interface; page representa experiência de route e normalmente compõe muitos components.",
    }),
  },
  state: {
    en: content({
      definition:
        "State is the information retained at a point in time that can influence a system's current behavior, output, or future transitions.",
      purpose:
        "It represents changing facts such as selection, identity, data, progress, and errors so behavior can remain coherent across events and renders.",
      when: "Store State when information must persist across operations, placing it in the narrowest authoritative owner and deriving values that need not be stored separately.",
      context:
        "A checkout must remember the selected address, current step, validated cart, pending submission, and any returned payment error.",
      application:
        "The UI keeps temporary interaction state locally, reads server-owned cart state through a data layer, and derives totals instead of duplicating them.",
      phrase:
        "Do not copy the total into local State; derive it from the authoritative cart so the two values cannot drift.",
      aliases: ["application state", "ui state", "system state", "estado"],
      confusion:
        "State changes over time and influences behavior; configuration supplies intended operating parameters and usually changes through a different lifecycle.",
    }),
    "pt-BR": content({
      definition:
        "State é a informação retida num ponto do tempo que influencia behavior atual, output ou futuras transitions de um sistema.",
      purpose:
        "Ele representa fatos mutáveis como seleção, identity, dados, progresso e errors para behavior permanecer coerente entre events e renders.",
      when: "Armazene State quando informação precisar persistir entre operações, colocando-a no owner autoritativo mais estreito e derivando valores redundantes.",
      context:
        "Um checkout lembra address selecionado, step atual, cart validado, submission pendente e payment error retornado.",
      application:
        "A UI mantém interaction state local, lê server-owned cart state por data layer e deriva totals em vez de duplicá-los.",
      phrase:
        "Não copie total para local State; derive do cart autoritativo para os valores não divergirem.",
      aliases: ["application state", "ui state", "system state", "estado"],
      confusion:
        "State muda ao longo do tempo e influencia behavior; configuration fornece operating parameters e normalmente muda por outro lifecycle.",
    }),
  },
  props: {
    en: content({
      definition:
        "Props are the read-only inputs a parent or caller passes to a UI component to configure its data, behavior, appearance, composition, or event callbacks.",
      purpose:
        "They form the component's external contract, enabling reuse and predictable one-way data flow while keeping the consumer in control of supplied values.",
      when: "Use Props for values and callbacks owned outside a component, designing a focused typed interface and avoiding flags whose combinations create ambiguous modes.",
      context:
        "A Button must display different labels and visual variants, support disabled state, and notify its parent when activated.",
      application:
        "The component accepts children, variant, disabled, and onPress props, renders from them without mutation, and delegates the resulting action to the consumer.",
      phrase:
        "Pass the current selection as Props when the parent owns it; do not copy it into local state without a synchronization reason.",
      aliases: [
        "component props",
        "component properties",
        "react props",
        "propriedades do componente",
      ],
      confusion:
        "Props are external read-only component inputs; State is retained, changing information owned by a component or another state authority.",
    }),
    "pt-BR": content({
      definition:
        "Props são inputs read-only passados por parent ou caller a um UI component para configurar dados, behavior, appearance, composition ou event callbacks.",
      purpose:
        "Elas formam o contrato externo do component, permitindo reuse e one-way data flow previsível enquanto o consumer controla os valores fornecidos.",
      when: "Use Props para valores e callbacks com ownership externo, criando interface tipada e focada e evitando flags cujas combinações criem modos ambíguos.",
      context:
        "Um Button exibe labels e visual variants diferentes, suporta disabled state e notifica parent quando acionado.",
      application:
        "O component aceita children, variant, disabled e onPress props, renderiza sem mutá-las e delega a action ao consumer.",
      phrase:
        "Passe selection atual por Props quando o parent for owner; não copie para local state sem motivo de sincronização.",
      aliases: [
        "component props",
        "component properties",
        "react props",
        "propriedades do componente",
      ],
      confusion:
        "Props são inputs externos read-only; State é informação mutável retida por component ou outra autoridade.",
    }),
  },
  hook: {
    en: content({
      definition:
        "A Hook is a framework-provided or custom function that lets component code use stateful behavior, lifecycle integration, context, or reusable logic through defined calling rules.",
      purpose:
        "It composes state-related capabilities and shares behavioral logic without requiring class inheritance or duplicating lifecycle coordination across components.",
      when: "Use Hooks within the framework's execution model, extracting a custom Hook when several components share a coherent stateful concern rather than merely repeated syntax.",
      context:
        "Several React components need to subscribe to network status, update when connectivity changes, and remove the listener when no longer used.",
      application:
        "A custom useOnlineStatus Hook owns subscription and cleanup logic and returns the current status while each component decides how to present it.",
      phrase:
        "Call the Hook unconditionally at the component's top level so React can preserve call order between renders.",
      aliases: ["react hook", "custom hook", "lifecycle hook", "gancho"],
      confusion:
        "A Hook connects reusable logic to a framework lifecycle or state model; a general utility function has no such integration or calling constraints.",
    }),
    "pt-BR": content({
      definition:
        "Hook é uma função de framework ou customizada que permite ao component usar stateful behavior, lifecycle integration, context ou lógica reutilizável sob regras definidas.",
      purpose:
        "Ele compõe capabilities ligadas a state e compartilha behavioral logic sem class inheritance nem duplicação de lifecycle coordination.",
      when: "Use Hooks no execution model do framework, extraindo custom Hook quando components compartilham uma preocupação stateful coerente, não apenas sintaxe repetida.",
      context:
        "Vários React components assinam network status, atualizam com connectivity e removem listener quando deixam de ser usados.",
      application:
        "Um useOnlineStatus Hook possui subscription e cleanup e retorna status atual enquanto cada component decide a apresentação.",
      phrase:
        "Chame o Hook incondicionalmente no top level do component para React preservar call order entre renders.",
      aliases: ["react hook", "custom hook", "lifecycle hook", "gancho"],
      confusion:
        "Hook conecta lógica reutilizável ao lifecycle ou state model do framework; utility function geral não possui essa integração ou constraints.",
    }),
  },
  context: {
    en: content({
      definition:
        "Context is a component-tree mechanism for making a shared value available to descendants without explicitly passing that value through every intermediate component.",
      purpose:
        "It supplies cross-cutting information such as theme, locale, authentication state, or service dependencies to a related subtree while reducing prop threading.",
      when: "Use Context for values genuinely shared across a stable subtree, splitting frequently changing concerns and avoiding it as an automatic replacement for component composition or state design.",
      context:
        "Every control in an application section needs the current theme and locale, while intermediate layout components do not use either value.",
      application:
        "Providers expose theme and locale separately near the application boundary; descendant components consume only the context they need and handle missing providers explicitly.",
      phrase:
        "Keep rapidly changing editor data out of the broad Context or every consumer may rerender on each keystroke.",
      aliases: [
        "react context",
        "component context",
        "context provider",
        "contexto",
      ],
      confusion:
        "Context distributes a value through a component tree; State Management covers the broader ownership, updates, derivation, synchronization, and access of application state.",
    }),
    "pt-BR": content({
      definition:
        "Context é um mecanismo da component tree que disponibiliza valor compartilhado aos descendants sem passá-lo explicitamente por cada intermediate component.",
      purpose:
        "Ele fornece informação cross-cutting como theme, locale, authentication state ou service dependencies a uma subtree, reduzindo prop threading.",
      when: "Use Context para valores realmente compartilhados numa subtree estável, separando concerns muito mutáveis e sem substituir automaticamente composition ou state design.",
      context:
        "Cada control de uma seção precisa de theme e locale atuais, enquanto layout components intermediários não usam esses valores.",
      application:
        "Providers expõem theme e locale separadamente no application boundary; descendants consomem somente o context necessário e tratam provider ausente.",
      phrase:
        "Mantenha editor data muito mutável fora do Context amplo ou cada consumer poderá rerenderizar a cada tecla.",
      aliases: [
        "react context",
        "component context",
        "context provider",
        "contexto",
      ],
      confusion:
        "Context distribui valor pela component tree; State Management cobre ownership, updates, derivation, synchronization e acesso do application state.",
    }),
  },
  "state-management": {
    en: content({
      definition:
        "State Management is the design and implementation of where changing application information lives, who may update it, how values are derived, and how consumers observe consistent changes.",
      purpose:
        "It keeps behavior predictable across components, routes, clients, and servers by establishing authoritative ownership, update rules, synchronization, and debugging visibility.",
      when: "Apply deliberate State Management as interactions span owners or lifecycles, starting locally and introducing shared stores or server-state tools only for demonstrated needs.",
      context:
        "A commerce UI duplicates cart data across components, caches server responses independently, and produces conflicting totals after background updates.",
      application:
        "The team defines server cart data as authoritative, centralizes fetch and invalidation, keeps temporary form state local, and derives totals from one normalized source.",
      phrase:
        "State Management begins with ownership and lifecycle; choosing a library before those decisions only hides duplication.",
      aliases: [
        "application state management",
        "state architecture",
        "gestão de estado",
      ],
      confusion:
        "State Management is the overall state design; a state store is one implementation mechanism and does not solve ownership automatically.",
    }),
    "pt-BR": content({
      definition:
        "State Management é o design e implementação de onde informação mutável vive, quem a atualiza, como valores são derivados e como consumers observam mudanças consistentes.",
      purpose:
        "Ele mantém behavior previsível entre components, routes, clients e servers ao definir ownership autoritativo, update rules, synchronization e debugging.",
      when: "Aplique-o quando interactions atravessarem owners ou lifecycles, começando localmente e introduzindo shared stores ou server-state tools somente quando necessário.",
      context:
        "Uma commerce UI duplica cart data entre components, faz cache independente e produz totals conflitantes após background updates.",
      application:
        "O time define server cart como autoritativo, centraliza fetch e invalidation, mantém form state temporário local e deriva totals de uma source normalizada.",
      phrase:
        "State Management começa com ownership e lifecycle; escolher library antes apenas esconde duplicação.",
      aliases: [
        "application state management",
        "state architecture",
        "gestão de estado",
      ],
      confusion:
        "State Management é o design geral; state store é um mecanismo e não resolve ownership automaticamente.",
    }),
  },
  react: {
    en: content({
      definition:
        "React is an open-source JavaScript library for building user interfaces from declarative, composable components whose output responds to data and state.",
      purpose:
        "It provides a component and rendering model for structuring interactive interfaces while its ecosystem supplies routing, data, build, and application-level capabilities.",
      when: "Use React when component-driven UI and its ecosystem fit team, platform, performance, and maintenance needs, pairing it with an appropriate application architecture.",
      context:
        "A product team is building a complex web workspace whose panels share design components and update independently in response to user and server events.",
      application:
        "Engineers express views as components, pass data through props and context, manage state with Hooks and data tools, and let React reconcile updates to the host UI.",
      phrase:
        "React handles the component rendering model; the application still needs decisions about routing, server data, security, and deployment.",
      aliases: ["react.js", "reactjs", "react library", "biblioteca react"],
      confusion:
        "React is a UI library; Next.js is an application framework built around React that adds routing, rendering strategies, server capabilities, and build conventions.",
    }),
    "pt-BR": content({
      definition:
        "React é uma JavaScript library open-source para construir user interfaces com components declarativos e componíveis cujo output responde a dados e state.",
      purpose:
        "Ele fornece component e rendering model para interfaces interativas, enquanto seu ecosystem supre routing, data, build e capabilities de aplicação.",
      when: "Use React quando component-driven UI e ecosystem atenderem time, platform, performance e maintenance, combinando-o a application architecture adequada.",
      context:
        "Um product team constrói web workspace complexo cujos panels compartilham design components e atualizam independentemente com user e server events.",
      application:
        "Engineers expressam views como components, passam dados por props e context, administram state com Hooks e data tools e deixam React reconciliar updates.",
      phrase:
        "React cuida do component rendering model; a aplicação ainda precisa de routing, server data, security e deployment.",
      aliases: ["react.js", "reactjs", "react library", "biblioteca react"],
      confusion:
        "React é UI library; Next.js é application framework sobre React que adiciona routing, rendering strategies, server capabilities e build conventions.",
    }),
  },
  "next-js": {
    en: content({
      definition:
        "Next.js is an open-source React framework for building web applications with integrated routing, server and client rendering models, data handling, optimization, and production build tooling.",
      purpose:
        "It supplies application-level conventions and infrastructure around React so teams can combine server capabilities, interactive components, navigation, caching, and deployment behavior.",
      when: "Use Next.js when its React-based full-stack web model, hosting requirements, rendering choices, and conventions fit the product and team's operational needs.",
      context:
        "A commerce site needs crawlable product pages, personalized account areas, interactive checkout, image optimization, route metadata, and server-side access to protected services.",
      application:
        "The team defines routes and layouts, selects server or client component boundaries, configures caching and revalidation, implements handlers, and builds deployable output.",
      phrase:
        "Use a server-rendered route for protected account data and add client components only where interaction requires browser state.",
      aliases: ["nextjs", "next.js framework", "next js", "framework next.js"],
      confusion:
        "Next.js is a web application framework around React; React itself is the UI component and rendering library used within it.",
    }),
    "pt-BR": content({
      definition:
        "Next.js é um React framework open-source para web apps com routing, modelos de server e client rendering, data handling, optimization e production build tooling integrados.",
      purpose:
        "Ele fornece conventions e infraestrutura de aplicação ao redor de React para combinar server capabilities, interactive components, navigation, caching e deployment.",
      when: "Use Next.js quando seu modelo full-stack web baseado em React, hosting requirements, rendering choices e conventions atenderem produto e operação.",
      context:
        "Um commerce site precisa de product pages crawlable, account areas personalizadas, checkout interativo, image optimization, metadata e acesso server-side protegido.",
      application:
        "O time define routes e layouts, escolhe boundaries de server e client components, configura caching e revalidation, implementa handlers e gera deployable output.",
      phrase:
        "Use server-rendered route para account data protegida e adicione client components somente onde interaction exigir browser state.",
      aliases: ["nextjs", "next.js framework", "next js", "framework next.js"],
      confusion:
        "Next.js é web application framework ao redor de React; React é a UI component e rendering library usada dentro dele.",
    }),
  },
  typescript: {
    en: content({
      definition:
        "TypeScript is a programming language that extends JavaScript with static type syntax and tooling, compiling to JavaScript for execution in existing JavaScript environments.",
      purpose:
        "It detects many interface and data-shape errors before runtime, improves navigation and refactoring, and documents contracts across a codebase.",
      when: "Use TypeScript where JavaScript software benefits from checked contracts and maintainability, configuring strictness deliberately and validating untrusted runtime data separately.",
      context:
        "A frontend consumes several APIs and shares component libraries across teams, making undocumented object shapes and unsafe refactors expensive.",
      application:
        "Engineers type domain models and public interfaces, enable strict checks, narrow unions, use generics where meaningful, and parse external responses at runtime.",
      phrase:
        "The TypeScript type describes the expected response, but a runtime schema must still verify data received over the network.",
      aliases: ["ts", "typed javascript", "linguagem typescript"],
      confusion:
        "TypeScript adds compile-time type analysis and syntax; JavaScript is the runtime language ultimately executed by browsers and common servers.",
    }),
    "pt-BR": content({
      definition:
        "TypeScript é uma programming language que estende JavaScript com static type syntax e tooling, compilando para JavaScript executável nos ambientes existentes.",
      purpose:
        "Ele detecta muitos errors de interface e data shape antes de runtime, melhora navigation e refactoring e documenta contracts no codebase.",
      when: "Use TypeScript quando software JavaScript se beneficiar de checked contracts e maintainability, configurando strictness e validando runtime data externa separadamente.",
      context:
        "Um frontend consome várias APIs e compartilha component libraries entre times, tornando object shapes implícitos e refactors inseguros caros.",
      application:
        "Engineers tipam domain models e public interfaces, habilitam strict checks, estreitam unions, usam generics com propósito e fazem parse de responses externas.",
      phrase:
        "O type de TypeScript descreve a response esperada, mas runtime schema ainda valida dados recebidos pela rede.",
      aliases: ["ts", "typed javascript", "linguagem typescript"],
      confusion:
        "TypeScript adiciona type analysis em compile time; JavaScript é a runtime language executada por browsers e servers comuns.",
    }),
  },
  javascript: {
    en: content({
      definition:
        "JavaScript is a high-level, dynamic programming language standardized as ECMAScript and used to implement behavior across web browsers, servers, tooling, and other runtime environments.",
      purpose:
        "It provides the native programming language of the web platform and a portable ecosystem for interactive interfaces, network services, automation, and application logic.",
      when: "Use JavaScript where its runtime availability and ecosystem fit the application, managing asynchronous behavior, dynamic values, dependencies, and performance deliberately.",
      context:
        "A web application must respond to user events, update the document, request data, process streams, and share validation logic with a server runtime.",
      application:
        "Developers organize modules, handle promises and events, manipulate platform APIs, test behavior, bundle browser code, and execute related services in a JavaScript runtime.",
      phrase:
        "JavaScript runs the interaction in the browser, while the DOM and Fetch APIs are capabilities supplied by that host environment.",
      aliases: ["js", "ecmascript", "java script", "linguagem javascript"],
      confusion:
        "JavaScript is a language standardized as ECMAScript; Java is a distinct language, runtime ecosystem, and type system despite the similar name.",
    }),
    "pt-BR": content({
      definition:
        "JavaScript é uma programming language dinâmica de alto nível padronizada como ECMAScript e usada em browsers, servers, tooling e outros runtimes.",
      purpose:
        "Ela fornece a linguagem nativa de programação da web platform e um ecosystem portátil para interfaces, network services, automação e application logic.",
      when: "Use JavaScript quando disponibilidade de runtime e ecosystem atenderem a aplicação, tratando async behavior, dynamic values, dependencies e performance deliberadamente.",
      context:
        "Um web app responde a user events, atualiza documento, solicita dados, processa streams e compartilha validation logic com server runtime.",
      application:
        "Developers organizam modules, tratam promises e events, usam platform APIs, testam behavior, empacotam browser code e executam services em JavaScript runtime.",
      phrase:
        "JavaScript executa interaction no browser; DOM e Fetch são APIs fornecidas por esse host environment.",
      aliases: ["js", "ecmascript", "java script", "linguagem javascript"],
      confusion:
        "JavaScript é linguagem padronizada como ECMAScript; Java é linguagem, runtime ecosystem e type system distintos apesar do nome parecido.",
    }),
  },
  "responsive-design": {
    en: content({
      definition:
        "Responsive Design is an interface design and implementation approach that adapts layout, content presentation, and interaction to available viewport, container, input, and user conditions.",
      purpose:
        "It provides usable and coherent experiences across varied screen sizes and environments without maintaining a completely separate interface for every device class.",
      when: "Use it for interfaces accessed under differing dimensions and capabilities, designing around content needs and testing real reflow, zoom, orientation, and input behavior.",
      context:
        "A reporting application must remain usable on a wide desktop, a split-screen tablet, a zoomed browser, and a small phone.",
      application:
        "The team uses fluid layout, flexible media, intrinsic sizing, container and media queries, adaptable navigation, and content-driven breakpoints.",
      phrase:
        "Responsive Design should reflow the table into a usable summary, not merely shrink text until it fits the phone.",
      aliases: [
        "responsive web design",
        "rwd",
        "adaptive layout",
        "design responsivo",
      ],
      confusion:
        "Responsive Design adapts one interface fluidly to conditions; adaptive design commonly selects among several predefined layouts at specific ranges.",
    }),
    "pt-BR": content({
      definition:
        "Responsive Design é uma abordagem de design e implementação que adapta layout, apresentação e interaction ao viewport, container, input e condições do usuário.",
      purpose:
        "Ele oferece experiências usáveis e coerentes entre telas e ambientes variados sem manter interface separada para cada device class.",
      when: "Use-o em interfaces acessadas sob dimensões e capabilities diferentes, testando reflow, zoom, orientation e input behavior reais.",
      context:
        "Um reporting app permanece usável em desktop amplo, tablet split-screen, browser com zoom e telefone pequeno.",
      application:
        "O time usa fluid layout, flexible media, intrinsic sizing, container e media queries, navigation adaptável e content-driven breakpoints.",
      phrase:
        "Responsive Design deve fazer reflow da tabela numa summary usável, não apenas encolher texto no telefone.",
      aliases: [
        "responsive web design",
        "rwd",
        "adaptive layout",
        "design responsivo",
      ],
      confusion:
        "Responsive Design adapta uma interface fluidamente; adaptive design normalmente escolhe entre layouts predefinidos por faixas.",
    }),
  },
  "mobile-first": {
    en: content({
      definition:
        "Mobile First is a design and implementation strategy that begins with the essential experience under small-screen and constrained conditions, then progressively enhances it for greater space and capability.",
      purpose:
        "It forces early content and interaction prioritization, reduces assumptions based on abundant space, and builds a resilient baseline before adding complexity.",
      when: "Use it when mobile access matters or a constrained baseline improves focus, while still researching users and avoiding the assumption that mobile always means reduced needs.",
      context:
        "A field-service application must let technicians complete the core inspection on a phone before adding desktop comparison and bulk-management tools.",
      application:
        "Design starts with essential tasks, touch targets, linear flow, unreliable connectivity, and compact content, then adds multi-column views and shortcuts at larger breakpoints.",
      phrase:
        "Mobile First keeps inspection completion in the baseline; desktop enhancements add comparison without hiding the core workflow.",
      aliases: [
        "mobile-first design",
        "mobile-first development",
        "design primeiro para mobile",
      ],
      confusion:
        "Mobile First defines the starting strategy; Responsive Design is the broader adaptation of an interface across sizes and conditions.",
    }),
    "pt-BR": content({
      definition:
        "Mobile First é uma estratégia que começa pela experiência essencial sob tela pequena e constraints e depois a aprimora progressivamente para mais espaço e capability.",
      purpose:
        "Ela obriga prioridade precoce de conteúdo e interaction, reduz assumptions de espaço abundante e cria baseline resiliente antes da complexidade.",
      when: "Use-a quando acesso mobile importar ou baseline restrita melhorar foco, pesquisando usuários e sem presumir que mobile signifique necessidades menores.",
      context:
        "Um field-service app permite concluir inspeção no telefone antes de adicionar comparação e bulk management no desktop.",
      application:
        "Design começa com tasks essenciais, touch targets, linear flow, rede instável e conteúdo compacto e adiciona multi-column views em breakpoints maiores.",
      phrase:
        "Mobile First mantém inspection completion na baseline; desktop enhancements acrescentam comparação sem esconder core workflow.",
      aliases: [
        "mobile-first design",
        "mobile-first development",
        "design primeiro para mobile",
      ],
      confusion:
        "Mobile First define a estratégia inicial; Responsive Design é adaptação ampla da interface entre tamanhos e condições.",
    }),
  },
  "progressive-web-app": {
    en: content({
      definition:
        "A Progressive Web App is a web application that uses progressive enhancement and web platform capabilities to provide reliable, installable, and app-like experiences where supported.",
      purpose:
        "It combines the reach and linkability of the web with capabilities such as offline handling, installation, background work, and notifications without requiring a native package for every platform.",
      when: "Build a PWA when web distribution and enhanced device integration serve user needs, designing a functional baseline and treating permissions, storage, updates, and offline correctness carefully.",
      context:
        "Field technicians need to open assigned inspections from a link, install the tool, continue entering data without connectivity, and synchronize later.",
      application:
        "The app provides a manifest, secure delivery, service-worker caching, offline data queues, update handling, responsive UI, and capability checks with fallbacks.",
      phrase:
        "The Progressive Web App must explain pending synchronization; displaying stale data as current would make offline support unsafe.",
      aliases: [
        "pwa",
        "progressive web application",
        "aplicativo web progressivo",
      ],
      confusion:
        "A PWA is a web app enhanced with platform capabilities; a native app is compiled and distributed for a particular operating-system platform.",
    }),
    "pt-BR": content({
      definition:
        "Progressive Web App é uma web application que usa progressive enhancement e web platform capabilities para experiências confiáveis, instaláveis e app-like onde suportadas.",
      purpose:
        "Ela combina alcance e links da web com offline handling, instalação, background work e notifications sem exigir native package para cada platform.",
      when: "Crie PWA quando distribuição web e device integration atenderem usuários, mantendo baseline funcional e tratando permissions, storage, updates e offline correctness.",
      context:
        "Técnicos de campo abrem inspeções por link, instalam a ferramenta, registram dados sem rede e sincronizam depois.",
      application:
        "O app fornece manifest, secure delivery, service-worker caching, offline queues, update handling, responsive UI e capability checks com fallbacks.",
      phrase:
        "A Progressive Web App deve explicar synchronization pendente; mostrar stale data como atual tornaria offline inseguro.",
      aliases: [
        "pwa",
        "progressive web application",
        "aplicativo web progressivo",
      ],
      confusion:
        "PWA é web app aprimorado com platform capabilities; native app é compilado e distribuído para uma operating-system platform.",
    }),
  },
  "single-page-application": {
    en: content({
      definition:
        "A Single Page Application is a web application whose primary navigation and interface updates occur within one loaded document through client-side code rather than full page loads for each route.",
      purpose:
        "It enables continuous, application-like interaction and can preserve client state across navigation while fetching only the data and code needed for transitions.",
      when: "Use an SPA for rich, session-oriented interfaces where client navigation benefits outweigh initial-load, resilience, search, history, accessibility, and complexity costs.",
      context:
        "An authenticated design workspace has persistent tools, selections, undo history, and real-time collaboration across many internal views.",
      application:
        "A client router maps URLs to component views, updates browser history, loads route code and data, preserves relevant application state, and manages errors.",
      phrase:
        "Even as an SPA, every meaningful view needs a stable URL, accessible focus transition, and recoverable loading state.",
      aliases: ["spa", "single-page app", "aplicação de página única"],
      confusion:
        "An SPA navigates mainly inside one document; Client-Side Rendering is a rendering strategy and can be used in only part of a hybrid application.",
    }),
    "pt-BR": content({
      definition:
        "Single Page Application é uma web app cuja navigation e updates principais ocorrem num único documento carregado por client-side code, sem full page load em cada route.",
      purpose:
        "Ela permite interaction contínua e app-like e preserva client state entre navegações, buscando somente data e code necessários à transição.",
      when: "Use SPA em interfaces ricas e session-oriented quando client navigation compensar custos de initial load, resilience, search, history, accessibility e complexity.",
      context:
        "Um design workspace autenticado possui tools persistentes, selections, undo history e real-time collaboration entre views.",
      application:
        "Um client router mapeia URLs a component views, atualiza browser history, carrega route code e data, preserva state relevante e trata errors.",
      phrase:
        "Mesmo como SPA, cada view significativa precisa de URL estável, focus transition acessível e loading state recuperável.",
      aliases: ["spa", "single-page app", "aplicação de página única"],
      confusion:
        "SPA navega principalmente num documento; Client-Side Rendering é rendering strategy e pode ser usado somente numa parte de aplicação híbrida.",
    }),
  },
  "multi-page-application": {
    en: content({
      definition:
        "A Multi-Page Application is a web application in which navigation commonly requests and loads a new document from the server for each page or route.",
      purpose:
        "It provides clear document boundaries, server-controlled navigation, resilient baseline behavior, and independent page delivery with optional client enhancement.",
      when: "Use an MPA when document-oriented navigation, varied page concerns, progressive enhancement, caching, or minimal client runtime better fit the experience.",
      context:
        "A public government service contains many forms and informational pages that must remain understandable, linkable, and operable under constrained devices.",
      application:
        "Each route returns a complete HTML document, standard links trigger navigation, server sessions preserve necessary progress, and focused scripts enhance individual controls.",
      phrase:
        "The Multi-Page Application can still feel fast when documents are cached, links prefetch safely, and each page ships little JavaScript.",
      aliases: [
        "mpa",
        "multi-page app",
        "server navigated application",
        "aplicação multipágina",
      ],
      confusion:
        "An MPA loads documents across primary navigation; an SPA updates views inside one document through a client router.",
    }),
    "pt-BR": content({
      definition:
        "Multi-Page Application é uma web app em que navigation normalmente solicita e carrega novo documento do server para cada page ou route.",
      purpose:
        "Ela fornece document boundaries claros, navigation controlada pelo server, baseline resiliente e entrega independente de pages com client enhancement opcional.",
      when: "Use MPA quando document-oriented navigation, page concerns variados, progressive enhancement, caching ou client runtime mínimo atenderem melhor a experiência.",
      context:
        "Um serviço público possui forms e pages informativas que precisam funcionar com clareza, links e devices restritos.",
      application:
        "Cada route retorna documento HTML completo, links padrão navegam, server sessions preservam progresso e scripts focados aprimoram controls específicos.",
      phrase:
        "A Multi-Page Application pode ser rápida com documents cached, prefetch seguro e pouco JavaScript por page.",
      aliases: [
        "mpa",
        "multi-page app",
        "server navigated application",
        "aplicação multipágina",
      ],
      confusion:
        "MPA carrega documentos na navigation principal; SPA atualiza views dentro de um documento por client router.",
    }),
  },
  bundle: {
    en: content({
      definition:
        "A Bundle is an output artifact that packages multiple source modules, dependencies, and sometimes transformed assets into one or more files for loading by a target runtime.",
      purpose:
        "It converts a development module graph into deployable units with compatible syntax, resolved dependencies, optimization, and an intentional loading structure.",
      when: "Produce Bundles for environments or delivery strategies that benefit from compiled and optimized assets, monitoring their size, contents, caching, and execution cost.",
      context:
        "A browser cannot efficiently load a development project containing thousands of source modules, TypeScript, CSS imports, and image references as authored.",
      application:
        "Build tooling transforms sources, follows imports, groups modules into route and shared chunks, minifies output, emits source maps, and hashes filenames.",
      phrase:
        "The checkout Bundle grew because the charting library entered its dependency graph even though the checkout never displays a chart.",
      aliases: [
        "javascript bundle",
        "asset bundle",
        "build bundle",
        "pacote compilado",
      ],
      confusion:
        "A Bundle is the generated package of code or assets; a Bundler is the tool that analyzes and produces that output.",
    }),
    "pt-BR": content({
      definition:
        "Bundle é um output artifact que empacota source modules, dependencies e às vezes assets transformados em um ou mais arquivos para um target runtime.",
      purpose:
        "Ele converte module graph de desenvolvimento em unidades deployable com sintaxe compatível, dependencies resolvidas, optimization e loading structure intencional.",
      when: "Produza Bundles quando environment ou delivery strategy se beneficiar de assets compilados e otimizados, monitorando size, contents, caching e execution cost.",
      context:
        "Um browser não carrega eficientemente milhares de source modules, TypeScript, CSS imports e image references exatamente como foram escritos.",
      application:
        "Build tooling transforma sources, segue imports, agrupa modules em route e shared chunks, minifica output, emite source maps e hashes.",
      phrase:
        "O checkout Bundle cresceu porque charting library entrou no dependency graph sem o checkout exibir gráfico.",
      aliases: [
        "javascript bundle",
        "asset bundle",
        "build bundle",
        "pacote compilado",
      ],
      confusion:
        "Bundle é o pacote gerado de code ou assets; Bundler é a ferramenta que analisa e produz esse output.",
    }),
  },
  bundler: {
    en: content({
      definition:
        "A Bundler is a build tool that analyzes a module dependency graph and transforms, combines, splits, and emits code and assets for one or more target runtimes.",
      purpose:
        "It resolves development-time modules into efficient deployable output while supporting transformations, optimization, code splitting, hashing, and development feedback.",
      when: "Use a Bundler when the application's modules and assets require compilation or packaging beyond what the target can consume directly, configuring targets and boundaries explicitly.",
      context:
        "A web project imports TypeScript, CSS Modules, images, third-party packages, and dynamic routes that need browser-compatible production assets.",
      application:
        "The Bundler resolves imports, invokes transforms, eliminates unreachable exports, creates shared and lazy chunks, minifies, and emits manifests and source maps.",
      phrase:
        "Inspect the Bundler's graph to learn why a server-only dependency was emitted into the browser chunk.",
      aliases: [
        "module bundler",
        "javascript bundler",
        "build bundler",
        "empacotador",
      ],
      confusion:
        "A Bundler packages a dependency graph into deployable artifacts; a compiler translates source language or representation and may be one stage inside bundling.",
    }),
    "pt-BR": content({
      definition:
        "Bundler é uma build tool que analisa module dependency graph e transforma, combina, divide e emite code e assets para target runtimes.",
      purpose:
        "Ele resolve modules de desenvolvimento em output deployable eficiente, suportando transformations, optimization, code splitting, hashing e development feedback.",
      when: "Use Bundler quando modules e assets exigirem compilation ou packaging além do que o target consome diretamente, configurando targets e boundaries.",
      context:
        "Um web project importa TypeScript, CSS Modules, images, third-party packages e dynamic routes que precisam de production assets browser-compatible.",
      application:
        "O Bundler resolve imports, executa transforms, elimina exports inalcançáveis, cria shared e lazy chunks, minifica e emite manifests e source maps.",
      phrase:
        "Inspecione o graph do Bundler para descobrir por que server-only dependency foi emitida no browser chunk.",
      aliases: [
        "module bundler",
        "javascript bundler",
        "build bundler",
        "empacotador",
      ],
      confusion:
        "Bundler empacota dependency graph em artifacts deployable; compiler traduz source language ou representation e pode ser uma etapa do bundling.",
    }),
  },
  "tree-shaking": {
    en: content({
      definition:
        "Tree Shaking is a build optimization that analyzes static module exports and imports to exclude code determined to be unreachable from the emitted bundle.",
      purpose:
        "It reduces shipped code and its network, parse, compile, and execution costs by removing unused portions of a dependency graph.",
      when: "Use it in production builds with analyzable module syntax and accurate side-effect declarations, verifying output because dynamic behavior can limit safe elimination.",
      context:
        "An application imports one date-formatting function from a package that also exports calendars, locales, and parsing utilities.",
      application:
        "The Bundler follows static imports, marks reachable exports, respects declared side effects, and omits unused modules or declarations during optimization.",
      phrase:
        "Tree Shaking cannot remove the package initialization safely if the module declares or performs observable side effects.",
      aliases: [
        "dead export elimination",
        "unused code elimination",
        "remoção de código não usado",
      ],
      confusion:
        "Tree Shaking removes statically unreachable module code; minification shortens and rewrites retained code to reduce output size.",
    }),
    "pt-BR": content({
      definition:
        "Tree Shaking é uma build optimization que analisa exports e imports estáticos para excluir code considerado inalcançável no Bundle emitido.",
      purpose:
        "Ele reduz shipped code e custos de network, parse, compile e execution removendo partes não usadas do dependency graph.",
      when: "Use-o em production builds com module syntax analisável e side-effect declarations corretas, verificando output porque behavior dinâmico limita eliminação segura.",
      context:
        "Uma aplicação importa uma date-formatting function de package que também exporta calendars, locales e parsing utilities.",
      application:
        "O Bundler segue static imports, marca exports alcançáveis, respeita side effects e omite modules ou declarations não usados.",
      phrase:
        "Tree Shaking não remove package initialization com segurança se o module executa side effects observáveis.",
      aliases: [
        "dead export elimination",
        "unused code elimination",
        "remoção de código não usado",
      ],
      confusion:
        "Tree Shaking remove module code inalcançável; minification encurta e reescreve o code retido para reduzir output size.",
    }),
  },
  "lazy-loading": {
    en: content({
      definition:
        "Lazy Loading is a resource-loading strategy that defers fetching, creating, or initializing data, code, media, or components until they are likely to be needed.",
      purpose:
        "It reduces initial network and processing work, prioritizing resources that affect the current experience while avoiding cost for unused functionality.",
      when: "Use it for noncritical or conditional resources whose delay will not harm expected interaction, reserving space and providing loading, error, retry, and prefetch behavior.",
      context:
        "A product page contains many below-the-fold images and an advanced comparison tool that most visitors never open.",
      application:
        "The browser defers offscreen images and the app dynamically imports comparison code on intent, with dimensions, skeleton feedback, errors, and optional idle prefetch.",
      phrase:
        "Do not Lazy Load the primary product image if deferral delays the largest visible content and worsens perceived performance.",
      aliases: ["deferred loading", "on-demand loading", "carregamento tardio"],
      confusion:
        "Lazy Loading is the general deferral strategy; Code Splitting creates separately loadable code units that can enable lazy loading.",
    }),
    "pt-BR": content({
      definition:
        "Lazy Loading é uma loading strategy que adia fetch, criação ou initialization de data, code, media ou components até que provavelmente sejam necessários.",
      purpose:
        "Ele reduz network e processing iniciais, priorizando recursos da experiência atual e evitando custo de functionality não usada.",
      when: "Use-o em recursos não críticos ou condicionais cujo atraso não prejudique interaction, reservando espaço e oferecendo loading, error, retry e prefetch.",
      context:
        "Uma product page possui imagens below-the-fold e comparison tool avançada que a maioria nunca abre.",
      application:
        "O browser adia imagens offscreen e o app faz dynamic import da comparação com skeleton, errors e idle prefetch opcional.",
      phrase:
        "Não aplique Lazy Loading à primary product image se isso atrasar o maior conteúdo visível.",
      aliases: ["deferred loading", "on-demand loading", "carregamento tardio"],
      confusion:
        "Lazy Loading é estratégia geral de adiamento; Code Splitting cria unidades de code separadas que podem habilitá-la.",
    }),
  },
  "code-splitting": {
    en: content({
      definition:
        "Code Splitting is the build and architecture technique of dividing application code into independently loadable chunks instead of delivering one complete bundle upfront.",
      purpose:
        "It reduces initial transfer and execution cost and aligns code delivery with routes, features, environments, or interaction boundaries.",
      when: "Use it when a large application contains code not needed by every session or initial view, balancing smaller entry bundles against request overhead, duplication, caching, and loading delays.",
      context:
        "An administration editor and charting suite add substantial JavaScript but are used only by a small subset of authenticated routes.",
      application:
        "The team introduces route-level and dynamic imports, extracts stable shared dependencies, names and analyzes chunks, and preloads likely transitions.",
      phrase:
        "Code Splitting moved the editor out of the landing Bundle, but verify that shared libraries are not duplicated across chunks.",
      aliases: ["bundle splitting", "chunk splitting", "divisão de código"],
      confusion:
        "Code Splitting creates loadable code boundaries; Lazy Loading decides to defer loading one of those or another resource until needed.",
    }),
    "pt-BR": content({
      definition:
        "Code Splitting é a técnica de build e architecture que divide application code em chunks carregáveis independentemente em vez de entregar um Bundle completo inicialmente.",
      purpose:
        "Ele reduz transfer e execution cost iniciais e alinha code delivery a routes, features, environments ou interaction boundaries.",
      when: "Use-o quando app grande contiver code desnecessário para toda session ou initial view, equilibrando entry bundles menores com requests, duplication, caching e delays.",
      context:
        "Um administration editor e charting suite adicionam muito JavaScript, mas aparecem somente em poucas authenticated routes.",
      application:
        "O time cria route-level e dynamic imports, extrai shared dependencies estáveis, analisa chunks e faz preload de transitions prováveis.",
      phrase:
        "Code Splitting tirou o editor do landing Bundle, mas verifique se shared libraries não foram duplicadas entre chunks.",
      aliases: ["bundle splitting", "chunk splitting", "divisão de código"],
      confusion:
        "Code Splitting cria code boundaries carregáveis; Lazy Loading decide adiar uma delas ou outro recurso até ser necessário.",
    }),
  },
  accessibility: {
    en: content({
      definition:
        "Accessibility is the quality and practice of making products, information, and environments perceivable, operable, understandable, and robust for people with diverse disabilities and access needs.",
      purpose:
        "It enables equitable participation and reduces barriers created by vision, hearing, motor, cognitive, speech, temporary, situational, or technological differences.",
      when: "Address Accessibility throughout research, design, content, implementation, testing, procurement, and maintenance rather than treating it as a final compliance check.",
      context:
        "A checkout visually communicates errors by color, traps keyboard focus, lacks form labels, and times out before some users can complete payment.",
      application:
        "The team uses semantic controls, labels and instructions, keyboard and screen-reader testing, visible focus, sufficient contrast, flexible timing, and automated checks.",
      phrase:
        "Accessibility requires the custom selector to expose name, role, value, keyboard behavior, focus, and error state—not only matching the visual design.",
      aliases: [
        "a11y",
        "digital accessibility",
        "web accessibility",
        "acessibilidade",
      ],
      confusion:
        "Accessibility removes barriers for people with disabilities and varied access needs; usability concerns how effectively and satisfactorily the intended audience can use a product overall.",
    }),
    "pt-BR": content({
      definition:
        "Accessibility é a qualidade e prática de tornar produtos, informações e ambientes perceptíveis, operáveis, compreensíveis e robustos para pessoas com deficiências diversas.",
      purpose:
        "Ela permite participação equitativa e reduz barreiras criadas por diferenças visuais, auditivas, motoras, cognitivas, de fala, temporárias ou situacionais.",
      when: "Trate Accessibility em research, design, content, implementation, testing, procurement e maintenance, não como check final de compliance.",
      context:
        "Um checkout comunica errors só por cor, prende keyboard focus, não possui form labels e expira cedo para alguns usuários.",
      application:
        "O time usa semantic controls, labels e instructions, keyboard e screen-reader testing, visible focus, contrast, flexible timing e automated checks.",
      phrase:
        "Accessibility exige que custom selector exponha name, role, value, keyboard behavior, focus e error state, não só visual.",
      aliases: [
        "a11y",
        "digital accessibility",
        "web accessibility",
        "acessibilidade",
      ],
      confusion:
        "Accessibility remove barreiras para pessoas com deficiências e access needs; usability trata efetividade e satisfação do público em geral.",
    }),
  },
  "semantic-html": {
    en: content({
      definition:
        "Semantic HTML is the use of HTML elements according to their intended meaning and structural role rather than choosing markup only for visual appearance.",
      purpose:
        "It gives browsers, assistive technologies, search engines, and developers a meaningful document structure with built-in behavior and accessibility semantics.",
      when: "Use the closest native element for content and interaction before adding generic containers or custom roles, preserving valid hierarchy and expected behavior.",
      context:
        "A clickable card is implemented as a styled div, so it cannot receive keyboard focus, activate with Enter, or expose its purpose as a link.",
      application:
        "The developer uses an anchor with a real destination, headings in logical order, lists for grouped items, landmarks, labels, and buttons for actions.",
      phrase:
        "Use a button for this action; Semantic HTML already provides focus, activation, and role behavior that a div lacks.",
      aliases: ["semantic markup", "html semantics", "html semântico"],
      confusion:
        "Semantic HTML expresses meaning through native elements; ARIA supplements accessibility semantics where native HTML cannot represent the required pattern.",
    }),
    "pt-BR": content({
      definition:
        "Semantic HTML é o uso de elementos HTML conforme significado e papel estrutural pretendidos, não escolhendo markup somente pela aparência.",
      purpose:
        "Ele fornece a browsers, assistive technologies, search engines e developers uma document structure significativa com behavior e accessibility nativos.",
      when: "Use o native element mais adequado antes de generic containers ou custom roles, preservando hierarchy válida e behavior esperado.",
      context:
        "Um card clicável é uma div estilizada e não recebe keyboard focus, ativa com Enter nem expõe seu propósito como link.",
      application:
        "A developer usa anchor com destination real, headings em ordem, lists para grupos, landmarks, labels e buttons para actions.",
      phrase:
        "Use button nesta action; Semantic HTML já fornece focus, activation e role que uma div não possui.",
      aliases: ["semantic markup", "html semantics", "html semântico"],
      confusion:
        "Semantic HTML expressa significado por native elements; ARIA complementa semantics onde HTML nativo não representa o pattern necessário.",
    }),
  },
  css: {
    en: content({
      definition:
        "Cascading Style Sheets is the web platform language for describing the presentation, layout, visual states, and rendering adaptations of structured documents such as HTML.",
      purpose:
        "It separates presentational rules from document meaning and provides a cascade, inheritance, selectors, layout systems, variables, media features, and animation capabilities.",
      when: "Use CSS for web presentation and layout, structuring cascade layers, scope, tokens, responsive rules, and browser support so styles remain predictable and maintainable.",
      context:
        "A web interface must express typography, spacing, color, focus, component states, grid layout, dark theme, reduced motion, and responsive reflow.",
      application:
        "Developers define custom properties and layers, style semantic selectors and components, use Grid and Flexbox, respond to containers and preferences, and test browser behavior.",
      phrase:
        "Use CSS Grid for this two-dimensional layout instead of encoding column positions into the HTML document order.",
      aliases: [
        "cascading style sheets",
        "style sheets",
        "folhas de estilo em cascata",
      ],
      confusion:
        "CSS describes presentation and layout; HTML describes document structure and semantics, even though both influence browser rendering.",
    }),
    "pt-BR": content({
      definition:
        "Cascading Style Sheets é a linguagem da web platform para descrever apresentação, layout, visual states e adaptações de rendering de documentos como HTML.",
      purpose:
        "Ela separa presentation rules do significado do documento e fornece cascade, inheritance, selectors, layout systems, variables, media features e animations.",
      when: "Use CSS para presentation e layout web, estruturando cascade layers, scope, tokens, responsive rules e browser support para styles previsíveis.",
      context:
        "Uma web interface expressa typography, spacing, color, focus, component states, grid layout, dark theme, reduced motion e responsive reflow.",
      application:
        "Developers definem custom properties e layers, estilizam selectors e components, usam Grid e Flexbox, respondem a containers e preferences e testam browsers.",
      phrase:
        "Use CSS Grid neste layout bidimensional em vez de codificar posições de colunas na document order do HTML.",
      aliases: [
        "cascading style sheets",
        "style sheets",
        "folhas de estilo em cascata",
      ],
      confusion:
        "CSS descreve presentation e layout; HTML descreve structure e semantics, embora ambos influenciem browser rendering.",
    }),
  },
  "css-module": {
    en: content({
      definition:
        "A CSS Module is a build-time styling convention that treats a CSS file's class and animation names as locally scoped exports and maps them to generated identifiers when imported by code.",
      purpose:
        "It prevents accidental global name collisions and makes a component's stylesheet dependencies explicit while retaining standard CSS authoring capabilities.",
      when: "Use CSS Modules for component-scoped styles in a supported build system, combining them with intentional global foundations, tokens, and documented composition rules.",
      context:
        "Several teams define a class named title, and global styles unexpectedly override headings in unrelated components after a deployment.",
      application:
        "A component imports styles from its module, references styles.title, and the build emits a unique class name while keeping reset and theme variables global.",
      phrase:
        "The CSS Module scopes title to this component, but inherited typography and custom properties can still cross the boundary intentionally.",
      aliases: ["css modules", "modular css", "módulo css"],
      confusion:
        "A CSS Module scopes names during the build; Shadow DOM encapsulates a runtime DOM subtree and has different style boundary rules.",
    }),
    "pt-BR": content({
      definition:
        "CSS Module é uma convention de styling em build time que trata class e animation names de um CSS file como exports locais e os mapeia a identificadores gerados.",
      purpose:
        "Ele evita colisões globais acidentais e torna stylesheet dependencies do component explícitas mantendo capabilities padrão de CSS.",
      when: "Use CSS Modules para component-scoped styles em build system compatível, combinando-os a foundations globais, tokens e composition rules intencionais.",
      context:
        "Vários times definem class title e global styles sobrescrevem headings em components não relacionados após deployment.",
      application:
        "Um component importa styles do module, referencia styles.title e o build emite class name único, mantendo reset e theme variables globais.",
      phrase:
        "O CSS Module limita title ao component, mas inherited typography e custom properties ainda cruzam o boundary intencionalmente.",
      aliases: ["css modules", "modular css", "módulo css"],
      confusion:
        "CSS Module escopa names durante build; Shadow DOM encapsula DOM subtree em runtime e possui outras style boundary rules.",
    }),
  },
  "tailwind-css": {
    en: content({
      definition:
        "Tailwind CSS is a utility-first CSS framework that generates composable single-purpose classes from a configurable design vocabulary and detected project usage.",
      purpose:
        "It lets teams construct interface styles directly from constrained utilities while supporting responsive states, variants, tokens, and optimized production output.",
      when: "Use Tailwind CSS when utility composition fits the team's design and maintenance practices, establishing component abstractions and tokens for repeated semantics.",
      context:
        "A product team wants consistent spacing, color, typography, breakpoints, and states without inventing a global class name for every small layout variation.",
      application:
        "Developers configure theme values, compose utility classes in components, extract repeated product patterns at meaningful boundaries, and let the build emit used styles.",
      phrase:
        "Use Tailwind CSS utilities for this local layout, but keep the repeated alert semantics in one shared component rather than copying a long class list.",
      aliases: [
        "tailwind",
        "tailwindcss",
        "utility-first css",
        "framework tailwind css",
      ],
      confusion:
        "Tailwind CSS provides styling utilities; a Design System defines the broader principles, tokens, components, content, governance, and usage guidance.",
    }),
    "pt-BR": content({
      definition:
        "Tailwind CSS é um CSS framework utility-first que gera classes componíveis e de propósito único a partir de design vocabulary configurável e uso detectado no projeto.",
      purpose:
        "Ele permite construir styles diretamente com utilities restritas, suportando responsive states, variants, tokens e production output otimizado.",
      when: "Use Tailwind CSS quando utility composition atender design e maintenance do time, criando component abstractions e tokens para semantics repetidas.",
      context:
        "Um product team quer spacing, color, typography, breakpoints e states consistentes sem inventar global class para cada variação de layout.",
      application:
        "Developers configuram theme values, compõem utility classes, extraem product patterns repetidos em boundaries significativos e geram apenas styles usados.",
      phrase:
        "Use Tailwind CSS utilities no layout local, mas mantenha alert semantics repetidas num shared component em vez de copiar class list longa.",
      aliases: [
        "tailwind",
        "tailwindcss",
        "utility-first css",
        "framework tailwind css",
      ],
      confusion:
        "Tailwind CSS fornece styling utilities; Design System define principles, tokens, components, content, governance e usage guidance amplos.",
    }),
  },
  "design-system": {
    en: content({
      definition:
        "A Design System is a governed collection of principles, foundations, tokens, reusable components, patterns, content guidance, tools, and contribution practices for creating coherent products.",
      purpose:
        "It raises experience quality and delivery leverage by sharing proven decisions across design and code while maintaining accessibility, brand, and behavioral consistency.",
      when: "Invest in one when multiple products or teams repeat interface decisions and can support ongoing ownership, adoption, contribution, versioning, and evidence-based evolution.",
      context:
        "Several product teams implement buttons, forms, dialogs, navigation, and language differently, producing accessibility defects and duplicated maintenance.",
      application:
        "A cross-functional team defines foundations and tokens, builds tested components and patterns, documents use and content, supports consumers, and governs changes and releases.",
      phrase:
        "The Design System button includes behavior, accessibility, tokens, guidance, tests, and versioning—not only a visual file.",
      aliases: [
        "product design system",
        "ui design system",
        "sistema de design",
      ],
      confusion:
        "A Design System is a governed product and practice; a component library is the reusable code portion and may exist without broader standards or governance.",
    }),
    "pt-BR": content({
      definition:
        "Design System é uma coleção governada de principles, foundations, tokens, reusable components, patterns, content guidance, tools e contribution practices para produtos coerentes.",
      purpose:
        "Ele aumenta experience quality e delivery leverage compartilhando decisões comprovadas entre design e code com accessibility, brand e behavior consistentes.",
      when: "Invista quando produtos ou times repetirem interface decisions e puderem sustentar ownership, adoption, contribution, versioning e evolução baseada em evidência.",
      context:
        "Vários product teams implementam buttons, forms, dialogs, navigation e language diferentemente, gerando accessibility defects e maintenance duplicada.",
      application:
        "Um time cross-functional define foundations e tokens, cria components e patterns testados, documenta uso e content, apoia consumers e governa releases.",
      phrase:
        "O button do Design System inclui behavior, accessibility, tokens, guidance, tests e versioning, não apenas arquivo visual.",
      aliases: [
        "product design system",
        "ui design system",
        "sistema de design",
      ],
      confusion:
        "Design System é product e prática governados; component library é a parte de reusable code e pode existir sem standards ou governance amplos.",
    }),
  },
  storybook: {
    en: content({
      definition:
        "Storybook is an open-source workshop and documentation environment for developing, rendering, and testing UI components in isolated states outside full application screens.",
      purpose:
        "It makes component variants and edge cases reproducible, supports visual review and automated tests, and provides a browsable interface reference for collaborators.",
      when: "Use Storybook for shared or state-rich components that benefit from isolated examples, supplying realistic providers, accessibility checks, interaction tests, and maintained stories.",
      context:
        "A payment form has loading, validation, error, disabled, localized, narrow-screen, and high-contrast states that are difficult to reproduce inside the application.",
      application:
        "The team writes stories for each meaningful state, composes fixtures and providers, runs interaction and accessibility checks, and publishes the result with the component library.",
      phrase:
        "Add the declined-payment state to Storybook so design, support, and automated visual tests can inspect the same reproducible case.",
      aliases: [
        "storybook.js",
        "component workshop",
        "ui component explorer",
        "ferramenta storybook",
      ],
      confusion:
        "Storybook is a component development and documentation environment; a Design System is the governed set of decisions and assets that it may help present.",
    }),
    "pt-BR": content({
      definition:
        "Storybook é um workshop e documentation environment open-source para desenvolver, renderizar e testar UI components em estados isolados fora das application screens completas.",
      purpose:
        "Ele torna component variants e edge cases reproduzíveis, apoia visual review e automated tests e fornece interface navegável de referência.",
      when: "Use Storybook em shared ou state-rich components que se beneficiem de exemplos isolados, com providers realistas, accessibility checks, interaction tests e stories mantidas.",
      context:
        "Um payment form possui loading, validation, error, disabled, localized, narrow-screen e high-contrast states difíceis de reproduzir no app.",
      application:
        "O time escreve stories para cada state, compõe fixtures e providers, executa interaction e accessibility checks e publica junto da component library.",
      phrase:
        "Adicione declined-payment state ao Storybook para design, support e visual tests inspecionarem o mesmo caso reproduzível.",
      aliases: [
        "storybook.js",
        "component workshop",
        "ui component explorer",
        "ferramenta storybook",
      ],
      confusion:
        "Storybook é component development e documentation environment; Design System é o conjunto governado que ele pode ajudar a apresentar.",
    }),
  },
};
