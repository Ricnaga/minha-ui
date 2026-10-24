import { expect, userEvent, within } from 'storybook/test';
export const testDefaultChip = async ({ canvasElement, args, }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText(args.children);
    await expect(chip).toBeInTheDocument();
    await userEvent.click(chip);
    await expect(args.onClick).toHaveBeenCalled();
};
export const testRemoveChip = async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const removeButton = canvas.getByRole('button', {
        name: `Remover ${String(args.children)}`,
    });
    await expect(removeButton).toBeInTheDocument();
    await userEvent.click(removeButton);
    await expect(args.onRemove).toHaveBeenCalled();
};
