import { test, expect } from '../test';

test.describe('DrawerFooter', () => {
  test('should render drawer footer', async ({ story }) => {
    await story.navigate('components-interação-drawer-drawerfooter--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
