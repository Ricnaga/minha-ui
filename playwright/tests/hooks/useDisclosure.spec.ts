import { test, expect } from '../test';

test.describe('useDisclosure', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-usedisclosure--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render toggle button', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const button = canvas.getByRole('button', { name: /ativar|desativar/i });

    await expect(button).toBeVisible();
  });

  test('should toggle state on click', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const button = canvas.getByRole('button', { name: /ativar|desativar/i });
    const status = canvas.getByText(/status:/i);

    await expect(status).toContainText(/inativo/i);

    await button.click();

    await expect(status).toContainText(/ativo/i);

    await button.click();

    await expect(status).toContainText(/inativo/i);
  });
});
