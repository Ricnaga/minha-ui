import type { PlayFunction } from "storybook/internal/csf";
import { expect, within } from "storybook/test";

export const testDefaultSpinner: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const spinnerContainer = canvas.getByRole("status");
  await expect(spinnerContainer).toBeInTheDocument();
  await expect(spinnerContainer).toHaveAttribute("aria-busy", "true");

  // Pega o wrapper
  const wrapper = spinnerContainer.querySelector("div");
  await expect(wrapper).not.toBeNull();
  await expect(wrapper?.className).toContain("animate-spin");
};
