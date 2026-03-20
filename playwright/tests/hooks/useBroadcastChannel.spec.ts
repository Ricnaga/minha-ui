import { test, expect } from '../test';

test.describe('useBroadcastChannel', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-usebroadcastchannel--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render broadcast channel demo', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const sendButton = canvas.getByRole('button', { name: /enviar|send/i });

    await expect(sendButton).toBeVisible();
  });

  test('should send message on button click', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const sendButton = canvas.getByRole('button', { name: /enviar|send/i });

    await sendButton.click();
    await story.page.waitForTimeout(300);
  });
});
