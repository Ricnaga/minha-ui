import { expect, within } from 'storybook/test';
export const testDefaultCardImage = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole('img');
    await expect(image).toBeInTheDocument();
};
