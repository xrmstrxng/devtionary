import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const agileEditorialOverrides: Record<string, EditorialPair> = {
  daily: {
    en: content({
      definition:
        "A Daily is a short, recurring team coordination event used to inspect progress toward a near-term goal and adapt the plan for the next working period.",
      purpose:
        "It creates frequent visibility into flow, emerging obstacles, dependencies, and the coordination teammates need before work drifts away from the shared objective.",
      when: "Hold it during active collaborative work at a cadence that supports timely adaptation, keeping detailed problem-solving outside the main synchronization when appropriate.",
      context:
        "A product team has several items in progress and an integration change discovered yesterday may block the week's release goal.",
      application:
        "Teammates inspect the goal and work board, discuss what changed, coordinate ownership and dependencies, and update the plan immediately.",
      phrase:
        "In today's Daily, focus on what threatens the release goal and who needs to coordinate after the meeting.",
      aliases: [
        "daily meeting",
        "daily sync",
        "daily coordination",
        "reunião diária",
      ],
      confusion:
        "A Daily is a general recurring coordination event; the Daily Scrum is the specific 15-minute Scrum event for Developers to inspect progress toward the Sprint Goal.",
    }),
    "pt-BR": content({
      definition:
        "Daily é um evento curto e recorrente de coordenação usado para inspecionar progresso rumo a um goal próximo e adaptar o plano do próximo período.",
      purpose:
        "Ela cria visibilidade frequente sobre flow, obstacles, dependencies e coordenação antes que o trabalho se afaste do objetivo compartilhado.",
      when: "Realize-a durante trabalho colaborativo ativo numa cadence que permita adaptação, deixando resolução detalhada de problemas para depois quando necessário.",
      context:
        "Um product team possui vários itens em andamento e uma mudança de integração descoberta ontem pode bloquear o goal da release.",
      application:
        "O time inspeciona goal e work board, discute mudanças, coordena ownership e dependencies e atualiza o plano imediatamente.",
      phrase:
        "Na Daily de hoje, foque no que ameaça o release goal e em quem precisa coordenar depois.",
      aliases: [
        "daily meeting",
        "daily sync",
        "daily coordination",
        "reunião diária",
      ],
      confusion:
        "Daily é coordenação recorrente geral; Daily Scrum é o evento específico de 15 minutos para Developers inspecionarem o Sprint Goal.",
    }),
  },
  "stand-up": {
    en: content({
      definition:
        "A Stand-up is a brief team synchronization meeting, traditionally held while standing, in which participants coordinate current work, obstacles, and immediate plans.",
      purpose:
        "It limits meeting duration and improves shared awareness so teammates can adjust work and arrange the follow-up conversations that require deeper attention.",
      when: "Use one when a team benefits from frequent live coordination, adapting format, accessibility, time zones, and cadence rather than requiring literal standing.",
      context:
        "A support engineering team handles rapidly changing incidents and needs a concise morning handoff across specialists.",
      application:
        "Participants review active incidents and priorities, name blocked handoffs, assign follow-ups, and avoid lengthy status narration to a manager.",
      phrase:
        "Raise the database dependency in the Stand-up, then let the three relevant engineers troubleshoot it afterward.",
      aliases: ["standup", "stand-up meeting", "team standup", "reunião em pé"],
      confusion:
        "A Stand-up is a meeting format used by many teams; a Daily Scrum is a defined Scrum event with a specific purpose and accountable participants.",
    }),
    "pt-BR": content({
      definition:
        "Stand-up é uma reunião breve de sincronização, tradicionalmente feita em pé, para coordenar trabalho atual, obstacles e planos imediatos.",
      purpose:
        "Ela limita duração e melhora awareness compartilhada para o time adaptar trabalho e organizar conversas posteriores que exigem profundidade.",
      when: "Use-a quando o time se beneficiar de coordenação frequente ao vivo, adaptando formato, acessibilidade, fusos e cadence sem exigir que pessoas fiquem em pé.",
      context:
        "Um time de support engineering atende incidents que mudam rapidamente e precisa de handoff matinal conciso entre especialistas.",
      application:
        "Participantes revisam incidents e prioridades, apontam handoffs bloqueados, combinam follow-ups e evitam narrar status longo a um manager.",
      phrase:
        "Levante a dependency do banco na Stand-up e deixe os três engineers relevantes investigarem depois.",
      aliases: ["standup", "stand-up meeting", "team standup", "reunião em pé"],
      confusion:
        "Stand-up é formato usado por muitos times; Daily Scrum é um evento definido pelo Scrum com propósito e participantes responsáveis.",
    }),
  },
  sprint: {
    en: content({
      definition:
        "A Sprint is the fixed-length Scrum event of one month or less that contains all work needed to create progress toward a Product Goal, including planning, daily inspection, review, and retrospective.",
      purpose:
        "It creates a regular container for focus, inspection, adaptation, and delivery of a valuable usable Increment under a coherent Sprint Goal.",
      when: "Use Sprints when practicing Scrum, maintaining consistent duration and protecting the Sprint Goal while allowing scope clarification and renegotiation as learning occurs.",
      context:
        "A Scrum Team needs to improve account recovery while learning from implementation and stakeholder feedback within a two-week cadence.",
      application:
        "The team establishes a Sprint Goal, selects and plans work, inspects progress daily, maintains quality, presents the Increment, and improves its process.",
      phrase:
        "The Sprint Goal remains stable, but the Developers and Product Owner can renegotiate scope as they learn.",
      aliases: ["scrum sprint", "iteration", "iteração scrum"],
      confusion:
        "A Sprint is Scrum's fixed-length container event; an iteration is a broader repeated development cycle that may follow different rules.",
    }),
    "pt-BR": content({
      definition:
        "Sprint é o evento de duração fixa do Scrum, de um mês ou menos, que contém todo trabalho para avançar o Product Goal, incluindo planning, daily, review e retrospective.",
      purpose:
        "Ela cria um container regular para foco, inspeção, adaptação e entrega de Increment utilizável e valioso sob um Sprint Goal coerente.",
      when: "Use Sprints ao praticar Scrum, mantendo duração consistente e protegendo Sprint Goal enquanto o scope pode ser esclarecido e renegociado com aprendizado.",
      context:
        "Um Scrum Team precisa melhorar account recovery aprendendo com implementação e feedback numa cadence de duas semanas.",
      application:
        "O time estabelece Sprint Goal, seleciona e planeja trabalho, inspeciona diariamente, mantém qualidade, apresenta o Increment e melhora seu processo.",
      phrase:
        "O Sprint Goal permanece estável, mas Developers e Product Owner podem renegociar scope conforme aprendem.",
      aliases: ["scrum sprint", "iteration", "iteração scrum"],
      confusion:
        "Sprint é o container de duração fixa do Scrum; iteration é um ciclo repetido mais geral que pode seguir outras regras.",
    }),
  },
  planning: {
    en: content({
      definition:
        "Planning is the collaborative process of defining an intended outcome and determining a workable approach, sequence, resources, constraints, and decisions for pursuing it.",
      purpose:
        "It creates shared understanding and readiness while exposing assumptions, dependencies, risks, and tradeoffs before and during execution.",
      when: "Plan at the level and horizon useful for the decision, revisiting it as evidence changes rather than assuming a detailed forecast is certainty.",
      context:
        "A team will migrate customer data while maintaining service and must coordinate validation, capacity, communication, support, and rollback.",
      application:
        "Participants clarify outcomes and constraints, decompose the approach, sequence dependencies, identify owners and risks, estimate capacity, and define checkpoints.",
      phrase:
        "Planning should expose the migration assumptions and rollback decision, not merely assign dates to a list of tasks.",
      aliases: ["work planning", "team planning", "planejamento"],
      confusion:
        "Planning is the general act of preparing an approach; Sprint Planning is the Scrum event that initiates a Sprint and creates its plan.",
    }),
    "pt-BR": content({
      definition:
        "Planning é o processo colaborativo de definir outcome pretendido e uma abordagem viável, sequência, recursos, constraints e decisões para alcançá-lo.",
      purpose:
        "Ele cria entendimento e readiness compartilhados enquanto expõe assumptions, dependencies, risks e trade-offs antes e durante execução.",
      when: "Planeje no nível e horizonte úteis à decisão, revisando conforme evidências mudam em vez de tratar forecast detalhado como certeza.",
      context:
        "Um time migrará dados mantendo o serviço e precisa coordenar validação, capacidade, comunicação, suporte e rollback.",
      application:
        "Participantes esclarecem outcomes e constraints, decompõem abordagem, sequenciam dependencies, identificam owners e risks e definem checkpoints.",
      phrase:
        "Planning deve expor assumptions da migration e decisão de rollback, não apenas dar datas a uma lista de tasks.",
      aliases: ["work planning", "team planning", "planejamento"],
      confusion:
        "Planning é preparação geral de uma abordagem; Sprint Planning é o evento Scrum que inicia a Sprint e cria seu plano.",
    }),
  },
  refinement: {
    en: content({
      definition:
        "Refinement is the ongoing collaborative work of breaking down and adding useful detail to future work so its purpose, boundaries, risks, and possible implementation become better understood.",
      purpose:
        "It reduces avoidable uncertainty before selection while allowing discovery, design, and technical insight to shape smaller, clearer, and more valuable work.",
      when: "Refine likely upcoming work just enough to support decisions and readiness, avoiding exhaustive specification of distant items likely to change.",
      context:
        "A broad request for delegated access contains unresolved permissions, audit, recovery, migration, and user-experience questions.",
      application:
        "Product, design, and engineering clarify outcomes and examples, split slices, investigate risks and dependencies, and update acceptance information and estimates.",
      phrase:
        "Refinement revealed that audit history can ship as a separate slice from delegated invitation and acceptance.",
      aliases: [
        "backlog refinement",
        "product backlog refinement",
        "grooming",
        "refinamento",
      ],
      confusion:
        "Refinement improves understanding of future work continuously; Sprint Planning selects how the Scrum Team will pursue a Sprint Goal.",
    }),
    "pt-BR": content({
      definition:
        "Refinement é o trabalho colaborativo contínuo de decompor e detalhar trabalho futuro para compreender melhor propósito, boundaries, risks e implementação possível.",
      purpose:
        "Ele reduz incerteza evitável antes da seleção e permite que discovery, design e engineering formem trabalho menor, claro e valioso.",
      when: "Refine trabalho próximo apenas o bastante para decisão e readiness, evitando especificar exaustivamente itens distantes que provavelmente mudarão.",
      context:
        "Um pedido amplo de acesso delegado possui dúvidas sobre permissões, audit, recovery, migration e user experience.",
      application:
        "Product, design e engineering esclarecem outcomes e exemplos, dividem slices, investigam risks e dependencies e atualizam acceptance e estimativas.",
      phrase:
        "Refinement mostrou que audit history pode ser uma slice separada de convite e aceitação delegados.",
      aliases: [
        "backlog refinement",
        "product backlog refinement",
        "grooming",
        "refinamento",
      ],
      confusion:
        "Refinement melhora continuamente o entendimento do trabalho futuro; Sprint Planning seleciona como o Scrum Team buscará o Sprint Goal.",
    }),
  },
  retrospective: {
    en: content({
      definition:
        "A Retrospective is a recurring collaborative event in which a team inspects how it worked, identifies patterns and causes, and chooses improvements to test.",
      purpose:
        "It creates a protected feedback loop for team effectiveness, relationships, process, tools, and quality so learning becomes concrete change rather than private frustration.",
      when: "Hold it after a meaningful work cycle or event, often each Sprint, with psychological safety, relevant evidence, and follow-through on previous actions.",
      context:
        "A team met its release goal but relied on late testing, repeated handoff confusion, and unsustainable overtime.",
      application:
        "Participants gather observations and data, identify a recurring test-queue cause, select one owned experiment, define evidence, and review it next cycle.",
      phrase:
        "The Retrospective action is to test pairing on acceptance examples before coding, with an owner and a result to inspect next Sprint.",
      aliases: [
        "retro",
        "sprint retrospective",
        "team retrospective",
        "retrospectiva",
      ],
      confusion:
        "A Retrospective inspects and improves how the team works; a Review inspects the product result and adapts what should happen next.",
    }),
    "pt-BR": content({
      definition:
        "Retrospective é um evento colaborativo recorrente em que o time inspeciona como trabalhou, identifica padrões e causas e escolhe melhorias para testar.",
      purpose:
        "Ela cria feedback loop protegido sobre efetividade, relações, processo, ferramentas e qualidade para aprendizado virar mudança concreta.",
      when: "Realize-a após um ciclo ou evento relevante, frequentemente a cada Sprint, com psychological safety, evidências e acompanhamento das ações anteriores.",
      context:
        "Um time alcançou o release goal, mas dependeu de testes tardios, handoffs confusos e overtime insustentável.",
      application:
        "Participantes reúnem observações e dados, encontram a causa da fila de testes, escolhem um experiment com owner e revisam o resultado no próximo ciclo.",
      phrase:
        "A ação da Retrospective é testar pairing nos acceptance examples antes do código e inspecionar o resultado na próxima Sprint.",
      aliases: [
        "retro",
        "sprint retrospective",
        "team retrospective",
        "retrospectiva",
      ],
      confusion:
        "Retrospective inspeciona e melhora como o time trabalha; Review inspeciona o resultado do produto e adapta o próximo passo.",
    }),
  },
  review: {
    en: content({
      definition:
        "A Review is a structured examination of an outcome, artifact, decision, or period of work to evaluate evidence, gather perspectives, and determine adaptations or approval.",
      purpose:
        "It creates a deliberate quality and feedback checkpoint where relevant people can inspect what exists rather than relying on assumptions or status descriptions.",
      when: "Use a Review when a result benefits from stakeholder, peer, technical, compliance, or customer inspection, defining what decision or feedback the review should enable.",
      context:
        "A team has a usable reporting increment and needs users, support, and finance to inspect its behavior and discuss the next priorities.",
      application:
        "The team presents the real outcome and evidence, invites questions and usage, records changed assumptions and decisions, and updates the future plan.",
      phrase:
        "Bring the working report and customer evidence to the Review so stakeholders can adapt the roadmap with us.",
      aliases: ["work review", "product review", "peer review", "revisão"],
      confusion:
        "A Review is a broad inspection event; Sprint Review is the Scrum event for inspecting the Sprint outcome with stakeholders and adapting the Product Backlog.",
    }),
    "pt-BR": content({
      definition:
        "Review é um exame estruturado de outcome, artefato, decisão ou período de trabalho para avaliar evidências, reunir perspectivas e determinar adaptação ou aprovação.",
      purpose:
        "Ela cria checkpoint deliberado de qualidade e feedback em que pessoas relevantes inspecionam o que existe, não assumptions ou descrições de status.",
      when: "Use Review quando um resultado se beneficiar de inspeção de stakeholders, peers, áreas técnicas, compliance ou clientes, definindo a decisão esperada.",
      context:
        "Um time possui increment utilizável de relatórios e precisa que usuários, suporte e finanças inspecionem comportamento e prioridades.",
      application:
        "O time apresenta outcome real e evidências, convida perguntas e uso, registra assumptions e decisions alteradas e atualiza o plano.",
      phrase:
        "Leve o relatório funcionando e evidências de clientes à Review para adaptar o roadmap em conjunto.",
      aliases: ["work review", "product review", "peer review", "revisão"],
      confusion:
        "Review é inspeção ampla; Sprint Review é o evento Scrum que inspeciona outcome da Sprint com stakeholders e adapta Product Backlog.",
    }),
  },
  kickoff: {
    en: content({
      definition:
        "A Kickoff is the collaborative start of an initiative or phase where participants establish shared purpose, boundaries, roles, approach, risks, and immediate next steps.",
      purpose:
        "It reduces early ambiguity and coordination failure by aligning the people who will decide, contribute, depend on, or be affected by the work.",
      when: "Hold one when beginning consequential cross-functional work or a new phase, after enough preparation exists to make the conversation concrete.",
      context:
        "A customer migration involves product, engineering, security, legal, support, and a vendor that currently hold different assumptions about success.",
      application:
        "The facilitator reviews outcomes and non-goals, decision rights, stakeholders, dependencies, risks, ways of working, communication, and first actions.",
      phrase:
        "Use the Kickoff to agree who can authorize migration pauses and what evidence defines a successful pilot.",
      aliases: [
        "kick-off",
        "project kickoff",
        "initiative kickoff",
        "reunião de abertura",
      ],
      confusion:
        "A Kickoff establishes shared starting conditions; Planning develops and updates the approach and may occur before, during, and after it.",
    }),
    "pt-BR": content({
      definition:
        "Kickoff é o início colaborativo de uma iniciativa ou fase em que participantes estabelecem propósito, boundaries, papéis, abordagem, risks e próximos passos.",
      purpose:
        "Ele reduz ambiguidade e falha de coordenação ao alinhar quem decide, contribui, depende ou é afetado pelo trabalho.",
      when: "Realize-o ao iniciar trabalho cross-functional relevante ou nova fase, depois de preparação suficiente para tornar a conversa concreta.",
      context:
        "Uma customer migration envolve product, engineering, security, legal, support e vendor com assumptions diferentes sobre sucesso.",
      application:
        "A facilitação revisa outcomes e non-goals, decision rights, stakeholders, dependencies, risks, ways of working, comunicação e primeiras ações.",
      phrase:
        "Use o Kickoff para acordar quem pode pausar a migration e qual evidência define um piloto bem-sucedido.",
      aliases: [
        "kick-off",
        "project kickoff",
        "initiative kickoff",
        "reunião de abertura",
      ],
      confusion:
        "Kickoff estabelece condições iniciais compartilhadas; Planning desenvolve e atualiza a abordagem antes, durante e depois dele.",
    }),
  },
  discovery: {
    en: content({
      definition:
        "Discovery is an exploratory process for reducing uncertainty about a problem, context, opportunity, user, constraint, or possible direction through evidence and learning.",
      purpose:
        "It helps people replace assumptions with observations before committing heavily to a solution, plan, investment, or explanation.",
      when: "Use Discovery where important unknowns could change the decision, selecting research, analysis, prototypes, or experiments suited to the uncertainty.",
      context:
        "A team receives requests for faster exports but does not know which decision the export supports or why the current process is slow.",
      application:
        "The team interviews users, observes the workflow, analyzes usage and support data, maps constraints, and tests small representations of possible improvements.",
      phrase:
        "Discovery showed that customers need reliable scheduled delivery, not a faster manual export button.",
      aliases: ["exploratory discovery", "discovery process", "descoberta"],
      confusion:
        "Discovery is the general reduction of uncertainty; Product Discovery applies it specifically to product risks, opportunities, and solutions.",
    }),
    "pt-BR": content({
      definition:
        "Discovery é um processo exploratório para reduzir incerteza sobre problema, contexto, oportunidade, usuário, constraint ou direção por evidência e aprendizado.",
      purpose:
        "Ele ajuda a substituir assumptions por observações antes de grande compromisso com solução, plano, investimento ou explicação.",
      when: "Use Discovery onde unknowns importantes puderem mudar a decisão, escolhendo research, análise, prototypes ou experiments adequados.",
      context:
        "Um time recebe pedidos de exportação rápida, mas desconhece qual decisão ela apoia ou por que o processo atual é lento.",
      application:
        "O time entrevista usuários, observa workflow, analisa uso e suporte, mapeia constraints e testa representações pequenas das melhorias.",
      phrase:
        "Discovery mostrou que clientes precisam de entrega agendada confiável, não de botão de exportação manual mais rápido.",
      aliases: ["exploratory discovery", "discovery process", "descoberta"],
      confusion:
        "Discovery é redução geral de incerteza; Product Discovery aplica isso especificamente a riscos, opportunities e soluções de produto.",
    }),
  },
  alignment: {
    en: content({
      definition:
        "Alignment is a state of shared understanding and compatible commitment about purpose, priorities, decisions, responsibilities, and constraints among people who must act together.",
      purpose:
        "It reduces contradictory action and hidden expectations while allowing participants to coordinate even when they do not personally prefer every decision.",
      when: "Seek alignment before interdependent decisions and revisit it when evidence, scope, ownership, priorities, or participants change.",
      context:
        "Sales promises customization, Product prioritizes self-service, and Engineering invests in standardization without a shared enterprise strategy.",
      application:
        "Leaders surface assumptions and conflicts, agree on desired outcomes and decision rights, document tradeoffs, and confirm what each group will do differently.",
      phrase:
        "Alignment means Sales understands and supports the standard-platform decision, not that every concern disappeared.",
      aliases: [
        "team alignment",
        "stakeholder alignment",
        "shared alignment",
        "alinhamento",
      ],
      confusion:
        "Alignment is coordinated understanding and commitment; consensus means broad agreement and is not required for every accountable decision.",
    }),
    "pt-BR": content({
      definition:
        "Alignment é o estado de entendimento compartilhado e compromisso compatível sobre propósito, prioridades, decisions, responsabilidades e constraints entre pessoas que agem juntas.",
      purpose:
        "Ele reduz ações contraditórias e expectativas ocultas, permitindo coordenação mesmo quando participantes não preferem pessoalmente cada decisão.",
      when: "Busque alignment antes de decisões interdependentes e revise quando evidências, scope, ownership, prioridades ou participantes mudarem.",
      context:
        "Sales promete customização, Product prioriza self-service e Engineering investe em padronização sem estratégia enterprise comum.",
      application:
        "Lideranças expõem assumptions e conflitos, acordam outcomes e decision rights, documentam trade-offs e confirmam mudanças de cada grupo.",
      phrase:
        "Alignment significa que Sales entende e apoia a plataforma padrão, não que toda preocupação desapareceu.",
      aliases: [
        "team alignment",
        "stakeholder alignment",
        "shared alignment",
        "alinhamento",
      ],
      confusion:
        "Alignment é entendimento e compromisso coordenados; consensus é acordo amplo e não é exigido para toda decisão responsável.",
    }),
  },
  "one-on-one": {
    en: content({
      definition:
        "A One-on-one is a recurring private conversation between two colleagues, commonly a manager and direct report, focused on the employee's context, feedback, growth, relationship, and support.",
      purpose:
        "It creates protected space for topics that rarely surface in group status meetings, strengthening trust, coaching, clarity, recognition, and early problem detection.",
      when: "Hold it at a reliable cadence with an agenda shaped by both participants, preserving confidentiality while handling safety or legal obligations appropriately.",
      context:
        "An engineer delivers reliably but has stopped contributing in design discussions and has not had space to discuss role expectations or team dynamics.",
      application:
        "The manager listens to current concerns, explores evidence and goals, exchanges specific feedback, agrees support or experiments, and follows up on prior commitments.",
      phrase:
        "Use our One-on-one to discuss what is making design discussions difficult, not to repeat the project status available on the board.",
      aliases: [
        "1:1",
        "one to one",
        "one-on-one meeting",
        "reunião individual",
      ],
      confusion:
        "A One-on-one centers the individual's context and relationship; a status meeting primarily coordinates work progress and dependencies.",
    }),
    "pt-BR": content({
      definition:
        "One-on-one é uma conversa privada recorrente entre duas pessoas, comumente manager e direct report, focada em contexto, feedback, crescimento, relação e apoio.",
      purpose:
        "Ela cria espaço protegido para assuntos que raramente surgem em status coletivo, fortalecendo confiança, coaching, clareza, reconhecimento e detecção precoce.",
      when: "Realize-a numa cadence confiável com agenda formada por ambos, preservando confidencialidade e tratando obrigações de segurança ou legais adequadamente.",
      context:
        "Uma engineer entrega bem, mas parou de contribuir em design discussions e não teve espaço para conversar sobre expectativas ou dinâmica do time.",
      application:
        "A manager ouve preocupações, explora evidências e goals, troca feedback específico, combina apoio ou experiments e acompanha compromissos.",
      phrase:
        "Use nossa One-on-one para discutir o que dificulta design discussions, não para repetir status disponível no board.",
      aliases: [
        "1:1",
        "one to one",
        "one-on-one meeting",
        "reunião individual",
      ],
      confusion:
        "One-on-one centra contexto e relação da pessoa; status meeting coordena principalmente progresso e dependencies do trabalho.",
    }),
  },
  brainstorming: {
    en: content({
      definition:
        "Brainstorming is a divergent group ideation technique that generates many possible ideas before evaluating, combining, or selecting them.",
      purpose:
        "It widens the solution space, encourages associative thinking, and delays premature judgment so less obvious alternatives can emerge.",
      when: "Use it after framing a clear question and before convergence, designing participation so hierarchy, anchoring, speaking speed, or groupthink do not dominate.",
      context:
        "A support team needs alternatives for reducing repeated password-recovery contacts beyond simply adding more documentation.",
      application:
        "The facilitator defines the prompt, lets people generate ideas independently first, shares them in rounds, builds combinations, clusters themes, and evaluates later.",
      phrase:
        "During Brainstorming, capture options without debating feasibility; we will apply constraints in the convergence step.",
      aliases: ["idea storming", "group ideation", "tempestade de ideias"],
      confusion:
        "Brainstorming generates options divergently; decision-making evaluates evidence and tradeoffs to select a course of action.",
    }),
    "pt-BR": content({
      definition:
        "Brainstorming é uma técnica divergente de ideação em grupo que gera muitas possibilidades antes de avaliar, combinar ou selecionar.",
      purpose:
        "Ele amplia o espaço de soluções, incentiva associações e adia julgamento prematuro para alternativas menos óbvias aparecerem.",
      when: "Use-o depois de formular pergunta clara e antes da convergência, desenhando participação para hierarquia, anchoring ou groupthink não dominarem.",
      context:
        "Um support team precisa de alternativas para reduzir contatos repetidos de password recovery além de adicionar documentação.",
      application:
        "A facilitação define prompt, permite ideação individual, compartilha em rodadas, combina ideias, agrupa temas e avalia depois.",
      phrase:
        "Durante Brainstorming, capture opções sem debater feasibility; aplicaremos constraints na convergência.",
      aliases: ["idea storming", "group ideation", "tempestade de ideias"],
      confusion:
        "Brainstorming gera opções divergentemente; decision-making avalia evidências e trade-offs para escolher uma ação.",
    }),
  },
  sync: {
    en: content({
      definition:
        "A Sync is a focused coordination interaction used to exchange current information, reconcile differences, and agree the immediate actions needed among interdependent participants.",
      purpose:
        "It restores a shared operational picture when work, decisions, or conditions have changed faster than asynchronous communication can resolve.",
      when: "Use a Sync when participants have a specific coordination gap requiring timely interaction, inviting only necessary people and ending when shared action is clear.",
      context:
        "Frontend, API, and mobile teams interpreted an authentication contract differently and their current changes will not integrate.",
      application:
        "Owners compare the contract and implementations, resolve the discrepancy, choose the compatibility sequence, assign updates, and document the decision.",
      phrase:
        "Let's hold a 20-minute Sync with the three contract owners and leave with one versioning decision.",
      aliases: [
        "synchronization meeting",
        "team sync",
        "coordination sync",
        "sincronização",
      ],
      confusion:
        "A Sync is a targeted coordination interaction; a recurring status meeting may report progress even when no real-time reconciliation is needed.",
    }),
    "pt-BR": content({
      definition:
        "Sync é uma interação focada de coordenação usada para trocar informações atuais, reconciliar diferenças e acordar ações imediatas.",
      purpose:
        "Ela restaura uma visão operacional compartilhada quando work, decisions ou condições mudaram rápido demais para comunicação assíncrona.",
      when: "Use Sync quando houver lacuna específica de coordenação que exija interação rápida, convidando apenas pessoas necessárias.",
      context:
        "Times de frontend, API e mobile interpretaram um authentication contract de modos diferentes e as mudanças não integrarão.",
      application:
        "Owners comparam contract e implementações, resolvem diferença, escolhem sequência compatível, atribuem updates e documentam decision.",
      phrase:
        "Façamos uma Sync de 20 minutos com os três contract owners e saiamos com uma decisão de versioning.",
      aliases: [
        "synchronization meeting",
        "team sync",
        "coordination sync",
        "sincronização",
      ],
      confusion:
        "Sync é coordenação direcionada; status meeting recorrente pode apenas relatar progresso mesmo sem reconciliação em tempo real.",
    }),
  },
  "follow-up": {
    en: content({
      definition:
        "A Follow-up is a subsequent contact or action that checks progress, supplies missing information, reinforces a commitment, or continues a previous conversation or event.",
      purpose:
        "It closes the gap between discussion and result by making unresolved decisions, promises, evidence, and next actions visible again at the right time.",
      when: "Create one whenever an outcome depends on later information or action, recording owner, expected result, timing, and where the response will be captured.",
      context:
        "A security review cannot approve launch until a vendor supplies penetration-test evidence by Friday.",
      application:
        "The organizer records a Friday Follow-up owned by the vendor manager, links the required evidence, and defines who will decide after receipt.",
      phrase:
        "The Follow-up is not 'check with Security'; it is obtain the signed report by Friday and route it to the approval owner.",
      aliases: ["followup", "subsequent action", "acompanhamento"],
      confusion:
        "A Follow-up continues or verifies previous work; an Action Item is a specific assigned task that may itself require follow-up.",
    }),
    "pt-BR": content({
      definition:
        "Follow-up é contato ou ação posterior que verifica progresso, fornece informação, reforça compromisso ou continua conversa ou evento anterior.",
      purpose:
        "Ele fecha a lacuna entre discussão e resultado ao tornar decisions, promessas, evidências e próximas ações visíveis no momento certo.",
      when: "Crie-o quando um outcome depender de informação ou ação posterior, registrando owner, resultado esperado, prazo e local da resposta.",
      context:
        "Uma security review não aprova launch até um vendor fornecer evidência de penetration test na sexta-feira.",
      application:
        "A organização registra Follow-up para sexta com vendor manager, liga a evidência exigida e define quem decidirá após recebê-la.",
      phrase:
        "O Follow-up não é 'ver com Security'; é obter o relatório assinado sexta e enviá-lo ao approval owner.",
      aliases: ["followup", "subsequent action", "acompanhamento"],
      confusion:
        "Follow-up continua ou verifica trabalho anterior; Action Item é uma task atribuída que pode precisar de follow-up.",
    }),
  },
  "action-item": {
    en: content({
      definition:
        "An Action Item is a concrete piece of follow-on work assigned to an accountable owner, with an expected result and an agreed completion point.",
      purpose:
        "It converts a conversation, decision, finding, or commitment into traceable execution and prevents collective intent from becoming ownerless work.",
      when: "Record one whenever a meeting or review produces necessary work, making it specific, observable, owned, and timed before participants leave.",
      context:
        "A retrospective agrees that test data causes delays, but the improvement will vanish unless someone changes the provisioning path.",
      application:
        "The team records that Ana will automate a representative test-data seed and demonstrate it before the next retrospective, with a linked work item.",
      phrase:
        "Turn 'improve test data' into an Action Item with one owner, a demonstrable result, and a date.",
      aliases: [
        "action point",
        "assigned action",
        "meeting action",
        "item de ação",
      ],
      confusion:
        "An Action Item is specific owned work arising from a discussion; Next Steps may include broader sequencing, decisions, and events without task-level ownership.",
    }),
    "pt-BR": content({
      definition:
        "Action Item é um trabalho posterior concreto atribuído a um owner responsável, com resultado esperado e ponto de conclusão acordado.",
      purpose:
        "Ele transforma conversa, decision, finding ou compromisso em execução rastreável e evita que intenção coletiva vire trabalho sem dono.",
      when: "Registre-o quando reunião ou review produzir trabalho necessário, tornando-o específico, observável, atribuído e datado antes do fim.",
      context:
        "Uma retrospective conclui que test data causa atrasos, mas a melhoria sumirá se ninguém mudar o provisioning.",
      application:
        "O time registra que Ana automatizará um seed representativo e o demonstrará antes da próxima retrospective, com work item ligado.",
      phrase:
        "Transforme 'melhorar test data' em Action Item com um owner, resultado demonstrável e data.",
      aliases: [
        "action point",
        "assigned action",
        "meeting action",
        "item de ação",
      ],
      confusion:
        "Action Item é trabalho específico atribuído após discussão; Next Steps podem incluir sequência, decisões e eventos mais amplos.",
    }),
  },
  blocker: {
    en: content({
      definition:
        "A Blocker is an obstacle that prevents a person, work item, system, or decision from making meaningful progress until a required condition changes.",
      purpose:
        "It signals an immediate flow interruption that needs visibility, ownership, escalation, substitution, or removal rather than passive waiting.",
      when: "Label something a Blocker only when progress truly cannot continue on the relevant path, stating the blocked outcome and exact condition needed to resume.",
      context:
        "A release cannot enter production because the signing certificate expired and only the security operations team can issue a replacement.",
      application:
        "The team marks the release blocked, identifies certificate renewal as the condition, assigns escalation, records the owner and ETA, and explores safe alternate work.",
      phrase:
        "The Blocker is the missing signing certificate; code review is still possible, so not every task is blocked.",
      aliases: ["blocking issue", "work blocker", "impediment", "bloqueador"],
      confusion:
        "A Blocker stops meaningful progress on a path; an impediment makes progress harder or slower but may not stop it completely.",
    }),
    "pt-BR": content({
      definition:
        "Blocker é um obstáculo que impede pessoa, work item, sistema ou decision de avançar significativamente até que uma condição necessária mude.",
      purpose:
        "Ele sinaliza interrupção imediata de flow que exige visibilidade, ownership, escalation, substituição ou remoção em vez de espera passiva.",
      when: "Chame de Blocker somente quando o caminho realmente não puder avançar, declarando outcome bloqueado e condição exata para retomar.",
      context:
        "Uma release não entra em production porque o certificado expirou e somente security operations pode emitir outro.",
      application:
        "O time marca release bloqueada, identifica renovação como condição, atribui escalation, owner e ETA e busca trabalho alternativo seguro.",
      phrase:
        "O Blocker é o certificado ausente; code review ainda pode avançar, portanto nem toda task está bloqueada.",
      aliases: ["blocking issue", "work blocker", "impediment", "bloqueador"],
      confusion:
        "Blocker interrompe progresso significativo num caminho; impediment dificulta ou atrasa, mas pode não interromper completamente.",
    }),
  },
  bottleneck: {
    en: content({
      definition:
        "A Bottleneck is the resource, stage, policy, or capability whose limited effective capacity constrains the throughput of an entire flow.",
      purpose:
        "It identifies where improvement can most influence system performance and explains why optimizing non-constraining steps may only create larger queues.",
      when: "Look for a Bottleneck when demand accumulates, lead time grows, or throughput plateaus, using flow evidence over isolated perceptions of busyness.",
      context:
        "Developers finish changes quickly, but all releases wait several days for one shared manual compliance review.",
      application:
        "The team measures arrival, queue, processing, and completion rates, confirms compliance review as the constraint, then reduces avoidable demand and expands safe review capacity.",
      phrase:
        "Writing code faster will increase the queue because compliance review is the current Bottleneck.",
      aliases: ["flow constraint", "capacity constraint", "gargalo"],
      confusion:
        "A Bottleneck limits overall throughput persistently; a Blocker stops a particular path until a condition is resolved.",
    }),
    "pt-BR": content({
      definition:
        "Bottleneck é o recurso, etapa, política ou capability cuja capacidade efetiva limitada restringe o throughput de todo um flow.",
      purpose:
        "Ele identifica onde melhoria mais influencia o sistema e explica por que otimizar etapas não restritivas pode apenas aumentar filas.",
      when: "Procure-o quando demanda acumular, lead time crescer ou throughput parar, usando evidências de flow em vez de percepções isoladas de ocupação.",
      context:
        "Developers terminam rápido, mas releases aguardam dias por uma única review manual de compliance compartilhada.",
      application:
        "O time mede chegada, queue, processamento e conclusão, confirma compliance review como constraint e reduz demanda e amplia capacidade segura.",
      phrase:
        "Escrever código mais rápido aumentará a fila porque compliance review é o Bottleneck atual.",
      aliases: ["flow constraint", "capacity constraint", "gargalo"],
      confusion:
        "Bottleneck limita throughput geral persistentemente; Blocker interrompe um caminho particular até uma condição ser resolvida.",
    }),
  },
  deadline: {
    en: content({
      definition:
        "A Deadline is the latest agreed date or time by which an outcome, deliverable, decision, or action must be completed to satisfy a consequence or commitment.",
      purpose:
        "It establishes a time boundary for coordination and prioritization, making the cost of lateness and the need for tradeoffs explicit.",
      when: "Use one when timing has a real external or internal consequence, documenting its source, flexibility, completion criteria, and decision path if forecasts deteriorate.",
      context:
        "A regulatory report must be accepted before midnight on the final business day or the company incurs a legal violation.",
      application:
        "The owner records the legal Deadline, defines accepted submission as completion, builds review buffer, monitors forecast, and prepares escalation and contingency.",
      phrase:
        "The Deadline is the regulator's accepted submission time, not the earlier internal target we use to preserve review buffer.",
      aliases: ["due date", "final due date", "prazo final"],
      confusion:
        "A Deadline is a latest completion boundary with consequence; an ETA is a current forecast of when completion is expected.",
    }),
    "pt-BR": content({
      definition:
        "Deadline é a última data ou horário acordado para concluir outcome, deliverable, decision ou ação e satisfazer uma consequência ou compromisso.",
      purpose:
        "Ela estabelece boundary temporal para coordenação e prioridade, tornando explícitos o custo do atraso e a necessidade de trade-offs.",
      when: "Use-a quando timing tiver consequência real, documentando origem, flexibilidade, completion criteria e caminho decisório se forecasts piorarem.",
      context:
        "Um relatório regulatório precisa ser aceito até meia-noite do último dia útil para evitar violação legal.",
      application:
        "O owner registra Deadline legal, define aceitação como conclusão, cria buffer de review, monitora forecast e prepara contingency.",
      phrase:
        "A Deadline é a aceitação pelo regulador, não o target interno anterior usado como buffer.",
      aliases: ["due date", "final due date", "prazo final"],
      confusion:
        "Deadline é boundary final com consequência; ETA é o forecast atual de quando a conclusão é esperada.",
    }),
  },
  eta: {
    en: content({
      definition:
        "Estimated Time of Arrival is the current forecast of when a person, item, response, service restoration, or piece of work is expected to reach a defined point.",
      purpose:
        "It helps dependent people plan and communicate using the best available timing estimate while recognizing that the forecast can change with new evidence.",
      when: "Provide an ETA when others depend on expected timing, stating what arrival means, the evidence and uncertainty, and updating it promptly as conditions change.",
      context:
        "Customer support needs to tell affected merchants when engineers expect payment processing to be restored during an incident.",
      application:
        "The incident lead estimates restoration from the tested recovery sequence, communicates a 30-to-45-minute range, and updates it after each validation checkpoint.",
      phrase:
        "The ETA for restored processing is 14:30 to 14:45; that is a forecast, not a guarantee or the incident Deadline.",
      aliases: [
        "estimated time of arrival",
        "estimated completion time",
        "previsão de chegada",
      ],
      confusion:
        "An ETA is a changing forecast; a Deadline is a required latest time whose breach has a consequence.",
    }),
    "pt-BR": content({
      definition:
        "Estimated Time of Arrival é o forecast atual de quando pessoa, item, resposta, restauração de serviço ou trabalho deve alcançar um ponto definido.",
      purpose:
        "Ele ajuda dependentes a planejar e comunicar usando a melhor estimativa disponível, reconhecendo que o forecast muda com novas evidências.",
      when: "Forneça ETA quando outras pessoas dependerem do timing, definindo o que arrival significa, evidência e incerteza e atualizando quando condições mudarem.",
      context:
        "Customer support precisa informar a lojistas quando engineers esperam restaurar processamento de pagamentos durante incident.",
      application:
        "A incident lead estima restauração pela recovery sequence testada, comunica janela de 30 a 45 minutos e atualiza em cada checkpoint.",
      phrase:
        "A ETA da restauração é 14h30 a 14h45; isso é forecast, não garantia nem Deadline.",
      aliases: [
        "estimated time of arrival",
        "estimated completion time",
        "previsão de chegada",
      ],
      confusion:
        "ETA é forecast mutável; Deadline é o último horário exigido cuja violação possui consequência.",
    }),
  },
  ownership: {
    en: content({
      definition:
        "Ownership is the explicit accountability and agency to care for an outcome, decision, system, or responsibility over time, including coordination and follow-through.",
      purpose:
        "It prevents important work from becoming collectively assumed but individually neglected and gives others a clear point for decisions, stewardship, and escalation.",
      when: "Assign Ownership wherever continuity and accountability matter, defining authority, boundaries, expectations, backup, and handoff rather than merely naming a contact.",
      context:
        "A shared authentication service repeatedly fails because every product team uses it but no group is accountable for its roadmap, reliability, or support.",
      application:
        "The organization assigns a platform team service Ownership with decision rights, SLOs, roadmap responsibility, support rotation, documentation, and succession.",
      phrase:
        "Ownership of the service includes reliability and lifecycle decisions, not just answering questions when it breaks.",
      aliases: [
        "accountable ownership",
        "service ownership",
        "work ownership",
        "responsabilidade",
      ],
      confusion:
        "Ownership includes accountability and agency for a result; assignment may delegate a task without transferring broader accountability.",
    }),
    "pt-BR": content({
      definition:
        "Ownership é a accountability e autonomia explícitas para cuidar de outcome, decision, sistema ou responsabilidade ao longo do tempo, incluindo coordenação e follow-through.",
      purpose:
        "Ele evita que trabalho importante seja presumido coletivamente e negligenciado individualmente e cria ponto claro para decisões, stewardship e escalation.",
      when: "Atribua Ownership onde continuidade e accountability importarem, definindo autoridade, boundaries, expectativas, backup e handoff, não apenas um contato.",
      context:
        "Um authentication service compartilhado falha porque todos os product teams o usam, mas nenhum grupo responde por roadmap, reliability ou support.",
      application:
        "A organização atribui a um platform team Ownership do serviço com decision rights, SLOs, roadmap, support rotation, documentação e sucessão.",
      phrase:
        "Ownership do serviço inclui reliability e lifecycle decisions, não apenas responder quando ele quebra.",
      aliases: [
        "accountable ownership",
        "service ownership",
        "work ownership",
        "responsabilidade",
      ],
      confusion:
        "Ownership inclui accountability e autonomia por resultado; assignment pode delegar task sem transferir responsabilidade ampla.",
    }),
  },
  handoff: {
    en: content({
      definition:
        "A Handoff is the transfer of work, information, responsibility, or operational control from one person, team, stage, or system to another.",
      purpose:
        "It enables specialization and continuity while making the receiving party's needs, acceptance, context, and accountability explicit at a boundary.",
      when: "Use a deliberate Handoff when responsibility must move, minimizing unnecessary transfers and validating receipt instead of assuming that sending information completes it.",
      context:
        "Engineering releases a new billing workflow, but support needs known limitations, troubleshooting steps, customer messages, and escalation routes before launch.",
      application:
        "Both teams agree readiness criteria, review the working flow and runbook, identify open risks, confirm access, and record the accepting support owner.",
      phrase:
        "Uploading the document is not the Handoff; Support must confirm it can diagnose, communicate, and escalate the new flow.",
      aliases: [
        "work transfer",
        "team handoff",
        "transition",
        "passagem de responsabilidade",
      ],
      confusion:
        "A Handoff transfers responsibility or control across a boundary; collaboration keeps parties jointly involved without necessarily transferring ownership.",
    }),
    "pt-BR": content({
      definition:
        "Handoff é a transferência de trabalho, informação, responsabilidade ou controle operacional entre pessoa, time, etapa ou sistema.",
      purpose:
        "Ele permite especialização e continuidade tornando explícitos necessidades, acceptance, contexto e accountability de quem recebe.",
      when: "Use Handoff deliberado quando a responsabilidade precisar mudar, minimizando transferências e validando recebimento em vez de presumir que enviar informação basta.",
      context:
        "Engineering libera billing workflow novo, mas Support precisa de limitações, troubleshooting, mensagens e escalation routes antes do launch.",
      application:
        "Os times acordam readiness criteria, revisam flow e runbook, identificam risks, confirmam acesso e registram o support owner que aceita.",
      phrase:
        "Enviar documento não conclui Handoff; Support confirma que consegue diagnosticar, comunicar e escalar o fluxo.",
      aliases: [
        "work transfer",
        "team handoff",
        "transition",
        "passagem de responsabilidade",
      ],
      confusion:
        "Handoff transfere responsabilidade ou controle num boundary; collaboration mantém partes envolvidas sem necessariamente transferir ownership.",
    }),
  },
  feedback: {
    en: content({
      definition:
        "Feedback is information about observed behavior, work, or outcomes communicated so a person, team, product, or system can understand effects and adapt.",
      purpose:
        "It closes a learning loop by connecting action to evidence, reinforcing what works and making improvement opportunities concrete and timely.",
      when: "Give Feedback close enough to the event to be useful, grounding it in specific observations and effects and inviting context and dialogue.",
      context:
        "A facilitator repeatedly answers questions before quieter participants can contribute, reducing the range of ideas in design workshops.",
      application:
        "A colleague describes the observed interruptions, their effect on participation, asks for the facilitator's perspective, and suggests waiting before responding.",
      phrase:
        "Specific Feedback is: 'In the last two workshops, answering immediately left three ideas unheard; could we use a silent round first?'",
      aliases: ["constructive feedback", "performance feedback", "retorno"],
      confusion:
        "Feedback provides information for adaptation; praise expresses approval and criticism expresses judgment, neither automatically offering actionable evidence.",
    }),
    "pt-BR": content({
      definition:
        "Feedback é informação sobre comportamento, trabalho ou outcomes observados, comunicada para pessoa, time, produto ou sistema compreender efeitos e adaptar-se.",
      purpose:
        "Ele fecha learning loop conectando ação a evidência, reforçando o que funciona e tornando oportunidades de melhoria concretas e oportunas.",
      when: "Dê Feedback perto o bastante do evento, fundamentado em observações e efeitos específicos e convidando contexto e diálogo.",
      context:
        "Uma facilitadora responde antes que participantes quietos contribuam, reduzindo a variedade de ideias nos design workshops.",
      application:
        "Uma colega descreve interrupções observadas, efeito na participação, ouve a perspectiva e sugere esperar antes de responder.",
      phrase:
        "Feedback específico é: 'Nos dois workshops, respostas imediatas deixaram ideias sem voz; podemos fazer rodada silenciosa primeiro?'",
      aliases: ["constructive feedback", "performance feedback", "retorno"],
      confusion:
        "Feedback fornece informação para adaptação; elogio aprova e crítica julga, mas nenhum necessariamente oferece evidência acionável.",
    }),
  },
  "trade-off": {
    en: content({
      definition:
        "A Trade-off is a decision in which improving or preserving one desirable property requires accepting a cost, reduction, risk, or limitation in another.",
      purpose:
        "It makes competing objectives and unavoidable consequences explicit so choices can reflect context, priorities, constraints, and reversibility.",
      when: "Name a Trade-off when options cannot maximize all valued dimensions simultaneously, stating who gains or loses, over what horizon, and under which assumptions.",
      context:
        "Encrypting every search field improves confidentiality but limits query patterns and increases latency and operational complexity.",
      application:
        "The team compares threat exposure, search needs, performance, implementation cost, and alternatives, then records the chosen balance and review trigger.",
      phrase:
        "The Trade-off is not security versus convenience in general; it is which search capability we forgo to protect this sensitive field.",
      aliases: ["tradeoff", "design trade-off", "compromise", "contrapartida"],
      confusion:
        "A Trade-off accepts tension between valued properties; a compromise is a negotiated middle position and may or may not reflect a technical trade-off.",
    }),
    "pt-BR": content({
      definition:
        "Trade-off é uma decisão em que melhorar ou preservar uma propriedade desejável exige aceitar custo, redução, risk ou limitação em outra.",
      purpose:
        "Ele explicita objetivos concorrentes e consequências inevitáveis para escolhas refletirem contexto, prioridades, constraints e reversibilidade.",
      when: "Nomeie-o quando opções não puderem maximizar todas as dimensões, declarando quem ganha ou perde, horizonte e assumptions.",
      context:
        "Criptografar cada campo de busca melhora confidentiality, mas limita queries e aumenta latency e complexidade operacional.",
      application:
        "O time compara threat exposure, necessidades de search, performance, custo e alternativas e registra o equilíbrio e trigger de revisão.",
      phrase:
        "O Trade-off não é security versus conveniência em geral; é qual search capability abandonar para proteger este campo.",
      aliases: ["tradeoff", "design trade-off", "compromise", "contrapartida"],
      confusion:
        "Trade-off aceita tensão entre propriedades valorizadas; compromise é posição intermediária negociada e pode não refletir trade-off técnico.",
    }),
  },
  prioritization: {
    en: content({
      definition:
        "Prioritization is the decision process of establishing the relative order, attention, or investment given to competing needs, opportunities, risks, and work.",
      purpose:
        "It directs limited capacity toward the most consequential choices and makes explicit what will be delayed, reduced, delegated, or not pursued.",
      when: "Prioritize whenever demand exceeds capacity or sequence matters, using strategy, evidence, dependencies, urgency, risk, impact, effort, and obligations transparently.",
      context:
        "A platform team receives security remediation, reliability work, feature requests, migrations, and support issues beyond its quarterly capacity.",
      application:
        "Decision-makers agree criteria and constraints, compare evidence, identify mandatory and enabling work, order options, communicate exclusions, and revisit changes.",
      phrase:
        "Prioritization is incomplete until we state which request moves later to fund the identity remediation now.",
      aliases: [
        "priority setting",
        "work prioritization",
        "definição de prioridades",
      ],
      confusion:
        "Prioritization is the overall decision practice; a Prioritization Matrix is one structured tool that may support it.",
    }),
    "pt-BR": content({
      definition:
        "Prioritization é o processo decisório de estabelecer ordem, atenção ou investimento relativos para necessidades, opportunities, risks e trabalhos concorrentes.",
      purpose:
        "Ela direciona capacidade limitada às escolhas mais consequentes e explicita o que será adiado, reduzido, delegado ou não realizado.",
      when: "Priorize quando demanda superar capacidade ou sequência importar, usando strategy, evidência, dependencies, urgência, risk, impact, effort e obrigações.",
      context:
        "Um platform team recebe security remediation, reliability, feature requests, migrations e support issues além de sua capacidade trimestral.",
      application:
        "Decision-makers acordam critérios, comparam evidências, identificam trabalho obrigatório e enabling, ordenam opções e comunicam exclusões.",
      phrase:
        "Prioritization só termina quando declaramos qual request atrasará para financiar identity remediation agora.",
      aliases: [
        "priority setting",
        "work prioritization",
        "definição de prioridades",
      ],
      confusion:
        "Prioritization é a prática decisória ampla; Prioritization Matrix é uma ferramenta estruturada que pode apoiá-la.",
    }),
  },
  capacity: {
    en: content({
      definition:
        "Capacity is the sustainable amount of work, demand, or throughput that a person, team, resource, or system can handle within a period under defined conditions.",
      purpose:
        "It provides a realistic constraint for commitments and helps reveal overload, queues, underused capability, and the need to change demand or the system.",
      when: "Estimate Capacity for planning or service control using observed availability, skills, interruptions, maintenance, variability, and sustainability rather than theoretical maximum hours.",
      context:
        "A five-person team appears to have 200 weekly hours, but support rotation, leave, meetings, and specialist dependencies reduce what it can deliver.",
      application:
        "The team uses recent throughput and known availability, reserves operational demand, identifies scarce skills, and limits committed work accordingly.",
      phrase:
        "Our Capacity is not headcount multiplied by eight hours; incident duty and review constraints materially reduce sustainable flow.",
      aliases: [
        "team capacity",
        "work capacity",
        "delivery capacity",
        "capacidade",
      ],
      confusion:
        "Capacity is how much can be handled sustainably; workload is how much work is currently assigned or demanded and may exceed capacity.",
    }),
    "pt-BR": content({
      definition:
        "Capacity é a quantidade sustentável de trabalho, demanda ou throughput que pessoa, time, recurso ou sistema consegue atender num período e condições definidas.",
      purpose:
        "Ela fornece constraint realista para compromissos e revela overload, queues, capability ociosa e necessidade de mudar demanda ou sistema.",
      when: "Estime Capacity usando disponibilidade, skills, interrupções, manutenção, variabilidade e sustentabilidade observadas, não máximo teórico de horas.",
      context:
        "Um time de cinco pessoas parece ter 200 horas semanais, mas support rotation, férias, meetings e dependencies reduzem sua entrega.",
      application:
        "O time usa throughput recente e disponibilidade conhecida, reserva demanda operacional, identifica skills escassas e limita commitments.",
      phrase:
        "Nossa Capacity não é headcount vezes oito horas; incident duty e reviews reduzem o flow sustentável.",
      aliases: [
        "team capacity",
        "work capacity",
        "delivery capacity",
        "capacidade",
      ],
      confusion:
        "Capacity é quanto pode ser atendido sustentavelmente; workload é quanto está atribuído ou demandado e pode excedê-la.",
    }),
  },
  workload: {
    en: content({
      definition:
        "Workload is the volume, mix, difficulty, urgency, and cognitive or operational demand of work assigned to or arriving for a person, team, or system.",
      purpose:
        "It makes demand visible so it can be balanced against capacity, skills, service expectations, and health rather than inferred only from hours or task counts.",
      when: "Assess Workload when planning commitments, distributing responsibilities, responding to overload, or evaluating flow, including hidden coordination and interrupt work.",
      context:
        "Two engineers each own five tickets, but one handles routine changes while the other carries an incident, migration decisions, mentoring, and compliance reviews.",
      application:
        "The manager and team examine active and incoming work, complexity, interruptions, deadlines, scarce skills, emotional load, and redistribute or remove demand.",
      phrase:
        "Ticket counts look equal, but the on-call and migration responsibilities make the actual Workload very different.",
      aliases: ["work load", "assigned workload", "carga de trabalho"],
      confusion:
        "Workload is the demand placed on a unit; Capacity is the sustainable amount that unit can handle under defined conditions.",
    }),
    "pt-BR": content({
      definition:
        "Workload é o volume, mistura, dificuldade, urgência e demanda cognitiva ou operacional do trabalho atribuído ou recebido por pessoa, time ou sistema.",
      purpose:
        "Ele torna demanda visível para equilibrá-la com capacity, skills, expectativas de serviço e saúde, não apenas horas ou task count.",
      when: "Avalie Workload ao planejar commitments, distribuir responsabilidades, responder a overload ou analisar flow, incluindo coordenação e interrupções ocultas.",
      context:
        "Dois engineers possuem cinco tickets cada, mas um faz mudanças rotineiras e outro carrega incident, migration, mentoring e compliance reviews.",
      application:
        "Manager e time examinam trabalho ativo e futuro, complexity, interrupções, deadlines, skills escassas e carga emocional e removem ou redistribuem demanda.",
      phrase:
        "Ticket count parece igual, mas on-call e migration tornam o Workload real muito diferente.",
      aliases: ["work load", "assigned workload", "carga de trabalho"],
      confusion:
        "Workload é demanda colocada sobre uma unidade; Capacity é quanto ela consegue atender sustentavelmente nas condições definidas.",
    }),
  },
  deliverable: {
    en: content({
      definition:
        "A Deliverable is a defined, verifiable output that must be produced and accepted as part of an initiative, agreement, phase, or obligation.",
      purpose:
        "It makes expected outputs and acceptance boundaries explicit for coordination, contracts, governance, and completion tracking.",
      when: "Define one when a concrete output is required, specifying its recipient, content, quality, format, acceptance criteria, and due conditions.",
      context:
        "A security assessment contract requires more than performing tests; the client expects a documented findings report and remediation verification.",
      application:
        "The agreement defines the report, evidence appendix, severity method, review meeting, acceptance owner, and revision window as deliverable conditions.",
      phrase:
        "The Deliverable is the accepted assessment report with evidence, not the activity of running the scanner.",
      aliases: [
        "delivery artifact",
        "contract deliverable",
        "output",
        "entregável",
      ],
      confusion:
        "A Deliverable is a produced and accepted output; an outcome is the change or effect that the output is intended to enable.",
    }),
    "pt-BR": content({
      definition:
        "Deliverable é um output definido e verificável que deve ser produzido e aceito como parte de iniciativa, acordo, fase ou obrigação.",
      purpose:
        "Ele explicita output esperado e boundaries de acceptance para coordenação, contratos, governança e acompanhamento de conclusão.",
      when: "Defina-o quando um output concreto for exigido, especificando destinatário, conteúdo, qualidade, formato, acceptance criteria e condições de prazo.",
      context:
        "Um contrato de security assessment exige mais que testes; o cliente espera relatório de findings e verificação de remediation.",
      application:
        "O acordo define relatório, apêndice de evidências, severity method, review, acceptance owner e janela de revisão.",
      phrase:
        "O Deliverable é o assessment report aceito com evidências, não a activity de executar scanner.",
      aliases: [
        "delivery artifact",
        "contract deliverable",
        "output",
        "entregável",
      ],
      confusion:
        "Deliverable é output produzido e aceito; outcome é a mudança ou efeito que esse output pretende viabilizar.",
    }),
  },
  "heads-up": {
    en: content({
      definition:
        "A Heads-up is a concise advance notice that alerts someone to an upcoming event, change, risk, or need for attention before immediate action is necessarily required.",
      purpose:
        "It gives affected people time to prepare, monitor, ask questions, or avoid surprise while distinguishing awareness from a formal request or incident escalation.",
      when: "Send one when information is relevant before action becomes urgent, naming expected impact, timing, uncertainty, and whether any response is currently needed.",
      context:
        "A database migration may briefly increase read latency tomorrow, though current tests remain within the service objective.",
      application:
        "The engineer notifies support and product of the window, possible symptoms, dashboards, owner, and threshold that would trigger escalation.",
      phrase:
        "Heads-up: tomorrow's migration may raise read latency between 10:00 and 10:30; no action is needed unless the linked threshold fires.",
      aliases: [
        "heads up",
        "advance notice",
        "early warning",
        "aviso antecipado",
      ],
      confusion:
        "A Heads-up raises early awareness; an escalation requests elevated attention or authority because risk, urgency, or impact exceeds normal handling.",
    }),
    "pt-BR": content({
      definition:
        "Heads-up é um aviso antecipado e conciso sobre evento, mudança, risk ou necessidade de atenção antes que ação imediata seja necessariamente exigida.",
      purpose:
        "Ele dá tempo para preparar, monitorar, perguntar ou evitar surpresa, distinguindo awareness de request formal ou incident escalation.",
      when: "Envie-o quando a informação for relevante antes de virar urgente, indicando impact esperado, timing, incerteza e se alguma resposta é necessária.",
      context:
        "Uma database migration pode elevar read latency brevemente amanhã, embora testes permaneçam dentro do service objective.",
      application:
        "A engineer avisa Support e Product sobre janela, sintomas, dashboards, owner e threshold que dispararia escalation.",
      phrase:
        "Heads-up: a migration pode elevar read latency entre 10h e 10h30; nenhuma ação é necessária sem o threshold.",
      aliases: [
        "heads up",
        "advance notice",
        "early warning",
        "aviso antecipado",
      ],
      confusion:
        "Heads-up cria awareness antecipado; escalation pede atenção ou autoridade superior porque risk, urgência ou impact excede o tratamento normal.",
    }),
  },
  takeaway: {
    en: content({
      definition:
        "A Takeaway is a concise conclusion, insight, or lesson that a participant should retain and use after a discussion, analysis, presentation, or experience.",
      purpose:
        "It distills complex material into the most consequential understanding, helping people remember what changed in their interpretation or decision.",
      when: "State Takeaways at the end of information-rich work, grounding them in the evidence and distinguishing conclusions from actions that still require an owner.",
      context:
        "A customer research session surfaces many quotes and observations about onboarding across several account types.",
      application:
        "The researcher synthesizes that administrators abandon setup when permission requirements appear late, cites the evidence, and separates that insight from recommended next steps.",
      phrase:
        "The main Takeaway is that permission surprise, not form length, drives setup abandonment in enterprise accounts.",
      aliases: [
        "key takeaway",
        "main insight",
        "lesson",
        "principal conclusão",
      ],
      confusion:
        "A Takeaway is an insight or conclusion to retain; an Action Item is specific work assigned to produce a future result.",
    }),
    "pt-BR": content({
      definition:
        "Takeaway é uma conclusão, insight ou lição concisa que deve ser retida e usada após discussão, análise, apresentação ou experiência.",
      purpose:
        "Ele destila material complexo no entendimento mais consequente, ajudando pessoas a lembrar o que mudou em sua interpretação ou decision.",
      when: "Declare Takeaways ao fim de trabalho rico em informação, fundamentando-os em evidência e separando conclusões de ações que exigem owner.",
      context:
        "Uma customer research session traz muitas falas e observações sobre onboarding entre tipos de conta.",
      application:
        "A researcher sintetiza que admins abandonam setup quando permissões aparecem tarde, cita evidências e separa insight de next steps.",
      phrase:
        "O principal Takeaway é que surpresa com permissões, não tamanho do form, causa abandono em contas enterprise.",
      aliases: [
        "key takeaway",
        "main insight",
        "lesson",
        "principal conclusão",
      ],
      confusion:
        "Takeaway é insight ou conclusão a reter; Action Item é trabalho específico atribuído para produzir resultado futuro.",
    }),
  },
  "next-steps": {
    en: content({
      definition:
        "Next Steps are the agreed immediate actions, decisions, checkpoints, or sequences that move work from its current state toward a stated outcome.",
      purpose:
        "They turn shared understanding into forward motion by clarifying what happens after a conversation, who participates, and how progress resumes.",
      when: "Define them before closing a meeting, review, incident, or decision, including ownership and timing wherever execution depends on them.",
      context:
        "A design review identifies two unresolved accessibility questions and a technical dependency, but the meeting is about to end.",
      application:
        "The group agrees that Design will test keyboard behavior Tuesday, Engineering will validate the component API Wednesday, and the decision resumes Thursday.",
      phrase:
        "The Next Steps are the accessibility test, API validation, and Thursday decision checkpoint—not simply 'continue discussion.'",
      aliases: ["next actions", "following steps", "próximos passos"],
      confusion:
        "Next Steps describe the immediate route forward; an Action Item is one specific owned unit of work within that route.",
    }),
    "pt-BR": content({
      definition:
        "Next Steps são as ações, decisions, checkpoints ou sequências imediatas acordadas para mover o trabalho do estado atual ao outcome declarado.",
      purpose:
        "Eles transformam entendimento compartilhado em avanço ao esclarecer o que acontece depois da conversa, quem participa e como o progresso retoma.",
      when: "Defina-os antes de encerrar meeting, review, incident ou decision, incluindo ownership e timing onde a execução depender deles.",
      context:
        "Uma design review encontra duas questões de accessibility e dependency técnica ainda abertas quando a reunião está terminando.",
      application:
        "O grupo acorda teste de teclado por Design na terça, validação da component API na quarta e checkpoint decisório na quinta.",
      phrase:
        "Os Next Steps são accessibility test, API validation e decisão na quinta, não apenas 'continuar discutindo'.",
      aliases: ["next actions", "following steps", "próximos passos"],
      confusion:
        "Next Steps descrevem a rota imediata; Action Item é uma unidade específica e atribuída dentro dessa rota.",
    }),
  },
};
