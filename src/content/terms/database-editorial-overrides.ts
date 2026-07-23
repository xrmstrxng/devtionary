import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const databaseEditorialOverrides: Record<string, EditorialPair> = {
  database: {
    en: content({
      definition:
        "A database is an organized collection of persistent data structured for reliable storage, retrieval, update, and management by applications or people.",
      purpose:
        "It preserves information beyond one process execution and provides controlled mechanisms for querying, consistency, concurrency, security, backup, and recovery.",
      when: "Use a database when information must outlive application instances, support reliable updates or queries, and be governed as a durable source of record.",
      context:
        "An online store must retain customers, products, orders, and payments across deployments and simultaneous requests.",
      application:
        "The application stores transactional records in a managed relational database with constraints, access controls, backups, and tested restoration.",
      phrase:
        "“Treat the database as the durable source of order state; the cache can be rebuilt from it.”",
      aliases: ["data store", "banco de dados", "persistent database"],
      confusion:
        "A database is the organized stored data; a Database Management System is the software that creates, queries, protects, and operates databases.",
    }),
    "pt-BR": content({
      definition:
        "Database é uma coleção organizada de dados persistentes estruturada para armazenamento, consulta, atualização e gestão confiáveis.",
      purpose:
        "Ele preserva informações além da execução de um processo e oferece mecanismos de consulta, consistência, concorrência, segurança, backup e recuperação.",
      when: "Use database quando informações precisarem sobreviver às instâncias da aplicação, aceitar consultas ou atualizações confiáveis e funcionar como fonte durável.",
      context:
        "Uma loja precisa conservar clientes, produtos, pedidos e pagamentos entre deploys e requests simultâneas.",
      application:
        "A aplicação armazena registros transacionais em banco relacional gerenciado com constraints, controle de acesso, backups e restauração testada.",
      phrase:
        "“Trate o database como fonte durável do estado do pedido; o cache pode ser reconstruído a partir dele.”",
      aliases: ["data store", "banco de dados", "persistent database"],
      confusion:
        "Database é o conjunto organizado de dados; Database Management System é o software que cria, consulta, protege e opera bancos.",
    }),
  },
  dbms: {
    en: content({
      definition:
        "A Database Management System is software that defines, stores, queries, updates, secures, coordinates, and recovers one or more databases.",
      purpose:
        "It mediates between applications and stored data, implementing query execution, transactions, concurrency control, access permissions, logging, and recovery.",
      when: "Choose a DBMS when durable data needs managed querying and integrity, evaluating its model, consistency, scaling, operations, ecosystem, and workload fit.",
      context:
        "A financial system needs concurrent transactions, relational constraints, point-in-time recovery, and controlled access for several applications.",
      application:
        "The team selects PostgreSQL as the DBMS, creates separate databases and roles, and operates backups, replicas, and upgrades.",
      phrase:
        "“The DBMS enforces this unique constraint even when two application instances write concurrently.”",
      aliases: [
        "database management system",
        "sistema gerenciador de banco de dados",
        "sgbd",
      ],
      confusion:
        "A DBMS is the operating software, such as PostgreSQL; a database is a particular organized collection managed by that software.",
    }),
    "pt-BR": content({
      definition:
        "Database Management System é o software que define, armazena, consulta, atualiza, protege, coordena e recupera um ou mais bancos de dados.",
      purpose:
        "Ele faz a mediação entre aplicações e dados, implementando execução de queries, transações, concorrência, permissões, logs e recuperação.",
      when: "Escolha um DBMS quando dados duráveis precisarem de consulta e integridade gerenciadas, avaliando modelo, consistência, escala, operação e workload.",
      context:
        "Um sistema financeiro precisa de transações concorrentes, constraints relacionais, recuperação pontual e acesso controlado.",
      application:
        "O time escolhe PostgreSQL como DBMS, cria databases e papéis separados e opera backups, réplicas e atualizações.",
      phrase:
        "“O DBMS aplica esta unique constraint mesmo quando duas instâncias escrevem ao mesmo tempo.”",
      aliases: [
        "database management system",
        "sistema gerenciador de banco de dados",
        "sgbd",
      ],
      confusion:
        "DBMS é o software operacional, como PostgreSQL; database é uma coleção específica administrada por ele.",
    }),
  },
  "relational-database": {
    en: content({
      definition:
        "A relational database organizes data into relations represented as tables with typed columns, rows, keys, and declarative integrity constraints.",
      purpose:
        "It models structured relationships and supports set-based queries and transactions while the database enforces consistency between related records.",
      when: "Use a relational database for structured data with meaningful relationships, transactional updates, flexible joins, and integrity rules that must hold across writers.",
      context:
        "An order system must ensure every order belongs to an existing customer and every line references a valid product.",
      application:
        "Tables represent customers, orders, products, and lines; foreign keys enforce references and transactions commit related changes together.",
      phrase:
        "“Keep the relationship enforced by the relational database, not only by a check in one application instance.”",
      aliases: ["rdb", "sql database", "banco de dados relacional"],
      confusion:
        "Relational describes the table-and-relation model; SQL is the common language used by relational systems but is not itself the database model.",
    }),
    "pt-BR": content({
      definition:
        "Relational Database organiza dados em relações representadas por tables com columns tipadas, rows, keys e constraints declarativas.",
      purpose:
        "Ele modela relações estruturadas e permite queries de conjuntos e transações enquanto o banco aplica consistência entre registros relacionados.",
      when: "Use banco relacional em dados estruturados com relações, mudanças transacionais, joins flexíveis e regras de integridade entre escritores.",
      context:
        "Um sistema de pedidos precisa garantir que todo pedido pertença a cliente existente e cada item referencie produto válido.",
      application:
        "Tables representam clientes, pedidos, produtos e itens; foreign keys aplicam referências e transactions confirmam mudanças juntas.",
      phrase:
        "“Mantenha a relação garantida pelo relational database, não somente por uma verificação em uma instância da aplicação.”",
      aliases: ["rdb", "sql database", "banco de dados relacional"],
      confusion:
        "Relational descreve o modelo de tabelas e relações; SQL é a linguagem comum desses sistemas, não o modelo em si.",
    }),
  },
  nosql: {
    en: content({
      definition:
        "NoSQL is a family of non-relational database models, including document, key-value, wide-column, and graph stores, designed around different data shapes and access patterns.",
      purpose:
        "It offers alternatives to a tabular relational model for workloads requiring flexible documents, direct key access, relationship traversal, distribution, or specialized scale characteristics.",
      when: "Choose a NoSQL database only after identifying the dominant access patterns, consistency needs, transaction boundaries, query limitations, and operational tradeoffs.",
      context:
        "A telemetry platform ingests huge time-ordered event volumes and reads them mainly by device and time range.",
      application:
        "The team selects a distributed wide-column store and designs its keys around device-range queries instead of reproducing a normalized relational schema.",
      phrase:
        "“Model this NoSQL table from the required query pattern; arbitrary joins will not rescue a poor partition key.”",
      aliases: [
        "non-relational database",
        "not only sql",
        "banco não relacional",
      ],
      confusion:
        "NoSQL is an umbrella for several distinct models, not a guarantee of schemaless data, unlimited scaling, or absence of transactions.",
    }),
    "pt-BR": content({
      definition:
        "NoSQL é uma família de modelos não relacionais, incluindo documentos, chave-valor, wide-column e grafos, projetados para diferentes formatos e acessos.",
      purpose:
        "Ele oferece alternativas ao modelo tabular para workloads com documentos flexíveis, acesso por chave, travessia de relações, distribuição ou escala especializada.",
      when: "Escolha NoSQL após identificar padrões de acesso, consistência, fronteiras transacionais, limitações de consulta e trade-offs operacionais.",
      context:
        "Uma plataforma de telemetria recebe enorme volume de eventos e os consulta principalmente por dispositivo e período.",
      application:
        "O time escolhe wide-column distribuído e projeta chaves para consultas por dispositivo, sem copiar um schema relacional normalizado.",
      phrase:
        "“Modele esta tabela NoSQL a partir da query necessária; joins arbitrários não corrigirão uma partition key ruim.”",
      aliases: [
        "non-relational database",
        "not only sql",
        "banco não relacional",
      ],
      confusion:
        "NoSQL inclui vários modelos distintos e não garante ausência de schema, escala ilimitada ou inexistência de transações.",
    }),
  },
  table: {
    en: content({
      definition:
        "A table is a named relational database structure that stores a set of rows sharing a defined collection of columns, types, defaults, keys, and constraints.",
      purpose:
        "It represents one relation and gives the DBMS a schema for validating, indexing, querying, and updating records consistently.",
      when: "Create a table for a coherent kind of relational fact or entity, selecting columns and constraints from the data meaning rather than screen layout.",
      context:
        "An order system needs durable records with one identity, customer reference, creation time, currency, amount, and status.",
      application:
        "An orders table defines those columns, a primary key, a customer foreign key, required fields, and valid-value constraints.",
      phrase:
        "“Separate payment attempts into their own table because one order can have several attempts with independent lifecycles.”",
      aliases: ["database table", "relation", "tabela de banco"],
      confusion:
        "A table defines the full relation and schema; a row is one record within it and a column defines one attribute across rows.",
    }),
    "pt-BR": content({
      definition:
        "Table é uma estrutura nomeada de banco relacional que armazena rows com a mesma coleção definida de columns, tipos, defaults, keys e constraints.",
      purpose:
        "Ela representa uma relação e fornece ao DBMS um schema para validar, indexar, consultar e atualizar registros consistentemente.",
      when: "Crie table para um tipo coerente de fato ou entity relacional, escolhendo columns e constraints pelo significado dos dados, não pela tela.",
      context:
        "Um sistema precisa de pedidos duráveis com identidade, referência ao cliente, criação, moeda, valor e status.",
      application:
        "A table orders define essas columns, primary key, foreign key de cliente, campos obrigatórios e constraints de valores válidos.",
      phrase:
        "“Separe tentativas de pagamento em outra table, pois um pedido pode ter várias com ciclos independentes.”",
      aliases: ["database table", "relation", "tabela de banco"],
      confusion:
        "Table define relação e schema; row é um registro dentro dela e column define um atributo entre registros.",
    }),
  },
  column: {
    en: content({
      definition:
        "A column is a named attribute in a relational table whose declared data type and constraints apply to the corresponding value in every row.",
      purpose:
        "It gives one piece of data consistent meaning and representation so the DBMS can validate, compare, index, calculate, and query it.",
      when: "Define a column for an atomic attribute required by the model, choosing type, nullability, default, and constraints according to its semantics.",
      context:
        "An invoice needs an issue date that must participate in date comparisons and cannot be absent after creation.",
      application:
        "The table defines issued_at as a non-null date or timestamp column rather than storing locale-formatted text.",
      phrase:
        "“Use a numeric column with explicit precision for money instead of a floating-point approximation.”",
      aliases: ["database column", "field", "coluna de banco"],
      confusion:
        "A column defines one attribute for all rows; a field often means the concrete value at one row-and-column intersection.",
    }),
    "pt-BR": content({
      definition:
        "Column é um atributo nomeado de uma table relacional cujo tipo e constraints declarados se aplicam ao valor correspondente em toda row.",
      purpose:
        "Ela dá significado e representação consistentes a um dado para o DBMS validar, comparar, indexar, calcular e consultar.",
      when: "Defina column para um atributo atômico necessário, escolhendo tipo, nullability, default e constraints conforme sua semântica.",
      context:
        "Uma nota precisa de data de emissão que participe de comparações e não possa ficar ausente após criação.",
      application:
        "A table define issued_at como column de data ou timestamp não nula, em vez de texto formatado por locale.",
      phrase:
        "“Use uma column numérica com precisão explícita para dinheiro, não uma aproximação de ponto flutuante.”",
      aliases: ["database column", "field", "coluna de banco"],
      confusion:
        "Column define um atributo para todas as rows; field frequentemente indica o valor concreto na interseção de uma row e column.",
    }),
  },
  row: {
    en: content({
      definition:
        "A row is one tuple or record in a relational table, containing one value for each column and representing one instance of the relation.",
      purpose:
        "It groups attribute values that belong to the same fact or entity occurrence and is identified and constrained within the table's schema.",
      when: "Insert a row when recording a new relational fact and update or delete it according to the lifecycle and transaction rules of that data.",
      context:
        "A customer places a new order that must be stored separately from every other order even when some values match.",
      application:
        "The transaction inserts one orders row with a unique ID, customer reference, amount, timestamps, and initial status.",
      phrase:
        "“Lock the order row while applying this transition so concurrent requests cannot both approve it.”",
      aliases: ["database row", "record", "tuple", "linha de banco"],
      confusion:
        "A row is one record across columns; a column is one named attribute defined across all records in a table.",
    }),
    "pt-BR": content({
      definition:
        "Row é uma tupla ou registro de uma table relacional, contendo um valor por column e representando uma ocorrência da relação.",
      purpose:
        "Ela agrupa valores pertencentes ao mesmo fato ou entity e é identificada e restringida dentro do schema da table.",
      when: "Insira uma row ao registrar um novo fato relacional e atualize ou remova conforme o ciclo de vida e as regras transacionais.",
      context:
        "Uma pessoa cria um pedido que precisa ser armazenado separadamente de todos os outros, mesmo quando alguns valores coincidam.",
      application:
        "A transaction insere uma row em orders com ID único, cliente, valor, timestamps e status inicial.",
      phrase:
        "“Bloqueie a row do pedido durante a transição para duas requests concorrentes não a aprovarem.”",
      aliases: ["database row", "record", "tuple", "linha de banco"],
      confusion:
        "Row é um registro através das columns; column é um atributo nomeado definido para todos os registros.",
    }),
  },
  schema: {
    en: content({
      definition:
        "A database schema is the formal structure and namespace describing database objects such as tables, columns, types, relationships, constraints, indexes, and views.",
      purpose:
        "It defines how stored data is organized and what structural integrity the DBMS must enforce, creating a contract for applications and migrations.",
      when: "Design and version a schema whenever persistent structured data is introduced or changed, reviewing compatibility, migration cost, and ownership.",
      context:
        "A billing application must add tax jurisdiction without breaking an older service version still reading invoice records.",
      application:
        "A migration adds a nullable column first, application versions learn to handle it, data is backfilled, and a later change enforces the final constraint.",
      phrase:
        "“Make this schema change backward-compatible before deploying readers and writers in separate stages.”",
      aliases: ["database schema", "data schema", "esquema de banco"],
      confusion:
        "A database schema defines stored structure; a serialization schema defines the contract of transmitted messages and evolves under different boundaries.",
    }),
    "pt-BR": content({
      definition:
        "Database Schema é a estrutura e namespace formais que descrevem objects como tables, columns, tipos, relações, constraints, indexes e views.",
      purpose:
        "Ele define a organização dos dados e a integridade estrutural aplicada pelo DBMS, criando contrato para aplicações e migrations.",
      when: "Projete e versione schema ao introduzir ou alterar dados persistentes, revisando compatibilidade, custo da migration e responsabilidade.",
      context:
        "Uma aplicação de cobrança precisa adicionar jurisdição tributária sem quebrar uma versão antiga que ainda lê notas.",
      application:
        "Uma migration adiciona column nullable, versões aprendem a tratá-la, dados são preenchidos e uma mudança posterior aplica a constraint final.",
      phrase:
        "“Torne esta mudança de schema retrocompatível antes de implantar leitores e escritores em etapas separadas.”",
      aliases: ["database schema", "data schema", "esquema de banco"],
      confusion:
        "Database schema define armazenamento; schema de serialização define contrato de mensagens e evolui em outra fronteira.",
    }),
  },
  "primary-key": {
    en: content({
      definition:
        "A primary key is the selected candidate key whose non-null, unique value identifies each row in a relational table.",
      purpose:
        "It gives every row a stable database identity for references, updates, joins, indexing, and enforcement against duplicate records.",
      when: "Define a primary key on every durable relational table, choosing a stable minimal value that will not need to change with mutable business attributes.",
      context:
        "Customers can change email addresses, and two accounts may eventually reuse the same address under retention policy.",
      application:
        "The customer table uses a generated immutable ID as primary key and applies a separate unique rule to currently active email addresses.",
      phrase:
        "“Do not use the editable email as the primary key; keep identity stable and model uniqueness separately.”",
      aliases: ["pk", "primary identifier", "chave primária"],
      confusion:
        "A primary key is the table's chosen row identity; a unique constraint also prevents duplicates but does not necessarily serve as the primary reference.",
    }),
    "pt-BR": content({
      definition:
        "Primary Key é a candidate key escolhida cujo valor único e não nulo identifica cada row de uma table relacional.",
      purpose:
        "Ela oferece identidade estável para referências, updates, joins, indexes e proteção contra registros duplicados.",
      when: "Defina primary key em toda table durável, escolhendo valor mínimo e estável que não precise mudar com atributos de negócio editáveis.",
      context:
        "Clientes podem alterar e-mail, e duas contas podem reutilizar o mesmo endereço conforme a política de retenção.",
      application:
        "A table customer usa ID gerado e imutável como primary key e uma regra unique separada para e-mails ativos.",
      phrase:
        "“Não use o e-mail editável como primary key; mantenha identidade estável e modele a unicidade separadamente.”",
      aliases: ["pk", "primary identifier", "chave primária"],
      confusion:
        "Primary key é a identidade escolhida da row; unique constraint também evita duplicatas, mas não é necessariamente a referência principal.",
    }),
  },
  "foreign-key": {
    en: content({
      definition:
        "A foreign key is a relational constraint requiring values in one table's column set to match an existing candidate key in a referenced table, or be null when allowed.",
      purpose:
        "It enforces referential integrity so relationships cannot silently point to nonexistent records and defines behavior for referenced updates or deletion.",
      when: "Use a foreign key when a relationship must remain valid within the same relational database, selecting cascade, restrict, or null behavior according to the domain lifecycle.",
      context:
        "Every order must belong to an existing customer, and customers with retained financial orders cannot simply be deleted.",
      application:
        "orders.customer_id references customers.id, and deletion is restricted until the retention workflow handles dependent records.",
      phrase:
        "“Let the foreign key protect referential integrity even if another writer bypasses this application service.”",
      aliases: ["fk", "referential constraint", "chave estrangeira"],
      confusion:
        "A foreign key references a key in another or the same table; a primary key identifies rows within its own table.",
    }),
    "pt-BR": content({
      definition:
        "Foreign Key é uma constraint que exige que valores de columns correspondam a uma candidate key existente na table referenciada ou sejam nulos quando permitido.",
      purpose:
        "Ela aplica integridade referencial para relações não apontarem a registros inexistentes e define comportamento em update ou remoção da referência.",
      when: "Use foreign key quando uma relação precisar permanecer válida no mesmo banco, escolhendo cascade, restrict ou null conforme o ciclo de vida.",
      context:
        "Todo pedido deve pertencer a cliente existente, e clientes com registros financeiros retidos não podem ser simplesmente removidos.",
      application:
        "orders.customer_id referencia customers.id, e a remoção fica restrita até o fluxo de retenção tratar os dependentes.",
      phrase:
        "“Deixe a foreign key proteger a integridade mesmo se outro escritor ignorar este service da aplicação.”",
      aliases: ["fk", "referential constraint", "chave estrangeira"],
      confusion:
        "Foreign key referencia uma key em outra ou na mesma table; primary key identifica rows dentro da própria table.",
    }),
  },
  "unique-constraint": {
    en: content({
      definition:
        "A unique constraint is a database rule that prevents two rows from containing the same value or combination of values in selected columns.",
      purpose:
        "It enforces data uniqueness atomically across concurrent writers instead of relying on a race-prone application query before insertion.",
      when: "Use a unique constraint whenever duplicates would violate the data model, considering null semantics, case normalization, scope, and partial conditions.",
      context:
        "Two application instances receive registration requests for the same normalized email at nearly the same time.",
      application:
        "A unique constraint on normalized_email allows one insert and rejects the other, which the application maps to an already-registered response.",
      phrase:
        "“Keep the pre-check for usability, but let the unique constraint decide safely under concurrency.”",
      aliases: [
        "unique key",
        "uniqueness constraint",
        "restrição de unicidade",
      ],
      confusion:
        "A unique constraint prevents duplicate candidate values; a primary key is the one selected identity for every row and cannot be null.",
    }),
    "pt-BR": content({
      definition:
        "Unique Constraint é uma regra do banco que impede duas rows de conterem o mesmo valor ou combinação nas columns selecionadas.",
      purpose:
        "Ela garante unicidade atomicamente entre escritores concorrentes, sem depender de uma query prévia sujeita a race condition.",
      when: "Use unique constraint quando duplicatas violarem o modelo, considerando null, normalização de caixa, escopo e condições parciais.",
      context:
        "Duas instâncias recebem quase simultaneamente cadastros com o mesmo e-mail normalizado.",
      application:
        "A constraint em normalized_email aceita um insert e rejeita o outro, que a aplicação converte em resposta de cadastro existente.",
      phrase:
        "“Mantenha a verificação prévia para usabilidade, mas deixe a unique constraint decidir com segurança na concorrência.”",
      aliases: [
        "unique key",
        "uniqueness constraint",
        "restrição de unicidade",
      ],
      confusion:
        "Unique constraint impede valores candidatos duplicados; primary key é a identidade escolhida para toda row e não aceita null.",
    }),
  },
  index: {
    en: content({
      definition:
        "A database index is an auxiliary data structure that organizes selected column values so the DBMS can locate, order, or join rows without scanning the entire table.",
      purpose:
        "It accelerates matching and sorting for chosen access patterns at the cost of storage, memory, maintenance during writes, and operational complexity.",
      when: "Add an index after examining real query predicates, ordering, selectivity, execution plans, and write cost; remove indexes that duplicate others or provide no value.",
      context:
        "Support agents repeatedly search a large orders table by customer and newest creation time, causing full scans.",
      application:
        "A composite index on customer_id and created_at supports the filter and ordering, and the team confirms the new execution plan and write impact.",
      phrase:
        "“Check the execution plan before adding an index; the column order must match how this query filters and sorts.”",
      aliases: ["database index", "índice de banco", "index structure"],
      confusion:
        "An index speeds selected access paths; a constraint enforces a data rule, although some constraints use an index internally.",
    }),
    "pt-BR": content({
      definition:
        "Index de banco é uma estrutura auxiliar que organiza valores de columns para o DBMS localizar, ordenar ou juntar rows sem percorrer toda a table.",
      purpose:
        "Ele acelera acessos escolhidos ao custo de armazenamento, memória, manutenção durante escritas e complexidade operacional.",
      when: "Adicione index após analisar filtros, ordenação, seletividade, execution plan e custo de escrita; remova os redundantes ou sem utilidade.",
      context:
        "O suporte busca repetidamente uma grande table de pedidos por cliente e data mais recente, causando full scans.",
      application:
        "Um index composto em customer_id e created_at atende filtro e ordem, e o time confirma o novo plano e impacto nas escritas.",
      phrase:
        "“Confira o execution plan antes de criar index; a ordem das columns deve corresponder aos filtros e ordenação.”",
      aliases: ["database index", "índice de banco", "estrutura de índice"],
      confusion:
        "Index acelera acessos; constraint aplica uma regra de dados, embora algumas constraints usem index internamente.",
    }),
  },
  query: {
    en: content({
      definition:
        "A query is a structured request to read, aggregate, create, change, or remove data according to the operations supported by a data system.",
      purpose:
        "It expresses the desired data operation declaratively or procedurally so the database can validate it, choose an execution strategy, and return a result.",
      when: "Write a query when interacting with stored data, parameterizing untrusted values and reviewing correctness, transactions, access paths, and result size.",
      context:
        "A report needs monthly revenue grouped by currency from paid orders without loading every row into application memory.",
      application:
        "A parameterized aggregate query filters the date range and status, groups by currency, and lets the DBMS execute the calculation near the data.",
      phrase:
        "“Parameterize the query and inspect its plan with production-like cardinality before enabling the report.”",
      aliases: ["database query", "consulta de banco", "data query"],
      confusion:
        "A query expresses an operation over data; a command is often used specifically for an intent that changes state, depending on the architecture.",
    }),
    "pt-BR": content({
      definition:
        "Query é uma solicitação estruturada para ler, agregar, criar, alterar ou remover dados conforme as operações suportadas pelo sistema.",
      purpose:
        "Ela expressa a operação desejada para o banco validar, escolher uma estratégia de execução e devolver um resultado.",
      when: "Escreva query ao interagir com dados persistidos, parametrizando valores não confiáveis e revisando correção, transaction, acesso e tamanho.",
      context:
        "Um relatório precisa da receita mensal por moeda em pedidos pagos sem carregar todas as rows na memória da aplicação.",
      application:
        "Uma query agregada parametrizada filtra período e status, agrupa por moeda e deixa o DBMS calcular próximo aos dados.",
      phrase:
        "“Parametrize a query e examine o plan com cardinalidade semelhante à produção antes de liberar o relatório.”",
      aliases: ["database query", "consulta de banco", "consulta de dados"],
      confusion:
        "Query expressa operação sobre dados; command costuma indicar especificamente uma intenção que altera estado, conforme a arquitetura.",
    }),
  },
  join: {
    en: content({
      definition:
        "A join is a relational operation that combines rows from two inputs according to a matching condition and a selected treatment of unmatched rows.",
      purpose:
        "It reconstructs related information stored in separate normalized tables and supports comparisons or aggregates across those relationships.",
      when: "Use a join when one result needs attributes from related relations, selecting inner, left, right, full, or cross semantics deliberately.",
      context:
        "A report must list every customer and the date of their latest order, including customers who have never ordered.",
      application:
        "A left join preserves all customers and matches aggregated order data when available, producing null for customers without an order.",
      phrase:
        "“Use a left join here; an inner join would silently remove customers with no matching order.”",
      aliases: ["sql join", "relational join", "junção de tabelas"],
      confusion:
        "An inner join returns only matching combinations; a left join also preserves unmatched rows from its left input.",
    }),
    "pt-BR": content({
      definition:
        "Join é uma operação relacional que combina rows de duas entradas conforme uma condição e um tratamento escolhido para registros sem correspondência.",
      purpose:
        "Ele reconstrói informações relacionadas mantidas em tables normalizadas separadas e permite comparações ou agregações entre elas.",
      when: "Use join quando um resultado precisar de atributos de relações ligadas, escolhendo conscientemente inner, left, right, full ou cross.",
      context:
        "Um relatório deve listar todos os clientes e a data do último pedido, incluindo quem nunca fez pedido.",
      application:
        "Um left join preserva todos os clientes e associa pedidos agregados quando existirem, produzindo null nos demais.",
      phrase:
        "“Use left join aqui; inner join removeria silenciosamente clientes sem pedido correspondente.”",
      aliases: ["sql join", "relational join", "junção de tabelas"],
      confusion:
        "Inner join retorna apenas combinações correspondentes; left join também preserva rows sem correspondência da entrada esquerda.",
    }),
  },
  transaction: {
    en: content({
      definition:
        "A database transaction is a bounded unit of work whose operations are committed together or rolled back so intermediate partial changes do not become the final result.",
      purpose:
        "It protects data invariants across related reads and writes and provides defined isolation from concurrent transactions and durability after successful commit.",
      when: "Use a transaction when several database operations form one atomic business change or require a consistent view, keeping its scope short and external calls outside locks when possible.",
      context:
        "A transfer must debit one account, credit another, and record a ledger entry without exposing only part of the movement.",
      application:
        "The database performs all three writes in one transaction and commits only after balance and ownership rules pass; any failure triggers rollback.",
      phrase:
        "“Keep the transfer writes in one transaction, but do not hold it open while calling the notification provider.”",
      aliases: [
        "database transaction",
        "transação de banco",
        "transactional unit",
      ],
      confusion:
        "A transaction is the complete unit of work; commit confirms it and rollback discards its uncommitted changes.",
    }),
    "pt-BR": content({
      definition:
        "Database Transaction é uma unidade delimitada cujas operações recebem commit juntas ou rollback para mudanças parciais não se tornarem o resultado final.",
      purpose:
        "Ela protege invariantes entre leituras e escritas relacionadas e oferece isolamento definido contra concorrência e durabilidade após commit.",
      when: "Use transaction quando várias operações formarem uma mudança atômica ou exigirem visão consistente, mantendo escopo curto e chamadas externas fora de locks.",
      context:
        "Uma transferência precisa debitar uma conta, creditar outra e registrar o ledger sem expor apenas parte do movimento.",
      application:
        "O banco executa as três escritas em uma transaction e confirma somente após as regras passarem; falhas causam rollback.",
      phrase:
        "“Mantenha as escritas da transferência em uma transaction, mas não a deixe aberta durante chamada ao provedor de notificação.”",
      aliases: [
        "database transaction",
        "transação de banco",
        "unidade transacional",
      ],
      confusion:
        "Transaction é a unidade completa; commit a confirma e rollback descarta suas mudanças não confirmadas.",
    }),
  },
  commit: {
    en: content({
      definition:
        "A database commit is the operation that successfully completes a transaction and makes its changes durable and visible according to the system's isolation rules.",
      purpose:
        "It establishes the transaction's final acceptance boundary after all required operations and constraints have succeeded.",
      when: "Commit only after the complete unit of database work is valid, handling commit failure as an unknown or failed outcome according to the driver and system guarantees.",
      context:
        "An order transaction has inserted the order and items and reserved inventory without encountering a constraint or application error.",
      application:
        "The application commits once at the use-case boundary; the database durably records the changes and releases transaction resources.",
      phrase:
        "“Do not commit after each row; the order and inventory reservation must succeed as one transaction.”",
      aliases: [
        "transaction commit",
        "database commit",
        "confirmação de transação",
      ],
      confusion:
        "Commit confirms a database transaction; a Git commit records a source-control snapshot and has unrelated durability and concurrency semantics.",
    }),
    "pt-BR": content({
      definition:
        "Database Commit é a operação que conclui uma transaction e torna suas mudanças duráveis e visíveis conforme as regras de isolamento.",
      purpose:
        "Ele estabelece a fronteira final de aceitação após todas as operações e constraints obrigatórias funcionarem.",
      when: "Faça commit somente quando toda a unidade estiver válida, tratando falha na confirmação conforme as garantias do driver e sistema.",
      context:
        "Uma transaction inseriu pedido e itens e reservou estoque sem encontrar erro de constraint ou aplicação.",
      application:
        "A aplicação confirma uma vez na fronteira do use case; o banco grava as mudanças e libera os recursos transacionais.",
      phrase:
        "“Não faça commit após cada row; pedido e reserva precisam funcionar como uma única transaction.”",
      aliases: [
        "transaction commit",
        "database commit",
        "confirmação de transação",
      ],
      confusion:
        "Database commit confirma transaction; Git commit registra snapshot de código e possui outra semântica de concorrência e durabilidade.",
    }),
  },
  migration: {
    en: content({
      definition:
        "A database migration is a versioned, ordered change that transforms a database schema or its data from one known state to another.",
      purpose:
        "It makes database evolution reproducible and traceable across environments while coordinating structural changes with application compatibility.",
      when: "Create a migration for every schema or controlled data transformation, designing large changes for locking, runtime, rollback or roll-forward, and mixed application versions.",
      context:
        "A busy orders table needs a required tracking column without blocking writes or breaking the currently deployed application.",
      application:
        "The team adds a nullable column, deploys compatible code, backfills in batches, validates data, and applies the final constraint later.",
      phrase:
        "“Split this migration into expand, backfill, and contract stages so old and new application versions can coexist.”",
      aliases: ["database migration", "schema migration", "migração de banco"],
      confusion:
        "A migration changes schema or data versions; data migration can also mean moving datasets between separate systems or platforms.",
    }),
    "pt-BR": content({
      definition:
        "Database Migration é uma mudança versionada e ordenada que transforma schema ou dados de um estado conhecido para outro.",
      purpose:
        "Ela torna a evolução reproduzível e rastreável entre ambientes e coordena mudanças estruturais com compatibilidade da aplicação.",
      when: "Crie migration para mudanças de schema ou dados, projetando volume, locks, duração, rollback ou roll-forward e coexistência de versões.",
      context:
        "Uma table movimentada precisa de column obrigatória de rastreamento sem bloquear escritas nem quebrar a aplicação atual.",
      application:
        "O time adiciona column nullable, implanta código compatível, preenche em lotes, valida e aplica a constraint final depois.",
      phrase:
        "“Divida a migration em expand, backfill e contract para versões antigas e novas coexistirem.”",
      aliases: ["database migration", "schema migration", "migração de banco"],
      confusion:
        "Migration muda versões de schema ou dados; data migration também pode significar mover datasets entre sistemas diferentes.",
    }),
  },
  seed: {
    en: content({
      definition:
        "Database seeding is the controlled insertion of initial, reference, demonstration, or test data needed for a database environment to be usable.",
      purpose:
        "It creates known baseline records reproducibly, such as system roles, country codes, local test accounts, or example catalog entries.",
      when: "Use seeds for required stable reference data and disposable non-production fixtures, making reruns idempotent and keeping real secrets or personal data out.",
      context:
        "Every new development database needs the same permission roles and sample products before the application can be exercised.",
      application:
        "A versioned seed upserts fixed role identifiers and a development-only script creates clearly synthetic products and accounts.",
      phrase:
        "“Make the reference-data seed idempotent so rerunning setup does not duplicate roles.”",
      aliases: ["database seed", "seed data", "carga inicial de dados"],
      confusion:
        "A seed establishes baseline data; a migration evolves schema or existing data between versions, though migration tools may deliver reference data.",
    }),
    "pt-BR": content({
      definition:
        "Database Seeding é a inserção controlada de dados iniciais, de referência, demonstração ou teste necessários para tornar um ambiente utilizável.",
      purpose:
        "Ele cria registros-base conhecidos e reproduzíveis, como papéis, códigos de países, contas de teste ou itens de exemplo.",
      when: "Use seeds para referência estável e fixtures descartáveis fora de produção, tornando repetição idempotente e excluindo segredos ou dados pessoais reais.",
      context:
        "Todo database novo de desenvolvimento precisa dos mesmos papéis e produtos sintéticos antes de testar a aplicação.",
      application:
        "Um seed versionado faz upsert dos papéis fixos e um script exclusivo de desenvolvimento cria produtos e contas claramente fictícios.",
      phrase:
        "“Torne o seed de referência idempotente para repetir o setup sem duplicar papéis.”",
      aliases: ["database seed", "seed data", "carga inicial de dados"],
      confusion:
        "Seed estabelece dados-base; migration evolui schema ou dados existentes, embora ferramentas de migration possam entregar referências.",
    }),
  },
  normalization: {
    en: content({
      definition:
        "Database normalization is the systematic organization of relational data into tables and dependencies that reduce redundancy and prevent update, insertion, and deletion anomalies.",
      purpose:
        "It ensures each fact is represented under appropriate keys and dependencies so one real-world change does not require inconsistent updates in many places.",
      when: "Normalize transactional relational models during design, then depart from a normal form only for a measured access need with explicit consistency ownership.",
      context:
        "Every order row repeats the customer's current address, causing old orders to change incorrectly when the customer profile is updated.",
      application:
        "The model separates customer profile facts and intentional order-address snapshots, assigning each different lifecycle a clear table and key.",
      phrase:
        "“First normalize the facts and their dependencies; then measure whether a targeted read model is necessary.”",
      aliases: [
        "database normalization",
        "normal forms",
        "normalização de banco",
      ],
      confusion:
        "Normalization reduces structural redundancy and anomalies; denormalization intentionally duplicates or precomputes data for a known access tradeoff.",
    }),
    "pt-BR": content({
      definition:
        "Database Normalization é a organização sistemática de dados relacionais em tables e dependências que reduz redundância e anomalias de update, insert e delete.",
      purpose:
        "Ela representa cada fato sob keys e dependências adequadas para uma mudança real não exigir updates inconsistentes em vários lugares.",
      when: "Normalize modelos transacionais durante o projeto e abandone uma forma normal apenas por necessidade medida e com responsabilidade de consistência explícita.",
      context:
        "Cada row de pedido repete o endereço atual, fazendo pedidos antigos mudarem incorretamente quando o perfil é atualizado.",
      application:
        "O modelo separa fatos do perfil e snapshots intencionais do endereço do pedido, dando table e key a cada ciclo de vida.",
      phrase:
        "“Primeiro normalize fatos e dependências; depois meça se um read model direcionado é necessário.”",
      aliases: [
        "database normalization",
        "normal forms",
        "normalização de banco",
      ],
      confusion:
        "Normalization reduz redundância e anomalias; denormalization duplica ou pré-calcula dados intencionalmente por um trade-off conhecido.",
    }),
  },
  denormalization: {
    en: content({
      definition:
        "Denormalization is the intentional duplication, aggregation, or precomputation of data to optimize specific reads at the cost of additional storage and consistency work.",
      purpose:
        "It reduces expensive joins or repeated calculations for measured access patterns by keeping a read-ready representation close to the query shape.",
      when: "Denormalize only after identifying a performance need and defining the authoritative source, update mechanism, acceptable staleness, repair process, and failure behavior.",
      context:
        "A product-list page repeatedly joins and aggregates many tables to display a stable summary under heavy traffic.",
      application:
        "A projection stores the display summary and updates it from product events, while normalized transactional tables remain the source of truth.",
      phrase:
        "“Document which record is authoritative before duplicating this value into the denormalized read model.”",
      aliases: [
        "database denormalization",
        "denormalized model",
        "desnormalização",
      ],
      confusion:
        "Denormalization deliberately adds redundancy for an access tradeoff; normalization organizes dependencies to reduce redundancy and update anomalies.",
    }),
    "pt-BR": content({
      definition:
        "Denormalization é a duplicação, agregação ou pré-computação intencional de dados para otimizar leituras específicas, com custo de armazenamento e consistência.",
      purpose:
        "Ela reduz joins caros ou cálculos repetidos em padrões medidos, mantendo uma representação próxima ao formato da consulta.",
      when: "Desnormalize após identificar necessidade e definir fonte autoritativa, atualização, staleness aceitável, reparo e comportamento em falhas.",
      context:
        "Uma listagem agrega muitas tables repetidamente para mostrar um resumo estável sob tráfego elevado.",
      application:
        "Uma projeção guarda o resumo e é atualizada por eventos, enquanto tables transacionais normalizadas continuam como fonte da verdade.",
      phrase:
        "“Documente qual registro é autoritativo antes de duplicar este valor no read model denormalized.”",
      aliases: [
        "database denormalization",
        "denormalized model",
        "desnormalização",
      ],
      confusion:
        "Denormalization adiciona redundância por um trade-off; normalization organiza dependências para reduzir redundância e anomalias.",
    }),
  },
  orm: {
    en: content({
      definition:
        "Object-Relational Mapping is a technique and tool layer that maps application objects and operations to relational tables, rows, relationships, and SQL statements.",
      purpose:
        "It reduces repetitive persistence code, tracks changes, manages mappings, and offers query and migration abstractions while retaining a relational database underneath.",
      when: "Use an ORM when its mapping and productivity fit the workload, while reviewing generated queries, transaction boundaries, loading behavior, indexes, and database-specific needs.",
      context:
        "An application repeatedly converts customer and order rows into typed objects and writes similar insert and update statements.",
      application:
        "The ORM maps entities and relationships, generates parameterized SQL, and the team inspects eager loading and query plans on critical paths.",
      phrase:
        "“The ORM removed boilerplate, but inspect this generated query because it is loading every order item in a loop.”",
      aliases: [
        "object relational mapping",
        "object-relational mapper",
        "mapeamento objeto-relacional",
      ],
      confusion:
        "An ORM maps object and relational models; it does not remove the need to understand SQL, transactions, indexes, or database behavior.",
    }),
    "pt-BR": content({
      definition:
        "Object-Relational Mapping é uma técnica e camada de ferramentas que mapeia objetos e operações da aplicação para tables, rows, relações e SQL.",
      purpose:
        "Ele reduz código repetitivo de persistência, acompanha mudanças e oferece abstrações de query e migration sobre um banco relacional.",
      when: "Use ORM quando o mapeamento se adequar ao workload, revisando queries geradas, transactions, carregamento, indexes e necessidades específicas do banco.",
      context:
        "Uma aplicação converte repetidamente rows de clientes e pedidos em objetos tipados e escreve inserts e updates semelhantes.",
      application:
        "O ORM mapeia entities e relações e gera SQL parametrizado, enquanto o time inspeciona carregamento e plans nos caminhos críticos.",
      phrase:
        "“O ORM reduziu boilerplate, mas examine esta query gerada porque ela carrega itens em um loop.”",
      aliases: [
        "object relational mapping",
        "object-relational mapper",
        "mapeamento objeto-relacional",
      ],
      confusion:
        "ORM mapeia modelos de objetos e relações; ele não elimina a necessidade de entender SQL, transactions, indexes ou o banco.",
    }),
  },
  acid: {
    en: content({
      definition:
        "ACID names four transaction properties: Atomicity, Consistency, Isolation, and Durability.",
      purpose:
        "Together they describe guarantees that keep transactions all-or-nothing, preserve declared invariants, control concurrent interaction, and retain committed changes after failure.",
      when: "Evaluate ACID guarantees when choosing a data store and transaction design, checking the exact isolation, replication, and durability configuration rather than relying on the label alone.",
      context:
        "A banking transfer must never leave only one account updated, even with concurrent requests or a server crash after confirmation.",
      application:
        "One transaction applies both account updates under appropriate isolation and acknowledges success only after the durable commit guarantee.",
      phrase:
        "“Confirm the configured isolation and synchronous commit behavior; saying ACID does not specify every operational guarantee.”",
      aliases: [
        "atomicity consistency isolation durability",
        "propriedades acid",
      ],
      confusion:
        "ACID consistency means preserving declared invariants in a transaction; distributed consistency describes agreement or visibility among replicas.",
    }),
    "pt-BR": content({
      definition:
        "ACID nomeia quatro propriedades de transactions: Atomicity, Consistency, Isolation e Durability.",
      purpose:
        "Juntas, elas descrevem garantias de tudo ou nada, preservação de invariantes, controle de concorrência e retenção de mudanças confirmadas após falhas.",
      when: "Avalie ACID ao escolher data store e transactions, conferindo configuração exata de isolamento, replicação e durabilidade em vez de confiar apenas no rótulo.",
      context:
        "Uma transferência bancária nunca pode atualizar somente uma conta, mesmo com requests concorrentes ou crash após confirmação.",
      application:
        "Uma transaction aplica as duas atualizações sob isolamento adequado e confirma sucesso somente após a garantia de commit durável.",
      phrase:
        "“Confirme isolation e synchronous commit configurados; dizer ACID não especifica todas as garantias operacionais.”",
      aliases: [
        "atomicity consistency isolation durability",
        "propriedades acid",
      ],
      confusion:
        "Consistency em ACID preserva invariantes declarados; consistência distribuída trata de concordância ou visibilidade entre réplicas.",
    }),
  },
  consistency: {
    en: content({
      definition:
        "Consistency describes which valid states and visibility guarantees a data system provides as operations and replicas process changes.",
      purpose:
        "It lets designers reason about invariants and about when a write becomes observable to later or concurrent reads across the system.",
      when: "Define the required consistency per operation, distinguishing transactional invariant preservation from distributed models such as strong, causal, or eventual consistency.",
      context:
        "After changing an account password, a user expects every authentication request to reject the old password immediately.",
      application:
        "The identity store uses a strongly consistent path for credentials, while less critical analytics projections update asynchronously.",
      phrase:
        "“This credential change requires strong read-after-write consistency; eventual propagation is not acceptable on the login path.”",
      aliases: [
        "data consistency",
        "consistency model",
        "consistência de dados",
      ],
      confusion:
        "Consistency defines observable data guarantees; availability describes whether the system can answer requests, and a partition can force tradeoffs between them.",
    }),
    "pt-BR": content({
      definition:
        "Consistency descreve quais estados válidos e garantias de visibilidade um sistema oferece enquanto operações e réplicas processam mudanças.",
      purpose:
        "Ela permite raciocinar sobre invariantes e sobre quando uma escrita se torna observável em leituras posteriores ou concorrentes.",
      when: "Defina consistência por operação, separando invariantes transacionais de modelos distribuídos como strong, causal ou eventual consistency.",
      context:
        "Após alterar a senha, uma pessoa espera que toda autenticação rejeite a senha antiga imediatamente.",
      application:
        "O identity store usa caminho strongly consistent para credenciais, enquanto projeções analíticas menos críticas atualizam assincronamente.",
      phrase:
        "“A mudança de credencial exige read-after-write forte; propagação eventual não serve no login.”",
      aliases: [
        "data consistency",
        "consistency model",
        "consistência de dados",
      ],
      confusion:
        "Consistency define garantias observáveis; availability indica se o sistema responde, e uma partition pode impor trade-offs.",
    }),
  },
  replication: {
    en: content({
      definition:
        "Replication is the maintenance of copies of data or state on multiple nodes by transferring and applying changes from a source or through a coordination protocol.",
      purpose:
        "It supports failover, read distribution, geographic proximity, backup workflows, and resilience against loss of an individual storage member.",
      when: "Use replication when availability, read scale, recovery, or regional access requires copies, defining lag, conflict, quorum, promotion, and durability behavior.",
      context:
        "A database must continue serving after its primary machine fails and also provide read capacity for reporting.",
      application:
        "Changes stream to replicas; one synchronous replica supports failover and asynchronous replicas serve tolerant reports with lag monitoring.",
      phrase:
        "“Replication is not a backup if an accidental delete is immediately copied to every replica.”",
      aliases: [
        "data replication",
        "database replication",
        "replicação de dados",
      ],
      confusion:
        "Replication keeps operational copies synchronized; backup preserves recoverable historical data against deletion, corruption, or broader failure.",
    }),
    "pt-BR": content({
      definition:
        "Replication é a manutenção de cópias de dados ou estado em vários nodes pela transferência e aplicação de mudanças de uma fonte ou protocolo de coordenação.",
      purpose:
        "Ela oferece failover, distribuição de leitura, proximidade geográfica, apoio a backup e resiliência à perda de um membro.",
      when: "Use replication quando disponibilidade, escala de leitura, recuperação ou acesso regional exigirem cópias, definindo lag, conflitos, quorum e promoção.",
      context:
        "Um database precisa continuar após falha da máquina primária e fornecer capacidade de leitura a relatórios.",
      application:
        "Mudanças fluem às réplicas; uma síncrona oferece failover e outras assíncronas atendem relatórios tolerantes a lag.",
      phrase:
        "“Replication não é backup se uma exclusão acidental for copiada imediatamente para todas as réplicas.”",
      aliases: [
        "data replication",
        "database replication",
        "replicação de dados",
      ],
      confusion:
        "Replication mantém cópias operacionais sincronizadas; backup preserva histórico recuperável contra exclusão, corrupção ou falha ampla.",
    }),
  },
  sharding: {
    en: content({
      definition:
        "Sharding is horizontal data partitioning that divides one logical dataset among separate database nodes according to a shard key and routing rule.",
      purpose:
        "It distributes storage and write or query load beyond one node's capacity while allowing each shard to manage only part of the data.",
      when: "Use sharding after simpler scaling options are insufficient and a stable key can distribute load, accounting for cross-shard queries, transactions, rebalancing, and hot partitions.",
      context:
        "A multi-tenant event store outgrows the write and storage capacity of its largest single database instance.",
      application:
        "Tenant ID determines the shard, routing sends each request to its owner, and monitoring detects imbalanced tenants before planned resharding.",
      phrase:
        "“Choose the shard key from traffic distribution, not only data count, or one large tenant will become a hot shard.”",
      aliases: [
        "database sharding",
        "horizontal partitioning",
        "fragmentação horizontal",
      ],
      confusion:
        "Sharding divides different data among nodes; replication maintains copies of the same data on multiple nodes.",
    }),
    "pt-BR": content({
      definition:
        "Sharding é o particionamento horizontal que divide um dataset lógico entre nodes de banco conforme uma shard key e regra de roteamento.",
      purpose:
        "Ele distribui armazenamento e carga de escrita ou consulta além de um node, deixando cada shard administrar apenas parte dos dados.",
      when: "Use sharding após opções simples de escala não bastarem e uma key puder distribuir carga, considerando queries, transactions, rebalancing e hot shards.",
      context:
        "Um event store multi-tenant ultrapassa a capacidade de escrita e disco da maior instância única disponível.",
      application:
        "Tenant ID escolhe o shard, o roteamento envia cada request ao responsável e o monitoramento detecta desequilíbrios antes do resharding.",
      phrase:
        "“Escolha a shard key pela distribuição de tráfego, não só pela contagem, ou um tenant grande criará hot shard.”",
      aliases: [
        "database sharding",
        "horizontal partitioning",
        "fragmentação horizontal",
      ],
      confusion:
        "Sharding divide dados diferentes entre nodes; replication mantém cópias dos mesmos dados em vários nodes.",
    }),
  },
  deadlock: {
    en: content({
      definition:
        "A deadlock is a cycle in which two or more concurrent transactions or processes each hold a resource while waiting for another resource held by the next participant.",
      purpose:
        "Recognizing deadlocks explains why progress stops despite resources being active and allows the system to break the cycle by aborting one participant.",
      when: "Investigate deadlocks in concurrent updates, reduce transaction duration, acquire shared resources in consistent order, and implement safe retries for selected victims.",
      context:
        "One transaction locks account A then requests B, while another locks B then requests A during simultaneous transfers.",
      application:
        "The database detects the cycle and aborts one transaction; the application retries it with bounded backoff while code adopts consistent account ordering.",
      phrase:
        "“Sort account IDs before locking them so concurrent transfers acquire rows in the same order.”",
      aliases: ["database deadlock", "lock cycle", "impasse de bloqueio"],
      confusion:
        "A deadlock is a circular wait that cannot progress by itself; ordinary lock contention can proceed when the current holder finishes.",
    }),
    "pt-BR": content({
      definition:
        "Deadlock é um ciclo em que transactions ou processos concorrentes mantêm recursos enquanto aguardam outros mantidos pelo próximo participante.",
      purpose:
        "Reconhecê-lo explica por que o progresso para e permite ao sistema quebrar o ciclo abortando um participante.",
      when: "Investigue deadlocks em updates concorrentes, reduza transactions, adquira recursos em ordem consistente e implemente retries seguros para vítimas.",
      context:
        "Uma transaction bloqueia conta A e espera B, enquanto outra bloqueia B e espera A durante transferências simultâneas.",
      application:
        "O banco detecta o ciclo e aborta uma transaction; a aplicação repete com backoff e o código passa a ordenar as contas.",
      phrase:
        "“Ordene os IDs antes de bloquear para transferências concorrentes adquirirem rows na mesma ordem.”",
      aliases: ["database deadlock", "lock cycle", "impasse de bloqueio"],
      confusion:
        "Deadlock é espera circular sem progresso próprio; contenção comum prossegue quando quem possui o lock termina.",
    }),
  },
  "connection-pool": {
    en: content({
      definition:
        "A connection pool is a managed set of reusable open connections that borrowers acquire temporarily to communicate with a database or remote service.",
      purpose:
        "It avoids repeated connection setup cost and caps concurrency so application demand does not create more active connections than the dependency can sustain.",
      when: "Use a pool for frequently accessed connection-oriented dependencies, sizing it from total instances and server capacity and enforcing acquisition, query, idle, and lifetime limits.",
      context:
        "Fifty application instances can each receive many requests, but the database safely supports only a limited number of concurrent sessions.",
      application:
        "Each instance receives a bounded pool, waits briefly when exhausted, returns connections in finally blocks, and reports saturation and wait time.",
      phrase:
        "“Count pools across all replicas; twenty connections per instance becomes one thousand at full scale.”",
      aliases: [
        "database connection pool",
        "pool de conexões",
        "connection pooling",
      ],
      confusion:
        "A connection pool reuses and limits connections; a thread or worker pool limits units of application execution and may be sized differently.",
    }),
    "pt-BR": content({
      definition:
        "Connection Pool é um conjunto administrado de conexões abertas e reutilizáveis que clientes tomam temporariamente para acessar banco ou serviço remoto.",
      purpose:
        "Ele evita o custo de reconectar e limita concorrência para a demanda não criar mais sessões do que a dependência suporta.",
      when: "Use pool em dependências acessadas frequentemente, dimensionando pelo total de instâncias e aplicando limites de aquisição, query, idle e lifetime.",
      context:
        "Cinquenta instâncias recebem muitas requests, mas o database suporta com segurança um número limitado de sessões simultâneas.",
      application:
        "Cada instância recebe pool limitado, aguarda brevemente quando lotado, devolve conexões em finally e mede saturação e espera.",
      phrase:
        "“Some os pools de todas as réplicas; vinte conexões por instância viram mil na escala total.”",
      aliases: [
        "database connection pool",
        "pool de conexões",
        "connection pooling",
      ],
      confusion:
        "Connection pool reutiliza e limita conexões; thread ou worker pool limita unidades de execução da aplicação.",
    }),
  },
  redis: {
    en: content({
      definition:
        "Redis is an in-memory data store that provides typed structures and commands for key-value access, caching, counters, streams, queues, coordination, and optional persistence.",
      purpose:
        "It serves low-latency operations through structures such as strings, hashes, sets, sorted sets, lists, and streams with atomic server-side commands.",
      when: "Use Redis for access patterns suited to memory and keys, defining eviction, persistence, replication, cluster, durability, and failure behavior rather than treating it as a universal database.",
      context:
        "An API repeatedly calculates the same product summaries and also needs atomic per-client request counters with short expiration.",
      application:
        "Redis stores expiring cache entries and increments rate-limit counters atomically, while the relational database remains authoritative for products.",
      phrase:
        "“Set an explicit TTL and decide what happens on a Redis miss or outage before putting this value in cache.”",
      aliases: ["remote dictionary server", "redis data store", "banco redis"],
      confusion:
        "Redis can persist data, but an application cache built on Redis is usually disposable; durability depends on configuration and architecture.",
    }),
    "pt-BR": content({
      definition:
        "Redis é um data store em memória com estruturas e comandos para chave-valor, cache, contadores, streams, filas, coordenação e persistência opcional.",
      purpose:
        "Ele executa operações de baixa latência em strings, hashes, sets, sorted sets, lists e streams com comandos atômicos no servidor.",
      when: "Use Redis em acessos adequados a memória e keys, definindo eviction, persistência, replication, cluster, durabilidade e falhas.",
      context:
        "Uma API recalcula resumos de produtos e também precisa de contadores atômicos de requests com expiração curta.",
      application:
        "Redis guarda cache com TTL e incrementa rate limits atomicamente, enquanto o banco relacional continua autoritativo para produtos.",
      phrase:
        "“Defina TTL e comportamento em miss ou indisponibilidade do Redis antes de colocar este valor no cache.”",
      aliases: ["remote dictionary server", "redis data store", "banco redis"],
      confusion:
        "Redis pode persistir, mas cache de aplicação costuma ser descartável; durabilidade depende da configuração e arquitetura.",
    }),
  },
  postgresql: {
    en: content({
      definition:
        "PostgreSQL is an open-source relational Database Management System known for transactional integrity, extensible types and functions, standards-oriented SQL, and advanced query features.",
      purpose:
        "It stores and queries relational and supported semi-structured data while providing transactions, constraints, indexes, concurrency control, replication, and operational tooling.",
      when: "Use PostgreSQL for workloads needing a capable general-purpose relational database, then design schema, queries, indexes, backups, pooling, and high availability for the actual demand.",
      context:
        "A business platform needs transactional orders, JSON metadata, geographic extensions, full-text search, and reliable recovery in one primary data system.",
      application:
        "The team models core relations with constraints, uses JSONB selectively, enables tested backups and replicas, and monitors query plans and vacuum health.",
      phrase:
        "“PostgreSQL supports this query, but verify the plan and index behavior with production-scale statistics.”",
      aliases: ["postgres", "postgresql database", "banco postgresql"],
      confusion:
        "PostgreSQL is a specific DBMS; SQL is a language used by PostgreSQL and many other relational database systems.",
    }),
    "pt-BR": content({
      definition:
        "PostgreSQL é um Database Management System relacional open source conhecido por integridade transacional, extensibilidade, SQL avançado e recursos de consulta.",
      purpose:
        "Ele armazena e consulta dados relacionais e semiestruturados, oferecendo transactions, constraints, indexes, concorrência, replication e ferramentas operacionais.",
      when: "Use PostgreSQL quando precisar de banco relacional geral e completo, projetando schema, queries, indexes, backups, pooling e disponibilidade para a demanda.",
      context:
        "Uma plataforma precisa de pedidos transacionais, metadados JSON, extensão geográfica, busca textual e recuperação confiável.",
      application:
        "O time modela relações com constraints, usa JSONB seletivamente, habilita backups e réplicas e monitora plans e saúde do vacuum.",
      phrase:
        "“PostgreSQL suporta esta query, mas confira o plan e os indexes com estatísticas em escala de produção.”",
      aliases: ["postgres", "postgresql database", "banco postgresql"],
      confusion:
        "PostgreSQL é um DBMS específico; SQL é uma linguagem usada por PostgreSQL e muitos outros bancos relacionais.",
    }),
  },
};
