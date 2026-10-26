import { test, expect } from '../test';

test.describe('useLocalStorage', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('composables-uselocalstorage--default');
  });

  test('should render localStorage demo', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
