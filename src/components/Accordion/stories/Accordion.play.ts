import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultAccordion: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const item1Header = canvas.getByText("Item 1");
  const item2Header = canvas.getByText("Item 2");

  const content1 = canvas.getByText("Conteúdo 1").parentElement?.parentElement;
  const content2 = canvas.getByText("Conteúdo 2").parentElement?.parentElement;

  if (!content1 || !content2) throw new Error("Content elements not found");

  // Estado inicial
  await expect(content1).toHaveAttribute("data-state", "open");
  await expect(content2).toHaveAttribute("data-state", "closed");

  // Abre Item 2
  await userEvent.click(item2Header);
  await expect(content2).toHaveAttribute("data-state", "open");

  // Fecha Item 1
  await userEvent.click(item1Header);
  await expect(content1).toHaveAttribute("data-state", "closed");
};
