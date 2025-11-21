# Changelog

## [Unreleased] - Fase 2: Autenticação e Onboarding
### Adicionado
- **Autenticação Firebase:**
  - Configuração do projeto Firebase e variáveis de ambiente (`.env`).
  - Serviço de autenticação (`src/services/firebase.ts`).
  - Contexto Global de Autenticação (`AuthContext`) para gerenciar estado do usuário.
- **Páginas:**
  - `LoginPage`: Formulário de login com validação e integração real.
  - `CadastroPage`: Formulário de registro com validação de senha e criação de perfil.
- **Componentes UI:**
  - `Input`: Componente de entrada reutilizável com suporte a labels e mensagens de erro.
  - `Button`: Componente de botão com variantes e estado de carregamento.
- **Testes e Qualidade:**
  - Configuração do `Vitest` e `React Testing Library`.
  - Testes automatizados para fluxo de autenticação (`src/__tests__/auth.test.tsx`).
  - Testes de roteamento (`src/App.test.tsx`).
- **Infraestrutura:**
  - `firebase.json`: Configuração de rewrite para SPA no Firebase Hosting.
  - `vercel.json`: Configuração de rewrite para SPA na Vercel.
  - Script de `preview` atualizado para usar `serve` e evitar erros 404 locais.
  - Documentação de setup manual do Firebase (`docs/firebase-setup.md`).

## [2025-11-20] - Ajustes Visuais e Landing Page

### 1. Architecture Redesign
- **Multi-page Routing**: Transitioned from a single-page application to a multi-page structure using `react-router-dom`.
- **New Pages**: Created dedicated pages for:
  - `/` (Landing Page)
  - `/vagas`
  - `/mentoria`
  - `/eventos`
  - `/sobre`
  - `/login`
  - `/cadastro`
- **Shared Components**: Extracted `Navbar` into a reusable component.

### 2. Visual Theme Update ("More Orange, Less Black")
- **Theme Switch**: Shifted from a dark-heavy theme to a **Light Theme** with strong orange accents to better align with the brand identity.
- **Color Palette Usage**:
  - **Backgrounds**: Changed from `brand-dark` (#0d0d0d) to `brand-gray` (#e6e9e9) and `white`.
  - **Text**: Changed from `brand-gray` to `brand-navy` (#121424) for better readability on light backgrounds.
  - **Accents**: Increased usage of `brand-primary` (#ffa552) and `brand-secondary` (#de6623) for gradients, buttons, and highlights.
- **Components**:
  - **Navbar**: Now light (`bg-brand-gray/95`) with navy text and orange hover effects.
  - **Hero Section**: Light background with subtle orange gradient orbs. Text is now dark navy.
  - **Cards**: White backgrounds with soft shadows instead of dark transparent backgrounds.
  - **Footer**: Kept as `brand-navy` for a strong visual anchor, but updated logo handling.

### 3. Technical Fixes
- **CSS Configuration**: Updated `src/index.css` to use **Tailwind CSS v4** syntax (`@import "tailwindcss";`, `@theme`).
- **Typography**:
  - Added **Google Fonts** (Montserrat and Inter) as a fallback since local font files were missing.
  - Fixed font family variable definitions in CSS.
- **Git Credentials**: Resolved permission issues with `git push` by clearing legacy credentials.

### 4. Assets
- Integrated `logo_completo.png` and `logo_reduzido.png` correctly.
- Added `lucide-react` for consistent iconography.
