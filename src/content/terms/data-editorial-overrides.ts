import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const dataEditorialOverrides: Record<string, EditorialPair> = {
  data: {
    en: content({
      definition:
        "Data is a recorded representation of observations, events, measurements, attributes, or assertions that a system can store, transmit, interpret, and process within a defined context.",
      purpose:
        "It supplies evidence and state for operations, decisions, automation, analysis, and learning when its meaning, quality, provenance, and permitted use are understood.",
      when: "Treat data as a designed asset whenever collecting or using it, defining semantics, source, ownership, identity, granularity, quality, sensitivity, lineage, retention, access, and deletion before choosing storage or tooling.",
      context:
        "A commerce company records orders, customer actions, inventory movements, and support outcomes, but inconsistent identifiers and meanings prevent reliable analysis.",
      application:
        "Owners define business terms and schemas, identify authoritative sources, validate quality, classify sensitive fields, capture lineage, enforce access and retention, and publish fit-for-purpose products for operational and analytical uses.",
      phrase:
        "Before joining this Data, confirm that customer_id has the same identity scope, source, and effective time in both datasets.",
      aliases: ["recorded information", "digital data", "dados"],
      confusion:
        "Data is a recorded representation that requires context; Information is the meaning or understanding produced when data is interpreted for a purpose.",
    }),
    "pt-BR": content({
      definition:
        "Data é uma representação registrada de observations, events, measurements, attributes ou assertions que um system armazena, transmite, interpreta e processa em context definido.",
      purpose:
        "Ela fornece evidence e state para operations, decisions, automation, analysis e learning quando meaning, quality, provenance e permitted use são conhecidos.",
      when: "Trate data como designed asset ao coletá-la ou usá-la, definindo semantics, source, ownership, identity, granularity, quality, sensitivity, lineage, retention, access e deletion.",
      context:
        "Uma commerce company registra orders, customer actions, inventory movements e support outcomes, mas IDs e meanings inconsistentes impedem analysis confiável.",
      application:
        "Owners definem business terms e schemas, identificam authoritative sources, validam quality, classificam sensitive fields, capturam lineage, aplicam access e retention e publicam data products.",
      phrase:
        "Antes de juntar esta Data, confirme que customer_id tem o mesmo identity scope, source e effective time nos dois datasets.",
      aliases: ["recorded information", "digital data", "dados"],
      confusion:
        "Data é representação registrada que exige context; Information é meaning obtido quando data é interpretada para um purpose.",
    }),
  },
  dataset: {
    en: content({
      definition:
        "Dataset is an identifiable collection of related data organized and published as a unit with a defined schema or structure, scope, provenance, version, and intended use.",
      purpose:
        "It gives data work a bounded artifact that can be discovered, validated, versioned, accessed, compared, governed, and reproduced.",
      when: "Create or consume a dataset for analysis, training, exchange, or operations only after defining population, grain, fields, time coverage, source, quality, sensitivity, licensing, splits, update cadence, and owner.",
      context:
        "A fraud team trains a model from transactions, labels, account history, and time-based outcomes collected from several operational systems.",
      application:
        "The team publishes a versioned dataset with one row per decision, event-time cutoffs that prevent leakage, schema and statistics, lineage, consent restrictions, quality checks, train-validation-test splits, and a data card.",
      phrase:
        "This Dataset version fixes the label window and feature cutoff so the experiment can be reproduced without future-data leakage.",
      aliases: ["data set", "data collection", "conjunto de dados"],
      confusion:
        "A Dataset is a bounded collection with defined scope and metadata; a Database is a managed system for storing and querying data across ongoing operations.",
    }),
    "pt-BR": content({
      definition:
        "Dataset é uma coleção identificável de related data organizada e publicada como unidade com schema ou structure, scope, provenance, version e intended use definidos.",
      purpose:
        "Ele dá ao data work um bounded artifact que pode ser discovered, validated, versioned, accessed, compared, governed e reproduced.",
      when: "Crie ou consuma dataset para analysis, training, exchange ou operations após definir population, grain, fields, time coverage, source, quality, sensitivity, licensing, update cadence e owner.",
      context:
        "Um fraud team treina model com transactions, labels, account history e time-based outcomes de vários operational systems.",
      application:
        "O time publica versioned dataset com uma row por decision, event-time cutoffs contra leakage, schema, statistics, lineage, restrictions, quality checks, splits e data card.",
      phrase:
        "Esta Dataset version fixa label window e feature cutoff para reproduzir experiment sem future-data leakage.",
      aliases: ["data set", "data collection", "conjunto de dados"],
      confusion:
        "Dataset é coleção limitada com scope e metadata; Database é managed system para storage e queries contínuas.",
    }),
  },
  "data-pipeline": {
    en: content({
      definition:
        "Data Pipeline is an operated sequence of ingestion, validation, transformation, movement, and publication stages that carries data from sources to defined consumers or storage products.",
      purpose:
        "It makes recurring data flow automated and observable while enforcing contracts, quality, lineage, timeliness, security, and recovery between stages.",
      when: "Build one when data must move or change repeatedly across systems, defining source and target contracts, batch or stream semantics, event time, checkpoints, idempotency, ordering, backfill, quality gates, ownership, and service objectives.",
      context:
        "Commerce events from applications must become cleaned order facts for reporting every hour despite duplicates, late arrivals, schema changes, and job failures.",
      application:
        "The pipeline ingests immutable events, validates contract versions, deduplicates by event ID, checkpoints progress, transforms by event time, quarantines invalid records, publishes partitioned facts, tracks lineage and freshness, and supports idempotent backfill.",
      phrase:
        "The Data Pipeline is healthy only when the published order facts meet freshness and quality objectives, not merely when the job exits successfully.",
      aliases: [
        "data processing pipeline",
        "data flow pipeline",
        "pipeline de dados",
      ],
      confusion:
        "A Data Pipeline is the operated end-to-end flow; a data transformation is one stage that changes representation or meaning within that flow.",
    }),
    "pt-BR": content({
      definition:
        "Data Pipeline é uma sequência operada de ingestion, validation, transformation, movement e publication stages que leva data de sources a consumers ou storage products definidos.",
      purpose:
        "Ela automatiza recurring data flow e aplica contracts, quality, lineage, timeliness, security e recovery entre stages.",
      when: "Crie-a quando data precisar mover ou mudar repetidamente, definindo contracts, batch ou stream semantics, event time, checkpoints, idempotency, ordering, backfill, quality gates, ownership e objectives.",
      context:
        "Commerce events viram cleaned order facts por hora apesar de duplicates, late arrivals, schema changes e job failures.",
      application:
        "Pipeline ingere immutable events, valida versions, deduplica por event ID, faz checkpoint, transforma por event time, quarentena invalid records, publica partitioned facts e suporta idempotent backfill.",
      phrase:
        "Data Pipeline está healthy quando published facts cumprem freshness e quality, não só quando job termina com sucesso.",
      aliases: [
        "data processing pipeline",
        "data flow pipeline",
        "pipeline de dados",
      ],
      confusion:
        "Data Pipeline é end-to-end operated flow; data transformation é um stage que muda representation ou meaning.",
    }),
  },
  etl: {
    en: content({
      definition:
        "ETL, short for Extract, Transform, Load, is a data-integration sequence that extracts data from sources, transforms it into the required target model before arrival, and loads the prepared result into the destination.",
      purpose:
        "It centralizes cleansing and conformance before target publication, useful when the destination expects controlled structure or should not process raw sensitive source data.",
      when: "Choose ETL when transformation must occur before destination loading due to target limits, privacy, bandwidth, quality gates, or a stable warehouse model, designing incremental extraction, staging, lineage, errors, and replay.",
      context:
        "A regulatory reporting warehouse accepts only validated standardized account records and must never receive source fields outside the approved reporting model.",
      application:
        "The job extracts changes by durable watermark, stages them securely, validates and maps codes, masks excluded fields, rejects bad records with reasons, loads idempotently, reconciles counts, and records lineage from source to report.",
      phrase:
        "This ETL flow removes disallowed fields before Load because the reporting warehouse must not retain the raw source record.",
      aliases: [
        "Extract Transform Load",
        "extract-transform-load pipeline",
        "extrair transformar carregar",
      ],
      confusion:
        "ETL transforms before loading into the target; ELT loads source-shaped data first and performs transformations using the target platform.",
    }),
    "pt-BR": content({
      definition:
        "ETL, sigla de Extract, Transform, Load, é uma data-integration sequence que extrai data, transforma no target model antes da chegada e carrega result preparado no destination.",
      purpose:
        "Ele centraliza cleansing e conformance antes da target publication, útil quando destination exige controlled structure ou não pode processar raw sensitive data.",
      when: "Escolha ETL quando transformation precisa ocorrer antes do load por target limits, privacy, bandwidth, quality gates ou stable warehouse model, planejando incremental extraction, staging, errors e replay.",
      context:
        "Um regulatory reporting warehouse aceita somente standardized account records e não pode receber source fields fora do approved model.",
      application:
        "O job extrai changes por durable watermark, faz secure staging, valida e mapeia codes, mascara fields, rejeita bad records, carrega idempotently e reconcilia counts e lineage.",
      phrase:
        "Este ETL remove disallowed fields antes de Load porque reporting warehouse não pode reter raw source record.",
      aliases: [
        "Extract Transform Load",
        "extract-transform-load pipeline",
        "extrair transformar carregar",
      ],
      confusion:
        "ETL transforma antes de carregar no target; ELT carrega source-shaped data primeiro e transforma no target platform.",
    }),
  },
  elt: {
    en: content({
      definition:
        "ELT, short for Extract, Load, Transform, is a data-integration sequence that extracts source data, loads it into a capable target platform, and performs transformations there into consumable models.",
      purpose:
        "It preserves flexible source-level data and uses scalable destination compute so multiple governed transformations can be developed and recomputed from the loaded foundation.",
      when: "Choose ELT when the target can securely store and process source-shaped data, rapid ingestion and reusability matter, and access, cost, sensitive fields, schema evolution, quality, lineage, and model orchestration are governed.",
      context:
        "A cloud warehouse receives application and billing changes continuously, and analytics teams need different curated models without re-extracting operational sources.",
      application:
        "The platform extracts incrementally, loads immutable partitioned raw tables with metadata, restricts sensitive columns, tests source contracts, builds version-controlled transformation models, records lineage, and rebuilds models idempotently when logic changes.",
      phrase:
        "ELT preserves the governed raw layer once, then rebuilds each analytical model inside the warehouse from versioned transformations.",
      aliases: [
        "Extract Load Transform",
        "extract-load-transform pipeline",
        "extrair carregar transformar",
      ],
      confusion:
        "ELT transforms after loading into the target platform; ETL prepares the transformed representation before the target load.",
    }),
    "pt-BR": content({
      definition:
        "ELT, sigla de Extract, Load, Transform, é uma data-integration sequence que extrai source data, carrega em capable target platform e transforma ali em consumable models.",
      purpose:
        "Ele preserva flexible source-level data e usa scalable destination compute para vários governed models serem desenvolvidos e recomputados.",
      when: "Escolha ELT quando target puder armazenar e processar source-shaped data com segurança e quando rapid ingestion e reuse importarem, governando access, cost, sensitive fields, schema, quality e lineage.",
      context:
        "Um cloud warehouse recebe application e billing changes, e analytics teams criam curated models sem reextrair operational sources.",
      application:
        "A platform extrai incrementalmente, carrega immutable raw tables com metadata, restringe sensitive columns, testa source contracts, cria version-controlled models e registra lineage.",
      phrase:
        "ELT preserva governed raw layer uma vez e reconstrói analytical models no warehouse por versioned transformations.",
      aliases: [
        "Extract Load Transform",
        "extract-load-transform pipeline",
        "extrair carregar transformar",
      ],
      confusion:
        "ELT transforma depois do load no target; ETL prepara transformed representation antes do target load.",
    }),
  },
  "data-warehouse": {
    en: content({
      definition:
        "Data Warehouse is a governed analytical data system that integrates historical data from multiple sources into modeled, query-optimized structures for reporting, analysis, and decision support.",
      purpose:
        "It creates consistent business measures and durable history outside operational workloads so organizations can compare performance across time and domains.",
      when: "Use one for repeatable cross-source analytics, designing facts, dimensions, grain, history, ingestion, transformation, semantic definitions, workload isolation, access, quality, lineage, cost, and recovery.",
      context:
        "Finance and sales calculate revenue differently from application databases whose schemas and current-state records were designed for transactions rather than historical comparison.",
      application:
        "The warehouse loads source changes, conforms customer and product dimensions, publishes order facts at declared grain, preserves slowly changing history, tests reconciled measures, applies row and column security, and exposes a governed semantic layer.",
      phrase:
        "The Data Warehouse revenue fact has one row per recognized charge, not one row per mutable order.",
      aliases: [
        "enterprise data warehouse",
        "analytical warehouse",
        "armazém de dados",
      ],
      confusion:
        "A Data Warehouse stores curated modeled data for analytics; a Data Lake typically retains broader source-shaped structured and unstructured data for multiple processing uses.",
    }),
    "pt-BR": content({
      definition:
        "Data Warehouse é um governed analytical data system que integra historical data de várias sources em structures modeladas e query-optimized para reporting, analysis e decisions.",
      purpose:
        "Ele cria consistent business measures e durable history fora de operational workloads para comparação entre tempo e domains.",
      when: "Use-o em repeatable cross-source analytics, projetando facts, dimensions, grain, history, ingestion, semantic definitions, isolation, access, quality, lineage, cost e recovery.",
      context:
        "Finance e sales calculam revenue de modos diferentes em application databases feitos para transactions e current state.",
      application:
        "Warehouse carrega changes, conforma dimensions, publica order facts no grain declarado, preserva slowly changing history, reconcilia measures, aplica security e semantic layer.",
      phrase:
        "O revenue fact do Data Warehouse tem uma row por recognized charge, não por mutable order.",
      aliases: [
        "enterprise data warehouse",
        "analytical warehouse",
        "armazém de dados",
      ],
      confusion:
        "Data Warehouse guarda curated modeled analytics; Data Lake retém data mais ampla e source-shaped para vários processing uses.",
    }),
  },
  "data-lake": {
    en: content({
      definition:
        "Data Lake is a scalable repository that stores large volumes of structured, semi-structured, and unstructured data in source-aligned or lightly processed forms for diverse future processing and analysis.",
      purpose:
        "It preserves detailed data economically and decouples ingestion from later modeling so different workloads can reuse the same governed foundation.",
      when: "Use one when retaining varied high-volume data serves analytics, science, machine learning, archive, or reprocessing, while enforcing cataloging, zones, schema handling, quality, security, lineage, lifecycle, cost, and deletion.",
      context:
        "A media platform retains click events, logs, images, transcripts, and operational snapshots for investigations and models not known at ingestion time.",
      application:
        "The lake writes immutable partitioned objects with source and event metadata, separates landing, validated and curated zones, registers schemas and ownership, restricts sensitive data, compacts files, applies retention, and monitors unusable orphan data.",
      phrase:
        "Landing data in the Data Lake is not publication; consumers use the validated zone with known schema, owner, and quality.",
      aliases: ["enterprise data lake", "raw data repository", "lago de dados"],
      confusion:
        "A Data Lake is a governed repository for varied data; an unmanaged collection of files without discoverability, quality, or ownership is a data swamp.",
    }),
    "pt-BR": content({
      definition:
        "Data Lake é um scalable repository que armazena grande volume de structured, semi-structured e unstructured data em forms source-aligned ou pouco processadas para future analysis.",
      purpose:
        "Ele preserva detailed data economicamente e desacopla ingestion de later modeling para workloads reutilizarem a mesma governed foundation.",
      when: "Use-o quando varied high-volume data servir analytics, science, ML, archive ou reprocessing, governando catalog, zones, schema, quality, security, lineage, lifecycle, cost e deletion.",
      context:
        "Uma media platform retém click events, logs, images, transcripts e snapshots para investigations e models ainda desconhecidos.",
      application:
        "Lake grava immutable partitioned objects com metadata, separa landing, validated e curated zones, registra schemas e owners, restringe sensitive data, compacta files e aplica retention.",
      phrase:
        "Colocar data no Data Lake não é publication; consumers usam validated zone com schema, owner e quality.",
      aliases: ["enterprise data lake", "raw data repository", "lago de dados"],
      confusion:
        "Data Lake é governed repository; files sem discoverability, quality ou ownership formam data swamp.",
    }),
  },
  "data-lakehouse": {
    en: content({
      definition:
        "Data Lakehouse is an analytical architecture that adds table metadata, transactional guarantees, schema controls, governance, and query optimization to data stored in open or lake-oriented object storage.",
      purpose:
        "It seeks to combine a lake's scalable multi-format storage with warehouse-like reliable tables and performance for analytics and data engineering on one foundation.",
      when: "Choose it when open object storage and shared analytical data need reliable concurrent tables, evaluating table format, engine interoperability, catalogs, transactions, compaction, indexing, governance, workload isolation, and operational maturity.",
      context:
        "Data engineering and analytics teams duplicate the same events between a low-cost lake and a separate warehouse solely to gain consistent tables and interactive queries.",
      application:
        "The platform adopts an open table format with snapshots and atomic commits, central catalog and access policy, schema evolution, compaction and clustering, multiple compatible engines, quality layers, and measured workload objectives.",
      phrase:
        "The Data Lakehouse table snapshot gives readers a consistent version while writers compact underlying object files.",
      aliases: [
        "lakehouse architecture",
        "analytical lakehouse",
        "arquitetura lakehouse",
      ],
      confusion:
        "A Data Lakehouse adds managed table semantics and query capabilities over lake storage; a Data Lake alone does not inherently provide those warehouse-like guarantees.",
    }),
    "pt-BR": content({
      definition:
        "Data Lakehouse é uma analytical architecture que adiciona table metadata, transactional guarantees, schema controls, governance e query optimization a data em object storage.",
      purpose:
        "Ela combina scalable multi-format storage de lake com reliable tables e warehouse-like performance numa foundation.",
      when: "Escolha-a quando open object storage precisar de reliable concurrent tables, avaliando table format, engine interoperability, catalogs, transactions, compaction, governance e workload isolation.",
      context:
        "Data engineering e analytics duplicam events entre low-cost lake e warehouse apenas para obter consistent tables e interactive queries.",
      application:
        "A platform adota open table format com snapshots e atomic commits, central catalog, schema evolution, compaction, multiple engines, quality layers e measured objectives.",
      phrase:
        "O table snapshot do Data Lakehouse oferece consistent version enquanto writers compactam object files.",
      aliases: [
        "lakehouse architecture",
        "analytical lakehouse",
        "arquitetura lakehouse",
      ],
      confusion:
        "Data Lakehouse adiciona managed table semantics ao lake storage; Data Lake sozinho não garante warehouse-like behavior.",
    }),
  },
  "data-mart": {
    en: content({
      definition:
        "Data Mart is a curated analytical subset organized for a particular business domain, department, or decision area with focused facts, dimensions, measures, and access.",
      purpose:
        "It gives a defined audience simpler and faster access to governed domain data without exposing the complexity of an entire analytical platform.",
      when: "Create one when a domain needs stable reusable analytical products, deriving it from governed sources and defining ownership, grain, metrics, refresh, quality, lineage, security, cost, and consistency with enterprise definitions.",
      context:
        "Marketing repeatedly joins campaign, channel, spend, lead, and conversion tables differently and produces conflicting acquisition measures.",
      application:
        "The marketing mart publishes campaign facts and conformed channel dimensions, implements approved attribution measures, refreshes on a service objective, validates totals, documents lineage, restricts customer fields, and exposes semantic models.",
      phrase:
        "Use the Marketing Data Mart's governed conversion measure instead of rebuilding attribution in each dashboard.",
      aliases: [
        "departmental data mart",
        "domain analytical mart",
        "mercado de dados",
      ],
      confusion:
        "A Data Mart is a domain-focused analytical subset; a Data Warehouse is the broader integrated analytical foundation from which dependent marts may be built.",
    }),
    "pt-BR": content({
      definition:
        "Data Mart é um curated analytical subset organizado para business domain, department ou decision area com facts, dimensions, measures e access focados.",
      purpose:
        "Ele dá a audience definida acesso simples e rápido a governed domain data sem expor toda analytical platform.",
      when: "Crie-o quando domain precisar de stable reusable analytical products, derivando de governed sources e definindo ownership, grain, metrics, refresh, quality, lineage, security e consistency.",
      context:
        "Marketing combina campaign, channel, spend, lead e conversion tables de modos diferentes e gera acquisition measures conflitantes.",
      application:
        "Marketing mart publica campaign facts e conformed dimensions, aplica attribution measures, cumpre refresh objective, valida totals, documenta lineage e restringe customer fields.",
      phrase:
        "Use governed conversion measure do Marketing Data Mart em vez de refazer attribution em cada dashboard.",
      aliases: [
        "departmental data mart",
        "domain analytical mart",
        "mercado de dados",
      ],
      confusion:
        "Data Mart é analytical subset por domain; Data Warehouse é foundation integrada mais ampla.",
    }),
  },
  "data-modeling": {
    en: content({
      definition:
        "Data Modeling is the practice of defining data entities, attributes, identities, relationships, constraints, time behavior, and representations to support specified operational or analytical uses.",
      purpose:
        "It makes business meaning and integrity explicit before physical storage choices, reducing ambiguity and enabling consistent implementation, exchange, and analysis.",
      when: "Model data when designing a system, integration, warehouse, or migration, moving between conceptual, logical, and physical views and validating each against real queries, changes, volumes, governance, and lifecycle.",
      context:
        "A subscription product must distinguish customer, account, plan, entitlement, invoice, and time-varying membership instead of storing them in one ambiguous record.",
      application:
        "The team defines identities and cardinalities, effective and transaction time, invariants and optionality, reviews examples with domain experts, maps the logical model to storage and contracts, and tests critical access patterns.",
      phrase:
        "Data Modeling separates account ownership from subscription entitlement because they change independently and answer different questions.",
      aliases: [
        "data model design",
        "information modeling",
        "modelagem de dados",
      ],
      confusion:
        "Data Modeling defines meaning, relationships, and representation; Database Schema is a concrete structural implementation in one database system.",
    }),
    "pt-BR": content({
      definition:
        "Data Modeling é a prática de definir entities, attributes, identities, relationships, constraints, time behavior e representations para operational ou analytical uses.",
      purpose:
        "Ela explicita business meaning e integrity antes de physical storage choices, reduzindo ambiguity e permitindo implementation, exchange e analysis consistentes.",
      when: "Modele ao projetar system, integration, warehouse ou migration, passando por conceptual, logical e physical views e validando queries, changes, volumes, governance e lifecycle.",
      context:
        "Um subscription product distingue customer, account, plan, entitlement, invoice e time-varying membership em vez de ambiguous record único.",
      application:
        "O time define identities, cardinalities, effective time, invariants e optionality, revisa examples, mapeia logical model a storage e contracts e testa access patterns.",
      phrase:
        "Data Modeling separa account ownership de subscription entitlement porque mudam independentemente.",
      aliases: [
        "data model design",
        "information modeling",
        "modelagem de dados",
      ],
      confusion:
        "Data Modeling define meaning e relationships; Database Schema é structural implementation concreta num database.",
    }),
  },
  "data-governance": {
    en: content({
      definition:
        "Data Governance is the decision system of roles, policies, standards, processes, and accountability that directs how an organization defines, creates, accesses, protects, shares, retains, and disposes of data.",
      purpose:
        "It makes data ownership and acceptable use enforceable so quality, security, privacy, compliance, and business meaning remain trustworthy across domains.",
      when: "Establish it wherever data crosses teams or carries material risk, assigning decision rights, owners and stewards, classification, catalog, quality rules, access, lineage, retention, exceptions, and measurable outcomes.",
      context:
        "Customer identifiers and revenue measures differ across departments, while no owner can approve definitions or resolve quality and access conflicts.",
      application:
        "A governance council delegates domain decisions, owners publish definitions and controls, stewards monitor quality, platforms automate lineage and access, exceptions expire, and metrics track resolution and adoption.",
      phrase:
        "Data Governance assigns one accountable owner to approve the customer definition and resolve cross-domain exceptions.",
      aliases: [
        "enterprise data governance",
        "data decision governance",
        "governança de dados",
      ],
      confusion:
        "Data Governance defines decision rights and controls; Data Management performs the operational work of storing, moving, protecting, and maintaining data.",
    }),
    "pt-BR": content({
      definition:
        "Data Governance é o decision system de roles, policies, standards, processes e accountability que dirige como organization define, cria, acessa, protege, compartilha, retém e elimina data.",
      purpose:
        "Ela torna data ownership e acceptable use enforceable para quality, security, privacy, compliance e business meaning confiáveis entre domains.",
      when: "Estabeleça-a onde data cruza teams ou traz risk, atribuindo decision rights, owners, stewards, classification, catalog, quality rules, access, lineage, retention e outcomes.",
      context:
        "Customer IDs e revenue measures diferem entre departments e nenhum owner resolve definition, quality ou access conflicts.",
      application:
        "Governance council delega domain decisions, owners publicam definitions e controls, stewards monitoram quality, platforms automatizam lineage e access e exceptions expiram.",
      phrase:
        "Data Governance atribui accountable owner para aprovar customer definition e resolver cross-domain exceptions.",
      aliases: [
        "enterprise data governance",
        "data decision governance",
        "governança de dados",
      ],
      confusion:
        "Data Governance define decision rights e controls; Data Management executa storage, movement, protection e maintenance.",
    }),
  },
  "data-quality": {
    en: content({
      definition:
        "Data Quality is the degree to which data is fit for a stated use across measurable dimensions such as accuracy, completeness, validity, consistency, uniqueness, timeliness, and integrity.",
      purpose:
        "It connects defects to consumer impact and provides rules and ownership for detecting, preventing, explaining, and correcting unreliable data.",
      when: "Define quality at source and product boundaries, tying each rule to a consumer need, threshold, owner, monitoring window, incident response, quarantine, correction, and prevention path.",
      context:
        "A fulfillment dashboard is complete but late by six hours, so warehouse staff make decisions from obsolete inventory despite valid schemas.",
      application:
        "Owners define freshness and reconciliation objectives, pipelines validate ranges and keys, dashboards expose status, bad records quarantine with reasons, incidents trace lineage to source, and fixes backfill idempotently.",
      phrase:
        "Data Quality fails the freshness objective even though every row passes structural validation.",
      aliases: ["data fitness", "information quality", "qualidade de dados"],
      confusion:
        "Data Quality measures fitness for use; Data Validation applies specific checks that provide evidence about some quality dimensions.",
    }),
    "pt-BR": content({
      definition:
        "Data Quality é o grau em que data serve a stated use em dimensions mensuráveis como accuracy, completeness, validity, consistency, uniqueness, timeliness e integrity.",
      purpose:
        "Ela liga defects a consumer impact e fornece rules e ownership para detectar, prevenir, explicar e corrigir unreliable data.",
      when: "Defina quality em source e product boundaries, ligando rule a consumer need, threshold, owner, monitoring, incident response, quarantine, correction e prevention.",
      context:
        "Um fulfillment dashboard está completo, porém seis horas atrasado, levando warehouse staff a decidir com obsolete inventory.",
      application:
        "Owners definem freshness e reconciliation objectives, pipelines validam ranges e keys, bad records entram em quarantine, incidents rastreiam lineage e fixes fazem backfill.",
      phrase:
        "Data Quality viola freshness objective mesmo que toda row passe structural validation.",
      aliases: ["data fitness", "information quality", "qualidade de dados"],
      confusion:
        "Data Quality mede fitness for use; Data Validation aplica checks específicos sobre algumas dimensions.",
    }),
  },
  "master-data": {
    en: content({
      definition:
        "Master Data is the governed, shared representation of core business entities such as customers, products, suppliers, locations, and accounts used consistently across transactions and analytical systems.",
      purpose:
        "It provides stable identities and authoritative attributes so processes can refer to the same real-world entities without uncontrolled duplicates and conflicting definitions.",
      when: "Manage it where several systems create or consume the same core entities, defining source authority by attribute, matching, survivorship, identifiers, hierarchy, stewardship, lifecycle, distribution, and merge history.",
      context:
        "Sales, billing, and support maintain separate customer records with spelling variations and different identifiers, obscuring one organization's total relationship.",
      application:
        "The master process matches records using governed evidence, assigns a durable enterprise ID, selects authoritative attributes, preserves source links and merge audit, routes uncertain matches to stewardship, and publishes changes.",
      phrase:
        "Master Data links these source records to one enterprise customer without erasing their original system identities.",
      aliases: ["enterprise master data", "core entity data", "dados mestres"],
      confusion:
        "Master Data describes shared core entities; Transaction Data records business events such as purchases, payments, and shipments involving those entities.",
    }),
    "pt-BR": content({
      definition:
        "Master Data é a governed shared representation de core business entities como customers, products, suppliers, locations e accounts usada consistentemente entre systems.",
      purpose:
        "Ela fornece stable identities e authoritative attributes para processes referirem as mesmas real-world entities sem duplicates e definitions conflitantes.",
      when: "Gerencie-a quando vários systems criam ou consomem core entities, definindo source authority, matching, survivorship, IDs, hierarchy, stewardship, lifecycle e merge history.",
      context:
        "Sales, billing e support mantêm customer records separados com spelling e IDs diferentes, ocultando o relacionamento total.",
      application:
        "O process faz matching por governed evidence, atribui enterprise ID, escolhe authoritative attributes, preserva source links e audit e envia uncertain matches a stewardship.",
      phrase:
        "Master Data liga estes source records a um enterprise customer sem apagar original system identities.",
      aliases: ["enterprise master data", "core entity data", "dados mestres"],
      confusion:
        "Master Data descreve core entities; Transaction Data registra events como purchases, payments e shipments.",
    }),
  },
  metadata: {
    en: content({
      definition:
        "Metadata is data that describes another data asset's structure, meaning, origin, ownership, quality, location, time, lineage, access, usage, or operational state.",
      purpose:
        "It makes data discoverable, interpretable, governable, and operable without requiring every consumer to reverse-engineer the underlying records.",
      when: "Capture metadata automatically and curate it manually throughout ingestion, transformation, publication, and use, distinguishing technical, business, operational, administrative, and lineage metadata.",
      context:
        "An analyst finds a table named customer_status but cannot tell its grain, owner, refresh time, field meanings, source, sensitivity, or downstream trust.",
      application:
        "The catalog registers schema, descriptions, owner, classification, freshness, quality scores, lineage, usage and deprecation; pipelines update operational metadata and stewards review business definitions.",
      phrase:
        "The Metadata says this column is restricted, sourced from billing, refreshed hourly, and deprecated after the new customer model launches.",
      aliases: ["data about data", "descriptive data", "metadados"],
      confusion:
        "Metadata describes and manages a data asset; the asset's records are the primary data being described.",
    }),
    "pt-BR": content({
      definition:
        "Metadata é data que descreve structure, meaning, origin, ownership, quality, location, time, lineage, access, usage ou operational state de outro data asset.",
      purpose:
        "Ela torna data discoverable, interpretable, governable e operable sem consumer reverse-engineering dos records.",
      when: "Capture-a automática e manualmente em ingestion, transformation, publication e use, distinguindo technical, business, operational, administrative e lineage metadata.",
      context:
        "Uma analyst encontra customer_status sem saber grain, owner, refresh, field meaning, source, sensitivity ou downstream trust.",
      application:
        "Catalog registra schema, descriptions, owner, classification, freshness, quality, lineage, usage e deprecation; pipelines atualizam operational metadata e stewards revisam definitions.",
      phrase:
        "A Metadata informa que column é restricted, vem de billing, atualiza por hora e será deprecated.",
      aliases: ["data about data", "descriptive data", "metadados"],
      confusion:
        "Metadata descreve e administra data asset; records do asset são primary data descrita.",
    }),
  },
  analytics: {
    en: content({
      definition:
        "Analytics is the systematic use of data, statistical reasoning, models, and visual or computational methods to describe outcomes, diagnose causes, predict possibilities, and inform decisions.",
      purpose:
        "It converts governed evidence into actionable understanding while making definitions, uncertainty, assumptions, and decision consequences explicit.",
      when: "Apply analytics to a clearly framed question and decision, defining population, measures, comparison, time, data quality, method, bias, uncertainty, validation, audience, and how findings will change action.",
      context:
        "A product team sees subscription cancellation rise and needs to know which segments, journeys, releases, and service failures contribute before choosing an intervention.",
      application:
        "Analysts define cancellation and cohorts, validate lineage, segment trends, control for seasonality, combine behavioral and qualitative evidence, quantify uncertainty, test competing explanations, and publish a reproducible decision brief.",
      phrase:
        "Analytics shows an association with failed renewals; it does not establish causation until the alternative explanations are tested.",
      aliases: ["data analytics", "analytical analysis", "análise de dados"],
      confusion:
        "Analytics is the broader practice of deriving insight and supporting decisions; Reporting primarily presents defined measures and records, often on a recurring schedule.",
    }),
    "pt-BR": content({
      definition:
        "Analytics é o uso systematic de data, statistical reasoning, models e visual ou computational methods para descrever outcomes, diagnosticar causes, prever possibilities e informar decisions.",
      purpose:
        "Ela transforma governed evidence em actionable understanding, explicitando definitions, uncertainty, assumptions e decision consequences.",
      when: "Aplique-a a question e decision claras, definindo population, measures, comparison, time, data quality, method, bias, uncertainty, validation, audience e action.",
      context:
        "Um product team vê cancellation subir e precisa saber segments, journeys, releases e service failures antes de intervention.",
      application:
        "Analysts definem cancellation e cohorts, validam lineage, segmentam trends, controlam seasonality, combinam evidence, quantificam uncertainty e publicam reproducible brief.",
      phrase:
        "Analytics mostra association com failed renewals; não prova causation sem testar alternative explanations.",
      aliases: ["data analytics", "analytical analysis", "análise de dados"],
      confusion:
        "Analytics deriva insight e apoia decisions; Reporting apresenta defined measures e records, geralmente de modo recorrente.",
    }),
  },
  "business-intelligence": {
    en: content({
      definition:
        "Business Intelligence (BI) is the organizational capability of turning governed business data into recurring metrics, reports, dashboards, and analysis for operational and strategic decisions.",
      purpose:
        "It gives decision-makers a shared, timely view of performance while standardizing measures, access, delivery, and accountability.",
      when: "Build BI around concrete decisions and audiences, defining metric ownership, semantic models, refresh, quality, lineage, access, self-service boundaries, adoption, and retirement.",
      context:
        "Leaders receive conflicting revenue and retention spreadsheets from finance, sales, and product because every group computes them differently.",
      application:
        "The BI program establishes governed measures and dimensions, certified datasets, role-based dashboards, freshness and quality indicators, analyst review, usage telemetry, and a process for changing definitions.",
      phrase:
        "Use the certified BI revenue measure so this decision matches finance's recognition rule and reporting period.",
      aliases: [
        "BI",
        "business analytics and reporting",
        "inteligência de negócios",
      ],
      confusion:
        "Business Intelligence is the capability and operating practice; a Dashboard is one visual product delivered through that capability.",
    }),
    "pt-BR": content({
      definition:
        "Business Intelligence (BI) é a organizational capability de transformar governed business data em recurring metrics, reports, dashboards e analysis para decisions.",
      purpose:
        "Ela oferece shared e timely view de performance, padronizando measures, access, delivery e accountability.",
      when: "Construa BI por decisions e audiences, definindo metric ownership, semantic models, refresh, quality, lineage, access, self-service boundaries e retirement.",
      context:
        "Leaders recebem revenue e retention spreadsheets conflitantes de finance, sales e product porque cada group calcula diferente.",
      application:
        "O BI program cria governed measures, certified datasets, role-based dashboards, freshness indicators, review, usage telemetry e change process.",
      phrase:
        "Use a certified BI revenue measure para alinhar recognition rule e reporting period de finance.",
      aliases: [
        "BI",
        "business analytics and reporting",
        "inteligência de negócios",
      ],
      confusion:
        "Business Intelligence é capability e operating practice; Dashboard é um visual product dessa capability.",
    }),
  },
  report: {
    en: content({
      definition:
        "Report is a structured presentation of defined data, measures, findings, or status for a named audience, purpose, scope, and reporting period.",
      purpose:
        "It communicates a reproducible record or analysis in a form that supports review, accountability, compliance, or a recurring decision.",
      when: "Create one when consumers need stable content or evidence, defining questions, metrics, filters, period, source, refresh, owner, distribution, access, commentary, and archival rules.",
      context:
        "Finance needs a monthly revenue close artifact whose totals, adjustments, period, approval, and source remain reproducible after dashboards change.",
      application:
        "The report uses governed measures, freezes the reporting period and data version, reconciles totals, explains exceptions, records preparer and approval, restricts distribution, and retains an auditable snapshot.",
      phrase:
        "This Report is the approved month-end snapshot; the live dashboard may change as late transactions arrive.",
      aliases: ["analytical report", "business report", "relatório"],
      confusion:
        "A Report presents bounded information for a purpose or period; a Dashboard continuously exposes monitored measures for interactive exploration.",
    }),
    "pt-BR": content({
      definition:
        "Report é uma structured presentation de data, measures, findings ou status definidos para audience, purpose, scope e reporting period.",
      purpose:
        "Ele comunica record ou analysis reproduzível para review, accountability, compliance ou recurring decision.",
      when: "Crie-o quando consumers precisarem de stable content ou evidence, definindo questions, metrics, filters, period, source, refresh, owner, distribution e archival.",
      context:
        "Finance precisa de monthly revenue close artifact cujos totals, adjustments, period, approval e source permaneçam reproduzíveis.",
      application:
        "O report usa governed measures, congela period e data version, reconcilia totals, explica exceptions, registra approval, restringe distribution e retém snapshot.",
      phrase:
        "Este Report é o approved month-end snapshot; live dashboard muda com late transactions.",
      aliases: ["analytical report", "business report", "relatório"],
      confusion:
        "Report apresenta bounded information; Dashboard expõe monitored measures continuamente para exploration.",
    }),
  },
  "event-tracking": {
    en: content({
      definition:
        "Event Tracking is the designed instrumentation and collection process that records selected user, system, and business occurrences with consistent identity, time, context, and semantics for analysis.",
      purpose:
        "It creates trustworthy behavioral evidence for product decisions and operations instead of relying on ad hoc logs or ambiguous page counts.",
      when: "Design it from measurement questions before implementation, specifying event names, triggers, actor and object IDs, properties, consent, time, deduplication, schema versions, validation, ownership, retention, and quality monitoring.",
      context:
        "A product team wants to understand checkout abandonment, but click events fire twice and do not identify cart, step, experiment, or successful completion.",
      application:
        "The tracking plan defines one event per meaningful state transition, shared context, client event ID, server confirmation for purchase, schema checks, consent gates, debug tools, release tests, and volume and quality alerts.",
      phrase:
        "Event Tracking records checkout completion on the authoritative server transition, not merely on a browser button click.",
      aliases: [
        "behavioral tracking",
        "product event instrumentation",
        "rastreamento de eventos",
      ],
      confusion:
        "Event Tracking is the instrumentation and collection practice; an Analytics Event is one structured record produced by that practice.",
    }),
    "pt-BR": content({
      definition:
        "Event Tracking é o processo projetado de instrumentation e collection que registra user, system e business occurrences com identity, time, context e semantics consistentes.",
      purpose:
        "Ele cria trustworthy behavioral evidence para product decisions e operations, em vez de ad hoc logs ou ambiguous page counts.",
      when: "Projete-o a partir de measurement questions, especificando event names, triggers, IDs, properties, consent, time, deduplication, schema versions, validation, ownership e retention.",
      context:
        "Um product team analisa checkout abandonment, mas click events disparam duas vezes e não identificam cart, step, experiment ou completion.",
      application:
        "Tracking plan define events por meaningful transition, shared context, event ID, server confirmation de purchase, schema checks, consent gates, tests e quality alerts.",
      phrase:
        "Event Tracking registra checkout completion no authoritative server transition, não só no browser click.",
      aliases: [
        "behavioral tracking",
        "product event instrumentation",
        "rastreamento de eventos",
      ],
      confusion:
        "Event Tracking é instrumentation practice; Analytics Event é um structured record produzido por ela.",
    }),
  },
  "analytics-event": {
    en: content({
      definition:
        "Analytics Event is a structured, time-stamped record that represents one defined occurrence for behavioral or business analysis, together with the minimal context needed to interpret it.",
      purpose:
        "It provides an atomic analytical observation that can be counted, sequenced, segmented, joined, and validated consistently across products and time.",
      when: "Emit one for a meaningful observable occurrence, defining event versus processing time, actor and object identity, unique ID, name, schema version, properties, source, consent, and authoritative status.",
      context:
        "A customer completes an order after several attempts, and analysis must distinguish button clicks, submitted attempts, accepted payment, and the final completed purchase.",
      application:
        "The server emits OrderCompleted once with event ID, occurred_at, order and pseudonymous customer IDs, currency, amount, channel and schema version; the pipeline validates, deduplicates, and preserves late arrival.",
      phrase:
        "This Analytics Event represents the authoritative OrderCompleted transition and carries a unique ID for deduplication.",
      aliases: [
        "tracking event",
        "behavioral event record",
        "evento analítico",
      ],
      confusion:
        "An Analytics Event is modeled for measurement; a domain event communicates a business fact for system behavior, though one governed fact may feed both uses.",
    }),
    "pt-BR": content({
      definition:
        "Analytics Event é um structured time-stamped record de uma occurrence definida para behavioral ou business analysis com minimal context necessário.",
      purpose:
        "Ele oferece atomic analytical observation que pode ser contada, sequenciada, segmentada, unida e validada consistentemente.",
      when: "Emita-o para meaningful occurrence, definindo event e processing time, actor e object identity, unique ID, name, schema version, properties, source, consent e authority.",
      context:
        "Um customer conclui order após attempts, e analysis distingue clicks, submissions, accepted payment e completed purchase.",
      application:
        "O server emite OrderCompleted uma vez com event ID, occurred_at, order e pseudonymous customer IDs, amount, channel e version; pipeline valida e deduplica.",
      phrase:
        "Este Analytics Event representa authoritative OrderCompleted transition e traz unique ID para deduplication.",
      aliases: [
        "tracking event",
        "behavioral event record",
        "evento analítico",
      ],
      confusion:
        "Analytics Event é modelado para measurement; domain event comunica business fact para system behavior.",
    }),
  },
  funnel: {
    en: content({
      definition:
        "Funnel is an ordered analytical model that measures how a defined population progresses through a sequence of eligible stages toward an outcome within a specified time window.",
      purpose:
        "It reveals where progression drops, how conversion differs by segment, and which stage may deserve investigation or experimentation.",
      when: "Use it for journeys with meaningful ordered milestones, defining entry population, stage events, identity, order rules, repeated attempts, time window, exclusions, attribution, and conversion denominator.",
      context:
        "A signup journey includes account start, email verification, profile completion, plan selection, and first successful payment across devices and sessions.",
      application:
        "Analysts define authoritative stage events and a seven-day window, stitch permitted identities, count each account once per stage, handle out-of-order late events, compare cohorts, quantify uncertainty, and inspect causes behind the largest drop.",
      phrase:
        "The Funnel shows a drop after email verification for mobile users; it does not by itself explain why they stop.",
      aliases: ["conversion funnel", "journey funnel", "funil de conversão"],
      confusion:
        "A Funnel measures ordered stage progression; a User Journey describes the broader experience, context, actions, and perceptions beyond measurable conversion stages.",
    }),
    "pt-BR": content({
      definition:
        "Funnel é um ordered analytical model que mede como defined population avança por sequence de eligible stages até outcome numa time window.",
      purpose:
        "Ele revela onde progression cai, como conversion varia por segment e qual stage merece investigation ou experiment.",
      when: "Use-o em journeys com ordered milestones, definindo entry population, stage events, identity, order rules, attempts, time window, exclusions, attribution e denominator.",
      context:
        "Uma signup journey inclui account start, email verification, profile, plan selection e first payment entre devices e sessions.",
      application:
        "Analysts definem authoritative events e seven-day window, unem identities permitidas, contam account uma vez por stage, tratam late events, comparam cohorts e investigam maior drop.",
      phrase:
        "Funnel mostra queda após email verification em mobile; sozinho não explica por que users param.",
      aliases: ["conversion funnel", "journey funnel", "funil de conversão"],
      confusion:
        "Funnel mede ordered progression; User Journey descreve experiência, context, actions e perceptions mais amplos.",
    }),
  },
  cohort: {
    en: content({
      definition:
        "Cohort is a defined group of subjects that share a qualifying event, attribute, or exposure during a specified period and are analyzed together over subsequent time or outcomes.",
      purpose:
        "It separates populations with comparable starting conditions so changes in behavior are not hidden by mixing users of different ages, acquisition periods, products, or treatments.",
      when: "Use cohorts for retention, lifecycle, experiment, health, and longitudinal analysis, defining membership event, identity, entry window, eligibility, time origin, observation horizon, exclusions, and whether membership is fixed or dynamic.",
      context:
        "Overall retention appears stable even though customers acquired after a pricing change abandon the product faster than customers acquired earlier.",
      application:
        "Analysts group accounts by first-paid month and plan, start age at the first successful payment, exclude test accounts, measure comparable weekly return windows, account for incomplete recent observations, and inspect the pricing-change cohorts.",
      phrase:
        "Compare each Cohort at the same account age; the newest signup group has not yet had twelve weeks to retain.",
      aliases: ["analysis cohort", "cohort group", "coorte"],
      confusion:
        "A Cohort groups subjects by a shared origin or exposure for longitudinal comparison; a Segment groups records by characteristics and need not share a common start time.",
    }),
    "pt-BR": content({
      definition:
        "Cohort é um grupo definido de subjects que compartilham qualifying event, attribute ou exposure em período especificado e são analisados juntos ao longo de time ou outcomes.",
      purpose:
        "Ela separa populations com starting conditions comparáveis para behavior não ser ocultado ao misturar users de idades, acquisition periods, products ou treatments distintos.",
      when: "Use cohorts em retention, lifecycle, experiment e longitudinal analysis, definindo membership event, identity, entry window, eligibility, time origin, observation horizon, exclusions e membership rule.",
      context:
        "Overall retention parece estável, mas customers adquiridos após pricing change abandonam product mais rápido que os anteriores.",
      application:
        "Analysts agrupam accounts por first-paid month e plan, iniciam age no first successful payment, excluem test accounts, medem weekly return windows comparáveis e tratam incomplete recent observations.",
      phrase:
        "Compare cada Cohort na mesma account age; o signup group recente ainda não teve doze semanas para reter.",
      aliases: ["analysis cohort", "cohort group", "coorte"],
      confusion:
        "Cohort agrupa subjects por origem ou exposure para longitudinal comparison; Segment agrupa por characteristics sem exigir common start time.",
    }),
  },
  "conversion-rate": {
    en: content({
      definition:
        "Conversion Rate is the proportion of an explicitly eligible population that completes a defined target action within a stated attribution and observation window.",
      purpose:
        "It quantifies progression toward an outcome and supports comparison across journeys, cohorts, channels, and experiments when numerator and denominator remain consistent.",
      when: "Use it for signup, purchase, activation, lead, and funnel decisions only after defining eligibility, unit of analysis, conversion event, deduplication, time window, attribution, repeated attempts, exclusions, and uncertainty.",
      context:
        "Marketing reports purchases divided by page views while product reports purchasing accounts divided by checkout starters, producing incompatible conversion numbers.",
      application:
        "The team defines one eligible account at first checkout start as the denominator, one completed paid order within seven days as conversion, excludes internal traffic, deduplicates identities, and reports confidence intervals by channel.",
      phrase:
        "This Conversion Rate is completed purchasing accounts divided by eligible checkout starters within seven days, not orders divided by page views.",
      aliases: [
        "conversion percentage",
        "outcome completion rate",
        "taxa de conversão",
      ],
      confusion:
        "Conversion Rate measures completion of a target action among eligible units; Click-Through Rate specifically measures clicks relative to impressions or delivered opportunities.",
    }),
    "pt-BR": content({
      definition:
        "Conversion Rate é a proporção de uma explicitly eligible population que conclui target action definida dentro de attribution e observation window declaradas.",
      purpose:
        "Ela quantifica progressão até outcome e permite comparação entre journeys, cohorts, channels e experiments quando numerator e denominator são consistentes.",
      when: "Use-a em signup, purchase, activation, lead e funnel decisions após definir eligibility, analysis unit, conversion event, deduplication, time window, attribution, repeated attempts, exclusions e uncertainty.",
      context:
        "Marketing divide purchases por page views enquanto product divide purchasing accounts por checkout starters, gerando conversion numbers incompatíveis.",
      application:
        "O time usa uma eligible account no first checkout start como denominator, um completed paid order em sete dias como conversion, exclui internal traffic, deduplica identity e reporta confidence interval.",
      phrase:
        "Esta Conversion Rate é purchasing accounts por eligible checkout starters em sete dias, não orders por page views.",
      aliases: [
        "conversion percentage",
        "outcome completion rate",
        "taxa de conversão",
      ],
      confusion:
        "Conversion Rate mede target action em eligible units; Click-Through Rate mede clicks sobre impressions ou opportunities.",
    }),
  },
  "retention-rate": {
    en: content({
      definition:
        "Retention Rate is the proportion of a defined starting population that remains eligible and exhibits a specified continuing behavior or state at a later time or during a return window.",
      purpose:
        "It measures durable product or customer continuity beyond initial acquisition, revealing how ongoing value changes by cohort and lifecycle age.",
      when: "Use it for subscriptions, product use, customers, employees, or accounts only after defining the starting cohort, retained behavior, time origin, interval or window, eligibility, reactivation, cancellation, censoring, and observation completeness.",
      context:
        "A music service calls any app open retention, while the business question is whether new paid subscribers remain active and listen during their fourth week.",
      application:
        "The analysis fixes first payment as cohort entry, counts accounts still paid with a qualifying listen in days 22–28, excludes fraudulent accounts, distinguishes reactivation, and withholds immature cohorts from the four-week result.",
      phrase:
        "Four-week Retention Rate uses only cohorts old enough to complete the window and requires both an active subscription and qualifying use.",
      aliases: [
        "customer retention rate",
        "user retention percentage",
        "taxa de retenção",
      ],
      confusion:
        "Retention Rate measures the share that remains or returns under a defined rule; Churn Rate measures the share that leaves or becomes inactive, and the two are complements only under matching definitions.",
    }),
    "pt-BR": content({
      definition:
        "Retention Rate é a proporção de starting population definida que permanece eligible e apresenta continuing behavior ou state especificado em later time ou return window.",
      purpose:
        "Ela mede continuidade durável de product ou customer além da acquisition, mostrando ongoing value por cohort e lifecycle age.",
      when: "Use-a em subscriptions, product use, customers, employees ou accounts após definir starting cohort, retained behavior, time origin, interval, eligibility, reactivation, cancellation, censoring e observation completeness.",
      context:
        "Um music service chama qualquer app open de retention, enquanto a pergunta é se new paid subscribers permanecem active e escutam na quarta semana.",
      application:
        "A analysis fixa first payment como entry, conta accounts ainda paid com qualifying listen nos dias 22–28, exclui fraud, separa reactivation e omite immature cohorts.",
      phrase:
        "A four-week Retention Rate usa apenas cohorts maduras e exige active subscription e qualifying use.",
      aliases: [
        "customer retention rate",
        "user retention percentage",
        "taxa de retenção",
      ],
      confusion:
        "Retention Rate mede quem permanece ou retorna; Churn Rate mede quem sai e só é complemento sob definitions idênticas.",
    }),
  },
  "data-migration": {
    en: content({
      definition:
        "Data Migration is the planned transfer and transformation of data from a source representation or system to a target while preserving required meaning, integrity, relationships, history, security, and operational continuity.",
      purpose:
        "It moves ownership or technology without silently losing, duplicating, corrupting, exposing, or changing the business interpretation of existing records.",
      when: "Perform it for platform replacement, consolidation, schema redesign, acquisition, or cloud movement, defining scope, mapping, profiling, cleansing, identifiers, cutover, synchronization, validation, rollback, audit, retention, and ownership.",
      context:
        "A company replaces its billing platform while active subscriptions, invoices, credits, payment references, and audit history must remain correct during the transition.",
      application:
        "The team profiles sources, versions field and code mappings, rehearses idempotent conversion, preserves immutable source IDs, dual-runs change capture, reconciles counts and monetary totals, samples semantics, freezes cutover, verifies consumers, and retains a rollback point.",
      phrase:
        "Data Migration is complete only after balances, relationships, history, downstream consumers, and rollback criteria reconcile—not when rows finish copying.",
      aliases: [
        "data transfer migration",
        "system data conversion",
        "migração de dados",
      ],
      confusion:
        "Data Migration moves data and operational ownership to a target; Data Replication continuously maintains one or more copies and does not by itself complete a business cutover.",
    }),
    "pt-BR": content({
      definition:
        "Data Migration é a transferência e transformation planejada de data de source representation ou system para target preservando meaning, integrity, relationships, history, security e operational continuity.",
      purpose:
        "Ela muda ownership ou technology sem perder, duplicar, corromper, expor ou alterar silenciosamente business interpretation dos records.",
      when: "Faça-a em platform replacement, consolidation, schema redesign, acquisition ou cloud movement, definindo scope, mapping, profiling, cleansing, IDs, cutover, synchronization, validation, rollback, audit e retention.",
      context:
        "Uma company troca billing platform enquanto active subscriptions, invoices, credits, payment references e audit history permanecem corretos.",
      application:
        "O time perfila sources, versiona mappings, ensaia idempotent conversion, preserva source IDs, sincroniza changes, reconcilia counts e money, valida consumers e mantém rollback point.",
      phrase:
        "Data Migration termina quando balances, relationships, history, downstream consumers e rollback criteria reconciliam, não quando rows são copiadas.",
      aliases: [
        "data transfer migration",
        "system data conversion",
        "migração de dados",
      ],
      confusion:
        "Data Migration move data e operational ownership; Data Replication mantém copies continuamente sem concluir business cutover.",
    }),
  },
  "batch-processing": {
    en: content({
      definition:
        "Batch Processing is the execution of a bounded collection of records or jobs as a scheduled or triggered unit rather than processing each item immediately upon arrival.",
      purpose:
        "It efficiently handles high-volume work that tolerates delay, enabling grouping, bulk I/O, repeatable snapshots, resource scheduling, and coordinated publication.",
      when: "Use it for periodic reporting, billing, backfills, exports, model training, and bulk transformations when latency requirements permit, defining batch boundaries, watermark, dependencies, capacity, checkpoints, idempotency, partial failure, rerun, and late data.",
      context:
        "A finance platform calculates monthly statements for millions of accounts after the accounting period closes and all approved adjustments arrive.",
      application:
        "The scheduler freezes the eligible period, partitions accounts into bounded tasks, records input version and checkpoints, writes outputs idempotently, quarantines failures, reconciles money and counts, retries only failed partitions, and atomically publishes the complete statement set.",
      phrase:
        "The Batch Processing run uses a fixed accounting cutoff and republishes only after every partition reconciles.",
      aliases: [
        "batch computation",
        "bulk processing",
        "processamento em lote",
      ],
      confusion:
        "Batch Processing operates on bounded groups at intervals; Stream Processing handles an ongoing sequence incrementally as records arrive.",
    }),
    "pt-BR": content({
      definition:
        "Batch Processing é a execution de uma bounded collection de records ou jobs como scheduled ou triggered unit, em vez de processar item imediatamente na chegada.",
      purpose:
        "Ele trata high-volume work que aceita delay com grouping, bulk I/O, repeatable snapshots, resource scheduling e coordinated publication.",
      when: "Use-o em periodic reporting, billing, backfills, exports, model training e bulk transformations, definindo batch boundaries, watermark, dependencies, capacity, checkpoints, idempotency, partial failure, rerun e late data.",
      context:
        "Uma finance platform calcula monthly statements para milhões de accounts depois do accounting period e approved adjustments.",
      application:
        "Scheduler congela period, particiona accounts, registra input version e checkpoints, escreve outputs idempotently, quarentena failures, reconcilia money e publica complete set atomicamente.",
      phrase:
        "O Batch Processing usa accounting cutoff fixo e republica somente quando cada partition reconcilia.",
      aliases: [
        "batch computation",
        "bulk processing",
        "processamento em lote",
      ],
      confusion:
        "Batch Processing opera bounded groups em intervalos; Stream Processing trata ongoing sequence conforme records chegam.",
    }),
  },
  "stream-processing": {
    en: content({
      definition:
        "Stream Processing is the continuous or incremental computation over an unbounded sequence of records or events as they become available, producing updated results with defined time and delivery semantics.",
      purpose:
        "It supports low-latency detection, enrichment, aggregation, routing, and stateful decisions without waiting for a complete dataset or scheduled batch boundary.",
      when: "Use it when outcome latency or continuous state matters, designing event and processing time, watermarks, windows, ordering, partitioning, state, checkpoints, duplicates, late data, backpressure, schema evolution, replay, and output guarantees.",
      context:
        "A fraud platform must update spending velocity and flag suspicious payment patterns within seconds while events can arrive late, duplicated, or out of order.",
      application:
        "The job keys events by account, uses event-time sliding windows and watermarks, stores checkpointed state, deduplicates event IDs, sends very late records to correction flow, emits idempotent decisions, and replays from retained input after code changes.",
      phrase:
        "Stream Processing computes velocity by event time; the watermark defines when a window is complete enough to publish and later correct.",
      aliases: [
        "stream computation",
        "real-time stream processing",
        "processamento de fluxo",
      ],
      confusion:
        "Stream Processing incrementally handles an unbounded sequence; Batch Processing handles bounded collections at chosen intervals, even when batches run frequently.",
    }),
    "pt-BR": content({
      definition:
        "Stream Processing é a continuous ou incremental computation sobre unbounded sequence de records ou events conforme chegam, produzindo updated results com time e delivery semantics definidos.",
      purpose:
        "Ele permite low-latency detection, enrichment, aggregation, routing e stateful decisions sem esperar complete dataset ou scheduled batch boundary.",
      when: "Use-o quando outcome latency ou continuous state importar, projetando event e processing time, watermarks, windows, ordering, partitioning, state, checkpoints, duplicates, late data, backpressure, schema, replay e outputs.",
      context:
        "Uma fraud platform atualiza spending velocity e detecta suspicious payment patterns em segundos, embora events cheguem late, duplicate ou out of order.",
      application:
        "O job particiona por account, usa event-time windows e watermarks, guarda checkpointed state, deduplica IDs, envia very late records a correction flow, emite idempotent decisions e suporta replay.",
      phrase:
        "Stream Processing calcula velocity por event time; watermark define quando window está completa para publish e correction.",
      aliases: [
        "stream computation",
        "real-time stream processing",
        "processamento de fluxo",
      ],
      confusion:
        "Stream Processing trata unbounded sequence incrementalmente; Batch Processing trata bounded collections em intervalos.",
    }),
  },
  "change-data-capture": {
    en: content({
      definition:
        "Change Data Capture (CDC) is the detection and publication of inserts, updates, and deletes from a data source as an ordered change stream or incremental feed with source position metadata.",
      purpose:
        "It propagates source changes efficiently to replicas, warehouses, indexes, caches, and integrations without repeatedly scanning entire datasets.",
      when: "Use CDC when downstream systems need incremental database changes, defining capture mechanism, snapshot handoff, transaction boundaries, ordering, schema evolution, before and after values, deletes, identifiers, offsets, retention, duplicates, security, and recovery.",
      context:
        "An analytics warehouse and search index need continuing customer updates from an operational database containing hundreds of millions of rows.",
      application:
        "The connector takes a consistent initial snapshot, resumes from the matching transaction-log position, preserves commit and table metadata, publishes keyed changes, checkpoints offsets, handles schema changes and tombstones, restricts sensitive columns, and lets consumers apply records idempotently.",
      phrase:
        "CDC delivers the database row change; downstream consumers still define the business meaning, deduplication, and target update behavior.",
      aliases: ["CDC", "database change stream", "captura de dados alterados"],
      confusion:
        "Change Data Capture reports source-level data mutations; a Domain Event deliberately communicates a business fact and may omit storage-specific changes.",
    }),
    "pt-BR": content({
      definition:
        "Change Data Capture (CDC) é a detection e publication de inserts, updates e deletes de uma data source como ordered change stream ou incremental feed com source position metadata.",
      purpose:
        "Ela propaga source changes eficientemente a replicas, warehouses, indexes, caches e integrations sem rescans completos do dataset.",
      when: "Use CDC quando downstream systems precisarem de incremental database changes, definindo capture mechanism, snapshot handoff, transaction boundaries, ordering, schema evolution, before e after values, deletes, offsets, retention, security e recovery.",
      context:
        "Um analytics warehouse e search index precisam de customer updates contínuos de operational database com centenas de milhões de rows.",
      application:
        "Connector cria consistent snapshot, retoma no transaction-log position correspondente, preserva commit metadata, publica keyed changes, salva offsets, trata schema e tombstones, restringe sensitive columns e permite idempotent apply.",
      phrase:
        "CDC entrega database row change; downstream consumers ainda definem business meaning, deduplication e target behavior.",
      aliases: ["CDC", "database change stream", "captura de dados alterados"],
      confusion:
        "Change Data Capture relata source-level mutations; Domain Event comunica deliberadamente business fact e pode omitir storage changes.",
    }),
  },
};
