import { expect, within } from 'storybook/test';
export const testDefaultCardTitle = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Conteúdo do card title')).toBeInTheDocument();
};
