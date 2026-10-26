import { test, expect } from '../test';

test.describe('useInfiniteScroll', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('runes-useinfinitescroll--default');
  });

  test('should render infinite scroll', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
