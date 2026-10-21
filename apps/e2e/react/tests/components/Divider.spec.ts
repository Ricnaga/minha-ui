import { test, expect } from '../test';

test.describe('Divider', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-divider--default');
  });

  test('should render divider', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });

  test('should support different orientations', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
