import { expect, userEvent, within } from 'storybook/test';
export const testDefaultIconButton = async ({ canvasElement, }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await user.tab();
    await expect(button).toHaveFocus();
    await user.click(button);
    await expect(button).toBeEnabled();
    await expect(button).not.toBeDisabled();
};
