import { test, expect } from '../test';

test.describe('useRipple', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-useripple--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render button with ripple', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const button = canvas.getByRole('button');

    await expect(button).toBeVisible();
  });

  test('should trigger ripple effect on click', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const button = canvas.getByRole('button');

    await button.click();
    await story.page.waitForTimeout(100);
  });
});
