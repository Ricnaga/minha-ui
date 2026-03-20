import { test, expect } from '../test';

test.describe('Select', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-formularios-select--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render select', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
