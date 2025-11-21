# Configuração Manual do Firebase

Para que a autenticação funcione, você precisa configurar um projeto no Firebase e obter as chaves de acesso. Siga os passos abaixo:

## 1. Criar Projeto no Firebase
1. Acesse [console.firebase.google.com](https://console.firebase.google.com/).
2. Clique em **"Adicionar projeto"**.
3. Nomeie o projeto como **"Lab Connect"**.
4. Desative o Google Analytics (não é necessário para este MVP) e clique em **"Criar projeto"**.

## 2. Habilitar Autenticação
1. No menu lateral esquerdo, clique em **"Criação"** > **"Authentication"**.
2. Clique em **"Vamos começar"**.
3. Na aba **"Sign-in method"**, selecione **"E-mail/senha"**.
4. Ative a opção **"E-mail/senha"** e clique em **"Salvar"**.

## 3. Obter Chaves de Configuração
1. Clique no ícone de engrenagem ao lado de "Visão geral do projeto" e selecione **"Configurações do projeto"**.
2. Role até a seção **"Seus aplicativos"**.
3. Clique no ícone **Web (</>)**.
4. Registre o app com o nome **"Lab Connect Web"**.
5. Copie as chaves que aparecem no objeto `firebaseConfig`.

## 4. Configurar Variáveis de Ambiente
1. Na raiz do projeto, crie um arquivo chamado `.env` (copie o `.env.example`).
2. Preencha com os valores obtidos no passo anterior:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=lab-connect-....firebaseapp.com
VITE_FIREBASE_PROJECT_ID=lab-connect-...
VITE_FIREBASE_STORAGE_BUCKET=lab-connect-....appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=1:...
```

> **Nota:** O arquivo `.env` não deve ser comitado no Git por segurança. O `.env.example` serve apenas como modelo.
