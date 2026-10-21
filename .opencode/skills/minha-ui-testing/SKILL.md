---
name: minha-ui-testing
description: >
  Use when writing, running, or debugging tests. Covers Vitest unit tests,
  Storybook Play functions, Playwright E2E, fixtures, coverage, and CI
  hooks. Do NOT use for non-testing related questions.
---

# minha-ui Testing

The project has **three testing layers**: unit (Vitest), interaction (Storybook
Play), and E2E (Playwright). Plus pre-commit hooks via lint-staged.

## Quick commands

| Command | What it runs |
|---|---|
| `pnpm test:unit` | Unit tests only (`vitest --run --project=unit`) |
| `pnpm test:coverage` | Unit tests with v8 coverage report |
| `pnpm test:e2e:storybook` | Playwright E2E against the static Storybook (port 6006) |
| `pnpm test:e2e:components` | Playwright — only the component specs |
| `pnpm test:e2e:hooks` | Playwright — only the hook specs |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm build-storybook` | Build the static Storybook |
| `pnpm typecheck` | TypeScript type checking |

> There is no `pnpm test` nor `pnpm test:ui`. The Storybook interaction tests
> run as the `storybook` Vitest project: `pnpm --filter @minha-ui/react exec
> vitest run --project=storybook`.

## Where the tests live

| Layer | Tool | Location |
|---|---|---|
| Unit | Vitest + Testing Library | `apps/react/src/**/__tests__/*.test.{ts,tsx}` |
| Interaction | Storybook Play functions | `apps/react/src/**/stories/*.play.ts` |
| E2E | Playwright | `apps/e2e/react/tests/` |

The E2E suite is a **separate app** (`@minha-ui/e2e`), so the libraries under
test do not carry end-to-end dependencies:

```
apps/e2e/
├── support/            # Generic infra, shared by every lib
│   ├── test.ts         # The `story` fixture (navigation between stories)
│   ├── commands.ts     # DOM commands
│   ├── fixtures/       # component-fixtures.ts, story-fixtures.ts
│   └── storybook-helpers.ts
└── react/              # Everything specific to the @minha-ui/react lib
    ├── support/story-constants.ts
    └── tests/{components,hooks,responsive}/
```

**What is shared and what is not:** the `story` fixture and the DOM commands
are generic — navigating a Storybook and operating on the DOM is the same
mechanics for any lib. Story ids, assertions and domain helpers are not: they
depend on how each lib builds its components. Keep the generic part in
`support/` and the lib-specific part in the lib's folder.

## Layer 1 — Unit tests (Vitest + Testing Library)

**Location:** `apps/react/src/**/__tests__/*.test.{ts,tsx}`

**Vitest config** (`apps/react/vitest.config.ts`):
- Project `unit`: jsdom environment, setup via `vitest.setup.ts`
- Project `storybook`: browser (Chromium headless via Playwright), setup via
  `.storybook/vitest.setup.ts`
- Coverage (v8): collects from `src/components/**` and `src/hooks/**`

### Component tests

Uses `@testing-library/react` + `@testing-library/user-event`:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '..';

describe('Button', () => {
  describe('Interactions', () => {
    it('should call onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
```

Pattern:
- `render()` from `@testing-library/react`
- `vi.fn()` for mock callbacks
- `userEvent.setup()` + async interactions (not `fireEvent`)
- Wrapped in `describe('ComponentName')` > `describe('Rendering'|'Interactions')`

### Hook tests

Uses `renderHook` + `act` from `@testing-library/react`:

```ts
import { renderHook, act } from '@testing-library/react';
import { useToggle } from '..';

describe('useToggle', () => {
  it('should toggle value', () => {
    const { result } = renderHook(() => useToggle());

    act(() => { result.current.handleToggle(); });

    expect(result.current.isToggle).toBe(true);
  });
});
```

### Snapshot tests

```ts
it('should render button correctly', () => {
  const { container } = render(<Button>Click me</Button>);
  expect(container).toMatchSnapshot();
});
```

`__snapshots__/` is gitignored — regenerate with `-u` when classes change.

## Layer 2 — Storybook Play functions

**Location:** `apps/react/src/**/stories/*.play.ts`

Typed Play functions that test component interaction at the Storybook level:

```ts
import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultButton: PlayFunction = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button", { name: /button/i });

  await expect(button).toBeInTheDocument();
  await expect(button).toBeVisible();
  await expect(button).not.toBeDisabled();

  await userEvent.click(button);

  await expect(args.onClick).toHaveBeenCalled();
};
```

The play function is imported and assigned in the `.stories.tsx` file:

```ts
import { testDefaultButton } from "./Button.play";

export const Default: Story = {
  args: {},
  play: testDefaultButton,
};
```

Pattern:
- Import `expect`, `userEvent`, `within` from `"storybook/test"`
- Export named functions typed as `PlayFunction`
- Receive `{ canvasElement, args }` — `args` gives access to story args spies
- Assert with `await expect(...)` (Storybook's expect is async)
- The Plop template generates a stub at `stories/*.play.ts` automatically

### Storybook stories pattern

```ts
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "../Button";
import type { ButtonProps } from "../button.types";

const meta: Meta<ButtonProps> = {
  title: "Components/Category/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["contained", "outline", "ghost"] },
    // ...
  },
  args: { onClick: fn(), children: "Button" },
};

export default meta;
type Story = StoryObj<ButtonProps>;
```

- Default `onClick` uses `fn()` so Playwright/Play can spy on it
- `argTypes` controls the Storybook UI controls panel
- Stories directory structure: `Category/ComponentName` in title

### Storybook setup

Addons: a11y, docs, vitest, chromatic. Config: `apps/react/.storybook/`.

- `a11y.test: 'error'` — violations fail the run
- Viewport addon exposes `mobile` (390×844), `tablet` (768×1024) and
  `desktop` (1280×800). A story picks one with
  `globals: { viewport: { value: 'mobile', isRotated: false } }`
- The default `initialGlobals.viewport` is `desktop`

### Storybook Vitest project

The Vitest `storybook` project runs stories in a real browser (Chromium):

```ts
storybookTest({ configDir: path.join(dirname, '.storybook') }),
```

This allows running Storybook stories as Vitest tests in CI.

## Layer 3 — E2E (Playwright)

**Location:** `apps/e2e/react/tests/`
**Config:** `apps/e2e/playwright.config.ts`

- One Playwright `project` per lib (`react` today) — add a project to scale
- `baseURL`: Storybook (`http://localhost:6006`) or Vite (`http://localhost:5173`)
  depending on `E2E_TEST_TYPE=storybook`
- Test match: `**/*.spec.ts`
- Chromium only
- Trace on first retry, screenshot on failure, video on failure

### The `webServer` serves the static Storybook

```ts
webServer: {
  command:
    'pnpm --filter @minha-ui/react build-storybook && pnpm --filter @minha-ui/react exec vite preview --outDir storybook-static --port 6006',
  url: 'http://localhost:6006/iframe.html',
  reuseExistingServer: !process.env.CI,
  timeout: 180_000,
},
```

Serving the **build**, not the dev server, is deliberate: the dev server
compiles stories on demand, which makes specs flaky under parallel workers.
With the static build the suite went from 5 min and flaky to 2.6 min and
stable.

### Custom fixtures

The `story` fixture lives in `apps/e2e/support/test.ts` and is re-exported by
each lib at `apps/e2e/<lib>/tests/test.ts`:

```ts
import { test as base, expect } from '@playwright/test';

export const test = base.extend<Fixtures>({
  story: async ({ page }, use) => { /* fixture setup */ },
});

export { expect };
```

### E2E test pattern

```ts
import { test, expect } from '../test';

test.describe('Button', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-button--default');
  });

  test('should render button and be visible', async ({ story }) => {
    const button = story.canvas.getByRole('button');
    await expect(button).toBeAttached();
    await expect(button).toBeVisible();
  });
});
```

### Navigation rules — do not skip them

`story.navigate` is the only supported way to reach a story. It does three
things that a bare `page.goto` does not:

1. Adds `embed=true` — disables the automatic run of the story's `play`
   function, so the story stays in its **initial state**. Without it a story
   whose play clicks something ends up in a post-interaction state, and the
   spec asserts against the wrong UI.
2. Waits for `body:not(.sb-show-preparing-story)` — the Storybook finishes
   mounting the story.
3. Waits for `#storybook-root > *` — the story actually rendered.

`waitForLoadState('networkidle')` alone is **not** enough: it is reached
before the story is mounted, and the assertions then run against an empty
canvas. That bug made 12 specs fail systematically.

### Story constants

Story ids are lib-specific and live in `apps/e2e/<lib>/support/story-constants.ts`:

```ts
export const BUTTON_STORIES = {
  DEFAULT: 'components-interação-button--default',
  VARIANTS: 'components-interação-button--variants',
} as const;
```

Story ID pattern: `<category>-<component-name>--<story-name>` (kebab-case).

### Support utilities

- **`apps/e2e/support/commands.ts`**: `waitForElement`, `clickAndWait`,
  `fillAndBlur`, `expectToBeVisible`, `expectToHaveText`
- **`apps/e2e/support/fixtures/component-fixtures.ts`**: `createComponentFixtures`
- **`apps/e2e/support/fixtures/story-fixtures.ts`**: `createStoryFixtures`

### Viewport

The Playwright viewport drives the CSS media queries — the Storybook
`globals.viewport` only resizes the preview frame. To test the mobile layout,
set the viewport in the spec:

```ts
test.use({ viewport: { width: 390, height: 844 } });
```

## CI — Pre-commit hooks

`lint-staged` runs on every commit via Husky:

```js
// lint-staged.config.js
export default {
  '*.{ts,tsx}': [
    () => 'pnpm --filter @minha-ui/react exec eslint . --fix',
    () => 'pnpm --filter @minha-ui/e2e exec eslint . --fix',
    () => 'pnpm typecheck',
    () => 'pnpm test:unit',
  ],
  '*.{js,jsx,ts,tsx,json,css}': ['prettier --write'],
};
```

So pre-commit runs: ESLint (lib + E2E) → typecheck → unit tests.

## Coverage

- Provider: v8
- Reporters: `text`, `html`, `lcov`
- Collected for: `src/components/**`, `src/hooks/**`
- Excluded: stories, play files, types, infra, theme, icons, utils, config files

```bash
pnpm test:coverage
```

## Adding a new test — checklist

1. **Unit test**: create `apps/react/src/components/MyComponent/__tests__/MyComponent.test.tsx`
2. **Play function**: edit the auto-generated `stories/MyComponent.play.ts` (from Plop)
3. **E2E test**: create `apps/e2e/react/tests/components/MyComponent.spec.ts`
4. **Story constant** (optional): add to `apps/e2e/react/support/story-constants.ts`
