import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultCopyToClipboard: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const input = canvas.getByTestId('text-input');
  const copyButton = canvas.getByTestId('copy-button');

  expect(input).toHaveValue('Texto para copiar');
  expect(copyButton).toHaveTextContent(/copiar/i);

  await user.clear(input);
  await user.type(input, 'Hello World');

  await user.click(copyButton);

  await expect(copyButton).toHaveTextContent(/copiado!/i);

  const copiedValueDisplay = canvas.getByTestId('copied-value-display');
  await expect(copiedValueDisplay).toHaveTextContent(/hello world/i);

  const resetButton = canvas.getByTestId('reset-button');
  await user.click(resetButton);

  await expect(copyButton).toHaveTextContent(/copiar/i);
};
