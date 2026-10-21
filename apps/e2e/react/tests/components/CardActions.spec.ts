import { test, expect } from '../test';

test.describe('CardActions', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-card-cardactions--default');
  });

  test('should render buttons in card actions', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
