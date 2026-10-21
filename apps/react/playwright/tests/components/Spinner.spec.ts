import { test, expect } from '../test';

test.describe('Spinner', () => {
  test('should render spinner', async ({ story }) => {
    await story.navigate('components-feedback-spinner--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
