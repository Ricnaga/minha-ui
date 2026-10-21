import { test, expect } from '../test';

test.describe('Skeleton', () => {
  test('should render skeleton', async ({ story }) => {
    await story.navigate('components-feedback-skeleton--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
