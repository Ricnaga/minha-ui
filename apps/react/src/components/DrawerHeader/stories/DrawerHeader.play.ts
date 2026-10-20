import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, waitFor, within } from 'storybook/test';

export const testDefaultDrawerHeader: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Clica no botão para abrir o Drawer
  const openButton = canvas.getByRole('button', {
    name: /abrir drawer header/i,
  });
  await userEvent.click(openButton);

  // 2️⃣ Usa document.body porque o Drawer está em um portal
  const body = within(document.body);

  // 3️⃣ Espera o conteúdo do header aparecer
  const drawerHeaderContent = await waitFor(() =>
    body.getByText(/children do drawer header/i),
  );

  // 4️⃣ Verifica se o conteúdo está dentro de um <header>
  expect(drawerHeaderContent.closest('header')).toBeInTheDocument();
};
