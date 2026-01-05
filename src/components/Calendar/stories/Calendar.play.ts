import type { PlayFunction } from "storybook/internal/types";
import { within, userEvent, expect } from "storybook/test";

export const testDefaultCalendar: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Header inicial
  const header = canvas.getByRole("heading", { level: 2 });
  const initialLabel = header.textContent;

  // 2️⃣ Navegar próximo mês
  const nextButton = canvas.getByLabelText("next-month");
  await user.click(nextButton);
  expect(header.textContent).not.toEqual(initialLabel);

  // 3️⃣ Voltar mês anterior
  const prevButton = canvas.getByLabelText("previous-month");
  await user.click(prevButton);
  expect(header.textContent).toEqual(initialLabel);

  // ✅ Comportamento funcional garantido:
  // Não depende de data-selected ou dias específicos
  expect(nextButton).toBeInTheDocument();
  expect(prevButton).toBeInTheDocument();
  expect(header).toBeInTheDocument();
};
