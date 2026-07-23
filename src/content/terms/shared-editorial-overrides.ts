import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const sharedEditorialOverrides: Record<string, EditorialPair> = {
  port: {
    en: content({
      definition:
        "Port commonly means either a numbered TCP or UDP service endpoint on a host, or an application-owned interface used by Hexagonal Architecture to communicate across a boundary.",
      purpose:
        "A network port directs traffic to the correct process; an architectural port defines what the application offers or requires without exposing a specific adapter.",
      when: "State the context: configure network ports for listeners and firewall rules, and define architectural ports where core behavior must remain independent of external technology.",
      context:
        "A payment API listens on TCP port 443, while its application core calls a PaymentGateway port implemented by a provider adapter.",
      application:
        "Infrastructure routes HTTPS to the service's network port; application composition injects an adapter into the architectural port.",
      phrase:
        "“Open the network port only at the gateway, and keep the payment provider behind the application port.”",
      aliases: [
        "network port",
        "tcp port",
        "udp port",
        "architecture port",
        "hexagonal port",
        "porta de rede",
        "porta arquitetural",
      ],
      confusion:
        "A network port is a transport-layer number; a Hexagonal Architecture port is a software interaction contract.",
    }),
    "pt-BR": content({
      definition:
        "Port significa um endpoint numérico TCP ou UDP em um host ou uma interface pertencente à aplicação usada na Hexagonal Architecture.",
      purpose:
        "Network port direciona tráfego ao processo; architectural port define o que a aplicação oferece ou exige sem expor adapter específico.",
      when: "Declare o contexto: configure network ports para listeners e firewall e defina architecture ports para independência tecnológica do core.",
      context:
        "Uma API escuta TCP 443, enquanto seu core chama PaymentGateway port implementada por provider adapter.",
      application:
        "Infraestrutura roteia HTTPS à network port; a composição injeta um adapter na architectural port.",
      phrase:
        "“Abra a network port apenas no gateway e mantenha o provider atrás da application port.”",
      aliases: [
        "network port",
        "tcp port",
        "udp port",
        "architecture port",
        "hexagonal port",
        "porta de rede",
        "porta arquitetural",
      ],
      confusion:
        "Network port é número da camada de transporte; port hexagonal é contrato de interação de software.",
    }),
  },
  repository: {
    en: content({
      definition:
        "Repository commonly means either a Git data store containing versioned objects and references, or an application abstraction that provides domain-oriented access to persisted objects.",
      purpose:
        "A Git repository preserves and exchanges project history; the Repository pattern hides storage mechanics behind operations expressed in the application's domain language.",
      when: "State the context explicitly: use a Git repository for version control, and a domain repository when application logic must load or save aggregates without depending on database details.",
      context:
        "An order service's source lives in a Git repository, while its PlaceOrder use case calls an OrderRepository interface to persist domain orders.",
      application:
        "Developers review commits in the Git repository; at runtime a database adapter implements OrderRepository.findById and save without exposing ORM queries to the use case.",
      phrase:
        "“The code repository stores our history; the order repository in that code isolates domain persistence.”",
      aliases: [
        "git repository",
        "source repository",
        "repository pattern",
        "domain repository",
        "repositório git",
        "repositório de domínio",
      ],
      confusion:
        "Git repository and Repository pattern share a name but solve different problems: versioned project storage versus an application persistence boundary.",
    }),
    "pt-BR": content({
      definition:
        "Repository normalmente significa um armazenamento Git com objects e referências versionados ou uma abstração da aplicação para acesso a objetos persistidos do domínio.",
      purpose:
        "Git repository preserva e troca histórico do projeto; o Repository pattern esconde detalhes de armazenamento atrás de operações na linguagem do domínio.",
      when: "Declare o contexto: use Git repository em controle de versão e domain repository quando a aplicação precisar carregar ou salvar aggregates sem depender do banco.",
      context:
        "O código de um serviço vive em Git repository, enquanto o use case PlaceOrder chama a interface OrderRepository para persistir pedidos.",
      application:
        "Desenvolvedores revisam commits no Git repository; em runtime, um adapter implementa findById e save sem expor queries do ORM ao use case.",
      phrase:
        "“O code repository guarda nosso histórico; o order repository dentro dele isola a persistência do domínio.”",
      aliases: [
        "git repository",
        "source repository",
        "repository pattern",
        "domain repository",
        "repositório git",
        "repositório de domínio",
      ],
      confusion:
        "Git repository e Repository pattern compartilham o nome, mas tratam de histórico do projeto e fronteira de persistência, respectivamente.",
    }),
  },
  commit: {
    en: content({
      definition:
        "Commit means either recording a new immutable snapshot in Git history or successfully completing a database transaction so its changes become durable.",
      purpose:
        "A Git commit preserves one project state with parents and metadata; a database commit establishes the final acceptance boundary of an atomic transaction.",
      when: "Create a Git commit for a coherent reviewed change, and issue a database commit only after every operation in the transaction has succeeded.",
      context:
        "A developer changes transfer logic in source code while the running application performs account updates inside a database transaction.",
      application:
        "The developer commits the tested code to Git; at runtime the database commits debit, credit, and ledger writes together or rolls them all back.",
      phrase:
        "“Keep the source change in one Git commit, but let the database commit only after the complete transfer succeeds.”",
      aliases: [
        "git commit",
        "database commit",
        "transaction commit",
        "confirmação de transação",
        "registro de versão",
      ],
      confusion:
        "A Git commit records version-control history and can be shared; a database commit finalizes transactional data changes and has unrelated concurrency guarantees.",
    }),
    "pt-BR": content({
      definition:
        "Commit significa registrar um snapshot imutável no histórico Git ou concluir uma database transaction para tornar suas mudanças duráveis.",
      purpose:
        "Git commit preserva um estado do projeto com pais e metadados; database commit estabelece a aceitação final de uma transaction atômica.",
      when: "Crie Git commit para uma mudança coerente e revisada e faça database commit somente após todas as operações da transaction funcionarem.",
      context:
        "Uma pessoa altera no código a lógica de transferência, enquanto a aplicação executa atualizações de contas em uma database transaction.",
      application:
        "A pessoa commita o código testado no Git; em runtime, o banco confirma débito, crédito e ledger juntos ou desfaz tudo.",
      phrase:
        "“Mantenha a mudança em um Git commit, mas deixe o database commit ocorrer só após a transferência completa funcionar.”",
      aliases: [
        "git commit",
        "database commit",
        "transaction commit",
        "confirmação de transação",
        "registro de versão",
      ],
      confusion:
        "Git commit registra histórico compartilhável; database commit finaliza mudanças transacionais com garantias de concorrência diferentes.",
    }),
  },
  release: {
    en: content({
      definition:
        "A release is a named version or capability set approved for an audience; in Git workflows it is commonly anchored to a tag and accompanied by artifacts and release notes.",
      purpose:
        "It connects a product availability decision with exact source history, built artifacts, compatibility information, communication, support, and rollout controls.",
      when: "Create a release when tested changes are ready for users or consumers, recording the source tag, artifact digests, contents, migration needs, known limitations, and recovery plan.",
      context:
        "Version 2.4.0 has passed testing, but customer availability must coordinate documentation, support preparation, artifacts, and a gradual feature rollout.",
      application:
        "The pipeline tags the approved Git commit, publishes immutable artifacts and notes, and product operations enables the release gradually while monitoring health.",
      phrase:
        "“The Git tag identifies the source, but the release is complete only when artifacts, notes, support, and rollout are ready.”",
      aliases: [
        "software release",
        "product release",
        "git release",
        "released version",
        "lançamento de versão",
      ],
      confusion:
        "A Git tag names a history point; a deployment installs software; a release is the broader decision and package that makes a version available.",
    }),
    "pt-BR": content({
      definition:
        "Release é uma versão ou conjunto de capacidades aprovado para um público; em Git ela costuma ser ancorada em tag e acompanhada de artefatos e notas.",
      purpose:
        "Ela conecta a decisão de disponibilidade ao histórico exato, artefatos, compatibilidade, comunicação, suporte e controles de rollout.",
      when: "Crie release quando mudanças testadas estiverem prontas, registrando source tag, digests, conteúdo, migrations, limitações e recuperação.",
      context:
        "A versão 2.4.0 passou nos testes, mas sua disponibilidade exige documentação, suporte, artefatos e rollout gradual.",
      application:
        "A pipeline cria tag no commit, publica artefatos e notas imutáveis e produto habilita a release gradualmente monitorando a saúde.",
      phrase:
        "“A Git tag identifica a origem, mas a release só fica completa com artefatos, notas, suporte e rollout prontos.”",
      aliases: [
        "software release",
        "product release",
        "git release",
        "released version",
        "lançamento de versão",
      ],
      confusion:
        "Git tag nomeia um ponto; deployment instala software; release é a decisão e o pacote mais amplos que disponibilizam a versão.",
    }),
  },
};
