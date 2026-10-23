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

  await expect(args.onclick).toHaveBeenCalled();
};

export const testRemoveChip: PlayFunction = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  // O `children` no Svelte é um `Snippet` opaco, então o rótulo não o inclui.
  const removeButton = canvas.getByRole('button', { name: 'Remover' });

  await expect(removeButton).toBeInTheDocument();

  await userEvent.click(removeButton);

  await expect(args.onRemove).toHaveBeenCalled();
};
