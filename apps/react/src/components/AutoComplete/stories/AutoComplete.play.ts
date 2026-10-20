import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultAutoComplete: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const input = canvas.getByRole('combobox');

  // 1️⃣ Abre a lista ao focar
  await user.click(input);
  expect(await canvas.findByRole('listbox')).toBeInTheDocument();

  // 2️⃣ Filtra ao digitar
  await user.type(input, 'ba');
  expect(canvas.getByRole('option', { name: 'Banana' })).toBeInTheDocument();
  expect(canvas.queryByRole('option', { name: 'Laranja' })).toBeNull();

  // 3️⃣ Seleciona com Enter
  await user.keyboard('{Enter}');
  expect(input).toHaveValue('Banana');
};

export const testSelectByClick: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const input = canvas.getByRole('combobox');

  await user.click(input);
  await user.click(await canvas.findByRole('option', { name: 'Laranja' }));

  expect(input).toHaveValue('Laranja');
};

export const testMultipleAutoComplete: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const input = canvas.getByRole('combobox');

  // Seleciona duas frutas; cada uma vira um chip
  await user.click(input);
  await user.click(await canvas.findByRole('option', { name: 'Banana' }));
  await user.click(await canvas.findByRole('option', { name: 'Maçã' }));

  expect(
    canvas.getByRole('button', { name: 'Remover Banana' }),
  ).toBeInTheDocument();
  expect(
    canvas.getByRole('button', { name: 'Remover Maçã' }),
  ).toBeInTheDocument();

  // Opções já selecionadas somem da lista e o input continua editável
  expect(canvas.queryByRole('option', { name: 'Banana' })).toBeNull();
  expect(input).toHaveValue('');

  // Remove um chip pelo seu botão
  await user.click(canvas.getByRole('button', { name: 'Remover Banana' }));
  expect(canvas.queryByRole('button', { name: 'Remover Banana' })).toBeNull();
};
