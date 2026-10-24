import { expect, within } from 'storybook/test';
export const testDefaultCardActions = async ({ canvasElement, }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Conteúdo do Card Actions')).toBeInTheDocument();
};
