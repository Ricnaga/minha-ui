import type { PlayFunction } from "storybook/internal/csf";
import { expect, within } from "storybook/test";

export const testDefaultCardFooter: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  await expect(
    canvas.getByText(/conteúdo do card footer/i)
  ).toBeInTheDocument();
};
