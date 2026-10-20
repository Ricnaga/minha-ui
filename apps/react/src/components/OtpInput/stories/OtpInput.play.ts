import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultOtpInput: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const fields = canvas.getAllByTestId(/^otp-input-\d+$/) as HTMLInputElement[];

  // 1️⃣ Todos os campos começam vazios
  expect(fields).toHaveLength(6);
  expect(fields[0]).toHaveValue('');

  // 2️⃣ Digitar preenche o campo e avança o foco
  await user.click(fields[0]);
  await user.keyboard('1');
  expect(fields[0]).toHaveValue('1');
  expect(fields[1]).toHaveFocus();
};

export const testPasteOtpInput: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const fields = canvas.getAllByTestId(/^otp-input-\d+$/) as HTMLInputElement[];

  // 1️⃣ Colar o código preenche todos os campos de uma vez
  await user.click(fields[0]);
  await user.paste('123456');

  expect(fields.map((field) => field.value)).toEqual([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
  ]);
};
