import { test, expect } from '../test';

test.describe('Progress', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test('should render progress bar', async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-feedback-progress--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');

    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
