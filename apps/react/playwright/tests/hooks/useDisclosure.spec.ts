import { test, expect } from '../test';

test.describe('useDisclosure', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-usedisclosure--default');
  });

  test('should render toggle button', async ({ story }) => {
    const canvas = story.canvas;
    const button = canvas.getByRole('button', { name: /ativar|desativar/i });

    await expect(button).toBeVisible();
  });

  test('should toggle state on click', async ({ story }) => {
    const canvas = story.canvas;
    const button = canvas.getByRole('button', { name: /ativar|desativar/i });
    const status = canvas.getByText(/status:/i);

    await expect(status).toContainText(/inativo/i);

    await button.click();

    await expect(status).toContainText(/ativo/i);

    await button.click();

    await expect(status).toContainText(/inativo/i);
  });
});
