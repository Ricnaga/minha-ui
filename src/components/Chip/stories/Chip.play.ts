import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultChip: PlayFunction = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  // Seleciona o chip pelo texto
  const chip = canvas.getByText(args.children); // usa o children passado via args
  expect(chip).toBeInTheDocument();

  // Simula clique
  await userEvent.click(chip);

  // Verifica se o callback onClick foi chamado
  expect(args.onClick).toHaveBeenCalled();
};
