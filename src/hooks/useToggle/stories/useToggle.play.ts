import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultToggle: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button", { name: /ativar|desativar/i });
  const status = canvas.getByText(/status:/i);

  await userEvent.click(button);

  expect(status.textContent).toMatch(/ativo/i);
};

export const testFullExample: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const toggleBtn = canvas.getByRole("button", { name: /toggle/i });
  const openBtn = canvas.getByRole("button", { name: /abrir/i });
  const closeBtn = canvas.getByRole("button", { name: /fechar/i });
  const status = canvas.getByText(/status atual:/i);

  await userEvent.click(toggleBtn);
  await userEvent.click(openBtn);
  await userEvent.click(closeBtn);

  expect(status.textContent).toMatch(/inativo/i);
};
