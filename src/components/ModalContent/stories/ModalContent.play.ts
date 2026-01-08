import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultModalContent: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Clicar no botão que abre o modal
  const openButton = canvas.getByRole("button", {
    name: /abrir modal content/i,
  });
  await userEvent.click(openButton);

  // 2️⃣ Usa document.body porque o ModalContent está em um portal
  const body = within(document.body);

  // 2️⃣ Esperar os botões aparecerem usando waitFor e getByText
  await waitFor(() => {
    const modalContent = body.getByText(/children do modal content/i);
    expect(modalContent).toBeInTheDocument();
  });
};
