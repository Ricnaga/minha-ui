import type { PlayFunction } from "storybook/internal/types";
import { expect, within } from "storybook/test";

export const testDefaultBadge: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const badge = await canvas.findByText("3");

  await expect(badge).toBeInTheDocument();
};
