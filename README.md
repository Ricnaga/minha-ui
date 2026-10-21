# Minha UI

🚧 **Projeto criado para estudo** 🚧  
Um repositório de interfaces (UI) criado unicamente para fins de aprendizado e prática de desenvolvimento com React, TypeScript e monorepos. Não se trata de um projeto de produção nem de um produto final.

---

## 🧠 Sobre o projeto

**Minha UI** é uma base de UI criada exclusivamente para fins educacionais, servindo como um ambiente de estudo e experimentação de conceitos de frontend.

O objetivo principal do projeto é praticar:

- Criação de componentes reutilizáveis
- Organização de uma base de UI
- Uso de ferramentas modernas do ecossistema React
- Estruturação de um monorepo com pnpm workspaces e Turborepo

---

## 📦 Tecnologias

- **React 19** - Biblioteca principal para construção de interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS v4** - Framework de estilização
- **Storybook** - Documentação e desenvolvimento de componentes
- **Vitest** - Testes unitários e testes de interação
- **Playwright** - Testes end-to-end
- **Turborepo** - Orquestração de tasks do monorepo
- **pnpm workspaces** - Gerenciamento de pacotes e dependências
- **ESLint** + **Prettier** - Linting e formatação de código
- **Husky** + **Commitlint** - Git hooks e conventional commits
- **Phosphor Icons** - Biblioteca de ícones
- **React Error Boundary** - Tratamento de erros
- **Changesets** - Versionamento e changelog

---

## 🗂️ Estrutura

```
minha-ui/
├── apps/
│   ├── react/          # App da lib de UI (componentes, hooks, Storybook)
│   │   ├── src/
│   │   │   ├── components/   # Componentes reutilizáveis (Compound Components)
│   │   │   ├── hooks/        # Hooks customizados
│   │   │   ├── infra/        # Infraestrutura (fetchers, stores, estado observável)
│   │   │   ├── icons/        # Re-exports dos Phosphor Icons
│   │   │   ├── theme/        # Variantes tailwind-variants (*.tv.ts)
│   │   │   ├── types/        # Tipos TypeScript compartilhados
│   │   │   └── utils/        # Utilitários de formatação
│   │   ├── .storybook/       # Configuração do Storybook
│   │   └── plop/             # Geradores de scaffolding
│   └── e2e/             # App da suíte de testes end-to-end
│       ├── support/     # Infraestrutura genérica (fixture story, commands)
│       └── react/       # Specs e story ids da lib @minha-ui/react
├── packages/
│   ├── theme/           # Tokens CSS compartilhados
│   └── utils/           # Utilitários compartilhados (date, number, string, chart)
├── .opencode/           # Agents, commands e skills do OpenCode
├── turbo.json           # Tasks do Turborepo
└── pnpm-workspace.yaml  # Pacotes do workspace
```

A regra de organização é: **cada pasta guarda um app e seus testes**. A
infraestrutura genérica do E2E fica em `apps/e2e/support/`, compartilhada entre
as libs, enquanto o conhecimento específico de cada lib fica na pasta da lib.

---

## 🚀 Começando

### 1. Clone o repositório

```bash
git clone https://github.com/Ricnaga/minha-ui.git
cd minha-ui
```

### 2. Instale as dependências

O projeto usa **pnpm** como gerenciador de pacotes:

```bash
pnpm install
```

Caso não tenha o pnpm instalado:

```bash
npm install -g pnpm
```

### 3. Rode o ambiente de desenvolvimento

```bash
pnpm dev
```

### 4. Abra o Storybook

```bash
pnpm storybook
```

---

## 🧪 Testes

O projeto tem três camadas de teste:

| Camada | Ferramenta | Onde |
|---|---|---|
| Unitário | Vitest + Testing Library | `apps/react/src/**/__tests__/` |
| Interação | Play functions do Storybook | `apps/react/src/**/stories/*.play.ts` |
| End-to-end | Playwright | `apps/e2e/` |

```bash
pnpm test:unit            # Testes unitários
pnpm test:coverage        # Testes unitários com relatório de cobertura
pnpm test:e2e:storybook   # Testes E2E contra o Storybook
pnpm test:e2e:components  # Apenas as specs de componentes
pnpm test:e2e:hooks       # Apenas as specs de hooks
```

Os testes E2E sobem a **build estática** do Storybook automaticamente. Usar a
build, e não o dev server, evita a compilação sob demanda, que deixa os specs
instáveis sob concorrência.

---

## 🔧 Scripts

| Script | O que faz |
|---|---|
| `pnpm dev` | Sobe o ambiente de desenvolvimento |
| `pnpm build` | Typecheck + build de produção |
| `pnpm storybook` | Sobe o Storybook na porta 6006 |
| `pnpm build-storybook` | Gera a build estática do Storybook |
| `pnpm plop` | Scaffolding de componente, provider ou hook |
| `pnpm test:unit` | Testes unitários |
| `pnpm test:coverage` | Cobertura de código |
| `pnpm test:e2e:storybook` | Testes E2E contra o Storybook |
| `pnpm lint` | ESLint em todos os pacotes |
| `pnpm typecheck` | Verificação de tipos em todos os pacotes |
| `pnpm changeset` | Cria um changeset para versionamento |

Os scripts são orquestrados pelo Turborepo; os que rodam em um pacote
específico usam `pnpm --filter`.

---

## 📌 Importante

Este projeto foi criado **somente para estudos e prática**, com foco em experimentar ferramentas, padrões e workflows de frontend modernos.  
Ele **não tem garantia de estabilidade** e pode não estar pronto para uso em produção.

---

## 📄 Licença

Este repositório está sob a licença **MIT** — veja o arquivo [LICENSE](https://github.com/Ricnaga/minha-ui/blob/main/LICENSE) para mais detalhes.

---

## 💬 Contribuições

Por ser um projeto de estudo pessoal, não estou aceitando contribuições externas no momento — mas fique à vontade para ver o código e aprender com ele! 😊
