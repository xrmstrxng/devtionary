import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const gitEditorialOverrides: Record<string, EditorialPair> = {
  git: {
    en: content({
      definition:
        "Git is a distributed version control system that records content snapshots and development history in repositories whose full history can exist on each contributor's machine.",
      purpose:
        "It lets people create independent branches, compare and combine changes, recover earlier states, inspect authorship, and exchange history without requiring one central server for local operations.",
      when: "Use Git to version source code, configuration, documentation, and other text-based project assets whose changes need review, collaboration, traceability, or recovery.",
      context:
        "Several developers modify the same application concurrently and need to review changes and preserve every accepted version.",
      application:
        "Each developer commits locally, shares branches through a remote repository, reviews diffs, and merges accepted history into the main branch.",
      phrase:
        "“Commit the logical change separately so Git history explains why this behavior changed.”",
      aliases: [
        "git version control",
        "distributed version control system",
        "controle de versão distribuído",
      ],
      confusion:
        "Git is the version control software; GitHub, GitLab, and similar products host Git repositories and add collaboration services.",
    }),
    "pt-BR": content({
      definition:
        "Git é um sistema distribuído de controle de versão que registra snapshots e histórico em repositories cuja cópia completa pode existir na máquina de cada participante.",
      purpose:
        "Ele permite criar branches, comparar e combinar mudanças, recuperar estados, investigar autoria e trocar histórico sem servidor central para operações locais.",
      when: "Use Git para versionar código, configuração, documentação e arquivos textuais cujas mudanças precisem de revisão, colaboração, rastreabilidade ou recuperação.",
      context:
        "Várias pessoas alteram a mesma aplicação simultaneamente e precisam revisar mudanças e preservar cada versão aceita.",
      application:
        "Cada pessoa cria commits locais, compartilha branches por remote, revisa diffs e faz merge do histórico aceito na branch principal.",
      phrase:
        "“Faça commit da mudança lógica separadamente para o histórico Git explicar por que o comportamento mudou.”",
      aliases: [
        "git version control",
        "distributed version control system",
        "controle de versão distribuído",
      ],
      confusion:
        "Git é o software de controle de versão; GitHub, GitLab e produtos semelhantes hospedam repositories e adicionam colaboração.",
    }),
  },
  remote: {
    en: content({
      definition:
        "A Git remote is a named local configuration that associates a repository with URLs used to fetch from or push to another repository.",
      purpose:
        "It gives a memorable name to an exchange destination and tracks which remote branches correspond to history observed from that repository.",
      when: "Add a remote when a local repository must synchronize with a hosted project, a personal fork, an upstream source, or another Git repository.",
      context:
        "A contributor clones a fork but also needs to retrieve new commits from the original open-source project.",
      application:
        "The fork remains origin and the contributor adds the original repository as upstream, then fetches and integrates upstream/main.",
      phrase:
        "“Fetch the upstream remote before rebasing so your local view includes its latest commits.”",
      aliases: ["git remote", "remote repository reference", "remoto git"],
      confusion:
        "A remote is the named URL configuration; a remote-tracking branch is the local record of a branch last observed from that remote.",
    }),
    "pt-BR": content({
      definition:
        "Git Remote é uma configuração local nomeada que associa um repository a URLs usadas para buscar ou enviar histórico a outro repository.",
      purpose:
        "Ele dá nome memorável ao destino de troca e acompanha quais remote branches correspondem ao histórico observado nele.",
      when: "Adicione remote quando um repository local precisar sincronizar com projeto hospedado, fork pessoal, upstream ou outro repository Git.",
      context:
        "Uma pessoa clona seu fork, mas também precisa obter novos commits do projeto open source original.",
      application:
        "O fork permanece origin e o projeto original é adicionado como upstream; depois a pessoa faz fetch e integra upstream/main.",
      phrase:
        "“Faça fetch do remote upstream antes do rebase para sua visão local incluir os commits mais recentes.”",
      aliases: ["git remote", "remote repository reference", "remoto git"],
      confusion:
        "Remote é a configuração nomeada de URL; remote-tracking branch é o registro local da branch observada naquele remote.",
    }),
  },
  origin: {
    en: content({
      definition:
        "Origin is the conventional default name Git gives to the remote from which a repository was cloned; it has no special protocol privilege and can be renamed or replaced.",
      purpose:
        "It provides an immediate shorthand for fetching from and pushing to the repository initially used as the local clone's source.",
      when: "Use origin when referring to the configured default remote, but inspect its URLs rather than assuming it is authoritative or points to a particular hosting service.",
      context:
        "A developer clones a personal fork, so origin points to the fork rather than to the original organization's repository.",
      application:
        "The developer pushes feature branches to origin and configures a separate upstream remote for changes from the original project.",
      phrase:
        "“Check git remote -v; in this clone origin is your fork, not the canonical repository.”",
      aliases: ["origin remote", "git origin", "remote origin"],
      confusion:
        "Origin is merely a conventional remote name; upstream may describe either another remote or the tracked branch configured for push and pull.",
    }),
    "pt-BR": content({
      definition:
        "Origin é o nome padrão convencional que o Git atribui ao remote usado no clone; ele não possui privilégio especial e pode ser renomeado ou substituído.",
      purpose:
        "Ele oferece um atalho imediato para fetch e push no repository usado inicialmente como fonte do clone local.",
      when: "Use origin ao mencionar o remote padrão configurado, mas confira suas URLs em vez de presumir autoridade ou serviço de hospedagem.",
      context:
        "Uma pessoa clona seu fork pessoal, portanto origin aponta ao fork e não ao repository da organização original.",
      application:
        "Ela envia feature branches a origin e configura outro remote upstream para receber mudanças do projeto original.",
      phrase:
        "“Confira git remote -v; neste clone origin é seu fork, não o repository canônico.”",
      aliases: ["origin remote", "git origin", "remote origin"],
      confusion:
        "Origin é apenas um nome convencional; upstream pode ser outro remote ou a branch rastreada configurada para push e pull.",
    }),
  },
  branch: {
    en: content({
      definition:
        "A Git branch is a movable named reference to a commit, representing one line of development as new commits advance that reference.",
      purpose:
        "It lets work proceed in isolation from other lines, supports review and experimentation, and gives teams names for releases, fixes, and integration history.",
      when: "Create a branch for work that should evolve independently, choosing a short lifetime and integration policy appropriate to the team's workflow.",
      context:
        "A production bug must be fixed while unrelated features continue moving on the main development line.",
      application:
        "The team branches from the production commit, adds and tests the fix, merges it into the release line, and propagates it to main.",
      phrase:
        "“Create the hotfix branch from the production tag, not from main, which already contains unreleased changes.”",
      aliases: ["git branch", "development branch", "ramificação git"],
      confusion:
        "A branch is a movable reference in one repository; a fork is a separate repository copy with its own branches and permissions.",
    }),
    "pt-BR": content({
      definition:
        "Git Branch é uma referência móvel e nomeada para um commit, representando uma linha de desenvolvimento conforme novos commits avançam essa referência.",
      purpose:
        "Ela permite trabalho isolado de outras linhas, revisão e experimentos e fornece nomes para releases, correções e integração.",
      when: "Crie branch para trabalho que deva evoluir independentemente, com duração e política de integração adequadas ao workflow do time.",
      context:
        "Um bug de produção precisa de correção enquanto features não relacionadas continuam avançando na linha principal.",
      application:
        "O time cria branch no commit de produção, adiciona e testa o fix, faz merge na release e o propaga para main.",
      phrase:
        "“Crie a hotfix branch a partir da tag de produção, não de main, que já contém mudanças não lançadas.”",
      aliases: ["git branch", "development branch", "ramificação git"],
      confusion:
        "Branch é uma referência móvel em um repository; fork é outro repository com branches e permissões próprias.",
    }),
  },
  push: {
    en: content({
      definition:
        "Git push sends local objects and requests updates to references in a remote repository, subject to permissions and non-fast-forward policy.",
      purpose:
        "It publishes local commits and branch or tag positions so collaborators and automation can access the shared history.",
      when: "Push after committing verified local work, confirming the destination remote and branch and avoiding history rewrites on shared references unless coordinated.",
      context:
        "A developer finished a feature branch locally and needs the continuous integration service and reviewers to access it.",
      application:
        "The developer pushes the branch to origin, sets its upstream tracking reference, and CI starts from the published commit.",
      phrase:
        "“Push the feature branch, not directly to main, so the required review and checks can run.”",
      aliases: ["git push", "push commits", "envio git"],
      confusion:
        "Push sends local history to a remote; pull retrieves remote changes and integrates them into the current local branch.",
    }),
    "pt-BR": content({
      definition:
        "Git Push envia objects locais e solicita atualização de referências em um remote repository, sujeito a permissões e política de non-fast-forward.",
      purpose:
        "Ele publica commits e posições de branches ou tags para colaboração e automação acessarem o histórico compartilhado.",
      when: "Faça push após commit e verificação local, confirmando remote e branch e evitando reescrever referências compartilhadas sem coordenação.",
      context:
        "Uma pessoa concluiu a feature branch local e precisa disponibilizá-la ao CI e às pessoas revisoras.",
      application:
        "Ela envia a branch a origin, configura tracking upstream e o CI inicia no commit publicado.",
      phrase:
        "“Faça push da feature branch, não diretamente em main, para executar revisão e checks obrigatórios.”",
      aliases: ["git push", "push commits", "envio git"],
      confusion:
        "Push envia histórico local ao remote; pull obtém mudanças remotas e as integra à branch local atual.",
    }),
  },
  pull: {
    en: content({
      definition:
        "Git pull fetches changes from a configured remote and then integrates the selected remote-tracking branch into the current local branch by merge or rebase.",
      purpose:
        "It combines retrieval and integration into one command so a local branch can incorporate newly published remote history.",
      when: "Pull when you intend to fetch and integrate immediately, configuring the merge, rebase, or fast-forward policy explicitly to avoid surprising history.",
      context:
        "The shared main branch gained commits while a developer's local main remained unchanged.",
      application:
        "A fast-forward-only pull fetches origin and advances local main only if no divergent local commits require reconciliation.",
      phrase:
        "“Use pull --ff-only on main so divergence fails visibly instead of creating an accidental merge commit.”",
      aliases: ["git pull", "pull changes", "atualização git"],
      confusion:
        "Fetch only updates knowledge of remote history; pull fetches and then changes the current branch through integration.",
    }),
    "pt-BR": content({
      definition:
        "Git Pull busca mudanças de um remote configurado e integra a remote-tracking branch escolhida à branch local atual por merge ou rebase.",
      purpose:
        "Ele combina obtenção e integração em um comando para a branch local incorporar histórico publicado remotamente.",
      when: "Use pull quando quiser buscar e integrar imediatamente, configurando política de merge, rebase ou fast-forward para evitar histórico inesperado.",
      context:
        "A branch main compartilhada recebeu commits enquanto a main local de uma pessoa permaneceu sem mudanças.",
      application:
        "Um pull fast-forward-only busca origin e avança main apenas se não houver commits locais divergentes.",
      phrase:
        "“Use pull --ff-only em main para divergência falhar visivelmente em vez de criar merge commit acidental.”",
      aliases: ["git pull", "pull changes", "atualização git"],
      confusion:
        "Fetch apenas atualiza a visão do histórico remoto; pull faz fetch e altera a branch atual pela integração.",
    }),
  },
  fetch: {
    en: content({
      definition:
        "Git fetch downloads objects and updates remote-tracking references from another repository without integrating them into the current local branch.",
      purpose:
        "It refreshes the local view of remote history safely so changes can be inspected, compared, tested, or integrated later.",
      when: "Fetch before reviewing remote progress, rebasing, merging, pruning removed branches, or diagnosing divergence when you do not want the current branch changed automatically.",
      context:
        "A developer wants to inspect new upstream commits before deciding how to combine them with unfinished local work.",
      application:
        "The developer fetches upstream, compares the local branch with upstream/main, reads the commits, and then chooses a rebase.",
      phrase:
        "“Fetch first; then review the remote-tracking branch before integrating anything into your work.”",
      aliases: ["git fetch", "fetch remote", "busca git"],
      confusion:
        "Fetch updates remote-tracking references without changing the current branch; pull adds an immediate merge or rebase step.",
    }),
    "pt-BR": content({
      definition:
        "Git Fetch baixa objects e atualiza remote-tracking references de outro repository sem integrá-las à branch local atual.",
      purpose:
        "Ele atualiza com segurança a visão local do histórico remoto para depois inspecionar, comparar, testar ou integrar.",
      when: "Faça fetch antes de revisar progresso remoto, rebase, merge, prune ou diagnóstico de divergência quando não quiser alterar automaticamente a branch atual.",
      context:
        "Uma pessoa quer examinar novos commits upstream antes de combiná-los com trabalho local incompleto.",
      application:
        "Ela faz fetch de upstream, compara sua branch com upstream/main, lê os commits e então escolhe rebase.",
      phrase:
        "“Faça fetch primeiro e revise a remote-tracking branch antes de integrar algo ao seu trabalho.”",
      aliases: ["git fetch", "fetch remote", "busca git"],
      confusion:
        "Fetch atualiza referências sem mudar a branch atual; pull acrescenta merge ou rebase imediato.",
    }),
  },
  clone: {
    en: content({
      definition:
        "Git clone creates a new local repository from another repository by copying its reachable history, checking out an initial branch, and configuring a remote.",
      purpose:
        "It bootstraps a working repository with objects, references, configuration, and a worktree suitable for independent local version-control operations.",
      when: "Clone when starting local work from an existing repository, selecting depth, branch, submodule, authentication, and partial-clone options according to the need.",
      context:
        "A new contributor needs the application source and history plus a connection back to the hosted repository.",
      application:
        "The clone downloads the repository, checks out its default branch, and creates origin pointing to the source URL.",
      phrase:
        "“Use a full clone for release archaeology; the shallow CI clone does not contain the older history we need.”",
      aliases: ["git clone", "clone repository", "clonar repositório"],
      confusion:
        "Clone creates a new repository copy; pull updates and integrates changes into an already existing clone.",
    }),
    "pt-BR": content({
      definition:
        "Git Clone cria um repository local a partir de outro ao copiar histórico alcançável, fazer checkout de uma branch inicial e configurar um remote.",
      purpose:
        "Ele inicia um repository de trabalho com objects, referências, configuração e worktree para operações locais independentes.",
      when: "Faça clone ao iniciar trabalho local de um repository existente, escolhendo depth, branch, submodules, autenticação e partial clone conforme necessário.",
      context:
        "Uma pessoa nova precisa do código e histórico e de uma conexão ao repository hospedado.",
      application:
        "O clone baixa o repository, faz checkout da branch padrão e cria origin apontando para a URL de origem.",
      phrase:
        "“Use clone completo para investigar releases; o shallow clone do CI não contém o histórico antigo necessário.”",
      aliases: ["git clone", "clone repository", "clonar repositório"],
      confusion:
        "Clone cria uma nova cópia do repository; pull atualiza e integra mudanças em um clone já existente.",
    }),
  },
  merge: {
    en: content({
      definition:
        "Git merge integrates the histories of two or more development lines and creates a result reachable from their previous tips, sometimes as a dedicated merge commit.",
      purpose:
        "It combines independently developed changes while preserving the existing commit identities and the fact that the histories converged.",
      when: "Merge when a branch's work is ready to join another line and preserving branch topology is acceptable or desirable, resolving conflicts against the intended combined behavior.",
      context:
        "A reviewed feature branch and main both contain new commits that modify nearby application code.",
      application:
        "Git performs a three-way merge; the developer resolves conflicts, runs tests, and records a merge commit with both parent histories.",
      phrase:
        "“Resolve the merge conflict from the desired behavior, not by choosing one entire side blindly.”",
      aliases: ["git merge", "merge commit", "mesclagem git"],
      confusion:
        "Merge combines existing histories without rewriting their commits; rebase copies commits onto a new base and gives the copies new identities.",
    }),
    "pt-BR": content({
      definition:
        "Git Merge integra históricos de duas ou mais linhas e cria um resultado alcançável a partir de suas pontas anteriores, às vezes por um merge commit.",
      purpose:
        "Ele combina mudanças desenvolvidas independentemente preservando as identidades dos commits e o registro de convergência das branches.",
      when: "Faça merge quando o trabalho estiver pronto para entrar em outra linha e preservar a topologia for aceitável, resolvendo conflitos pelo comportamento desejado.",
      context:
        "Uma feature branch revisada e main possuem commits novos que alteram partes próximas do código.",
      application:
        "Git realiza merge de três vias; a pessoa resolve conflitos, executa testes e registra merge commit com os dois históricos pais.",
      phrase:
        "“Resolva o conflito de merge pelo comportamento desejado, não escolhendo cegamente um lado inteiro.”",
      aliases: ["git merge", "merge commit", "mesclagem git"],
      confusion:
        "Merge combina históricos sem reescrever commits; rebase copia commits sobre nova base e cria novas identidades.",
    }),
  },
  rebase: {
    en: content({
      definition:
        "Git rebase reapplies a sequence of commits onto a different base, creating new commits with equivalent patches and new identities.",
      purpose:
        "It updates a development line to start from newer history or edits local commit order and content, often producing a linear integration path.",
      when: "Rebase local or explicitly coordinated history before integration, and avoid rebasing shared commits when collaborators depend on their existing identities.",
      context:
        "A private feature branch started from an older main and should incorporate current main before review without adding a merge commit.",
      application:
        "The developer fetches, rebases the feature commits onto origin/main, resolves each conflict, tests the result, and updates the private remote branch safely.",
      phrase:
        "“Rebase your private branch onto current main, but do not rewrite the shared release branch.”",
      aliases: ["git rebase", "interactive rebase", "reaplicação de commits"],
      confusion:
        "Rebase rewrites commits onto another base; merge preserves existing identities and joins their histories.",
    }),
    "pt-BR": content({
      definition:
        "Git Rebase reaplica uma sequência de commits sobre uma base diferente, criando commits novos com patches equivalentes e novas identidades.",
      purpose:
        "Ele atualiza a linha para iniciar em histórico mais recente ou edita ordem e conteúdo de commits locais, frequentemente produzindo integração linear.",
      when: "Faça rebase de histórico local ou coordenado antes da integração e evite reescrever commits compartilhados dos quais outras pessoas dependem.",
      context:
        "Uma feature branch privada começou em main antiga e deve incorporar a main atual sem adicionar merge commit.",
      application:
        "A pessoa faz fetch, rebase sobre origin/main, resolve cada conflito, testa e atualiza com segurança sua branch remota privada.",
      phrase:
        "“Faça rebase da branch privada sobre main atual, mas não reescreva a release branch compartilhada.”",
      aliases: ["git rebase", "interactive rebase", "reaplicação de commits"],
      confusion:
        "Rebase reescreve commits em outra base; merge preserva identidades e une históricos.",
    }),
  },
  "cherry-pick": {
    en: content({
      definition:
        "Git cherry-pick applies the change introduced by a selected existing commit onto the current branch, creating a new commit with a new identity.",
      purpose:
        "It transfers a specific fix or change between development lines without integrating the selected commit's entire source branch history.",
      when: "Use cherry-pick for a deliberately selected independent commit, such as propagating a production fix, and verify dependencies that may exist in surrounding commits.",
      context:
        "A critical fix merged into main must also be applied to an older supported release branch without bringing unrelated features.",
      application:
        "The maintainer checks out the release branch, cherry-picks the fix commit, resolves version-specific conflicts, tests, and publishes the new commit.",
      phrase:
        "“Cherry-pick only the isolated fix; its preceding refactor is not compatible with this release branch.”",
      aliases: ["git cherry-pick", "pick commit", "aplicar commit específico"],
      confusion:
        "Cherry-pick copies selected changes as a new commit; merge integrates the relationship and combined history of development lines.",
    }),
    "pt-BR": content({
      definition:
        "Git Cherry-pick aplica na branch atual a mudança introduzida por um commit existente, criando outro commit com nova identidade.",
      purpose:
        "Ele transfere uma correção ou mudança específica entre linhas sem integrar todo o histórico da branch de origem.",
      when: "Use cherry-pick para um commit independente escolhido deliberadamente, como propagar hotfix, verificando dependências em commits vizinhos.",
      context:
        "Um fix crítico em main também precisa entrar em uma release branch antiga sem levar features não relacionadas.",
      application:
        "A pessoa muda para a release branch, faz cherry-pick do fix, resolve conflitos específicos, testa e publica o novo commit.",
      phrase:
        "“Faça cherry-pick apenas do fix isolado; o refactor anterior não é compatível com esta release branch.”",
      aliases: ["git cherry-pick", "pick commit", "aplicar commit específico"],
      confusion:
        "Cherry-pick copia mudanças escolhidas como novo commit; merge integra a relação e o histórico combinado das linhas.",
    }),
  },
  "pull-request": {
    en: content({
      definition:
        "A Pull Request is a collaboration proposal on a repository hosting platform to review and integrate changes from one branch or fork into another target branch.",
      purpose:
        "It creates a shared place for diffs, discussion, automated checks, approvals, ownership rules, and the recorded decision to merge or reject a change.",
      when: "Open a pull request when a coherent change is ready for feedback or integration, keeping its scope reviewable and documenting intent, evidence, risk, and rollout needs.",
      context:
        "A feature branch changes checkout validation and requires code-owner approval plus passing security and integration tests.",
      application:
        "The author opens a pull request, explains behavior and test evidence, responds to comments, updates commits, and merges after required checks pass.",
      phrase:
        "“Split the database cleanup from this pull request so reviewers can evaluate the checkout behavior independently.”",
      aliases: ["pr", "pull request review", "solicitação de pull"],
      confusion:
        "A pull request is a hosting-platform review workflow; git pull is a local command that fetches and integrates remote history.",
    }),
    "pt-BR": content({
      definition:
        "Pull Request é uma proposta em uma plataforma de hospedagem para revisar e integrar mudanças de uma branch ou fork em outra branch alvo.",
      purpose:
        "Ela reúne diff, discussão, checks, aprovações, regras de ownership e a decisão registrada de fazer merge ou rejeitar.",
      when: "Abra pull request quando uma mudança coerente estiver pronta para feedback ou integração, documentando intenção, evidências, risco e rollout.",
      context:
        "Uma feature branch altera validação do checkout e exige aprovação do code owner e testes de segurança e integração.",
      application:
        "A pessoa abre a PR, explica comportamento e testes, responde comentários, atualiza commits e faz merge após os checks.",
      phrase:
        "“Separe a limpeza do banco desta pull request para revisarmos o checkout independentemente.”",
      aliases: ["pr", "pull request review", "solicitação de pull"],
      confusion:
        "Pull request é workflow de revisão da plataforma; git pull é comando local que busca e integra histórico remoto.",
    }),
  },
  "merge-request": {
    en: content({
      definition:
        "A Merge Request is GitLab's collaboration proposal for reviewing, validating, and merging a source branch into a target branch.",
      purpose:
        "It coordinates discussion, code review, pipeline results, approvals, security findings, and merge policy around one proposed change.",
      when: "Open a merge request when branch work should enter a protected target under the GitLab workflow, providing enough context and evidence for reviewers and operators.",
      context:
        "A team using GitLab requires two approvals and a successful deployment preview before code can enter main.",
      application:
        "The author creates the merge request, assigns reviewers, lets pipelines and preview environments run, resolves feedback, and merges after policy passes.",
      phrase:
        "“Mark the merge request as draft until the migration plan and rollback evidence are ready.”",
      aliases: ["mr", "gitlab merge request", "solicitação de merge"],
      confusion:
        "Merge Request and Pull Request name equivalent platform workflows in different products; a Git merge is the version-control operation used to combine histories.",
    }),
    "pt-BR": content({
      definition:
        "Merge Request é a proposta do GitLab para revisar, validar e integrar uma source branch em uma target branch.",
      purpose:
        "Ela coordena discussão, code review, pipelines, aprovações, achados de segurança e política de merge em torno de uma mudança.",
      when: "Abra merge request quando o trabalho precisar entrar em target protegida pelo workflow GitLab, fornecendo contexto e evidências.",
      context:
        "Um time exige duas aprovações e ambiente de preview bem-sucedido antes de código entrar em main.",
      application:
        "A pessoa cria a MR, atribui revisores, executa pipelines e preview, resolve feedback e faz merge após a política passar.",
      phrase:
        "“Marque a merge request como draft até o plano de migration e as evidências de rollback estarem prontos.”",
      aliases: ["mr", "gitlab merge request", "solicitação de merge"],
      confusion:
        "Merge Request e Pull Request nomeiam workflows equivalentes em produtos diferentes; Git merge é a operação que combina históricos.",
    }),
  },
  conflict: {
    en: content({
      definition:
        "A Git conflict occurs when Git cannot automatically reconcile changes during merge, rebase, cherry-pick, revert, or similar history integration.",
      purpose:
        "It stops automatic integration so a person can decide the intended combined content or history instead of silently choosing an unsafe result.",
      when: "Resolve a conflict by understanding both changes and the desired behavior, editing the result, marking it resolved, and running relevant tests before continuing.",
      context:
        "Two branches changed the same validation block differently: one adds a business rule and the other reorganizes the surrounding code.",
      application:
        "The developer reads both commits, reconstructs the rule inside the new structure, removes conflict markers, tests it, and continues the merge.",
      phrase:
        "“Do not accept ours blindly; preserve the rule from one side inside the refactor from the other.”",
      aliases: ["merge conflict", "git conflict", "conflito de merge"],
      confusion:
        "A textual conflict means Git lacks a safe automatic result; a semantic conflict can still exist even when Git merges the text cleanly.",
    }),
    "pt-BR": content({
      definition:
        "Git Conflict ocorre quando o Git não consegue reconciliar automaticamente mudanças durante merge, rebase, cherry-pick, revert ou integração semelhante.",
      purpose:
        "Ele interrompe a automação para uma pessoa decidir o conteúdo ou histórico correto, sem escolher silenciosamente resultado inseguro.",
      when: "Resolva conflito entendendo as duas mudanças e o comportamento desejado, editando, marcando como resolvido e testando antes de continuar.",
      context:
        "Duas branches alteraram o mesmo bloco: uma adicionou regra de negócio e outra reorganizou o código ao redor.",
      application:
        "A pessoa lê os commits, reconstrói a regra na nova estrutura, remove marcadores, testa e continua o merge.",
      phrase:
        "“Não aceite ours cegamente; preserve a regra de um lado dentro do refactor do outro.”",
      aliases: ["merge conflict", "git conflict", "conflito de merge"],
      confusion:
        "Conflito textual indica falta de resultado automático seguro; conflito semântico pode existir mesmo quando o Git combina o texto.",
    }),
  },
  tag: {
    en: content({
      definition:
        "A Git tag is a named reference intended to mark a specific object, usually a commit, with a stable human-readable label such as a release version.",
      purpose:
        "It gives an important historical point a durable name for releases, deployments, comparisons, signatures, and later recovery.",
      when: "Create an annotated and optionally signed tag for a verified release or milestone, treating published version tags as immutable.",
      context:
        "A tested commit is approved as version 2.4.0 and must be identifiable independently of branches that continue moving.",
      application:
        "The release pipeline creates an annotated v2.4.0 tag on the approved commit, signs it, and publishes matching artifacts.",
      phrase:
        "“Tag the exact commit used to build the artifact, and never move that released tag afterward.”",
      aliases: ["git tag", "release tag", "etiqueta git"],
      confusion:
        "A tag normally remains fixed on one historical object; a branch moves forward as new commits are added.",
    }),
    "pt-BR": content({
      definition:
        "Git Tag é uma referência nomeada destinada a marcar um object específico, normalmente um commit, com rótulo estável como uma versão.",
      purpose:
        "Ela oferece a um ponto histórico um nome durável para releases, deployments, comparações, assinaturas e recuperação.",
      when: "Crie tag anotada e opcionalmente assinada para release ou marco verificado, tratando tags publicadas como imutáveis.",
      context:
        "Um commit testado foi aprovado como versão 2.4.0 e precisa ser identificado enquanto as branches continuam avançando.",
      application:
        "A pipeline cria tag anotada v2.4.0 no commit aprovado, assina e publica os artefatos correspondentes.",
      phrase:
        "“Marque com tag o commit exato usado no build e nunca mova essa tag de release depois.”",
      aliases: ["git tag", "release tag", "etiqueta git"],
      confusion:
        "Tag normalmente permanece fixa em um object histórico; branch avança conforme novos commits são adicionados.",
    }),
  },
  stash: {
    en: content({
      definition:
        "Git stash records selected uncommitted work in internal commits and restores the worktree and index to a cleaner state for temporary context switching.",
      purpose:
        "It sets unfinished changes aside without publishing a normal branch commit, allowing another branch or urgent task to be handled briefly.",
      when: "Use stash for short-lived local work that is not ready to commit, naming the entry and preferring a branch or checkpoint commit for valuable long-term work.",
      context:
        "A developer has partial local edits when an urgent production fix requires switching to a clean release branch.",
      application:
        "The developer stashes tracked and required untracked changes with a message, completes the fix, returns, and applies the stash while resolving any conflicts.",
      phrase:
        "“Name the stash and include the new file, or this worktree will not actually be clean.”",
      aliases: [
        "git stash",
        "stash changes",
        "guardar alterações temporariamente",
      ],
      confusion:
        "A stash is temporary local storage and is easy to forget; a commit on a branch is visible history that can be shared and reviewed.",
    }),
    "pt-BR": content({
      definition:
        "Git Stash registra trabalho não commitado em commits internos e restaura worktree e index para um estado mais limpo durante uma troca temporária.",
      purpose:
        "Ele guarda mudanças incompletas sem publicar commit normal, permitindo atender brevemente outra branch ou tarefa urgente.",
      when: "Use stash para trabalho local de curta duração ainda impróprio para commit, nomeando a entrada e preferindo branch para trabalho valioso e prolongado.",
      context:
        "Uma pessoa possui edições parciais quando um fix urgente exige mudar para uma release branch limpa.",
      application:
        "Ela guarda mudanças rastreadas e novos arquivos com mensagem, conclui o fix, retorna e aplica o stash resolvendo conflitos.",
      phrase:
        "“Nomeie o stash e inclua o arquivo novo, ou o worktree não ficará realmente limpo.”",
      aliases: [
        "git stash",
        "stash changes",
        "guardar alterações temporariamente",
      ],
      confusion:
        "Stash é armazenamento local temporário e pode ser esquecido; commit em branch é histórico compartilhável e revisável.",
    }),
  },
  checkout: {
    en: content({
      definition:
        "Git checkout updates the worktree and index to match a branch, commit, or selected paths, and can move HEAD to another branch or into detached state.",
      purpose:
        "It changes which version is present for inspection or development and can restore path content, though newer switch and restore commands separate those responsibilities.",
      when: "Use checkout when working with established workflows or examining historical states, confirming whether the command targets a branch or paths before discarding local content.",
      context:
        "A developer needs to reproduce a bug in the exact source version marked by an old release tag without changing a current branch.",
      application:
        "Checkout places HEAD in detached state at the tag; the developer runs the reproduction and creates a branch first if a lasting fix is needed.",
      phrase:
        "“Create a branch before committing from detached HEAD, or the new commit may become difficult to find.”",
      aliases: ["git checkout", "checkout branch", "alternar versão git"],
      confusion:
        "Checkout has several overloaded behaviors; git switch focuses on branches and git restore focuses on file content.",
    }),
    "pt-BR": content({
      definition:
        "Git Checkout atualiza worktree e index para corresponder a branch, commit ou paths e pode mover HEAD para outra branch ou detached state.",
      purpose:
        "Ele altera a versão disponível para inspeção ou trabalho e pode restaurar paths, embora switch e restore separem essas responsabilidades.",
      when: "Use checkout em workflows existentes ou ao examinar histórico, confirmando se o alvo é branch ou paths antes de descartar conteúdo local.",
      context:
        "Uma pessoa precisa reproduzir bug na versão exata de uma tag antiga sem alterar uma branch atual.",
      application:
        "Checkout deixa HEAD detached na tag; a pessoa reproduz e cria branch antes de fazer commit se precisar preservar o fix.",
      phrase:
        "“Crie uma branch antes de commitar em detached HEAD, ou o novo commit poderá ficar difícil de localizar.”",
      aliases: ["git checkout", "checkout branch", "alternar versão git"],
      confusion:
        "Checkout possui vários comportamentos; git switch foca branches e git restore foca conteúdo de arquivos.",
    }),
  },
  fork: {
    en: content({
      definition:
        "A repository fork is an independently owned copy of another hosted repository that preserves a relationship for proposing or synchronizing changes.",
      purpose:
        "It gives a contributor separate permissions, branches, automation, and experimentation space without write access to or direct modification of the source repository.",
      when: "Create a fork for external contribution, organizational isolation, or independent evolution when a branch inside the original repository is unavailable or inappropriate.",
      context:
        "An external contributor wants to change an open-source project but has no permission to publish branches in the organization's repository.",
      application:
        "The contributor forks the project, pushes a branch to the fork, opens a pull request upstream, and later synchronizes new upstream commits.",
      phrase:
        "“Push the branch to your fork and open the pull request against the upstream project's main branch.”",
      aliases: ["repository fork", "git fork", "bifurcação de repositório"],
      confusion:
        "A fork is a separate hosted repository; a clone is a local repository copy, and a branch is a reference within one repository.",
    }),
    "pt-BR": content({
      definition:
        "Repository Fork é uma cópia hospedada e administrada independentemente de outro repository, mantendo relação para propor ou sincronizar mudanças.",
      purpose:
        "Ele oferece permissões, branches, automação e experimentação separadas sem acesso de escrita nem alteração direta do repository original.",
      when: "Crie fork para contribuição externa, isolamento organizacional ou evolução independente quando uma branch no repository original não estiver disponível ou adequada.",
      context:
        "Uma pessoa externa quer alterar projeto open source, mas não pode publicar branches no repository da organização.",
      application:
        "Ela cria fork, envia branch à cópia, abre pull request para upstream e depois sincroniza novos commits do projeto original.",
      phrase:
        "“Envie a branch ao seu fork e abra a pull request contra main do projeto upstream.”",
      aliases: ["repository fork", "git fork", "bifurcação de repositório"],
      confusion:
        "Fork é outro repository hospedado; clone é cópia local e branch é referência dentro de um repository.",
    }),
  },
  head: {
    en: content({
      definition:
        "HEAD is Git's symbolic reference to the currently checked-out branch, or directly to a commit when the repository is in detached HEAD state.",
      purpose:
        "It identifies the current history position used as the parent of new commits and as the default reference for many comparisons and operations.",
      when: "Inspect HEAD when reasoning about the current branch, relative references, detached state, resets, rebases, or where a new commit will be attached.",
      context:
        "A developer checks out a release tag and commits a fix, but no branch name moves to retain that new commit.",
      application:
        "Git reports detached HEAD; the developer creates a named branch at HEAD before switching away so the fix stays reachable.",
      phrase:
        "“HEAD points directly to the tagged commit, so create a branch before adding history.”",
      aliases: ["git head", "current commit reference", "referência atual git"],
      confusion:
        "HEAD names the current checkout position; a branch is a movable named reference that HEAD usually points to.",
    }),
    "pt-BR": content({
      definition:
        "HEAD é a referência simbólica do Git para a branch atualmente em checkout ou diretamente para um commit quando está em detached HEAD.",
      purpose:
        "Ele identifica a posição atual usada como pai de novos commits e como referência padrão de comparações e operações.",
      when: "Inspecione HEAD ao analisar branch atual, referências relativas, detached state, reset, rebase ou onde um commit novo será ligado.",
      context:
        "Uma pessoa faz checkout de uma tag e commita um fix, mas nenhuma branch se move para reter o novo commit.",
      application:
        "Git informa detached HEAD; a pessoa cria branch nomeada em HEAD antes de mudar para preservar o fix.",
      phrase:
        "“HEAD aponta diretamente ao commit da tag; crie uma branch antes de adicionar histórico.”",
      aliases: ["git head", "current commit reference", "referência atual git"],
      confusion:
        "HEAD indica a posição atual; branch é uma referência móvel e nomeada para a qual HEAD normalmente aponta.",
    }),
  },
  diff: {
    en: content({
      definition:
        "A diff is a representation of line- or content-level differences between two states, such as files, commits, branches, the index, or the worktree.",
      purpose:
        "It makes additions, removals, and modifications inspectable for review, debugging, patch creation, and verification before commit or integration.",
      when: "Read a diff before committing, reviewing, merging, or deploying a change, selecting comparison endpoints that match the decision being made.",
      context:
        "A pull request claims to change one validation rule but may also include generated files and unrelated formatting.",
      application:
        "The reviewer examines the branch diff against its merge base, separates functional changes from noise, and requests removal of unrelated output.",
      phrase:
        "“Review the staged diff as well; the worktree diff does not show what the next commit will actually contain.”",
      aliases: ["git diff", "code difference", "diferença de código"],
      confusion:
        "A diff shows content changes between states; a commit records a snapshot plus parent and metadata, not merely a patch.",
    }),
    "pt-BR": content({
      definition:
        "Diff é uma representação das diferenças de linhas ou conteúdo entre estados como arquivos, commits, branches, index ou worktree.",
      purpose:
        "Ele torna adições, remoções e modificações inspecionáveis para revisão, debug, patches e verificação antes de commit ou integração.",
      when: "Leia o diff antes de commitar, revisar, fazer merge ou deploy, escolhendo endpoints de comparação coerentes com a decisão.",
      context:
        "Uma pull request afirma mudar uma regra, mas pode conter arquivos gerados e formatação não relacionada.",
      application:
        "A revisão examina o diff contra merge base, separa mudanças funcionais de ruído e pede remoção do conteúdo alheio.",
      phrase:
        "“Revise também o staged diff; o worktree diff não mostra o que o próximo commit realmente conterá.”",
      aliases: ["git diff", "code difference", "diferença de código"],
      confusion:
        "Diff mostra mudanças de conteúdo; commit registra snapshot, pai e metadados, não apenas um patch.",
    }),
  },
  "git-flow": {
    en: content({
      definition:
        "Git Flow is a branching model that assigns long-lived main and develop branches plus temporary feature, release, and hotfix branches with prescribed integration paths.",
      purpose:
        "It coordinates parallel development and scheduled releases by giving stabilization and emergency fixes explicit branch roles.",
      when: "Use Git Flow when a product has distinct release trains, supports multiple versions, and benefits enough from formal branches to justify their integration overhead.",
      context:
        "A packaged enterprise product develops the next version while stabilizing a scheduled release and supporting the current production version.",
      application:
        "Features enter develop, a release branch receives stabilization fixes, main records the shipped version, and urgent hotfixes branch from production history.",
      phrase:
        "“This correction belongs on the release branch and must be merged back so develop does not lose it.”",
      aliases: ["gitflow", "git flow branching model", "fluxo git"],
      confusion:
        "Git Flow is one opinionated branching model; trunk-based development keeps branches shorter and integrates into one main line frequently.",
    }),
    "pt-BR": content({
      definition:
        "Git Flow é um modelo de branches com main e develop duradouras e branches temporárias de feature, release e hotfix com caminhos prescritos.",
      purpose:
        "Ele coordena desenvolvimento paralelo e releases programadas dando papéis explícitos à estabilização e às correções urgentes.",
      when: "Use Git Flow quando houver ciclos distintos, suporte a várias versões e benefício suficiente para justificar o overhead de integração.",
      context:
        "Um produto empacotado desenvolve a próxima versão enquanto estabiliza uma release e mantém a versão atual.",
      application:
        "Features entram em develop, release branch recebe estabilização, main registra a versão e hotfixes partem do histórico de produção.",
      phrase:
        "“Esta correção pertence à release branch e deve voltar por merge para develop não perdê-la.”",
      aliases: ["gitflow", "git flow branching model", "fluxo git"],
      confusion:
        "Git Flow é um modelo opinativo; trunk-based development usa branches curtas e integração frequente em uma linha principal.",
    }),
  },
  "conventional-commits": {
    en: content({
      definition:
        "Conventional Commits is a specification for structured commit messages using a type, optional scope, description, and markers for breaking changes.",
      purpose:
        "It makes commit intent machine-readable for changelog generation, release automation, semantic version decisions, and consistent human scanning.",
      when: "Use Conventional Commits when teams and tooling benefit from a shared message contract, enforcing the convention without replacing thoughtful descriptions or review.",
      context:
        "A release pipeline must determine which changes are fixes, features, or breaking changes and generate useful notes automatically.",
      application:
        "Contributors write messages such as feat(search): add alias matching, and a breaking footer explains incompatible contract changes.",
      phrase:
        "“Mark the API removal with a BREAKING CHANGE footer so release automation produces the correct major version.”",
      aliases: [
        "conventional commit",
        "structured commit messages",
        "commits convencionais",
      ],
      confusion:
        "Conventional Commits structures messages; Semantic Versioning defines how public version numbers communicate compatibility.",
    }),
    "pt-BR": content({
      definition:
        "Conventional Commits é uma especificação de mensagens estruturadas com type, scope opcional, descrição e marcadores de breaking changes.",
      purpose:
        "Ela torna a intenção legível por ferramentas para changelog, automação de release, decisão semântica de versão e leitura consistente.",
      when: "Use Conventional Commits quando time e ferramentas se beneficiarem de contrato comum de mensagens, sem substituir descrições cuidadosas e revisão.",
      context:
        "Uma pipeline precisa distinguir fixes, features e breaking changes e gerar release notes automaticamente.",
      application:
        "Contribuições usam mensagens como feat(search): add alias matching e um footer explica mudanças incompatíveis.",
      phrase:
        "“Marque a remoção da API com footer BREAKING CHANGE para a automação gerar a major correta.”",
      aliases: [
        "conventional commit",
        "structured commit messages",
        "commits convencionais",
      ],
      confusion:
        "Conventional Commits estrutura mensagens; Semantic Versioning define como números de versão comunicam compatibilidade.",
    }),
  },
  "semantic-versioning": {
    en: content({
      definition:
        "Semantic Versioning is a version-numbering specification using MAJOR.MINOR.PATCH to communicate incompatible changes, backward-compatible features, and backward-compatible fixes.",
      purpose:
        "It gives consumers a predictable compatibility signal and lets dependency tooling express acceptable upgrade ranges against a declared public API.",
      when: "Use Semantic Versioning after defining the public API and increment major for breaking changes, minor for compatible functionality, and patch for compatible fixes.",
      context:
        "A library fixes parsing, later adds an optional method, and eventually removes a method used by existing consumers.",
      application:
        "The releases move from 2.3.0 to 2.3.1 for the fix, 2.4.0 for the feature, and 3.0.0 for the incompatible removal.",
      phrase:
        "“This required parameter breaks the public contract, so it cannot ship as a minor version.”",
      aliases: [
        "semver",
        "semantic versioning specification",
        "versionamento semântico",
      ],
      confusion:
        "Semantic Versioning classifies compatibility in version numbers; a release cadence determines when versions are delivered, not their meaning.",
    }),
    "pt-BR": content({
      definition:
        "Semantic Versioning é uma especificação MAJOR.MINOR.PATCH que comunica mudanças incompatíveis, funcionalidades compatíveis e correções compatíveis.",
      purpose:
        "Ele oferece sinal previsível de compatibilidade e permite a ferramentas expressar faixas de upgrade contra uma API pública declarada.",
      when: "Use Semantic Versioning após definir a API pública: major para breaking change, minor para funcionalidade compatível e patch para fix compatível.",
      context:
        "Uma biblioteca corrige parsing, depois adiciona método opcional e por fim remove método usado por consumidores.",
      application:
        "As versões passam de 2.3.0 para 2.3.1 no fix, 2.4.0 na feature e 3.0.0 na remoção incompatível.",
      phrase:
        "“Este parâmetro obrigatório quebra o contrato público e não pode sair como versão minor.”",
      aliases: [
        "semver",
        "semantic versioning specification",
        "versionamento semântico",
      ],
      confusion:
        "Semantic Versioning classifica compatibilidade nos números; cadência define quando versões são entregues, não seu significado.",
    }),
  },
  "breaking-change": {
    en: content({
      definition:
        "A breaking change is a modification to a public contract that causes previously valid consumer code, configuration, data, or behavior to stop working as expected without adaptation.",
      purpose:
        "Identifying it protects consumers by triggering explicit migration guidance, compatibility strategy, release signaling, and coordinated rollout.",
      when: "Classify a change as breaking when removing, renaming, restricting, or semantically altering something consumers may rely on, including defaults and undocumented but established behavior.",
      context:
        "An API changes a response field from a nullable string to a required nested object while existing mobile versions still parse the old format.",
      application:
        "The provider introduces a new API version, publishes a migration path, measures old-version use, and retires it only after the support window.",
      phrase:
        "“Treat the response-shape change as breaking even though our server compiles; deployed clients own the compatibility risk.”",
      aliases: [
        "breaking api change",
        "incompatible change",
        "mudança incompatível",
      ],
      confusion:
        "A breaking change requires consumer adaptation; a backward-compatible change preserves the valid behavior of existing consumers.",
    }),
    "pt-BR": content({
      definition:
        "Breaking Change é uma alteração de contrato público que faz código, configuração, dados ou comportamento antes válidos deixarem de funcionar sem adaptação.",
      purpose:
        "Identificá-la protege consumidores ao exigir migration, estratégia de compatibilidade, sinalização de release e rollout coordenado.",
      when: "Classifique como breaking ao remover, renomear, restringir ou alterar semanticamente algo usado por consumidores, incluindo defaults e comportamentos estabelecidos.",
      context:
        "Uma API troca um campo string nullable por objeto obrigatório enquanto versões mobile antigas ainda leem o formato anterior.",
      application:
        "O provedor cria nova versão, publica migration, mede uso da antiga e a encerra após a janela de suporte.",
      phrase:
        "“Trate a mudança da response como breaking mesmo que o servidor compile; clientes implantados carregam o risco.”",
      aliases: [
        "breaking api change",
        "incompatible change",
        "mudança incompatível",
      ],
      confusion:
        "Breaking change exige adaptação; mudança backward-compatible preserva o comportamento válido dos consumidores atuais.",
    }),
  },
  "source-control": {
    en: content({
      definition:
        "Source Control is the practice and tooling used to record, compare, coordinate, review, and recover changes to source code and related project files across contributors and time.",
      purpose:
        "It preserves change history and enables safe collaboration, accountability, branching, integration, release traceability, and restoration of known states.",
      when: "Use it from the first project change, defining repository scope, ignored and generated files, credentials, branch and review workflow, commit quality, protected history, backup, release references, and access lifecycle.",
      context:
        "Several engineers change application code and configuration simultaneously and must know what changed, why, by whom, what was reviewed, and which version reached production.",
      application:
        "The team versions source and migrations, excludes secrets and build output, creates focused branches and commits, reviews diffs, protects the main line, tags releases, links deployment to commit identity, and tests restoration from the remote copy.",
      phrase:
        "Keep this migration in Source Control with the application change so deployment and rollback reference one reviewed history.",
      aliases: [
        "source code control",
        "source management",
        "controle de código-fonte",
      ],
      confusion:
        "Source Control emphasizes managing source and project artifacts; Version Control is the broader mechanism for tracking versions of any suitable files or content.",
    }),
    "pt-BR": content({
      definition:
        "Source Control é a prática e tooling para registrar, comparar, coordenar, revisar e recuperar changes em source code e project files entre contributors e time.",
      purpose:
        "Ele preserva change history e permite safe collaboration, accountability, branching, integration, release traceability e restoration.",
      when: "Use-o desde a primeira change, definindo repository scope, ignored e generated files, credentials, branch e review workflow, commit quality, protected history, backup, release references e access lifecycle.",
      context:
        "Engineers mudam application code e config simultaneamente e precisam saber what, why, who, review e production version.",
      application:
        "O time versiona source e migrations, exclui secrets e build output, cria focused branches e commits, revisa diffs, protege main line, tagueia releases e liga deployment a commit identity.",
      phrase:
        "Mantenha migration no Source Control com application change para deploy e rollback referirem a mesma reviewed history.",
      aliases: [
        "source code control",
        "source management",
        "controle de código-fonte",
      ],
      confusion:
        "Source Control enfatiza source e project artifacts; Version Control rastreia versões de qualquer content adequado.",
    }),
  },
  "version-control": {
    en: content({
      definition:
        "Version Control is a system for recording successive states of files or content, relating changes and contributors, and retrieving, comparing, branching, or combining those states.",
      purpose:
        "It makes evolution reproducible and reversible while allowing concurrent work and preserving the history needed for audit, diagnosis, collaboration, and release management.",
      when: "Apply it to code, configuration, infrastructure, documentation, schemas, and other changeable text artifacts, choosing centralized or distributed workflow and defining identity, history integrity, branching, review, retention, and recovery.",
      context:
        "A policy repository changes over years and auditors need the exact approved wording effective on a historical date as well as the discussion behind later revisions.",
      application:
        "Each approved change becomes an attributed commit, branches isolate proposals, diffs support review, signed tags mark effective releases, history links to decisions, and a remote protects collaboration and recovery.",
      phrase:
        "Version Control can reproduce the policy state from that release tag and show every reviewed change since it.",
      aliases: [
        "revision control",
        "version management system",
        "controle de versão",
      ],
      confusion:
        "Version Control records and relates content history; Backup preserves recoverable copies but does not inherently model changes, branches, authorship, or merges.",
    }),
    "pt-BR": content({
      definition:
        "Version Control é um system para registrar successive states de files ou content, relacionar changes e contributors e recuperar, comparar, criar branches ou combinar states.",
      purpose:
        "Ele torna evolution reproduzível e reversível, permite concurrent work e preserva history para audit, diagnosis, collaboration e release management.",
      when: "Aplique-o a code, config, infrastructure, docs e schemas, escolhendo centralized ou distributed workflow e definindo identity, history integrity, branching, review, retention e recovery.",
      context:
        "Um policy repository muda por anos e auditors precisam do exact approved wording de uma historical date e das revisions posteriores.",
      application:
        "Cada approved change vira attributed commit, branches isolam proposals, diffs apoiam review, signed tags marcam releases e remote protege collaboration e recovery.",
      phrase:
        "Version Control reproduz policy state daquela release tag e mostra toda reviewed change posterior.",
      aliases: [
        "revision control",
        "version management system",
        "controle de versão",
      ],
      confusion:
        "Version Control modela content history; Backup preserva copies sem necessariamente changes, branches, authorship ou merges.",
    }),
  },
  "working-tree": {
    en: content({
      definition:
        "Working Tree is the checked-out directory state in a Git repository where files are materialized for editing, including tracked content at the current commit plus unstaged, staged, ignored, and untracked filesystem changes.",
      purpose:
        "It is the developer's editable workspace and the comparison point Git uses to distinguish current file contents from the index and committed history.",
      when: "Inspect it before switching branches, pulling, rebasing, committing, cleaning, or discarding changes, using status and diff to understand tracked, untracked, staged, and ignored state.",
      context:
        "A developer has edited two tracked files, generated an ignored build directory, created one untracked test, and staged only part of one file for the next commit.",
      application:
        "Git status summarizes the working tree, git diff shows unstaged tracked changes, git diff --staged shows the index, the developer adds the intended test, commits one coherent change, and preserves unrelated work separately.",
      phrase:
        "The Working Tree is not clean: review the untracked test and unstaged configuration before changing branches.",
      aliases: ["worktree", "working directory", "árvore de trabalho"],
      confusion:
        "The Working Tree contains editable filesystem files; the Staging Area or index stores the exact proposed snapshot for the next commit.",
    }),
    "pt-BR": content({
      definition:
        "Working Tree é o checked-out directory state num Git repository onde files ficam materialized para editing, incluindo tracked content e unstaged, staged, ignored e untracked changes.",
      purpose:
        "Ela é o editable workspace e comparison point usado pelo Git entre current files, index e committed history.",
      when: "Inspecione-a antes de switch, pull, rebase, commit, clean ou discard, usando status e diff para entender tracked, untracked, staged e ignored state.",
      context:
        "Um developer editou tracked files, gerou ignored build, criou untracked test e staged apenas parte de um file.",
      application:
        "Git status resume tree, git diff mostra unstaged changes, git diff --staged mostra index, developer adiciona intended test, commita coherent change e preserva unrelated work.",
      phrase:
        "Working Tree não está clean: revise untracked test e unstaged config antes de mudar branch.",
      aliases: ["worktree", "working directory", "árvore de trabalho"],
      confusion:
        "Working Tree contém editable files; Staging Area guarda exact proposed snapshot do next commit.",
    }),
  },
  "staging-area": {
    en: content({
      definition:
        "Staging Area, also called the Git index, is the intermediate snapshot that records the exact file contents and paths Git will use to create the next commit.",
      purpose:
        "It lets a developer compose a coherent commit from selected changes without committing every current edit in the working tree.",
      when: "Use it before each commit to select complete files or individual hunks, review the staged diff, remove accidental content, verify tests for that snapshot, and keep unrelated work unstaged.",
      context:
        "One source file contains a bug fix and an unfinished refactor, but only the tested bug fix belongs in the release commit.",
      application:
        "The developer stages the bug-fix hunks interactively, reviews git diff --staged, ensures required test and migration are included, leaves refactor hunks in the working tree, and commits the staged snapshot with a focused message.",
      phrase:
        "Review the Staging Area, not only the working tree; the staged snapshot is what this commit will actually record.",
      aliases: ["Git index", "index", "área de preparação"],
      confusion:
        "The Staging Area is the proposed next snapshot; a Commit is the immutable history object created from that snapshot with parent and metadata.",
    }),
    "pt-BR": content({
      definition:
        "Staging Area, também Git index, é o intermediate snapshot que registra exact file contents e paths usados pelo Git no next commit.",
      purpose:
        "Ela permite compor coherent commit de selected changes sem commitar toda current edit da working tree.",
      when: "Use-a antes de commit para selecionar files ou hunks, revisar staged diff, remover accidental content, verificar tests da snapshot e deixar unrelated work unstaged.",
      context:
        "Um source file contém bug fix e unfinished refactor, mas só tested bug fix pertence ao release commit.",
      application:
        "Developer stageia bug-fix hunks interativamente, revisa git diff --staged, inclui test e migration, deixa refactor na working tree e commita snapshot com focused message.",
      phrase:
        "Revise Staging Area, não só working tree; staged snapshot é o que commit registrará.",
      aliases: ["Git index", "index", "área de preparação"],
      confusion:
        "Staging Area é proposed next snapshot; Commit é immutable history object criado dela com parent e metadata.",
    }),
  },
  "local-repository": {
    en: content({
      definition:
        "Local Repository is the Git repository stored on a contributor's machine, containing commits, branches, tags, references, configuration, and object history used for operations without contacting a remote.",
      purpose:
        "It enables fast offline history, branching, commits, comparisons, merges, and recovery while giving the contributor an independent copy of distributed project history.",
      when: "Work locally for normal development, keeping remote-tracking references current when collaboration matters and protecting repository objects, credentials, hooks, configuration, and unpushed commits from accidental loss.",
      context:
        "A developer creates commits and branches on a laptop during travel, while the shared server remains unreachable and teammates cannot yet see those commits.",
      application:
        "The developer inspects and commits locally, fetches after reconnecting, compares local work with updated remote-tracking branches, rebases or merges deliberately, runs tests, pushes the chosen branch, and verifies the upstream reference.",
      phrase:
        "These commits exist only in the Local Repository until you push a reachable branch to the remote.",
      aliases: ["local Git repository", "local repo", "repositório local"],
      confusion:
        "A Local Repository is the contributor's full Git repository copy; the Working Tree is the checked-out editable filesystem view associated with it.",
    }),
    "pt-BR": content({
      definition:
        "Local Repository é o Git repository na machine do contributor, contendo commits, branches, tags, references, config e object history para operations sem remote.",
      purpose:
        "Ele permite offline history, branching, commits, comparisons, merges e recovery com independent copy do distributed project history.",
      when: "Trabalhe localmente no development normal, atualizando remote-tracking references para collaboration e protegendo objects, credentials, hooks, config e unpushed commits.",
      context:
        "Um developer cria commits e branches no laptop sem network; shared server e teammates ainda não veem esses commits.",
      application:
        "Developer commita localmente, faz fetch ao reconectar, compara local work e remote-tracking branches, rebaseia ou mergeia, testa, faz push e verifica upstream.",
      phrase:
        "Estes commits existem somente no Local Repository até push de uma reachable branch ao remote.",
      aliases: ["local Git repository", "local repo", "repositório local"],
      confusion:
        "Local Repository é full Git repository copy; Working Tree é checked-out editable filesystem view.",
    }),
  },
  "remote-repository": {
    en: content({
      definition:
        "Remote Repository is a Git repository reachable through a configured network location and used to exchange branches, tags, and objects between local repositories or automation.",
      purpose:
        "It provides a collaboration and integration point where contributors publish history, fetch others' work, run shared automation, and preserve references beyond one machine.",
      when: "Configure remotes for collaboration, forks, mirrors, deployment, or backup, giving each a meaningful name and governing authentication, authorization, protected references, fetch and push mappings, availability, retention, and trust.",
      context:
        "A developer's local repository uses origin for a personal fork and upstream for the organization's canonical repository, with different permissions and purposes.",
      application:
        "The developer fetches both remotes, reviews remote-tracking branches, pushes a feature only to the fork, opens a pull request to the protected canonical branch, and never assumes a remote name proves trust or ownership.",
      phrase:
        "Push this branch to the fork Remote Repository; the canonical remote accepts changes only through reviewed pull requests.",
      aliases: ["remote Git repository", "Git remote", "repositório remoto"],
      confusion:
        "A Remote Repository is the actual network-reachable repository; a remote-tracking branch is a local reference recording the last fetched state of one remote branch.",
    }),
    "pt-BR": content({
      definition:
        "Remote Repository é um Git repository alcançável por configured network location para exchange de branches, tags e objects entre local repositories ou automation.",
      purpose:
        "Ele fornece collaboration e integration point para publicar history, buscar work, executar shared automation e preservar references fora de uma machine.",
      when: "Configure remotes para collaboration, forks, mirrors, deployment ou backup, nomeando-os e governando auth, protected references, fetch e push mappings, availability, retention e trust.",
      context:
        "Um local repository usa origin para personal fork e upstream para canonical organization repository, com permissions e purposes diferentes.",
      application:
        "Developer faz fetch de ambos, revisa remote-tracking branches, faz push ao fork, abre pull request à protected canonical branch e não confunde remote name com trust.",
      phrase:
        "Faça push desta branch ao fork Remote Repository; canonical remote aceita change só por reviewed pull request.",
      aliases: ["remote Git repository", "Git remote", "repositório remoto"],
      confusion:
        "Remote Repository é network repository; remote-tracking branch é local reference do last fetched remote state.",
    }),
  },
  upstream: {
    en: content({
      definition:
        "Upstream is the source branch, repository, or project from which a local branch or derivative project receives changes, commonly the configured branch used by Git for default fetch integration and comparison.",
      purpose:
        "It establishes the direction from an authoritative or parent history toward a consumer branch so synchronization and divergence can be expressed clearly.",
      when: "Set an upstream branch when a local branch should track one remote branch for status, pull, and push defaults, and use the broader term when maintaining forks or dependencies that consume another project's releases.",
      context:
        "A local feature branch publishes to origin/feature while a fork also receives canonical project changes from a remote named upstream.",
      application:
        "The developer configures the feature branch to track origin/feature, fetches canonical changes from upstream/main separately, inspects ahead and behind state, integrates deliberately, and avoids a plain pull when the intended source is ambiguous.",
      phrase:
        "This branch's Upstream is origin/feature; upstream/main is the canonical project branch and is a different reference.",
      aliases: ["upstream branch", "upstream repository", "fonte ascendente"],
      confusion:
        "Upstream describes the source from which changes flow; the remote named upstream is only a naming convention and may not be the tracking branch of a particular local branch.",
    }),
    "pt-BR": content({
      definition:
        "Upstream é a source branch, repository ou project de onde uma local branch ou derivative project recebe changes, frequentemente a configured branch usada para integration e comparison defaults.",
      purpose:
        "Ele estabelece direction de authoritative ou parent history para consumer branch, tornando synchronization e divergence claras.",
      when: "Defina upstream branch quando local branch acompanhar remote branch para status, pull e push defaults; use o termo amplo em forks ou dependencies que recebem releases de outro project.",
      context:
        "Uma local feature branch publica em origin/feature enquanto fork recebe canonical changes de remote chamado upstream.",
      application:
        "Developer configura tracking de origin/feature, faz fetch de upstream/main separadamente, inspeciona ahead e behind, integra deliberadamente e evita ambiguous pull.",
      phrase:
        "O Upstream desta branch é origin/feature; upstream/main é canonical project branch e outra reference.",
      aliases: ["upstream branch", "upstream repository", "fonte ascendente"],
      confusion:
        "Upstream descreve change source; remote chamado upstream é só convention e pode não ser tracking branch local.",
    }),
  },
  downstream: {
    en: content({
      definition:
        "Downstream is a branch, repository, project, build, or consumer that receives and depends on changes originating from an upstream source.",
      purpose:
        "The term makes propagation direction and compatibility responsibility visible when one change affects later integrations, derivatives, releases, or consumers.",
      when: "Identify downstream branches and consumers before changing or releasing a shared contract, library, base image, repository, or maintained fork, defining notification, compatibility, adoption, backport, and support expectations.",
      context:
        "A security fix lands in the canonical library repository and must flow into a company fork, several release branches, container images, and applications.",
      application:
        "Maintainers map downstream repositories and versions, publish the fixed commit and release, automate dependency update proposals, backport where policy requires, run consumer tests, track adoption, and communicate incompatible changes.",
      phrase:
        "Before rewriting this history, identify every Downstream fork and release branch that already consumed these commits.",
      aliases: [
        "downstream branch",
        "downstream consumer",
        "destino descendente",
      ],
      confusion:
        "Downstream receives changes or depends on an upstream source; it is not a Git configuration keyword with one universal reference in the way a branch's upstream can be configured.",
    }),
    "pt-BR": content({
      definition:
        "Downstream é uma branch, repository, project, build ou consumer que recebe e depende de changes originadas em upstream source.",
      purpose:
        "O termo explicita propagation direction e compatibility responsibility quando uma change afeta later integrations, derivatives, releases ou consumers.",
      when: "Identifique downstream branches e consumers antes de mudar shared contract, library, base image, repository ou fork, definindo notification, compatibility, adoption, backport e support.",
      context:
        "Um security fix entra na canonical library e precisa chegar a company fork, release branches, container images e apps.",
      application:
        "Maintainers mapeiam downstream repositories e versions, publicam fixed release, automatizam update proposals, fazem backport, rodam consumer tests e acompanham adoption.",
      phrase:
        "Antes de reescrever history, identifique todo Downstream fork e release branch que consumiu estes commits.",
      aliases: [
        "downstream branch",
        "downstream consumer",
        "destino descendente",
      ],
      confusion:
        "Downstream recebe changes de upstream; não é uma Git configuration keyword com uma universal reference.",
    }),
  },
  "tracking-branch": {
    en: content({
      definition:
        "Tracking Branch is a local Git branch configured with an upstream remote-tracking branch so status and selected commands can report divergence and infer default fetch-integration and push relationships.",
      purpose:
        "It reduces repetitive reference names and makes the intended collaboration counterpart of a local branch explicit.",
      when: "Configure one when a local branch corresponds to a published remote branch, verifying the correct remote and branch before using pull or default push and changing the relationship when branches are renamed or retargeted.",
      context:
        "A developer creates feature/payment locally, pushes it to origin, and wants status to show whether the local and remote feature histories are ahead, behind, or diverged.",
      application:
        "The initial push sets origin/feature/payment as upstream, git status displays ahead and behind counts, fetch refreshes the remote-tracking reference, the developer reviews divergence before rebase or merge, and removes stale configuration after branch deletion.",
      phrase:
        "Set the Tracking Branch to origin/feature/payment so status and push target the published feature, not main.",
      aliases: [
        "upstream-tracking branch",
        "tracked local branch",
        "branch de rastreamento",
      ],
      confusion:
        "A Tracking Branch is the local branch with upstream configuration; a remote-tracking branch such as origin/main is a local read-only-style reference updated by fetch.",
    }),
    "pt-BR": content({
      definition:
        "Tracking Branch é uma local Git branch configurada com upstream remote-tracking branch para status e commands reportarem divergence e inferirem integration e push defaults.",
      purpose:
        "Ela reduz repeated reference names e explicita intended collaboration counterpart da local branch.",
      when: "Configure-a quando local branch corresponder a published remote branch, verificando remote e branch antes de pull ou default push e atualizando relation após rename ou retarget.",
      context:
        "Um developer cria feature/payment, faz push a origin e quer status de ahead, behind ou diverged entre histories.",
      application:
        "Initial push define origin/feature/payment como upstream, status mostra counts, fetch atualiza remote-tracking ref, developer revisa divergence antes de rebase ou merge e remove stale config.",
      phrase:
        "Defina Tracking Branch como origin/feature/payment para status e push mirarem feature, não main.",
      aliases: [
        "upstream-tracking branch",
        "tracked local branch",
        "branch de rastreamento",
      ],
      confusion:
        "Tracking Branch é local branch configurada; remote-tracking branch como origin/main é local ref atualizada por fetch.",
    }),
  },
  "detached-head": {
    en: content({
      definition:
        "Detached HEAD is a Git state in which HEAD points directly to a commit rather than symbolically to a local branch, so new commits advance no named branch automatically.",
      purpose:
        "It permits inspection, building, testing, and experimentation at an exact historical commit while warning that resulting commits need an explicit branch or tag to remain conveniently reachable.",
      when: "Use it intentionally for checking out tags, remote references, or specific commits, and create a branch before or after committing if the work must be preserved and shared.",
      context:
        "A developer checks out a production release tag to reproduce a defect, makes a diagnostic change, and commits it while no branch is checked out.",
      application:
        "Git reports detached HEAD, the developer tests the historical version, creates fix/release-diagnosis at the new commit before switching away, verifies the branch reference, and then rebases or cherry-picks the work onto the intended maintenance branch.",
      phrase:
        "You are in Detached HEAD; create a named branch at this commit before leaving if the diagnostic change must survive.",
      aliases: ["detached HEAD state", "headless checkout", "HEAD destacado"],
      confusion:
        "Detached HEAD means HEAD is not attached to a branch name; it does not mean the commit is invalid or the working tree has no checked-out content.",
    }),
    "pt-BR": content({
      definition:
        "Detached HEAD é um Git state em que HEAD aponta diretamente a commit, não simbolicamente a local branch, então new commits não avançam named branch automaticamente.",
      purpose:
        "Ele permite inspection, build, test e experiment em exact historical commit, alertando que results precisam de branch ou tag para continuar reachable.",
      when: "Use-o intencionalmente ao checkout de tags, remote refs ou commits e crie branch antes ou depois de commit se work precisar ser preservado.",
      context:
        "Um developer faz checkout de production release tag, cria diagnostic change e commita sem branch checked out.",
      application:
        "Git informa detached HEAD, developer testa version, cria fix/release-diagnosis no new commit antes de switch, verifica ref e depois cherry-picka work na maintenance branch.",
      phrase:
        "Você está em Detached HEAD; crie named branch neste commit antes de sair se change precisar sobreviver.",
      aliases: ["detached HEAD state", "headless checkout", "HEAD destacado"],
      confusion:
        "Detached HEAD significa HEAD sem branch name; não significa invalid commit nem working tree vazia.",
    }),
  },
  "fast-forward": {
    en: content({
      definition:
        "Fast-Forward is a Git reference update possible when the target branch tip is an ancestor of the incoming tip, allowing the branch pointer to move forward without creating a merge commit.",
      purpose:
        "It integrates a linear descendant history without manufacturing an extra commit when no divergent histories need to be joined.",
      when: "Use or allow it when linear history is intended and preserving a distinct merge boundary is unnecessary; require, forbid, or test for it explicitly in scripts and branch policies rather than relying on changing defaults.",
      context:
        "Main has not changed since a feature branch began, and every main commit is already in the feature branch's ancestry.",
      application:
        "The maintainer fetches current references, verifies tests and review, confirms main is an ancestor of feature, performs a fast-forward-only merge, and pushes the advanced main reference without a new merge node.",
      phrase:
        "This merge can Fast-Forward because main has no commits outside the feature history; use --ff-only to reject unexpected divergence.",
      aliases: ["fast-forward merge", "FF update", "avanço rápido"],
      confusion:
        "Fast-Forward moves a branch reference along existing descendant commits; a Merge Commit creates a new commit with multiple parents to join divergent histories.",
    }),
    "pt-BR": content({
      definition:
        "Fast-Forward é um Git reference update possível quando target branch tip é ancestor do incoming tip, movendo branch pointer sem criar merge commit.",
      purpose:
        "Ele integra linear descendant history sem extra commit quando não há divergent histories para unir.",
      when: "Use-o quando linear history for desejada e distinct merge boundary não importar; exija, proíba ou teste explicitamente em scripts e branch policies.",
      context:
        "Main não mudou desde o início da feature branch e todos main commits já estão na ancestry da feature.",
      application:
        "Maintainer faz fetch, confirma tests e review, verifica ancestry, executa fast-forward-only merge e faz push de advanced main sem merge node.",
      phrase:
        "Este merge pode Fast-Forward porque main não tem commits fora da feature history; use --ff-only contra divergence.",
      aliases: ["fast-forward merge", "FF update", "avanço rápido"],
      confusion:
        "Fast-Forward move branch ref por existing commits; Merge Commit cria commit com multiple parents.",
    }),
  },
  squash: {
    en: content({
      definition:
        "Squash is the history-editing act of combining the changes represented by multiple commits into fewer commits, usually one, while creating new commit identities for the rewritten result.",
      purpose:
        "It can turn noisy exploratory history into coherent reviewable units before publication or integration, making each retained commit express one meaningful change.",
      when: "Squash local or explicitly rewriteable commits when intermediate steps add no durable value, preserving authorship or rationale where needed and avoiding unilateral rewrites of shared history.",
      context:
        "A feature branch contains fixup commits, review corrections, temporary debugging, and message-only commits that all describe one final tested behavior.",
      application:
        "The author uses interactive rebase to reorder and squash related commits, writes a complete final message, verifies the resulting diff against the original branch, runs tests, and force-pushes with lease only after coordinating the published branch rewrite.",
      phrase:
        "Squash these fixup commits into the feature change, but preserve the security rationale in the final commit message.",
      aliases: [
        "commit squashing",
        "history compression",
        "combinação de commits",
      ],
      confusion:
        "Squash is the general act of combining commits through history rewriting; Squash Merge integrates a branch by creating one new target-branch commit without preserving its individual commits as target ancestry.",
    }),
    "pt-BR": content({
      definition:
        "Squash é o history-editing act de combinar changes de múltiplos commits em menos commits, normalmente um, criando new commit identities.",
      purpose:
        "Ele transforma noisy exploratory history em coherent reviewable units antes de publication ou integration.",
      when: "Faça squash de local ou rewriteable commits quando intermediate steps não agregarem durable value, preservando rationale e evitando unilateral rewrite de shared history.",
      context:
        "Uma feature branch contém fixup commits, review corrections e temporary debugging que descrevem um final tested behavior.",
      application:
        "Author usa interactive rebase, ordena e combina commits, escreve final message, verifica diff contra original branch, roda tests e force-pusha with lease após coordination.",
      phrase:
        "Faça Squash dos fixups na feature change, preservando security rationale no final commit message.",
      aliases: [
        "commit squashing",
        "history compression",
        "combinação de commits",
      ],
      confusion:
        "Squash é ato geral de combinar commits; Squash Merge integra branch como one new target commit.",
    }),
  },
  "squash-merge": {
    en: content({
      definition:
        "Squash Merge is an integration method that applies the combined final diff of a source branch to the target branch as one new commit without making the source commits ancestors of the target.",
      purpose:
        "It preserves one concise target-history unit per change while allowing the review branch to contain iterative commits during development.",
      when: "Use it when the team values a linear target history and one revertable commit per reviewed change, ensuring the synthesized message preserves issue, authorship, rationale, migration, and breaking-change information.",
      context:
        "A pull request has twelve review and fixup commits, but the project wants main to record the completed feature as one coherent release-note unit.",
      application:
        "The platform verifies the current reviewed head, combines its diff onto main, creates one commit with curated title and body, links the pull request and co-authors, runs protected checks, and deletes the source branch after confirming integration.",
      phrase:
        "Use Squash Merge for this pull request and rewrite the final message so main retains the migration and security context.",
      aliases: ["squashed merge", "single-commit merge", "merge com squash"],
      confusion:
        "Squash Merge creates one new commit from the branch diff; a normal Merge Commit retains source commits in ancestry and adds a multi-parent integration commit.",
    }),
    "pt-BR": content({
      definition:
        "Squash Merge é um integration method que aplica combined final diff da source branch ao target como one new commit sem tornar source commits ancestors do target.",
      purpose:
        "Ele preserva concise target-history unit por change enquanto review branch mantém iterative commits.",
      when: "Use-o quando team preferir linear target history e one revertable commit por reviewed change, preservando issue, authorship, rationale, migration e breaking-change info no synthesized message.",
      context:
        "Um pull request tem doze review e fixup commits, mas main deve registrar completed feature como coherent release-note unit.",
      application:
        "A platform verifica reviewed head, combina diff em main, cria commit com curated title e body, liga pull request e co-authors, roda protected checks e apaga source branch.",
      phrase:
        "Use Squash Merge e reescreva final message para main manter migration e security context.",
      aliases: ["squashed merge", "single-commit merge", "merge com squash"],
      confusion:
        "Squash Merge cria one new commit do branch diff; normal Merge Commit retém source ancestry e adiciona multi-parent commit.",
    }),
  },
  "merge-commit": {
    en: content({
      definition:
        "Merge Commit is a Git commit with two or more parents that records the result of joining previously divergent histories into one new snapshot.",
      purpose:
        "It preserves branch ancestry and marks an explicit integration point, including any decisions needed to resolve conflicts between the parent histories.",
      when: "Create one when retaining the topology and boundary of a feature, release, or coordinated integration is valuable, reviewing all combined changes and testing the integrated result rather than only conflict files.",
      context:
        "Main and a release branch each contain necessary commits, and maintainers need history to show when and how the release fixes returned to main.",
      application:
        "The maintainer fetches current tips, merges the release branch without fast-forward, resolves semantic conflicts, runs the complete integration suite, reviews the first-parent and combined diff, and writes a message describing the branch purpose and resolution.",
      phrase:
        "Keep a Merge Commit here so history preserves the release integration boundary and both parent lines.",
      aliases: ["merge node", "multi-parent commit", "commit de merge"],
      confusion:
        "A Merge Commit preserves multiple parent histories; Squash Merge creates a single-parent commit containing only the combined final change.",
    }),
    "pt-BR": content({
      definition:
        "Merge Commit é um Git commit com dois ou mais parents que registra o result de unir previously divergent histories em new snapshot.",
      purpose:
        "Ele preserva branch ancestry e marca explicit integration point, inclusive conflict-resolution decisions.",
      when: "Crie-o quando manter topology e boundary de feature, release ou coordinated integration importar, revisando combined changes e testando integrated result.",
      context:
        "Main e release branch contêm necessary commits e maintainers querem history mostrando quando release fixes voltaram a main.",
      application:
        "Maintainer faz fetch, merge sem fast-forward, resolve semantic conflicts, roda integration suite, revisa first-parent e combined diff e escreve branch-purpose message.",
      phrase:
        "Mantenha Merge Commit para history preservar release integration boundary e parent lines.",
      aliases: ["merge node", "multi-parent commit", "commit de merge"],
      confusion:
        "Merge Commit preserva multiple parents; Squash Merge cria single-parent commit com combined change.",
    }),
  },
  revert: {
    en: content({
      definition:
        "Revert is the Git operation that creates a new commit applying the inverse of a selected commit's changes, preserving the original commit and subsequent history.",
      purpose:
        "It safely undoes an integrated change on shared branches without rewriting history that collaborators, releases, or deployments may already reference.",
      when: "Use revert for a faulty or unwanted published commit, identifying the correct commit or merge mainline, assessing dependent later changes, resolving inverse conflicts, testing the resulting state, and communicating any data or operational rollback not covered by source changes.",
      context:
        "A feature merged to main causes production errors, and several teammates have already based work on the published history.",
      application:
        "The incident owner reverts the merge commit using the intended mainline parent, resolves changes that evolved afterward, runs regression and migration checks, deploys the new inverse commit, verifies recovery, and later reapplies a corrected change rather than deleting shared history.",
      phrase:
        "Revert the published merge to restore behavior with a new auditable commit; do not reset shared main history.",
      aliases: ["git revert", "inverse commit", "reversão por commit"],
      confusion:
        "Revert adds a new inverse commit and preserves shared history; Reset moves a reference and optionally changes the index and working tree, rewriting what the branch points to.",
    }),
    "pt-BR": content({
      definition:
        "Revert é a Git operation que cria new commit aplicando inverse das changes de selected commit, preservando original commit e subsequent history.",
      purpose:
        "Ele desfaz integrated change em shared branches sem reescrever history já referenciada por collaborators, releases ou deployments.",
      when: "Use-o em faulty published commit, identificando commit ou merge mainline, avaliando dependent changes, resolvendo inverse conflicts, testando result e comunicando data ou operational rollback separado.",
      context:
        "Uma feature merged em main causa production errors e teammates já basearam work na published history.",
      application:
        "Incident owner reverte merge com intended mainline parent, resolve later changes, roda regression e migration checks, deploya inverse commit, verifica recovery e reaplica corrected change depois.",
      phrase:
        "Faça Revert do published merge com new auditable commit; não reset shared main history.",
      aliases: ["git revert", "inverse commit", "reversão por commit"],
      confusion:
        "Revert adiciona inverse commit; Reset move reference e pode alterar index e working tree.",
    }),
  },
  reset: {
    en: content({
      definition:
        "Reset is a Git operation that moves a branch or HEAD reference to a chosen commit and, depending on mode, also updates the staging area and working tree to different degrees.",
      purpose:
        "It changes the current local history position and can uncommit, unstage, or discard work, making it useful for correcting unpublished history but dangerous when its scope is misunderstood.",
      when: "Use reset mainly on local, unpublished work after inspecting status, diffs, target commit, reflog, and mode; prefer revert for shared history and preserve a backup reference before any potentially destructive reset.",
      context:
        "A developer committed several local changes to the wrong branch and wants to reconstruct focused commits without losing the file modifications.",
      application:
        "The developer creates a temporary backup branch, confirms no commits were pushed, selects the target with log, uses the mode matching whether changes should stay staged or unstaged, checks status and diff, rebuilds commits, and uses reflog if the reference was moved incorrectly.",
      phrase:
        "Before Reset, name the target and desired state of HEAD, index, and working tree; the mode determines what survives.",
      aliases: ["git reset", "reference reset", "redefinição do Git"],
      confusion:
        "Reset moves a reference and may rewrite local branch history; Revert preserves history by adding a new commit that inverses selected changes.",
    }),
    "pt-BR": content({
      definition:
        "Reset é uma Git operation que move branch ou HEAD reference para chosen commit e, conforme mode, também atualiza staging area e working tree em graus diferentes.",
      purpose:
        "Ele muda current local history position e pode uncommit, unstage ou discard work, útil em unpublished history e perigoso sem scope claro.",
      when: "Use-o principalmente em local unpublished work após revisar status, diffs, target, reflog e mode; prefira revert em shared history e crie backup ref antes de destructive reset.",
      context:
        "Um developer commitou local changes na wrong branch e quer reconstruir focused commits sem perder file modifications.",
      application:
        "Developer cria backup branch, confirma que nada foi pushed, escolhe target no log, usa mode conforme staged ou unstaged desired state, revisa status e diff, recompõe commits e usa reflog se necessário.",
      phrase:
        "Antes de Reset, nomeie target e desired state de HEAD, index e working tree; mode decide o que sobrevive.",
      aliases: ["git reset", "reference reset", "redefinição do Git"],
      confusion:
        "Reset move reference e pode rewrite local history; Revert preserva history com inverse commit.",
    }),
  },
  "soft-reset": {
    en: content({
      definition:
        "Soft Reset is git reset --soft: it moves HEAD and the current branch to a target commit while leaving both the staging area and working tree unchanged.",
      purpose:
        "It removes commits from the current branch tip while keeping their combined changes staged, ready to be recommitted in a different shape or with corrected metadata.",
      when: "Use it for unpublished commits that should be recomposed without changing file or index content, confirming the target and creating a backup reference if the original commit sequence may be needed.",
      context:
        "Three local commits represent one atomic change and should become one commit with a clear message before the branch is pushed.",
      application:
        "The developer creates a backup branch, runs soft reset to the parent before the three commits, verifies that the full combined diff remains staged, reviews and tests it, commits once with the final message, and compares the new tree with the old tip.",
      phrase:
        "Use Soft Reset to move the branch back while keeping the complete change staged for one corrected commit.",
      aliases: ["git reset --soft", "staged history reset", "reset suave"],
      confusion:
        "Soft Reset preserves the index and working tree; Mixed Reset resets the index to the target and leaves the changes only in the working tree.",
    }),
    "pt-BR": content({
      definition:
        "Soft Reset é git reset --soft: move HEAD e current branch ao target commit mantendo staging area e working tree inalteradas.",
      purpose:
        "Ele remove commits do branch tip e mantém combined changes staged para recommit em outra forma ou com corrected metadata.",
      when: "Use-o em unpublished commits que serão recompostos sem mudar file ou index content, confirmando target e criando backup reference.",
      context:
        "Três local commits representam uma atomic change e devem virar one commit antes do push.",
      application:
        "Developer cria backup, faz soft reset ao parent, confirma combined staged diff, revisa e testa, commita uma vez e compara new tree com old tip.",
      phrase:
        "Use Soft Reset para mover branch para trás mantendo complete change staged para corrected commit.",
      aliases: ["git reset --soft", "staged history reset", "reset suave"],
      confusion:
        "Soft Reset preserva index e working tree; Mixed Reset reseta index e deixa changes apenas na working tree.",
    }),
  },
  "mixed-reset": {
    en: content({
      definition:
        "Mixed Reset is git reset --mixed, the default reset mode: it moves HEAD and the current branch to a target commit, resets the staging area to that commit, and leaves working-tree file contents unchanged.",
      purpose:
        "It removes commits and unstages their changes while preserving those changes as editable working-tree modifications for selective restaging or revision.",
      when: "Use it on unpublished history when changes should survive but no longer remain staged, checking untracked files and creating a backup reference before moving commits that may be needed.",
      context:
        "A local commit mixes a feature, formatting, and diagnostic changes that should be separated into reviewed commits.",
      application:
        "The developer records the old tip, performs mixed reset to its parent, verifies all tracked modifications remain unstaged, removes diagnostic work, stages feature hunks and tests, commits them, then stages formatting separately and compares final content.",
      phrase:
        "Mixed Reset removes the local commit and index selection but leaves its tracked file changes available for interactive staging.",
      aliases: ["git reset --mixed", "unstaging reset", "reset misto"],
      confusion:
        "Mixed Reset preserves working-tree content but resets the index; Hard Reset resets both index and tracked working-tree content to the target.",
    }),
    "pt-BR": content({
      definition:
        "Mixed Reset é git reset --mixed, default mode: move HEAD e branch ao target, reseta staging area a esse commit e mantém working-tree file contents.",
      purpose:
        "Ele remove commits e unstages changes, preservando-as como editable working-tree modifications para selective restaging.",
      when: "Use-o em unpublished history quando changes devem sobreviver sem staged state, verificando untracked files e criando backup ref.",
      context:
        "Um local commit mistura feature, formatting e diagnostic changes que devem virar commits separados.",
      application:
        "Developer registra old tip, faz mixed reset ao parent, confirma modifications unstaged, remove diagnostic, stageia feature hunks e tests e commita formatting separadamente.",
      phrase:
        "Mixed Reset remove local commit e index selection, mas deixa tracked changes para interactive staging.",
      aliases: ["git reset --mixed", "unstaging reset", "reset misto"],
      confusion:
        "Mixed Reset preserva working tree e reseta index; Hard Reset reseta ambos ao target.",
    }),
  },
  "hard-reset": {
    en: content({
      definition:
        "Hard Reset is git reset --hard: it moves HEAD and the current branch to a target commit and makes the staging area and tracked working-tree files match that target, discarding conflicting tracked changes.",
      purpose:
        "It forcefully restores a known tracked snapshot or removes unwanted unpublished commits and edits when their loss is deliberate and verified.",
      when: "Use it only after confirming the resolved repository path, target commit, branch, pushed state, status, uncommitted changes, submodule or worktree context, and recoverable backup; never use it as a casual cleanup command on valuable work.",
      context:
        "A disposable local experiment has no needed commits or edits, and the developer wants the branch and tracked files to exactly match a verified release commit.",
      application:
        "The developer inspects status and diff, saves a backup branch and patch, confirms the exact commit ID, runs hard reset only in the intended repository, verifies HEAD, index and files afterward, and leaves untracked cleanup to a separate explicit decision.",
      phrase:
        "Hard Reset will discard tracked edits and move the branch; create a recovery reference and verify the exact target before running it.",
      aliases: [
        "git reset --hard",
        "destructive tracked reset",
        "reset rígido",
      ],
      confusion:
        "Hard Reset discards tracked working-tree and index differences; it does not necessarily remove untracked files, which require a separate clean operation.",
    }),
    "pt-BR": content({
      definition:
        "Hard Reset é git reset --hard: move HEAD e branch ao target e faz staging area e tracked working-tree files corresponderem ao commit, descartando conflicting tracked changes.",
      purpose:
        "Ele restaura known tracked snapshot ou remove unwanted unpublished commits e edits quando loss é deliberada e verificada.",
      when: "Use-o só após confirmar repository path, target commit, branch, pushed state, status, uncommitted changes e recoverable backup; nunca como casual cleanup em valuable work.",
      context:
        "Um disposable local experiment não contém work necessário e branch deve igualar verified release commit.",
      application:
        "Developer revisa status e diff, salva backup branch e patch, confirma commit ID, executa hard reset no repository correto e verifica HEAD, index e files; untracked cleanup fica separado.",
      phrase:
        "Hard Reset descarta tracked edits e move branch; crie recovery ref e confirme exact target.",
      aliases: [
        "git reset --hard",
        "destructive tracked reset",
        "reset rígido",
      ],
      confusion:
        "Hard Reset descarta tracked differences; não remove necessariamente untracked files, que exigem clean separado.",
    }),
  },
  amend: {
    en: content({
      definition:
        "Amend is the Git operation that replaces the current branch's most recent commit with a new commit built from the current staging area, optionally changing its message or metadata.",
      purpose:
        "It corrects or completes the latest local commit without adding a separate follow-up commit, while acknowledging that the original commit identity is rewritten.",
      when: "Use it for the latest unpublished commit to fix its message, add a missed file, remove accidental content, or update authorship; coordinate and use force-with-lease if rewriting a branch that was already published.",
      context:
        "A developer commits a feature and its test but notices that the required migration was omitted before anyone else has fetched the branch.",
      application:
        "The developer stages only the migration, reviews the complete staged and previous commit diff, reruns tests, amends with the final message, verifies the new commit and tree, and pushes normally because the original identity was never published.",
      phrase:
        "Amend the unpublished commit with the migration and verify the full snapshot; the commit hash will change.",
      aliases: [
        "git commit --amend",
        "last-commit replacement",
        "alteração do último commit",
      ],
      confusion:
        "Amend replaces only the latest commit; Interactive Rebase can edit, reorder, squash, or reword multiple earlier commits.",
    }),
    "pt-BR": content({
      definition:
        "Amend é a Git operation que substitui most recent commit da current branch por new commit criado da current staging area, podendo mudar message ou metadata.",
      purpose:
        "Ele corrige ou completa latest local commit sem follow-up commit, reconhecendo que original commit identity é reescrita.",
      when: "Use-o no latest unpublished commit para corrigir message, incluir missed file, remover accidental content ou atualizar authorship; coordene e use force-with-lease se já publicado.",
      context:
        "Um developer commita feature e test, mas nota required migration omitida antes de alguém buscar a branch.",
      application:
        "Developer stageia migration, revisa complete diff, roda tests, faz amend com final message, verifica new commit e tree e faz normal push porque original não foi published.",
      phrase:
        "Faça Amend do unpublished commit com migration e verifique full snapshot; commit hash mudará.",
      aliases: [
        "git commit --amend",
        "last-commit replacement",
        "alteração do último commit",
      ],
      confusion:
        "Amend substitui apenas latest commit; Interactive Rebase edita, ordena ou combina vários earlier commits.",
    }),
  },
  "git-hook": {
    en: content({
      definition:
        "Git Hook is an executable program triggered by a defined event in a local Git repository or server-side Git workflow, such as committing, merging, receiving a push, or updating a reference.",
      purpose:
        "It automates contextual checks and actions close to version-control events, providing fast feedback or enforcing repository-specific policy.",
      when: "Use hooks for focused, deterministic, quick tasks with clear failure messages, documented installation and bypass policy, secure code and dependencies, cross-platform behavior, timeouts, and authoritative CI or server enforcement for mandatory controls.",
      context:
        "A repository wants contributors to catch invalid formatting locally and a central server to reject pushes containing forbidden secrets or unsigned release tags.",
      application:
        "A versioned hook runner executes staged-file formatting checks before commit, while a protected receive workflow validates secret scanning and tag signatures centrally; scripts pin dependencies, avoid modifying unrelated files, report fixes, and have tests and ownership.",
      phrase:
        "Use the Git Hook for fast local feedback, but keep the mandatory security check on the protected server path.",
      aliases: ["Git event hook", "repository hook", "gancho do Git"],
      confusion:
        "A Git Hook runs around a Git event; a CI Job runs in the continuous-integration system and usually provides a more reproducible centralized enforcement environment.",
    }),
    "pt-BR": content({
      definition:
        "Git Hook é um executable program acionado por defined event em local Git repository ou server workflow, como commit, merge, receive push ou reference update.",
      purpose:
        "Ele automatiza contextual checks e actions perto de version-control events para fast feedback ou repository policy.",
      when: "Use hooks em focused deterministic quick tasks com clear failure messages, documented installation e bypass, secure dependencies, cross-platform behavior, timeouts e central enforcement para mandatory controls.",
      context:
        "Um repository verifica formatting localmente e central server rejeita pushes com forbidden secrets ou unsigned release tags.",
      application:
        "Versioned hook runner testa staged files antes de commit, protected receive workflow valida secret scan e signatures centralmente, scripts fixam dependencies e têm tests e ownership.",
      phrase:
        "Use Git Hook para fast local feedback, mas mantenha mandatory security check no protected server path.",
      aliases: ["Git event hook", "repository hook", "gancho do Git"],
      confusion:
        "Git Hook roda em Git event; CI Job roda no integration system com centralized reproducible environment.",
    }),
  },
  "pre-commit-hook": {
    en: content({
      definition:
        "Pre-Commit Hook is a local Git hook invoked before a commit object is created, commonly used to inspect the proposed staged snapshot and stop the commit when a quick check fails.",
      purpose:
        "It gives immediate feedback on formatting, generated files, obvious defects, or accidental sensitive content before low-quality changes enter local history.",
      when: "Use it for fast checks based on staged content, ensuring partial staging is handled correctly, fixes are explicit, installation is reproducible, bypass is governed, and slower or mandatory validation remains in CI.",
      context:
        "A developer stages two source hunks but leaves unrelated working-tree edits, and the project must lint only what the pending commit actually contains.",
      application:
        "The hook reads the index snapshot rather than every working file, runs a pinned formatter and secret detector on staged paths, reports exact failures without silently staging unrelated edits, returns nonzero on failure, and CI reruns the authoritative checks.",
      phrase:
        "The Pre-Commit Hook must validate the staged snapshot; unstaged edits are not part of this commit.",
      aliases: ["precommit hook", "commit-time hook", "gancho pré-commit"],
      confusion:
        "A Pre-Commit Hook runs before creating a local commit; a Pre-Push Hook runs before objects are sent to a remote and can examine a wider outgoing commit range.",
    }),
    "pt-BR": content({
      definition:
        "Pre-Commit Hook é um local Git hook executado antes de commit object ser criado, normalmente para inspecionar proposed staged snapshot e impedir commit se quick check falhar.",
      purpose:
        "Ele dá immediate feedback de formatting, generated files, obvious defects ou sensitive content antes de changes entrarem no local history.",
      when: "Use-o em fast checks de staged content, tratando partial staging, explicit fixes, reproducible installation e governed bypass; mantenha slow ou mandatory validation no CI.",
      context:
        "Um developer stageia dois source hunks e mantém unrelated working-tree edits; project deve lintar só pending commit.",
      application:
        "Hook lê index snapshot, roda pinned formatter e secret detector nos staged paths, reporta failures sem stagear unrelated edits, retorna nonzero e CI repete checks.",
      phrase:
        "Pre-Commit Hook valida staged snapshot; unstaged edits não pertencem a este commit.",
      aliases: ["precommit hook", "commit-time hook", "gancho pré-commit"],
      confusion:
        "Pre-Commit Hook roda antes de local commit; Pre-Push Hook roda antes do envio e pode ver wider outgoing range.",
    }),
  },
  "protected-branch": {
    en: content({
      definition:
        "Protected Branch is a repository branch subject to configured restrictions that prevent specified direct updates, deletion, force pushes, or integration without required reviews, checks, identities, or signatures.",
      purpose:
        "It preserves the integrity of important histories such as main and release branches by making the approved integration path enforceable at the hosting service.",
      when: "Protect branches that represent releasable, deployed, regulated, or shared baselines, choosing controls by risk and securing administrators, exceptions, automation identities, rule changes, emergency access, audit, and recovery.",
      context:
        "The main branch deploys automatically to production, so one compromised developer token must not be able to bypass tests and replace its history.",
      application:
        "The repository blocks direct and force pushes, requires current review from code owners and passing pinned checks, dismisses stale approval after relevant changes, restricts deletion, applies rules to administrators, audits overrides, and provides a time-limited incident procedure.",
      phrase:
        "Main is a Protected Branch: update it through a reviewed commit with required checks, not an administrator bypass.",
      aliases: [
        "protected Git branch",
        "restricted branch",
        "branch protegida",
      ],
      confusion:
        "A Protected Branch is the branch under restrictions; Branch Protection is the rule set and governance mechanism applying those restrictions.",
    }),
    "pt-BR": content({
      definition:
        "Protected Branch é uma repository branch sob configured restrictions que impedem direct updates, deletion, force push ou integration sem required reviews, checks, identities ou signatures.",
      purpose:
        "Ela preserva integrity de important histories como main e release ao tornar approved integration path enforceable no hosting service.",
      when: "Proteja branches que representam releasable, deployed, regulated ou shared baselines, escolhendo controls por risk e protegendo admins, exceptions, automation identities, rule changes, emergency access, audit e recovery.",
      context:
        "Main deploya automaticamente a production, então compromised developer token não pode burlar tests e substituir history.",
      application:
        "Repository bloqueia direct e force pushes, exige current code-owner review e passing checks, descarta stale approval, restringe deletion, aplica rules a admins e audita override.",
      phrase:
        "Main é Protected Branch: atualize por reviewed commit com required checks, não administrator bypass.",
      aliases: [
        "protected Git branch",
        "restricted branch",
        "branch protegida",
      ],
      confusion:
        "Protected Branch é branch restrita; Branch Protection é rule set e governance mechanism.",
    }),
  },
  "branch-protection": {
    en: content({
      definition:
        "Branch Protection is the repository policy and enforcement configuration that controls who and what may update, delete, merge into, or rewrite selected branches and under which verified conditions.",
      purpose:
        "It converts review, testing, provenance, and history-integrity requirements into centralized controls rather than optional contributor convention.",
      when: "Define protection for critical branch patterns, specifying direct-push and force-push policy, review count and ownership, status checks, update requirements, signed commits, merge methods, automation, administrators, exceptions, change approval, and audit.",
      context:
        "A regulated project requires two-person review, security ownership for sensitive paths, traceable CI, and immutable release history before code can enter main.",
      application:
        "Administrators encode rules as managed configuration, bind required checks to trusted workflows, require code-owner approval and an up-to-date head, prevent rule bypass, review exception logs, test policy changes, and periodically recertify users and bots.",
      phrase:
        "Branch Protection must require the trusted security check by workflow identity, not accept any user-created status with the same display name.",
      aliases: [
        "branch protection rules",
        "protected-branch policy",
        "proteção de branch",
      ],
      confusion:
        "Branch Protection is the enforced rule configuration; a Pull Request is the collaboration object through which a change may satisfy those rules.",
    }),
    "pt-BR": content({
      definition:
        "Branch Protection é a repository policy e enforcement config que controla quem ou o que atualiza, apaga, mergeia ou reescreve selected branches e sob quais verified conditions.",
      purpose:
        "Ela transforma review, testing, provenance e history-integrity requirements em centralized controls, não contributor convention opcional.",
      when: "Defina-a para critical branch patterns, especificando direct e force push, review count e ownership, status checks, signed commits, merge methods, automation, admins, exceptions, change approval e audit.",
      context:
        "Um regulated project exige two-person review, security ownership, traceable CI e immutable release history antes de main.",
      application:
        "Admins codificam rules, vinculam checks a trusted workflows, exigem code-owner approval e up-to-date head, impedem bypass, revisam exception logs e recertificam users e bots.",
      phrase:
        "Branch Protection exige trusted security check por workflow identity, não qualquer status com mesmo display name.",
      aliases: [
        "branch protection rules",
        "protected-branch policy",
        "proteção de branch",
      ],
      confusion:
        "Branch Protection é enforced rule config; Pull Request é collaboration object que satisfaz rules.",
    }),
  },
  "code-owner": {
    en: content({
      definition:
        "Code Owner is a person or team assigned responsibility for reviewing and stewarding changes to specified repository paths based on domain knowledge, risk, or organizational accountability.",
      purpose:
        "It routes changes to qualified reviewers and makes long-term ownership visible for architecture, security, operations, quality, and maintenance decisions.",
      when: "Assign code owners to meaningful boundaries and sensitive files, ensuring active staffing, backups, review service levels, clear responsibility, escalation, periodic recertification, and protection rules that require approval where risk warrants.",
      context:
        "Changes to payment authorization and infrastructure credentials require review from different specialist teams even when they appear in one pull request.",
      application:
        "Repository paths map to durable teams, branch protection requests and requires their approval, owners evaluate domain effects rather than formatting alone, delegated backups cover absence, stale entries alert, and ownership changes follow team reorganization.",
      phrase:
        "Request the Payment Code Owner because this change alters idempotency and settlement semantics, not merely a shared utility.",
      aliases: [
        "code ownership reviewer",
        "path owner",
        "responsável pelo código",
      ],
      confusion:
        "A Code Owner has stewardship and review responsibility for paths; the original Code Author wrote a particular change but may not own that area long term.",
    }),
    "pt-BR": content({
      definition:
        "Code Owner é uma person ou team com responsibility por revisar e steward changes em specified repository paths conforme domain knowledge, risk ou organizational accountability.",
      purpose:
        "Ele roteia changes a qualified reviewers e torna long-term ownership visível para architecture, security, operations, quality e maintenance.",
      when: "Atribua owners a meaningful boundaries e sensitive files, garantindo active staffing, backups, review service levels, responsibility, escalation, recertification e required approval quando risk exigir.",
      context:
        "Changes em payment authorization e infrastructure credentials exigem specialist teams distintos no mesmo pull request.",
      application:
        "Paths mapeiam para durable teams, branch protection exige approval, owners avaliam domain effects, backups cobrem absence, stale entries alertam e ownership acompanha reorganization.",
      phrase:
        "Solicite Payment Code Owner porque change altera idempotency e settlement semantics, não só shared utility.",
      aliases: [
        "code ownership reviewer",
        "path owner",
        "responsável pelo código",
      ],
      confusion:
        "Code Owner tem long-term stewardship de paths; Code Author escreveu uma change específica.",
    }),
  },
  codeowners: {
    en: content({
      definition:
        "CODEOWNERS is a repository configuration file whose ordered path patterns map files and directories to designated users or teams so hosting platforms can automatically request or require their review.",
      purpose:
        "It encodes review routing and path stewardship alongside the codebase, making ownership changes reviewable and reducing missed specialist review.",
      when: "Maintain CODEOWNERS for meaningful boundaries and sensitive paths, understanding pattern precedence and platform location rules, using durable teams, protecting the file itself, testing matches, supplying backups, and recertifying stale ownership.",
      context:
        "A monorepo contains payments, identity, mobile, infrastructure, and documentation, each with different accountable teams and sensitive configuration files.",
      application:
        "The root file defines broad team patterns first and specific sensitive overrides later, maps to organization teams rather than individuals, assigns ownership of CODEOWNERS to repository administrators, validates representative paths in CI, and pairs required approval with branch protection.",
      phrase:
        "Update CODEOWNERS so the identity team is requested for this path, then verify the specific pattern is not shadowed by a later rule.",
      aliases: [
        "CODEOWNERS file",
        "code ownership map",
        "arquivo de responsáveis",
      ],
      confusion:
        "CODEOWNERS declares path-to-reviewer mappings; Branch Protection determines whether the requested code-owner approval is mandatory for integration.",
    }),
    "pt-BR": content({
      definition:
        "CODEOWNERS é um repository configuration file cujos ordered path patterns mapeiam files e directories a users ou teams para hosting platform solicitar ou exigir review.",
      purpose:
        "Ele codifica review routing e path stewardship junto ao codebase, tornando ownership changes revisáveis e reduzindo specialist review omitido.",
      when: "Mantenha-o para meaningful boundaries e sensitive paths, entendendo precedence e platform rules, usando durable teams, protegendo o próprio file, testando matches, oferecendo backups e recertificando ownership.",
      context:
        "Um monorepo contém payments, identity, mobile, infrastructure e docs com accountable teams e sensitive configs distintos.",
      application:
        "O file define broad patterns e specific overrides, usa organization teams, atribui owner ao próprio CODEOWNERS, valida paths em CI e combina required approval com branch protection.",
      phrase:
        "Atualize CODEOWNERS para identity team e confirme que specific pattern não é shadowed por later rule.",
      aliases: [
        "CODEOWNERS file",
        "code ownership map",
        "arquivo de responsáveis",
      ],
      confusion:
        "CODEOWNERS declara path-reviewer mapping; Branch Protection torna approval obrigatória ou não.",
    }),
  },
  "draft-pull-request": {
    en: content({
      definition:
        "Draft Pull Request is a pull request explicitly marked as not ready for final review or integration while its branch, diff, discussion, and automated checks remain visible for early collaboration.",
      purpose:
        "It shares direction and risk early, collects targeted feedback, and exercises CI without falsely signaling that the change satisfies completion and approval expectations.",
      when: "Open one when early architectural, product, interface, or implementation feedback would reduce rework, clearly stating the question, current state, missing work, test status, risks, dependencies, and criteria for becoming ready.",
      context:
        "A developer has implemented the skeleton of a new authorization model and wants security feedback on the boundary before completing migrations and tests.",
      application:
        "The description identifies the design decision and non-goals, marks incomplete enforcement paths, links the threat model, requests review from security, keeps commits reviewable, updates a checklist, resolves feedback, adds migration and tests, then marks ready and requests formal approval.",
      phrase:
        "Open a Draft Pull Request to validate the authorization boundary now; list the missing migration and test work explicitly.",
      aliases: [
        "draft PR",
        "work-in-progress pull request",
        "pull request em rascunho",
      ],
      confusion:
        "A Draft Pull Request invites early collaboration but is not ready to merge; a Ready Pull Request signals that required review and integration checks can be completed.",
    }),
    "pt-BR": content({
      definition:
        "Draft Pull Request é um pull request marcado como não pronto para final review ou integration, embora branch, diff, discussion e automated checks fiquem visíveis.",
      purpose:
        "Ele compartilha direction e risk cedo, coleta targeted feedback e executa CI sem sinalizar completion e approval.",
      when: "Abra-o quando early architecture, product, interface ou implementation feedback reduzir rework, declarando question, current state, missing work, test status, risks, dependencies e ready criteria.",
      context:
        "Um developer implementa skeleton de authorization model e quer security feedback antes de migrations e tests finais.",
      application:
        "Description define decision e non-goals, marca incomplete paths, liga threat model, solicita security review, atualiza checklist, resolve feedback, adiciona migration e tests e então marca ready.",
      phrase:
        "Abra Draft Pull Request para validar authorization boundary e liste missing migration e tests.",
      aliases: [
        "draft PR",
        "work-in-progress pull request",
        "pull request em rascunho",
      ],
      confusion:
        "Draft Pull Request recebe early collaboration sem estar pronta; Ready Pull Request sinaliza final review e integration.",
    }),
  },
  approval: {
    en: content({
      definition:
        "Approval is a review decision by an authorized reviewer stating that a specific revision satisfies the reviewer's required criteria and may proceed subject to all other policies and checks.",
      purpose:
        "It records accountable consent at a known change state and lets repository rules verify that required technical or domain perspectives accepted the integration risk.",
      when: "Approve only after reviewing the current relevant diff, requirements, tests, security and operational effects, unresolved discussions, generated artifacts, deployment and rollback; refresh review if material changes make the decision stale.",
      context:
        "A payment pull request was approved, but the author later changes retry semantics and force-pushes a new revision with different duplicate-charge risk.",
      application:
        "Branch protection dismisses stale approval, the payment owner reviews the new commit range and updated tests, resolves blocking comments, confirms the exact head commit, approves with any non-blocking follow-up recorded separately, and CI remains independently required.",
      phrase:
        "This Approval applies to the reviewed head revision; the retry change requires renewed payment-owner review.",
      aliases: [
        "pull request approval",
        "review approval",
        "aprovação de revisão",
      ],
      confusion:
        "Approval is a human review decision; a Passing Check is an automated status and cannot substitute for judgment required from a reviewer.",
    }),
    "pt-BR": content({
      definition:
        "Approval é uma review decision de authorized reviewer declarando que specific revision atende seus criteria e pode avançar sujeita às demais policies e checks.",
      purpose:
        "Ela registra accountable consent em known change state e permite rules verificarem required technical ou domain perspectives.",
      when: "Aprove somente após revisar current diff, requirements, tests, security e operational effects, unresolved discussions, artifacts, deploy e rollback; renove review após material changes.",
      context:
        "Um payment pull request foi approved, mas author muda retry semantics e force-pusha revision com novo duplicate-charge risk.",
      application:
        "Branch protection descarta stale approval, payment owner revisa new commit range e tests, resolve blockers, confirma head commit, aprova e CI continua obrigatório.",
      phrase:
        "Esta Approval vale para reviewed head revision; retry change exige renewed payment-owner review.",
      aliases: [
        "pull request approval",
        "review approval",
        "aprovação de revisão",
      ],
      confusion:
        "Approval é human review decision; Passing Check é automated status e não substitui reviewer judgment.",
    }),
  },
  "review-comment": {
    en: content({
      definition:
        "Review Comment is a contextual message attached to a proposed change or review discussion that communicates a question, defect, risk, rationale, suggestion, or required action.",
      purpose:
        "It turns reviewer reasoning into actionable, traceable collaboration tied to the exact code and revision under discussion.",
      when: "Write one when a change needs clarification or improvement, explaining the observed issue, consequence, evidence, and expected resolution while distinguishing blocking requirements, questions, and optional suggestions respectfully.",
      context:
        "A reviewer notices that an error path logs an access token, but a vague comment saying 'security issue' does not tell the author what leaks or how to verify the correction.",
      application:
        "The reviewer marks the comment blocking, cites the exact token value and log path, explains exposure through log access and retention, asks to log only a correlation ID, links the logging policy, and resolves the thread after reviewing the changed revision and regression test.",
      phrase:
        "Blocking Review Comment: this statement records the bearer token; replace it with the request ID and add a log-capture test.",
      aliases: [
        "code review comment",
        "pull request comment",
        "comentário de revisão",
      ],
      confusion:
        "A Review Comment addresses the change under review; a general Code Comment lives in source to explain behavior or constraints to future maintainers.",
    }),
    "pt-BR": content({
      definition:
        "Review Comment é uma contextual message ligada a proposed change ou review discussion que comunica question, defect, risk, rationale, suggestion ou required action.",
      purpose:
        "Ele transforma reviewer reasoning em actionable traceable collaboration ligada ao exact code e revision.",
      when: "Escreva-o quando change precisar de clarification ou improvement, explicando issue, consequence, evidence e expected resolution e distinguindo blocker, question e optional suggestion.",
      context:
        "Reviewer nota que error path registra access token, mas comentário vago 'security issue' não explica leak nem correction.",
      application:
        "Reviewer marca blocker, cita token e log path, explica exposure, pede correlation ID, liga logging policy e resolve thread após changed revision e regression test.",
      phrase:
        "Blocking Review Comment: statement registra bearer token; use request ID e adicione log-capture test.",
      aliases: [
        "code review comment",
        "pull request comment",
        "comentário de revisão",
      ],
      confusion:
        "Review Comment trata proposed change; Code Comment fica no source para future maintainers.",
    }),
  },
  "rebase-interactive": {
    en: content({
      definition:
        "Interactive Rebase is a Git history-rewriting workflow that lets a user reorder, edit, reword, squash, fix up, split, or drop a selected sequence of commits before replaying them onto a base.",
      purpose:
        "It prepares unpublished history into coherent, reviewable commits or performs deliberate maintenance while giving explicit control over each rewritten commit.",
      when: "Use it on local or coordinated rewriteable history, first creating a recovery reference and identifying the correct base; avoid uncoordinated rewriting of commits others have consumed.",
      context:
        "A feature branch contains mixed refactoring and behavior commits, several fixups, and unclear messages that make review and later reversion difficult.",
      application:
        "The author saves a backup branch, starts interactive rebase from the feature base, reorders dependencies, marks commits for edit and squash, splits staged hunks into atomic changes, resolves replay conflicts, writes final messages, runs tests, compares tree and range with the backup, then pushes with lease after coordination.",
      phrase:
        "Use Interactive Rebase to split the behavior change from refactoring and squash its fixups before requesting final review.",
      aliases: [
        "git rebase -i",
        "interactive history rewrite",
        "rebase interativo",
      ],
      confusion:
        "Interactive Rebase rewrites a sequence with per-commit control; Amend replaces only the most recent commit.",
    }),
    "pt-BR": content({
      definition:
        "Interactive Rebase é um Git history-rewriting workflow para reorder, edit, reword, squash, fixup, split ou drop de selected commit sequence antes de replay sobre base.",
      purpose:
        "Ele prepara unpublished history em coherent reviewable commits ou faz deliberate maintenance com controle por commit.",
      when: "Use-o em local ou coordinated rewriteable history, criando recovery ref e identificando base; evite uncoordinated rewrite de consumed commits.",
      context:
        "Uma feature branch mistura refactoring e behavior, contém fixups e unclear messages que dificultam review e revert.",
      application:
        "Author salva backup branch, inicia interactive rebase, ordena dependencies, edita e combina commits, divide staged hunks, resolve conflicts, escreve messages, roda tests, compara com backup e push with lease.",
      phrase:
        "Use Interactive Rebase para separar behavior de refactoring e combinar fixups antes do final review.",
      aliases: [
        "git rebase -i",
        "interactive history rewrite",
        "rebase interativo",
      ],
      confusion:
        "Interactive Rebase reescreve sequence; Amend substitui apenas most recent commit.",
    }),
  },
  "git-bisect": {
    en: content({
      definition:
        "Git Bisect is a Git search workflow that uses binary search between a known good commit and a known bad commit to identify the earliest commit where a reproducible behavior changes.",
      purpose:
        "It reduces the number of revisions that must be tested when diagnosing a regression across a long commit range.",
      when: "Use it when the condition is reliably classifiable at each tested commit, choosing valid good and bad boundaries and accounting for build changes, environment, flaky tests, skipped commits, submodules, migrations, and generated artifacts.",
      context:
        "A memory leak exists in the current release but not in a release from three months earlier, with hundreds of commits between them.",
      application:
        "The engineer writes a deterministic test with meaningful exit codes, verifies both boundary commits in the same environment, starts bisect, lets Git select midpoint commits, marks good, bad, or skip, identifies the first bad commit, inspects its dependency context, reproduces the cause, resets bisect state, and adds a regression test.",
      phrase:
        "Automate Git Bisect with the leak test only after confirming the chosen good and bad commits are classified reproducibly.",
      aliases: ["git bisect", "binary regression search", "bisseção do Git"],
      confusion:
        "Git Bisect locates the first commit correlated with a behavior change; it does not prove which line or assumption is the root cause without further investigation.",
    }),
    "pt-BR": content({
      definition:
        "Git Bisect é um Git search workflow que usa binary search entre known good commit e known bad commit para identificar earliest commit onde reproducible behavior muda.",
      purpose:
        "Ele reduz revisions testadas no diagnóstico de regression em long commit range.",
      when: "Use-o quando condition for reliably classifiable em cada commit, escolhendo valid boundaries e considerando build changes, environment, flaky tests, skipped commits, submodules, migrations e generated artifacts.",
      context:
        "Um memory leak existe no current release, não em release de três meses antes, com centenas de commits entre eles.",
      application:
        "Engineer escreve deterministic test, verifica boundaries, inicia bisect, classifica midpoint commits, encontra first bad, inspeciona context, reproduz cause, reseta bisect e adiciona regression test.",
      phrase:
        "Automatize Git Bisect somente após confirmar good e bad commits de forma reproduzível.",
      aliases: ["git bisect", "binary regression search", "bisseção do Git"],
      confusion:
        "Git Bisect localiza first correlated commit; não prova root cause sem investigation.",
    }),
  },
  "git-blame": {
    en: content({
      definition:
        "Git Blame is a Git inspection command that attributes each current line or line range in a file to the most recent commit that changed it, showing commit and author metadata for historical navigation.",
      purpose:
        "It provides a starting point for finding the change, rationale, review, and surrounding history behind current code.",
      when: "Use it to investigate why a line exists or find relevant commits, following the attributed commit and parent history, accounting for moves and copies, and avoiding its misuse as proof of fault or sole ownership.",
      context:
        "A surprising timeout value has no nearby explanation, and a maintainer needs the design discussion and operational constraints present when it changed.",
      application:
        "The maintainer blames the line with move detection, opens the attributed commit and pull request, compares its parent, reads the incident and dependency context, checks later edits, and contacts the current owning team rather than accusing the historical author.",
      phrase:
        "Use Git Blame to find the timeout's introducing commit and rationale, not to assign personal blame.",
      aliases: ["git blame", "line attribution", "atribuição de linhas"],
      confusion:
        "Git Blame shows the latest commit touching current lines; it does not necessarily identify the original author, present owner, or cause of a defect.",
    }),
    "pt-BR": content({
      definition:
        "Git Blame é um Git inspection command que atribui cada current line ou range ao most recent commit que a alterou, mostrando commit e author metadata.",
      purpose:
        "Ele oferece starting point para encontrar change, rationale, review e surrounding history do current code.",
      when: "Use-o para investigar por que line existe ou achar relevant commits, seguindo attributed commit e parents, considerando moves e copies e sem tratá-lo como proof de fault ou ownership.",
      context:
        "Um surprising timeout value não tem explanation e maintainer precisa do design discussion e operational constraints da change.",
      application:
        "Maintainer usa blame com move detection, abre commit e pull request, compara parent, lê incident context, verifica later edits e contata current owner, sem culpar historical author.",
      phrase:
        "Use Git Blame para encontrar introducing commit e rationale, não para atribuir culpa pessoal.",
      aliases: ["git blame", "line attribution", "atribuição de linhas"],
      confusion:
        "Git Blame mostra latest commit da current line; não prova original author, present owner ou defect cause.",
    }),
  },
  "git-tag": {
    en: content({
      definition:
        "Git Tag is a named reference, usually fixed to a particular commit, used to identify significant history points such as releases, migrations, or verified baselines; annotated tags also store a tag object with message, tagger, and optional signature.",
      purpose:
        "It gives stable human-readable identity to an exact commit so builds, deployments, dependencies, support, and audits can refer to the same immutable source state.",
      when: "Create annotated and signed tags for releases or governed milestones, following a naming and version policy, verifying the target and pipeline, protecting tag creation and deletion, publishing it deliberately, and never silently retargeting a consumed tag.",
      context:
        "A release pipeline must build version 4.2.0 from the exact reviewed commit and later prove which source produced every deployed artifact.",
      application:
        "Automation verifies protected main and checks, creates a signed annotated v4.2.0 tag at the approved commit, pushes it once, builds artifacts embedding commit and tag identity, publishes provenance, and issues a new version instead of moving the tag if a fix is required.",
      phrase:
        "Create the signed Git Tag only after release approval; do not move v4.2.0 after consumers can fetch it.",
      aliases: ["Git tag reference", "annotated tag", "tag do Git"],
      confusion:
        "A Git Tag normally identifies a fixed history point; a Branch is a movable reference whose tip advances with new commits.",
    }),
    "pt-BR": content({
      definition:
        "Git Tag é uma named reference geralmente fixa em particular commit para identificar releases, migrations ou verified baselines; annotated tags também guardam message, tagger e optional signature.",
      purpose:
        "Ela dá stable human-readable identity a exact commit para builds, deployments, dependencies, support e audits referirem o mesmo source state.",
      when: "Crie annotated signed tags em releases, seguindo naming e version policy, verificando target e pipeline, protegendo creation e deletion, publicando deliberadamente e nunca retargeting consumed tag.",
      context:
        "Uma release pipeline cria version 4.2.0 do exact reviewed commit e prova qual source gerou cada artifact.",
      application:
        "Automation verifica main e checks, cria signed annotated v4.2.0 no approved commit, faz push uma vez, gera artifacts com identity e publica provenance; fix exige new version.",
      phrase:
        "Crie signed Git Tag após release approval; não mova v4.2.0 depois de consumers buscarem.",
      aliases: ["Git tag reference", "annotated tag", "tag do Git"],
      confusion:
        "Git Tag identifica fixed point; Branch é movable reference que avança com commits.",
    }),
  },
  "release-branch": {
    en: content({
      definition:
        "Release Branch is a branch created or maintained to stabilize, ship, and support a particular release line independently from ongoing development.",
      purpose:
        "It isolates controlled release fixes, versioning, packaging, and verification while new features continue elsewhere and supported versions receive selected backports.",
      when: "Use one when the product has a stabilization window, multiple supported versions, regulated release validation, or long deployment lead time, defining creation point, allowed changes, owners, protection, version policy, backport and forward-merge rules, tests, tags, and retirement.",
      context:
        "Version 3.8 enters certification for several weeks while main begins 3.9 features and production still requires critical fixes to the 3.8 line.",
      application:
        "Maintainers cut release/3.8 from an approved commit, restrict it to reviewed fixes, version and build from protected history, cherry-pick only eligible commits with provenance, run the certification suite, merge fixes forward to main, tag releases, and retire the branch after support ends.",
      phrase:
        "Backport this fix to the Release Branch and merge it forward so the next development release cannot regress.",
      aliases: [
        "release line branch",
        "maintenance release branch",
        "branch de release",
      ],
      confusion:
        "A Release Branch stabilizes and supports a release line; a Feature Branch isolates development of one bounded change before integration.",
    }),
    "pt-BR": content({
      definition:
        "Release Branch é uma branch criada ou mantida para estabilizar, publicar e suportar particular release line independentemente de ongoing development.",
      purpose:
        "Ela isola controlled release fixes, versioning, packaging e verification enquanto features continuam e supported versions recebem backports.",
      when: "Use-a em stabilization window, multiple supported versions, regulated validation ou long deploy lead time, definindo creation point, allowed changes, owners, protection, version policy, backport, forward merge, tests, tags e retirement.",
      context:
        "Version 3.8 entra em certification por semanas enquanto main inicia 3.9 features e production precisa de critical fixes na 3.8.",
      application:
        "Maintainers cortam release/3.8, restringem changes, buildam protected history, cherry-pickam eligible fixes, rodam certification, mergeiam fixes forward, tagueiam e retiram branch após support.",
      phrase:
        "Faça backport à Release Branch e merge forward para next release não regredir.",
      aliases: [
        "release line branch",
        "maintenance release branch",
        "branch de release",
      ],
      confusion:
        "Release Branch estabiliza release line; Feature Branch isola uma bounded change.",
    }),
  },
  "feature-branch": {
    en: content({
      definition:
        "Feature Branch is a temporary branch that isolates the commits for one bounded feature, fix, or change from the shared integration branch until the work is reviewed and integrated.",
      purpose:
        "It lets contributors develop and publish work independently, run automation, discuss a focused diff, and protect the main line from incomplete changes.",
      when: "Use one when the team's workflow benefits from branch-based review, keeping it short-lived, narrowly scoped, current enough to integrate, tested, free of secrets, linked to context, and deleted after merge.",
      context:
        "A developer adds invoice export across code, tests, schema, and documentation without exposing unfinished behavior on main.",
      application:
        "The branch starts from current main, contains atomic commits for the one outcome, fetches main changes regularly without needless history churn, opens a pull request early, runs checks, receives review, integrates through the approved merge method, and is deleted after release tracking is linked.",
      phrase:
        "Keep the Feature Branch limited to invoice export; move the unrelated refactor to a separate reviewed change.",
      aliases: [
        "topic branch",
        "feature development branch",
        "branch de funcionalidade",
      ],
      confusion:
        "A Feature Branch isolates one temporary change; a Release Branch stabilizes and supports a version line across multiple fixes.",
    }),
    "pt-BR": content({
      definition:
        "Feature Branch é uma temporary branch que isola commits de uma bounded feature, fix ou change da shared integration branch até review e integration.",
      purpose:
        "Ela permite desenvolver e publicar work independentemente, rodar automation, discutir focused diff e proteger main de incomplete changes.",
      when: "Use-a em branch-based review, mantendo-a short-lived, narrowly scoped, atualizável, tested, sem secrets, ligada ao context e removida após merge.",
      context:
        "Um developer adiciona invoice export em code, tests, schema e docs sem expor unfinished behavior em main.",
      application:
        "A branch nasce de current main, contém atomic commits para one outcome, acompanha main sem churn, abre pull request cedo, roda checks, recebe review, integra pelo approved method e é deletada.",
      phrase:
        "Mantenha Feature Branch limitada a invoice export; mova unrelated refactor para separate change.",
      aliases: [
        "topic branch",
        "feature development branch",
        "branch de funcionalidade",
      ],
      confusion:
        "Feature Branch isola temporary change; Release Branch estabiliza version line com multiple fixes.",
    }),
  },
  "trunk-based-development": {
    en: content({
      definition:
        "Trunk-Based Development is a version-control practice in which developers integrate small changes into one shared trunk frequently, using very short-lived branches at most and keeping the trunk releasable through automation and incomplete-feature controls.",
      purpose:
        "It minimizes long-lived divergence and integration risk, shortens feedback, and makes the shared codebase the continuous source for testing and delivery.",
      when: "Adopt it when the team can invest in fast reliable CI, small changes, ownership, branch protection, feature flags or branch by abstraction, backward-compatible evolution, observability, and rapid repair; scale review without allowing branches to become long-lived substitutes.",
      context:
        "A product team releases many times per day and wants to avoid multi-week feature branches whose large merges delay feedback and combine unrelated risk.",
      application:
        "Developers split work into independently safe increments, integrate at least daily through reviewed short branches, hide incomplete user behavior behind governed flags, use expand-contract migrations, keep CI fast and mandatory, deploy trunk commits progressively, and revert or repair failures immediately.",
      phrase:
        "In Trunk-Based Development, integrate this backward-compatible slice today and keep the incomplete journey behind its expiring feature flag.",
      aliases: [
        "TBD workflow",
        "trunk-based workflow",
        "desenvolvimento baseado em trunk",
      ],
      confusion:
        "Trunk-Based Development emphasizes frequent integration into one shared line; Gitflow uses longer-lived development and release branch structures with more scheduled integration.",
    }),
    "pt-BR": content({
      definition:
        "Trunk-Based Development é uma version-control practice em que developers integram small changes frequentemente em shared trunk, usando no máximo very short-lived branches e mantendo trunk releasable.",
      purpose:
        "Ele minimiza long-lived divergence e integration risk, encurta feedback e torna shared codebase a continuous source para testing e delivery.",
      when: "Adote-o com fast reliable CI, small changes, ownership, branch protection, feature flags ou branch by abstraction, backward-compatible evolution, observability e rapid repair; não deixe review criar long-lived branches.",
      context:
        "Um product team releaseia várias vezes ao dia e evita multi-week feature branches cujos large merges atrasam feedback.",
      application:
        "Developers dividem safe increments, integram diariamente por reviewed short branches, ocultam incomplete behavior com governed flags, usam expand-contract migrations, mantêm mandatory CI e deployam progressivamente.",
      phrase:
        "Em Trunk-Based Development, integre backward-compatible slice hoje e mantenha incomplete journey atrás de expiring feature flag.",
      aliases: [
        "TBD workflow",
        "trunk-based workflow",
        "desenvolvimento baseado em trunk",
      ],
      confusion:
        "Trunk-Based Development integra frequentemente numa shared line; Gitflow usa longer-lived development e release branches.",
    }),
  },
  monorepo: {
    en: content({
      definition:
        "Monorepo is a repository strategy in which source for multiple applications, services, libraries, or packages is versioned in one shared repository and history.",
      purpose:
        "It can make cross-project changes atomic, standardize tooling, expose dependencies, and simplify reuse, discovery, and policy across an organization.",
      when: "Choose it when shared governance and coordinated changes outweigh repository scale and access complexity, designing project boundaries, ownership, dependency rules, affected builds, caching, sparse workflows, release independence, security, CI isolation, and history maintenance.",
      context:
        "A company maintains dozens of services and shared libraries that frequently change together, but running every test for every commit would take hours.",
      application:
        "The repository declares package ownership and dependency boundaries, computes affected projects from the change graph, uses hermetic builds and remote cache, restricts sensitive paths, versions and releases packages independently where needed, prevents undeclared coupling, and monitors CI fairness and scale.",
      phrase:
        "The Monorepo enables this atomic library-and-consumer change, but affected testing must include every dependent project in the graph.",
      aliases: [
        "monolithic repository",
        "single repository strategy",
        "monorrepositório",
      ],
      confusion:
        "A Monorepo stores multiple projects in one repository; a Monolith is an application architecture and can live in either one repository or many.",
    }),
    "pt-BR": content({
      definition:
        "Monorepo é uma repository strategy em que source de várias applications, services, libraries ou packages é versionado em um shared repository e history.",
      purpose:
        "Ele permite atomic cross-project changes, standardized tooling, visible dependencies e reuse, discovery e policy compartilhados.",
      when: "Escolha-o quando shared governance e coordinated changes compensarem scale e access complexity, projetando project boundaries, ownership, dependency rules, affected builds, cache, releases, security, CI isolation e history.",
      context:
        "Uma company mantém dezenas de services e shared libraries que mudam juntos, mas rodar todos os tests por commit levaria horas.",
      application:
        "Repository declara ownership e dependency boundaries, calcula affected projects, usa hermetic builds e remote cache, restringe sensitive paths, releaseia packages independentemente e monitora CI fairness.",
      phrase:
        "Monorepo permite atomic library-and-consumer change, mas affected testing inclui todos os dependent projects.",
      aliases: [
        "monolithic repository",
        "single repository strategy",
        "monorrepositório",
      ],
      confusion:
        "Monorepo guarda multiple projects num repository; Monolith é application architecture e pode viver em um ou vários repositories.",
    }),
  },
  polyrepo: {
    en: content({
      definition:
        "Polyrepo is a repository strategy in which an organization's applications, services, libraries, or components are divided among multiple independently managed version-control repositories.",
      purpose:
        "It gives projects separate access, history, tooling, release cadence, and lifecycle boundaries while reducing the operational scale of any one repository.",
      when: "Choose it when independent ownership, security, technology, or delivery boundaries are valuable, designing dependency publication, versioning, contract tests, coordinated changes, discoverability, templates, policy distribution, automation identity, archival, and incident-wide search.",
      context:
        "Independent service teams release on different schedules and require separate permissions, but all depend on a shared authentication library and API contracts.",
      application:
        "Each repository has a clear owner and pipeline, shared libraries publish signed semantic versions, services update through automated proposals, contract changes use compatibility and staged rollout, organization templates distribute policy, a catalog tracks relationships, and coordinated changes have an explicit migration plan.",
      phrase:
        "In this Polyrepo model, publish the compatible library version first and track consumer adoption before removing the old API.",
      aliases: [
        "multiple repository strategy",
        "multi-repo",
        "polirrepositório",
      ],
      confusion:
        "Polyrepo separates projects across repositories; Microservices is an architectural style and does not require one repository per service.",
    }),
    "pt-BR": content({
      definition:
        "Polyrepo é uma repository strategy em que applications, services, libraries ou components de uma organization ficam divididos entre multiple independently managed repositories.",
      purpose:
        "Ele dá a projects access, history, tooling, release cadence e lifecycle boundaries separados e reduz operational scale de um repository.",
      when: "Escolha-o quando independent ownership, security, technology ou delivery boundaries importarem, projetando dependency publication, versioning, contract tests, coordinated changes, discovery, templates, policy distribution, automation, archival e search.",
      context:
        "Independent service teams releaseiam em cadences diferentes e usam separate permissions, mas dependem de shared authentication library e API contracts.",
      application:
        "Cada repository tem owner e pipeline, libraries publicam signed semantic versions, services recebem automated updates, contract changes têm staged rollout, templates distribuem policy e catalog rastreia relationships.",
      phrase:
        "Neste Polyrepo, publique compatible library version e acompanhe consumer adoption antes de remover old API.",
      aliases: [
        "multiple repository strategy",
        "multi-repo",
        "polirrepositório",
      ],
      confusion:
        "Polyrepo separa projects em repositories; Microservices é architectural style e não exige one repo per service.",
    }),
  },
};
