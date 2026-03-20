import { test, expect } from '../test';

test.describe('Tabs', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-intera%C3%A7%C3%A3o-tabs--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render tabs', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
