import type { PlayFunction } from "storybook/internal/types";
import { within, userEvent, waitFor, expect } from "storybook/test";

export const testDefaultLocalStorage: PlayFunction = async ({
  canvasElement,
}) => {
  // 1️⃣ Pega o “canvas” do story (o DOM do componente)
  const canvas = within(canvasElement);

  // 2️⃣ Seleciona os botões pelo texto
  const createButton = await canvas.findByRole("button", { name: /create/i });
  const updateButton = await canvas.findByRole("button", { name: /update/i });
  const removeButton = await canvas.findByRole("button", { name: /remove/i });
  const clearButton = await canvas.findByRole("button", { name: /clear/i });

  const valueContainer = canvas.getByText(/Value:/i).closest("p");

  // 3️⃣ Testa Create
  await userEvent.click(createButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent("created value");
  });

  // 4️⃣ Testa Update
  await userEvent.click(updateButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent("updated value");
  });

  // 5️⃣ Testa Remove
  await userEvent.click(removeButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent("initial value");
  });

  // 6️⃣ Testa Clear
  // Primeiro recria um valor
  await userEvent.click(createButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent("created value");
  });

  await userEvent.click(clearButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent("initial value");
  });
};
