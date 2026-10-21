import { test, expect } from '../test';

test.describe('DrawerHeader', () => {
  test('should render drawer header', async ({ story }) => {
    await story.navigate('components-interação-drawer-drawerheader--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
