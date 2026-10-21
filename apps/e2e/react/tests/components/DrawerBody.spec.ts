import { test, expect } from '../test';

test.describe('DrawerBody', () => {
  test('should render drawer body', async ({ story }) => {
    await story.navigate('components-interação-drawer-drawerbody--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
