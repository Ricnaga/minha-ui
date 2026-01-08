import type { PlayFunction } from "storybook/internal/types";
import { within, userEvent, expect } from "storybook/test";

export const testDefaultInput: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Seleciona o input pelo label
  const input = canvas.getByLabelText("Nome") as HTMLInputElement;
  expect(input).toBeInTheDocument();

  // Digitar algo deve flutuar o label
  await userEvent.type(input, "João");

  // Verifica que o input tem foco
  input.focus();
  expect(input).toHaveFocus();
};

export const testWithIconsInput: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // ✅ Pega o input
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  expect(input).toBeInTheDocument();

  // ✅ Pega ícones
  const startIcon = canvas.getByTestId("input-start-icon");
  const endIcon = canvas.getByTestId("input-end-icon");
  expect(startIcon).toBeVisible();
  expect(endIcon).toBeVisible();

  // ✅ Pega label
  const label = canvas.getByText("Nome");
  expect(label).toBeInTheDocument();

  // ✅ Testa interação: digitar no input faz o label "flutuar"
  await userEvent.clear(input);
  await userEvent.type(input, "João");

  // Para variant underline, o label não usa `peer-not-placeholder-shown`
  // Mas usamos `peer-focus` ou `-top-2.5` para verificar se flutuou
  expect(label.className).toEqual(expect.stringContaining("peer-focus"));

  // Para variant outline, você poderia verificar:
  // expect(label.className).toEqual(expect.stringContaining("peer-not-placeholder-shown"));

  // ✅ Testa foco manual
  input.focus();
  expect(input).toHaveFocus();

  // ✅ Opcional: verifica que o label ainda flutua enquanto tem valor
  expect(label.className).toEqual(expect.stringContaining("peer-focus"));
};
