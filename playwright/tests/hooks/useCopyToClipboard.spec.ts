import { test, expect } from '../test';

test.describe('useCopyToClipboard', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-usecopytoclipboard--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render copy button', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const copyButton = canvas.getByRole('button', { name: /copy|copiar/i });

    await expect(copyButton).toBeVisible();
  });

  test('should trigger copy on click', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const copyButton = canvas.getByRole('button', { name: /copy|copiar/i });

    await copyButton.click();
    await story.page.waitForTimeout(300);
  });
});
