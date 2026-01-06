import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultCheckbox: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Seleciona o checkbox
  const checkbox = canvas.getByRole("checkbox") as HTMLInputElement;

  // 1️⃣ Verifica se está renderizado
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();

  // 2️⃣ Testa check/uncheck
  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  await userEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();

  // 3️⃣ Testa disabled
  if (checkbox.hasAttribute("disabled")) {
    expect(checkbox).toBeDisabled();
  }

  // 4️⃣ Testa indeterminate
  if (checkbox.hasAttribute("data-indeterminate")) {
    // para indeterminate, HTML checkbox precisa usar prop indeterminate
    expect(checkbox.indeterminate).toBe(true);
  }
};
