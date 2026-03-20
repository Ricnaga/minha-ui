import { test, expect } from '../test';

test.describe('CardFooter', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card-cardfooter--default');
  });

  test('should render card footer', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
