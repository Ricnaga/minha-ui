import { test, expect } from '../test';

test.describe('Pagination', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-pagination--default');
  });

  test('should render pagination', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
