import type { PlayFunction } from "storybook/internal/csf";
import { expect, within } from "storybook/test";

export const testDefaultCardImage: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const image = canvas.getByRole("img");

  await expect(image).toBeInTheDocument();
  await expect(image).toHaveAttribute("src");
  await expect(image).toHaveAttribute("alt");
};
