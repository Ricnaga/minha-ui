---
description: Run tests — unit, E2E, or both, optionally filtered.
agent: front-end-engineer
---

Run the appropriate test command based on the user's request:

| If user says | Run |
|---|---|
| "unit tests" or nothing | `pnpm test:unit` |
| "E2E" or "e2e" | `pnpm test:e2e:storybook` |
| "E2E for components" | `pnpm test:e2e:components` |
| "E2E for hooks" | `pnpm test:e2e:hooks` |
| "coverage" | `pnpm test:coverage` |
| "a specific test" or a filename | `pnpm test:unit -- <filename>` |
| "a specific E2E spec" | `pnpm test:e2e:storybook -- <spec path>` |

Notes:

- There is no `pnpm test` nor `pnpm test:ui`. The Storybook interaction tests
  are the `storybook` Vitest project:
  `pnpm --filter @minha-ui/react exec vitest run --project=storybook`
- The E2E suite lives in the `apps/e2e` app. Specs are in
  `apps/e2e/react/tests/`, the shared fixture and commands in
  `apps/e2e/support/`.
- `pnpm test:e2e:storybook` builds the static Storybook and serves it on port
  6006. It takes a few minutes on the first run because of the build.

If tests fail, analyze the output and fix the issues before reporting.
