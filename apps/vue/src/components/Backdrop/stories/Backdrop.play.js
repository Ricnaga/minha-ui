import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
export const testDefaultBackdrop = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
        name: /ativar backdrop/i,
    });
    const getBackdrop = async () => screen.findByRole('presentation', { hidden: true });
    const backdropInitial = await getBackdrop();
    const initialClass = backdropInitial.className;
    await userEvent.click(button);
    const backdropOpen = await getBackdrop();
    expect(backdropOpen.className).not.toBe(initialClass);
    await waitFor(async () => {
        const backdropClosed = await getBackdrop();
        expect(backdropClosed.className).toBe(initialClass);
    }, { timeout: 3500 });
};
