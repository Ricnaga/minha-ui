import { test, expect } from '../test';

test.describe('IconButton', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-iconbutton--default');
  });

  test('should render icon button', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
