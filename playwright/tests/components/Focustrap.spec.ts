import { test, expect } from '../test';

test.describe('Focustrap', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-focustrap--default');
  });

  test('should render focus trap', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
