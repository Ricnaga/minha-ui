import type { PlayFunction } from "storybook/internal/types";
import { expect, screen, userEvent, within } from "storybook/test";

export const testDefaultDatepicker: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ abre o datepicker
  const input = canvas.getByRole("textbox");
  await userEvent.click(input);

  // 2️⃣ calendário está no portal → usa screen
  const calendarRegion = await screen.findByRole("region");
  expect(calendarRegion).toBeInTheDocument();

  // 3️⃣ seleciona um dia visível (ex: 15)
  const dayButton = await screen.findByRole("button", {
    name: "15",
  });

  await userEvent.click(dayButton);

  // 4️⃣ input recebeu valor formatado
  expect(input).toHaveValue("15/01/2026");
};
