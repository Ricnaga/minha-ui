import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultDrawerHeader: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Clica no botão para abrir o Drawer
  const openButton = canvas.getByRole("button", { name: /abrir drawer header/i });
  await userEvent.click(openButton);

  // 2️⃣ Usa document.body porque o DrawerHeader está em um portal
  const body = within(document.body);

  // 3️⃣ Espera o DrawerHeader aparecer
  await waitFor(() => {
    const drawerheader = body.getByText(/children do drawer header/i);
    expect(drawerheader).toBeInTheDocument();
  });

  // 4️⃣ Verifica se está dentro de um <section>
  const drawerheaderElement = body
    .getByText(/children do drawer footer/i)
    .closest("header");
  expect(drawerheaderElement).toBeInTheDocument();
};
