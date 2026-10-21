import { test, expect } from '../test';

test.describe('Tooltip', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-tooltip--default');
  });

  test('should render tooltip', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
