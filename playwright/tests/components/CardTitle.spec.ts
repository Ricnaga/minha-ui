import { test, expect } from '../test';

test.describe('CardTitle', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card-cardtitle--default');
  });

  test('should render card title', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
