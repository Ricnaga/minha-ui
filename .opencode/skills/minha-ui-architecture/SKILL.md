---
name: minha-ui-architecture
description: >
  Use when building or modifying components, hooks, providers, theme variants,
  or tests. Describes the project structure, Compound Components pattern,
  Plop scaffolding, theme system, store patterns, and testing layers. Do NOT
  use for general React questions.
---

# minha-ui Architecture

A component library built with React 19 + TypeScript + Vite + Tailwind CSS v4.

## Project structure

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

## Plop — scaffolding

Run `pnpm plop` and choose from 3 generators:

| Generator | Creates | Auto-updates |
|---|---|---|
| **component** | `Component.tsx`, `useComponent.ts`, `component.types.ts`, `index.ts`, `stories/*.stories.tsx`, `stories/*.play.ts`, `theme/*.tv.ts` | `src/components/index.ts`, `src/theme/index.ts` |
| **provider** | `Component.tsx` (with `createContext` + safe `useContext`), `useComponent.ts`, `component.types.ts`, `index.ts` | `src/components/index.ts` |
| **hook** | `useHook/index.ts`, `stories/*.stories.tsx`, `stories/*.play.ts` | `src/hooks/index.ts` |

**Never** edit `src/components/index.ts`, `src/theme/index.ts`, or
`src/hooks/index.ts` by hand — plop handles those exports.

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
| Unit | Vitest + Testing Library | `src/**/__tests__/*.test.tsx` |
| Interaction | Storybook Play functions | `**/stories/*.play.ts` |
| E2E | Playwright | `playwright/tests/` |

Run with `pnpm test:unit`, `pnpm test:e2e`, or `pnpm storybook` + `pnpm test:e2e:storybook`.

- Use `@testing-library/user-event` for user interactions in unit tests
- Coverage is collected for `src/components/**` and `src/hooks/**`

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

| Script | Purpose |
|---|---|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | TypeScript check + Vite build |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm plop` | Run scaffolding generator |
| `pnpm test:unit` | Run unit tests |
| `pnpm test:e2e` | Run Playwright E2E tests |
| `pnpm test:e2e:storybook` | Run Playwright tests against Storybook |
| `pnpm test:coverage` | Unit tests with coverage report |
| `pnpm lint` | ESLint across the project |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm changeset` | Create a changeset for versioning |
