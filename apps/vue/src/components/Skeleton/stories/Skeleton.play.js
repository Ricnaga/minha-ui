import { expect, within } from 'storybook/test';
export const testDefaultSkeleton = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByRole('status');
    await expect(skeleton).toBeInTheDocument();
    await expect(skeleton.className).toContain('animate-pulse');
};
