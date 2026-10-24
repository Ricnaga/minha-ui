import { expect, within } from 'storybook/test';
export const testDefaultEmptyState = async ({ canvasElement, }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Nenhum resultado encontrado')).toBeInTheDocument();
};
