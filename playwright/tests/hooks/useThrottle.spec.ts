import { test, expect } from '../test';

test.describe('useThrottle', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-usethrottle--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render throttle demo', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const throttleButton = canvas.getByTestId('throttle-button');

    await expect(throttleButton).toBeVisible();
  });

  test('should execute on click with throttle', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const throttleButton = canvas.getByTestId('throttle-button');

    await throttleButton.click();
    await throttleButton.click();
    await story.page.waitForTimeout(600);
  });

  test('should support search input throttle', async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-usethrottle--search-input&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');

    const canvas = story.page.locator('#storybook-root');
    const searchInput = canvas.getByTestId('search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('test query');
  });
});
