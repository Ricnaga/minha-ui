import { test, expect } from '../test';

test.describe('Modal', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-modal--default');
  });

  test('should render modal', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
