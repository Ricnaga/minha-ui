import { test, expect } from '../test';

test.describe('Input', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-input--default');
  });

  test('should render input', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
