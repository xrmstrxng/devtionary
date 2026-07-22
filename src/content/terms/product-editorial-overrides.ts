import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const productEditorialOverrides: Record<string, EditorialPair> = {
  product: {
    en: content({
      definition:
        "A product is a deliberately managed solution that creates recurring value for a defined group of users or customers while supporting an organization's goals.",
      purpose:
        "It connects a real need with an experience, technology, operations, economics, and continuous learning across a lifecycle rather than ending at project delivery.",
      when: "Treat an offering as a product when it has a persistent audience and outcomes that require ongoing discovery, prioritization, delivery, measurement, support, and evolution.",
      context:
        "A company provides invoicing software that small businesses rely on monthly and that must adapt to regulation, behavior, competition, and support evidence.",
      application:
        "The product team defines target outcomes, studies users, manages the roadmap and economics, releases improvements, and measures adoption and retention.",
      phrase:
        "“The release finishes a project milestone, but the product outcome is whether customers complete invoices faster and keep using it.”",
      aliases: ["software product", "digital product", "produto digital"],
      confusion:
        "A product is an ongoing value system with users and outcomes; a project is a temporary effort with a defined completion boundary.",
    }),
    "pt-BR": content({
      definition:
        "Product é uma solução administrada intencionalmente que cria valor recorrente para um público definido e apoia objetivos da organização.",
      purpose:
        "Ele conecta necessidade a experiência, tecnologia, operação, economia e aprendizado contínuo em um lifecycle que não termina na entrega.",
      when: "Trate como product quando houver público e outcomes persistentes que exijam discovery, prioridade, delivery, medição, suporte e evolução.",
      context:
        "Uma empresa oferece invoices para pequenos negócios e precisa adaptar-se a regulação, comportamento, concorrência e suporte.",
      application:
        "O product team define outcomes, estuda pessoas, administra roadmap e economia, lança melhorias e mede adoption e retention.",
      phrase:
        "“A release fecha um milestone, mas o product outcome é clientes emitirem invoices mais rápido e continuarem usando.”",
      aliases: ["software product", "digital product", "produto digital"],
      confusion:
        "Product é sistema contínuo de valor; project é esforço temporário com boundary de conclusão.",
    }),
  },
  "product-manager": {
    en: content({
      definition:
        "A Product Manager is responsible for guiding product strategy and outcomes by connecting customer needs, business goals, market evidence, and delivery capabilities.",
      purpose:
        "The role reduces uncertainty about which problems and opportunities matter, aligns stakeholders, prioritizes investment, and measures whether solutions create value.",
      when: "Use Product Management where product choices require continuous discovery, cross-functional tradeoffs, strategy, prioritization, and outcome accountability.",
      context:
        "A SaaS platform has declining activation, requests from sales, reliability work, and several possible market expansions competing for capacity.",
      application:
        "The Product Manager studies activation evidence, aligns goals, frames opportunities, works with design and engineering on options, and prioritizes measurable experiments.",
      phrase:
        "“Before adding the requested feature, validate which customer problem it solves and how success will change the activation metric.”",
      aliases: ["pm", "product management manager", "gerente de produto"],
      confusion:
        "A Product Manager leads strategy and outcomes; a Project Manager typically coordinates temporary scope, schedule, dependencies, and delivery execution.",
    }),
    "pt-BR": content({
      definition:
        "Product Manager orienta estratégia e outcomes conectando necessidades de clientes, objetivos de negócio, mercado e capacidade de delivery.",
      purpose:
        "A função reduz incerteza sobre problemas, alinha stakeholders, prioriza investimento e mede se soluções criam valor.",
      when: "Use Product Management quando escolhas exigirem discovery contínuo, trade-offs cross-functional, estratégia, prioridade e accountability de outcomes.",
      context:
        "Uma plataforma SaaS possui activation em queda, requests de vendas, reliability e expansões competindo por capacidade.",
      application:
        "A Product Manager estuda evidências, alinha goals, enquadra opportunities, trabalha com design e engineering e prioriza experiments mensuráveis.",
      phrase:
        "“Antes da feature pedida, valide qual problema resolve e como sucesso mudará activation.”",
      aliases: ["pm", "product management manager", "gerente de produto"],
      confusion:
        "Product Manager lidera estratégia e outcomes; Project Manager coordena scope, schedule, dependencies e execução temporária.",
    }),
  },
  "product-owner": {
    en: content({
      definition:
        "Product Owner is the Scrum accountability responsible for maximizing product value through effective Product Backlog management and clear ordering of work.",
      purpose:
        "It gives one accountable decision point for backlog goals, items, transparency, and order while collaborating with stakeholders and the Scrum Team.",
      when: "Use a Product Owner in Scrum, granting real authority over backlog decisions rather than reducing the role to writing tickets or relaying requests.",
      context:
        "A Scrum Team receives conflicting requests from sales, support, compliance, and engineering for the next increments.",
      application:
        "The Product Owner clarifies the Product Goal, orders backlog items by value and risk, makes tradeoffs visible, and remains accountable while delegating detail work.",
      phrase:
        "“The Product Owner can gather stakeholder input, but remains accountable for the backlog order.”",
      aliases: ["po", "scrum product owner", "dono do produto"],
      confusion:
        "Product Owner is a specific Scrum accountability; Product Manager is a broader role whose scope varies and may include strategy, market, and portfolio work.",
    }),
    "pt-BR": content({
      definition:
        "Product Owner é a accountability do Scrum responsável por maximizar valor por gestão efetiva e ordering do Product Backlog.",
      purpose:
        "Ela cria um ponto responsável por goals, items, transparência e ordem, em colaboração com stakeholders e Scrum Team.",
      when: "Use Product Owner no Scrum com autoridade real sobre backlog, não reduzindo a função a escrever tickets ou retransmitir requests.",
      context:
        "Um Scrum Team recebe pedidos conflitantes de sales, support, compliance e engineering.",
      application:
        "A Product Owner esclarece Product Goal, ordena backlog por valor e risco, explicita trade-offs e mantém accountability.",
      phrase:
        "“A Product Owner coleta input, mas continua accountable pela ordem do backlog.”",
      aliases: ["po", "scrum product owner", "dono do produto"],
      confusion:
        "Product Owner é accountability específica do Scrum; Product Manager é função mais ampla e variável de estratégia e mercado.",
    }),
  },
  roadmap: {
    en: content({
      definition:
        "A product roadmap is a strategic communication artifact showing how intended outcomes, opportunities, themes, or major investments may evolve over time.",
      purpose:
        "It aligns direction, sequencing, assumptions, dependencies, and learning without pretending that distant feature dates are guaranteed commitments.",
      when: "Use a roadmap to communicate strategy and choices at an appropriate horizon, updating it when evidence, capacity, market, or constraints change.",
      context:
        "Leadership, sales, support, and delivery teams need a shared view of activation, enterprise readiness, and international expansion priorities.",
      application:
        "The roadmap organizes outcome themes by now, next, and later, states evidence and dependencies, and separates committed releases from exploratory options.",
      phrase:
        "“Show the outcome and confidence level on the roadmap; a feature date twelve months away is not a reliable promise.”",
      aliases: ["product roadmap", "strategic roadmap", "roteiro de produto"],
      confusion:
        "A roadmap communicates strategic direction and likely sequence; a release plan specifies nearer-term delivery commitments and coordination.",
    }),
    "pt-BR": content({
      definition:
        "Product Roadmap é um artefato estratégico que mostra como outcomes, opportunities, themes ou investimentos podem evoluir no tempo.",
      purpose:
        "Ele alinha direção, sequência, premissas, dependencies e aprendizado sem tratar datas distantes como commitments garantidos.",
      when: "Use roadmap para comunicar estratégia no horizonte adequado, atualizando conforme evidence, capacity, mercado ou constraints mudem.",
      context:
        "Leadership, sales, support e delivery precisam de visão comum sobre activation, enterprise e expansão internacional.",
      application:
        "O roadmap organiza outcome themes em now, next e later, informa evidências e separa releases comprometidas de opções exploratórias.",
      phrase:
        "“Mostre outcome e confidence no roadmap; uma data de feature daqui a doze meses não é promessa confiável.”",
      aliases: ["product roadmap", "strategic roadmap", "roteiro de produto"],
      confusion:
        "Roadmap comunica direção e sequência provável; release plan especifica commitments próximos e coordenação.",
    }),
  },
  backlog: {
    en: content({
      definition:
        "A backlog is an ordered, evolving collection of potential work, problems, improvements, risks, or learning needed to pursue a product or team goal.",
      purpose:
        "It makes options visible and supports prioritization and refinement while allowing low-value or obsolete items to be removed rather than treated as guaranteed scope.",
      when: "Maintain a backlog for work requiring future consideration, ordering items by value, risk, urgency, dependency, and learning and refining only what is approaching action.",
      context:
        "A product receives customer requests, defects, technical improvements, experiments, compliance duties, and operational risks faster than capacity allows.",
      application:
        "The team connects items to goals, orders near-term options, refines them collaboratively, and deletes stale entries without commitment.",
      phrase:
        "“The backlog is an option set, not a storage promise; remove this item if it no longer supports a goal.”",
      aliases: [
        "product backlog",
        "work backlog",
        "lista priorizada de trabalho",
      ],
      confusion:
        "A backlog contains ordered options for future work; a sprint backlog is the Scrum Developers' plan for achieving one Sprint Goal.",
    }),
    "pt-BR": content({
      definition:
        "Backlog é uma coleção ordenada e evolutiva de trabalhos, problemas, melhorias, riscos ou aprendizados potenciais ligados a um goal.",
      purpose:
        "Ele torna opções visíveis e apoia prioridade e refinement, permitindo remover items obsoletos em vez de tratá-los como scope garantido.",
      when: "Mantenha backlog para trabalho futuro, ordenando por valor, risco, urgência, dependency e learning e refinando apenas o próximo.",
      context:
        "Um product recebe requests, defects, melhorias técnicas, experiments, compliance e riscos acima da capacity.",
      application:
        "O time liga items a goals, ordena opções próximas, refina colaborativamente e remove entradas antigas sem commitment.",
      phrase:
        "“Backlog é conjunto de opções, não promessa; remova o item se não apoia mais um goal.”",
      aliases: [
        "product backlog",
        "work backlog",
        "lista priorizada de trabalho",
      ],
      confusion:
        "Backlog contém opções futuras ordenadas; sprint backlog é o plano dos Developers para um Sprint Goal.",
    }),
  },
  mvp: {
    en: content({
      definition:
        "A Minimum Viable Product is the smallest real product offering that can deliver meaningful value to a target audience and generate evidence about critical assumptions.",
      purpose:
        "It reduces investment under uncertainty by testing whether the problem, solution, behavior, and value are real before scaling a broader product.",
      when: "Build an MVP when the team can identify a narrow audience, valuable end-to-end outcome, riskiest assumptions, and measurements that inform the next decision.",
      context:
        "A startup believes small clinics will pay for automated appointment reminders but has not validated adoption or operational fit.",
      application:
        "The MVP serves one clinic segment with scheduling import, reminder delivery, consent, and outcome tracking while manual operations cover noncritical scale work.",
      phrase:
        "“The MVP must complete the reminder outcome for one clinic segment; a login screen alone cannot test value.”",
      aliases: ["minimum viable product", "produto mínimo viável"],
      confusion:
        "An MVP delivers usable value and tests market or behavior assumptions; a Proof of Concept tests whether a technical idea is feasible.",
    }),
    "pt-BR": content({
      definition:
        "Minimum Viable Product é a menor oferta real capaz de entregar valor significativo a um público e gerar evidência sobre premissas críticas.",
      purpose:
        "Ele reduz investimento sob incerteza testando problema, solução, comportamento e valor antes de ampliar o product.",
      when: "Construa MVP quando houver público estreito, outcome end-to-end valioso, premissas arriscadas e medições para a próxima decisão.",
      context:
        "Uma startup acredita que clínicas pagarão por reminders automáticos, mas não validou adoption nem operação.",
      application:
        "O MVP atende um segmento com importação, envio, consent e outcome tracking, usando operação manual no que não exige escala.",
      phrase:
        "“O MVP deve completar o outcome para um segmento; uma tela de login não testa valor.”",
      aliases: ["minimum viable product", "produto mínimo viável"],
      confusion:
        "MVP entrega valor e testa mercado ou comportamento; Proof of Concept testa viabilidade técnica.",
    }),
  },
  "proof-of-concept": {
    en: content({
      definition:
        "A Proof of Concept is a limited experiment built to determine whether a technical, scientific, integration, or operational idea is feasible under stated conditions.",
      purpose:
        "It reduces feasibility uncertainty quickly without pretending the experiment has production quality, full user value, support, security, or scale.",
      when: "Create a PoC when a critical unknown can be answered through a bounded experiment with explicit question, constraints, success criteria, timebox, and disposal decision.",
      context:
        "A team needs to know whether an OCR model can extract required fields from poor-quality local documents within an accuracy and latency threshold.",
      application:
        "The PoC runs a representative dataset, measures field accuracy and latency, documents failure classes, and discards the prototype after the decision.",
      phrase:
        "“The PoC proves extraction feasibility; it does not prove security, usability, or production operability.”",
      aliases: ["poc", "proof of concept prototype", "prova de conceito"],
      confusion:
        "A PoC answers feasibility; a prototype explores interaction or form, and an MVP delivers real value to validate product assumptions.",
    }),
    "pt-BR": content({
      definition:
        "Proof of Concept é um experimento limitado que determina se uma ideia técnica, científica, de integração ou operação é viável sob condições declaradas.",
      purpose:
        "Ela reduz incerteza de feasibility sem fingir qualidade de produção, valor completo, suporte, security ou escala.",
      when: "Crie PoC quando uma dúvida crítica puder ser respondida por experimento com pergunta, constraints, success criteria, timebox e descarte explícitos.",
      context:
        "Um time precisa saber se OCR extrai campos de documentos ruins dentro de accuracy e latency definidas.",
      application:
        "A PoC usa dataset representativo, mede accuracy e latency, documenta falhas e descarta o prototype após decisão.",
      phrase:
        "“A PoC prova feasibility de extração; não prova security, usability nem operação em produção.”",
      aliases: ["poc", "proof of concept prototype", "prova de conceito"],
      confusion:
        "PoC responde feasibility; prototype explora interação e MVP entrega valor real para validar product assumptions.",
    }),
  },
  scope: {
    en: content({
      definition:
        "Scope is the explicit boundary of what outcomes, capabilities, work, systems, audiences, constraints, and exclusions are included in an initiative or change.",
      purpose:
        "It creates shared expectations and a basis for estimating, sequencing, accepting, and controlling changes without implying that every detail is permanently fixed.",
      when: "Define scope before committing significant work and revisit it when evidence, risk, dependencies, capacity, or desired outcomes change.",
      context:
        "A checkout improvement could include card payments, subscriptions, refunds, international taxes, redesign, and provider migration.",
      application:
        "The initiative includes one-time card payment reliability for Brazil and explicitly excludes subscriptions, taxes, and visual redesign from the first release.",
      phrase:
        "“Add subscriptions only through an explicit scope tradeoff; it changes rules, testing, migration, and delivery risk.”",
      aliases: ["project scope", "product scope", "escopo"],
      confusion:
        "Scope defines what is included and excluded; requirements describe conditions and needs within that boundary.",
    }),
    "pt-BR": content({
      definition:
        "Scope é a boundary explícita de outcomes, capabilities, trabalho, sistemas, públicos, constraints e exclusões incluídos em uma iniciativa.",
      purpose:
        "Ele cria expectativas e base para estimativa, sequência, acceptance e controle sem fixar todo detalhe permanentemente.",
      when: "Defina scope antes de commitment relevante e revise quando evidence, risk, dependencies, capacity ou outcomes mudarem.",
      context:
        "Uma melhoria de checkout pode incluir cartões, subscriptions, refunds, impostos, redesign e migração de provider.",
      application:
        "A iniciativa inclui reliability de pagamento único no Brasil e exclui subscriptions, impostos e redesign da primeira release.",
      phrase:
        "“Inclua subscriptions somente por trade-off explícito de scope; isso muda regras, testes, migration e risco.”",
      aliases: ["project scope", "product scope", "escopo"],
      confusion:
        "Scope define inclusão e exclusão; requirements descrevem condições e necessidades dentro da boundary.",
    }),
  },
  "scope-creep": {
    en: content({
      definition:
        "Scope Creep is the uncontrolled expansion of committed work through additions or changed expectations without explicit evaluation of value, cost, schedule, risk, and tradeoffs.",
      purpose:
        "Recognizing it protects focus and transparency by ensuring new work changes the plan deliberately rather than accumulating invisibly.",
      when: "Address scope creep when requests enter an active commitment without reprioritization, capacity adjustment, removal of other work, or stakeholder decision.",
      context:
        "A profile-edit project gradually adds avatar processing, identity verification, social sharing, admin tools, and historical audit without changing its deadline.",
      application:
        "The product lead separates requests, evaluates outcomes and dependencies, keeps the committed profile flow, and moves other options to future prioritization.",
      phrase:
        "“This is a valid request, but adding it now is scope creep unless we remove work or change the commitment.”",
      aliases: [
        "scope expansion",
        "uncontrolled scope growth",
        "aumento descontrolado de escopo",
      ],
      confusion:
        "Scope creep is uncontrolled expansion; intentional scope change is acceptable when impacts and tradeoffs are explicitly decided.",
    }),
    "pt-BR": content({
      definition:
        "Scope Creep é a expansão não controlada de trabalho comprometido por adições ou expectativas sem avaliar valor, custo, prazo, risco e trade-offs.",
      purpose:
        "Reconhecê-lo protege foco e transparência garantindo que novo trabalho mude o plano deliberadamente.",
      when: "Trate scope creep quando requests entram sem repriorização, ajuste de capacity, remoção de outro trabalho ou decisão de stakeholders.",
      context:
        "Um projeto de perfil ganha avatar, identidade, social, admin e audit sem mudar deadline.",
      application:
        "Produto separa requests, avalia outcomes e mantém fluxo comprometido, movendo opções para prioridade futura.",
      phrase:
        "“A request é válida, mas adicioná-la agora é scope creep sem remover trabalho ou mudar commitment.”",
      aliases: [
        "scope expansion",
        "uncontrolled scope growth",
        "aumento descontrolado de escopo",
      ],
      confusion:
        "Scope creep é expansão sem controle; mudança intencional é aceitável com impactos e trade-offs decididos.",
    }),
  },
  requirement: {
    en: content({
      definition:
        "A requirement is a documented need, capability, condition, or constraint that a product, service, or process must satisfy for an identified stakeholder or objective.",
      purpose:
        "It translates intent into something that can be analyzed, prioritized, designed, implemented, verified, traced, and changed with understood impact.",
      when: "Capture a requirement when an obligation or need affects the solution, stating source, rationale, acceptance evidence, priority, dependencies, and ambiguity.",
      context:
        "A regulated product must retain consent evidence for a prescribed period and allow authorized retrieval during an audit.",
      application:
        "The requirement records the legal source, retained fields, period, access roles, deletion exception, audit behavior, and testable evidence.",
      phrase:
        "“Link the retention requirement to its legal source and define what evidence proves compliance.”",
      aliases: ["product requirement", "system requirement", "requisito"],
      confusion:
        "A requirement describes a needed condition or capability; a solution specification describes how selected components will satisfy it.",
    }),
    "pt-BR": content({
      definition:
        "Requirement é uma necessidade, capability, condição ou constraint documentada que produto, serviço ou processo deve satisfazer para stakeholder ou objetivo.",
      purpose:
        "Ele transforma intenção em algo analisável, priorizável, projetável, verificável, rastreável e mutável com impacto entendido.",
      when: "Capture requirement quando obrigação ou necessidade afetar a solução, com source, rationale, acceptance evidence, prioridade e dependencies.",
      context:
        "Um produto regulado precisa reter consent evidence por período prescrito e permitir retrieval autorizado em audit.",
      application:
        "O requirement registra fonte legal, fields, período, roles, exceção de deletion, audit e evidência testável.",
      phrase:
        "“Ligue o retention requirement à fonte legal e defina evidência de compliance.”",
      aliases: ["product requirement", "system requirement", "requisito"],
      confusion:
        "Requirement descreve condição ou capability necessária; solution specification descreve como componentes a atendem.",
    }),
  },
  "business-requirement": {
    en: content({
      definition:
        "A business requirement states an organizational outcome, capability, policy, or constraint needed to achieve a business objective, without prescribing detailed system behavior.",
      purpose:
        "It explains why investment is necessary and creates a traceable source from strategic need to product, process, data, and technical requirements.",
      when: "Define business requirements when strategy, regulation, operations, revenue, risk, or customer commitments create a need that solutions must support.",
      context:
        "A retailer must reduce fraudulent refunds while preserving legitimate customer resolution and meeting consumer-protection obligations.",
      application:
        "The requirement sets the target loss and service outcomes and policy constraints; teams derive workflows, controls, data, and system capabilities.",
      phrase:
        "“Keep fraud reduction as the business requirement; device scoring is one possible solution, not the objective itself.”",
      aliases: [
        "business need requirement",
        "business objective requirement",
        "requisito de negócio",
      ],
      confusion:
        "A business requirement states the organizational need; a functional requirement specifies behavior a solution must provide.",
    }),
    "pt-BR": content({
      definition:
        "Business Requirement declara outcome, capability, policy ou constraint organizacional necessária a um objetivo, sem prescrever comportamento detalhado do sistema.",
      purpose:
        "Ele explica por que investir e cria traceability da necessidade para requirements de produto, processo, dados e tecnologia.",
      when: "Defina business requirements quando estratégia, regulação, operação, receita, risco ou commitments criarem necessidade.",
      context:
        "Um varejista precisa reduzir refunds fraudulentos preservando resolução legítima e consumer protection.",
      application:
        "O requirement define outcomes e constraints; times derivam workflows, controls, dados e capabilities.",
      phrase:
        "“Mantenha redução de fraude como business requirement; device scoring é uma possível solução.”",
      aliases: [
        "business need requirement",
        "business objective requirement",
        "requisito de negócio",
      ],
      confusion:
        "Business requirement declara necessidade; functional requirement especifica comportamento da solução.",
    }),
  },
  "functional-requirement": {
    en: content({
      definition:
        "A functional requirement specifies behavior, capability, input, output, rule, or interaction a system must provide under defined conditions.",
      purpose:
        "It turns needs into observable system behavior that can be designed, implemented, accepted, and traced to its source.",
      when: "Write functional requirements for important user and system actions, alternate flows, validations, permissions, state changes, and integrations with testable outcomes.",
      context:
        "Authorized finance users need to approve refunds above a threshold with a second approver and recorded rationale.",
      application:
        "Requirements specify eligible roles, threshold, dual approval sequence, prohibited self-approval, resulting states, notifications, and audit event.",
      phrase:
        "“Specify what happens when the second approver rejects; the success behavior alone is incomplete.”",
      aliases: [
        "system functional requirement",
        "behavioral requirement",
        "requisito funcional",
      ],
      confusion:
        "Functional requirements describe what behavior is provided; non-functional requirements constrain qualities such as performance, security, and reliability.",
    }),
    "pt-BR": content({
      definition:
        "Functional Requirement especifica comportamento, capability, input, output, regra ou interação que o sistema deve oferecer sob condições definidas.",
      purpose:
        "Ele transforma necessidade em comportamento observável, implementável, testável e rastreável.",
      when: "Escreva functional requirements para ações, fluxos alternativos, validations, permissions, mudanças de estado e integrações com outcomes testáveis.",
      context:
        "Finance precisa aprovar refunds acima de threshold com segunda aprovação e rationale registrado.",
      application:
        "Requirements definem roles, threshold, sequência, proibição de self-approval, estados, notifications e audit event.",
      phrase:
        "“Especifique o que ocorre quando a segunda aprovação rejeita; sucesso sozinho é incompleto.”",
      aliases: [
        "system functional requirement",
        "behavioral requirement",
        "requisito funcional",
      ],
      confusion:
        "Functional requirement descreve comportamento; non-functional restringe qualidades como performance, security e reliability.",
    }),
  },
  "non-functional-requirement": {
    en: content({
      definition:
        "A non-functional requirement defines a measurable quality, constraint, or operating condition such as performance, availability, security, accessibility, capacity, or compliance.",
      purpose:
        "It makes system qualities explicit enough to influence architecture, implementation, operations, acceptance, and tradeoffs.",
      when: "Define non-functional requirements with workload, measurement point, environment, percentile or window, threshold, and failure conditions instead of vague words like fast or secure.",
      context:
        "Checkout must remain responsive during peak sales and available despite one zone failure.",
      application:
        "The requirement states request mix, data size, p95 latency, error rate, peak duration, zone-failure scenario, and measurement source.",
      phrase:
        "“Replace 'fast' with the user-visible percentile, workload, environment, and threshold we will test.”",
      aliases: [
        "nfr",
        "quality attribute requirement",
        "requisito não funcional",
      ],
      confusion:
        "A non-functional requirement defines quality or constraint; a functional requirement defines the behavior that the system performs.",
    }),
    "pt-BR": content({
      definition:
        "Non-functional Requirement define qualidade, constraint ou condição operacional mensurável como performance, availability, security, accessibility ou compliance.",
      purpose:
        "Ele torna qualidades explícitas para influenciar architecture, implementação, operação, acceptance e trade-offs.",
      when: "Defina NFR com workload, ponto de medição, ambiente, percentil ou janela, threshold e falhas, não palavras vagas como rápido.",
      context:
        "Checkout precisa responder no pico e continuar disponível durante falha de uma zona.",
      application:
        "O requirement informa mix, dados, p95, error rate, duração, scenario de falha e fonte de medição.",
      phrase:
        "“Troque 'rápido' por percentil, workload, ambiente e threshold que serão testados.”",
      aliases: [
        "nfr",
        "quality attribute requirement",
        "requisito não funcional",
      ],
      confusion:
        "Non-functional requirement define qualidade ou constraint; functional define comportamento executado.",
    }),
  },
  "user-story": {
    en: content({
      definition:
        "A user story is a concise planning item that frames a desired capability from a user's perspective and invites conversation about value, context, and acceptance.",
      purpose:
        "It keeps work connected to an actor and outcome while allowing details and examples to emerge collaboratively instead of treating the sentence as a complete specification.",
      when: "Use user stories for small, negotiable slices of user value that can be discussed, accepted, and delivered within the team's planning horizon.",
      context:
        "Customers cannot understand why a payment failed and repeatedly contact support without knowing the next action.",
      application:
        "A story frames the customer's need for actionable feedback, and conversation adds error classes, safe wording, accessibility, analytics, and acceptance criteria.",
      phrase:
        "“The story starts the conversation; add examples for declined, timed-out, and duplicated payment attempts.”",
      aliases: ["agile user story", "história de usuário", "story card"],
      confusion:
        "A user story is a planning and conversation artifact; a use case describes a fuller interaction flow and system responses.",
    }),
    "pt-BR": content({
      definition:
        "User Story é um item conciso que enquadra capability desejada pela perspectiva da pessoa e convida conversa sobre valor, contexto e acceptance.",
      purpose:
        "Ela conecta trabalho a actor e outcome, deixando detalhes e exemplos emergirem colaborativamente em vez de ser specification completa.",
      when: "Use user stories para slices pequenos e negociáveis de valor discutíveis, aceitáveis e entregáveis no horizonte do time.",
      context:
        "Clientes não entendem falha de pagamento e procuram suporte sem saber a próxima ação.",
      application:
        "A story enquadra feedback acionável e a conversa adiciona classes de erro, wording seguro, accessibility, analytics e criteria.",
      phrase:
        "“A story inicia a conversa; adicione exemplos de decline, timeout e tentativa duplicada.”",
      aliases: ["agile user story", "história de usuário", "story card"],
      confusion:
        "User story é artefato de planejamento e conversa; use case descreve fluxo e responses mais completos.",
    }),
  },
  epic: {
    en: content({
      definition:
        "An epic is a large body of related product work or outcome that is too broad for immediate implementation and must be decomposed into smaller valuable slices.",
      purpose:
        "It groups discovery and delivery around a substantial objective while providing traceability across stories, features, dependencies, and releases.",
      when: "Use an epic for work spanning several increments or teams, defining the intended outcome and splitting it progressively rather than treating it as one oversized ticket.",
      context:
        "A company wants international checkout, involving currencies, taxes, payment methods, localization, fraud, support, and compliance.",
      application:
        "The epic states market outcomes and constraints and is split by country and customer journey into independently testable releases and stories.",
      phrase:
        "“Do not estimate the epic as one item; split the first country journey into valuable, testable slices.”",
      aliases: ["product epic", "agile epic", "épico de produto"],
      confusion:
        "An epic is a large planning container; a user story is a smaller negotiable slice intended for nearer-term delivery.",
    }),
    "pt-BR": content({
      definition:
        "Epic é um grande conjunto de trabalho ou outcome amplo demais para implementação imediata e que deve ser decomposto em slices de valor.",
      purpose:
        "Ele agrupa discovery e delivery em torno de objetivo substancial e rastreia stories, features, dependencies e releases.",
      when: "Use epic em trabalho de vários increments ou times, definindo outcome e dividindo progressivamente em vez de ticket enorme.",
      context:
        "Uma empresa quer checkout internacional com currencies, taxes, payment methods, localization, fraud, support e compliance.",
      application:
        "A epic declara outcomes e constraints e é dividida por país e jornada em releases e stories testáveis.",
      phrase:
        "“Não estime a epic como um item; divida a jornada do primeiro país em slices testáveis.”",
      aliases: ["product epic", "agile epic", "épico de produto"],
      confusion:
        "Epic é container amplo; user story é slice menor e negociável para delivery próximo.",
    }),
  },
  feature: {
    en: content({
      definition:
        "A feature is a coherent product capability or behavior offered to users or customers to help produce a desired outcome.",
      purpose:
        "It groups related interactions and rules into a recognizable unit of value that can be discovered, designed, delivered, released, and measured.",
      when: "Define a feature when a capability has a clear audience, problem, outcome, boundaries, and success evidence, splitting it when useful value can be delivered independently.",
      context:
        "Customers need to pause subscriptions temporarily instead of canceling and later recreating them.",
      application:
        "The pause feature includes eligibility, duration, billing behavior, communication, resume, support visibility, and adoption measurement.",
      phrase:
        "“Describe the outcome of subscription pause before listing screens and endpoints.”",
      aliases: ["product feature", "software feature", "funcionalidade"],
      confusion:
        "A feature is a user- or customer-facing capability; a task is a unit of work that may contribute to a feature without delivering value alone.",
    }),
    "pt-BR": content({
      definition:
        "Feature é uma capability ou comportamento coerente oferecido a pessoas ou clientes para produzir um outcome desejado.",
      purpose:
        "Ela agrupa interações e regras em uma unidade de valor que pode ser descoberta, projetada, entregue, lançada e medida.",
      when: "Defina feature com público, problema, outcome, boundaries e evidência de sucesso claros, dividindo quando houver valor independente.",
      context:
        "Clientes precisam pausar subscriptions temporariamente em vez de cancelar e recriar.",
      application:
        "A feature inclui eligibility, duração, billing, comunicação, resume, suporte e medição de adoption.",
      phrase:
        "“Descreva o outcome de pause antes de listar telas e endpoints.”",
      aliases: ["product feature", "software feature", "funcionalidade"],
      confusion:
        "Feature é capability para usuário; task é unidade de trabalho que pode não entregar valor sozinha.",
    }),
  },
  task: {
    en: content({
      definition:
        "A task is a bounded unit of work describing an action to perform, usually contributing to a larger story, feature, objective, or operational need.",
      purpose:
        "It makes execution visible and assignable at a practical level while preserving its relationship to the value or obligation it supports.",
      when: "Create a task when work is understood enough to act on and benefits from separate tracking, ownership, sequencing, or completion evidence.",
      context:
        "A subscription-pause feature requires a database migration, policy implementation, support documentation, and production dashboard.",
      application:
        "Each task has a clear result and dependency and links to the feature rather than replacing its outcome and acceptance criteria.",
      phrase:
        "“Link the migration task to the pause feature so its technical work remains connected to the product outcome.”",
      aliases: ["work task", "technical task", "tarefa"],
      confusion:
        "A task describes work to perform; a user story frames a negotiable slice of user value and conversation.",
    }),
    "pt-BR": content({
      definition:
        "Task é uma unidade delimitada que descreve ação a executar, normalmente contribuindo para story, feature, objective ou necessidade operacional.",
      purpose:
        "Ela torna execução visível e atribuível enquanto preserva relação com valor ou obrigação apoiados.",
      when: "Crie task quando o trabalho estiver pronto para ação e se beneficiar de tracking, ownership, sequência ou evidence separados.",
      context:
        "Uma feature de pause exige migration, policy, documentação de suporte e dashboard.",
      application:
        "Cada task possui resultado e dependency e se liga à feature sem substituir seu outcome e criteria.",
      phrase:
        "“Ligue a migration task à feature para o trabalho técnico permanecer conectado ao outcome.”",
      aliases: ["work task", "technical task", "tarefa"],
      confusion:
        "Task descreve trabalho; user story enquadra um slice negociável de valor e conversa.",
    }),
  },
  initiative: {
    en: content({
      definition:
        "An initiative is a coordinated strategic effort that combines several investments, products, teams, or workstreams to achieve a significant organizational outcome.",
      purpose:
        "It aligns broad change around one objective and provides governance for dependencies, funding, sequencing, risks, and outcome measurement above individual features or projects.",
      when: "Create an initiative when an outcome requires coordinated work across multiple capabilities or teams over several planning periods.",
      context:
        "Reducing merchant onboarding from weeks to hours requires identity, contracts, risk, payments, support, data, and operational changes.",
      application:
        "The initiative defines the outcome and measures, assigns accountable leadership, coordinates workstreams, and adjusts investment from evidence.",
      phrase:
        "“Keep the initiative measured by onboarding time and completion, not by the number of projects launched.”",
      aliases: [
        "strategic initiative",
        "business initiative",
        "iniciativa estratégica",
      ],
      confusion:
        "An initiative coordinates broad strategic outcomes; an epic is a large product-work container typically decomposed within delivery planning.",
    }),
    "pt-BR": content({
      definition:
        "Initiative é um esforço estratégico coordenado que combina investimentos, produtos, times ou workstreams para alcançar outcome organizacional relevante.",
      purpose:
        "Ela alinha mudança ampla e governa dependencies, funding, sequência, riscos e medição acima de features ou projects individuais.",
      when: "Crie initiative quando um outcome exigir trabalho coordenado entre capabilities ou times por vários períodos.",
      context:
        "Reduzir onboarding de merchants exige mudanças em identidade, contratos, risco, pagamentos, suporte e operação.",
      application:
        "A initiative define outcome e métricas, leadership accountable, workstreams e ajuste de investimento por evidence.",
      phrase:
        "“Meça a initiative por tempo e conclusão de onboarding, não pela quantidade de projects.”",
      aliases: [
        "strategic initiative",
        "business initiative",
        "iniciativa estratégica",
      ],
      confusion:
        "Initiative coordena outcome estratégico amplo; epic é container grande de trabalho de produto.",
    }),
  },
  kpi: {
    en: content({
      definition:
        "A Key Performance Indicator is a selected quantitative measure that reflects how effectively an organization, product, process, or capability is performing against an important objective.",
      purpose:
        "It focuses attention on a few decision-relevant signals and enables trend, target, segmentation, and intervention analysis.",
      when: "Choose a KPI when a measure is material to success and actionable, defining formula, source, owner, frequency, segments, target, and guardrails.",
      context:
        "A subscription product wants sustainable growth, but raw signups rise while early cancellations also increase.",
      application:
        "The team uses retained paid accounts at day 90 as a KPI, segments cohorts, validates data, and pairs it with customer and revenue guardrails.",
      phrase:
        "“Define the KPI denominator and cohort window; otherwise teams will calculate retention differently.”",
      aliases: [
        "key performance indicator",
        "performance indicator",
        "indicador-chave de desempenho",
      ],
      confusion:
        "A KPI is an important ongoing performance measure; a metric is any measurement and may not be strategically key.",
    }),
    "pt-BR": content({
      definition:
        "Key Performance Indicator é uma medida quantitativa selecionada que reflete desempenho de organização, product, process ou capability contra objetivo importante.",
      purpose:
        "Ele concentra atenção em sinais úteis para decisão e permite análise de trend, target, segmentos e intervenções.",
      when: "Escolha KPI material e acionável, definindo fórmula, source, owner, frequência, segmentos, target e guardrails.",
      context:
        "Um subscription product cresce em signups enquanto cancelamentos iniciais também aumentam.",
      application:
        "O time usa contas pagas retidas no dia 90, segmenta cohorts, valida dados e acompanha guardrails.",
      phrase:
        "“Defina denominator e cohort window do KPI ou os times calcularão retention de formas diferentes.”",
      aliases: [
        "key performance indicator",
        "performance indicator",
        "indicador-chave de desempenho",
      ],
      confusion:
        "KPI é medida contínua importante; metric é qualquer medição e pode não ser estratégica.",
    }),
  },
  okr: {
    en: content({
      definition:
        "Objectives and Key Results is a goal-setting framework pairing a qualitative direction with a small set of measurable outcomes that indicate progress or achievement.",
      purpose:
        "It aligns teams on desired change and evidence while separating outcomes from the initiatives and tasks chosen to influence them.",
      when: "Use OKRs for focused planning cycles where teams need alignment and measurable ambition, avoiding key results that merely count output.",
      context:
        "A product wants new customers to experience value sooner but teams are proposing unrelated onboarding features.",
      application:
        "The objective states faster confident activation; key results cover completion, time-to-value, and early retention, while experiments remain initiatives.",
      phrase:
        "“Shipping the tutorial is an initiative, not a key result; measure whether activation and time-to-value improve.”",
      aliases: [
        "objectives and key results",
        "objective key results",
        "objetivos e resultados-chave",
      ],
      confusion:
        "An OKR sets a direction and measurable outcomes; a KPI monitors important ongoing performance and may supply evidence for an OKR.",
    }),
    "pt-BR": content({
      definition:
        "Objectives and Key Results é um framework que combina direção qualitativa com poucos outcomes mensuráveis que indicam progresso ou alcance.",
      purpose:
        "Ele alinha times na mudança desejada e evidências, separando outcomes das initiatives e tasks escolhidas.",
      when: "Use OKRs em ciclos de foco e alinhamento com ambição mensurável, evitando key results que apenas contem outputs.",
      context:
        "Um product quer clientes percebendo valor cedo, mas times propõem features de onboarding desconectadas.",
      application:
        "O objective declara activation rápida; key results medem conclusão, time-to-value e retention, enquanto experiments são initiatives.",
      phrase:
        "“Entregar tutorial é initiative, não key result; meça activation e time-to-value.”",
      aliases: [
        "objectives and key results",
        "objective key results",
        "objetivos e resultados-chave",
      ],
      confusion:
        "OKR define direção e outcomes; KPI monitora performance contínua e pode fornecer evidência ao OKR.",
    }),
  },
  roi: {
    en: content({
      definition:
        "Return on Investment is the financial ratio between the net gain produced by an investment and its cost, usually expressed as a percentage.",
      purpose:
        "It helps compare whether an initiative creates enough economic return for the capital, time, and operating expense committed to it.",
      when: "Use ROI when benefits and costs can be translated into money over an explicit time horizon, and state the assumptions behind both values.",
      context:
        "A company is deciding whether automating invoice reconciliation is worth the engineering effort and subscription expense.",
      application:
        "The team estimates avoided manual labor and errors, subtracts implementation and recurring costs, then divides the net gain by total investment.",
      phrase:
        "The projected annual gain is $150,000 on a $100,000 investment, so the estimated ROI is 50%.",
      aliases: [
        "return on investment",
        "investment return",
        "retorno sobre investimento",
      ],
      confusion:
        "ROI measures relative financial return; revenue is gross income, while profit subtracts costs without normalizing by the invested amount.",
    }),
    "pt-BR": content({
      definition:
        "Return on Investment é a razão financeira entre o ganho líquido produzido por um investimento e seu custo, normalmente expressa em porcentagem.",
      purpose:
        "Ele ajuda a comparar se uma iniciativa gera retorno econômico suficiente para o capital, tempo e despesa operacional comprometidos.",
      when: "Use ROI quando benefícios e custos puderem ser convertidos em dinheiro num horizonte explícito, documentando as premissas de ambos.",
      context:
        "Uma empresa avalia se automatizar a conciliação de invoices compensa o esforço de engenharia e a assinatura da ferramenta.",
      application:
        "O time estima trabalho manual e erros evitados, subtrai custos de implementação e recorrência e divide o ganho líquido pelo investimento total.",
      phrase:
        "O ganho anual projetado é R$ 150 mil sobre investimento de R$ 100 mil; portanto, o ROI estimado é 50%.",
      aliases: [
        "return on investment",
        "investment return",
        "retorno sobre investimento",
      ],
      confusion:
        "ROI mede retorno financeiro relativo; revenue é receita bruta, enquanto profit desconta custos sem normalizar pelo valor investido.",
    }),
  },
  "time-to-market": {
    en: content({
      definition:
        "Time to Market is the elapsed time from a defined product opportunity or commitment until the resulting offering becomes available to its intended market.",
      purpose:
        "It exposes how quickly an organization converts an opportunity into customer access, affecting learning speed, competitive timing, and delayed revenue.",
      when: "Track it for comparable classes of work with clear start and release points; segment the measure instead of averaging unrelated changes.",
      context:
        "A fintech repeatedly identifies regulatory opportunities early but launches after competitors because approval and integration queues remain hidden.",
      application:
        "The product group measures discovery, decision, development, compliance, and rollout intervals separately, then removes the longest waiting constraints.",
      phrase:
        "Coding took two weeks, but approval queues made our Time to Market four months.",
      aliases: [
        "ttm",
        "time-to-market",
        "market launch time",
        "tempo até o mercado",
      ],
      confusion:
        "Time to Market ends at market availability; lead time is a broader flow measure whose start and finish depend on the process being analyzed.",
    }),
    "pt-BR": content({
      definition:
        "Time to Market é o tempo decorrido entre uma oportunidade ou compromisso definido e a disponibilização da oferta ao mercado pretendido.",
      purpose:
        "Ele revela a rapidez com que a organização transforma oportunidade em acesso para clientes, afetando aprendizado, competição e receita adiada.",
      when: "Acompanhe-o em classes comparáveis de trabalho, com início e release claros; segmente a medida em vez de misturar mudanças diferentes.",
      context:
        "Uma fintech encontra oportunidades regulatórias cedo, mas lança depois dos concorrentes porque filas de aprovação e integração ficam ocultas.",
      application:
        "O product group mede separadamente discovery, decisão, desenvolvimento, compliance e rollout e reduz as esperas que mais limitam o fluxo.",
      phrase:
        "O código levou duas semanas, mas as filas de aprovação elevaram nosso Time to Market a quatro meses.",
      aliases: [
        "ttm",
        "time-to-market",
        "market launch time",
        "tempo até o mercado",
      ],
      confusion:
        "Time to Market termina na disponibilidade ao mercado; lead time mede um fluxo mais geral, com limites definidos pelo processo analisado.",
    }),
  },
  churn: {
    en: content({
      definition:
        "Churn is the loss of customers, subscribers, accounts, or recurring revenue from an existing base during a defined period.",
      purpose:
        "It quantifies erosion of the customer base or revenue stream, revealing whether acquisition is being offset by cancellation, downgrade, or non-renewal.",
      when: "Measure churn for recurring relationships, specifying the population, period, customer versus revenue basis, and treatment of reactivations and upgrades.",
      context:
        "A SaaS business keeps adding accounts, yet monthly recurring revenue barely grows because established customers cancel after onboarding.",
      application:
        "The analyst divides customers lost during the month by customers active at its start and separately calculates gross and net revenue churn.",
      phrase:
        "Acquisition rose, but customer churn increased from 3% to 6%, leaving the active base almost unchanged.",
      aliases: [
        "attrition",
        "customer churn",
        "revenue churn",
        "cancelamento de clientes",
      ],
      confusion:
        "Churn measures departures from an existing base; retention measures the complementary share that remains, though revenue retention may also include expansion.",
    }),
    "pt-BR": content({
      definition:
        "Churn é a perda de clientes, assinantes, contas ou receita recorrente de uma base existente durante um período definido.",
      purpose:
        "Ele quantifica a erosão da base ou receita, mostrando se aquisição está sendo anulada por cancelamentos, downgrades ou não renovações.",
      when: "Meça churn em relações recorrentes, declarando população, período, base de clientes ou receita e tratamento de reativações e upgrades.",
      context:
        "Um SaaS adiciona contas continuamente, mas a receita recorrente quase não cresce porque clientes antigos cancelam após o onboarding.",
      application:
        "A analista divide clientes perdidos no mês pelos clientes ativos no início e calcula separadamente gross e net revenue churn.",
      phrase:
        "A aquisição cresceu, mas o customer churn passou de 3% para 6%, deixando a base ativa quase igual.",
      aliases: [
        "attrition",
        "customer churn",
        "revenue churn",
        "cancelamento de clientes",
      ],
      confusion:
        "Churn mede saídas da base existente; retention mede a parcela complementar que permanece, embora revenue retention possa incluir expansão.",
    }),
  },
  conversion: {
    en: content({
      definition:
        "Conversion is the completion of a defined target action by a person or account after entering an eligible audience or stage of a journey.",
      purpose:
        "It connects product or commercial behavior to a measurable outcome such as registration, activation, purchase, upgrade, or renewal.",
      when: "Use a conversion metric only after defining the event, eligible denominator, attribution window, and journey stage so the rate is interpretable.",
      context:
        "Many visitors open a pricing page, but the company cannot tell whether a redesign improves paid subscriptions.",
      application:
        "Analytics records eligible pricing-page visitors and subscriptions completed within seven days, then segments the conversion rate by channel and device.",
      phrase:
        "The page increased trial starts, but paid conversion stayed flat, so the bottleneck moved rather than disappeared.",
      aliases: ["conversion event", "conversion rate", "conversão"],
      confusion:
        "A conversion is the target event; conversion rate is converted entities divided by the eligible population, not a raw event count.",
    }),
    "pt-BR": content({
      definition:
        "Conversion é a conclusão de uma ação-alvo definida por uma pessoa ou conta após entrar num público ou etapa elegível da jornada.",
      purpose:
        "Ela conecta comportamento de produto ou comercial a um outcome mensurável, como cadastro, activation, compra, upgrade ou renovação.",
      when: "Use a métrica somente após definir evento, denominador elegível, janela de atribuição e etapa da jornada para a taxa ser interpretável.",
      context:
        "Muitas pessoas abrem a página de preços, mas a empresa não sabe se o redesign melhora assinaturas pagas.",
      application:
        "Analytics registra visitantes elegíveis e assinaturas concluídas em sete dias e segmenta a conversion rate por canal e dispositivo.",
      phrase:
        "A página elevou trials, mas a paid conversion ficou estável; o gargalo apenas mudou de etapa.",
      aliases: ["conversion event", "conversion rate", "conversão"],
      confusion:
        "Conversion é o evento-alvo; conversion rate divide entidades convertidas pela população elegível, não sendo uma contagem bruta.",
    }),
  },
  retention: {
    en: content({
      definition:
        "Retention is the proportion of a starting customer, user, or revenue cohort that remains active or recurring after a specified interval.",
      purpose:
        "It indicates whether a product continues delivering enough value for people or accounts to return, renew, or preserve recurring revenue.",
      when: "Measure retention when continued behavior matters, defining activity, cohort start, observation interval, and whether the metric concerns users or revenue.",
      context:
        "A mobile product attracts many weekly sign-ups, but the team needs to know whether those cohorts still complete useful work a month later.",
      application:
        "The team groups users by first-use week and plots the percentage performing the core action in weeks one, four, and twelve.",
      phrase:
        "Week-four retention improved after onboarding began leading users to the core workflow instead of optional settings.",
      aliases: [
        "customer retention",
        "user retention",
        "revenue retention",
        "retenção",
      ],
      confusion:
        "Retention measures what remains from a cohort; engagement measures intensity or frequency and does not necessarily imply continued membership.",
    }),
    "pt-BR": content({
      definition:
        "Retention é a proporção de uma coorte inicial de clientes, usuários ou receita que permanece ativa ou recorrente após um intervalo definido.",
      purpose:
        "Ela indica se o product continua entregando valor suficiente para pessoas ou contas retornarem, renovarem ou preservarem receita recorrente.",
      when: "Meça retention quando continuidade importar, definindo atividade, início da coorte, intervalo de observação e base de usuários ou receita.",
      context:
        "Um aplicativo atrai muitos cadastros semanais, mas o time precisa saber se essas coortes ainda realizam trabalho útil um mês depois.",
      application:
        "O time agrupa usuários pela semana do primeiro uso e acompanha a porcentagem que executa a core action nas semanas um, quatro e doze.",
      phrase:
        "A week-four retention melhorou quando o onboarding passou a conduzir ao core workflow em vez de configurações opcionais.",
      aliases: [
        "customer retention",
        "user retention",
        "revenue retention",
        "retenção",
      ],
      confusion:
        "Retention mede o que permanece de uma coorte; engagement mede intensidade ou frequência e não garante continuidade.",
    }),
  },
  b2c: {
    en: content({
      definition:
        "Business to Consumer describes a commercial model in which an organization sells products or services directly to individual end consumers.",
      purpose:
        "It frames product, pricing, distribution, support, and growth decisions around personal buyers who usually make shorter, lower-value purchase decisions at scale.",
      when: "Use B2C when the paying customer is an individual acting for personal needs, even if business partners participate in distribution or fulfillment.",
      context:
        "A streaming service offers monthly subscriptions directly to viewers through its website and mobile applications.",
      application:
        "The company optimizes self-service signup, consumer pricing, payment methods, recommendations, and high-volume support for individual subscribers.",
      phrase:
        "Our B2C checkout must explain the monthly price and let a viewer start immediately without a sales call.",
      aliases: [
        "business to consumer",
        "business-to-consumer",
        "empresa para consumidor",
      ],
      confusion:
        "B2C sells to individual consumers; B2B sells to organizations and commonly involves multiple stakeholders, procurement, and longer contracts.",
    }),
    "pt-BR": content({
      definition:
        "Business to Consumer descreve o modelo comercial em que uma organização vende produtos ou serviços diretamente ao consumidor final individual.",
      purpose:
        "Ele orienta produto, preço, distribuição, suporte e growth para compradores pessoais, geralmente com decisões mais curtas e de menor valor em escala.",
      when: "Use B2C quando quem paga é uma pessoa agindo por necessidade pessoal, mesmo que parceiros empresariais participem da distribuição.",
      context:
        "Um serviço de streaming oferece assinaturas mensais diretamente a espectadores pelo site e por aplicativos.",
      application:
        "A empresa otimiza cadastro self-service, preços, pagamentos, recomendações e suporte de alto volume para assinantes individuais.",
      phrase:
        "Nosso checkout B2C deve explicar a mensalidade e permitir que a pessoa comece sem uma conversa com vendas.",
      aliases: [
        "business to consumer",
        "business-to-consumer",
        "empresa para consumidor",
      ],
      confusion:
        "B2C vende para consumidores individuais; B2B vende para organizações e costuma envolver stakeholders, compras e contratos mais longos.",
    }),
  },
  saas: {
    en: content({
      definition:
        "Software as a Service is software operated by a provider and made available to customers over a network, commonly through a subscription or usage-based agreement.",
      purpose:
        "It lets customers use continuously maintained software without owning its deployment infrastructure while the provider manages availability, updates, and shared operations.",
      when: "Choose SaaS when centralized operation, frequent updates, network access, and recurring service economics fit customer and regulatory requirements.",
      context:
        "A company needs collaborative accounting software for distributed teams without installing and upgrading servers at each office.",
      application:
        "The provider hosts a multi-tenant application, releases changes centrally, monitors service levels, and bills each organization by plan and seats.",
      phrase:
        "Because this is SaaS, the customer subscribes to the operated service rather than receiving a server package to maintain.",
      aliases: [
        "software as a service",
        "software-as-a-service",
        "software como serviço",
      ],
      confusion:
        "SaaS is a delivered software service; cloud computing is the broader on-demand infrastructure and platform model that may host it.",
    }),
    "pt-BR": content({
      definition:
        "Software as a Service é software operado por um fornecedor e disponibilizado pela rede, normalmente por assinatura ou cobrança baseada em uso.",
      purpose:
        "Ele permite usar software mantido continuamente sem possuir a infraestrutura de deployment, enquanto o fornecedor cuida de disponibilidade, updates e operação.",
      when: "Escolha SaaS quando operação centralizada, atualizações frequentes, acesso por rede e economia recorrente atenderem clientes e regulação.",
      context:
        "Uma empresa precisa de software contábil colaborativo sem instalar e atualizar servidores em cada escritório.",
      application:
        "O provider hospeda uma aplicação multi-tenant, publica mudanças centralmente, monitora SLAs e cobra cada organização por plano e seats.",
      phrase:
        "Por ser SaaS, o cliente assina o serviço operado em vez de receber um pacote de servidor para manter.",
      aliases: [
        "software as a service",
        "software-as-a-service",
        "software como serviço",
      ],
      confusion:
        "SaaS é software entregue como serviço; cloud computing é o modelo mais amplo de infraestrutura e plataforma sob demanda que pode hospedá-lo.",
    }),
  },
  "white-label": {
    en: content({
      definition:
        "White Label is a product or service built by one provider that another organization rebrands and offers to its own customers as part of its portfolio.",
      purpose:
        "It shortens entry into a market by reusing an operated capability while allowing the distributing organization to control brand and customer relationship.",
      when: "Use a White Label arrangement when shared core functionality is acceptable and branding, configuration, support ownership, data boundaries, and roadmap control are contractually clear.",
      context:
        "A bank wants to offer investment accounts under its brand without building the complete brokerage platform.",
      application:
        "A fintech supplies the regulated platform and APIs while the bank applies its identity, configures plans, supports customers, and discloses responsibilities.",
      phrase:
        "The mobile experience carries the bank's brand, but the White Label trading capability is operated by our partner.",
      aliases: ["white-label", "private label", "marca branca"],
      confusion:
        "White Label permits another seller's branding; outsourcing delegates work but does not necessarily change whose brand the customer sees.",
    }),
    "pt-BR": content({
      definition:
        "White Label é um produto ou serviço criado por um fornecedor que outra organização personaliza com sua marca e oferece aos próprios clientes.",
      purpose:
        "Ele encurta a entrada num mercado ao reutilizar uma capacidade operada, permitindo que a distribuidora controle marca e relacionamento com clientes.",
      when: "Use White Label quando o core compartilhado for aceitável e marca, configuração, suporte, dados e controle de roadmap estiverem claros em contrato.",
      context:
        "Um banco quer oferecer investimentos com sua marca sem construir toda a plataforma de corretagem.",
      application:
        "Uma fintech fornece plataforma regulada e APIs, enquanto o banco aplica identidade, configura planos, atende clientes e informa responsabilidades.",
      phrase:
        "A experiência exibe a marca do banco, mas a capacidade White Label de negociação é operada pelo parceiro.",
      aliases: ["white-label", "private label", "marca branca"],
      confusion:
        "White Label permite a marca de outro vendedor; outsourcing delega trabalho, mas não necessariamente altera a marca vista pelo cliente.",
    }),
  },
  marketplace: {
    en: content({
      definition:
        "A Marketplace is a multi-sided product that enables independent suppliers and buyers to discover, transact, and often establish trust through a shared platform.",
      purpose:
        "It reduces search and transaction friction between market sides while coordinating inventory, demand, payments, reputation, policies, and dispute handling.",
      when: "Build or use a Marketplace when value depends on matching distinct participant groups and the platform can overcome liquidity, trust, and governance challenges.",
      context:
        "Freelance specialists struggle to find suitable projects while companies struggle to assess availability and credibility.",
      application:
        "The platform attracts both sides, structures listings and search, verifies participants, processes payments, collects reviews, and resolves disputes.",
      phrase:
        "Adding buyers alone will not solve the Marketplace problem if qualified supply is unavailable in their region.",
      aliases: [
        "online marketplace",
        "digital marketplace",
        "two-sided marketplace",
        "mercado digital",
      ],
      confusion:
        "A Marketplace mediates exchanges among independent sides; a conventional e-commerce retailer primarily sells inventory it controls.",
    }),
    "pt-BR": content({
      definition:
        "Marketplace é um produto de múltiplos lados que permite a fornecedores e compradores independentes descobrir, transacionar e construir confiança numa plataforma comum.",
      purpose:
        "Ele reduz atrito de busca e transação, coordenando oferta, demanda, pagamentos, reputação, políticas e disputas.",
      when: "Crie ou use Marketplace quando o valor depender de conectar grupos distintos e a plataforma puder enfrentar liquidez, confiança e governança.",
      context:
        "Especialistas autônomos têm dificuldade para encontrar projetos, enquanto empresas não conseguem avaliar disponibilidade e credibilidade.",
      application:
        "A plataforma atrai os dois lados, estrutura listings e busca, verifica participantes, processa pagamentos, coleta reviews e resolve disputas.",
      phrase:
        "Trazer compradores não resolve o Marketplace se não houver supply qualificado na região deles.",
      aliases: [
        "online marketplace",
        "digital marketplace",
        "two-sided marketplace",
        "mercado digital",
      ],
      confusion:
        "Marketplace intermedeia trocas entre lados independentes; um e-commerce varejista normalmente vende estoque que controla.",
    }),
  },
  fintech: {
    en: content({
      definition:
        "Financial Technology refers to technology-centered products and companies that deliver, improve, or infrastructure financial services such as payments, credit, investment, or insurance.",
      purpose:
        "It applies software, data, and new operating models to reduce friction, expand access, manage risk, or create financial capabilities.",
      when: "Use the term when technology is central to a financial product or its infrastructure, while still identifying the specific regulated activity involved.",
      context:
        "Small merchants need to accept instant payments and reconcile transactions without acquiring traditional point-of-sale infrastructure.",
      application:
        "A Fintech integrates payment rails, identity checks, fraud controls, ledgers, settlement, and compliance into a mobile service.",
      phrase:
        "Calling it a Fintech does not remove banking obligations; the payment flow still requires licensing, controls, and reconciliation.",
      aliases: [
        "financial technology",
        "finance technology",
        "tecnologia financeira",
      ],
      confusion:
        "Fintech describes a technology-driven financial domain or company; a bank is a legally defined institution and may itself operate as a Fintech.",
    }),
    "pt-BR": content({
      definition:
        "Financial Technology refere-se a produtos e empresas centrados em tecnologia que entregam, melhoram ou sustentam serviços como pagamentos, crédito, investimentos ou seguros.",
      purpose:
        "Ela aplica software, dados e novos modelos operacionais para reduzir atrito, ampliar acesso, administrar risco ou criar capacidades financeiras.",
      when: "Use o termo quando tecnologia for central ao serviço ou à infraestrutura financeira, identificando também a atividade regulada específica.",
      context:
        "Pequenos lojistas precisam aceitar pagamentos instantâneos e conciliar transações sem infraestrutura tradicional de ponto de venda.",
      application:
        "Uma Fintech integra payment rails, verificação de identidade, fraude, ledgers, settlement e compliance num serviço móvel.",
      phrase:
        "Chamar de Fintech não elimina obrigações bancárias; o fluxo ainda exige licenças, controles e conciliação.",
      aliases: [
        "financial technology",
        "finance technology",
        "tecnologia financeira",
      ],
      confusion:
        "Fintech descreve domínio ou empresa financeira movida por tecnologia; banco é uma instituição legalmente definida e também pode operar como Fintech.",
    }),
  },
  erp: {
    en: content({
      definition:
        "Enterprise Resource Planning is an integrated software system that records and coordinates core organizational processes such as finance, procurement, inventory, production, and human resources.",
      purpose:
        "It provides shared process controls and authoritative operational data across departments that would otherwise maintain disconnected records and workflows.",
      when: "Use an ERP when several business functions need consistent master data, accounting controls, traceable transactions, and coordinated end-to-end processes.",
      context:
        "A manufacturer tracks purchasing, stock, production orders, invoices, and accounting in separate systems whose balances regularly disagree.",
      application:
        "The organization configures common products, suppliers, accounts, approvals, and posting rules so one purchase updates inventory, liabilities, and reporting.",
      phrase:
        "The ERP purchase receipt increased stock and created the accounting obligation from the same controlled transaction.",
      aliases: [
        "enterprise resource planning",
        "enterprise management system",
        "sistema integrado de gestão",
      ],
      confusion:
        "An ERP coordinates internal resources and transactions; a CRM concentrates on customer relationships, sales activity, and service interactions.",
    }),
    "pt-BR": content({
      definition:
        "Enterprise Resource Planning é um sistema integrado que registra e coordena processos centrais como finanças, compras, estoque, produção e recursos humanos.",
      purpose:
        "Ele fornece controles compartilhados e dados operacionais confiáveis entre departamentos que, de outro modo, manteriam registros e workflows desconectados.",
      when: "Use ERP quando várias funções precisarem de master data consistente, controles contábeis, transações rastreáveis e processos integrados.",
      context:
        "Uma indústria controla compras, estoque, ordens, invoices e contabilidade em sistemas separados cujos saldos divergem.",
      application:
        "A organização configura produtos, fornecedores, contas e aprovações comuns para uma compra atualizar estoque, passivo e relatórios.",
      phrase:
        "O recebimento no ERP aumentou o estoque e criou a obrigação contábil a partir da mesma transação controlada.",
      aliases: [
        "enterprise resource planning",
        "enterprise management system",
        "sistema integrado de gestão",
      ],
      confusion:
        "ERP coordena recursos e transações internas; CRM concentra relacionamento com clientes, vendas e atendimento.",
    }),
  },
  crm: {
    en: content({
      definition:
        "Customer Relationship Management is the strategy and supporting system used to manage an organization's interactions, history, opportunities, and service relationships with customers and prospects.",
      purpose:
        "It creates a shared view of customer context so marketing, sales, success, and support can coordinate communication and relationship decisions.",
      when: "Use a CRM when customer interactions span people and channels and require traceable ownership, pipeline, consent, follow-up, and service history.",
      context:
        "Sales representatives, onboarding specialists, and support agents each keep separate notes about the same business account.",
      application:
        "The company centralizes contacts, communications, opportunities, tasks, account status, and support handoffs with access and data-quality rules.",
      phrase:
        "Check the CRM before contacting this account; support recorded an unresolved billing issue yesterday.",
      aliases: [
        "customer relationship management",
        "customer management system",
        "gestão de relacionamento com clientes",
      ],
      confusion:
        "CRM organizes customer relationships and commercial interactions; ERP integrates internal resource planning and transactional operations.",
    }),
    "pt-BR": content({
      definition:
        "Customer Relationship Management é a estratégia e o sistema de apoio usados para administrar interações, histórico, oportunidades e serviços com clientes e prospects.",
      purpose:
        "Ele cria uma visão compartilhada do contexto do cliente para marketing, vendas, success e suporte coordenarem comunicação e decisões.",
      when: "Use CRM quando interações atravessarem pessoas e canais e exigirem ownership, pipeline, consentimento, follow-up e histórico rastreáveis.",
      context:
        "Representantes de vendas, onboarding e suporte mantêm anotações separadas sobre a mesma conta empresarial.",
      application:
        "A empresa centraliza contatos, comunicações, opportunities, tasks, status da conta e handoffs com regras de acesso e qualidade de dados.",
      phrase:
        "Consulte o CRM antes de falar com esta conta; o suporte registrou ontem um problema de cobrança ainda aberto.",
      aliases: [
        "customer relationship management",
        "customer management system",
        "gestão de relacionamento com clientes",
      ],
      confusion:
        "CRM organiza relacionamento e interações comerciais; ERP integra planejamento de recursos e operações transacionais internas.",
    }),
  },
  "stakeholder-management": {
    en: content({
      definition:
        "Stakeholder Management is the continuous practice of identifying people affected by or influential over an initiative, understanding their interests, and shaping appropriate involvement and communication.",
      purpose:
        "It surfaces competing needs, decision authority, risks, and dependencies early enough to build alignment and make accountable tradeoffs.",
      when: "Use it throughout work that crosses teams, customers, executives, regulators, partners, or operations rather than treating it as a launch-time status exercise.",
      context:
        "A new identity flow affects conversion, fraud, support, legal compliance, and a partner API, but each group expects a different outcome.",
      application:
        "The lead maps influence and impact, clarifies decision rights, interviews affected groups, documents tradeoffs, and adapts participation and updates over time.",
      phrase:
        "Legal must approve the policy, Support should test the recovery flow, and affected customers need notice before rollout.",
      aliases: [
        "stakeholder engagement",
        "stakeholder coordination",
        "gestão de partes interessadas",
      ],
      confusion:
        "Stakeholder Management builds informed participation and alignment; project communication is one mechanism within it, not the entire practice.",
    }),
    "pt-BR": content({
      definition:
        "Stakeholder Management é a prática contínua de identificar pessoas afetadas ou influentes, compreender seus interesses e definir envolvimento e comunicação adequados.",
      purpose:
        "Ela revela necessidades concorrentes, autoridade decisória, riscos e dependencies cedo o bastante para criar alinhamento e trade-offs responsáveis.",
      when: "Use-a durante trabalhos que atravessem times, clientes, executivos, reguladores, parceiros ou operações, não apenas como status no lançamento.",
      context:
        "Um novo fluxo de identidade afeta conversion, fraude, suporte, compliance e API parceira, mas cada grupo espera um outcome diferente.",
      application:
        "A liderança mapeia influência e impacto, esclarece decision rights, entrevista grupos, registra trade-offs e adapta participação e updates.",
      phrase:
        "Legal aprova a política, Suporte testa recovery e clientes afetados recebem aviso antes do rollout.",
      aliases: [
        "stakeholder engagement",
        "stakeholder coordination",
        "gestão de partes interessadas",
      ],
      confusion:
        "Stakeholder Management cria participação informada e alinhamento; comunicação de projeto é apenas um de seus mecanismos.",
    }),
  },
  "product-discovery": {
    en: content({
      definition:
        "Product Discovery is the evidence-driven work of reducing uncertainty about customer problems, desired outcomes, solution usability, feasibility, viability, and risks before and during delivery.",
      purpose:
        "It helps teams avoid investing heavily in solutions that customers do not need, cannot use, cannot support the business, or cannot be built responsibly.",
      when: "Use discovery continuously wherever important assumptions or risks remain, scaling the research and experiments to the cost of being wrong.",
      context:
        "A team assumes customers want an automated report, but does not know who makes the decision, what action follows it, or whether data is trustworthy.",
      application:
        "The trio interviews users, maps the decision, prototypes alternatives, tests comprehension, inspects data constraints, and chooses the smallest useful experiment.",
      phrase:
        "Discovery showed the real problem was delayed data, so another dashboard would not improve the decision.",
      aliases: [
        "continuous discovery",
        "product research",
        "descoberta de produto",
      ],
      confusion:
        "Product Discovery reduces uncertainty about what should work; delivery builds, releases, and operates the chosen solution, with feedback connecting both.",
    }),
    "pt-BR": content({
      definition:
        "Product Discovery é o trabalho orientado por evidências que reduz incerteza sobre problema, outcomes, usabilidade, feasibility, viability e riscos antes e durante delivery.",
      purpose:
        "Ele evita investir muito em soluções desnecessárias, difíceis de usar, inviáveis para o negócio ou impossíveis de construir responsavelmente.",
      when: "Use discovery continuamente onde houver assumptions ou riscos relevantes, dimensionando pesquisa e experiments ao custo de errar.",
      context:
        "Um time supõe que clientes querem relatório automático, mas desconhece quem decide, qual ação vem depois e se os dados são confiáveis.",
      application:
        "O trio entrevista usuários, mapeia a decisão, prototipa opções, testa compreensão, verifica dados e escolhe o menor experiment útil.",
      phrase:
        "Discovery mostrou que o problema era atraso nos dados; outro dashboard não melhoraria a decisão.",
      aliases: [
        "continuous discovery",
        "product research",
        "descoberta de produto",
      ],
      confusion:
        "Product Discovery reduz incerteza sobre o que deve funcionar; delivery constrói, lança e opera a solução, conectados por feedback.",
    }),
  },
  "product-market-fit": {
    en: content({
      definition:
        "Product-Market Fit is the condition in which a defined market has a strong, repeatable need for a product and the product satisfies it well enough to sustain adoption and retention.",
      purpose:
        "It distinguishes early interest from durable market pull, informing whether the organization should keep searching, strengthen the product, or scale distribution.",
      when: "Assess it for a specific product and market segment using converging behavioral, qualitative, and economic evidence rather than declaring it from one metric.",
      context:
        "A startup has enthusiastic pilot users but needs to know whether the same segment adopts, pays, stays, and recommends without founder-led effort.",
      application:
        "The team studies retention cohorts, repeat usage, willingness to pay, organic demand, sales friction, and interviews before increasing acquisition spend.",
      phrase:
        "High sign-up volume is encouraging, but weak retention means we have not demonstrated Product-Market Fit.",
      aliases: [
        "pmf",
        "product market fit",
        "product-market fit",
        "aderência produto-mercado",
      ],
      confusion:
        "Product-Market Fit is sustained fit between a product and segment; market validation is earlier evidence that a problem and possible demand exist.",
    }),
    "pt-BR": content({
      definition:
        "Product-Market Fit é a condição em que um mercado definido possui necessidade forte e repetível e o produto a satisfaz o bastante para sustentar adoption e retention.",
      purpose:
        "Ele separa interesse inicial de demanda durável, orientando se a organização deve continuar buscando, fortalecer o product ou escalar distribuição.",
      when: "Avalie-o para product e segmento específicos usando evidências comportamentais, qualitativas e econômicas convergentes, não uma única métrica.",
      context:
        "Uma startup tem pilotos entusiasmados, mas precisa saber se o mesmo segmento adota, paga, permanece e recomenda sem esforço dos founders.",
      application:
        "O time estuda cohorts de retention, uso repetido, willingness to pay, demanda orgânica, atrito de vendas e entrevistas antes de ampliar acquisition.",
      phrase:
        "Muitos cadastros animam, mas retention fraca significa que ainda não demonstramos Product-Market Fit.",
      aliases: [
        "pmf",
        "product market fit",
        "product-market fit",
        "aderência produto-mercado",
      ],
      confusion:
        "Product-Market Fit é adequação sustentada entre produto e segmento; market validation é evidência anterior de problema e demanda possível.",
    }),
  },
  "north-star-metric": {
    en: content({
      definition:
        "A North Star Metric is a leading product measure intended to represent the recurring value customers receive and the sustainable growth mechanism produced when that value expands.",
      purpose:
        "It gives cross-functional teams a shared signal for product value while forcing the organization to articulate how customer success connects to long-term business health.",
      when: "Choose one when a product has a clear recurring value loop, validating that the measure predicts durable outcomes and balancing it with guardrail metrics.",
      context:
        "A collaboration platform has teams optimizing sign-ups, messages, invitations, and revenue independently without a shared view of delivered value.",
      application:
        "The company selects weekly teams completing a collaborative workflow, tests its relationship with retention, and monitors quality and abuse guardrails.",
      phrase:
        "Messages sent is easy to grow, but teams completing shared work better reflects the value behind our North Star Metric.",
      aliases: [
        "nsm",
        "north-star metric",
        "north star measure",
        "métrica estrela-guia",
      ],
      confusion:
        "A North Star Metric represents the product's value engine; a KPI is any strategically important performance indicator and may monitor other concerns.",
    }),
    "pt-BR": content({
      definition:
        "North Star Metric é uma medida antecipada de produto que procura representar o valor recorrente recebido por clientes e o crescimento sustentável gerado por sua expansão.",
      purpose:
        "Ela fornece aos times um sinal comum de valor e obriga a organização a explicar como sucesso do cliente se conecta à saúde do negócio.",
      when: "Escolha-a quando houver um loop claro de valor recorrente, validando se prediz outcomes duráveis e usando guardrail metrics.",
      context:
        "Uma plataforma colaborativa otimiza cadastros, mensagens, convites e receita isoladamente, sem uma visão comum do valor entregue.",
      application:
        "A empresa escolhe times semanais que concluem um workflow colaborativo, testa relação com retention e monitora qualidade e abuso.",
      phrase:
        "Mensagens enviadas é fácil de aumentar; times concluindo trabalho conjunto representa melhor nossa North Star Metric.",
      aliases: [
        "nsm",
        "north-star metric",
        "north star measure",
        "métrica estrela-guia",
      ],
      confusion:
        "North Star Metric representa o motor de valor do produto; KPI é qualquer indicador estratégico e pode monitorar outras preocupações.",
    }),
  },
  "go-to-market": {
    en: content({
      definition:
        "Go-to-Market is the coordinated strategy for reaching a target segment, communicating a product's value, enabling purchase and adoption, and delivering it through chosen channels.",
      purpose:
        "It aligns product, marketing, sales, pricing, partnerships, onboarding, and support around how an offering will enter or expand in a market.",
      when: "Create a Go-to-Market strategy for a launch, new segment, geography, channel, packaging change, or other move that changes how customers discover and adopt the product.",
      context:
        "A developer platform is technically ready, but the company has not chosen its initial audience, pricing, sales motion, documentation, or launch channels.",
      application:
        "The team defines the ideal customer, positioning, packaging, acquisition motion, enablement, launch sequence, adoption measures, and feedback ownership.",
      phrase:
        "The feature is ready, but the Go-to-Market plan still needs pricing, migration guidance, sales enablement, and a segment-specific message.",
      aliases: [
        "gtm",
        "go to market",
        "go-to-market strategy",
        "estratégia de entrada no mercado",
      ],
      confusion:
        "Go-to-Market explains how an offering reaches and wins a market; a product roadmap describes intended product outcomes and evolution over time.",
    }),
    "pt-BR": content({
      definition:
        "Go-to-Market é a estratégia coordenada para alcançar um segmento, comunicar valor, permitir compra e adoption e entregar o produto pelos canais escolhidos.",
      purpose:
        "Ela alinha product, marketing, vendas, pricing, parcerias, onboarding e suporte sobre como a oferta entrará ou crescerá no mercado.",
      when: "Crie uma estratégia Go-to-Market para launch, novo segmento, região, canal, packaging ou mudança na descoberta e adoção.",
      context:
        "Uma developer platform está tecnicamente pronta, mas faltam público inicial, pricing, sales motion, documentação e canais de lançamento.",
      application:
        "O time define ideal customer, positioning, packaging, aquisição, enablement, sequência de launch, métricas de adoption e ownership de feedback.",
      phrase:
        "A feature está pronta, mas o Go-to-Market ainda precisa de pricing, migração, sales enablement e mensagem para o segmento.",
      aliases: [
        "gtm",
        "go to market",
        "go-to-market strategy",
        "estratégia de entrada no mercado",
      ],
      confusion:
        "Go-to-Market explica como uma oferta alcança e conquista o mercado; product roadmap descreve outcomes e evolução pretendida do produto.",
    }),
  },
  "product-delivery": {
    en: content({
      definition:
        "Product Delivery is the cross-functional work of designing, building, validating, releasing, and operating product changes that turn selected opportunities into usable outcomes.",
      purpose:
        "It converts product decisions into reliable customer-facing capability while managing technical, operational, quality, and rollout risks.",
      when: "Use the practice after or alongside discovery once there is enough evidence to invest, preserving feedback loops as the solution is implemented and released.",
      context:
        "Discovery confirms that customers need delegated approvals, but the workflow must now be engineered, secured, documented, introduced, and supported.",
      application:
        "Product, design, engineering, data, and operations refine slices, implement and test them, release progressively, monitor outcomes, and respond to evidence.",
      phrase:
        "Discovery reduced the problem risk; Product Delivery must now make the approval flow usable, safe, observable, and supportable.",
      aliases: [
        "product development delivery",
        "delivery de produto",
        "entrega de produto",
      ],
      confusion:
        "Product Delivery realizes and operates a solution; Product Discovery tests whether the problem and proposed direction are worth pursuing.",
    }),
    "pt-BR": content({
      definition:
        "Product Delivery é o trabalho cross-functional de projetar, construir, validar, lançar e operar mudanças que transformam oportunidades escolhidas em outcomes utilizáveis.",
      purpose:
        "Ele converte decisões de produto em capacidade confiável para clientes, administrando riscos técnicos, operacionais, de qualidade e rollout.",
      when: "Use a prática depois ou junto de discovery quando houver evidência para investir, mantendo feedback loops durante implementação e release.",
      context:
        "Discovery confirma a necessidade de aprovações delegadas, mas o workflow ainda precisa ser construído, protegido, documentado e suportado.",
      application:
        "Product, design, engineering, data e operations refinam slices, implementam, testam, liberam progressivamente, monitoram outcomes e reagem às evidências.",
      phrase:
        "Discovery reduziu o risco do problema; Product Delivery precisa tornar o fluxo utilizável, seguro, observável e suportável.",
      aliases: [
        "product development delivery",
        "delivery de produto",
        "entrega de produto",
      ],
      confusion:
        "Product Delivery realiza e opera a solução; Product Discovery testa se o problema e a direção merecem investimento.",
    }),
  },
  "user-persona": {
    en: content({
      definition:
        "A User Persona is a research-based archetype that summarizes a meaningful user segment's goals, behaviors, context, constraints, and motivations for product decisions.",
      purpose:
        "It keeps teams focused on distinct behavioral needs and provides a memorable reference for evaluating journeys, priorities, language, and design tradeoffs.",
      when: "Create personas when reliable research reveals recurring user patterns; update or retire them as evidence changes and avoid invented demographic stereotypes.",
      context:
        "A financial tool serves both accountants who reconcile daily and owners who review cash flow occasionally, requiring different workflows and explanations.",
      application:
        "Researchers synthesize interviews and usage evidence into two personas with goals, triggers, behaviors, pain points, environment, and supporting citations.",
      phrase:
        "This shortcut suits the daily accountant persona, but the occasional owner needs context and guided recovery.",
      aliases: [
        "persona",
        "user archetype",
        "research persona",
        "persona de usuário",
      ],
      confusion:
        "A User Persona is a synthesized behavioral archetype; a target audience is a broader market group and an individual user is not a persona.",
    }),
    "pt-BR": content({
      definition:
        "User Persona é um arquétipo baseado em pesquisa que sintetiza objetivos, comportamentos, contexto, restrições e motivações de um segmento relevante.",
      purpose:
        "Ela mantém o time focado em necessidades comportamentais distintas e orienta jornadas, prioridades, linguagem e trade-offs de design.",
      when: "Crie personas quando pesquisas confiáveis mostrarem padrões recorrentes; atualize-as com novas evidências e evite estereótipos demográficos inventados.",
      context:
        "Uma ferramenta financeira atende contadores que conciliam diariamente e donos que consultam caixa ocasionalmente, exigindo experiências diferentes.",
      application:
        "Research sintetiza entrevistas e uso em duas personas com goals, triggers, behaviors, pain points, ambiente e evidências de suporte.",
      phrase:
        "O shortcut serve à persona contadora diária; o dono ocasional precisa de contexto e recovery guiado.",
      aliases: [
        "persona",
        "user archetype",
        "research persona",
        "persona de usuário",
      ],
      confusion:
        "User Persona é arquétipo comportamental sintetizado; target audience é um grupo de mercado mais amplo e uma pessoa individual não é uma persona.",
    }),
  },
  "customer-journey": {
    en: content({
      definition:
        "A Customer Journey is the end-to-end sequence of stages, interactions, expectations, and emotions a customer experiences across their relationship with an organization.",
      purpose:
        "It exposes gaps and handoffs across channels and departments, connecting acquisition, purchase, onboarding, use, support, renewal, and departure as one experience.",
      when: "Map it when an outcome crosses multiple touchpoints or organizational boundaries and local optimization may conceal customer friction.",
      context:
        "A business buyer sees an advertisement, talks to sales, signs a contract, configures users, requests support, and renews through disconnected teams.",
      application:
        "The team maps stages, goals, touchpoints, owners, evidence, emotions, and failure points, then prioritizes the moments with greatest customer and business impact.",
      phrase:
        "The sales step converts well, but the Customer Journey breaks when credentials arrive days after the contract is signed.",
      aliases: [
        "customer lifecycle journey",
        "customer journey map",
        "jornada do cliente",
      ],
      confusion:
        "Customer Journey covers the broader commercial relationship; User Journey usually focuses on a person's path toward a goal within a product or service.",
    }),
    "pt-BR": content({
      definition:
        "Customer Journey é a sequência ponta a ponta de etapas, interações, expectativas e emoções vividas pelo cliente na relação com uma organização.",
      purpose:
        "Ela revela lacunas e handoffs entre canais e áreas, conectando aquisição, compra, onboarding, uso, suporte, renovação e saída.",
      when: "Mapeie-a quando um outcome atravessar touchpoints ou fronteiras organizacionais e otimizações locais puderem esconder atrito.",
      context:
        "Uma empresa vê anúncio, conversa com vendas, assina contrato, configura usuários, pede suporte e renova com times desconectados.",
      application:
        "O time mapeia stages, goals, touchpoints, owners, evidências, emoções e falhas e prioriza momentos de maior impacto.",
      phrase:
        "A venda converte bem, mas a Customer Journey quebra quando as credenciais chegam dias depois do contrato.",
      aliases: [
        "customer lifecycle journey",
        "customer journey map",
        "jornada do cliente",
      ],
      confusion:
        "Customer Journey cobre a relação comercial ampla; User Journey costuma focar o caminho de uma pessoa até um goal no produto ou serviço.",
    }),
  },
  "user-journey": {
    en: content({
      definition:
        "A User Journey is the sequence of actions, decisions, system responses, and emotional states through which a user pursues a particular goal in a product or service.",
      purpose:
        "It makes the user's path visible across screens and channels so teams can find unmet needs, interruptions, confusing transitions, and recovery opportunities.",
      when: "Map a User Journey when improving a defined goal that spans several interactions, including steps before, after, or outside the interface when relevant.",
      context:
        "A user needs to replace a lost card by finding the option, verifying identity, choosing delivery, tracking shipment, and activating the replacement.",
      application:
        "The designer maps user goals, actions, questions, touchpoints, system states, emotions, and pain points for the replacement scenario.",
      phrase:
        "The form is usable by itself, but the User Journey fails because shipment status disappears after submission.",
      aliases: ["user journey map", "experience journey", "jornada do usuário"],
      confusion:
        "A User Journey describes a goal-oriented experience across interactions; a user flow is usually a more detailed path through interface states and decisions.",
    }),
    "pt-BR": content({
      definition:
        "User Journey é a sequência de ações, decisões, respostas do sistema e estados emocionais pela qual uma pessoa busca um goal no produto ou serviço.",
      purpose:
        "Ela torna o caminho visível entre telas e canais para revelar necessidades, interrupções, transições confusas e oportunidades de recovery.",
      when: "Mapeie User Journey ao melhorar um objetivo que atravessa várias interações, incluindo etapas fora da interface quando forem relevantes.",
      context:
        "Uma pessoa precisa substituir cartão perdido, verificar identidade, escolher entrega, acompanhar remessa e ativar a substituição.",
      application:
        "Design mapeia goals, actions, perguntas, touchpoints, system states, emoções e pain points do cenário.",
      phrase:
        "O formulário isolado funciona, mas a User Journey falha porque o status da entrega desaparece após o envio.",
      aliases: ["user journey map", "experience journey", "jornada do usuário"],
      confusion:
        "User Journey descreve uma experiência orientada a goal; user flow costuma detalhar caminhos entre estados e decisões da interface.",
    }),
  },
  "job-to-be-done": {
    en: content({
      definition:
        "Job to Be Done is the progress a person seeks in a particular circumstance and for which they effectively choose or 'hire' a product, service, or behavior.",
      purpose:
        "It shifts product understanding from requested features and demographics toward the underlying outcome, situation, motivations, and competing alternatives.",
      when: "Use it when exploring why people adopt, switch, improvise, or abandon solutions, especially where different products compete to enable the same progress.",
      context:
        "Commuters request offline playlists, but their deeper job is preserving a predictable, enjoyable routine where network coverage is unreliable.",
      application:
        "Researchers examine the triggering situation, desired progress, functional and emotional forces, current workaround, anxieties, and criteria for switching.",
      phrase:
        "The Job to Be Done is not 'use offline mode'; it is keep the commute uninterrupted despite unreliable connectivity.",
      aliases: [
        "jtbd",
        "jobs to be done",
        "customer job",
        "tarefa a ser realizada",
      ],
      confusion:
        "A Job to Be Done describes desired progress in context; a user story is a delivery artifact that frames a need from a user's perspective.",
    }),
    "pt-BR": content({
      definition:
        "Job to Be Done é o progresso que uma pessoa busca em determinada circunstância e para o qual efetivamente escolhe ou 'contrata' produto, serviço ou comportamento.",
      purpose:
        "Ele desloca a compreensão de features e demografia para outcome, situação, motivações e alternativas concorrentes.",
      when: "Use-o ao investigar por que pessoas adotam, trocam, improvisam ou abandonam soluções, especialmente quando produtos diferentes viabilizam o mesmo progresso.",
      context:
        "Passageiros pedem playlists offline, mas o job real é preservar uma rotina previsível e agradável onde a rede é instável.",
      application:
        "Research investiga trigger, progresso desejado, forças funcionais e emocionais, workaround atual, ansiedades e critérios de troca.",
      phrase:
        "O Job to Be Done não é 'usar offline'; é manter o trajeto sem interrupção apesar da conectividade ruim.",
      aliases: [
        "jtbd",
        "jobs to be done",
        "customer job",
        "tarefa a ser realizada",
      ],
      confusion:
        "Job to Be Done descreve progresso desejado em contexto; user story é um artefato de delivery que enquadra uma necessidade.",
    }),
  },
  hypothesis: {
    en: content({
      definition:
        "A Hypothesis is a specific, falsifiable statement predicting a relationship between an intervention, a defined audience or condition, and an observable outcome.",
      purpose:
        "It turns an assumption into a claim that evidence can challenge, clarifying what a team expects, why, and what observation would change its decision.",
      when: "Formulate one before an experiment or risky product decision, specifying the expected effect and disconfirming evidence rather than merely stating a desired result.",
      context:
        "The team believes that unclear setup instructions cause new administrators to abandon workspace configuration.",
      application:
        "It states that contextual guidance for first-time administrators will increase completed workspace setups within one day, then defines the comparison and threshold.",
      phrase:
        "Our Hypothesis predicts a setup improvement for first-time admins; if completion does not change, we revisit the assumed cause.",
      aliases: [
        "testable hypothesis",
        "product hypothesis",
        "experimental hypothesis",
        "hipótese",
      ],
      confusion:
        "A Hypothesis is a testable prediction; an assumption is any belief accepted without sufficient evidence and may need reframing before testing.",
    }),
    "pt-BR": content({
      definition:
        "Hypothesis é uma afirmação específica e falseável que prevê relação entre intervenção, público ou condição e outcome observável.",
      purpose:
        "Ela transforma assumption em uma alegação contestável por evidências, esclarecendo expectativa, motivo e observação que mudaria a decisão.",
      when: "Formule-a antes de experiment ou decisão arriscada, especificando efeito esperado e evidência contrária em vez de apenas desejar um resultado.",
      context:
        "O time acredita que instruções pouco claras fazem novos administradores abandonar a configuração do workspace.",
      application:
        "A hipótese afirma que orientação contextual elevará setups concluídos em um dia e define comparação e threshold.",
      phrase:
        "Nossa Hypothesis prevê melhora para admins novos; se completion não mudar, revisaremos a causa assumida.",
      aliases: [
        "testable hypothesis",
        "product hypothesis",
        "experimental hypothesis",
        "hipótese",
      ],
      confusion:
        "Hypothesis é previsão testável; assumption é qualquer crença ainda sem evidência suficiente e pode precisar ser reformulada.",
    }),
  },
  experiment: {
    en: content({
      definition:
        "An Experiment is a structured intervention designed to produce evidence about a hypothesis by observing outcomes under defined conditions and comparison rules.",
      purpose:
        "It reduces uncertainty through planned evidence, helping distinguish the effect of a change from coincidence, selection, seasonality, or opinion.",
      when: "Run an experiment when a consequential uncertainty is testable, the intervention is ethical, and the result can influence a real decision.",
      context:
        "A product team does not know whether simplifying account verification will improve activation without increasing fraud.",
      application:
        "The team defines hypotheses, population, treatment, control, success and guardrail metrics, duration, stopping rules, instrumentation, and analysis before exposure.",
      phrase:
        "The Experiment must measure both activation and fraud; improving one by harming the other is not a successful result.",
      aliases: ["controlled experiment", "product experiment", "experimento"],
      confusion:
        "An Experiment deliberately creates comparable evidence about causality; an observational study analyzes existing variation without assigning the intervention.",
    }),
    "pt-BR": content({
      definition:
        "Experiment é uma intervenção estruturada para produzir evidência sobre uma hypothesis, observando outcomes sob condições e regras de comparação definidas.",
      purpose:
        "Ele reduz incerteza com evidência planejada, ajudando a separar efeito da mudança de coincidência, seleção, sazonalidade ou opinião.",
      when: "Execute-o quando uma incerteza relevante for testável, a intervenção for ética e o resultado puder mudar uma decisão real.",
      context:
        "Um product team não sabe se simplificar verificação melhora activation sem aumentar fraude.",
      application:
        "O time define hypothesis, população, treatment, control, success e guardrail metrics, duração, stopping rules, instrumentation e análise.",
      phrase:
        "O Experiment precisa medir activation e fraude; melhorar uma prejudicando a outra não é sucesso.",
      aliases: ["controlled experiment", "product experiment", "experimento"],
      confusion:
        "Experiment cria evidência comparável sobre causalidade; observational study analisa variação existente sem atribuir intervenção.",
    }),
  },
  "a-b-test": {
    en: content({
      definition:
        "An A/B Test is a randomized controlled experiment that assigns comparable units to two variants and estimates how one defined change affects measured outcomes.",
      purpose:
        "It supports causal comparison between a control and alternative while reducing systematic differences in who encounters each experience.",
      when: "Use it when random assignment is feasible, sample size and duration can detect a meaningful effect, and exposure does not create unacceptable interference or risk.",
      context:
        "An e-commerce team wants to know whether showing delivery dates earlier changes completed purchases rather than merely correlating with high-intent visitors.",
      application:
        "Eligible visitors are randomly assigned to the current or revised page; the team predefines purchase conversion, cancellation guardrails, duration, and analysis.",
      phrase:
        "Do not end the A/B Test when the graph first turns green; follow the predefined sample and stopping rule.",
      aliases: ["ab test", "split test", "a/b experiment", "teste a/b"],
      confusion:
        "An A/B Test is a specific randomized experiment with two variants; an experiment may use more variants or a different causal design.",
    }),
    "pt-BR": content({
      definition:
        "A/B Test é um experimento controlado e randomizado que distribui unidades comparáveis entre duas variantes e estima o efeito de uma mudança nos outcomes.",
      purpose:
        "Ele permite comparação causal entre control e alternativa, reduzindo diferenças sistemáticas em quem recebe cada experiência.",
      when: "Use-o quando random assignment for viável, amostra e duração detectarem efeito relevante e a exposição não criar risco inaceitável.",
      context:
        "Um e-commerce quer saber se mostrar a data de entrega cedo muda compras concluídas, em vez de apenas correlacionar com maior intenção.",
      application:
        "Visitantes elegíveis recebem aleatoriamente a página atual ou nova; o time pré-define conversion, cancelamento, duração e análise.",
      phrase:
        "Não encerre o A/B Test quando o gráfico ficar verde pela primeira vez; siga amostra e stopping rule definidos.",
      aliases: ["ab test", "split test", "a/b experiment", "teste a/b"],
      confusion:
        "A/B Test é experiment randomizado específico com duas variantes; outros experimentos podem usar mais variantes ou outro desenho causal.",
    }),
  },
  "feature-flag": {
    en: content({
      definition:
        "A Feature Flag is a runtime control that determines whether selected behavior is enabled for particular environments, users, cohorts, or requests independently of code deployment.",
      purpose:
        "It separates releasing code from exposing capability, supporting progressive rollout, experiments, operational switches, and rapid mitigation.",
      when: "Use one for controlled exposure or temporary operational control, with ownership, safe defaults, observability, access restrictions, and a removal date.",
      context:
        "A new search engine must reach employees, then a small customer cohort, before becoming the default for everyone.",
      application:
        "The deployed code evaluates a server-side flag by tenant cohort, records exposure, monitors errors and relevance, and expands only after checks pass.",
      phrase:
        "The code is in production, but the Feature Flag exposes the new search only to the pilot tenants.",
      aliases: ["feature toggle", "feature switch", "flag de funcionalidade"],
      confusion:
        "A Feature Flag controls behavior after deployment; a configuration value supplies operational data and should not automatically become a permanent branching system.",
    }),
    "pt-BR": content({
      definition:
        "Feature Flag é um controle em runtime que habilita comportamento para ambientes, usuários, cohorts ou requests específicos, independentemente do deployment.",
      purpose:
        "Ela separa entrega de código da exposição da capacidade, permitindo rollout progressivo, experiments, switches operacionais e mitigação rápida.",
      when: "Use-a para exposição controlada ou controle temporário, com owner, defaults seguros, observability, acesso restrito e data de remoção.",
      context:
        "Um novo mecanismo de busca precisa chegar a funcionários e depois a poucos clientes antes de virar default.",
      application:
        "O código em produção avalia flag server-side por tenant, registra exposure, monitora errors e relevance e amplia após as checks.",
      phrase:
        "O código está em production, mas a Feature Flag mostra a busca nova apenas aos tenants piloto.",
      aliases: ["feature toggle", "feature switch", "flag de funcionalidade"],
      confusion:
        "Feature Flag controla comportamento após deployment; configuration fornece dados operacionais e não deve virar branching permanente automaticamente.",
    }),
  },
  rollout: {
    en: content({
      definition:
        "A Rollout is the planned process of making a released change available to progressively broader environments, regions, customers, or traffic while evaluating safety and outcomes.",
      purpose:
        "It limits blast radius, creates checkpoints for learning, and coordinates technical exposure with operations, communication, support, and rollback readiness.",
      when: "Use a staged Rollout when a change has meaningful reliability, compatibility, behavioral, regulatory, or support risk that warrants controlled expansion.",
      context:
        "A payment workflow passed testing but may behave differently across banks, currencies, and merchant configurations in production.",
      application:
        "The team enables internal accounts, then 1%, 10%, and 50% of eligible merchants, checking errors, authorization, support, and business metrics at each gate.",
      phrase:
        "Pause the Rollout at 10% because authorization failures exceeded the agreed threshold in one region.",
      aliases: [
        "staged rollout",
        "progressive rollout",
        "gradual release",
        "liberação gradual",
      ],
      confusion:
        "A Rollout controls widening exposure after release; a deployment installs or activates a software version in an environment.",
    }),
    "pt-BR": content({
      definition:
        "Rollout é o processo planejado de disponibilizar uma mudança a ambientes, regiões, clientes ou tráfego progressivamente maiores enquanto se avaliam segurança e outcomes.",
      purpose:
        "Ele limita blast radius, cria checkpoints de aprendizado e coordena exposição técnica com operação, comunicação, suporte e rollback.",
      when: "Use Rollout em estágios quando houver risco relevante de reliability, compatibilidade, comportamento, regulação ou suporte.",
      context:
        "Um fluxo de pagamentos passou pelos testes, mas pode variar entre bancos, moedas e configurações de lojistas em production.",
      application:
        "O time habilita contas internas e depois 1%, 10% e 50% dos lojistas, verificando errors, autorização, suporte e business metrics em cada gate.",
      phrase:
        "Pause o Rollout em 10% porque falhas de autorização ultrapassaram o threshold numa região.",
      aliases: [
        "staged rollout",
        "progressive rollout",
        "gradual release",
        "liberação gradual",
      ],
      confusion:
        "Rollout amplia exposição depois da release; deployment instala ou ativa uma versão de software num ambiente.",
    }),
  },
  adoption: {
    en: content({
      definition:
        "Adoption is the transition in which a target person or organization begins using a product or capability sufficiently to incorporate it into meaningful behavior or work.",
      purpose:
        "It shows whether availability and initial interest become real use, revealing barriers in awareness, access, onboarding, capability, trust, and change.",
      when: "Measure adoption after defining the eligible population and the behavior that demonstrates genuine use rather than counting exposure, accounts, or clicks alone.",
      context:
        "A company released automated reconciliation to every account, yet most finance teams continue exporting transactions to spreadsheets.",
      application:
        "The product team defines adoption as completing three reconciliations in 30 days and segments eligible accounts by onboarding, permissions, and company size.",
      phrase:
        "Feature availability reached 100%, but Adoption is only 24% because many administrators have not granted the required permission.",
      aliases: [
        "product adoption",
        "feature adoption",
        "user adoption",
        "adoção",
      ],
      confusion:
        "Adoption indicates meaningful uptake; activation is an early value milestone, while engagement describes the depth or frequency of ongoing interaction.",
    }),
    "pt-BR": content({
      definition:
        "Adoption é a transição em que uma pessoa ou organização-alvo começa a usar produto ou capacidade o bastante para incorporá-lo ao comportamento ou trabalho.",
      purpose:
        "Ela mostra se disponibilidade e interesse viram uso real, revelando barreiras de awareness, acesso, onboarding, capacidade, confiança e mudança.",
      when: "Meça adoption depois de definir população elegível e comportamento que demonstre uso genuíno, não apenas exposição, contas ou clicks.",
      context:
        "Uma empresa liberou conciliação automática para todas as contas, mas times financeiros continuam exportando transações.",
      application:
        "O product team define adoption como três conciliações em 30 dias e segmenta contas elegíveis por onboarding, permissões e porte.",
      phrase:
        "A disponibilidade chegou a 100%, mas Adoption está em 24% porque muitos admins não concederam a permissão.",
      aliases: [
        "product adoption",
        "feature adoption",
        "user adoption",
        "adoção",
      ],
      confusion:
        "Adoption indica adesão significativa; activation é um milestone inicial de valor e engagement descreve profundidade ou frequência do uso.",
    }),
  },
  engagement: {
    en: content({
      definition:
        "Engagement is the degree and pattern of meaningful interaction a person or account has with a product over time, measured through behavior relevant to received value.",
      purpose:
        "It helps teams understand whether users are actively obtaining value and how frequency, breadth, depth, and regularity differ among cohorts.",
      when: "Measure it for products where ongoing interaction matters, choosing value-related behaviors and intervals instead of combining arbitrary activity into a vanity score.",
      context:
        "Two customer accounts log in weekly, but one completes collaborative projects while the other only opens notification emails.",
      application:
        "The team examines completed core workflows, active collaborators, frequency, and recurrence by account segment, without treating every click equally.",
      phrase:
        "Login frequency rose, but meaningful Engagement did not because completed projects and active collaborators remained flat.",
      aliases: [
        "user engagement",
        "product engagement",
        "customer engagement",
        "engajamento",
      ],
      confusion:
        "Engagement describes interaction intensity or pattern; retention asks whether a cohort remains active after a defined interval.",
    }),
    "pt-BR": content({
      definition:
        "Engagement é o grau e o padrão de interação significativa que pessoa ou conta mantém com um product ao longo do tempo, medido por comportamentos ligados a valor.",
      purpose:
        "Ele ajuda a entender se usuários obtêm valor ativamente e como frequência, amplitude, profundidade e regularidade variam entre cohorts.",
      when: "Meça-o quando interação contínua importar, escolhendo comportamentos de valor e intervalos em vez de somar atividades arbitrárias.",
      context:
        "Duas contas entram semanalmente, mas uma conclui projetos colaborativos enquanto a outra apenas abre e-mails de notificação.",
      application:
        "O time examina core workflows concluídos, colaboradores ativos, frequência e recorrência por segmento sem tratar cada click igualmente.",
      phrase:
        "Logins cresceram, mas Engagement significativo não, pois projetos concluídos e colaboradores ativos ficaram estáveis.",
      aliases: [
        "user engagement",
        "product engagement",
        "customer engagement",
        "engajamento",
      ],
      confusion:
        "Engagement descreve intensidade ou padrão de interação; retention pergunta se uma coorte permanece ativa após um intervalo.",
    }),
  },
  "leading-indicator": {
    en: content({
      definition:
        "A Leading Indicator is a measure that changes early in a causal or operational process and may help predict a later outcome before that outcome is fully observable.",
      purpose:
        "It provides earlier feedback for intervention, enabling teams to adjust behavior without waiting for delayed business results such as renewal or annual profit.",
      when: "Use one only after testing a credible relationship with the later outcome, because an early or controllable metric is not automatically predictive.",
      context:
        "Annual renewals arrive too late to guide weekly onboarding improvements, but completing the core workflow in seven days strongly predicts renewal.",
      application:
        "The team tracks seven-day core-workflow completion, validates its relationship with later cohorts, and pairs it with quality guardrails.",
      phrase:
        "Activation is useful as a Leading Indicator only while evidence shows it predicts durable customer retention.",
      aliases: [
        "predictive indicator",
        "lead indicator",
        "indicador antecedente",
      ],
      confusion:
        "A Leading Indicator offers early evidence about a future result; a lagging indicator records a result after its causes have largely occurred.",
    }),
    "pt-BR": content({
      definition:
        "Leading Indicator é uma medida que muda cedo num processo causal ou operacional e pode ajudar a prever um outcome posterior antes de ele ser plenamente observável.",
      purpose:
        "Ele fornece feedback antecipado para intervenção, permitindo ajustes sem aguardar resultados tardios como renovação ou lucro anual.",
      when: "Use-o somente após testar relação crível com o outcome posterior, pois uma métrica rápida ou controlável não é automaticamente preditiva.",
      context:
        "Renovações anuais chegam tarde para orientar onboarding semanal, mas concluir o core workflow em sete dias prediz renovação.",
      application:
        "O time acompanha completion do core workflow em sete dias, valida a relação em cohorts posteriores e usa guardrails de qualidade.",
      phrase:
        "Activation só é um Leading Indicator útil enquanto evidências mostrarem que prediz retention durável.",
      aliases: [
        "predictive indicator",
        "lead indicator",
        "indicador antecedente",
      ],
      confusion:
        "Leading Indicator antecipa evidência sobre resultado futuro; lagging indicator registra o resultado depois que suas causas ocorreram.",
    }),
  },
  "lagging-indicator": {
    en: content({
      definition:
        "A Lagging Indicator is a measure that confirms performance after the underlying activities and conditions have already produced their result.",
      purpose:
        "It provides authoritative evidence of achieved outcomes such as revenue, renewal, incidents, or mortality, even though it may arrive too late for immediate prevention.",
      when: "Use it to evaluate final or accumulated results, pairing it with earlier indicators when teams also need time to intervene.",
      context:
        "A subscription company knows its annual renewal rate precisely, but learns about a failing customer relationship only at contract end.",
      application:
        "The company uses renewal as the Lagging Indicator of durable value and monitors adoption, support risk, and usage trends earlier in the lifecycle.",
      phrase:
        "Renewal is the outcome we trust, but as a Lagging Indicator it cannot warn Customer Success early by itself.",
      aliases: ["outcome indicator", "lag indicator", "indicador posterior"],
      confusion:
        "A Lagging Indicator confirms an outcome after the fact; a Leading Indicator changes earlier and is useful only if it reliably predicts that outcome.",
    }),
    "pt-BR": content({
      definition:
        "Lagging Indicator é uma medida que confirma performance depois que atividades e condições subjacentes já produziram seu resultado.",
      purpose:
        "Ele fornece evidência confiável de outcomes como receita, renovação ou incidentes, embora possa chegar tarde para prevenção imediata.",
      when: "Use-o para avaliar resultados finais ou acumulados, combinando-o a indicadores anteriores quando o time também precisar intervir a tempo.",
      context:
        "Uma empresa conhece exatamente a renovação anual, mas descobre um relacionamento ruim somente no fim do contrato.",
      application:
        "A empresa usa renovação como Lagging Indicator de valor durável e monitora adoption, risco de suporte e uso antes.",
      phrase:
        "Renewal é o outcome confiável, mas como Lagging Indicator não consegue alertar Customer Success cedo sozinho.",
      aliases: ["outcome indicator", "lag indicator", "indicador posterior"],
      confusion:
        "Lagging Indicator confirma outcome depois do fato; Leading Indicator muda antes e só ajuda se predizer esse outcome de forma confiável.",
    }),
  },
  milestone: {
    en: content({
      definition:
        "A Milestone is a significant, zero-duration checkpoint that marks an important event, decision, completion, or readiness state in a plan or product journey.",
      purpose:
        "It makes meaningful progress and dependencies visible without pretending the checkpoint itself is the work required to reach it.",
      when: "Use milestones for consequential boundaries such as approval, migration completion, launch readiness, or first customer value, with objective completion criteria.",
      context:
        "Several teams contribute to a regional launch and need a shared checkpoint for regulatory approval before customer migration can begin.",
      application:
        "The plan defines 'regulatory approval received' as a dated Milestone linked to evidence and to the migration activities that depend on it.",
      phrase:
        "The Milestone is reached when the signed approval is recorded, not when the review meeting is merely scheduled.",
      aliases: ["project milestone", "product milestone", "marco"],
      confusion:
        "A Milestone is a checkpoint with no duration; a task is work performed over time and a deliverable is a produced output.",
    }),
    "pt-BR": content({
      definition:
        "Milestone é um checkpoint significativo e sem duração que marca evento, decisão, conclusão ou estado de prontidão importante num plano ou jornada.",
      purpose:
        "Ele torna progresso e dependencies relevantes visíveis sem fingir que o próprio marco é o trabalho necessário para alcançá-lo.",
      when: "Use milestones em boundaries consequentes como aprovação, migração concluída, launch readiness ou primeiro valor, com critérios objetivos.",
      context:
        "Vários times contribuem para um lançamento regional e dependem de aprovação regulatória antes de migrar clientes.",
      application:
        "O plano define 'aprovação recebida' como Milestone datado, ligado à evidência e às activities dependentes.",
      phrase:
        "O Milestone é atingido com a aprovação assinada, não quando a reunião de review é apenas marcada.",
      aliases: ["project milestone", "product milestone", "marco"],
      confusion:
        "Milestone é checkpoint sem duração; task é trabalho ao longo do tempo e deliverable é um output produzido.",
    }),
  },
  "dependency-mapping": {
    en: content({
      definition:
        "Dependency Mapping is the practice of identifying and visualizing the people, systems, decisions, inputs, and work whose availability or completion constrains an outcome.",
      purpose:
        "It reveals sequencing, coordination needs, bottlenecks, ownership gaps, and failure propagation before hidden relationships delay or endanger delivery.",
      when: "Use it for cross-team initiatives, migrations, launches, or complex systems where several external conditions must align, updating the map as evidence changes.",
      context:
        "A regional payments launch depends on licensing, bank certification, currency support, fraud rules, customer communication, and support training.",
      application:
        "The lead maps each dependency, provider, consumer, needed-by date, status, confidence, fallback, and the milestones it blocks.",
      phrase:
        "Dependency Mapping showed that bank certification, not application coding, determines the earliest launch date.",
      aliases: [
        "dependency map",
        "dependency analysis",
        "mapeamento de dependências",
      ],
      confusion:
        "Dependency Mapping describes required relationships and constraints; a project schedule assigns timing and sequence to the work that navigates them.",
    }),
    "pt-BR": content({
      definition:
        "Dependency Mapping é a prática de identificar e visualizar pessoas, sistemas, decisões, inputs e trabalhos cuja disponibilidade ou conclusão restringe um outcome.",
      purpose:
        "Ele revela sequenciamento, coordenação, bottlenecks, lacunas de ownership e propagação de falhas antes que relações ocultas atrasem delivery.",
      when: "Use-o em iniciativas cross-team, migrations, launches ou sistemas complexos com condições externas, atualizando o mapa conforme as evidências.",
      context:
        "Um lançamento de pagamentos depende de licença, certificação bancária, moeda, fraude, comunicação e treinamento de suporte.",
      application:
        "A liderança mapeia dependency, provider, consumer, needed-by date, status, confidence, fallback e milestones bloqueados.",
      phrase:
        "Dependency Mapping mostrou que a certificação bancária, não o código, determina a primeira data possível.",
      aliases: [
        "dependency map",
        "dependency analysis",
        "mapeamento de dependências",
      ],
      confusion:
        "Dependency Mapping descreve relações e restrições; project schedule atribui tempo e sequência ao trabalho que lida com elas.",
    }),
  },
  risk: {
    en: content({
      definition:
        "A Risk is an uncertain event or condition that, if it occurs, can affect objectives, outcomes, cost, schedule, safety, security, quality, or reputation.",
      purpose:
        "It makes uncertainty discussable and actionable so teams can alter probability, reduce impact, transfer exposure, prepare contingencies, or consciously accept it.",
      when: "Record a Risk when both uncertainty and consequence exist, naming cause, possible event, effect, owner, and the evidence that would change its assessment.",
      context:
        "A migration may overload a legacy identity service during peak login traffic, delaying customer access and support response.",
      application:
        "The owner estimates likelihood and impact, validates capacity, defines load tests and staged migration as mitigations, and prepares a rollback trigger.",
      phrase:
        "The Risk is that peak migration traffic exceeds identity capacity, causing failed logins; the mitigation is not simply 'monitor closely.'",
      aliases: ["project risk", "product risk", "uncertain threat", "risco"],
      confusion:
        "A Risk is uncertain and may occur; an issue has already occurred and requires response rather than probability estimation.",
    }),
    "pt-BR": content({
      definition:
        "Risk é um evento ou condição incerta que, se ocorrer, pode afetar objetivos, outcomes, custo, prazo, segurança, qualidade ou reputação.",
      purpose:
        "Ele torna incerteza discutível e acionável para reduzir probabilidade ou impacto, transferir exposição, preparar contingency ou aceitar conscientemente.",
      when: "Registre Risk quando houver incerteza e consequência, nomeando causa, evento possível, efeito, owner e evidência que mudaria a avaliação.",
      context:
        "Uma migration pode sobrecarregar identity service legado no pico, atrasando acesso de clientes e resposta do suporte.",
      application:
        "O owner estima likelihood e impact, valida capacidade, define load tests e migration gradual e prepara trigger de rollback.",
      phrase:
        "O Risk é o tráfego exceder a capacidade e causar logins falhos; 'monitorar de perto' sozinho não é mitigação.",
      aliases: ["project risk", "product risk", "uncertain threat", "risco"],
      confusion:
        "Risk é incerto e pode ocorrer; issue já ocorreu e exige resposta, não estimativa de probabilidade.",
    }),
  },
  "risk-assessment": {
    en: content({
      definition:
        "Risk Assessment is the systematic process of identifying risks, analyzing their likelihood and consequences, and evaluating their significance against decision criteria.",
      purpose:
        "It creates a reasoned basis for prioritizing treatment, accepting exposure, allocating controls, and communicating uncertainty to decision-makers.",
      when: "Perform it before consequential changes and revisit it when scope, threats, evidence, exposure, controls, or organizational tolerance changes.",
      context:
        "A healthcare product plans to store a new class of sensitive data and must decide which privacy and availability controls are necessary.",
      application:
        "The team identifies assets and scenarios, estimates likelihood and impact with evidence, evaluates existing controls, records residual risk, owners, and treatment decisions.",
      phrase:
        "The Risk Assessment rates the residual exposure after controls, not the worst imaginable consequence in isolation.",
      aliases: ["risk analysis", "risk evaluation", "avaliação de riscos"],
      confusion:
        "Risk Assessment identifies, analyzes, and evaluates exposure; Risk Management is the broader continuing process that also treats and monitors it.",
    }),
    "pt-BR": content({
      definition:
        "Risk Assessment é o processo sistemático de identificar riscos, analisar probabilidade e consequências e avaliar sua relevância diante de critérios decisórios.",
      purpose:
        "Ela cria base racional para priorizar tratamento, aceitar exposição, alocar controles e comunicar incerteza a decision-makers.",
      when: "Realize-a antes de mudanças consequentes e revise quando scope, ameaças, evidências, exposição, controles ou tolerância mudarem.",
      context:
        "Um produto de saúde armazenará nova classe de dados sensíveis e precisa decidir controles de privacidade e disponibilidade.",
      application:
        "O time identifica ativos e cenários, estima likelihood e impact, avalia controles e registra residual risk, owners e tratamento.",
      phrase:
        "A Risk Assessment classifica a exposição residual após controles, não a pior consequência imaginável isoladamente.",
      aliases: ["risk analysis", "risk evaluation", "avaliação de riscos"],
      confusion:
        "Risk Assessment identifica, analisa e avalia exposição; Risk Management é o processo amplo que também trata e monitora.",
    }),
  },
  impact: {
    en: content({
      definition:
        "Impact is the magnitude and significance of change that an action, event, problem, or product outcome produces for customers, the organization, systems, or society.",
      purpose:
        "It helps decisions focus on consequential effects rather than activity volume and gives a dimension for comparing opportunities, risks, and priorities.",
      when: "Estimate Impact when prioritizing or assessing risk, defining whose outcome changes, in what direction, by how much, for how long, and with what confidence.",
      context:
        "Two bugs require similar effort: one changes a rarely used label, while the other prevents thousands of customers from receiving payments.",
      application:
        "The team evaluates affected users, severity, frequency, duration, financial and regulatory consequences, then records assumptions behind the score.",
      phrase:
        "The payment defect has high Impact because it blocks a core outcome for many customers, even though it touches little code.",
      aliases: [
        "outcome impact",
        "business impact",
        "customer impact",
        "impacto",
      ],
      confusion:
        "Impact describes the consequence or change produced; effort describes the resources and difficulty required to perform work.",
    }),
    "pt-BR": content({
      definition:
        "Impact é a magnitude e relevância da mudança que uma ação, evento, problema ou product outcome produz para clientes, organização, sistemas ou sociedade.",
      purpose:
        "Ele foca decisões em efeitos consequentes, não volume de activity, e permite comparar opportunities, risks e prioridades.",
      when: "Estime Impact ao priorizar ou avaliar risco, definindo de quem é o outcome, direção, magnitude, duração e confidence.",
      context:
        "Dois bugs exigem esforço parecido: um altera label rara, enquanto outro impede milhares de clientes de receber pagamentos.",
      application:
        "O time avalia usuários afetados, severity, frequência, duração e consequências financeiras e regulatórias e registra assumptions.",
      phrase:
        "O defeito de pagamento tem alto Impact porque bloqueia um core outcome de muitos clientes, mesmo tocando pouco código.",
      aliases: [
        "outcome impact",
        "business impact",
        "customer impact",
        "impacto",
      ],
      confusion:
        "Impact descreve consequência ou mudança produzida; effort descreve recursos e dificuldade para realizar o trabalho.",
    }),
  },
  effort: {
    en: content({
      definition:
        "Effort is an estimate of the human work, complexity, coordination, uncertainty, and time demand required to complete a defined item or achieve an outcome.",
      purpose:
        "It gives prioritization and planning a relative view of the investment required, supporting tradeoffs against impact, urgency, risk, and capacity.",
      when: "Estimate it when comparing or planning work at a suitable level of detail, stating scope and uncertainty instead of treating the estimate as a guaranteed duration.",
      context:
        "A team compares onboarding improvements that range from a copy change to rebuilding identity verification across mobile and web.",
      application:
        "Engineering, design, data, and operations consider implementation, testing, dependencies, rollout, migration, and unknowns to assign a relative estimate.",
      phrase:
        "The coding Effort is small, but partner certification and migration make the total initiative substantially larger.",
      aliases: ["work effort", "implementation effort", "esforço"],
      confusion:
        "Effort estimates work consumed; duration is elapsed calendar time and also depends on staffing, queues, dependencies, and parallelism.",
    }),
    "pt-BR": content({
      definition:
        "Effort é a estimativa de trabalho humano, complexidade, coordenação, incerteza e demanda de tempo para concluir um item ou alcançar outcome definido.",
      purpose:
        "Ele oferece a priorização e planejamento uma visão relativa do investimento, apoiando trade-offs com impact, urgência, risk e capacidade.",
      when: "Estime-o ao comparar ou planejar trabalho no detalhe adequado, declarando scope e incerteza em vez de tratá-lo como prazo garantido.",
      context:
        "Um time compara melhorias de onboarding que vão de copy simples à reconstrução da verificação de identidade em mobile e web.",
      application:
        "Engineering, design, data e operations consideram implementação, testes, dependencies, rollout, migration e unknowns numa estimativa relativa.",
      phrase:
        "O Effort de código é pequeno, mas certificação do parceiro e migration tornam a iniciativa muito maior.",
      aliases: ["work effort", "implementation effort", "esforço"],
      confusion:
        "Effort estima trabalho consumido; duration é tempo de calendário e depende também de equipe, filas, dependencies e paralelismo.",
    }),
  },
  "impact-vs-effort": {
    en: content({
      definition:
        "Impact vs Effort is a prioritization view that positions options by their expected outcome contribution and the work required to realize them.",
      purpose:
        "It creates a simple shared comparison that highlights promising low-effort opportunities, costly strategic bets, and low-value work worth questioning.",
      when: "Use it for an initial comparison among similarly scoped options, documenting assumptions and avoiding false precision when evidence or uncertainty differs substantially.",
      context:
        "A team must compare ten onboarding improvements ranging from wording changes to a complete identity workflow redesign.",
      application:
        "Participants agree on impact and effort definitions, estimate each option with evidence, plot the matrix, discuss outliers and dependencies, and revisit uncertain scores.",
      phrase:
        "The reminder appears in the high-impact, low-effort quadrant, but confirm that its expected effect is supported by customer evidence.",
      aliases: [
        "impact effort matrix",
        "impact-effort matrix",
        "matriz impacto versus esforço",
      ],
      confusion:
        "Impact vs Effort is a two-dimensional decision aid; ROI specifically compares monetized net gain with investment cost.",
    }),
    "pt-BR": content({
      definition:
        "Impact vs Effort é uma visão de priorização que posiciona opções pela contribuição esperada aos outcomes e pelo trabalho necessário para realizá-las.",
      purpose:
        "Ela cria comparação simples que destaca opportunities de alto valor e baixo esforço, apostas caras e trabalho de pouco valor a questionar.",
      when: "Use-a numa comparação inicial entre opções de scope parecido, documentando assumptions e evitando falsa precisão quando a incerteza variar.",
      context:
        "Um time compara dez melhorias de onboarding, de mudanças de texto à reconstrução completa do workflow de identidade.",
      application:
        "Participantes definem impact e effort, estimam com evidências, plotam a matriz, discutem outliers e dependencies e revisitam scores incertos.",
      phrase:
        "O lembrete está no quadrante de alto Impact e baixo Effort, mas confirme se o efeito possui evidência.",
      aliases: [
        "impact effort matrix",
        "impact-effort matrix",
        "matriz impacto versus esforço",
      ],
      confusion:
        "Impact vs Effort é apoio decisório em duas dimensões; ROI compara especificamente ganho líquido monetizado com custo do investimento.",
    }),
  },
  "prioritization-matrix": {
    en: content({
      definition:
        "A Prioritization Matrix is a structured decision tool that scores or positions options against explicit criteria to support a relative order for attention or investment.",
      purpose:
        "It makes decision criteria, weights, assumptions, and disagreements visible, reducing the influence of recency, hierarchy, and unexamined intuition.",
      when: "Use it when several options compete and decision-makers can agree on relevant criteria, treating the result as input to judgment rather than an automatic verdict.",
      context:
        "Product, security, support, and sales advocate different roadmap items using incompatible definitions of urgency and value.",
      application:
        "The group defines criteria and scales, tests weights on examples, scores with evidence, examines sensitivity and constraints, and records the final rationale.",
      phrase:
        "The Prioritization Matrix reveals why the compliance item moves first even though its revenue score is modest.",
      aliases: ["priority matrix", "decision matrix", "matriz de priorização"],
      confusion:
        "A Prioritization Matrix is the general tool; frameworks such as RICE or Impact vs Effort prescribe particular criteria or calculations.",
    }),
    "pt-BR": content({
      definition:
        "Prioritization Matrix é uma ferramenta estruturada que pontua ou posiciona opções por critérios explícitos para apoiar uma ordem relativa de atenção ou investimento.",
      purpose:
        "Ela torna critérios, pesos, assumptions e divergências visíveis, reduzindo influência de recência, hierarquia e intuição não examinada.",
      when: "Use-a quando opções competirem e decision-makers concordarem em critérios relevantes, tratando o resultado como input, não veredito automático.",
      context:
        "Product, security, support e sales defendem roadmap items diferentes com definições incompatíveis de urgência e valor.",
      application:
        "O grupo define critérios e escalas, testa pesos, pontua com evidências, examina sensibilidade e constraints e registra a decisão.",
      phrase:
        "A Prioritization Matrix revela por que compliance vem primeiro mesmo com score modesto de receita.",
      aliases: ["priority matrix", "decision matrix", "matriz de priorização"],
      confusion:
        "Prioritization Matrix é a ferramenta geral; frameworks como RICE ou Impact vs Effort prescrevem critérios ou cálculos específicos.",
    }),
  },
  rice: {
    en: content({
      definition:
        "RICE is a prioritization scoring framework that combines Reach, Impact, Confidence, and Effort, commonly calculated as Reach multiplied by Impact and Confidence, divided by Effort.",
      purpose:
        "It compares candidate initiatives by expected benefit per unit of work while explicitly reducing scores whose reach or impact estimates are uncertain.",
      when: "Use RICE for a set of comparable product opportunities with consistent time windows, scales, and evidence, then inspect dependencies and strategic constraints separately.",
      context:
        "A product group must compare retention, acquisition, and operational initiatives proposed with different audience sizes and implementation costs.",
      application:
        "For each option, the group estimates users reached per quarter, impact per user, evidence-based confidence, and person-months of effort, then reviews score sensitivity.",
      phrase:
        "The migration has lower RICE because its reach is limited, but a regulatory deadline can still make it mandatory.",
      aliases: [
        "reach impact confidence effort",
        "rice score",
        "rice prioritization",
        "pontuação rice",
      ],
      confusion:
        "RICE is a comparative scoring aid, not a complete strategy; a high score does not override obligations, dependencies, risk, or portfolio balance.",
    }),
    "pt-BR": content({
      definition:
        "RICE é um framework de priorização que combina Reach, Impact, Confidence e Effort, normalmente multiplicando os três primeiros e dividindo pelo último.",
      purpose:
        "Ele compara iniciativas pelo benefício esperado por unidade de trabalho e reduz explicitamente scores com estimativas pouco confiáveis.",
      when: "Use RICE para opportunities comparáveis, com janela, escalas e evidências consistentes, analisando dependencies e constraints estratégicas à parte.",
      context:
        "Um product group compara iniciativas de retention, aquisição e operação com públicos e custos diferentes.",
      application:
        "Para cada opção, estima usuários alcançados por trimestre, impact, confidence baseada em evidência e person-months de effort.",
      phrase:
        "A migration tem RICE menor por alcançar poucos usuários, mas um prazo regulatório ainda pode torná-la obrigatória.",
      aliases: [
        "reach impact confidence effort",
        "rice score",
        "rice prioritization",
        "pontuação rice",
      ],
      confusion:
        "RICE apoia comparação, não substitui estratégia; score alto não supera obrigações, dependencies, risk ou equilíbrio do portfólio.",
    }),
  },
  moscow: {
    en: content({
      definition:
        "MoSCoW is a scope prioritization technique that classifies items as Must Have, Should Have, Could Have, or Won't Have for a defined delivery boundary.",
      purpose:
        "It creates explicit agreement about the minimum viable commitment and which items may move when time or capacity is constrained.",
      when: "Use it for a specific release or timebox with decision authority and firm definitions, keeping Must Haves few enough that failure remains a meaningful possibility.",
      context:
        "A regulatory launch has a fixed date and the team needs to distinguish legally essential behavior from valuable enhancements.",
      application:
        "Stakeholders classify items together, document why each Must is indispensable, cap the Must set, and record Won't Haves as excluded from this boundary rather than forever rejected.",
      phrase:
        "Export formatting is a Should Have; auditability is a Must Have because the release cannot legally operate without it.",
      aliases: [
        "must should could wont",
        "moscow method",
        "moscow prioritization",
        "método moscow",
      ],
      confusion:
        "MoSCoW classifies necessity within a defined scope; RICE ranks options using reach, impact, confidence, and effort.",
    }),
    "pt-BR": content({
      definition:
        "MoSCoW é uma técnica que classifica scope em Must Have, Should Have, Could Have e Won't Have para um boundary de delivery definido.",
      purpose:
        "Ela cria acordo explícito sobre o compromisso mínimo viável e quais itens podem sair quando tempo ou capacidade forem restritos.",
      when: "Use-a numa release ou timebox específica, com autoridade decisória e definições firmes, limitando Must Haves a um conjunto realmente indispensável.",
      context:
        "Um lançamento regulatório tem data fixa e o time precisa separar comportamento legalmente essencial de melhorias valiosas.",
      application:
        "Stakeholders classificam juntos, documentam por que cada Must é indispensável, limitam esse conjunto e registram Won't Haves como fora deste boundary.",
      phrase:
        "Formatação da exportação é Should Have; auditabilidade é Must Have porque sem ela a release não pode operar legalmente.",
      aliases: [
        "must should could wont",
        "moscow method",
        "moscow prioritization",
        "método moscow",
      ],
      confusion:
        "MoSCoW classifica necessidade num scope definido; RICE ordena opções por reach, impact, confidence e effort.",
    }),
  },
  "technical-roadmap": {
    en: content({
      definition:
        "A Technical Roadmap is a time-oriented view of intended engineering capabilities, platform evolution, risk reduction, migrations, and architectural investments tied to organizational outcomes.",
      purpose:
        "It communicates why and roughly when foundational technical change is expected, coordinating dependencies without turning uncertain work into rigid feature promises.",
      when: "Use it when several teams or product outcomes depend on staged technical evolution, revising it as constraints, evidence, and strategy change.",
      context:
        "Growth, reliability, and international expansion all depend on separating tenant data and replacing a capacity-limited database topology.",
      application:
        "Engineering maps capability outcomes, enabling work, dependencies, decision points, risks, horizons, and success measures rather than listing disconnected refactors.",
      phrase:
        "The Technical Roadmap prioritizes tenant isolation this horizon because it enables regional storage and safer enterprise growth.",
      aliases: ["technology roadmap", "engineering roadmap", "roadmap técnico"],
      confusion:
        "A Technical Roadmap focuses on engineering capability and system evolution; a Product Roadmap centers on product outcomes and customer value.",
    }),
    "pt-BR": content({
      definition:
        "Technical Roadmap é uma visão temporal de capacidades de engineering, evolução de plataforma, redução de riscos, migrations e investimentos arquiteturais ligados a outcomes.",
      purpose:
        "Ele comunica por que e aproximadamente quando mudanças fundamentais são esperadas, coordenando dependencies sem transformar incerteza em promessas rígidas.",
      when: "Use-o quando times ou product outcomes dependerem de evolução técnica em etapas, revisando conforme constraints, evidências e estratégia.",
      context:
        "Growth, reliability e expansão internacional dependem de isolar dados de tenants e substituir uma topologia de banco limitada.",
      application:
        "Engineering mapeia capability outcomes, enabling work, dependencies, decision points, risks, horizons e success measures, não refactors desconectados.",
      phrase:
        "O Technical Roadmap prioriza isolamento de tenants neste horizonte porque habilita armazenamento regional e crescimento enterprise seguro.",
      aliases: ["technology roadmap", "engineering roadmap", "roadmap técnico"],
      confusion:
        "Technical Roadmap foca capacidade de engineering e evolução do sistema; Product Roadmap centra outcomes e valor para clientes.",
    }),
  },
  "product-roadmap": {
    en: content({
      definition:
        "A Product Roadmap is a strategic, time-oriented communication of intended product outcomes, themes, opportunities, and major bets that support a product vision.",
      purpose:
        "It aligns stakeholders on direction, sequence, rationale, and uncertainty while connecting near-term choices to customer and business outcomes.",
      when: "Use it to communicate evolving product intent across meaningful horizons, revising it as discovery and market evidence changes rather than treating it as a fixed feature contract.",
      context:
        "Several teams need to coordinate work toward faster merchant activation, international expansion, and improved retention over coming horizons.",
      application:
        "Product leadership organizes evidence-backed outcomes and themes by now, next, and later, states assumptions and measures, and links delivery details elsewhere.",
      phrase:
        "The Product Roadmap commits to improving merchant activation; the exact verification solution remains subject to discovery.",
      aliases: [
        "product strategy roadmap",
        "outcome roadmap",
        "roadmap de produto",
      ],
      confusion:
        "A Product Roadmap communicates product outcomes and direction; a release plan details the scope and timing intended for particular releases.",
    }),
    "pt-BR": content({
      definition:
        "Product Roadmap é uma comunicação estratégica e temporal de product outcomes, temas, opportunities e apostas importantes que apoiam uma product vision.",
      purpose:
        "Ele alinha stakeholders sobre direção, sequência, racional e incerteza, conectando escolhas próximas a outcomes de clientes e negócio.",
      when: "Use-o para comunicar intenção de produto em horizontes relevantes, revisando conforme discovery e mercado em vez de fixá-lo como contrato de features.",
      context:
        "Vários times coordenam trabalho para activation de lojistas, expansão internacional e retention nos próximos horizontes.",
      application:
        "Product leadership organiza outcomes e temas com evidência em now, next e later, declara assumptions e medidas e liga detalhes de delivery em outro lugar.",
      phrase:
        "O Product Roadmap compromete-se com activation; a solução exata de verificação ainda depende de discovery.",
      aliases: [
        "product strategy roadmap",
        "outcome roadmap",
        "roadmap de produto",
      ],
      confusion:
        "Product Roadmap comunica outcomes e direção; release plan detalha scope e timing pretendidos para releases específicas.",
    }),
  },
  "change-management": {
    en: content({
      definition:
        "Change Management is the structured practice of preparing, supporting, and reinforcing people and organizations as they move from a current way of working to a desired future state.",
      purpose:
        "It addresses awareness, motivation, capability, leadership, communication, process, and reinforcement so a technically delivered change becomes sustained behavior.",
      when: "Use it when product, process, policy, role, or system changes require people to understand, adopt, and maintain new behaviors across an organization.",
      context:
        "A new procurement platform is ready, but buyers, approvers, finance, and suppliers must change responsibilities and abandon spreadsheets.",
      application:
        "The program assesses affected groups, engages sponsors, communicates reasons, adapts processes, trains roles, supports transition, and measures adoption and proficiency.",
      phrase:
        "Deployment installs the platform; Change Management helps each role adopt the new approval process and stop using the old one.",
      aliases: [
        "organizational change management",
        "change enablement",
        "gestão da mudança",
      ],
      confusion:
        "Change Management supports human and organizational transition; change control evaluates and authorizes modifications to controlled scope or systems.",
    }),
    "pt-BR": content({
      definition:
        "Change Management é a prática estruturada de preparar, apoiar e reforçar pessoas e organizações na transição do modo atual para um estado futuro desejado.",
      purpose:
        "Ela trata awareness, motivação, capacidade, liderança, comunicação, processo e reforço para mudança técnica virar comportamento sustentado.",
      when: "Use-a quando mudanças de produto, processo, política, papel ou sistema exigirem novos comportamentos mantidos pela organização.",
      context:
        "Uma plataforma de compras está pronta, mas compradores, aprovadores, finanças e fornecedores precisam abandonar spreadsheets e mudar responsabilidades.",
      application:
        "O programa avalia grupos afetados, envolve sponsors, comunica motivos, adapta processos, treina papéis, apoia transição e mede adoption.",
      phrase:
        "Deployment instala a plataforma; Change Management ajuda cada papel a adotar o novo fluxo e abandonar o antigo.",
      aliases: [
        "organizational change management",
        "change enablement",
        "gestão da mudança",
      ],
      confusion:
        "Change Management apoia transição humana e organizacional; change control avalia e autoriza alterações em scope ou sistemas controlados.",
    }),
  },
  delivery: {
    en: content({
      definition:
        "Delivery is the coordinated flow of turning an agreed need or outcome into a usable, released, and supportable result through planning, execution, validation, and handoffs.",
      purpose:
        "It connects intent to realized value by managing work, dependencies, quality, decisions, release, and operational readiness across contributors.",
      when: "Use the term for the end-to-end execution of a defined initiative or increment, clarifying whether completion means output produced, released, adopted, or outcome achieved.",
      context:
        "A compliance capability requires policy decisions, design, software, data migration, training, customer notice, and production verification.",
      application:
        "The team slices work, manages flow and dependencies, validates acceptance and operations, releases safely, and confirms the intended result is available.",
      phrase:
        "Development is complete, but Delivery is not complete until migration, support readiness, and production validation are addressed.",
      aliases: ["work delivery", "solution delivery", "entrega"],
      confusion:
        "Delivery is the broader realization and release of a result; deployment is the technical act of placing a software change into an environment.",
    }),
    "pt-BR": content({
      definition:
        "Delivery é o fluxo coordenado que transforma necessidade ou outcome acordado em resultado utilizável, lançado e suportável por planejamento, execução e validação.",
      purpose:
        "Ele conecta intenção a valor realizado, administrando work, dependencies, qualidade, decisões, release e operational readiness.",
      when: "Use o termo para execução ponta a ponta de iniciativa ou increment, esclarecendo se conclusão significa output, release, adoption ou outcome.",
      context:
        "Uma capability de compliance exige política, design, software, data migration, treinamento, aviso a clientes e verificação em production.",
      application:
        "O time divide trabalho, administra flow e dependencies, valida acceptance e operação, libera com segurança e confirma o resultado.",
      phrase:
        "Development terminou, mas Delivery não até migration, suporte e validação em production estarem resolvidos.",
      aliases: ["work delivery", "solution delivery", "entrega"],
      confusion:
        "Delivery é realização e liberação ampla do resultado; deployment é o ato técnico de colocar mudança num ambiente.",
    }),
  },
  "delivery-lead": {
    en: content({
      definition:
        "A Delivery Lead is a role that improves the reliable flow of cross-functional work by facilitating planning, exposing dependencies and risks, enabling decisions, and removing delivery impediments.",
      purpose:
        "The role helps teams and stakeholders coordinate complex execution without replacing the specialist ownership of product, engineering, design, or operations.",
      when: "Use it where delivery spans teams or organizations and benefits from dedicated attention to flow, alignment, governance, risk, and continuous improvement.",
      context:
        "A banking migration involves product teams, platform engineering, vendors, compliance, support, and regional operations with tightly coupled milestones.",
      application:
        "The Delivery Lead makes flow visible, aligns decision forums, tracks dependencies and risks, facilitates tradeoffs, and improves the system causing delays.",
      phrase:
        "The Delivery Lead does not assign every task; she makes the certification dependency and decision owner visible before it blocks migration.",
      aliases: ["delivery manager", "delivery leadership", "líder de entrega"],
      confusion:
        "A Delivery Lead focuses on flow and coordination of outcomes; a Product Manager primarily leads product strategy, problems, and value decisions.",
    }),
    "pt-BR": content({
      definition:
        "Delivery Lead é o papel que melhora o fluxo confiável de trabalho cross-functional facilitando planejamento, expondo dependencies e risks e removendo impediments.",
      purpose:
        "O papel ajuda times e stakeholders a coordenar execução complexa sem substituir ownership especializado de product, engineering, design ou operations.",
      when: "Use-o quando delivery atravessar times ou organizações e exigir atenção dedicada a flow, alinhamento, governança, risk e melhoria contínua.",
      context:
        "Uma migration bancária envolve product teams, platform engineering, vendors, compliance, support e operações regionais com milestones acoplados.",
      application:
        "A Delivery Lead torna flow visível, alinha fóruns decisórios, acompanha dependencies e risks, facilita trade-offs e melhora o sistema de trabalho.",
      phrase:
        "A Delivery Lead não distribui cada task; torna dependency de certificação e decision owner visíveis antes do bloqueio.",
      aliases: ["delivery manager", "delivery leadership", "líder de entrega"],
      confusion:
        "Delivery Lead foca fluxo e coordenação de outcomes; Product Manager lidera principalmente estratégia, problemas e decisões de valor.",
    }),
  },
  "project-manager": {
    en: content({
      definition:
        "A Project Manager is responsible for organizing and coordinating a temporary initiative's scope, plan, resources, dependencies, risks, stakeholders, and delivery controls.",
      purpose:
        "The role integrates work across contributors so defined objectives can be achieved within agreed constraints while decisions, changes, and accountability remain visible.",
      when: "Use a Project Manager for complex temporary efforts that require dedicated coordination, governance, budgeting, scheduling, vendor, or contractual management.",
      context:
        "A company must move three offices and their infrastructure by a fixed lease deadline while coordinating suppliers, security, finance, and employees.",
      application:
        "The Project Manager establishes the plan and governance, coordinates resources and vendors, manages risks and changes, reports forecasts, and closes the initiative.",
      phrase:
        "The Project Manager coordinates the migration deadline and vendors; technical owners remain accountable for the architecture and validation.",
      aliases: ["pm", "project management manager", "gerente de projetos"],
      confusion:
        "A Project Manager coordinates a temporary initiative and constraints; a Product Manager guides an ongoing product's strategy and outcomes.",
    }),
    "pt-BR": content({
      definition:
        "Project Manager é responsável por organizar e coordenar scope, plano, recursos, dependencies, risks, stakeholders e controles de uma iniciativa temporária.",
      purpose:
        "O papel integra trabalho entre participantes para atingir objetivos dentro de constraints acordadas, mantendo decisões, mudanças e accountability visíveis.",
      when: "Use-o em esforços temporários complexos que exijam coordenação, governança, budget, schedule, vendors ou contratos dedicados.",
      context:
        "Uma empresa precisa mudar três escritórios e infraestrutura até o fim dos contratos, coordenando fornecedores, segurança, finanças e pessoas.",
      application:
        "A Project Manager estabelece plano e governança, coordena recursos e vendors, administra risks e changes, reporta forecasts e encerra a iniciativa.",
      phrase:
        "A Project Manager coordena prazo e fornecedores; owners técnicos continuam responsáveis por architecture e validação.",
      aliases: ["pm", "project management manager", "gerente de projetos"],
      confusion:
        "Project Manager coordena iniciativa temporária e constraints; Product Manager orienta estratégia e outcomes de product contínuo.",
    }),
  },
  "scrum-master": {
    en: content({
      definition:
        "Scrum Master is the Scrum accountability responsible for establishing Scrum as defined, improving the Scrum Team's effectiveness, and helping the organization enable its work.",
      purpose:
        "It supports self-management, empiricism, focus, removal of impediments, productive events, and organizational change without becoming the team's task administrator.",
      when: "Use a Scrum Master with teams practicing Scrum, giving the role space to coach the team, Product Owner, and organization rather than only schedule ceremonies.",
      context:
        "A Scrum Team completes events mechanically but hides unfinished work, receives constant external interruption, and cannot act on retrospective improvements.",
      application:
        "The Scrum Master coaches transparency and Sprint focus, facilitates difficult conversations, helps remove systemic impediments, and works with leaders on interruption policies.",
      phrase:
        "The Scrum Master helps the team improve its system of work; she does not assign each developer's tasks.",
      aliases: ["scrum coach", "scrum-master", "mestre scrum"],
      confusion:
        "A Scrum Master enables Scrum and team effectiveness; a Project Manager manages the integrated constraints and coordination of a temporary project.",
    }),
    "pt-BR": content({
      definition:
        "Scrum Master é a accountability do Scrum responsável por estabelecer o framework conforme definido, melhorar a efetividade do Scrum Team e apoiar a organização.",
      purpose:
        "Ela apoia self-management, empiricism, foco, remoção de impediments, events produtivos e mudança organizacional sem administrar tasks do time.",
      when: "Use Scrum Master em times que praticam Scrum, permitindo coaching ao time, Product Owner e organização, não apenas agenda de ceremonies.",
      context:
        "Um Scrum Team cumpre events mecanicamente, oculta trabalho inacabado, sofre interrupções constantes e não executa melhorias da retrospective.",
      application:
        "A Scrum Master orienta transparência e Sprint focus, facilita conversas, remove impediments sistêmicos e trabalha com lideranças sobre interrupções.",
      phrase:
        "A Scrum Master ajuda o time a melhorar seu sistema de trabalho; não distribui tasks para cada developer.",
      aliases: ["scrum coach", "scrum-master", "mestre scrum"],
      confusion:
        "Scrum Master habilita Scrum e efetividade do time; Project Manager administra constraints e coordenação integrada de projeto temporário.",
    }),
  },
  "tech-lead": {
    en: content({
      definition:
        "A Tech Lead is a context-dependent engineering leadership role that guides a team's technical direction, decisions, quality, and coordination while remaining close to implementation.",
      purpose:
        "The role aligns engineers around sound tradeoffs, reduces technical uncertainty, grows shared ownership, and connects delivery needs with architectural and operational consequences.",
      when: "Use the role when a team needs explicit technical coordination and mentorship, defining decision authority and avoiding a single-person approval bottleneck.",
      context:
        "A product team is splitting a critical service while making inconsistent interface, observability, and migration decisions across engineers.",
      application:
        "The Tech Lead facilitates design decisions, clarifies constraints, prototypes risky paths, reviews system qualities, mentors peers, and coordinates with adjacent teams.",
      phrase:
        "The Tech Lead will frame the migration tradeoffs, but the team should understand and own the resulting design.",
      aliases: ["technical lead", "engineering lead", "líder técnico"],
      confusion:
        "A Tech Lead primarily provides technical leadership; an Engineering Manager primarily manages people, team health, staffing, and organizational delivery conditions.",
    }),
    "pt-BR": content({
      definition:
        "Tech Lead é um papel contextual de liderança de engineering que orienta direção técnica, decisões, qualidade e coordenação mantendo proximidade da implementação.",
      purpose:
        "O papel alinha engineers em trade-offs, reduz incerteza, amplia ownership compartilhado e conecta delivery a consequências arquiteturais e operacionais.",
      when: "Use-o quando o time precisar de coordenação técnica e mentoria explícitas, definindo autoridade sem criar bottleneck de aprovação individual.",
      context:
        "Um product team divide serviço crítico enquanto engineers tomam decisões inconsistentes sobre interfaces, observability e migration.",
      application:
        "A Tech Lead facilita design, esclarece constraints, prototipa caminhos arriscados, revisa system qualities, orienta peers e coordena times adjacentes.",
      phrase:
        "A Tech Lead enquadra trade-offs da migration, mas o time deve compreender e possuir o design resultante.",
      aliases: ["technical lead", "engineering lead", "líder técnico"],
      confusion:
        "Tech Lead fornece principalmente liderança técnica; Engineering Manager administra pessoas, saúde do time, staffing e condições organizacionais.",
    }),
  },
  "engineering-manager": {
    en: content({
      definition:
        "An Engineering Manager is a people and organizational leader accountable for the health, capability, staffing, performance, and sustainable delivery environment of an engineering team.",
      purpose:
        "The role builds effective teams, develops engineers, aligns expectations, improves organizational systems, and ensures technical work can support product and operational outcomes.",
      when: "Use the role where engineers need dedicated management, coaching, hiring, performance, team design, cross-team alignment, and delivery-system ownership.",
      context:
        "A growing engineering group has unclear expectations, uneven workload, hiring needs, cross-team conflict, and no consistent career feedback.",
      application:
        "The Engineering Manager coaches individuals, hires and develops the team, clarifies goals, improves collaboration and flow, and partners on technical and product direction.",
      phrase:
        "The Engineering Manager addresses the staffing and ownership gap while the Tech Lead guides the migration design.",
      aliases: ["em", "software engineering manager", "gerente de engenharia"],
      confusion:
        "An Engineering Manager is accountable for people and organizational effectiveness; a Tech Lead leads technical direction without necessarily managing people.",
    }),
    "pt-BR": content({
      definition:
        "Engineering Manager é uma liderança de pessoas e organização responsável por saúde, capacidade, staffing, performance e ambiente sustentável de delivery do time.",
      purpose:
        "O papel constrói times efetivos, desenvolve engineers, alinha expectativas, melhora sistemas organizacionais e sustenta outcomes de product e operação.",
      when: "Use-o quando engineers precisarem de gestão, coaching, hiring, performance, team design, alinhamento cross-team e ownership do sistema de delivery.",
      context:
        "Um grupo crescente possui expectativas pouco claras, carga desigual, contratações, conflitos entre times e feedback de carreira inconsistente.",
      application:
        "A Engineering Manager orienta pessoas, contrata e desenvolve o time, esclarece goals, melhora collaboration e flow e participa da direção.",
      phrase:
        "A Engineering Manager resolve lacuna de staffing e ownership enquanto a Tech Lead orienta o design da migration.",
      aliases: ["em", "software engineering manager", "gerente de engenharia"],
      confusion:
        "Engineering Manager responde por pessoas e efetividade organizacional; Tech Lead lidera direção técnica sem necessariamente gerir pessoas.",
    }),
  },
  "staff-engineer": {
    en: content({
      definition:
        "A Staff Engineer is a senior individual-contributor role that creates technical and organizational leverage beyond a single team's immediate implementation work.",
      purpose:
        "The role tackles ambiguous cross-team problems, improves engineering direction and systems, mentors others, and helps the organization make durable technical decisions.",
      when: "Use the level where scope and influence consistently span teams or a major technical domain, with expectations defined by the organization's career framework.",
      context:
        "Several teams independently solve authorization, producing incompatible policies, duplicated infrastructure, and security gaps across the platform.",
      application:
        "The Staff Engineer builds alignment on a shared model, validates architecture with teams, develops migration paths, mentors technical leaders, and measures adoption.",
      phrase:
        "The Staff Engineer's leverage comes from enabling several teams to solve authorization coherently, not from personally writing every component.",
      aliases: [
        "staff software engineer",
        "staff-level engineer",
        "engenheiro staff",
      ],
      confusion:
        "A Staff Engineer is usually an individual contributor with broad technical influence; an Engineering Manager leads through people management and team systems.",
    }),
    "pt-BR": content({
      definition:
        "Staff Engineer é um papel sênior de individual contributor que cria alavancagem técnica e organizacional além da implementação imediata de um único time.",
      purpose:
        "O papel enfrenta problemas ambíguos cross-team, melhora direção e sistemas de engineering, orienta pessoas e sustenta decisões técnicas duráveis.",
      when: "Use o nível quando scope e influência atravessarem consistentemente times ou domínio técnico relevante, conforme o career framework da organização.",
      context:
        "Vários times resolvem authorization separadamente, criando policies incompatíveis, infraestrutura duplicada e falhas de security.",
      application:
        "A Staff Engineer alinha um modelo compartilhado, valida architecture, desenvolve migration paths, orienta technical leaders e mede adoption.",
      phrase:
        "A alavancagem da Staff Engineer vem de permitir que vários times resolvam authorization de modo coerente, não de escrever tudo sozinha.",
      aliases: [
        "staff software engineer",
        "staff-level engineer",
        "engenheiro staff",
      ],
      confusion:
        "Staff Engineer costuma ser individual contributor com influência técnica ampla; Engineering Manager lidera por people management e sistemas do time.",
    }),
  },
  "principal-engineer": {
    en: content({
      definition:
        "A Principal Engineer is a high-level individual-contributor role that shapes technical strategy and solves systemic engineering problems across a large domain or organization.",
      purpose:
        "The role creates long-range leverage by aligning architecture with business direction, navigating major technical risk, raising engineering standards, and multiplying leadership.",
      when: "Use the level for sustained organization-wide or business-critical technical scope, according to a career framework rather than as a reward based only on tenure.",
      context:
        "A global platform must evolve data boundaries, regional resilience, and compliance across dozens of services and several engineering organizations.",
      application:
        "The Principal Engineer frames multi-year constraints, aligns senior leaders, sponsors architectural decisions and experiments, develops other technical leaders, and monitors systemic outcomes.",
      phrase:
        "The Principal Engineer connects regional data architecture to the company's expansion strategy and helps domain leaders execute it coherently.",
      aliases: [
        "principal software engineer",
        "principal-level engineer",
        "engenheiro principal",
      ],
      confusion:
        "A Principal Engineer generally operates at broader organizational scope than a Staff Engineer, though exact levels and titles vary by company.",
    }),
    "pt-BR": content({
      definition:
        "Principal Engineer é um papel elevado de individual contributor que orienta estratégia técnica e resolve problemas sistêmicos em grande domínio ou organização.",
      purpose:
        "O papel cria alavancagem de longo prazo alinhando architecture ao negócio, tratando risks técnicos, elevando standards e multiplicando liderança.",
      when: "Use o nível para scope técnico sustentado, organizacional ou crítico ao negócio, conforme career framework, não apenas tempo de casa.",
      context:
        "Uma plataforma global precisa evoluir data boundaries, resiliência regional e compliance em dezenas de serviços e organizações.",
      application:
        "A Principal Engineer enquadra constraints plurianuais, alinha lideranças, patrocina decisions e experiments, desenvolve technical leaders e monitora outcomes.",
      phrase:
        "A Principal Engineer conecta data architecture regional à expansão da empresa e ajuda domain leaders a executá-la com coerência.",
      aliases: [
        "principal software engineer",
        "principal-level engineer",
        "engenheiro principal",
      ],
      confusion:
        "Principal Engineer geralmente atua com scope organizacional maior que Staff Engineer, embora níveis e títulos variem entre empresas.",
    }),
  },
  cto: {
    en: content({
      definition:
        "Chief Technology Officer is an executive role accountable for aligning an organization's technology direction, capabilities, investments, and technical risk with its strategy and products.",
      purpose:
        "The role turns technology into organizational capability by shaping technical vision, leadership, architecture, engineering effectiveness, innovation, and long-term investment choices.",
      when: "Use a CTO role when technology is strategically significant enough to require executive ownership across product, engineering, risk, talent, and business direction.",
      context:
        "A software company is expanding globally while its platform, engineering organization, security posture, and acquisition integrations require coordinated long-range choices.",
      application:
        "The CTO aligns technology strategy with executives, develops technical leaders, governs major investments and risks, and communicates consequences to the board.",
      phrase:
        "The CTO must connect the regional platform investment to growth, resilience, compliance, talent, and the company's risk tolerance.",
      aliases: [
        "chief technology officer",
        "chief technical officer",
        "diretor de tecnologia",
      ],
      confusion:
        "A CTO usually leads technology strategy and product-engineering capability; a CIO typically leads enterprise information systems, internal technology services, and governance.",
    }),
    "pt-BR": content({
      definition:
        "Chief Technology Officer é o papel executivo responsável por alinhar direção, capacidades, investimentos e riscos de tecnologia à estratégia e aos produtos.",
      purpose:
        "Ele transforma tecnologia em capacidade organizacional ao orientar vision técnica, liderança, architecture, efetividade de engineering, inovação e investimentos.",
      when: "Use CTO quando tecnologia for estratégica o bastante para exigir ownership executivo entre product, engineering, risk, talentos e direção do negócio.",
      context:
        "Uma software company expande globalmente enquanto plataforma, organização de engineering, security e integrações de aquisições exigem escolhas coordenadas.",
      application:
        "A CTO alinha technology strategy com executivos, desenvolve technical leaders, governa investimentos e risks e comunica consequências ao conselho.",
      phrase:
        "A CTO conecta investimento em plataforma regional a growth, resilience, compliance, talentos e tolerância a risco.",
      aliases: [
        "chief technology officer",
        "chief technical officer",
        "diretor de tecnologia",
      ],
      confusion:
        "CTO costuma liderar technology strategy e capacidade de product-engineering; CIO lidera sistemas corporativos, tecnologia interna e governança da informação.",
    }),
  },
  cio: {
    en: content({
      definition:
        "Chief Information Officer is an executive role accountable for enterprise information technology, internal digital capabilities, information governance, service portfolio, and alignment with business operations.",
      purpose:
        "The role ensures the organization can operate and transform through reliable, secure, governed, cost-effective systems and information services.",
      when: "Use a CIO role where enterprise applications, data governance, infrastructure, cybersecurity, vendors, and internal transformation require unified executive accountability.",
      context:
        "A multinational operates fragmented ERP, identity, workplace, analytics, and supplier systems with inconsistent controls and duplicated cost.",
      application:
        "The CIO sets the enterprise IT strategy, governs portfolio and vendors, strengthens service and information management, sponsors modernization, and reports operational risk.",
      phrase:
        "The CIO's modernization program must improve employee operations and information control, not merely replace software licenses.",
      aliases: [
        "chief information officer",
        "information technology executive",
        "diretor de informação",
      ],
      confusion:
        "A CIO typically leads enterprise information and internal technology; a CTO usually leads broader technology strategy and product-engineering capability, though structures vary.",
    }),
    "pt-BR": content({
      definition:
        "Chief Information Officer é o papel executivo responsável por tecnologia corporativa, capacidades digitais internas, governança da informação e portfólio de serviços.",
      purpose:
        "Ele garante que a organização opere e se transforme por sistemas e serviços de informação confiáveis, seguros, governados e sustentáveis em custo.",
      when: "Use CIO quando aplicações enterprise, data governance, infraestrutura, cybersecurity, vendors e transformação interna exigirem accountability executiva unificada.",
      context:
        "Uma multinacional opera ERP, identity, workplace, analytics e supplier systems fragmentados, com controles inconsistentes e custo duplicado.",
      application:
        "A CIO define enterprise IT strategy, governa portfólio e vendors, fortalece serviços e informação, patrocina modernization e reporta operational risk.",
      phrase:
        "O programa da CIO deve melhorar operações e controle da informação, não apenas trocar licenças.",
      aliases: [
        "chief information officer",
        "information technology executive",
        "diretor de informação",
      ],
      confusion:
        "CIO costuma liderar informação corporativa e tecnologia interna; CTO lidera technology strategy e product-engineering, embora estruturas variem.",
    }),
  },
};
