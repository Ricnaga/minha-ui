---
description: Scaffold a new component, provider, hook, composable, or rune using Plop.
agent: front-end-engineer
---

Run `pnpm plop` to start the scaffolding prompts. The root plopfile is a
dispatcher: it asks for the app and the kind, then loads the plopfile of that
app (`apps/<app>/plop/plopfile.cjs`).

The available combinations are:

| App | Kinds | Output folder |
|---|---|---|
| `react` | `component`, `provider`, `hook` | `apps/react/src/hooks/use<Name>/` |
| `vue` | `component`, `provider`, `composable` | `apps/vue/src/composables/use<Name>/` |
| `svelte` | `component`, `provider`, `rune` | `apps/svelte/src/runes/use<Name>/` |

Non-interactive usage: `pnpm plop <app> <kind> <name>`.

Based on the user's description of what they want to create, guide them through
the choices:

1. **App** — react, vue or svelte
2. **Kind** — component, provider, or the app's logic unit (hook / composable /
   rune)
3. **Name** — follow the project naming convention (kebab-case for components
   like `date-picker`, `modal-header`; a descriptive name for logic units like
   `toggle` or `user-form`, which generate `useToggle` and `useUserForm`)

The name of a hook, composable or rune **must not** include the `use` prefix —
the generator adds it.

After plop completes, check that the generated files are correct:
- The barrel of the app was updated: `src/components/index.ts` and
  `src/theme/index.ts` (component/provider) or `src/hooks/index.ts` /
  `src/composables/index.ts` / `src/runes/index.ts` (logic unit)
- The theme file was created in the app's `src/theme/`
- Stories and play files exist

Do NOT manually edit barrel files — plop handles that.
