import { test, expect } from '../test';

test.describe('Checkbox', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-formularios-checkbox--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render checkbox and be visible', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const checkbox = canvas.getByRole('checkbox');

    await expect(checkbox).toBeAttached();
    await expect(checkbox).toBeVisible();
  });

  test('should be unchecked by default', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const checkbox = canvas.getByRole('checkbox');

    await expect(checkbox).not.toBeChecked();
  });

  test('should toggle checked state on click', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const checkbox = canvas.getByRole('checkbox');

    await checkbox.click();
    await expect(checkbox).toBeChecked();

    await checkbox.click();
    await expect(checkbox).not.toBeChecked();
  });
});
