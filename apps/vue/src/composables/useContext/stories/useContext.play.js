import { expect, userEvent, within } from 'storybook/test';
export const testDefaultContext = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 1️⃣ Valor inicial vindo do context
    await expect(canvas.getByText(/value from context: hello storybook!/i)).toBeInTheDocument();
    // 2️⃣ Botão de update
    await userEvent.click(canvas.getByRole('button', { name: /update value/i }));
    // 3️⃣ Valor deve atualizar
    const updatedValue = await canvas.findByText(/value from context: updated value!/i);
    await expect(updatedValue).toBeInTheDocument();
};
