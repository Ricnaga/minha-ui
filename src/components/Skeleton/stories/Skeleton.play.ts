import type { PlayFunction } from "storybook/internal/csf";
import { expect, within } from "storybook/test";

export const testDefaultSkeleton: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const skeleton = canvas.getByRole("status");

  // 1️⃣ existe
  await expect(skeleton).toBeInTheDocument();

  // 2️⃣ indica loading (pulsando)
  await expect(skeleton.className).toContain("animate-pulse");
};
