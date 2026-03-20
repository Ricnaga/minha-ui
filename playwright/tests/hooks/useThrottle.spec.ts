import { test, expect } from '../test';

test.describe('useThrottle', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-usethrottle--default');
  });

  test('should render throttle demo', async ({ story }) => {
    const canvas = story.canvas;
    const throttleButton = canvas.getByTestId('throttle-button');

    await expect(throttleButton).toBeVisible();
  });

  test('should execute on click with throttle', async ({ story }) => {
    const canvas = story.canvas;
    const throttleButton = canvas.getByTestId('throttle-button');

    await throttleButton.click();
    await throttleButton.click();
    await story.page.waitForTimeout(600);
  });

  test('should support search input throttle', async ({ story }) => {
    await story.navigate('hooks-usethrottle--search-input');

    const canvas = story.canvas;
    const searchInput = canvas.getByTestId('search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('test query');
  });
});
