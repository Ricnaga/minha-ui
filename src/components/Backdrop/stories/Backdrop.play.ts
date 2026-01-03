import type { PlayFunction } from "storybook/internal/types";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";

export const testDefaultBackdrop: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button", {
    name: /ativar backdrop/i,
  });

  const getBackdrop = async () =>
    screen.findByRole("presentation", { hidden: true });

  // Estado inicial — fechado (existe, mas fechado)
  const backdropInitial = await getBackdrop();
  const initialClass = backdropInitial.className;

  // Abre
  await userEvent.click(button);

  const backdropOpen = await getBackdrop();
  expect(backdropOpen.className).not.toBe(initialClass);

  // Fecha automaticamente após 3s
  await waitFor(
    async () => {
      const backdropClosed = await getBackdrop();
      expect(backdropClosed.className).toBe(initialClass);
    },
    { timeout: 3500 }
  );
};
