import type { PlayFunction } from "storybook/internal/csf";
import { within } from "storybook/test";

export const testDefaultResource: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
