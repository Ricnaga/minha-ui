import type { PlayFunction } from "storybook/internal/csf";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";

export const testDefaultModal: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const user = userEvent.setup();

  // Clica no botão para abrir o modal
  const openButton = canvas.getByRole("button", { name: /abrir modal/i });
  await user.click(openButton);

  // Espera até que o modal exista e esteja visível
  const modalContainer = await screen.findByTestId("modal-container");
  // findByTestId já espera até aparecer
  await expect(modalContainer).toBeVisible();
};

export const testCompleteModal: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // Abre o modal
  const openButton = canvas.getByRole("button", { name: /abrir modal/i });
  await user.click(openButton);

  // Espera o container do modal
  const modalContainer = await screen.findByTestId("modal-container");
  await waitFor(() => expect(modalContainer).toBeVisible());

  // Verifica header e body dentro do container
  const modal = within(modalContainer);
  await expect(modal.getByText(/modal header/i)).toBeInTheDocument();
  await expect(modal.getByText(/modal body/i)).toBeInTheDocument();

  const actions = modal.getByTestId("modal-actions");
  expect(actions).toBeInTheDocument();
};
