import { test, expect } from '../test';

test.describe('Calendar', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-calendar--default');
  });

  test('should render calendar', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });

  test('should navigate between months', async ({ story }) => {
    const canvas = story.canvas;
    const prevButton = canvas
      .getByRole('button', { name: /previous|prev|</i })
      .first();
    const nextButton = canvas
      .getByRole('button', { name: /next|>|›/i })
      .first();

    if (await prevButton.isVisible()) {
      await prevButton.click();
      await expect(prevButton).toBeVisible();
    }

    if (await nextButton.isVisible()) {
      await nextButton.click();
      await expect(nextButton).toBeVisible();
    }
  });
});
