import { test, expect } from '../test';

test.describe('useCopyToClipboard', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-usecopytoclipboard--default');
  });

  test('should render copy button', async ({ story }) => {
    const canvas = story.canvas;
    const copyButton = canvas.getByRole('button', { name: /copy|copiar/i });

    await expect(copyButton).toBeVisible();
  });

  test('should trigger copy on click', async ({ story }) => {
    const canvas = story.canvas;
    const copyButton = canvas.getByRole('button', { name: /copy|copiar/i });

    await copyButton.click();
    await story.page.waitForTimeout(300);
  });
});
