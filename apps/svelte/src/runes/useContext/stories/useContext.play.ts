import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultContext: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ valor inicial vindo do contexto
  const initialValue = canvas.getByText(
    /value from context: hello storybook!/i,
  );
  await expect(initialValue).toBeInTheDocument();

  // 2️⃣ atualiza o valor pelo consumidor
  await user.click(canvas.getByRole('button', { name: /update value/i }));

  // 3️⃣ o consumidor reflete o novo valor
  const updatedValue = await canvas.findByText(
    /value from context: updated value!/i,
  );
  await expect(updatedValue).toBeInTheDocument();
};
