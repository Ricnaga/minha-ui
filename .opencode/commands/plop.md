---
description: Scaffold a new component, provider, or hook using Plop.
agent: front-end-engineer
---

Run `pnpm plop` to start the scaffolding prompts. Based on the user's
description of what they want to create, guide them through the choices:

1. **What to create** — component, provider, or hook
2. **Name** — follow the project naming convention (kebab-case for
   components like `date-picker`, `modal-header`; camelCase or descriptive
   for hooks like `user-form` which generates `useUserForm`)

After plop completes, check that the generated files are correct:
- `src/components/index.ts` and `src/theme/index.ts` were updated
  (component/provider) or `src/hooks/index.ts` (hook)
- The theme file was created in `src/theme/`
- Stories and play files exist

Do NOT manually edit barrel files — plop handles that.
