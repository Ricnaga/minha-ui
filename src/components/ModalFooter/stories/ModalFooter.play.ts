import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultModalFooter: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Clicar no botão que abre o modal
  const openButton = canvas.getByRole("button", {
    name: /abrir modal footer/i,
  });
  await userEvent.click(openButton);

  // 2️⃣ Usa document.body porque o ModalFooter está em um portal
  const body = within(document.body);

  // 2️⃣ Esperar os botões aparecerem usando waitFor e getByText
  await waitFor(() => {
    const modalFooter = body.getByText(/children do modal footer/i);
    expect(modalFooter).toBeInTheDocument();
  });
};
