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
- Adaptação dos mesmos padrões para Vue e Svelte

---

## 📦 Tecnologias

- **React 19** - Biblioteca principal para construção de interfaces
- **Vue 3** - Segunda implementação da lib de UI (Composition API)
- **Svelte 5** - Terceira implementação da lib de UI (runes)
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
│   ├── vue/            # App da lib de UI em Vue (componentes, composables)
│   │   ├── src/
│   │   │   ├── components/   # Componentes reutilizáveis
│   │   │   ├── composables/  # Composables (equivalente aos hooks)
│   │   │   ├── theme/        # Variantes tailwind-variants (*.tv.ts)
│   │   │   └── types/        # Tipos TypeScript compartilhados
│   │   ├── .storybook/       # Configuração do Storybook
│   │   └── plop/             # Geradores de scaffolding
│   ├── svelte/         # App da lib de UI em Svelte (componentes, runes)
│   │   ├── src/
│   │   │   ├── components/   # Componentes reutilizáveis
│   │   │   ├── runes/        # Runes (equivalente aos hooks)
│   │   │   ├── theme/        # Variantes tailwind-variants (*.tv.ts)
│   │   │   └── types/        # Tipos TypeScript compartilhados
│   │   ├── .storybook/       # Configuração do Storybook
│   │   └── plop/             # Geradores de scaffolding
│   └── e2e/             # App da suíte de testes end-to-end
│       ├── support/     # Infraestrutura genérica (fixture story, commands)
│       └── react/       # Specs e story ids da lib @minha-ui/react
├── packages/
│   ├── theme/           # Tokens CSS compartilhados
│   └── utils/           # Utilitários compartilhados (date, number, string, chart)
├── plop/                # Dispatcher do plop (carrega o plopfile de cada app)
├── .opencode/           # Agents, commands e skills do OpenCode
├── turbo.json           # Tasks do Turborepo
└── pnpm-workspace.yaml  # Pacotes do workspace
```

A regra de organização é: **cada pasta guarda um app e seus testes**. A
infraestrutura genérica do E2E fica em `apps/e2e/support/`, compartilhada entre
as libs, enquanto o conhecimento específico de cada lib fica na pasta da lib.

Cada lib tem o seu próprio vocabulário:

| App | Lógica reutilizável | Pasta | Gerador do plop |
|---|---|---|---|
| React | Hook | `src/hooks/` | `hook` |
| Vue | Composable | `src/composables/` | `composable` |
| Svelte | Rune | `src/runes/` | `rune` |

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
pnpm storybook        # React (porta 6006)
pnpm storybook:vue    # Vue (porta 6007)
pnpm storybook:svelte # Svelte (porta 6008)
```

---

## 🧪 Testes

O projeto tem três camadas de teste:

| Camada | Ferramenta | Onde |
|---|---|---|
| Unitário | Vitest + Testing Library | `apps/{react,vue,svelte}/src/**/__tests__/` |
| Interação | Play functions do Storybook | `apps/{react,vue,svelte}/src/**/stories/*.play.ts` |
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
| `pnpm storybook` | Sobe o Storybook do React na porta 6006 |
| `pnpm storybook:vue` | Sobe o Storybook do Vue na porta 6007 |
| `pnpm storybook:svelte` | Sobe o Storybook do Svelte na porta 6008 |
| `pnpm build-storybook` | Gera a build estática do Storybook do React |
| `pnpm build-storybook:vue` | Gera a build estática do Storybook do Vue |
| `pnpm build-storybook:svelte` | Gera a build estática do Storybook do Svelte |
| `pnpm plop` | Scaffolding de componente, provider, hook, composable ou rune |
| `pnpm test:unit` | Testes unitários |
| `pnpm test:coverage` | Cobertura de código |
| `pnpm test:e2e:storybook` | Testes E2E contra o Storybook |
| `pnpm lint` | ESLint em todos os pacotes |
| `pnpm typecheck` | Verificação de tipos em todos os pacotes |
| `pnpm changeset` | Cria um changeset para versionamento |

Os scripts são orquestrados pelo Turborepo; os que rodam em um pacote
específico usam `pnpm --filter`.

### Scaffolding com plop

O plop da raiz é um dispatcher: ele carrega o plopfile do app escolhido.

```bash
pnpm plop react  component date-picker   # gera apps/react/src/components/DatePicker
pnpm plop react  hook     toggle          # gera apps/react/src/hooks/useToggle
pnpm plop vue    component date-picker   # gera apps/vue/src/components/DatePicker
pnpm plop vue    composable user-form    # gera apps/vue/src/composables/useUserForm
pnpm plop svelte component date-picker   # gera apps/svelte/src/components/DatePicker
pnpm plop svelte rune      user-form     # gera apps/svelte/src/runes/useUserForm
```

O nome de hooks, composables e runes **não** leva o prefixo `use` — o gerador
acrescenta. Componentes usam kebab-case (`date-picker`).

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
