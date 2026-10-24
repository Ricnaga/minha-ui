import { expect, userEvent, within } from 'storybook/test';
export const testDefaultInput = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Nome');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'João');
    input.focus();
    await expect(input).toHaveFocus();
};
export const testWithIconsInput = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();
    const startIcon = canvas.getByTestId('input-start-icon');
    const endIcon = canvas.getByTestId('input-end-icon');
    await expect(startIcon).toBeVisible();
    await expect(endIcon).toBeVisible();
    const label = canvas.getByText('Nome');
    await expect(label).toBeInTheDocument();
    await userEvent.clear(input);
    await userEvent.type(input, 'João');
    expect(label.className).toEqual(expect.stringContaining('peer-focus'));
    input.focus();
    await expect(input).toHaveFocus();
};
