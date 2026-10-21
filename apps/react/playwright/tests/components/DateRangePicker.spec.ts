import { test, expect } from '../test';

test.describe('DateRangePicker', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-daterangepicker--default');
  });

  test('should render date range picker', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
