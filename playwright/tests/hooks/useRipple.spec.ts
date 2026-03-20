import { test, expect } from '../test';

test.describe('useRipple', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-useripple--default');
  });

  test('should render button with ripple', async ({ story }) => {
    const canvas = story.canvas;
    const button = canvas.getByRole('button');

    await expect(button).toBeVisible();
  });

  test('should trigger ripple effect on click', async ({ story }) => {
    const canvas = story.canvas;
    const button = canvas.getByRole('button');

    await button.click();
    await story.page.waitForTimeout(100);
  });
});
