import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultContext: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Valor inicial vindo do context
  const initialValue = canvas.getByText(/value from context: hello storybook!/i);
  expect(initialValue).toBeInTheDocument();

  // 2️⃣ Botão de update
  const updateButton = canvas.getByRole('button', {
    name: /update value/i,
  });
  await user.click(updateButton);

  // 3️⃣ Valor deve atualizar
  const updatedValue = await canvas.findByText(
    /value from context: updated value!/i
  );
  expect(updatedValue).toBeInTheDocument();
};
