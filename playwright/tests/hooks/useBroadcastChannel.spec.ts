import { test, expect } from '../test';

test.describe('useBroadcastChannel', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-usebroadcastchannel--default');
  });

  test('should render broadcast channel demo', async ({ story }) => {
    const canvas = story.canvas;
    const sendButton = canvas.getByRole('button', { name: /enviar|send/i });

    await expect(sendButton).toBeVisible();
  });

  test('should send message on button click', async ({ story }) => {
    const canvas = story.canvas;
    const sendButton = canvas.getByRole('button', { name: /enviar|send/i });

    await sendButton.click();
    await story.page.waitForTimeout(300);
  });
});
