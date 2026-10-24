import { expect, within } from 'storybook/test';
export const testDefaultCardBody = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Conteúdo do Card Body')).toBeInTheDocument();
};
