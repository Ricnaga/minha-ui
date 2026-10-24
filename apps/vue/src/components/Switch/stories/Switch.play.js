import { expect, userEvent, within } from 'storybook/test';
export const testDefaultSwitch = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    const control = canvas.getByRole('switch');
    await expect(control).not.toBeChecked();
    await user.click(control);
    await expect(control).toBeChecked();
    await user.click(control);
    await expect(control).not.toBeChecked();
};
export const testKeyboardSwitch = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    const control = canvas.getByRole('switch');
    control.focus();
    await user.keyboard(' ');
    await expect(control).toBeChecked();
};
