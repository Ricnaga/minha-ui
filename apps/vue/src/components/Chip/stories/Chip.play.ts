import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultChip: PlayFunction = async ({
  canvasElement,
  args,
}) => {
  const canvas = within(canvasElement);

  const chip = canvas.getByText(args.children);

  await expect(chip).toBeInTheDocument();

  await userEvent.click(chip);

  await expect(args.onClick).toHaveBeenCalled();
};

export const testRemoveChip: PlayFunction = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  const removeButton = canvas.getByRole('button', {
    name: `Remover ${String(args.children)}`,
  });

  await expect(removeButton).toBeInTheDocument();

  await userEvent.click(removeButton);

  await expect(args.onRemove).toHaveBeenCalled();
};
