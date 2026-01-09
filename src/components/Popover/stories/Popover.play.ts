import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultPopover: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Encontrar trigger
  const triggerButton = canvas.getByRole("button", { name: /abrir popover/i });
  expect(triggerButton).toBeInTheDocument();

  // 2️⃣ Antes de abrir, o popover não deve existir ou não estar visível
  const closedPopover = canvas.queryByRole("button", {
    name: /fechar popover/i,
  });
  if (closedPopover) {
    expect(closedPopover).not.toBeVisible();
  }

  // 3️⃣ Abrir popover
  await user.click(triggerButton);

  // 4️⃣ Espera o conteúdo do popover aparecer
  const popoverContent = await canvas.findByRole("button", {
    name: /fechar popover/i,
  });
  expect(popoverContent).toBeVisible();

  // 5️⃣ Checa se animação abriu
  const popoverWrapper = popoverContent.closest("[data-state]");
  expect(popoverWrapper).toHaveAttribute("data-state", "open");

  // 6️⃣ Fechar popover
  await user.click(popoverContent);

  // 7️⃣ Agora o popover deve estar fechado (opcionalmente espera o DOM atualizar)
  const closedPopoverAgain = canvas.queryByRole("button", {
    name: /fechar popover/i,
  });
  if (closedPopoverAgain) {
    expect(closedPopoverAgain).not.toBeVisible();
  }
};
