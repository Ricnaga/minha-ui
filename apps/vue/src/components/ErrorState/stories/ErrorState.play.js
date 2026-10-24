import { expect, within } from 'storybook/test';
export const testDefaultErrorState = async ({ canvasElement, }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Algo deu errado')).toBeInTheDocument();
};
