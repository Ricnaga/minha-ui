import { test, expect } from '../test';

test.describe('useToggle', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-usetoggle--default');
  });

  test('should render useToggle story', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
