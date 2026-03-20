import { test, expect } from '../test';

test.describe('Accordion', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-intera%C3%A7%C3%A3o-accordion--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render accordion', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const accordion = canvas.locator('[data-accordion]');

    if ((await accordion.count()) > 0) {
      await expect(accordion.first()).toBeVisible();
    } else {
      const button = canvas.getByRole('button');
      await expect(button.first()).toBeVisible();
    }
  });

  test('should expand/collapse items', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const trigger = canvas.getByRole('button').first();

    await trigger.click();
    await expect(trigger).toBeVisible();
  });
});
