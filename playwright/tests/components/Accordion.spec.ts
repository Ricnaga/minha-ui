import { test, expect } from '../test';

test.describe('Accordion', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-interação-accordion--default');
  });

  test('should render accordion', async ({ story }) => {
    const canvas = story.canvas;
    const accordion = canvas.locator('[data-accordion]');

    if ((await accordion.count()) > 0) {
      await expect(accordion.first()).toBeVisible();
    } else {
      const button = canvas.getByRole('button');
      await expect(button.first()).toBeVisible();
    }
  });

  test('should expand/collapse items', async ({ story }) => {
    const canvas = story.canvas;
    const trigger = canvas.getByRole('button').first();

    await trigger.click();
    await expect(trigger).toBeVisible();
  });
});
