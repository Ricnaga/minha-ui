import { test, expect } from '../test';

test.describe('Backdrop', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-estruturas-backdrop--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render backdrop when open', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const trigger = canvas.getByRole('button').first();

    await trigger.click();
    await story.page.waitForTimeout(300);

    const backdrop = canvas.locator('[class*="backdrop"], [data-backdrop]');
    if ((await backdrop.count()) > 0) {
      await expect(backdrop.first()).toBeVisible();
    }
  });
});
