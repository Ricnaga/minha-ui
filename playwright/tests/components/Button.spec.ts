import { test, expect } from '../test';

test.describe('Button', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-button--default');
  });

  test('should render button and be visible', async ({ story }) => {
    const canvas = story.canvas;
    const button = canvas.getByRole('button');

    await expect(button).toBeAttached();
    await expect(button).toBeVisible();
  });

  test('should be clickable and respond to interactions', async ({ story }) => {
    const canvas = story.canvas;
    const button = canvas.getByRole('button');

    await expect(button).not.toBeDisabled();

    await button.click();
  });
});
