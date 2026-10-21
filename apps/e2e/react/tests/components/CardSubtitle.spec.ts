import { test, expect } from '../test';

test.describe('CardSubtitle', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card-cardsubtitle--default');
  });

  test('should render card subtitle', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
