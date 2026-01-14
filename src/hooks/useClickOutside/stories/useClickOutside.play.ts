import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultClickOutside: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Abrir a caixa
  const openButton = canvas.getByRole("button", {
    name: /abrir caixa/i,
  });
  await user.click(openButton);

  // 2️⃣ Caixa deve aparecer
  const box = await canvas.findByText(/clique dentro de mim/i);
  expect(box).toBeInTheDocument();

  // 3️⃣ Clique dentro NÃO deve fechar
  await user.click(box);
  expect(canvas.getByText(/clique dentro de mim/i)).toBeInTheDocument();

  // 4️⃣ Clique fora (document.body)
  await user.click(document.body);

  // 5️⃣ Caixa deve fechar
  await expect(
    canvas.queryByText(/clique dentro de mim/i)
  ).not.toBeInTheDocument();

  // 6️⃣ Status deve atualizar
  expect(canvas.getByText(/clique fora detectado/i)).toBeInTheDocument();
};
