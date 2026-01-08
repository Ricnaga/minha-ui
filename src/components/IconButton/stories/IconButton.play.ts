import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultIconButton: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ O IconButton deve ser um botão acessível
  const button = canvas.getByRole("button");
  await expect(button).toBeInTheDocument();

  // 2️⃣ Deve ser focável via teclado
  await user.tab();
  await expect(button).toHaveFocus();

  // 3️⃣ Clique deve funcionar
  await user.click(button);
  await expect(button).toBeEnabled();

  // 4️⃣ Não deve estar disabled por padrão
  await expect(button).not.toBeDisabled();
};
