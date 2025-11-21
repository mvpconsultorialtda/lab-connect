# Visão Geral da Arquitetura - Lab Connect

Este documento descreve as decisões arquiteturais fundamentais adotadas no projeto **Lab Connect**. O objetivo dessas escolhas é garantir agilidade no desenvolvimento do MVP, escalabilidade futura e robustez da plataforma.

## 1. Frontend: Single Page Application (SPA) Moderna
Utilizamos **React** com **Vite** para criar uma aplicação rápida e reativa.
- **Vite:** Escolhido pela velocidade de build e Hot Module Replacement (HMR) instantâneo, essencial para uma iteração rápida de design.
- **React Router v7:** Gerencia a navegação no lado do cliente (Client-Side Routing). Isso proporciona uma experiência de "app nativo", sem recarregamentos de página.
  - *Solução de Roteamento:* Implementamos regras de *rewrite* (`firebase.json` e `vercel.json`) para garantir que o servidor sempre entregue o `index.html` para qualquer rota, permitindo que o React assuma o controle (evitando erros 404 no refresh).

## 2. Estilização: Utility-First com Tailwind CSS
Adotamos **Tailwind CSS** para estilização.
- **Design System Centralizado:** As cores da marca (`brand-primary`, `brand-navy`, etc.) e fontes estão configuradas no `tailwind.config.js`. Isso garante consistência visual em toda a aplicação sem duplicar códigos CSS.
- **Componentização:** Criamos componentes reutilizáveis (`Button`, `Input`, `Navbar`) que encapsulam estilos e comportamentos, seguindo princípios de Atomic Design.

## 3. Autenticação e Backend: Serverless com Firebase
Para o MVP, optamos por uma arquitetura **Serverless** utilizando o **Google Firebase**.
- **Firebase Authentication:** Gerencia todo o ciclo de vida de identidade (Login, Cadastro, Recuperação de Senha) de forma segura e escalável, sem precisarmos manter servidores próprios para isso.
- **Context API:** O estado de autenticação (`user`, `loading`) é distribuído globalmente via `AuthContext`. Isso permite que qualquer componente da interface reaja instantaneamente a mudanças no login (ex: Navbar mudando de "Entrar" para "Olá, Usuário").

## 4. Estratégia de Testes: Suite de Integração Centralizada
Uma das decisões chaves para a qualidade deste projeto é a estratégia de testes automatizados.
- **Foco em Fluxos Críticos:** Em vez de ter centenas de testes unitários isolados que testam detalhes de implementação (que mudam muito), focamos em testes que validam o **comportamento do usuário**.
- **Arquivo de Teste Expansível:** Criamos arquivos de teste principais (como `src/__tests__/auth.test.tsx` e `src/App.test.tsx`) que funcionam como "scripts de validação".
  - *A Lógica:* A ideia é que esses arquivos cresçam organicamente cobrindo "Jornadas do Usuário" (ex: "Usuário entra, faz login e vê vagas"). Isso facilita a manutenção e garante que, se o teste passar, a funcionalidade principal está intacta.
- **Vitest + React Testing Library:** Ferramentas modernas que simulam a interação real no DOM (cliques, digitação), garantindo que testamos o que o usuário vê, não o código interno.

## 5. Infraestrutura e Deploy
- **Agnóstico à Hospedagem:** O projeto foi configurado para rodar tanto em **Firebase Hosting** quanto em **Vercel**. Arquivos de configuração específicos (`firebase.json`, `vercel.json`) garantem que o comportamento de SPA funcione corretamente em qualquer um dos provedores.
- **Validação Pré-Push:** A arquitetura encoraja a execução de testes (`npm test`) e build (`npm run build`) antes de qualquer envio ao repositório, prevenindo que código quebrado chegue à produção.
