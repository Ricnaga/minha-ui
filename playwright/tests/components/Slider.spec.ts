import { test, expect } from '../test';

test.describe('Slider', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-slider--default');
  });

  test('should render the thumb', async ({ story }) => {
    await expect(story.canvas.getByRole('slider')).toBeVisible();
  });

  test('should increase the value when pressing arrow right', async ({
    story,
  }) => {
    const thumb = story.canvas.getByRole('slider');
    const currentValue = Number(await thumb.getAttribute('aria-valuenow'));

    await thumb.focus();
    await story.page.keyboard.press('ArrowRight');

    await expect(thumb).toHaveAttribute(
      'aria-valuenow',
      String(currentValue + 1),
    );
  });
});
