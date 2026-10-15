import { test, expect } from '../test';

test.describe('OtpInput', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-otpinput--default');
  });

  test('should render one field per digit', async ({ story }) => {
    await expect(
      story.canvas.locator('[data-testid^="otp-input-"]'),
    ).toHaveCount(6);
  });

  test('should accept a typed digit', async ({ story }) => {
    const firstField = story.canvas
      .locator('[data-testid^="otp-input-"]')
      .first();

    await firstField.click();
    await firstField.fill('1');

    await expect(firstField).toHaveValue('1');
  });
});
