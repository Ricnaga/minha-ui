import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultDivider: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const divider = canvas.getByRole('separator');

  await expect(divider).toBeInTheDocument();
  await expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
};

export const testVerticalDivider: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const divider = canvas.getByRole('separator');

  await expect(divider).toBeInTheDocument();
  await expect(divider).toHaveAttribute('aria-orientation', 'vertical');
};
