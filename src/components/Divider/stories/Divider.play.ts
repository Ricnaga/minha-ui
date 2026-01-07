import type { PlayFunction } from "storybook/internal/csf";
import { within, expect } from "storybook/test";

export const testDefaultDivider: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const divider = canvas.getByRole("separator");

  // Exists
  await expect(divider).toBeInTheDocument();

  // Default orientation
  await expect(divider).toHaveAttribute("aria-orientation", "horizontal");
};

export const testVerticalDivider: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const divider = canvas.getByRole("separator");

  // Exists
  await expect(divider).toBeInTheDocument();

  // Vertical orientation
  await expect(divider).toHaveAttribute("aria-orientation", "vertical");
};
