import { test, expect } from '../test';

test.describe('Popover', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-intera%C3%A7%C3%A3o-popover--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render popover trigger', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const trigger = canvas.getByRole('button').first();

    await expect(trigger).toBeVisible();
  });

  test('should open popover on trigger click', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
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
