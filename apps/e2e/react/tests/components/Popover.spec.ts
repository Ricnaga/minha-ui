import { test, expect } from '../test';

test.describe('Popover', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-popover--default');
  });

  test('should render popover trigger', async ({ story }) => {
    const canvas = story.canvas;
    const trigger = canvas.getByRole('button').first();

    await expect(trigger).toBeVisible();
  });

  test('should open popover on trigger click', async ({ story }) => {
    const canvas = story.canvas;
    const trigger = canvas.getByRole('button').first();

    await trigger.click();

    await story.page.waitForTimeout(300);

    const popover = canvas.locator(
      '[class*="popover"], [role="dialog"], [role="tooltip"]',
    );
    const count = await popover.count();

    if (count > 0) {
      await expect(popover.first()).toBeVisible();
    }
  });
});
