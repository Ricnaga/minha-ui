import type { PlayFunction } from "storybook/internal/csf";
import { within, userEvent, expect } from "storybook/test";

export const testDefaultDisclosure: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Botão de toggle
  const toggleButton = canvas.getByRole("button", {
    name: /ativar|desativar/i,
  });

  // 2️⃣ Função para pegar status atual
  const status = () => canvas.getByText(/status:/i);

  // 3️⃣ Estado inicial deve ser Inativo
  expect(status()).toHaveTextContent("Inativo");

  // 4️⃣ Clique → ativa
  await user.click(toggleButton);
  expect(status()).toHaveTextContent("Ativo");

  // 5️⃣ Clique novamente → desativa
  await user.click(toggleButton);
  expect(status()).toHaveTextContent("Inativo");
};

export const testFullExampleDisclosure: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Selecionar botões
  const toggleButton = canvas.getByRole("button", { name: /toggle/i });
  const openButton = canvas.getByRole("button", { name: /abrir/i });
  const closeButton = canvas.getByRole("button", { name: /fechar/i });

  // 2️⃣ Selecionar status
  const status = () => canvas.getByText(/status atual:/i);

  // 3️⃣ Estado inicial
  expect(status()).toHaveTextContent("Inativo");

  // 4️⃣ Toggle → Ativo
  await user.click(toggleButton);
  expect(status()).toHaveTextContent("Ativo");

  // 5️⃣ Toggle novamente → Inativo
  await user.click(toggleButton);
  expect(status()).toHaveTextContent("Inativo");

  // 6️⃣ Open → Ativo
  await user.click(openButton);
  expect(status()).toHaveTextContent("Ativo");

  // 7️⃣ Close → Inativo
  await user.click(closeButton);
  expect(status()).toHaveTextContent("Inativo");
};
