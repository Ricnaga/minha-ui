import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultPagination: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // Texto descritivo inicial
  await expect(canvas.getByText("Página 1 de 15")).toBeInTheDocument();

  // Botões de navegação
  const prevButton = canvas.getByRole("button", {
    name: /página anterior/i,
  });

  const nextButton = canvas.getByRole("button", {
    name: /próxima página/i,
  });

  // Clica no next
  await user.click(nextButton);

  await expect(canvas.getByText("Página 2 de 15")).toBeInTheDocument();

  // Clica numa página específica (3)
  const pageThreeButton = canvas.getByRole("button", { name: "3" });
  await user.click(pageThreeButton);

  await expect(canvas.getByText("Página 3 de 15")).toBeInTheDocument();

  // Ellipsis existe
  expect(canvas.getAllByText("...").length).toBeGreaterThan(0);

  // Clicar no prev até chegar no limite
  await user.click(prevButton);
  await user.click(prevButton);
  await user.click(prevButton); // tentativa extra

  await expect(canvas.getByText("Página 1 de 15")).toBeInTheDocument();
};
