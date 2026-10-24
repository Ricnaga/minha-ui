import { expect, within } from 'storybook/test';
export const testDefaultCardDescription = async ({ canvasElement, }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Conteúdo do card description')).toBeInTheDocument();
};
