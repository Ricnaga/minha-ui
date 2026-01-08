import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultFocustrap: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const firstInput = canvas.getByTestId("first");
  const middleButton = canvas.getByTestId("middle");
  const lastInput = canvas.getByTestId("last");

  // 1️⃣ Foco inicial deve estar no primeiro elemento
  await expect(firstInput).toHaveFocus();

  // 2️⃣ Tab → vai para o botão
  await user.tab();
  await expect(middleButton).toHaveFocus();

  // 3️⃣ Tab → vai para o último input
  await user.tab();
  await expect(lastInput).toHaveFocus();

  // 4️⃣ Tab no último → deve voltar para o primeiro
  await user.tab();
  await expect(firstInput).toHaveFocus();

  // 5️⃣ Shift + Tab no primeiro → deve ir para o último
  await user.tab({ shift: true });
  await expect(lastInput).toHaveFocus();
};

export const testToggleFocusTrap: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const toggleButton = canvas.getByRole("button", {
    name: /ativar focustrap/i,
  });

  const input = canvas.getByPlaceholderText("Nome");

  // 1️⃣ Focus trap começa DESATIVADO
  toggleButton.focus();
  await expect(toggleButton).toHaveFocus();

  // Tab → deve ir para o input normalmente
  await user.tab();
  await expect(input).toHaveFocus();

  // 2️⃣ Ativar o focus trap
  await user.click(toggleButton);

  // Ao ativar, o foco inicial deve ir para o input
  await expect(input).toHaveFocus();

  // 3️⃣ Tab → como só tem um elemento focável,
  // ele deve continuar focado (trap ativo)
  await user.tab();
  await expect(input).toHaveFocus();

  // 4️⃣ Shift + Tab → continua preso
  await user.tab({ shift: true });
  await expect(input).toHaveFocus();
};
