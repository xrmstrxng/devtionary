import {
  content,
  type EditorialPair,
} from "@/content/terms/editorial-overrides";

export const qualityEditorialOverrides: Record<string, EditorialPair> = {
  "quality-assurance": {
    en: content({
      definition:
        "Quality Assurance is the systematic prevention and detection work used throughout delivery to provide confidence that a product and its processes meet defined quality expectations.",
      purpose:
        "It combines standards, risk analysis, reviews, testing, automation, metrics, and process improvement instead of relying only on finding defects after implementation.",
      when: "Apply Quality Assurance from discovery through production, selecting controls according to user risk, business impact, change scope, and evidence needed.",
      context:
        "A healthcare feature must be correct, accessible, secure, auditable, and safe across design, implementation, release, and operation.",
      application:
        "The team defines quality risks and acceptance criteria, reviews design, automates critical tests, runs exploratory testing, and monitors production outcomes.",
      phrase:
        "“Quality Assurance starts with the requirement and risk model, not when finished code reaches a tester.”",
      aliases: [
        "qa",
        "qa discipline",
        "software quality assurance",
        "garantia de qualidade",
      ],
      confusion:
        "Quality Assurance covers preventive processes and confidence; Quality Control focuses on evaluating outputs to find whether they meet requirements.",
    }),
    "pt-BR": content({
      definition:
        "Quality Assurance é o trabalho sistemático de prevenção e detecção usado em toda entrega para dar confiança de que produto e processos atendem expectativas.",
      purpose:
        "Ela combina padrões, riscos, reviews, testes, automação, métricas e melhoria de processo, não apenas descoberta de defects após implementação.",
      when: "Aplique Quality Assurance desde discovery até produção, escolhendo controles conforme risco, impacto, escopo e evidências necessárias.",
      context:
        "Uma feature de saúde precisa ser correta, acessível, segura e auditável desde design até operação.",
      application:
        "O time define riscos e acceptance criteria, revisa design, automatiza testes críticos, explora e monitora outcomes em produção.",
      phrase:
        "“Quality Assurance começa no requisito e no risco, não quando o código pronto chega a uma pessoa tester.”",
      aliases: [
        "qa",
        "qa discipline",
        "software quality assurance",
        "garantia de qualidade",
      ],
      confusion:
        "Quality Assurance cobre prevenção e confiança; Quality Control avalia outputs para verificar requisitos.",
    }),
  },
  qa: {
    en: content({
      definition:
        "QA is the common abbreviation for Quality Assurance and also informally names the people or function that help a team build and evaluate product quality.",
      purpose:
        "The role brings risk-based testing, quality coaching, exploratory investigation, automation strategy, and evidence into shared product decisions.",
      when: "Involve QA early in requirement, design, and risk discussion rather than assigning sole ownership of quality or using the role only as a final release gate.",
      context:
        "A team plans a refund workflow with financial, permission, concurrency, accessibility, and support risks.",
      application:
        "QA facilitates risk examples, improves acceptance criteria, designs exploratory sessions and automation, and helps interpret release evidence with the whole team.",
      phrase:
        "“Ask QA to join the design review now; the expensive failure paths are easier to prevent before implementation.”",
      aliases: [
        "quality assurance",
        "quality assurance engineer",
        "analista de qualidade",
      ],
      confusion:
        "QA contributes specialized quality expertise; quality remains a responsibility shared by product, design, engineering, operations, and leadership.",
    }),
    "pt-BR": content({
      definition:
        "QA é a abreviação comum de Quality Assurance e também nomeia informalmente as pessoas ou função que ajudam o time a construir e avaliar qualidade.",
      purpose:
        "A função traz testes por risco, coaching, exploração, estratégia de automação e evidências às decisões compartilhadas de produto.",
      when: "Envolva QA cedo em requisitos, design e riscos, sem atribuir ownership exclusivo da qualidade nem usá-lo apenas como gate final.",
      context:
        "Um time planeja refunds com riscos financeiros, permissão, concorrência, acessibilidade e suporte.",
      application:
        "QA facilita exemplos, melhora acceptance criteria, projeta exploração e automação e interpreta evidências com todo o time.",
      phrase:
        "“Inclua QA na design review agora; failure paths caros são mais fáceis de prevenir antes da implementação.”",
      aliases: [
        "quality assurance",
        "quality assurance engineer",
        "analista de qualidade",
      ],
      confusion:
        "QA oferece especialidade; qualidade continua responsabilidade compartilhada por produto, design, engenharia e operação.",
    }),
  },
  "test-case": {
    en: content({
      definition:
        "A test case is a defined check with preconditions, inputs, actions, and expected observations used to evaluate one behavior or condition.",
      purpose:
        "It makes a verification repeatable and reviewable and records what evidence distinguishes success from failure for a specific risk.",
      when: "Create a test case when exact data and outcomes matter for manual execution, automation, regression, compliance evidence, or boundary analysis.",
      context:
        "A refund rule permits exactly the remaining captured amount but must reject any value one cent higher.",
      application:
        "Separate cases define the balance, request the exact amount and the excessive amount, and assert resulting status, ledger entries, and error response.",
      phrase:
        "“Add a test case at the exact monetary boundary and another immediately above it.”",
      aliases: ["testing case", "caso de teste", "test specification"],
      confusion:
        "A test case defines a specific check and expected result; a test scenario describes a broader behavior or journey that may need several cases.",
    }),
    "pt-BR": content({
      definition:
        "Test Case é uma verificação definida com preconditions, entradas, ações e observações esperadas para avaliar um comportamento ou condição.",
      purpose:
        "Ele torna verificação repetível e revisável e registra qual evidência distingue sucesso de falha para um risco específico.",
      when: "Crie test case quando dados e outcomes exatos importarem em execução manual, automação, regression, compliance ou boundaries.",
      context:
        "Uma regra permite refund exatamente no valor restante, mas rejeita um centavo acima.",
      application:
        "Cases separados usam o valor exato e excessivo e verificam status, ledger e error response.",
      phrase:
        "“Adicione um test case na boundary monetária exata e outro imediatamente acima.”",
      aliases: ["testing case", "caso de teste", "test specification"],
      confusion:
        "Test case define uma verificação específica; test scenario descreve comportamento amplo que pode exigir vários cases.",
    }),
  },
  "test-scenario": {
    en: content({
      definition:
        "A test scenario is a high-level situation, workflow, or user behavior selected for evaluation without necessarily prescribing every execution step and datum.",
      purpose:
        "It organizes coverage around meaningful journeys and risks and helps derive multiple test cases, exploratory charters, environments, and data variations.",
      when: "Define scenarios during requirement and risk analysis for end-to-end flows, alternate paths, failures, roles, and integrations before detailing individual checks.",
      context:
        "A customer changes an order after payment, involving inventory, price adjustment, refund, notification, and audit.",
      application:
        "The team defines the order-change scenario and derives cases for stock outcomes, partial refunds, provider timeouts, permissions, and duplicate requests.",
      phrase:
        "“Keep this as a scenario first; derive separate cases for each payment and inventory outcome.”",
      aliases: ["testing scenario", "cenário de teste", "test journey"],
      confusion:
        "A scenario names the broader situation to explore; a test case specifies concrete inputs, steps, and expected results for one condition.",
    }),
    "pt-BR": content({
      definition:
        "Test Scenario é uma situação, workflow ou comportamento de alto nível escolhido para avaliação sem necessariamente prescrever cada passo e dado.",
      purpose:
        "Ele organiza cobertura por jornadas e riscos e ajuda a derivar test cases, exploratory charters, ambientes e variações.",
      when: "Defina scenarios durante análise de requisito e risco em fluxos end-to-end, caminhos alternativos, falhas, papéis e integrações.",
      context:
        "Uma pessoa altera pedido após pagamento, envolvendo estoque, preço, refund, notificação e audit.",
      application:
        "O time define o scenario e deriva cases para estoque, refund parcial, timeout, permissões e requests duplicadas.",
      phrase:
        "“Mantenha como scenario primeiro e derive cases para cada outcome de pagamento e estoque.”",
      aliases: ["testing scenario", "cenário de teste", "test journey"],
      confusion:
        "Scenario nomeia situação ampla; test case especifica entradas, passos e resultados para uma condição.",
    }),
  },
  "acceptance-criteria": {
    en: content({
      definition:
        "Acceptance Criteria are explicit, testable conditions that a product change must satisfy to be accepted as meeting its intended behavior and boundaries.",
      purpose:
        "They create shared understanding among product, design, engineering, and quality and provide concrete examples for implementation, review, and testing.",
      when: "Define acceptance criteria before implementation for important rules, outcomes, errors, permissions, accessibility, and scope, refining them as understanding improves.",
      context:
        "A story says customers can cancel orders, but timing, shipment state, refund behavior, permissions, and feedback remain ambiguous.",
      application:
        "Criteria specify eligible states and cutoff, resulting refund and inventory actions, audit record, confirmation, and responses for rejected cancellation.",
      phrase:
        "“Add acceptance criteria for an order already shipped; the happy path alone does not define cancellation.”",
      aliases: [
        "acceptance conditions",
        "critérios de aceitação",
        "story acceptance criteria",
      ],
      confusion:
        "Acceptance Criteria define conditions for one change; Definition of Done defines general completion standards applied across work items.",
    }),
    "pt-BR": content({
      definition:
        "Acceptance Criteria são condições explícitas e testáveis que uma mudança precisa satisfazer para ser aceita conforme comportamento e boundaries pretendidos.",
      purpose:
        "Eles criam entendimento compartilhado e exemplos concretos para implementação, review e testes.",
      when: "Defina acceptance criteria antes da implementação para regras, outcomes, erros, permissões, acessibilidade e escopo, refinando com o aprendizado.",
      context:
        "Uma story diz que clientes cancelam pedidos, mas prazo, envio, refund, permissões e feedback permanecem ambíguos.",
      application:
        "Criteria especificam estados e cutoff, ações de refund e estoque, audit, confirmação e respostas de rejeição.",
      phrase:
        "“Adicione acceptance criteria para pedido já enviado; o happy path não define cancelamento sozinho.”",
      aliases: [
        "acceptance conditions",
        "critérios de aceitação",
        "story acceptance criteria",
      ],
      confusion:
        "Acceptance Criteria definem uma mudança; Definition of Done define padrões gerais aplicados aos itens.",
    }),
  },
  "unit-test": {
    en: content({
      definition:
        "A unit test verifies one small unit of behavior through a stable public boundary with fast, controlled, and deterministic feedback.",
      purpose:
        "It localizes regressions and documents rules without requiring the complete application or real external infrastructure.",
      when: "Use unit tests for domain rules, transformations, state transitions, and isolated error handling, replacing only dependencies needed for control or observation.",
      context:
        "A discount policy has threshold, date, customer-tier, and maximum-value rules that change frequently.",
      application:
        "Tests invoke the policy with explicit inputs and a controlled clock and assert amounts and rejections at each boundary.",
      phrase:
        "“Keep this as a unit test; the pricing rule does not need a database or HTTP server to prove its behavior.”",
      aliases: ["unit testing", "teste unitário", "isolated behavior test"],
      confusion:
        "A unit test isolates a behavioral unit, not necessarily one method; an integration test verifies real collaboration across component boundaries.",
    }),
    "pt-BR": content({
      definition:
        "Unit Test verifica uma pequena unidade de comportamento por boundary pública estável com feedback rápido, controlado e determinístico.",
      purpose:
        "Ele localiza regressions e documenta regras sem exigir aplicação completa ou infraestrutura externa real.",
      when: "Use unit tests em regras, transformações, transições e erros isolados, substituindo apenas dependencies necessárias para controle ou observação.",
      context:
        "Uma policy de desconto possui regras de limite, data, tier e valor máximo que mudam frequentemente.",
      application:
        "Tests chamam a policy com entradas e clock controlados e verificam valores e rejeições nas boundaries.",
      phrase:
        "“Mantenha como unit test; a regra de pricing não precisa de database nem HTTP para provar comportamento.”",
      aliases: ["unit testing", "teste unitário", "isolated behavior test"],
      confusion:
        "Unit test isola unidade de comportamento, não necessariamente método; integration test verifica colaboração real entre componentes.",
    }),
  },
  "integration-test": {
    en: content({
      definition:
        "An integration test verifies that two or more real components or systems collaborate correctly across an actual boundary such as a database, broker, filesystem, or API.",
      purpose:
        "It detects contract, mapping, configuration, transaction, serialization, and lifecycle defects that isolated tests cannot reveal.",
      when: "Use integration tests at high-risk boundaries with production-like implementations, controlling test data and environment while avoiding unnecessary full-system scope.",
      context:
        "An order repository maps domain aggregates to PostgreSQL tables and must preserve transactions, constraints, and timestamps.",
      application:
        "The test starts a real PostgreSQL instance, runs migrations, saves and reloads an order through the repository, and verifies rollback on constraint failure.",
      phrase:
        "“Use the real database in this integration test; the SQL mapping is exactly what we need to verify.”",
      aliases: [
        "integration testing",
        "teste de integração",
        "component integration test",
      ],
      confusion:
        "An integration test targets real collaboration at selected boundaries; an end-to-end test exercises a complete user or system journey across the deployed stack.",
    }),
    "pt-BR": content({
      definition:
        "Integration Test verifica se componentes ou sistemas reais colaboram corretamente por boundary como database, broker, filesystem ou API.",
      purpose:
        "Ele detecta defects de contrato, mapping, configuração, transaction, serialization e lifecycle invisíveis em testes isolados.",
      when: "Use integration tests em boundaries de risco com implementações semelhantes à produção, controlando dados e ambiente sem escopo completo desnecessário.",
      context:
        "Um order repository mapeia aggregates para PostgreSQL e precisa preservar transactions, constraints e timestamps.",
      application:
        "O test inicia PostgreSQL real, executa migrations, salva e recarrega pedido e verifica rollback em falha de constraint.",
      phrase:
        "“Use o database real neste integration test; o mapping SQL é exatamente o que precisamos verificar.”",
      aliases: [
        "integration testing",
        "teste de integração",
        "component integration test",
      ],
      confusion:
        "Integration test foca colaboração real em boundaries; end-to-end percorre jornada completa pela stack implantada.",
    }),
  },
  "end-to-end-test": {
    en: content({
      definition:
        "An End-to-End Test exercises a complete user or system workflow through the externally visible interfaces and integrated stack from entry to final outcome.",
      purpose:
        "It provides confidence that major deployed parts, configuration, data, and integrations work together for a critical journey.",
      when: "Use a focused set of end-to-end tests for high-value journeys and release confidence, keeping lower-level coverage for detailed rules because E2E tests are slower and harder to diagnose.",
      context:
        "A customer must find a product, pay, receive confirmation, and see the created order using the production-like web and backend stack.",
      application:
        "Automation drives the browser, uses controlled payment infrastructure, verifies the UI and persisted order, and cleans isolated test data.",
      phrase:
        "“Keep one end-to-end test for the purchase journey and cover price boundaries below the UI layer.”",
      aliases: ["e2e test", "end to end testing", "teste ponta a ponta"],
      confusion:
        "End-to-end scope spans the complete journey; integration tests select one or a few collaboration boundaries for more focused feedback.",
    }),
    "pt-BR": content({
      definition:
        "End-to-End Test exercita um workflow completo pelas interfaces externas e stack integrada desde a entrada até o outcome final.",
      purpose:
        "Ele dá confiança de que partes implantadas, configuração, dados e integrações funcionam juntas em uma jornada crítica.",
      when: "Use poucos E2E tests em jornadas de alto valor e release, mantendo regras detalhadas abaixo porque E2E é mais lento e difícil de diagnosticar.",
      context:
        "Uma pessoa encontra produto, paga, recebe confirmação e vê o pedido pela stack semelhante à produção.",
      application:
        "Automação dirige o browser, usa pagamento controlado, verifica UI e pedido persistido e limpa dados isolados.",
      phrase:
        "“Mantenha um end-to-end test da compra e cubra boundaries de preço abaixo da UI.”",
      aliases: ["e2e test", "end to end testing", "teste ponta a ponta"],
      confusion:
        "End-to-end cobre jornada completa; integration test seleciona boundaries de colaboração para feedback focado.",
    }),
  },
  "regression-test": {
    en: content({
      definition:
        "A regression test verifies that behavior which previously worked, especially behavior associated with a past defect or established contract, still works after change.",
      purpose:
        "It prevents known failures from returning and protects stable capabilities while implementation, dependencies, or neighboring features evolve.",
      when: "Add a regression test when fixing a reproducible defect or protecting high-risk established behavior, placing it at the lowest level that faithfully demonstrates the failure.",
      context:
        "A leap-day calculation caused subscriptions to expire one day early and was corrected in production.",
      application:
        "A focused test reproduces the original dates, fails on the old implementation, passes on the fix, and remains in the suite.",
      phrase:
        "“First make the regression test fail with the original leap-day bug, then verify the fix.”",
      aliases: [
        "regression testing",
        "teste de regressão",
        "bug regression test",
      ],
      confusion:
        "Regression testing protects existing behavior after change; retesting only confirms that one reported defect was fixed in the current build.",
    }),
    "pt-BR": content({
      definition:
        "Regression Test verifica se comportamento que funcionava, especialmente ligado a defect passado ou contrato estabelecido, continua funcionando após mudança.",
      purpose:
        "Ele impede retorno de falhas conhecidas e protege capacidades estáveis enquanto implementação e dependencies evoluem.",
      when: "Adicione regression test ao corrigir defect reproduzível ou proteger comportamento de risco, no menor nível que demonstre fielmente a falha.",
      context:
        "Um cálculo de ano bissexto fez assinaturas expirarem um dia cedo e foi corrigido em produção.",
      application:
        "Um test focado reproduz as datas, falha na implementação antiga, passa no fix e permanece na suíte.",
      phrase:
        "“Primeiro faça o regression test falhar com o bug original e depois verifique o fix.”",
      aliases: [
        "regression testing",
        "teste de regressão",
        "bug regression test",
      ],
      confusion:
        "Regression protege comportamento após mudanças; retest apenas confirma o defect no build atual.",
    }),
  },
  "smoke-test": {
    en: content({
      definition:
        "A smoke test is a small, fast set of broad checks confirming that a build or environment is stable enough for deeper testing or use.",
      purpose:
        "It detects fundamental deployment, startup, configuration, connectivity, and critical-path failures before time is spent on detailed verification.",
      when: "Run smoke tests after builds and deployments and before expensive suites, selecting representative checks that fail quickly when the system is fundamentally broken.",
      context:
        "A new staging deployment may have wrong secrets, failed migrations, missing routes, or unavailable dependencies.",
      application:
        "The pipeline checks service readiness, authentication, one read, one critical write, and required dependency connectivity before starting the full suite.",
      phrase:
        "“Stop the pipeline at smoke testing; authentication is broken, so deeper tests would produce noise.”",
      aliases: ["smoke testing", "build verification test", "teste de fumaça"],
      confusion:
        "A smoke test checks broad basic viability; a sanity test often checks a narrower changed area after a small modification.",
    }),
    "pt-BR": content({
      definition:
        "Smoke Test é um conjunto pequeno e rápido de verificações amplas que confirma se build ou ambiente está estável para testes profundos ou uso.",
      purpose:
        "Ele detecta falhas fundamentais de deployment, startup, configuração, conectividade e caminhos críticos antes de verificações caras.",
      when: "Execute smoke tests após builds e deploys e antes de suítes caras, escolhendo checks representativos que falhem rapidamente.",
      context:
        "Um novo staging pode ter secrets errados, migrations falhas, routes ausentes ou dependencies indisponíveis.",
      application:
        "A pipeline verifica readiness, authentication, uma leitura, uma escrita crítica e conectividade antes da suíte completa.",
      phrase:
        "“Pare a pipeline no smoke test; authentication quebrou e testes profundos só produziriam ruído.”",
      aliases: ["smoke testing", "build verification test", "teste de fumaça"],
      confusion:
        "Smoke test verifica viabilidade ampla; sanity test costuma verificar área mais estreita após pequena mudança.",
    }),
  },
  "load-test": {
    en: content({
      definition:
        "A load test measures system behavior under a defined expected volume and pattern of concurrent users, requests, data, or work.",
      purpose:
        "It validates latency, throughput, errors, resource use, and scaling against service objectives before real demand reaches that level.",
      when: "Run load tests for capacity planning and release risk using realistic journeys, arrival rates, data sizes, warm-up, duration, dependencies, and success thresholds.",
      context:
        "A ticket sale expects twenty thousand purchase attempts per minute with a sharp start and strict checkout latency target.",
      application:
        "The test models browsing and purchasing traffic, observes every dependency and queue, and compares percentiles and errors with agreed thresholds.",
      phrase:
        "“Model the arrival spike, not only a fixed user count, because the sale begins at one exact time.”",
      aliases: ["load testing", "performance load test", "teste de carga"],
      confusion:
        "A load test evaluates expected demand; a stress test deliberately exceeds normal capacity to study limits and recovery.",
    }),
    "pt-BR": content({
      definition:
        "Load Test mede comportamento sob volume e padrão definidos de pessoas, requests, dados ou trabalho concorrente esperados.",
      purpose:
        "Ele valida latência, throughput, erros, recursos e escala contra objetivos antes da demanda real.",
      when: "Execute load tests com jornadas, arrival rates, dados, warm-up, duração, dependencies e thresholds realistas.",
      context:
        "Uma venda espera vinte mil tentativas por minuto com início brusco e meta rígida de latência.",
      application:
        "O test modela navegação e compra, observa dependencies e queues e compara percentis e erros com limites.",
      phrase:
        "“Modele o pico de chegada, não apenas usuários fixos, pois a venda começa em um horário exato.”",
      aliases: ["load testing", "performance load test", "teste de carga"],
      confusion:
        "Load test avalia demanda esperada; stress test ultrapassa capacidade normal para estudar limites e recuperação.",
    }),
  },
  "stress-test": {
    en: content({
      definition:
        "A stress test pushes a system beyond expected or sustainable capacity to discover breaking points, degradation behavior, protection mechanisms, and recovery.",
      purpose:
        "It reveals how overload propagates and whether the system rejects work safely, preserves data, remains observable, and returns to normal after pressure falls.",
      when: "Run stress tests in controlled environments or guarded production experiments with explicit stop conditions, monitoring, isolation, and recovery plans.",
      context:
        "A messaging service must survive a producer surge without losing accepted messages or causing every consumer and database to fail.",
      application:
        "The test raises production rate until limits activate, observes queue growth and shedding, then reduces load and measures drain and recovery.",
      phrase:
        "“Continue past the normal target until backpressure activates, but stop before the protected database threshold.”",
      aliases: ["stress testing", "overload test", "teste de estresse"],
      confusion:
        "Stress testing seeks behavior beyond normal limits; load testing verifies behavior at planned demand.",
    }),
    "pt-BR": content({
      definition:
        "Stress Test força o sistema além da capacidade esperada para descobrir breaking points, degradação, proteções e recuperação.",
      purpose:
        "Ele revela propagação de overload e se o sistema rejeita com segurança, preserva dados, permanece observável e se recupera.",
      when: "Execute stress tests em ambiente controlado ou experimento protegido com stop conditions, monitoring, isolamento e plano de recovery.",
      context:
        "Um serviço de mensagens precisa sobreviver a pico sem perder mensagens aceitas nem derrubar consumidores e database.",
      application:
        "O test aumenta produção até os limites, observa queue e shedding, reduz carga e mede drenagem e recovery.",
      phrase:
        "“Continue além da meta até backpressure ativar, mas pare antes do threshold protegido do database.”",
      aliases: ["stress testing", "overload test", "teste de estresse"],
      confusion:
        "Stress test busca comportamento além dos limites; load test verifica demanda planejada.",
    }),
  },
  mock: {
    en: content({
      definition:
        "A mock is a test double programmed with interaction expectations so a test can verify how the subject communicates with a collaborator.",
      purpose:
        "It observes calls that are themselves important behavior, such as whether a command is sent with the correct arguments and frequency.",
      when: "Use a mock when an interaction contract matters and state or returned output cannot express it clearly, avoiding expectations on private implementation details.",
      context:
        "A password-reset use case must send exactly one notification only after a valid token is persisted.",
      application:
        "A notification mock expects one send with the recipient and link, while repository behavior is controlled separately.",
      phrase:
        "“Mock the notification boundary, not every internal method call, or the test will mirror the implementation.”",
      aliases: ["mock object", "test mock", "objeto mock"],
      confusion:
        "A mock verifies expected interactions; a stub supplies predetermined responses without making interaction verification its main purpose.",
    }),
    "pt-BR": content({
      definition:
        "Mock é um test double programado com expectativas de interação para verificar como o objeto testado se comunica com um collaborator.",
      purpose:
        "Ele observa chamadas que são comportamento relevante, como command correto, argumentos e quantidade.",
      when: "Use mock quando o contrato de interação importar e estado ou output não o expressar claramente, evitando internals da implementação.",
      context:
        "Um reset de senha deve enviar uma notificação somente após persistir token válido.",
      application:
        "Um mock espera um send com recipient e link enquanto o repository é controlado separadamente.",
      phrase:
        "“Faça mock da boundary de notificação, não de todo método interno, ou o test copiará a implementação.”",
      aliases: ["mock object", "test mock", "objeto mock"],
      confusion:
        "Mock verifica interações; stub fornece respostas predeterminadas sem focar verificação de chamadas.",
    }),
  },
  stub: {
    en: content({
      definition:
        "A stub is a test double that returns predetermined data or behavior to control an indirect input used by the subject under test.",
      purpose:
        "It makes a scenario deterministic and easy to reach without relying on a slow, unavailable, random, or difficult real collaborator.",
      when: "Use a stub to supply selected responses or failures from a dependency when the test asserts the subject's resulting state or output rather than the call itself.",
      context:
        "A currency conversion use case needs a known exchange rate and a provider-failure scenario.",
      application:
        "A rate-provider stub returns 5.00 in one test and a timeout in another; assertions target the calculated amount and fallback result.",
      phrase:
        "“Stub the exchange rate to a fixed value so the calculation test cannot change with the market.”",
      aliases: ["test stub", "stub object", "objeto stub"],
      confusion:
        "A stub controls indirect input; a mock adds expectations about how the collaborator must be called.",
    }),
    "pt-BR": content({
      definition:
        "Stub é um test double que devolve dados ou comportamento predeterminados para controlar uma entrada indireta do objeto testado.",
      purpose:
        "Ele torna o scenario determinístico sem depender de collaborator lento, indisponível, aleatório ou difícil.",
      when: "Use stub para respostas ou falhas escolhidas quando o test verifica estado ou output resultante, não a chamada em si.",
      context:
        "Um use case de câmbio precisa de taxa conhecida e scenario de falha do provider.",
      application:
        "O stub retorna 5,00 em um test e timeout em outro; assertions verificam valor e fallback.",
      phrase:
        "“Use stub com taxa fixa para o calculation test não mudar com o mercado.”",
      aliases: ["test stub", "stub object", "objeto stub"],
      confusion:
        "Stub controla entrada indireta; mock acrescenta expectativas de como o collaborator deve ser chamado.",
    }),
  },
  spy: {
    en: content({
      definition:
        "A spy is a test double or wrapper that records how it was called so a test can inspect interactions after execution, often while retaining real behavior.",
      purpose:
        "It captures arguments, call counts, order, or results without requiring all expectations to be declared before the subject runs.",
      when: "Use a spy when interaction evidence is useful after execution or when wrapping a real collaborator is safer than replacing it entirely.",
      context:
        "A cache decorator should return repository data and also store the result after a miss.",
      application:
        "A spy wraps the cache, the test executes the decorator, then checks one write with the expected key while asserting the returned data.",
      phrase:
        "“Spy on the cache boundary and assert the meaningful write, not every helper call inside the decorator.”",
      aliases: ["test spy", "spy object", "objeto spy"],
      confusion:
        "A spy records interactions for later assertions; a mock usually begins with predefined interaction expectations.",
    }),
    "pt-BR": content({
      definition:
        "Spy é um test double ou wrapper que registra como foi chamado para inspeção após a execução, às vezes mantendo comportamento real.",
      purpose:
        "Ele captura argumentos, quantidade, ordem ou resultados sem exigir todas as expectativas antes da execução.",
      when: "Use spy quando evidência de interação for útil depois ou quando envolver collaborator real for melhor que substituí-lo.",
      context:
        "Um cache decorator deve devolver dados do repository e guardar o resultado após miss.",
      application:
        "Um spy envolve o cache; o test executa e verifica uma escrita com a key esperada e o dado devolvido.",
      phrase:
        "“Use spy na cache boundary e verifique a escrita significativa, não todo helper interno.”",
      aliases: ["test spy", "spy object", "objeto spy"],
      confusion:
        "Spy registra interações para assertions posteriores; mock normalmente começa com expectativas predefinidas.",
    }),
  },
  fixture: {
    en: content({
      definition:
        "A test fixture is the controlled data, objects, files, services, or environment state established for a test and cleaned or restored afterward.",
      purpose:
        "It gives tests a known starting condition and reusable setup while isolating them from leftovers, shared mutation, and external randomness.",
      when: "Use fixtures for stable prerequisites, keeping them minimal, explicit, composable, and owned by the test so unrelated defaults do not hide important inputs.",
      context:
        "Repository tests require customers, orders, database schema, and timestamps in a repeatable state.",
      application:
        "A fixture creates only the required records with fixed identifiers and time, wraps each test in isolation, and cleans the database afterward.",
      phrase:
        "“Keep the fixture small; this test should declare the unusual order state instead of inheriting it from a global dataset.”",
      aliases: ["test fixture", "testing data setup", "massa de teste"],
      confusion:
        "A fixture is the complete controlled setup; a test-data factory is one tool that can construct objects used inside a fixture.",
    }),
    "pt-BR": content({
      definition:
        "Test Fixture é o conjunto controlado de dados, objetos, files, serviços ou estado de ambiente preparado para um test e restaurado depois.",
      purpose:
        "Ela fornece condição inicial conhecida e setup reutilizável, isolando leftovers, mutação compartilhada e aleatoriedade externa.",
      when: "Use fixtures em preconditions estáveis, mantendo-as mínimas, explícitas, combináveis e pertencentes ao test.",
      context:
        "Repository tests precisam de clientes, pedidos, schema e timestamps em estado repetível.",
      application:
        "A fixture cria somente registros necessários com IDs e tempo fixos, isola cada test e limpa o database.",
      phrase:
        "“Mantenha a fixture pequena; este test deve declarar o estado incomum em vez de herdá-lo de dataset global.”",
      aliases: ["test fixture", "testing data setup", "massa de teste"],
      confusion:
        "Fixture é o setup controlado completo; test-data factory é uma ferramenta para construir objetos usados nela.",
    }),
  },
  "test-coverage": {
    en: content({
      definition:
        "Test coverage is evidence about which code structures, requirements, risks, states, or behaviors a test suite exercises under a defined measurement.",
      purpose:
        "It identifies unexamined areas and supports test strategy, but does not prove assertion quality, correctness, or absence of defects.",
      when: "Use coverage as a diagnostic alongside risk and mutation or defect evidence, investigating meaningful gaps instead of optimizing one percentage blindly.",
      context:
        "A payment module reports 95 percent line coverage, but tests execute fraud branches without asserting any decision or side effect.",
      application:
        "The team reviews branch and requirement coverage, adds outcome assertions and failure scenarios, and treats the number as one signal.",
      phrase:
        "“The line is covered, but no assertion would fail if the authorization result were reversed.”",
      aliases: ["code coverage", "coverage metric", "cobertura de testes"],
      confusion:
        "Coverage measures exercised scope under a metric; test effectiveness measures how well the suite detects meaningful defects.",
    }),
    "pt-BR": content({
      definition:
        "Test Coverage é evidência de quais estruturas, requisitos, riscos, estados ou comportamentos uma suíte exercita sob uma medição definida.",
      purpose:
        "Ela identifica áreas não examinadas e apoia estratégia, mas não prova qualidade de assertions, correção ou ausência de defects.",
      when: "Use coverage como diagnóstico junto de risco e evidência de mutations ou defects, investigando gaps significativos sem perseguir percentual cegamente.",
      context:
        "Um módulo possui 95% de line coverage, mas tests executam fraude sem verificar decisões ou efeitos.",
      application:
        "O time revisa branch e requirement coverage, adiciona assertions de outcomes e trata o número como um sinal.",
      phrase:
        "“A linha está coberta, mas nenhuma assertion falharia se o resultado fosse invertido.”",
      aliases: ["code coverage", "coverage metric", "cobertura de testes"],
      confusion:
        "Coverage mede escopo exercitado; efetividade mede quanto a suíte detecta defects significativos.",
    }),
  },
  assertion: {
    en: content({
      definition:
        "An assertion is an executable statement that compares an observed result or state with an expected condition and fails the test when the condition is false.",
      purpose:
        "It turns test execution into evidence by specifying exactly which outcome matters rather than merely running code without evaluation.",
      when: "Assert externally meaningful outcomes, state, events, or interactions with clear failure messages, avoiding excessive checks of incidental implementation details.",
      context:
        "A transfer test executes debit and credit successfully but would still pass if the ledger entry were missing.",
      application:
        "Assertions verify both balances, one immutable ledger entry, and the returned transfer identifier while ignoring private helper calls.",
      phrase:
        "“Add an assertion for the ledger entry; executing the method alone does not verify the accounting outcome.”",
      aliases: ["test assertion", "assert statement", "asserção de teste"],
      confusion:
        "An assertion states an expected test condition; a production validation rejects invalid input or state during normal execution.",
    }),
    "pt-BR": content({
      definition:
        "Assertion é uma declaração executável que compara resultado ou estado observado com condição esperada e falha o test quando ela é falsa.",
      purpose:
        "Ela transforma execução em evidência ao especificar qual outcome importa, em vez de apenas rodar código.",
      when: "Faça assertions de outcomes, estado, events ou interações significativos com mensagens claras, evitando internals incidentais.",
      context:
        "Um test de transferência executa debit e credit, mas passaria mesmo sem ledger entry.",
      application:
        "Assertions verificam saldos, uma entrada imutável e ID retornado, ignorando helpers privados.",
      phrase:
        "“Adicione assertion para ledger; executar o método não verifica o outcome contábil.”",
      aliases: ["test assertion", "assert statement", "asserção de teste"],
      confusion:
        "Assertion declara condição esperada do test; validation de produção rejeita entrada ou estado inválido em execução normal.",
    }),
  },
  bug: {
    en: content({
      definition:
        "A bug is an observed software behavior or result that differs from an intended requirement, contract, expectation, or valid operating condition.",
      purpose:
        "Recording a bug makes the mismatch reproducible, assessable, assignable, and traceable through diagnosis, correction, verification, and release.",
      when: "Report a bug with expected and actual behavior, environment, impact, reproducible steps or evidence, frequency, and relevant logs without prematurely assuming its cause.",
      context:
        "Customers in one timezone see subscriptions expire a day early only during daylight-saving transitions.",
      application:
        "The report includes dates, timezone, account state, request identifiers, expected expiration, actual result, and a minimal reproduction.",
      phrase:
        "“The bug is the early expiration behavior; the timezone conversion is still a hypothesis until diagnosis confirms it.”",
      aliases: ["software bug", "software error", "erro de software"],
      confusion:
        "A bug describes incorrect observed behavior; root cause is the underlying condition that allowed or produced it.",
    }),
    "pt-BR": content({
      definition:
        "Bug é um comportamento ou resultado observado que difere de requisito, contrato, expectativa ou condição operacional válida.",
      purpose:
        "Registrá-lo torna a diferença reproduzível, avaliável, atribuível e rastreável por diagnóstico, correção, verificação e release.",
      when: "Reporte bug com esperado e atual, ambiente, impacto, passos ou evidência, frequência e logs, sem assumir causa prematuramente.",
      context:
        "Clientes de um timezone veem assinaturas expirarem cedo apenas em transições de horário de verão.",
      application:
        "O report inclui datas, timezone, estado, request IDs, resultado esperado e atual e reprodução mínima.",
      phrase:
        "“O bug é a expiração antecipada; conversão de timezone ainda é hipótese até o diagnóstico.”",
      aliases: ["software bug", "software error", "erro de software"],
      confusion:
        "Bug descreve comportamento incorreto observado; root cause é a condição subjacente que o produziu.",
    }),
  },
  defect: {
    en: content({
      definition:
        "A defect is a flaw in a requirement, design, code, data, configuration, or process that can cause a product to fail to meet an expected condition.",
      purpose:
        "The term lets quality work track the underlying nonconformity even before or separately from a user-observed failure.",
      when: "Record a defect when evidence identifies a specific nonconforming artifact or condition, linking it to affected behavior, severity, origin, and verification.",
      context:
        "Code review finds that an authorization branch permits support users to invoke an administrator operation, although no misuse is yet observed.",
      application:
        "The team logs the permission defect, blocks release, corrects the policy, adds tests, and reviews similar operations.",
      phrase:
        "“This is a security defect even without a reported incident; the implemented permission contradicts the policy.”",
      aliases: ["software defect", "product defect", "defeito de software"],
      confusion:
        "Defect emphasizes the flawed artifact or condition; bug often refers informally to the resulting incorrect software behavior.",
    }),
    "pt-BR": content({
      definition:
        "Defect é uma falha em requisito, design, código, dado, configuração ou processo capaz de impedir o produto de atender uma condição esperada.",
      purpose:
        "O termo permite acompanhar a não conformidade mesmo antes ou separadamente de falha observada por pessoas.",
      when: "Registre defect quando evidência identificar artefato ou condição não conforme, relacionando comportamento, severidade, origem e verificação.",
      context:
        "Code review encontra branch de authorization que permite operação de admin a suporte, embora nenhum abuso tenha sido observado.",
      application:
        "O time registra o defect, bloqueia release, corrige policy, adiciona tests e revisa operações semelhantes.",
      phrase:
        "“Isto é security defect mesmo sem incident; a permissão implementada contradiz a policy.”",
      aliases: ["software defect", "product defect", "defeito de software"],
      confusion:
        "Defect enfatiza artefato ou condição falha; bug costuma indicar informalmente o comportamento incorreto resultante.",
    }),
  },
  issue: {
    en: content({
      definition:
        "An issue is a tracked work item or concern such as a bug, task, question, risk, improvement, or feature request in a project's workflow.",
      purpose:
        "It gives the concern an identifier, description, owner, status, discussion, relationships, and history so work can be prioritized and coordinated.",
      when: "Create an issue when a concern needs durable visibility and action, classifying its type and acceptance or closure evidence instead of assuming every issue is a defect.",
      context:
        "Support reports confusing invoice wording that may require research, design, copy, code, and translation but is not yet diagnosed as a bug.",
      application:
        "The team opens an issue with customer evidence, impact and open questions, then links resulting design and implementation work.",
      phrase:
        "“Track this as an issue first; investigation will tell us whether it is a defect, requirement gap, or improvement.”",
      aliases: ["tracked issue", "work item", "item rastreado"],
      confusion:
        "An issue is a broad tracking container; a bug or defect is one specific type of problem that an issue may represent.",
    }),
    "pt-BR": content({
      definition:
        "Issue é um item ou concern rastreado, como bug, task, pergunta, risco, melhoria ou feature request no workflow do projeto.",
      purpose:
        "Ela oferece ID, descrição, owner, status, discussão, relações e histórico para priorização e coordenação.",
      when: "Crie issue quando um concern precisar de visibilidade e ação duráveis, classificando tipo e evidência sem presumir que toda issue é defect.",
      context:
        "Suporte relata texto confuso de invoice que pode exigir pesquisa, design, copy, código e tradução, ainda sem diagnóstico.",
      application:
        "O time abre issue com evidências, impacto e perguntas e relaciona os trabalhos resultantes.",
      phrase:
        "“Rastreie como issue primeiro; a investigação dirá se é defect, gap de requisito ou melhoria.”",
      aliases: ["tracked issue", "work item", "item rastreado"],
      confusion:
        "Issue é container amplo de rastreamento; bug ou defect é um tipo específico que ela pode representar.",
    }),
  },
  "edge-case": {
    en: content({
      definition:
        "An edge case is a valid or possible condition near an input, state, timing, capacity, or interaction boundary where behavior often differs from the ordinary case.",
      purpose:
        "It exposes assumptions and transition errors that typical examples miss, especially around empty, minimum, maximum, simultaneous, expired, or unusual combinations.",
      when: "Identify edge cases from domain and technical boundaries and prioritize those with plausible occurrence or significant consequence rather than enumerating arbitrary oddities.",
      context:
        "A subscription renewal occurs at midnight on leap day while the customer changes timezone and the payment callback arrives twice.",
      application:
        "The team separates date-boundary, duplicate-delivery, and timezone cases and specifies deterministic renewal and idempotency outcomes.",
      phrase:
        "“Zero items is a valid edge case for this draft order; decide its behavior instead of treating it as impossible.”",
      aliases: ["boundary case", "corner case", "caso extremo"],
      confusion:
        "An edge case occurs at a meaningful boundary; an invalid input is outside accepted conditions and still requires defined rejection behavior.",
    }),
    "pt-BR": content({
      definition:
        "Edge Case é uma condição válida ou possível próxima a boundary de entrada, estado, tempo, capacidade ou interação, onde o comportamento costuma diferir.",
      purpose:
        "Ele revela premissas e erros de transição ausentes em exemplos comuns, como vazio, mínimo, máximo, simultâneo ou expirado.",
      when: "Identifique edge cases a partir de boundaries reais e priorize ocorrência plausível ou consequência relevante, não curiosidades arbitrárias.",
      context:
        "Uma assinatura renova à meia-noite no leap day enquanto timezone muda e callback chega duas vezes.",
      application:
        "O time separa data, duplicidade e timezone e especifica outcomes determinísticos e idempotentes.",
      phrase:
        "“Zero itens é edge case válido para draft order; defina o comportamento em vez de tratá-lo como impossível.”",
      aliases: ["boundary case", "corner case", "caso extremo"],
      confusion:
        "Edge case ocorre em boundary significativa; input inválido está fora das condições aceitas e exige rejeição definida.",
    }),
  },
  "happy-path": {
    en: content({
      definition:
        "The happy path is the primary successful flow in which valid inputs, expected decisions, and available dependencies lead directly to the intended outcome.",
      purpose:
        "It establishes the essential value and baseline workflow before alternate, boundary, and failure behavior are added.",
      when: "Describe and test the happy path for every important capability, but do not use it as the complete specification when realistic failures and alternatives exist.",
      context:
        "A customer with valid details buys an in-stock product using an approved payment while every dependency responds normally.",
      application:
        "The test confirms order creation, inventory reservation, payment, confirmation, and visible status through the direct successful journey.",
      phrase:
        "“The happy path is covered; next specify payment decline, inventory race, timeout, and duplicate submission.”",
      aliases: ["success path", "golden path", "caminho feliz"],
      confusion:
        "The happy path is the expected successful journey; it is not evidence that failure paths, edge cases, or recovery are correct.",
    }),
    "pt-BR": content({
      definition:
        "Happy Path é o fluxo principal de sucesso no qual inputs válidos, decisões esperadas e dependencies disponíveis levam ao outcome pretendido.",
      purpose:
        "Ele estabelece valor essencial e workflow básico antes de caminhos alternativos, boundaries e falhas.",
      when: "Descreva e teste happy path de toda capacidade importante, sem tratá-lo como especificação completa quando falhas realistas existirem.",
      context:
        "Uma pessoa com dados válidos compra produto em estoque com pagamento aprovado e dependencies normais.",
      application:
        "O test confirma pedido, reserva, pagamento, confirmação e status pela jornada direta de sucesso.",
      phrase:
        "“O happy path está coberto; agora especifique decline, race de estoque, timeout e submissão duplicada.”",
      aliases: ["success path", "golden path", "caminho feliz"],
      confusion:
        "Happy path é jornada esperada de sucesso; não prova failure paths, edge cases nem recovery.",
    }),
  },
  "failure-path": {
    en: content({
      definition:
        "A failure path is a flow followed when input, a rule, dependency, resource, timing condition, or operation prevents the intended success outcome.",
      purpose:
        "It defines safe rejection, compensation, retry, observability, user feedback, and state preservation rather than leaving errors as unspecified exceptions.",
      when: "Design and test failure paths for plausible faults and denied decisions, especially where partial side effects, sensitive data, money, or retries are involved.",
      context:
        "Payment succeeds but inventory reservation times out, leaving the order outcome uncertain and a charge potentially requiring compensation.",
      application:
        "The workflow records pending state, reconciles the reservation idempotently, refunds if unavailable, and communicates a traceable status.",
      phrase:
        "“Define the failure path after the timeout; returning 500 does not resolve the possible charge.”",
      aliases: ["error path", "exception path", "caminho de falha"],
      confusion:
        "A failure path is expected system behavior under an unsuccessful condition; an unhandled crash is the absence of a designed path.",
    }),
    "pt-BR": content({
      definition:
        "Failure Path é o fluxo seguido quando input, regra, dependency, recurso, tempo ou operação impede o outcome de sucesso.",
      purpose:
        "Ele define rejeição, compensation, retry, observability, feedback e preservação de estado em vez de erros não especificados.",
      when: "Projete e teste failure paths em falhas plausíveis e decisões negadas, sobretudo com efeitos parciais, dados sensíveis, dinheiro ou retries.",
      context:
        "Pagamento funciona, mas reserva de estoque dá timeout, deixando outcome incerto e cobrança possivelmente compensável.",
      application:
        "O workflow registra pending, reconcilia idempotentemente, faz refund se necessário e comunica status rastreável.",
      phrase:
        "“Defina o failure path após timeout; retornar 500 não resolve a possível cobrança.”",
      aliases: ["error path", "exception path", "caminho de falha"],
      confusion:
        "Failure path é comportamento projetado sob insucesso; crash não tratado é ausência de um caminho.",
    }),
  },
  reproducibility: {
    en: content({
      definition:
        "Reproducibility is the ability to obtain the same relevant result by repeating a process with the documented inputs, version, configuration, environment, and procedure.",
      purpose:
        "It makes defects diagnosable, tests trustworthy, builds verifiable, experiments comparable, and operational outcomes less dependent on hidden conditions.",
      when: "Preserve reproducibility for builds, tests, incidents, data analyses, and bug reports by recording versions, seeds, time, state, dependencies, and steps.",
      context:
        "A test fails only in CI because its dependency version, timezone, random seed, and execution order differ from a developer's machine.",
      application:
        "The team locks dependencies, logs the seed and timezone, isolates state, and provides a command and artifact that reproduce the failure locally.",
      phrase:
        "“Record the random seed and artifact digest so we can reproduce this exact failure.”",
      aliases: [
        "reproducible result",
        "repeatable process",
        "reprodutibilidade",
      ],
      confusion:
        "Reproducibility recreates a result from documented conditions; repeatability often means the same operator and setup can repeat it under unchanged conditions.",
    }),
    "pt-BR": content({
      definition:
        "Reproducibility é a capacidade de obter o mesmo resultado relevante repetindo um processo com inputs, versão, configuração, ambiente e procedimento documentados.",
      purpose:
        "Ela torna defects diagnosticáveis, tests confiáveis, builds verificáveis, experimentos comparáveis e outcomes menos dependentes de condições ocultas.",
      when: "Preserve reproducibility em builds, tests, incidents, análises e bugs registrando versões, seeds, tempo, estado, dependencies e passos.",
      context:
        "Um test falha só no CI porque versão, timezone, random seed e ordem diferem da máquina local.",
      application:
        "O time trava dependencies, registra seed e timezone, isola estado e fornece comando e artefato para reproduzir.",
      phrase:
        "“Registre random seed e artifact digest para reproduzirmos esta falha exata.”",
      aliases: [
        "reproducible result",
        "repeatable process",
        "reprodutibilidade",
      ],
      confusion:
        "Reproducibility recria resultado a partir das condições; repeatability costuma repetir com o mesmo setup e operador.",
    }),
  },
  "root-cause": {
    en: content({
      definition:
        "A root cause is an underlying condition or mechanism whose removal or control prevents a failure from recurring through the same causal path.",
      purpose:
        "Identifying it moves remediation beyond visible symptoms toward the technical, process, organizational, or design conditions that enabled the outcome.",
      when: "Investigate root causes after significant defects or incidents using timelines, evidence, contributing factors, and counterfactual checks without forcing one simplistic cause or blaming a person.",
      context:
        "A deployment deletes customer files; the immediate bad command passed review because permissions were broad, backups were untested, and the pipeline lacked a target guard.",
      application:
        "Analysis maps the causal chain and addresses target validation, least privilege, recoverability, review evidence, and testing instead of only correcting the command.",
      phrase:
        "“The malformed command triggered the event, but the root-cause analysis must explain why it could delete production data.”",
      aliases: ["underlying cause", "root cause analysis", "causa raiz"],
      confusion:
        "A trigger is the immediate event that starts a failure; root causes and contributing factors explain why the system allowed the harmful outcome.",
    }),
    "pt-BR": content({
      definition:
        "Root Cause é uma condição ou mecanismo subjacente cuja remoção ou controle impede recorrência pelo mesmo caminho causal.",
      purpose:
        "Identificá-la leva remediation além dos sintomas às condições técnicas, processuais, organizacionais ou de design que permitiram o outcome.",
      when: "Investigue root causes após defects ou incidents relevantes com timeline, evidências, fatores e contrafactuais, sem causa simplista nem culpa individual.",
      context:
        "Um deployment apaga files; o command passou porque permissões eram amplas, backups não testados e pipeline sem target guard.",
      application:
        "A análise mapeia cadeia e corrige validação, least privilege, recovery, review e testes, não apenas o command.",
      phrase:
        "“O command disparou o evento, mas root-cause analysis deve explicar por que ele podia apagar produção.”",
      aliases: ["underlying cause", "root cause analysis", "causa raiz"],
      confusion:
        "Trigger inicia a falha; root causes e fatores explicam por que o sistema permitiu o outcome.",
    }),
  },
  "flaky-test": {
    en: content({
      definition:
        "A flaky test passes and fails without a relevant change to the code under test because its result depends on uncontrolled conditions.",
      purpose:
        "Recognizing flakiness protects trust in the test suite and directs work toward timing, shared state, randomness, ordering, environment, or dependency instability.",
      when: "Treat every flaky result as a defect in test or product synchronization, capture evidence and frequency, quarantine only with ownership and deadline, and fix the uncontrolled dependency.",
      context:
        "A browser test sometimes checks the page before an asynchronous update finishes and passes only when the machine is slower or faster in a favorable way.",
      application:
        "The team replaces fixed sleep with an observable readiness condition, isolates data, records diagnostics, and repeats the test under varied scheduling.",
      phrase:
        "“Do not add another sleep; wait for the user-visible state that proves the operation completed.”",
      aliases: ["flaky testing", "nondeterministic test", "teste instável"],
      confusion:
        "A flaky test changes result under equivalent inputs; a consistently failing test may be reliable evidence of a real regression.",
    }),
    "pt-BR": content({
      definition:
        "Flaky Test passa e falha sem mudança relevante no código porque o resultado depende de condições não controladas.",
      purpose:
        "Reconhecê-lo protege confiança na suíte e direciona timing, estado compartilhado, aleatoriedade, ordem, ambiente ou dependency instável.",
      when: "Trate flakiness como defect, capture evidência, faça quarantine só com owner e prazo e corrija a condição não controlada.",
      context:
        "Um browser test verifica a página antes de atualização assíncrona terminar e depende da velocidade da máquina.",
      application:
        "O time troca sleep fixo por condição observável, isola dados, registra diagnóstico e repete sob scheduling variado.",
      phrase:
        "“Não adicione outro sleep; aguarde o estado visível que prova a conclusão.”",
      aliases: ["flaky testing", "nondeterministic test", "teste instável"],
      confusion:
        "Flaky test muda resultado com inputs equivalentes; test sempre falho pode evidenciar regression real.",
    }),
  },
};
