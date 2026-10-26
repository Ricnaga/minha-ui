import type { PlayFunction } from 'storybook/internal/csf';
import { within, userEvent, expect } from 'storybook/test';

export const testDefaultBroadcastChannel: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const input = canvas.getByTestId('message-input');
  const button = canvas.getByTestId('send-button');
  const received = canvas.getByTestId('received');

  await user.type(input, 'hello');
  await user.click(button);

  expect(received).toHaveTextContent('hello');
};
