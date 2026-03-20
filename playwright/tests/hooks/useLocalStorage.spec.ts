import { test, expect } from '../test';

test.describe('useLocalStorage', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-uselocalstorage--default');
  });

  test('should render localStorage demo', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
