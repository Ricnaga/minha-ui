import { test, expect } from '../test';

test.describe('CardImage', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card-cardimage--default');
  });

  test('should render card image', async ({ story }) => {
    const canvas = story.canvas;
    const image = canvas.getByRole('img');

    await expect(image.first()).toBeVisible();
  });
});
