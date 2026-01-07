import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultDrawerFooter: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Clica no botão para abrir o Drawer
  const openButton = canvas.getByRole("button", { name: /abrir drawer footer/i });
  await userEvent.click(openButton);

  // 2️⃣ Usa document.body porque o DrawerFooter está em um portal
  const body = within(document.body);

  // 3️⃣ Espera o DrawerFooter aparecer
  await waitFor(() => {
    const drawerfooter = body.getByText(/children do drawer footer/i);
    expect(drawerfooter).toBeInTheDocument();
  });

  // 4️⃣ Verifica se está dentro de um <section>
  const drawerfooterElement = body
    .getByText(/children do drawer footer/i)
    .closest("footer");
  expect(drawerfooterElement).toBeInTheDocument();
};
