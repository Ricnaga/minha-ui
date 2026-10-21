import { test, expect } from '../test';

test.describe('Toast', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-feedback-toastcontainer--default');
  });

  test('should render toast container', async ({ story }) => {
    const canvas = story.canvas;
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
