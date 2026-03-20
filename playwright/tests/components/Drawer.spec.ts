import { test, expect } from '../test';

test.describe('Drawer', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-drawer--default');
  });

  test('should render drawer', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
