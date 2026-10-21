---
description: Run full code quality check — lint, typecheck, and unit tests.
agent: front-end-engineer
---

Run these three commands sequentially. Stop and report if any fails:

```bash
pnpm lint
pnpm typecheck
pnpm test:unit
```

If lint fails, offer to auto-fix with `pnpm lint --fix`.
If typecheck fails, identify the type errors and fix them.
If tests fail, show the failing tests and help fix them.

Report a summary at the end: ✅ or ❌ for each step.

E2E is optional in a review because it builds the static Storybook and takes a
few minutes. Run `pnpm test:e2e:storybook` when the change touches rendering,
navigation or viewport behaviour, or when the user asks for it explicitly.
