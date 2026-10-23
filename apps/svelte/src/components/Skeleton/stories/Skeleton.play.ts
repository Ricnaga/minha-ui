import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultSkeleton: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const skeleton = canvas.getByRole('status');

  await expect(skeleton).toBeInTheDocument();
  await expect(skeleton.className).toContain('animate-pulse');
};
