import { test, expect } from '../test';

test.describe('CardDescription', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card-carddescription--default');
  });

  test('should render card description', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
