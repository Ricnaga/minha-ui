import { test, expect } from '../test';

test.describe('Card', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card--default');
  });

  test('should render card', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });

  test('should render card with composition', async ({ story }) => {
    await story.navigate('components-estruturas-card--composition');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
