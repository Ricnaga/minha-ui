import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultModalActions: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Clicar no botão que abre o modal
  const openButton = canvas.getByRole("button", {
    name: /abrir modal actions/i,
  });
  await userEvent.click(openButton);

  // 2️⃣ Esperar os botões aparecerem usando waitFor e getByText
  await waitFor(() => {
    const cancelButton = within(document.body).getByText(/cancelar/i);
    const confirmButton = within(document.body).getByText(/confirmar/i);

    expect(cancelButton).toBeVisible();
    expect(confirmButton).toBeVisible();
  });
};
