import { test, expect } from '../test';

test.describe('useFetch', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-usefetch--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render useFetch demo', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
