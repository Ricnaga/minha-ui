import { test, expect } from '../test';

test.describe('ModalContent', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test('should render modal content', async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-intera%C3%A7%C3%A3o-modal-modalcontent--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');

    const canvas = story.page.locator('#storybook-root');

    await expect(canvas).toBeVisible();
  });
});
