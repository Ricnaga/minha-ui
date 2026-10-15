import { test, expect } from '../test';

test.describe('Switch', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-switch--default');
  });

  test('should render a switch control', async ({ story }) => {
    await expect(story.canvas.getByRole('switch')).toBeVisible();
  });

  test('should toggle when clicked', async ({ story }) => {
    const control = story.canvas.getByRole('switch');

    await control.click();

    await expect(control).toBeChecked();
  });
});
