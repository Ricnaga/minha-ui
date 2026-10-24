import { expect, within } from 'storybook/test';
export const testDefaultCardHeader = async ({ canvasElement, }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Conteúdo do Card Header')).toBeInTheDocument();
};
