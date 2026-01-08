import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultModalHeader: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Clicar no botão que abre o modal
  const openButton = canvas.getByRole("button", {
    name: /abrir modal header/i,
  });
  await userEvent.click(openButton);

  // 2️⃣ Usa document.body porque o ModalHeader está em um portal
  const body = within(document.body);

  // 3️⃣ Esperar o header aparecer usando waitFor e getByText
  await waitFor(() => {
    const header = body.getByText(/children do modal header/i);
    expect(header).toBeInTheDocument();
  });

  // 4️⃣ Verificar se o botão de fechar existe e funciona
  const closeButton = await body.findByRole("button", {
    name: /close-modal/i,
    hidden: true,
  });
  expect(closeButton).toBeInTheDocument();

  // 5️⃣ Clicar no botão de fechar
  await userEvent.click(closeButton);

  // Esperar até que o header não esteja mais visível
  await waitFor(() => {
    expect(body.queryByText(/children do modal header/i)).not.toBeVisible();
  });
};
