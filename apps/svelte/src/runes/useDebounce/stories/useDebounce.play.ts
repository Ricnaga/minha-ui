import type { PlayFunction } from 'storybook/internal/csf';
import { within, userEvent, expect, waitFor } from 'storybook/test';

export const testDefaultDebounce: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const input = canvas.getByPlaceholderText(/digite algo/i);
  const debouncedSpan = canvas.getByTestId('debounced-value');

  expect(debouncedSpan).toHaveTextContent('—');

  await user.type(input, 'hello');

  expect(debouncedSpan).toHaveTextContent('—');

  await waitFor(
    () => {
      expect(debouncedSpan).toHaveTextContent('hello');
    },
    { timeout: 1000 },
  );

  await user.type(input, ' world');

  expect(debouncedSpan).toHaveTextContent('hello');

  await waitFor(
    () => {
      expect(debouncedSpan).toHaveTextContent('hello world');
    },
    { timeout: 1000 },
  );
};
