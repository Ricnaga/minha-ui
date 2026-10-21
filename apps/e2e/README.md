# Playwright E2E Tests

Suíte E2E do monorepo. As specs rodam contra as stories do Storybook de cada
biblioteca de UI.

A suíte é um app próprio (`@minha-ui/e2e`) para que as libs de UI não carreguem
dependências de teste end-to-end, e para que a infraestrutura compartilhada
tenha um único lugar.

## Estrutura

```
apps/e2e/
├── playwright.config.ts    # Configuração do Playwright
├── tsconfig.json           # Verificação de tipos da suíte
├── support/                # Infraestrutura genérica, compartilhada entre libs
│   ├── commands.ts         # Commands personalizados
│   ├── test.ts             # Fixture `story` (navegação entre stories)
│   ├── fixtures/           # Fixtures para testes
│   │   ├── component-fixtures.ts
│   │   └── story-fixtures.ts
│   └── storybook-helpers.ts
└── react/                  # Conhecimento da lib @minha-ui/react
    ├── support/            # Helpers e constantes específicos da lib
    │   └── story-constants.ts
    └── tests/              # Testes E2E
        ├── components/     # Testes de componentes
        ├── hooks/          # Testes de hooks
        ├── responsive/     # Testes de layout responsivo
        └── test.ts         # Ponto de entrada: re-exporta a base compartilhada
```

A separação segue a regra: **o que é genérico fica em `support/`**, o que é
peculiaridade de cada lib fica na pasta da lib. A fixture `story` e os
`commands` são genéricos (navegar no Storybook e operar no DOM) e por isso são
compartilhados; os IDs das stories e as asserções de cada componente não são.

Para adicionar uma lib nova, crie `apps/e2e/<lib>/` com `support/` e `tests/`,
e registre um `project` em `playwright.config.ts`.

## Scripts Disponíveis

Os scripts rodam a partir da raiz do monorepo e delegam para o app.

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

Com `E2E_TEST_TYPE=storybook`, o Playwright sobe a **build estática** do
Storybook via `webServer` e a serve na porta 6006. Usar a build, e não o dev
server, evita a compilação sob demanda, que deixa os specs instáveis sob
concorrência.

## Adicionando Novos Testes

### Componentes

Crie um novo arquivo em `react/tests/components/` usando a fixture `story`:

```typescript
import { test, expect } from '../test';

test.describe('ComponentName', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-categoria-componentname--default');
  });

  test('should render component', async ({ story }) => {
    await expect(
      story.canvas.getByRole('button', { name: 'Salvar' }),
    ).toBeVisible();
  });
});
```

`story.navigate` aguarda a story terminar de montar. Evite navegar com
`page.goto` direto: o `networkidle` é atingido antes da renderização e as
asserções passam a rodar contra um canvas vazio.

### Hooks

Crie um novo arquivo em `react/tests/hooks/` seguindo o padrão:

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
