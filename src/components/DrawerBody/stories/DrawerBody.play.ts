import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultDrawerBody: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Clica no botão para abrir o Drawer
  const openButton = canvas.getByRole("button", { name: /abrir drawer body/i });
  await userEvent.click(openButton);

  // 2️⃣ Usa document.body porque o DrawerBody está em um portal
  const body = within(document.body);

  // 3️⃣ Espera o DrawerBody aparecer
  await waitFor(() => {
    const drawerBody = body.getByText(/children do drawer body/i);
    expect(drawerBody).toBeInTheDocument();
  });

  // 4️⃣ Verifica se está dentro de um <section>
  const drawerBodyElement = body
    .getByText(/children do drawer body/i)
    .closest("section");
  expect(drawerBodyElement).toBeInTheDocument();
};
