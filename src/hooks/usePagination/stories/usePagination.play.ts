import type { PlayFunction } from "storybook/internal/types";
import { userEvent, waitFor, within } from "storybook/test";

export const testDefaultPagination: PlayFunction = async ({
  canvasElement,
}) => {
  // 1️⃣ Pega o “canvas” do story (o DOM do componente)
  const canvas = within(canvasElement);

  await canvas.findByText("Item 1");

  // Clica em Next
  const nextBtn = await canvas.findByRole("button", { name: /next/i });
  await userEvent.click(nextBtn);

  // Verifica que o primeiro item da próxima página aparece
  await canvas.findByText("Item 6");
};

export const testPaginationFromMockApi: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // Deve mostrar "Loading..."
  await canvas.findByText(/loading/i);

  // Espera o fetch terminar (500ms)
  await waitFor(async () => {
    await canvas.findByText("API Item 1");
  });

  // Clica Next
  const nextBtn = await canvas.findByRole("button", { name: /next/i });
  await userEvent.click(nextBtn);

  // Espera próxima página carregar
  await waitFor(async () => {
    await canvas.findByText("API Item 6");
  });
};
