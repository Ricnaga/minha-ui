import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultDrawer: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const user = userEvent.setup();

  // Clica no botão para abrir o drawer
  const openButton = canvas.getByRole("button", { name: /abrir drawer/i });
  await user.click(openButton);

  // Espera até que o drawer exista e esteja visível
  let dialog: HTMLElement | null = null;
  await waitFor(() => {
    dialog = document.body.querySelector('[role="dialog"]') as HTMLElement;
    if (!dialog || dialog.offsetParent === null) {
      throw new Error("Drawer ainda não visível");
    }
  });

  // Depois que apareceu, podemos usar dentro dele
  const drawer = within(dialog!);
  await expect(drawer.getByText(/children do drawer/i)).toBeInTheDocument();
  await expect(dialog).toHaveAttribute("aria-modal", "true");
};

export const testCompleteDrawer: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const user = userEvent.setup();

  // Clica no botão para abrir o drawer
  const openButton = canvas.getByRole("button", { name: /abrir drawer/i });
  await user.click(openButton);

  let dialog: HTMLElement | null = null;
  await waitFor(() => {
    dialog = document.body.querySelector('[role="dialog"]') as HTMLElement;
    if (!dialog || dialog.offsetParent === null) {
      throw new Error("Drawer ainda não visível");
    }
  });

  const drawer = within(dialog!);
  await expect(drawer.getByText(/drawer header/i)).toBeInTheDocument();
  await expect(drawer.getByText(/drawer body/i)).toBeInTheDocument();
  await expect(drawer.getByText(/drawer footer/i)).toBeInTheDocument();
  await expect(dialog).toHaveAttribute("aria-modal", "true");
};
