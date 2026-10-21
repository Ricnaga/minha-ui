---
name: minha-ui-architecture
description: >
  Use when building or modifying components, hooks, providers, theme variants,
  or tests. Describes the project structure, Compound Components pattern,
  Plop scaffolding, theme system, store patterns, and testing layers. Do NOT
  use for general React questions.
---

# minha-ui Architecture

A component library built with React 19 + TypeScript + Vite + Tailwind CSS v4,
organized as a pnpm workspace orchestrated by Turborepo.

## Monorepo structure

```
minha-ui/
├── apps/
│   ├── react/            # The UI library app
│   │   ├── src/          # components, hooks, infra, theme, types, utils
│   │   ├── .storybook/   # Storybook config (a11y, viewport, vitest)
│   │   └── plop/         # Scaffolding generators
│   └── e2e/              # The E2E suite app (@minha-ui/e2e)
│       ├── support/      # Generic infra shared by every lib
│       └── react/        # Per-lib story ids and specs
├── packages/
│   ├── theme/            # Shared CSS tokens
│   └── utils/            # Shared utilities (date, number, string, chart)
└── .opencode/            # Agents, commands and skills
```

Rules:

- **Every package has its own `package.json`**, is private, and is referenced by
  `workspace:*`
- **A lib never carries test-only dependencies of other packages.** E2E
  dependencies live in `apps/e2e`, not in the lib it tests
- **Each folder holds one app and its tests.** Generic infra is shared
  (`apps/e2e/support/`), lib-specific knowledge stays with the lib
  (`apps/e2e/react/`)
- Root scripts delegate to a package with `pnpm --filter <pkg>`; Turbo runs
  the same task across every package that declares it

## Library structure (`apps/react/src`)

```
src/
├── components/       # UI components (Compound Components pattern)
├── hooks/            # Reusable hooks
├── icons/            # Phosphor Icons re-exports
├── infra/            # Infrastructure (fetchers, stores, observer state)
│   ├── fetchers/     # Generic fetch + Suspense-style resource cache
│   ├── state/        # Observable store (pub/sub)
│   └── store/        # createStore + useSyncExternalStore
├── theme/            # tailwind-variants configs (*.tv.ts) + CSS tokens
├── types/            # Shared TS types
└── utils/            # Formatting utilities (date, number, string)
```

Path aliases inside the lib: `@/components`, `@/hooks`, `@/theme`, `@/infra`,
`@/types`, `@/icons`.

> From this point on, paths like `src/theme/...` are relative to
> `apps/react/src`.

## Component pattern — Compound Components

Every component follows a strict separation of concerns across 4 files:

```
Button/
├── Button.tsx              # JSX — calls useButton and renders
├── useButton.ts            # Logic — props, state, event handlers, variants
├── button.types.ts         # Types — UseButtonProps (hook input) + ButtonProps
└── index.ts                # Barrel export
```

- `useComponent` receives raw props, applies `tv()` variants, handles events,
  and returns processed props for the JSX
- `Component` is thin — just wires the hook output to HTML elements
- Types separate *input* (`UseComponentProps`) from *output* (`ComponentProps`)
- The theme file lives in `src/theme/` as `ComponentName.tv.ts` and is
  exported from `src/theme/index.ts`

## Provider Pattern — Compound Components com provedor separado

Componentes que compartilham estado complexo entre várias peças seguem o
**Provider Pattern**, onde o contexto e a lógica de estado ficam em um
componente `*Provider` separado do container visual.

### Quando usar Provider separado vs contexto inline

| Padrão | Quando usar | Exemplos |
|---|---|---|
| **Contexto inline** no próprio componente | Estado simples (value/onChange), sub-componentes amarrados ao pai | `Tabs`, `Accordion`, `Drawer` |
| **Provider separado** (`*Provider/`) | Estado complexo (múltiplos valores, validação, efeitos colaterais), sub-componentes independentes que podem ser usados em diferentes layouts | `DatePickerProvider`, `StepperProvider`, `SelectProvider`, `DnDProvider` |

### Estrutura de pastas — Provider separado

```
src/components/
├── DnDProvider/            # Provider — contexto + estado + lógica
│   ├── DnDProvider.tsx     # Só renderiza <Context.Provider value={rest}>
│   ├── useDnDProvider.ts   # Estado global, handlers, createContext + useContext
│   ├── dnd-provider.types.ts
│   └── index.ts
├── DnD/                    # Container visual principal
│   ├── DnD.tsx             # JSX puro — lê contexto, renderiza filhos
│   ├── useDnD.ts           # Só variantes tv()
│   ├── dnd.types.ts
│   ├── stories/            # Histórias ficam no container principal
│   └── index.ts
├── DnDList/                # Sub-componente 1
│   ├── DnDList.tsx
│   ├── useDnDList.ts       # Lê contexto, lógica própria
│   ├── dnd-list.types.ts
│   └── index.ts
└── DnDItem/                # Sub-componente 2
    ├── DnDItem.tsx
    ├── useDnDItem.ts
    ├── dnd-item.types.ts
    └── index.ts
```

### Padrão de tipos do Provider

```ts
// dnd-provider.types.ts
import type { useDnDProvider } from "./useDnDProvider";
import type { RequiredChildren } from "@/types";

export type UseDnDProviderProps = RequiredChildren<{
  onReorder?: (items: string[]) => void;
  onMoveItem?: (itemId: string, fromList: string, toList: string, index: number) => void;
}>;

export type DnDProviderProps = UseDnDProviderProps;

export type DnDProviderContextProps = Omit<
  ReturnType<typeof useDnDProvider>,
  "children"
>;
```

O tipo `DnDProviderContextProps` usa `ReturnType<typeof useDnDProvider>` para
garantir que o contexto reflita exatamente o que o hook retorna, sem duplicação
manual.

### Consumo nos sub-componentes

```ts
// useDnDList.ts — sub-componente lê o contexto
import { useDnDContext } from "../DnDProvider";

export function useDnDList(props: UseDnDListProps) {
  const { activeItem, dragOverListId } = useDnDContext();
  // ...
}
```

### Uso no JSX

```tsx
<DnDProvider onReorder={handleReorder}>
  <DnD orientation="horizontal">
    <DnDList listId="todo">
      <DnDItem id="1">Item 1</DnDItem>
      <DnDItem id="2">Item 2</DnDItem>
    </DnDList>
  </DnD>
</DnDProvider>
```

## HTML Semântico e Acessibilidade

TODO componente deve usar **HTML semântico** — a estrutura da tag deve comunicar
o significado do conteúdo, não apenas a aparência.

### Mapeamento de elementos

| Componente | Tag | Motivo |
|---|---|---|
| Container de seção (listas, abas) | `<section>` | Landmark — representa uma área do documento |
| Lista de itens (menu, dropdown, dnd list) | `<ul>` | Lista não ordenada de itens |
| Item de lista (opção, tab, dnd item) | `<li>` | Item pertencente a uma lista |
| Navegação (tabs, paginação) | `<nav>` | Landmark de navegação |
| Grupo de controles (radio, checkbox) | `<fieldset>` | Agrupa campos relacionados |
| Título descritivo | `<h1>`–`<h6>` | Hierarquia de cabeçalhos |
| Botão | `<button>` | Ação acionável (não `<div>`) |
| Texto genérico | `<span>` | Sem significado semântico |

### Regras

1. **Nunca use `<div>` ou `<span>` onde um elemento semântico existe.**
   - ❌ `<div onClick={...}>Salvar</div>`
   - ✅ `<button onClick={...}>Salvar</button>`
2. **Use `aria-label` ou `aria-labelledby` em landmarks** para identificar
   seções. Ex: `<section aria-label="Lista de tarefas">`
3. **Itens arrastáveis** (`DndItem`) usam `<li>` com `aria-grabbed` e
   `aria-roledescription="draggable item"`.
4. **Cabeçalhos** de seção devem ter `id` correspondente ao `aria-labelledby`
   da seção pai.
5. **Botões de ícone** (`IconButton`) devem ter `aria-label` descrevendo a ação.
6. **Elementos desabilitados** devem ter o atributo `disabled` ou `aria-disabled`.

### Exemplo

```tsx
<section aria-labelledby="todo-heading">
  <h3 id="todo-heading">A Fazer</h3>
  <ul>
    <li
      role="listitem"
      aria-grabbed="false"
      aria-roledescription="draggable item"
    >
      Item 1
    </li>
  </ul>
</section>
```

### Categorias de Storybook

Cada componente no Storybook segue o padrão:

```
Components/<Categoria>/<Componente>
Components/<Categoria>/<Pai>/<Filho>
```

Categorias existentes:

| Categoria | Componentes |
|---|---|
| `Interação` | Tabs, Accordion, Modal, Drawer, Popover, Tooltip, Dnd |
| `Formularios` | Input, Select, DatePicker, DateRangePicker |
| `Estruturas` | Card, Divider, Backdrop |
| `Feedback` | Progress, ToastContainer, TopLoadingBar |
| `Indicadores` | Stepper |
| `Customizados` | DataBoundary, InputPassword |

## Plop — scaffolding

Run `pnpm plop` and choose from 3 generators:

| Generator | Creates | Auto-updates |
|---|---|---|
| **component** | `Component.tsx`, `useComponent.ts`, `component.types.ts`, `index.ts`, `stories/*.stories.tsx`, `stories/*.play.ts`, `theme/*.tv.ts` | `apps/react/src/components/index.ts`, `apps/react/src/theme/index.ts` |
| **provider** | `Component.tsx` (with `createContext` + safe `useContext`), `useComponent.ts`, `component.types.ts`, `index.ts` | `apps/react/src/components/index.ts` |
| **hook** | `useHook/index.ts`, `stories/*.stories.tsx`, `stories/*.play.ts` | `apps/react/src/hooks/index.ts` |

**Never** edit `apps/react/src/components/index.ts`,
`apps/react/src/theme/index.ts`, or `apps/react/src/hooks/index.ts` by hand —
plop handles those exports.

## Theme system

- Each component variant is defined with `tailwind-variants` (`tv()`)
- Files are named `src/theme/<kebab-name>.tv.ts`
- All theme files are re-exported from `src/theme/index.ts`
- Use the pattern:

```ts
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: "[base classes]",
  variants: { /* variant: { option: "classes" } */ },
  compoundVariants: [ /* { variant: "x", color: "y", class: "..." } */ ],
  defaultVariants: { /* ... */ },
});

export type ButtonVariants = VariantProps<typeof button>;
```

- CSS tokens live in `src/theme/tokens/*.css` (colors, typography, spacing,
  radius, shadow)
- Utility: `tailwind-merge` for merging class strings; `tw-animate-css` for
  animations

## Testing

Three layers:

| Layer | Tool | Location |
|---|---|---|
| Unit | Vitest + Testing Library | `apps/react/src/**/__tests__/*.test.tsx` |
| Interaction | Storybook Play functions | `apps/react/src/**/stories/*.play.ts` |
| E2E | Playwright | `apps/e2e/react/tests/` |

Run with `pnpm test:unit`, `pnpm test:e2e:storybook`, or `pnpm storybook` + `pnpm test:e2e:storybook`.

- Use `@testing-library/user-event` for user interactions in unit tests
- Coverage is collected for `src/components/**` and `src/hooks/**`
- The E2E suite is its own app: generic fixtures live in `apps/e2e/support/`
  and lib-specific specs in `apps/e2e/<lib>/`. See the `minha-ui-testing` skill
  before writing E2E specs.

## State management

Two built-in patterns:

- **`src/infra/store/createStore.ts`** — lightweight store using
  `useSyncExternalStore` (external store pattern)
- **`src/infra/state/createObserverStore.ts`** — observable pub/sub store

## Data fetching

- **`src/infra/fetchers/fetcher.ts`** — generic fetch with URL + params
- **`src/infra/fetchers/cache.ts`** — `Map<string, Resource>` cache
- **`src/infra/fetchers/wrapper.ts`** — Suspense-style `createResource` and
  promise wrapper

## Scripts

Root scripts orchestrate the workspace; package-specific ones delegate with
`pnpm --filter`.

| Script | Purpose |
|---|---|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | TypeScript check + Vite build |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm build-storybook` | Build the static Storybook |
| `pnpm plop` | Run scaffolding generator |
| `pnpm test:unit` | Run unit tests (all packages) |
| `pnpm test:e2e:storybook` | Run Playwright E2E tests against Storybook |
| `pnpm test:e2e:components` | E2E — only the component specs |
| `pnpm test:e2e:hooks` | E2E — only the hook specs |
| `pnpm test:coverage` | Unit tests with coverage report |
| `pnpm lint` | ESLint across the project |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm changeset` | Create a changeset for versioning |
