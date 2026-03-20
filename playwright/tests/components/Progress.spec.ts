import { test, expect } from '../test';

test.describe('Progress', () => {
  test('should render progress bar', async ({ story }) => {
    await story.navigate('components-feedback-progress--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
