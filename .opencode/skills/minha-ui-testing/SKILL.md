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
| `pnpm test` | Vitest (both unit + storybook projects) |
| `pnpm test:unit` | Unit tests only (`--run --project=unit`) |
| `pnpm test:coverage` | Unit tests with v8 coverage report |
| `pnpm test:e2e` | Playwright E2E (uses Vite dev server) |
| `pnpm test:e2e:storybook` | Playwright against Storybook (port 6006) |
| `pnpm test:e2e:components` | Playwright — only `tests/components/` |
| `pnpm test:e2e:hooks` | Playwright — only `tests/hooks/` |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm typecheck` | TypeScript type checking (runs before tests in CI) |

## Layer 1 — Unit tests (Vitest + Testing Library)

**Location:** `src/**/__tests__/*.test.{ts,tsx}`

**Vitest config** (`vitest.config.ts`):
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

## Layer 2 — Storybook Play functions

**Location:** `src/**/stories/*.play.ts`

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

- Addons: a11y, docs, vitest, chromatic
- Config: `.storybook/main.ts`, `.storybook/preview.ts`
- Stories match: `**/stories/*` under `components/`, `hooks/`, `icons/`, `types/`, `utils/`

### Storybook Vitest project

The Vitest `storybook` project runs stories in a real browser (Chromium):

```ts
storybookTest({ configDir: path.join(dirname, '.storybook') }),
```

This allows running Storybook stories as Vitest tests in CI.

## Layer 3 — E2E (Playwright)

**Location:** `playwright/tests/`

**Config** (`playwright/playwright.config.ts`):
- `baseURL`: Storybook (`http://localhost:6006`) or Vite (`http://localhost:5173`)
  depending on `E2E_TEST_TYPE=storybook` env var
- Test match: `**/*.spec.ts`
- Chromium only
- Trace on first retry, screenshot on failure, video on failure

### Custom fixtures

The project defines a custom `story` fixture in `playwright/tests/test.ts`:

```ts
import { test as base, expect } from '@playwright/test';

interface StoryFixtures {
  page: Page;
  canvas: Locator;
  within: <T extends Locator>(locator: T) => { /* query helpers */ };
  navigate: (storyId: string) => Promise<void>;
  waitForCanvas: (timeout?: number) => Promise<Locator>;
}

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
    const canvas = story.canvas;
    const button = canvas.getByRole('button');
    await expect(button).toBeAttached();
    await expect(button).toBeVisible();
  });

  test('should be clickable', async ({ story }) => {
    const canvas = story.canvas;
    const button = canvas.getByRole('button');
    await expect(button).not.toBeDisabled();
    await button.click();
  });
});
```

### Story constants

Story IDs are centralized in `playwright/support/story-constants.ts`:

```ts
export const BUTTON_STORIES = {
  DEFAULT: 'components-interação-button--default',
  VARIANTS: 'components-interação-button--variants',
} as const;
```

Story ID pattern: `<category>-<component-name>--<story-name>` (kebab-case).

### Support utilities

- **`playwright/support/commands.ts`**: `waitForElement`, `clickAndWait`,
  `fillAndBlur`, `expectToBeVisible`, `expectToHaveText`
- **`playwright/support/fixtures/component-fixtures.ts`**: `createComponentFixtures`
- **`playwright/support/fixtures/story-fixtures.ts`**: `createStoryFixtures`

## CI — Pre-commit hooks

`lint-staged` runs on every commit via Husky:

```js
// lint-staged.config.js
export default {
  '*.{ts,tsx}': ['eslint . --fix', 'pnpm typecheck', 'pnpm test:unit --bail=1'],
  '*.{js,jsx,ts,tsx,json,css}': ['prettier --write'],
};
```

So pre-commit runs: ESLint → typecheck → unit tests (stopping at first failure).

## Coverage

- Provider: v8
- Reporters: `text`, `html`, `lcov`
- Collected for: `src/components/**`, `src/hooks/**`
- Excluded: stories, play files, types, infra, theme, icons, utils, config files

```bash
pnpm test:coverage
```

## Adding a new test — checklist

1. **Unit test**: create `src/components/MyComponent/__tests__/MyComponent.test.tsx`
2. **Play function**: edit the auto-generated `stories/MyComponent.play.ts` (from Plop)
3. **E2E test**: create `playwright/tests/components/MyComponent.spec.ts`
4. **Story constant** (optional): add to `playwright/support/story-constants.ts`
