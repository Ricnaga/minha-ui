import { test, expect } from '../test';

test.describe('TopLoadingBarProvider', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-feedback-toploadingbarprovider--default');
    await story.page.waitForTimeout(1000);
  });

  test('should render loading bar', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible({ timeout: 10000 });
  });
});
