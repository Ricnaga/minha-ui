import { test, expect } from '../test';

test.describe('TopLoadingBarProvider', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-feedback-toploadingbarprovider--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
    await story.page.waitForTimeout(1000);
  });

  test('should render loading bar', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible({ timeout: 10000 });
  });
});
