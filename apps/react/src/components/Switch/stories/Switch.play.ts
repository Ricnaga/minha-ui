import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultSwitch: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const control = canvas.getByRole('switch');

  // 1️⃣ Começa desligado
  expect(control).not.toBeChecked();

  // 2️⃣ Clique liga
  await user.click(control);
  expect(control).toBeChecked();

  // 3️⃣ Clique desliga
  await user.click(control);
  expect(control).not.toBeChecked();
};

export const testKeyboardSwitch: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const control = canvas.getByRole('switch');

  // 1️⃣ Focar e alternar com Espaço
  control.focus();
  await user.keyboard(' ');
  expect(control).toBeChecked();
};
