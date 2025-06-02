# Giphy Project - Aplicação Quasar Vue.js

Uma aplicação desenvolvida com Quasar Framework para busca e visualização de GIFs usando a API do Giphy.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

### Node.js (Versão Requerida)

- **Node.js**: versão 18, 20, 22, 24, 26 ou 28
- **npm**: versão 6.13.4 ou superior
- **yarn**: versão 1.21.1 ou superior (opcional, mas recomendado)

### Verificar versões instaladas

```bash
node --version
npm --version
yarn --version  # se usar yarn
```

### Instalar Node.js (se necessário)

- **Ubuntu/Debian**: `sudo apt update && sudo apt install nodejs npm`
- **Windows**: Baixe em [nodejs.org](https://nodejs.org)
- **macOS**: Use Homebrew: `brew install node`

### Instalar Yarn (opcional, mas recomendado)

```bash
npm install -g yarn
```

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd giphy-project
```

### 2. Instale as dependências

```bash
# Com yarn (recomendado)
yarn install

# Ou com npm
npm install
```

### 3. Configuração da API do Giphy

Este projeto requer uma chave da API do Giphy. Para configurá-la:

1. **Obtenha uma chave API gratuita:**

   - Acesse [developers.giphy.com](https://developers.giphy.com)
   - Crie uma conta ou faça login
   - Crie uma nova aplicação para obter sua API Key

2. **Configure a variável de ambiente:**

   ```bash
   # Crie um arquivo .env na raiz do projeto
   echo "QUASAR_GIPHY_API_KEY=sua_chave_api_aqui" > .env
   ```

   **⚠️ Importante:** Use o prefixo `QUASAR_` para que a variável seja acessível no cliente.

   **Ou configure temporariamente no terminal:**

   ```bash
   export QUASAR_GIPHY_API_KEY=sua_chave_api_aqui
   ```

   **Formato do arquivo `.env`:**

   ```
   QUASAR_GIPHY_API_KEY=exemplodechave
   ```

## 🛠️ Comandos de Desenvolvimento

### Iniciar o servidor de desenvolvimento

```bash
# Com yarn
yarn dev

# Com npm
npm run dev
```

- A aplicação será aberta automaticamente no navegador
- Servidor local: `http://localhost:9000` (porta padrão)
- Hot-reload habilitado (recarregamento automático)

### Verificar e corrigir código (Linting)

```bash
# Com yarn
yarn lint

# Com npm
npm run lint
```

### Formatação automática do código

```bash
# Com yarn
yarn format

# Com npm
npm run format
```

### Build para produção

```bash
# Com yarn
yarn build

# Com npm
npm run build
```

### Executar testes

```bash
# Com yarn
yarn test

# Com npm
npm test
```

## 📁 Estrutura do Projeto

```
giphy-project/
├── public/              # Arquivos estáticos
├── src/
│   ├── api/            # Configurações de API
│   ├── assets/         # Recursos (imagens, fontes)
│   ├── boot/           # Arquivos de inicialização
│   ├── components/     # Componentes Vue reutilizáveis
│   ├── css/            # Estilos globais
│   ├── i18n/           # Internacionalização
│   ├── layouts/        # Layouts da aplicação
│   ├── pages/          # Páginas/Views da aplicação
│   ├── router/         # Configuração de rotas
│   ├── stores/         # Gerenciamento de estado (Pinia)
│   └── App.vue         # Componente raiz
├── package.json        # Dependências e scripts
├── quasar.config.js    # Configuração do Quasar
└── README.md           # Este arquivo
```

## 🔧 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Quasar Framework** - Framework Vue.js para desenvolvimento full-stack
- **Pinia** - Gerenciamento de estado
- **Vue Router** - Roteamento SPA
- **Vue I18n** - Internacionalização
- **Axios** - Cliente HTTP para requisições API
- **ESLint** - Linter para JavaScript/Vue
- **Prettier** - Formatador de código

## 🌐 Modos de Desenvolvimento

O Quasar suporta vários modos de desenvolvimento:

### SPA (Single Page Application) - Padrão

```bash
quasar dev
```

### PWA (Progressive Web App)

```bash
quasar dev -m pwa
```

### SSR (Server-Side Rendering)

```bash
quasar dev -m ssr
```

### Electron (Desktop App)

```bash
quasar dev -m electron
```

## 🐛 Solução de Problemas

### Erro: "quasar: command not found"

```bash
# Instale o Quasar CLI globalmente
npm install -g @quasar/cli
# ou
yarn global add @quasar/cli
```

### Erro de dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json yarn.lock
npm install
# ou
yarn install
```

### Problemas com a API do Giphy

- Verifique se a variável `QUASAR_GIPHY_API_KEY` está configurada no arquivo `.env`
- Confirme se a chave API é válida
- Verifique a conexão com a internet
- **Importante:** Use o prefixo `QUASAR_` nas variáveis de ambiente
- Reinicie o servidor de desenvolvimento após alterar o arquivo `.env`

### Variável de ambiente retorna `undefined`

```bash
# Verifique se o arquivo .env existe na raiz do projeto
cat .env

# Certifique-se de que a variável tem o prefixo QUASAR_
# ❌ Errado: GIPHY_API_KEY=sua_chave
# ✅ Correto: QUASAR_GIPHY_API_KEY=sua_chave

# Reinicie o servidor de desenvolvimento
quasar dev
```

### Porta já em uso

```bash
# Execute em uma porta específica
quasar dev --port 8080
```

