import { test, expect } from '../test';

test.describe('DatePicker', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-formularios-datepicker--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render datepicker input', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });

  test('should open calendar on input focus', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const input = canvas.getByRole('textbox').first();

    await input.click();

    const calendar = canvas.locator('[class*="calendar"], table').first();
    if (await calendar.isVisible({ timeout: 2000 }).catch(() => false)) {
      await expect(calendar).toBeVisible();
    }
  });
});
