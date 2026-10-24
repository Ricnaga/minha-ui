import { expect, within } from 'storybook/test';
export const testDefaultCardSubtitle = async ({ canvasElement, }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Conteúdo do card sub title')).toBeInTheDocument();
};
