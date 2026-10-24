import { expect, within } from 'storybook/test';
export const testDefaultCard = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Conteúdo do Card')).toBeInTheDocument();
};
