import { test, expect } from '../test';

test.describe('useClickAway', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-useclickaway--default');
  });

  test('should render demo', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
