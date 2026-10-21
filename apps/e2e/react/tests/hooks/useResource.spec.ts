import { test, expect } from '../test';

test.describe('useResource', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-useresource--default');
  });

  test('should render resource demo', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
