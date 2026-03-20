import { test, expect } from '../test';

test.describe('Chip', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-indicadores-chip--default');
  });

  test('should render chip', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
