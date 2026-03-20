import { test, expect } from '../test';

test.describe('Button', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-intera%C3%A7%C3%A3o-button--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render button and be visible', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const button = canvas.getByRole('button');

    await expect(button).toBeAttached();
    await expect(button).toBeVisible();
  });

  test('should be clickable and respond to interactions', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const button = canvas.getByRole('button');

    await expect(button).not.toBeDisabled();

    await button.click();
  });
});
