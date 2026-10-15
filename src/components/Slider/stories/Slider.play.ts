import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultSlider: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const thumb = canvas.getByRole('slider');
  await expect(thumb).toHaveAttribute('aria-valuenow', '0');

  thumb.focus();
  await userEvent.keyboard('{ArrowRight}');

  await expect(thumb).toHaveAttribute('aria-valuenow', '1');
};
