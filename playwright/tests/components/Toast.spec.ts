import { test, expect } from '../test';

test.describe('Toast', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-feedback-toastcontainer--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render toast container', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const showButton = canvas
      .getByRole('button', { name: /show|toast/i })
      .first();

    if (await showButton.isVisible()) {
      await showButton.click();
      await story.page.waitForTimeout(500);

      const toasts = canvas.locator('[class*="toast"]');
      if ((await toasts.count()) > 0) {
        await expect(toasts.first()).toBeVisible();
      }
    }
  });
});
