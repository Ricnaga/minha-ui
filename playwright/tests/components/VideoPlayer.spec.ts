import { test, expect } from '../test';

test.describe('VideoPlayer', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-multim%C3%ADdia-videoplayer--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render video player', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
