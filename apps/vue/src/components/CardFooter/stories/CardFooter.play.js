import { expect, within } from 'storybook/test';
export const testDefaultCardFooter = async ({ canvasElement, }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Conteúdo do Card Footer')).toBeInTheDocument();
};
