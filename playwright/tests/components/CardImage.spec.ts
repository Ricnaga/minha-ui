import { test, expect } from '../test';

test.describe('CardImage', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-estruturas-card-cardimage--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render card image', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const image = canvas.getByRole('img');

    await expect(image.first()).toBeVisible();
  });
});
