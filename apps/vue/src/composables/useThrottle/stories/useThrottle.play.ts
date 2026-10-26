import type { PlayFunction } from 'storybook/internal/csf';
import { within, userEvent, expect, waitFor } from 'storybook/test';

export const testDefaultThrottle: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const button = canvas.getByRole('button');
  const clickCount = canvas.getByTestId('click-count');
  const throttledCount = canvas.getByTestId('throttled-count');

  expect(clickCount).toHaveTextContent('0');
  expect(throttledCount).toHaveTextContent('0');

  await user.click(button);
  await user.click(button);
  await user.click(button);

  expect(clickCount).toHaveTextContent('3');

  await waitFor(
    () => {
      expect(throttledCount).toHaveTextContent('3');
    },
    { timeout: 1000 },
  );
};
