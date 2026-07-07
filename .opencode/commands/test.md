---
description: Run tests — unit, E2E, or both, optionally filtered.
agent: front-end-engineer
---

Run the appropriate test command based on the user's request:

| If user says | Run |
|---|---|
| "unit tests" or nothing | `pnpm test:unit` |
| "E2E" or "e2e" | `pnpm test:e2e:storybook` |
| "coverage" | `pnpm test:coverage` |
| "watch" or "ui" | `pnpm test:ui` |
| "a specific test" or a filename | `pnpm test:unit -- <filename>` |

If tests fail, analyze the output and fix the issues before reporting.
