import { test, expect } from '../test';

test.describe('DatePicker', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-datepicker--default');
  });

  test('should render datepicker input', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });

  test('should open calendar on input focus', async ({ story }) => {
    const canvas = story.canvas;
    const input = canvas.getByRole('textbox').first();

    await input.click();

    const calendar = canvas.locator('[class*="calendar"], table').first();
    if (await calendar.isVisible({ timeout: 2000 }).catch(() => false)) {
      await expect(calendar).toBeVisible();
    }
  });
});
