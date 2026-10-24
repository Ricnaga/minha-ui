import { expect, within } from 'storybook/test';
export const testDefaultBadge = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = await canvas.findByText('3');
    await expect(badge).toBeInTheDocument();
};
