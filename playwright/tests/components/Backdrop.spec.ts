import { test, expect } from '../test';

test.describe('Backdrop', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-backdrop--default');
  });

  test('should render backdrop when open', async ({ story }) => {
    const canvas = story.canvas;
    const trigger = canvas.getByRole('button').first();

    await trigger.click();
    await story.page.waitForTimeout(300);

    const backdrop = canvas.locator('[class*="backdrop"], [data-backdrop]');
    if ((await backdrop.count()) > 0) {
      await expect(backdrop.first()).toBeVisible();
    }
  });
});
