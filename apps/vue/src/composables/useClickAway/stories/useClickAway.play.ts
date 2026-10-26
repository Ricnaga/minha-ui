import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultClickAway: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const openButton = canvas.getByRole('button', {
    name: /abrir caixa/i,
  });
  await user.click(openButton);

  const box = await canvas.findByText(/clique dentro de mim/i);
  expect(box).toBeInTheDocument();

  await user.click(box);
  expect(canvas.getByText(/clique dentro de mim/i)).toBeInTheDocument();

  await user.click(document.body);

  await expect(
    canvas.queryByText(/clique dentro de mim/i),
  ).not.toBeInTheDocument();

  expect(canvas.getByText(/clique fora detectado/i)).toBeInTheDocument();
};
