import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultButton: PlayFunction = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  // encontra o botão pelo texto
  const button = canvas.getByRole("button", { name: /button/i });

  // 1. deve estar visível
  await expect(button).toBeInTheDocument();
  await expect(button).toBeVisible();

  // 2. não deve estar desabilitado
  await expect(button).not.toBeDisabled();

  // 3. clique
  await userEvent.click(button);

  // 4. verifica se o onClick foi chamado
  await expect(args.onClick).toHaveBeenCalled();
};
