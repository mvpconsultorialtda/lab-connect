# Changelog - Visual Updates & Fixes

## 2025-11-20 - Visual Redesign & Fixes

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
