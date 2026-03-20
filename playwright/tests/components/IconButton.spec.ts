import { test, expect } from '../test';

test.describe('IconButton', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-intera%C3%A7%C3%A3o-iconbutton--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render icon button', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
