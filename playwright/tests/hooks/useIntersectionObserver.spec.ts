import { test, expect } from '../test';

test.describe('useIntersectionObserver', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-useintersectionobserver--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render intersection observer demo', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
