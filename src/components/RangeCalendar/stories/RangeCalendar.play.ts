import type { PlayFunction } from "storybook/internal/types";
import { within, userEvent, expect, waitFor } from "storybook/test";

export const testDefaultRangeCalendar: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // header
  const header = canvas.getByRole("heading");
  const initialLabel = header.textContent;

  // pega o container do header
  const headerContainer = header.closest("header");
  expect(headerContainer).toBeTruthy();

  // botões de navegação (APENAS os do header)
  const headerButtons = within(headerContainer!).getAllByRole("button");
  expect(headerButtons).toHaveLength(2);

  const [prevButton, nextButton] = headerButtons;

  // navega para o próximo mês
  await user.click(nextButton);

  await waitFor(() => {
    expect(header.textContent).not.toBe(initialLabel);
  });

  // volta para o mês anterior
  await user.click(prevButton);

  await waitFor(() => {
    expect(header.textContent).toBe(initialLabel);
  });
};
