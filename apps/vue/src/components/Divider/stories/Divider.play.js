import { expect, within } from 'storybook/test';
export const testDefaultDivider = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const divider = canvas.getByRole('separator');
    await expect(divider).toBeInTheDocument();
    await expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
};
export const testVerticalDivider = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const divider = canvas.getByRole('separator');
    await expect(divider).toBeInTheDocument();
    await expect(divider).toHaveAttribute('aria-orientation', 'vertical');
};
