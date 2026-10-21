import { test, expect } from '../test';

test.describe('Tabs', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-tabs--default');
  });

  test('should render tabs', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
