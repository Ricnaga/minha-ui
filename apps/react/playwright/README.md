# Playwright E2E Tests

## Estrutura

```
playwright/
├── playwright.config.ts    # Configuração do Playwright
├── setup.ts                # Setup global para testes
├── support/                # Suporte e helpers
│   ├── commands.ts         # Commands personalizados
│   ├── fixtures/           # Fixtures para testes
│   │   ├── component-fixtures.ts
│   │   └── story-fixtures.ts
│   ├── storybook-helpers.ts
│   └── story-constants.ts
└── tests/                  # Testes E2E
    ├── components/         # Testes de componentes
    │   ├── Badge.spec.ts
    │   ├── Button.spec.ts
    │   ├── Checkbox.spec.ts
    │   ├── Chip.spec.ts
    │   ├── Input.spec.ts
    │   ├── Modal.spec.ts
    │   ├── Progress.spec.ts
    │   ├── Select.spec.ts
    │   ├── Skeleton.spec.ts
    │   ├── Spinner.spec.ts
    │   └── Tabs.spec.ts
    ├── hooks/              # Testes de hooks
    │   ├── useClickAway.spec.ts
    │   ├── useCopyToClipboard.spec.ts
    │   ├── useDebounce.spec.ts
    │   ├── useDisclosure.spec.ts
    │   ├── usePagination.spec.ts
    │   └── useToggle.spec.ts
    └── test.ts             # Configuração de fixtures
```

## Scripts Disponíveis

```bash
# Executar todos os testes E2E (usa dev server)
pnpm test:e2e

# Executar testes com UI do Playwright
pnpm test:e2e:ui

# Executar testes em modo headed (com browser visível)
pnpm test:e2e:headed

# Executar testes usando Storybook (recomendado)
pnpm test:e2e:storybook

# Executar testes de componentes usando Storybook
pnpm test:e2e:components

# Executar testes de hooks usando Storybook
pnpm test:e2e:hooks

# Executar testes com UI do Storybook
pnpm test:e2e:storybook:ui
```

## Adicionando Novos Testes

### Componentes

Crie um novo arquivo em `tests/components/` seguindo o padrão:

```typescript
import { test, expect } from '../test';

test.describe('ComponentName', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=story-id&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render component', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    // ...
  });
});
```

### Hooks

Crie um novo arquivo em `tests/hooks/` seguindo o padrão:

```typescript
import { test, expect } from '../test';

test.describe('useHookName', () => {
  // ...
});
```

## Fixtures Disponíveis

- `story`: Fixture com helpers para navegar e interagir com stories do Storybook
- `component`: Fixture com helpers para interação com componentes

## Commands Personalizados

Os commands estão disponíveis em `support/commands.ts` e podem ser usados para:

- `waitForElement`: Aguardar por um elemento
- `clickAndWait`: Clicar e aguardar
- `fillAndBlur`: Preencher e tirar foco
- `expectToBeVisible`: Verificar se elemento está visível
- `expectToHaveText`: Verificar texto do elemento
