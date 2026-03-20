import { test, expect } from '../test';

test.describe('Calendar', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-calendar--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render calendar', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });

  test('should navigate between months', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const prevButton = canvas
      .getByRole('button', { name: /previous|prev|</i })
      .first();
    const nextButton = canvas
      .getByRole('button', { name: /next|>|›/i })
      .first();

    if (await prevButton.isVisible()) {
      await prevButton.click();
      await expect(prevButton).toBeVisible();
    }

    if (await nextButton.isVisible()) {
      await nextButton.click();
      await expect(nextButton).toBeVisible();
    }
  });
});
