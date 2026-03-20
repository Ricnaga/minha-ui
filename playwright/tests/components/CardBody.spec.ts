import { test, expect } from '../test';

test.describe('CardBody', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-estruturas-card-cardbody--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render card body content', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
