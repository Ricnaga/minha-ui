import type { PlayFunction } from "storybook/internal/types";
import { expect, screen, userEvent, within } from "storybook/test";

export const testDefaultDateRangepicker: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const input = canvas.getByRole("textbox");
  await userEvent.click(input);

  const header = await screen.findByRole("heading");
  expect(header).toBeInTheDocument();

  const days = await screen.findAllByRole("button", {
    pressed: undefined,
  });
  const dayButtons = days.filter(
    (btn) => btn.textContent && /^\d+$/.test(btn.textContent!)
  );

  const startDay = dayButtons[2];
  const endDay = dayButtons[dayButtons.length - 3];

  const startDayText = startDay.textContent;
  const endDayText = endDay.textContent;

  await userEvent.click(startDay);
  await userEvent.click(endDay);

  const inputValue = (input as HTMLInputElement).value;
  expect(inputValue).toContain(startDayText);
  expect(inputValue).toContain(endDayText);
  expect(inputValue).toMatch(/\d{2}\/\d{2}\/\d{4}.*-.*\d{2}\/\d{2}\/\d{4}/);
};