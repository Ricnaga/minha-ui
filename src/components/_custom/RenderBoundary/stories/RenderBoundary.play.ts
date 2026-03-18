import type { PlayFunction } from "storybook/internal/csf";
import { within } from "storybook/test";

export const testDefaultRenderBoundary: PlayFunction = async ({ canvasElement }) => {
  within(canvasElement);
};
