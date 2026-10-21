import { test, expect } from '../test';

test.describe('Select', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-select--default');
  });

  test('should render select', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
