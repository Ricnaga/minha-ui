import { expect, userEvent, within } from 'storybook/test';
export const testDefaultRipple = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /clique aqui/i });
    // 1. botão visível e sem ripple antes do clique
    await expect(button).toBeInTheDocument();
    await expect(button.querySelector('span')).toBeNull();
    // 2. clique cria o elemento de ripple
    await userEvent.click(button);
    await expect(button.querySelector('span')).not.toBeNull();
};
