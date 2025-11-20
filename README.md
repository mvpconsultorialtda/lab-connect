📂 DOCUMENTO DE ESPECIFICAÇÃO TÉCNICA: LAB CONNECT
Versão: 1.0 (MVP - Mínimo Produto Viável)
Cliente: UNEB (Universidade do Estado da Bahia) - Edital PROINOVAÇÃO
Status: Pronto para Desenvolvimento
1. ARQUITETURA, STACK E TESTES
Foco: Desenvolvimento Ágil, Custo Zero Inicial, Portabilidade e Qualidade de Código.
1.1. Stack Tecnológica
Frontend Web & Mobile: React.js (Library) + Vite (Build Tool).
Mobile Wrapper: Ionic Capacitor (Para converter o código React em APK Android nativo).
Linguagem: TypeScript (Obrigatório para tipagem estática e redução de bugs).
Estilização: Tailwind CSS (Utility-first) + lucide-react (Ícones).
Backend (BaaS): Firebase (Plano Spark - Gratuito).
Banco: Firestore (NoSQL).
Auth: Firebase Authentication.
Storage: Firebase Storage.
Hospedagem Web: Vercel (Plano Hobby).
1.2. Estratégia de Testes Automatizados (Obrigatório)
Para garantir a estabilidade do sistema sem uma equipe de QA dedicada, o desenvolvimento deve seguir o padrão de Testes Contínuos.
Framework: Vitest (Compatível com Vite) + React Testing Library.
Requisito de Automação: O projeto deve conter um script unificado no package.json.
Comando Único: O agente ou desenvolvedor deve ser capaz de executar npm run test:all.
O que esse comando faz: Executa, em sequência, a validação de tipos (TypeScript), testes unitários (Funções lógicas) e testes de componentes (Renderização de telas críticas).
Arquivo de Saída: Os testes devem gerar um log simples de PASS/FAIL no terminal.
2. ESTRATÉGIA "ZERO BACKEND" & SEGURANÇA
Como não usaremos servidor pago (Cloud Functions), a lógica fica no Frontend protegida pelas regras do banco.
Controle de Acesso (Status): Todo usuário criado recebe no banco o campo status: "pending".
Firestore Security Rules:
Configurar regras que bloqueiam leitura (read: if resource.data.status == 'approved') para coleções sensíveis (Vagas, Lista de Usuários).
O "Super-Admin": O primeiro usuário deve ser inserido manualmente via console do Firebase com role: "admin" e status: "approved".
3. DETALHAMENTO TELA A TELA (SITEMAP)
O sistema é uma SPA (Single Page Application) Responsiva.
🟢 GRUPO A: Acesso e Onboarding (Público)
Testes necessários: Verificar validação de campos de e-mail e senha.
Tela de Splash & Boas-vindas: Logo Lab Connect + Botões "Entrar" / "Cadastrar".
Tela de Login: Validação de credenciais. Se status == pending, redirecionar para Tela de Espera.
Tela de Cadastro (Stepper):
Passo 1: Tipo (Egresso ou Empresa).
Passo 2: Dados Pessoais/Empresariais.
Passo 3: Link Portfólio/LinkedIn.
Passo 4: Aceite LGPD (Obrigatório).
Tela de Espera: Feedback visual para usuários aguardando aprovação.
🔵 GRUPO B: Área do Usuário (Egresso & Empresa)
Testes necessários: Verificar se o Feed carrega dados simulados (mocks) corretamente.
Home (Feed): Destaques da coordenação e últimas vagas.
Tela de Vagas: Listagem com filtros (Tipo/Local). Clique abre modal com detalhes e botão de ação (Email/Link).
Tela de Mentorias: Lista de mentores. Botão "Agendar" redireciona para link externo (Calendly/WhatsApp).
Tela de Eventos: Lista de workshops com link de inscrição.
Perfil do Usuário: Visualização e Edição (Upload de foto, Bio, Tags de Skills).
🔴 GRUPO C: Área do Manager (Painel Administrativo)
Acesso restrito a role: "admin".
Dashboard Manager: Métricas simples (Total usuários, Vagas ativas).
Tela de Aprovações: Lista de pendentes com ações [Aprovar] / [Rejeitar].
Gestão de Conteúdo: Criar avisos e moderar vagas impróprias.
4. DADOS NECESSÁRIOS (SCHEMA FIRESTORE)
Coleção users
uid, name, email, photoUrl
type: "student" | "company"
role: "user" | "admin"
status: "pending" | "approved"
portfolioLink, bio, graduationYear
termsAccepted: boolean (LGPD)
Coleção jobs
title, description, companyName, type, location, contactLink
status: "active" | "archived"
Coleção events
title, date, description, link
5. ROTEIRO DE DESENVOLVIMENTO
Setup: Configurar Repo, Firebase, React+Vite e Vitest.
Auth & Base: Login/Cadastro com gravação de status.
Admin Flow: Tela de aprovação manual de usuários.
Core Features: CRUD de Vagas e Visualização de Mentorias.
Testes Automatizados: Criar os arquivos de teste (.test.tsx) para os componentes principais (Login, Feed, Cadastro). Garantir que npm run test:all funcione.
UI Polish: Aplicar identidade visual da UNEB (Cores/Logos).
Mobile Build: Configurar Capacitor e gerar APK de teste.
Deploy: Vercel (Web) + Entrega do APK.
6. PONTOS IMPORTANTES (COMPLIANCE DO EDITAL)
LGPD (RNF05): O cadastro só é concluído com checkbox de aceite dos termos. O banco deve registrar a data do aceite.
Performance (RNF02): Implementar compressão de imagens no front-end (máx 2MB) para garantir uploads rápidos e economia de dados.
Identidade Visual (RNF04): Seguir estritamente a paleta de cores do curso de Design (roxo/amarelo) conforme style guide.
Relatórios (RF08): O Dashboard do Manager deve exibir graficamente a distribuição de egressos por área de interesse e ano de formação.
7. RESUMO EXECUTIVO E OBJETIVO CENTRAL
O que é o Lab Connect?
O Lab Connect é uma plataforma digital (Web e Mobile) de acompanhamento e networking desenvolvida exclusivamente para a comunidade de egressos do curso de Design da UNEB. Ela atua como uma ponte oficial entre a universidade, seus ex-alunos e o mercado de trabalho.
Objetivo Central
Resolver o problema da desconexão pós-universidade. A plataforma visa:
Rastreabilidade: Permitir que a coordenação do curso saiba onde seus egressos estão atuando (fundamental para a avaliação do curso perante o MEC).
Empregabilidade: Centralizar vagas de design reais e curadas, evitando a dispersão de oportunidades em grupos de WhatsApp informais.
Mentoria e Educação Continuada: Facilitar que ex-alunos experientes orientem os recém-formados, criando um ciclo virtuoso de colaboração e troca de conhecimento dentro da própria comunidade acadêmica.
O sucesso do projeto é medido pela adesão dos usuários (número de perfis ativos) e pela efetividade das conexões (vagas preenchidas e mentorias realizadas).
