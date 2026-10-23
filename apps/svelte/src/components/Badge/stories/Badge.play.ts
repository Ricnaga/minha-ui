import type { PlayFunction } from 'storybook/internal/csf';
import { expect } from 'storybook/test';

export const testDefaultBadge: PlayFunction = async ({ canvasElement }) => {
  await expect(canvasElement).toBeInTheDocument();
};
