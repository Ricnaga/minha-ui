import { test, expect } from '../test';

test.describe('Stepper', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-indicadores-stepper--horizontal');
  });

  test('should render stepper', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
