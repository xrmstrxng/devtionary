import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const designEditorialOverrides: Record<string, EditorialPair> = {
  "user-experience": {
    en: content({
      definition:
        "User Experience is the totality of a person's perceptions, emotions, understanding, and responses before, during, and after using or anticipating a product, system, or service.",
      purpose:
        "It frames design around whether the complete experience is useful, usable, accessible, trustworthy, coherent, and meaningful in the person's real context.",
      when: "Evaluate UX across the end-to-end relationship, including expectations, channels, content, performance, support, and consequences rather than limiting it to screen appearance.",
      context:
        "A payment form looks polished but fails unpredictably, uses unfamiliar language, offers no recovery, and leaves customers uncertain whether money moved.",
      application:
        "The team researches goals and context, maps the journey, tests behavior and content, measures completion and confidence, and improves system reliability and support.",
      phrase:
        "The User Experience includes the confirmation email and failure recovery, not only the checkout interface.",
      aliases: ["ux", "user experience design", "experiência do usuário"],
      confusion:
        "User Experience is the person's complete experience and perception; User Interface is the set of controls and representations through which interaction occurs.",
    }),
    "pt-BR": content({
      definition:
        "User Experience é a totalidade de percepções, emoções, entendimento e respostas de uma pessoa antes, durante e depois de usar ou antecipar produto, sistema ou serviço.",
      purpose:
        "Ela orienta design para a experiência completa ser útil, usável, acessível, confiável, coerente e significativa no contexto real.",
      when: "Avalie UX na relação end-to-end, incluindo expectativas, channels, content, performance, support e consequências, não apenas aparência das screens.",
      context:
        "Um payment form parece refinado, mas falha sem previsibilidade, usa linguagem estranha, não oferece recovery e deixa dúvida se o dinheiro saiu.",
      application:
        "O time pesquisa goals e contexto, mapeia journey, testa behavior e content, mede completion e confidence e melhora reliability e support.",
      phrase:
        "A User Experience inclui confirmation email e failure recovery, não somente checkout interface.",
      aliases: ["ux", "user experience design", "experiência do usuário"],
      confusion:
        "User Experience é a experiência e percepção completas; User Interface é o conjunto de controls e representações da interaction.",
    }),
  },
  "user-interface": {
    en: content({
      definition:
        "A User Interface is the collection of perceivable representations and controls through which a person receives system information and provides input to interact with it.",
      purpose:
        "It makes system capabilities, state, choices, and consequences understandable and operable through visual, auditory, tactile, conversational, or other interaction forms.",
      when: "Design a UI wherever people and systems exchange information or control, matching the representation and interaction to user context, accessibility, and platform conventions.",
      context:
        "A clinician must review patient alerts, distinguish urgency, enter an intervention, and confirm that the record was saved under time pressure.",
      application:
        "The designer structures information hierarchy, selects semantic controls, defines states and feedback, supports keyboard and assistive technology, and tests with clinicians.",
      phrase:
        "The User Interface must expose which patient is active and whether the intervention was saved, not rely on memory or color alone.",
      aliases: ["ui", "user interface design", "interface do usuário"],
      confusion:
        "User Interface is the interaction surface and its controls; User Experience includes the broader perceptions and journey around that interface.",
    }),
    "pt-BR": content({
      definition:
        "User Interface é o conjunto de representações perceptíveis e controls pelos quais uma pessoa recebe informação do sistema e fornece input para interagir.",
      purpose:
        "Ela torna capabilities, state, escolhas e consequências compreensíveis e operáveis por formas visuais, auditivas, táteis, conversacionais ou outras.",
      when: "Projete UI onde pessoas e sistemas trocarem informação ou controle, adequando representação e interaction a contexto, accessibility e platform conventions.",
      context:
        "Uma profissional clínica revisa patient alerts, distingue urgência, registra intervention e confirma salvamento sob pressão.",
      application:
        "Design estrutura information hierarchy, escolhe semantic controls, define states e feedback, suporta keyboard e assistive technology e testa com profissionais.",
      phrase:
        "A User Interface deve expor qual paciente está ativo e se intervention foi salva, sem depender de memória ou cor.",
      aliases: ["ui", "user interface design", "interface do usuário"],
      confusion:
        "User Interface é a superfície e seus controls; User Experience inclui percepções e journey amplos ao redor dela.",
    }),
  },
  prototype: {
    en: content({
      definition:
        "A Prototype is a deliberately incomplete representation of a product, service, interaction, or technical approach built to explore, communicate, or test selected assumptions before full implementation.",
      purpose:
        "It makes ideas tangible at lower cost, enabling learning about desirability, usability, feasibility, behavior, and shared understanding before committing to production.",
      when: "Build one when a consequential question can be answered with less fidelity than the final solution, matching realism to the evidence needed and labeling limitations clearly.",
      context:
        "A team does not know whether warehouse workers can complete a new scanning flow with gloves and intermittent connectivity.",
      application:
        "Design creates a clickable flow with realistic content, runs task-based sessions on the target device, records breakdowns, and changes the concept before engineering.",
      phrase:
        "This Prototype tests task sequence and comprehension; it does not validate scanner performance or offline synchronization.",
      aliases: ["interactive prototype", "product prototype", "protótipo"],
      confusion:
        "A Prototype is built to learn about selected questions and may simulate behavior; a production MVP is an operated product intended to deliver real customer value.",
    }),
    "pt-BR": content({
      definition:
        "Prototype é uma representação intencionalmente incompleta de produto, serviço, interaction ou abordagem técnica para explorar, comunicar ou testar assumptions.",
      purpose:
        "Ele torna ideias tangíveis com custo menor e permite aprender desirability, usability, feasibility, behavior e entendimento antes de production.",
      when: "Crie-o quando uma pergunta relevante puder ser respondida com menos fidelity que a solução final, ajustando realismo à evidência e indicando limitações.",
      context:
        "Um time não sabe se warehouse workers concluem novo scanning flow com luvas e connectivity intermitente.",
      application:
        "Design cria clickable flow com content realista, conduz tasks no target device, registra breakdowns e muda conceito antes de engineering.",
      phrase:
        "Este Prototype testa task sequence e comprehension; não valida scanner performance nem offline synchronization.",
      aliases: ["interactive prototype", "product prototype", "protótipo"],
      confusion:
        "Prototype serve para aprender perguntas selecionadas e pode simular behavior; MVP em production entrega valor real e é operado.",
    }),
  },
  mockup: {
    en: content({
      definition:
        "A Mockup is a detailed static representation of a product or interface showing intended visual composition, content, hierarchy, and states without implementing full behavior.",
      purpose:
        "It communicates and evaluates visual direction and screen-level decisions before production implementation, using greater visual fidelity than a rough wireframe.",
      when: "Create one when stakeholders or builders need to inspect visual and content decisions, including representative states and annotations rather than implying interaction that is absent.",
      context:
        "A mobile banking team needs to compare two visual approaches for transaction history before building navigation and data behavior.",
      application:
        "The designer creates realistic screens with actual content density, typography, spacing, icons, error and empty variants, and notes about intended interactions.",
      phrase:
        "The Mockup shows the error state visually, but we still need a Prototype to test the recovery sequence.",
      aliases: [
        "visual mockup",
        "high-fidelity mockup",
        "interface mockup",
        "maquete visual",
      ],
      confusion:
        "A Mockup is primarily a static visual representation; a Prototype usually simulates interaction or behavior to answer experiential questions.",
    }),
    "pt-BR": content({
      definition:
        "Mockup é uma representação estática detalhada de produto ou interface que mostra composição visual, content, hierarchy e states sem behavior completo.",
      purpose:
        "Ele comunica e avalia direção visual e decisions de screen antes de production, com visual fidelity maior que wireframe simples.",
      when: "Crie-o quando stakeholders ou builders precisarem inspecionar visual e content, incluindo states representativos e annotations sem insinuar interaction ausente.",
      context:
        "Um mobile banking team compara duas abordagens visuais para transaction history antes de construir navigation e data behavior.",
      application:
        "A designer cria screens realistas com content density, typography, spacing, icons, error e empty variants e notas de interactions pretendidas.",
      phrase:
        "O Mockup mostra error state visualmente, mas ainda precisamos de Prototype para testar recovery sequence.",
      aliases: [
        "visual mockup",
        "high-fidelity mockup",
        "interface mockup",
        "maquete visual",
      ],
      confusion:
        "Mockup é representação visual estática; Prototype normalmente simula interaction ou behavior para responder questões de experiência.",
    }),
  },
  "design-token": {
    en: content({
      definition:
        "A Design Token is a named, platform-independent representation of a design decision such as color, spacing, typography, motion, radius, or elevation, transformed into implementation values.",
      purpose:
        "It creates a shared semantic source for design and code so systematic changes can propagate consistently across components, products, themes, and platforms.",
      when: "Use tokens for repeated governed decisions, naming them by meaning and role where possible and defining aliases, modes, ownership, and versioning.",
      context:
        "Web, iOS, and Android products each hard-code slightly different brand colors and spacing, making theme and accessibility changes inconsistent.",
      application:
        "The system defines semantic tokens such as color.action.primary.default, maps them to base values by theme, and transforms them into CSS variables and native resources.",
      phrase:
        "Use the semantic Design Token for critical text instead of copying a hex value whose meaning disappears in dark mode.",
      aliases: ["design tokens", "style token", "token de design"],
      confusion:
        "A Design Token stores a named design decision; a CSS custom property is one web implementation mechanism that can carry a token's value.",
    }),
    "pt-BR": content({
      definition:
        "Design Token é uma representação nomeada e platform-independent de decision de design como color, spacing, typography, motion, radius ou elevation, transformada em valores.",
      purpose:
        "Ele cria source semântica comum para design e code, permitindo propagar mudanças consistentemente entre components, products, themes e platforms.",
      when: "Use tokens para decisions repetidas e governadas, nomeando por significado e papel e definindo aliases, modes, ownership e versioning.",
      context:
        "Produtos web, iOS e Android hard-code colors e spacing diferentes, tornando mudanças de theme e accessibility inconsistentes.",
      application:
        "O sistema define tokens como color.action.primary.default, mapeia-os a base values por theme e os transforma em CSS variables e native resources.",
      phrase:
        "Use o Design Token semântico de critical text em vez de copiar hex cujo significado desaparece no dark mode.",
      aliases: ["design tokens", "style token", "token de design"],
      confusion:
        "Design Token armazena decision nomeada; CSS custom property é um mecanismo web que pode carregar seu valor.",
    }),
  },
  "component-library": {
    en: content({
      definition:
        "A Component Library is a maintained collection of reusable interface components and supporting code that products consume to implement consistent behavior and presentation.",
      purpose:
        "It reduces duplicated implementation, centralizes tested interaction and accessibility behavior, and gives teams stable building blocks for product interfaces.",
      when: "Create one when multiple screens or products repeat component needs, providing clear APIs, tests, documentation, versioning, ownership, and a contribution path.",
      context:
        "Several teams independently build dialogs, form controls, tables, and notifications with inconsistent keyboard behavior and defect fixes.",
      application:
        "A platform team publishes typed, accessible components, examples, tests, changelogs, migration guidance, and release packages for product consumers.",
      phrase:
        "Adopt the Component Library dialog so focus management and escape behavior are fixed once for every product.",
      aliases: [
        "ui component library",
        "shared component library",
        "biblioteca de componentes",
      ],
      confusion:
        "A Component Library is the reusable implementation collection; a Design System also includes principles, tokens, patterns, content, and governance.",
    }),
    "pt-BR": content({
      definition:
        "Component Library é uma coleção mantida de reusable interface components e supporting code consumida por produtos para behavior e presentation consistentes.",
      purpose:
        "Ela reduz implementation duplicada, centraliza interaction e accessibility testadas e oferece building blocks estáveis para product interfaces.",
      when: "Crie-a quando screens ou products repetirem necessidades, fornecendo APIs claras, tests, documentation, versioning, ownership e contribution path.",
      context:
        "Vários times constroem dialogs, form controls, tables e notifications com keyboard behavior e fixes inconsistentes.",
      application:
        "Um platform team publica components tipados e acessíveis, examples, tests, changelogs, migration guidance e release packages.",
      phrase:
        "Adote o dialog da Component Library para corrigir focus management e Escape uma vez para todos os products.",
      aliases: [
        "ui component library",
        "shared component library",
        "biblioteca de componentes",
      ],
      confusion:
        "Component Library é a coleção de implementação; Design System inclui também principles, tokens, patterns, content e governance.",
    }),
  },
  usability: {
    en: content({
      definition:
        "Usability is the extent to which specified users can achieve specified goals effectively, efficiently, and satisfactorily in a defined context of use.",
      purpose:
        "It evaluates practical use quality through successful outcomes, effort, errors, learning, confidence, and satisfaction rather than visual preference alone.",
      when: "Assess Usability for representative users, tasks, environments, and constraints throughout design and after release using observation and meaningful measures.",
      context:
        "A medical scheduling tool works technically, but coordinators frequently book the wrong clinic and need several minutes to recover.",
      application:
        "Researchers observe representative scheduling tasks, measure completion and critical errors, identify causes, redesign selection and confirmation, and retest.",
      phrase:
        "The screen is attractive, but Usability is poor if coordinators cannot confidently select the correct clinic.",
      aliases: ["ease of use", "product usability", "usabilidade"],
      confusion:
        "Usability measures effective, efficient, satisfactory use in context; Accessibility specifically addresses barriers for people with disabilities and diverse access needs.",
    }),
    "pt-BR": content({
      definition:
        "Usability é o grau em que usuários especificados alcançam goals especificados com efetividade, eficiência e satisfação num contexto de uso definido.",
      purpose:
        "Ela avalia qualidade prática pelo outcome, effort, errors, learning, confidence e satisfaction, não apenas preferência visual.",
      when: "Avalie Usability com usuários, tasks, ambientes e constraints representativos durante design e após release, por observação e medidas significativas.",
      context:
        "Uma ferramenta médica funciona tecnicamente, mas coordinators agendam a clinic errada e levam minutos para recovery.",
      application:
        "Researchers observam scheduling tasks, medem completion e critical errors, identificam causas, redesenham selection e confirmation e retestam.",
      phrase:
        "A screen é bonita, mas Usability é ruim se coordinators não selecionam a clinic correta com confidence.",
      aliases: ["ease of use", "product usability", "usabilidade"],
      confusion:
        "Usability mede uso efetivo, eficiente e satisfatório; Accessibility trata barreiras para pessoas com deficiências e access needs diversos.",
    }),
  },
  "user-flow": {
    en: content({
      definition:
        "A User Flow is a structured representation of the screens, states, actions, and decision paths a user can traverse to complete a defined task or outcome.",
      purpose:
        "It makes interaction logic and branching visible so teams can find missing states, unnecessary steps, dead ends, and implementation dependencies.",
      when: "Create one for a bounded task whose interface paths need design or review, including validation, cancellation, errors, permissions, and recovery rather than only the happy path.",
      context:
        "Account recovery varies according to remembered email, available second factor, locked identity, and support escalation.",
      application:
        "The designer maps entry points, screens, decisions, system responses, alternate paths, terminal states, and handoffs, then validates them with users and engineers.",
      phrase:
        "The User Flow must show what happens when the recovery code is unavailable, not stop at the successful verification branch.",
      aliases: [
        "task flow",
        "screen flow",
        "interaction flow",
        "fluxo do usuário",
      ],
      confusion:
        "A User Flow details interface paths for a task; a User Journey includes broader context, channels, goals, and emotions before and after those paths.",
    }),
    "pt-BR": content({
      definition:
        "User Flow é uma representação estruturada de screens, states, actions e decision paths percorridos para concluir task ou outcome definido.",
      purpose:
        "Ele torna interaction logic e branches visíveis para encontrar states ausentes, steps desnecessários, dead ends e implementation dependencies.",
      when: "Crie-o para uma task delimitada cujos paths precisam de design ou review, incluindo validation, cancelamento, errors, permissions e recovery.",
      context:
        "Account recovery varia conforme email lembrado, second factor disponível, identity bloqueada e support escalation.",
      application:
        "A designer mapeia entry points, screens, decisions, system responses, alternate paths, terminal states e handoffs e valida com users e engineers.",
      phrase:
        "O User Flow deve mostrar quando recovery code não está disponível, não parar no branch bem-sucedido.",
      aliases: [
        "task flow",
        "screen flow",
        "interaction flow",
        "fluxo do usuário",
      ],
      confusion:
        "User Flow detalha interface paths de uma task; User Journey inclui contexto, channels, goals e emotions antes e depois deles.",
    }),
  },
  "information-architecture": {
    en: content({
      definition:
        "Information Architecture is the practice of organizing, structuring, labeling, relating, and enabling navigation and search of information so people can understand and find what they need.",
      purpose:
        "It creates coherent mental and structural models across content and functionality, reducing ambiguity, duplication, disorientation, and retrieval effort.",
      when: "Use it when products contain substantial content, concepts, navigation, taxonomy, or search, grounding structures in user language, tasks, and content governance.",
      context:
        "A developer portal has guides, API references, tutorials, policies, examples, and troubleshooting scattered under internal team names.",
      application:
        "The team inventories content, researches user vocabulary and tasks, defines taxonomy and hierarchy, tests navigation and labels, and establishes metadata and governance.",
      phrase:
        "Information Architecture should group authentication guidance by developer task, not by the internal teams that authored it.",
      aliases: [
        "ia",
        "content architecture",
        "information organization",
        "arquitetura da informação",
      ],
      confusion:
        "Information Architecture structures information and findability; Software Architecture structures technical components, responsibilities, and system qualities.",
    }),
    "pt-BR": content({
      definition:
        "Information Architecture é a prática de organizar, estruturar, rotular, relacionar e permitir navigation e search da informação para pessoas encontrarem e compreenderem o necessário.",
      purpose:
        "Ela cria modelos mentais e estruturais coerentes entre content e functionality, reduzindo ambiguidade, duplication, desorientação e retrieval effort.",
      when: "Use-a quando products possuírem muito content, conceitos, navigation, taxonomy ou search, baseando estruturas em linguagem, tasks e content governance.",
      context:
        "Um developer portal possui guides, API references, tutorials, policies, examples e troubleshooting espalhados por nomes de times internos.",
      application:
        "O time inventaria content, pesquisa vocabulário e tasks, define taxonomy e hierarchy, testa navigation e labels e estabelece metadata e governance.",
      phrase:
        "Information Architecture deve agrupar authentication guidance por developer task, não pelos times internos autores.",
      aliases: [
        "ia",
        "content architecture",
        "information organization",
        "arquitetura da informação",
      ],
      confusion:
        "Information Architecture estrutura informação e findability; Software Architecture estrutura technical components, responsabilidades e system qualities.",
    }),
  },
  "interaction-design": {
    en: content({
      definition:
        "Interaction Design is the practice of shaping how people act with a product and how the product responds over time through controls, behavior, feedback, flow, and states.",
      purpose:
        "It makes intentions and system behavior understandable, efficient, forgiving, and satisfying across actions, transitions, input methods, and error conditions.",
      when: "Apply it wherever users manipulate or communicate with a system, specifying behavior beyond static screens and testing timing, feedback, accessibility, and recovery.",
      context:
        "A user drags files into an upload area but cannot tell which files are accepted, progressing, failed, duplicated, or safely removable.",
      application:
        "Design defines affordances, drag and keyboard alternatives, validation timing, progress and cancellation, error recovery, motion, focus, and completion feedback.",
      phrase:
        "Interaction Design covers what the upload control does during progress and failure, not only how the idle state looks.",
      aliases: ["ixd", "interaction experience design", "design de interação"],
      confusion:
        "Interaction Design focuses on behavior over time; Visual Design focuses primarily on aesthetic form, composition, and visual communication.",
    }),
    "pt-BR": content({
      definition:
        "Interaction Design é a prática de moldar como pessoas agem com o produto e como ele responde ao longo do tempo por controls, behavior, feedback, flow e states.",
      purpose:
        "Ele torna intenções e system behavior compreensíveis, eficientes, tolerantes e satisfatórios entre actions, transitions, input methods e errors.",
      when: "Aplique-o onde users manipularem ou se comunicarem com sistema, especificando behavior além de screens estáticas e testando timing, feedback, accessibility e recovery.",
      context:
        "Uma pessoa arrasta files para upload area, mas não sabe quais foram aceitos, estão em progress, falharam, duplicaram ou podem ser removidos.",
      application:
        "Design define affordances, alternativas por keyboard, validation timing, progress e cancellation, error recovery, motion, focus e completion feedback.",
      phrase:
        "Interaction Design cobre o que upload control faz em progress e failure, não apenas a aparência idle.",
      aliases: ["ixd", "interaction experience design", "design de interação"],
      confusion:
        "Interaction Design foca behavior ao longo do tempo; Visual Design foca principalmente forma estética, composition e comunicação visual.",
    }),
  },
  "visual-hierarchy": {
    en: content({
      definition:
        "Visual Hierarchy is the arrangement of visual attributes and spatial relationships that signals the relative importance, grouping, order, and path of information in an interface.",
      purpose:
        "It guides attention and comprehension so people can identify what matters first, understand relationships, scan efficiently, and locate likely actions.",
      when: "Design hierarchy whenever a view contains competing information or actions, using size, position, spacing, typography, contrast, repetition, and motion without relying on one cue alone.",
      context:
        "A billing page gives invoice total, overdue warning, secondary metadata, download, and payment actions equal visual weight, making the next step unclear.",
      application:
        "The designer groups invoice facts, emphasizes overdue status and total, makes payment primary, reduces metadata prominence, and tests scanning and zoom conditions.",
      phrase:
        "Strengthen Visual Hierarchy around the overdue amount and payment action instead of making every label bold.",
      aliases: ["visual order", "interface hierarchy", "hierarquia visual"],
      confusion:
        "Visual Hierarchy guides attention through presentation; Information Architecture organizes the underlying information, labels, relationships, navigation, and findability.",
    }),
    "pt-BR": content({
      definition:
        "Visual Hierarchy é a organização de atributos visuais e relações espaciais que sinaliza importância, grouping, ordem e caminho da informação numa interface.",
      purpose:
        "Ela orienta attention e comprehension para pessoas identificarem o que importa, entenderem relações, escanearem e encontrarem actions.",
      when: "Projete-a quando uma view contiver informações ou actions concorrentes, usando size, position, spacing, typography, contrast, repetition e motion sem depender de uma pista.",
      context:
        "Uma billing page dá o mesmo peso ao total, overdue warning, metadata, download e payment, deixando o próximo passo incerto.",
      application:
        "A designer agrupa invoice facts, enfatiza overdue status e total, torna payment primário, reduz metadata e testa scanning e zoom.",
      phrase:
        "Reforce Visual Hierarchy no overdue amount e payment action em vez de deixar cada label em bold.",
      aliases: ["visual order", "interface hierarchy", "hierarquia visual"],
      confusion:
        "Visual Hierarchy guia attention pela presentation; Information Architecture organiza informação, labels, relationships, navigation e findability subjacentes.",
    }),
  },
  affordance: {
    en: content({
      definition:
        "An Affordance is a possible action that the relationship between an object's properties and a person's capabilities makes available, whether or not the action is perceived correctly.",
      purpose:
        "It helps design connect what people can do with cues and constraints that make intended actions discoverable and unintended actions less likely.",
      when: "Evaluate affordances for controls, objects, and environments by considering actual capability, perceived signifiers, conventions, feedback, accessibility, and context.",
      context:
        "A flat icon can expand a panel, but it lacks a label, familiar shape, hover or focus treatment, so many users do not recognize it as interactive.",
      application:
        "The designer uses a semantic button, visible label and state, appropriate cursor and focus, sufficient target size, and immediate expansion feedback.",
      phrase:
        "The action technically exists, but weak signifiers hide the Affordance from keyboard and first-time users.",
      aliases: [
        "interaction affordance",
        "perceived affordance",
        "possibilidade de ação",
      ],
      confusion:
        "An Affordance is the action possibility; a signifier is the perceivable cue that communicates where and how to act.",
    }),
    "pt-BR": content({
      definition:
        "Affordance é uma ação possível disponibilizada pela relação entre propriedades de um objeto e capabilities de uma pessoa, percebida corretamente ou não.",
      purpose:
        "Ela ajuda design a conectar o que pessoas podem fazer a cues e constraints que tornam actions pretendidas descobríveis e erros menos prováveis.",
      when: "Avalie affordances em controls, objetos e ambientes considerando capability real, signifiers percebidos, conventions, feedback, accessibility e contexto.",
      context:
        "Um flat icon expande panel, mas não possui label, shape familiar, hover ou focus, então users não o reconhecem como interativo.",
      application:
        "A designer usa semantic button, label e state visíveis, cursor e focus adequados, target size suficiente e expansion feedback imediato.",
      phrase:
        "A action existe tecnicamente, mas signifiers fracos escondem a Affordance de keyboard e first-time users.",
      aliases: [
        "interaction affordance",
        "perceived affordance",
        "possibilidade de ação",
      ],
      confusion:
        "Affordance é a possibilidade de action; signifier é a pista perceptível que comunica onde e como agir.",
    }),
  },
  "feedback-visual": {
    en: content({
      definition:
        "Visual Feedback is a visible change in an interface that communicates recognition, progress, state, result, validity, or consequence in response to user or system activity.",
      purpose:
        "It closes the interaction loop so people know that an action was received, what the system is doing, what changed, and whether further attention is needed.",
      when: "Provide it for interactive actions and asynchronous transitions, making it timely, proportional, persistent enough, accessible, and supplemented beyond color where necessary.",
      context:
        "A person submits a transfer and the button appears unchanged for several seconds, leading to repeated clicks and duplicate requests.",
      application:
        "The interface disables duplicate submission, changes label and icon, announces progress, shows a stable success receipt or actionable error, and preserves context.",
      phrase:
        "Visual Feedback should show that submission started immediately and distinguish pending from completed transfer state.",
      aliases: ["visual feedback", "interface feedback", "retorno visual"],
      confusion:
        "Visual Feedback communicates through visible interface change; feedback in general may also be auditory, haptic, textual, interpersonal, or analytical.",
    }),
    "pt-BR": content({
      definition:
        "Feedback Visual é uma mudança visível na interface que comunica recognition, progress, state, result, validity ou consequence após activity do usuário ou sistema.",
      purpose:
        "Ele fecha interaction loop para pessoas saberem que action foi recebida, o que o sistema faz, o que mudou e se precisam agir.",
      when: "Forneça-o em actions e async transitions, tornando-o oportuno, proporcional, persistente, acessível e complementado além de color quando necessário.",
      context:
        "Uma pessoa envia transferência e o button não muda por segundos, levando a repeated clicks e duplicate requests.",
      application:
        "A interface bloqueia duplicate submission, muda label e icon, anuncia progress, mostra success receipt ou actionable error e preserva contexto.",
      phrase:
        "Feedback Visual deve mostrar imediatamente que submission iniciou e distinguir pending de completed transfer state.",
      aliases: ["visual feedback", "interface feedback", "retorno visual"],
      confusion:
        "Feedback Visual comunica por mudança visível; feedback geral também pode ser auditory, haptic, textual, interpessoal ou analítico.",
    }),
  },
  "empty-state": {
    en: content({
      definition:
        "An Empty State is the interface condition shown when a view has no items or content to display because of first use, completed work, filtering, permissions, or absence of data.",
      purpose:
        "It explains why the view is empty, confirms that the system is functioning, and guides the most relevant next action or understanding.",
      when: "Design distinct Empty States for meaningful causes, avoiding a generic message that hides whether data is absent, inaccessible, filtered out, or still loading.",
      context:
        "A project list can be empty for a new account, because search filters match nothing, or because the user lacks access to existing projects.",
      application:
        "The interface provides cause-specific title and guidance, preserves filter controls, offers create or clear-filter actions when authorized, and avoids misleading illustration.",
      phrase:
        "This Empty State should say no results match the filters, not invite the user to create their first project.",
      aliases: ["zero state", "blank state", "estado vazio"],
      confusion:
        "An Empty State represents a known absence of displayable content; a Loading State represents content or work whose result is not yet available.",
    }),
    "pt-BR": content({
      definition:
        "Empty State é a condição de interface exibida quando uma view não possui items ou content por primeiro uso, trabalho concluído, filtering, permissions ou ausência de data.",
      purpose:
        "Ele explica por que a view está vazia, confirma funcionamento do sistema e orienta next action ou entendimento relevante.",
      when: "Projete Empty States distintos por causa, evitando mensagem genérica que esconda se data não existe, está inacessível, filtrada ou em loading.",
      context:
        "Uma project list pode estar vazia em conta nova, por search filters sem match ou por falta de access aos projects existentes.",
      application:
        "A interface oferece title e guidance específicos, preserva filters, fornece create ou clear-filter actions quando autorizadas e evita illustration enganosa.",
      phrase:
        "Este Empty State deve dizer que nenhum resultado corresponde aos filters, não convidar a criar o primeiro project.",
      aliases: ["zero state", "blank state", "estado vazio"],
      confusion:
        "Empty State representa ausência conhecida de content; Loading State representa content ou trabalho cujo resultado ainda não chegou.",
    }),
  },
  "loading-state": {
    en: content({
      definition:
        "A Loading State is the interface condition that communicates an operation or data request is in progress and the final result is not yet available.",
      purpose:
        "It acknowledges the user's action, sets expectations, prevents ambiguous inactivity, and can preserve context while asynchronous work completes.",
      when: "Show one when waiting becomes perceptible, choosing immediate or delayed feedback, determinate progress, cancellation, skeletons, and messaging according to duration and consequence.",
      context:
        "A financial report takes between two and twenty seconds depending on date range, and users otherwise click Generate repeatedly or leave.",
      application:
        "The interface confirms the request, disables duplicates, preserves parameters, displays progress when measurable, offers cancellation for long work, and transitions to result or error.",
      phrase:
        "The Loading State should keep the selected report range visible and explain that generation may take up to twenty seconds.",
      aliases: [
        "loading indicator state",
        "pending state",
        "estado de carregamento",
      ],
      confusion:
        "A Loading State communicates ongoing work; a Skeleton Screen is one visual placeholder technique that may be used within it.",
    }),
    "pt-BR": content({
      definition:
        "Loading State é a condição da interface que comunica operação ou data request em progresso cujo resultado final ainda não está disponível.",
      purpose:
        "Ele reconhece a action, define expectativas, evita inatividade ambígua e preserva contexto enquanto async work termina.",
      when: "Mostre-o quando a espera for perceptível, escolhendo feedback imediato ou delayed, determinate progress, cancellation, skeleton e mensagem conforme duração e consequência.",
      context:
        "Um financial report leva entre dois e vinte segundos e users clicam Generate repetidamente ou saem sem feedback.",
      application:
        "A interface confirma request, bloqueia duplicates, preserva parameters, exibe progress quando mensurável, oferece cancellation e transita a result ou error.",
      phrase:
        "O Loading State deve manter report range visível e explicar que generation pode levar vinte segundos.",
      aliases: [
        "loading indicator state",
        "pending state",
        "estado de carregamento",
      ],
      confusion:
        "Loading State comunica trabalho em andamento; Skeleton Screen é uma técnica visual de placeholder que pode fazer parte dele.",
    }),
  },
  "error-state": {
    en: content({
      definition:
        "An Error State is the interface condition that communicates an operation, input, resource, or system has failed to meet an expected condition and explains how the user can proceed.",
      purpose:
        "It replaces ambiguous failure with understandable status, preserves trust and context, prevents further harm, and supports correction, retry, recovery, or escalation.",
      when: "Design one for validation, permissions, connectivity, server, partial, and unrecoverable failures, matching detail and action to what the user can safely do.",
      context:
        "A tax form submission fails after several pages of input, but a generic banner says only that something went wrong.",
      application:
        "The interface preserves entered data, identifies the failed section without exposing sensitive details, explains whether the submission occurred, offers retry, and provides a reference for support.",
      phrase:
        "The Error State must clarify that no payment was created before inviting the user to retry.",
      aliases: ["failure state", "error message state", "estado de erro"],
      confusion:
        "An Error State represents a failed expectation requiring response; an Empty State represents a valid absence of content and may not be an error.",
    }),
    "pt-BR": content({
      definition:
        "Error State é a condição da interface que comunica que operation, input, resource ou system falhou numa expectativa e explica como prosseguir.",
      purpose:
        "Ele substitui failure ambígua por status compreensível, preserva trust e contexto, evita dano e apoia correction, retry, recovery ou escalation.",
      when: "Projete-o para validation, permissions, connectivity, server, partial e unrecoverable failures, adequando detalhe e action ao que o usuário pode fazer com segurança.",
      context:
        "Um tax form falha após várias pages de input, mas generic banner diz somente que algo deu errado.",
      application:
        "A interface preserva data, identifica a seção sem expor details sensíveis, explica se submission ocorreu, oferece retry e support reference.",
      phrase:
        "O Error State precisa esclarecer que nenhum payment foi criado antes de convidar a retry.",
      aliases: ["failure state", "error message state", "estado de erro"],
      confusion:
        "Error State representa expectativa falha que exige resposta; Empty State representa ausência válida de content e pode não ser error.",
    }),
  },
  "skeleton-screen": {
    en: content({
      definition:
        "A Skeleton Screen is a loading placeholder that approximates the structure and spatial rhythm of content expected to appear, usually with simplified neutral shapes.",
      purpose:
        "It preserves layout and communicates progressive loading in context, often making uncertain waits feel more stable than an isolated spinner.",
      when: "Use one when the final layout is predictable and waiting is noticeable, avoiding misleading detail, excessive motion, inaccessible announcements, or skeletons for nearly instant work.",
      context:
        "A news feed requires profile, text, and image data from several requests and otherwise shifts sharply as each card appears.",
      application:
        "The UI reserves realistic card dimensions with subdued placeholders, respects reduced motion, marks loading semantics appropriately, and replaces complete units as data arrives.",
      phrase:
        "Match the Skeleton Screen to the likely card geometry so loaded content does not cause major layout shifts.",
      aliases: ["skeleton loader", "content placeholder", "tela esqueleto"],
      confusion:
        "A Skeleton Screen represents expected content structure; a spinner signals activity without indicating the shape or location of the result.",
    }),
    "pt-BR": content({
      definition:
        "Skeleton Screen é um loading placeholder que aproxima estrutura e ritmo espacial do content esperado, normalmente com formas neutras simplificadas.",
      purpose:
        "Ela preserva layout e comunica progressive loading em contexto, tornando espera incerta mais estável que spinner isolado.",
      when: "Use-a quando final layout for previsível e a espera perceptível, evitando detalhe enganoso, motion excessivo, announcements inacessíveis ou uso em trabalho instantâneo.",
      context:
        "Um news feed obtém profile, text e images de requests diferentes e muda bruscamente quando cada card aparece.",
      application:
        "A UI reserva card dimensions realistas com placeholders discretos, respeita reduced motion, usa loading semantics e substitui unidades conforme data chega.",
      phrase:
        "Alinhe Skeleton Screen à geometria provável do card para loaded content não causar layout shifts.",
      aliases: ["skeleton loader", "content placeholder", "tela esqueleto"],
      confusion:
        "Skeleton Screen representa estrutura esperada; spinner sinaliza activity sem indicar forma ou local do resultado.",
    }),
  },
  "responsive-breakpoint": {
    en: content({
      definition:
        "A Responsive Breakpoint is a threshold at which an interface changes layout or presentation because available space or another responsive condition no longer supports the current arrangement.",
      purpose:
        "It lets designs adapt at meaningful pressure points while avoiding assumptions tied only to named device models or fixed screen categories.",
      when: "Choose breakpoints where content and interaction visibly need adaptation, testing intermediate widths, zoom, text growth, containers, orientation, and browser behavior.",
      context:
        "A navigation header becomes crowded and wraps awkwardly before reaching a conventional tablet width because translated labels are longer.",
      application:
        "The designer resizes with real localized content, identifies the first broken arrangement, defines a breakpoint, and changes navigation before overlap occurs.",
      phrase:
        "Set the Responsive Breakpoint where the navigation stops working, not at a device width copied from another product.",
      aliases: [
        "breakpoint",
        "responsive threshold",
        "ponto de quebra responsivo",
      ],
      confusion:
        "A Responsive Breakpoint is a condition threshold; a media query is one CSS mechanism for applying rules when such a condition matches.",
    }),
    "pt-BR": content({
      definition:
        "Responsive Breakpoint é o threshold em que interface muda layout ou presentation porque espaço ou outra condição responsiva não sustenta mais a organização atual.",
      purpose:
        "Ele permite adaptação em pressure points significativos sem assumptions ligadas apenas a device models ou screen categories fixas.",
      when: "Escolha breakpoints onde content e interaction precisarem adaptar, testando larguras intermediárias, zoom, text growth, containers, orientation e browser behavior.",
      context:
        "Um navigation header fica apertado e quebra antes de tablet width convencional porque translated labels são maiores.",
      application:
        "A designer redimensiona com localized content real, identifica o primeiro layout quebrado, define breakpoint e muda navigation antes de overlap.",
      phrase:
        "Defina Responsive Breakpoint onde navigation deixa de funcionar, não numa device width copiada de outro product.",
      aliases: [
        "breakpoint",
        "responsive threshold",
        "ponto de quebra responsivo",
      ],
      confusion:
        "Responsive Breakpoint é um threshold de condição; media query é um mecanismo CSS para aplicar rules quando ele corresponde.",
    }),
  },
  "grid-system": {
    en: content({
      definition:
        "A Grid System is a set of alignment structures—such as columns, gutters, margins, rows, and spatial rules—used to organize content consistently across layouts.",
      purpose:
        "It creates rhythm, alignment, proportion, and responsive coherence while giving designers and developers shared constraints for composing varied screens.",
      when: "Use one across interfaces that benefit from consistent spatial organization, allowing content, nested regions, and responsive conditions to adapt rather than forcing every screen into one rigid grid.",
      context:
        "A dashboard contains summary cards, filters, charts, tables, and detail panels designed by different teams with inconsistent edges and spacing.",
      application:
        "The system defines responsive column counts, gutters, margins, max widths, nesting and spanning rules, and examples for dense and reading layouts.",
      phrase:
        "Let the table span the Grid System's content region while its filters align to the same columns as the summary cards.",
      aliases: ["layout grid", "column grid", "sistema de grade"],
      confusion:
        "A Grid System is the design structure and rules; CSS Grid is a web layout technology that can implement those rules.",
    }),
    "pt-BR": content({
      definition:
        "Grid System é um conjunto de estruturas de alignment, como columns, gutters, margins, rows e spatial rules, usado para organizar content consistentemente.",
      purpose:
        "Ele cria rhythm, alignment, proportion e responsive coherence e oferece constraints compartilhadas a designers e developers.",
      when: "Use-o em interfaces que se beneficiem de spatial organization consistente, permitindo adaptação por content, nested regions e responsive conditions sem rigidez.",
      context:
        "Um dashboard possui summary cards, filters, charts, tables e detail panels de times diferentes com edges e spacing inconsistentes.",
      application:
        "O sistema define responsive column counts, gutters, margins, max widths, nesting e spanning rules e exemplos de layouts densos e de leitura.",
      phrase:
        "Deixe table ocupar content region do Grid System enquanto filters alinham às mesmas columns dos summary cards.",
      aliases: ["layout grid", "column grid", "sistema de grade"],
      confusion:
        "Grid System é estrutura e rules de design; CSS Grid é tecnologia web que pode implementá-las.",
    }),
  },
  typography: {
    en: content({
      definition:
        "Typography is the design and arrangement of written language through typeface, size, weight, spacing, line length, hierarchy, and related properties to support meaning and reading.",
      purpose:
        "It makes content legible, scannable, expressive, and hierarchically clear while supporting brand, accessibility, localization, and different devices.",
      when: "Design typography for any text-bearing experience, testing real content, language expansion, zoom, contrast, line length, fallback fonts, loading, and user preferences.",
      context:
        "A long-form help center uses small text, long lines, weak heading contrast, and a custom font that delays content and lacks several language characters.",
      application:
        "The system defines type roles and responsive scales, readable measure and leading, weight and contrast, font fallbacks, loading strategy, and semantic heading use.",
      phrase:
        "Improve Typography by shortening line length and increasing line height before adding decorative font variation.",
      aliases: ["type system", "interface typography", "tipografia"],
      confusion:
        "Typography organizes written language visually; typeface is the designed family of letterforms used as one ingredient within it.",
    }),
    "pt-BR": content({
      definition:
        "Typography é o design e arranjo da linguagem escrita por typeface, size, weight, spacing, line length, hierarchy e propriedades relacionadas para apoiar significado e leitura.",
      purpose:
        "Ela torna content legível, scannable, expressivo e hierarquicamente claro, apoiando brand, accessibility, localization e devices.",
      when: "Projete-a em experiências com texto, testando real content, language expansion, zoom, contrast, line length, fallback fonts, loading e user preferences.",
      context:
        "Um help center usa texto pequeno, linhas longas, heading contrast fraco e custom font lenta que não cobre vários idiomas.",
      application:
        "O sistema define type roles e responsive scales, measure e leading legíveis, weight e contrast, font fallbacks, loading strategy e semantic headings.",
      phrase:
        "Melhore Typography reduzindo line length e aumentando line height antes de adicionar variação decorativa.",
      aliases: ["type system", "interface typography", "tipografia"],
      confusion:
        "Typography organiza linguagem escrita visualmente; typeface é a família de letterforms usada como um ingrediente.",
    }),
  },
  contrast: {
    en: content({
      definition:
        "Contrast is the perceptible difference between visual properties such as luminance, color, size, shape, weight, texture, or motion that distinguishes elements and communicates hierarchy or state.",
      purpose:
        "It supports legibility, discoverability, grouping, emphasis, and accessibility by making relevant boundaries and information distinguishable under varied viewing conditions.",
      when: "Design Contrast for text, controls, focus, icons, charts, and states, testing actual colors and sizes across themes, displays, vision differences, glare, and zoom.",
      context:
        "A disabled-looking gray button is actually the primary action, and its label becomes unreadable in sunlight and low-quality displays.",
      application:
        "The designer measures luminance contrast, strengthens text and boundary cues, avoids color-only meaning, checks themes and forced colors, and tests representative users.",
      phrase:
        "Increase Contrast for the primary action through tone, weight, boundary, and position rather than relying on saturated color alone.",
      aliases: ["visual contrast", "color contrast", "contraste"],
      confusion:
        "Contrast is the difference that makes elements distinguishable; color is only one property through which contrast can be created.",
    }),
    "pt-BR": content({
      definition:
        "Contrast é a diferença perceptível entre propriedades como luminance, color, size, shape, weight, texture ou motion que distingue elements e comunica hierarchy ou state.",
      purpose:
        "Ele apoia legibility, discoverability, grouping, emphasis e accessibility ao tornar boundaries e informações distinguíveis em condições variadas.",
      when: "Projete Contrast para text, controls, focus, icons, charts e states, testando colors e sizes reais entre themes, displays, diferenças visuais, glare e zoom.",
      context:
        "Um gray button parece disabled mas é primary action, e seu label fica ilegível sob sol e displays de baixa qualidade.",
      application:
        "A designer mede luminance contrast, reforça text e boundary cues, evita meaning somente por color, verifica themes e testa users.",
      phrase:
        "Aumente Contrast da primary action por tone, weight, boundary e position, não apenas saturated color.",
      aliases: ["visual contrast", "color contrast", "contraste"],
      confusion:
        "Contrast é a diferença que distingue elements; color é somente uma propriedade capaz de criá-lo.",
    }),
  },
  "color-palette": {
    en: content({
      definition:
        "A Color Palette is an intentional set of colors and tonal ranges selected for a product or communication system, including their roles, combinations, themes, and usage constraints.",
      purpose:
        "It creates visual coherence and supports brand, hierarchy, state, data, and accessibility decisions without forcing each designer to choose colors independently.",
      when: "Define one for products with repeated visual communication, testing perceptual distinction, contrast, color-vision differences, themes, displays, cultural context, and semantic use.",
      context:
        "A dashboard uses dozens of unrelated hex values, and status colors conflict with chart series and become indistinguishable in dark mode.",
      application:
        "The system defines neutral and chromatic scales, semantic roles, theme mappings, allowed pairs, chart sequences, contrast evidence, and tokenized implementation.",
      phrase:
        "The Color Palette provides the raw and semantic choices, but status must still include text or shape instead of color alone.",
      aliases: ["colour palette", "brand palette", "paleta de cores"],
      confusion:
        "A Color Palette is the selected system of colors; a Design Token gives a named, implementation-ready representation to a particular design decision.",
    }),
    "pt-BR": content({
      definition:
        "Color Palette é um conjunto intencional de colors e tonal ranges selecionado para produto ou sistema de comunicação, incluindo roles, combinations, themes e constraints.",
      purpose:
        "Ela cria visual coherence e apoia brand, hierarchy, state, data e accessibility sem cada designer escolher colors independentemente.",
      when: "Defina-a para produtos com comunicação visual repetida, testando distinction, contrast, color vision, themes, displays, contexto cultural e semantic use.",
      context:
        "Um dashboard usa dezenas de hex values e status colors conflitam com chart series e ficam indistinguíveis em dark mode.",
      application:
        "O sistema define neutral e chromatic scales, semantic roles, theme mappings, allowed pairs, chart sequences, contrast evidence e implementation por tokens.",
      phrase:
        "A Color Palette fornece escolhas, mas status ainda precisa de text ou shape em vez de depender somente de color.",
      aliases: ["colour palette", "brand palette", "paleta de cores"],
      confusion:
        "Color Palette é o sistema de colors; Design Token fornece representação nomeada e pronta para implementação de uma decision.",
    }),
  },
  "accessibility-audit": {
    en: content({
      definition:
        "An Accessibility Audit is a systematic evaluation of a product, service, or content against accessibility requirements and real interaction patterns to identify barriers and remediation priorities.",
      purpose:
        "It provides evidence of conformance gaps and user impact through complementary automated checks, expert inspection, assistive-technology testing, and sometimes disabled-user research.",
      when: "Conduct one before consequential releases and periodically on production, defining scope, standards, representative paths, environments, severity, evidence, and retest expectations.",
      context:
        "An insurance portal must assess quotation, document upload, payment, and claims flows before a regulated public launch.",
      application:
        "Auditors sample pages and components, run automated tools, inspect semantics and reflow, test keyboard and screen readers, record reproducible findings, prioritize, and verify fixes.",
      phrase:
        "The Accessibility Audit combines automated findings with manual task testing because a passing scanner cannot verify usable keyboard flow.",
      aliases: [
        "a11y audit",
        "web accessibility audit",
        "auditoria de acessibilidade",
      ],
      confusion:
        "An Accessibility Audit evaluates barriers and conformance comprehensively; an automated accessibility scan is one limited evidence source within it.",
    }),
    "pt-BR": content({
      definition:
        "Accessibility Audit é uma avaliação sistemática de produto, serviço ou content contra accessibility requirements e interaction patterns reais para identificar barriers e remediation priorities.",
      purpose:
        "Ela fornece evidência de conformance gaps e user impact por automated checks, expert inspection, assistive-technology testing e, às vezes, disabled-user research.",
      when: "Realize-a antes de releases relevantes e periodicamente em production, definindo scope, standards, paths, environments, severity, evidence e retest.",
      context:
        "Um insurance portal avalia quotation, document upload, payment e claims antes de regulated public launch.",
      application:
        "Auditors amostram pages e components, executam tools, inspecionam semantics e reflow, testam keyboard e screen readers, registram findings e verificam fixes.",
      phrase:
        "Accessibility Audit combina automated findings e manual task testing porque scanner aprovado não verifica keyboard flow usável.",
      aliases: [
        "a11y audit",
        "web accessibility audit",
        "auditoria de acessibilidade",
      ],
      confusion:
        "Accessibility Audit avalia barriers e conformance amplamente; automated scan é apenas uma evidence source limitada.",
    }),
  },
  "heuristic-evaluation": {
    en: content({
      definition:
        "A Heuristic Evaluation is an expert inspection method in which evaluators examine an interface against recognized usability principles to identify likely interaction problems.",
      purpose:
        "It finds a broad set of issues relatively quickly before or alongside user research, using structured principles to make expert reasoning explicit and comparable.",
      when: "Use it on prototypes or products when expert review can guide improvement, employing multiple evaluators where possible and validating high-impact assumptions with users.",
      context:
        "A new administration console is ready for review but has not yet recruited representative administrators for usability sessions.",
      application:
        "Evaluators independently walk key tasks, record violated heuristics with evidence and severity, consolidate findings, remove duplicates, and recommend testable improvements.",
      phrase:
        "The Heuristic Evaluation flags weak system-status visibility, but user testing will show whether administrators actually misinterpret the delay.",
      aliases: [
        "usability heuristic review",
        "expert usability review",
        "avaliação heurística",
      ],
      confusion:
        "A Heuristic Evaluation relies on expert inspection against principles; a Usability Test observes representative users attempting tasks.",
    }),
    "pt-BR": content({
      definition:
        "Heuristic Evaluation é um método de expert inspection em que avaliadores examinam interface por usability principles reconhecidos para identificar interaction problems prováveis.",
      purpose:
        "Ela encontra issues variados rapidamente antes ou junto de user research, usando principles estruturados para reasoning explícito e comparável.",
      when: "Use-a em prototypes ou products quando expert review puder orientar melhoria, usando múltiplos avaliadores e validando assumptions de alto impact com users.",
      context:
        "Um administration console novo está pronto para review, mas ainda não recrutou admins representativos para usability sessions.",
      application:
        "Evaluators percorrem tasks, registram violated heuristics com evidence e severity, consolidam findings, removem duplicates e recomendam melhorias testáveis.",
      phrase:
        "Heuristic Evaluation aponta system-status visibility fraca, mas user testing mostrará se admins interpretam o delay incorretamente.",
      aliases: [
        "usability heuristic review",
        "expert usability review",
        "avaliação heurística",
      ],
      confusion:
        "Heuristic Evaluation usa expert inspection por principles; Usability Test observa users representativos executando tasks.",
    }),
  },
  "design-handoff": {
    en: content({
      definition:
        "A Design Handoff is the collaborative transition through which design intent, behavior, assets, content, states, rationale, and open questions become actionable for implementation partners.",
      purpose:
        "It builds shared understanding across design and engineering so implementation preserves intended outcomes while resolving technical constraints and missing details early.",
      when: "Use a deliberate Handoff as work becomes implementation-ready, treating it as an ongoing conversation with review rather than a one-time file delivery.",
      context:
        "A complex onboarding design includes responsive variants, validation, permissions, animation, loading, error, analytics, and accessibility behavior beyond static screens.",
      application:
        "Designer and engineers review flows and prototypes, component mappings, tokens, states, content, assets, breakpoints, acceptance examples, constraints, and ownership for open decisions.",
      phrase:
        "The Design Handoff is complete when the team shares behavior and decisions, not when a Figma link is posted.",
      aliases: [
        "design to development handoff",
        "designer developer handoff",
        "transição de design",
      ],
      confusion:
        "A Design Handoff transfers actionable design understanding; a design specification is one artifact that can support that collaborative transition.",
    }),
    "pt-BR": content({
      definition:
        "Design Handoff é a transição colaborativa pela qual design intent, behavior, assets, content, states, rationale e open questions se tornam acionáveis para implementation partners.",
      purpose:
        "Ele cria entendimento entre design e engineering para implementation preservar outcomes e resolver technical constraints e detalhes ausentes cedo.",
      when: "Use-o quando trabalho se tornar implementation-ready, tratando-o como conversa contínua com review, não entrega única de arquivo.",
      context:
        "Um onboarding design inclui responsive variants, validation, permissions, animation, loading, error, analytics e accessibility além de screens estáticas.",
      application:
        "Designer e engineers revisam flows e prototypes, component mappings, tokens, states, content, assets, breakpoints, acceptance examples, constraints e owners.",
      phrase:
        "Design Handoff termina quando o time compartilha behavior e decisions, não quando um Figma link é postado.",
      aliases: [
        "design to development handoff",
        "designer developer handoff",
        "transição de design",
      ],
      confusion:
        "Design Handoff transfere entendimento acionável; design specification é um artifact que pode apoiar essa transição.",
    }),
  },
  figma: {
    en: content({
      definition:
        "Figma is a collaborative interface design platform used to create visual designs, interactive prototypes, reusable component libraries, shared variables, and review artifacts.",
      purpose:
        "It gives designers and product collaborators a shared environment for exploring, maintaining, presenting, commenting on, and handing off interface decisions.",
      when: "Use Figma when collaborative interface and prototype work benefits from shared files and libraries, defining file organization, permissions, branching, component ownership, and archival practices.",
      context:
        "Several product teams need to use the same design components, review responsive flows with engineers, and collect stakeholder feedback without exchanging static files.",
      application:
        "The design organization maintains libraries and variables, composes product flows, prototypes selected interactions, invites contextual review, and links implemented components and decisions.",
      phrase:
        "The Figma component documents the intended variants, but the coded component remains responsible for actual semantics, performance, and browser behavior.",
      aliases: ["figma design", "figma platform", "ferramenta figma"],
      confusion:
        "Figma is a design collaboration tool; a Design System is the governed set of principles, assets, and practices that may be represented within it.",
    }),
    "pt-BR": content({
      definition:
        "Figma é uma plataforma colaborativa de interface design usada para visual designs, interactive prototypes, reusable component libraries, shared variables e review artifacts.",
      purpose:
        "Ele oferece ambiente compartilhado para designers e product collaborators explorarem, manterem, apresentarem, comentarem e entregarem interface decisions.",
      when: "Use Figma quando trabalho colaborativo de interface e prototype se beneficiar de shared files e libraries, definindo organization, permissions, branching, ownership e archive.",
      context:
        "Vários product teams usam design components comuns, revisam responsive flows com engineers e coletam stakeholder feedback sem trocar static files.",
      application:
        "A design organization mantém libraries e variables, compõe product flows, prototipa interactions, convida review contextual e liga components implementados.",
      phrase:
        "O Figma component documenta variants pretendidas, mas coded component responde por semantics, performance e browser behavior reais.",
      aliases: ["figma design", "figma platform", "ferramenta figma"],
      confusion:
        "Figma é design collaboration tool; Design System é o conjunto governado de principles, assets e practices que pode ser representado nele.",
    }),
  },
  "atomic-design": {
    en: content({
      definition:
        "Atomic Design is a methodology for organizing interface systems into nested conceptual levels commonly called atoms, molecules, organisms, templates, and pages.",
      purpose:
        "It helps teams reason about how small reusable elements compose into larger interface patterns and how those patterns behave with real page content.",
      when: "Use it as a shared classification and composition lens when it clarifies a component system, adapting the taxonomy rather than forcing every domain concept into a rigid level.",
      context:
        "A design system needs to relate primitive controls, search fields, navigation headers, page layouts, and representative product screens.",
      application:
        "The team classifies primitives and compositions, documents dependencies and variants, tests organisms inside templates, and validates pages with realistic content.",
      phrase:
        "Atomic Design can explain composition, but a domain-rich component may need a name and boundary based on responsibility rather than visual size.",
      aliases: [
        "atomic design methodology",
        "atomic interface design",
        "design atômico",
      ],
      confusion:
        "Atomic Design is an organizational methodology; a Design System is the maintained, governed collection of actual decisions, components, and practices.",
    }),
    "pt-BR": content({
      definition:
        "Atomic Design é uma metodologia que organiza interface systems em níveis conceituais aninhados normalmente chamados atoms, molecules, organisms, templates e pages.",
      purpose:
        "Ela ajuda times a raciocinar como pequenos reusable elements compõem patterns maiores e como eles se comportam com page content real.",
      when: "Use-a como classification e composition lens quando esclarecer component system, adaptando taxonomy em vez de forçar cada domain concept num nível rígido.",
      context:
        "Um design system relaciona primitive controls, search fields, navigation headers, page layouts e product screens representativas.",
      application:
        "O time classifica primitives e compositions, documenta dependencies e variants, testa organisms em templates e valida pages com realistic content.",
      phrase:
        "Atomic Design explica composition, mas domain-rich component pode precisar de nome e boundary por responsabilidade, não visual size.",
      aliases: [
        "atomic design methodology",
        "atomic interface design",
        "design atômico",
      ],
      confusion:
        "Atomic Design é metodologia organizacional; Design System é a coleção mantida e governada de decisions, components e practices.",
    }),
  },
};
