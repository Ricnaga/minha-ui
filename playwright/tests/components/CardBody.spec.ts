import { test, expect } from '../test';

test.describe('CardBody', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card-cardbody--default');
  });

  test('should render card body content', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
