import { test, expect } from '../test';

test.describe('usePagination', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('composables-usepagination--default');
  });

  test('should render pagination controls', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
