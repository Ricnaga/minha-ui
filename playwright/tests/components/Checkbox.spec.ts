import { test, expect } from '../test';

test.describe('Checkbox', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-checkbox--default');
  });

  test('should render checkbox and be visible', async ({ story }) => {
    const canvas = story.canvas;
    const checkbox = canvas.getByRole('checkbox');

    await expect(checkbox).toBeAttached();
    await expect(checkbox).toBeVisible();
  });

  test('should be unchecked by default', async ({ story }) => {
    const canvas = story.canvas;
    const checkbox = canvas.getByRole('checkbox');

    await expect(checkbox).not.toBeChecked();
  });

  test('should toggle checked state on click', async ({ story }) => {
    const canvas = story.canvas;
    const checkbox = canvas.getByRole('checkbox');

    await checkbox.click();
    await expect(checkbox).toBeChecked();

    await checkbox.click();
    await expect(checkbox).not.toBeChecked();
  });
});
