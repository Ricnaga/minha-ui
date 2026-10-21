import { test, expect } from '../test';

test.describe('Badge', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-indicadores-badge--default');
  });

  test('should render badge story', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });

  test('should display value', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
