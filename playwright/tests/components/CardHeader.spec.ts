import { test, expect } from '../test';

test.describe('CardHeader', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card-cardheader--default');
  });

  test('should render card header', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
