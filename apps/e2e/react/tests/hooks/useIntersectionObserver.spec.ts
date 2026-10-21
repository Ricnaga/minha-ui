import { test, expect } from '../test';

test.describe('useIntersectionObserver', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-useintersectionobserver--default');
  });

  test('should render intersection observer demo', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
