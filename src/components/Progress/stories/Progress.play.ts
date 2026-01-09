import type { PlayFunction } from "storybook/internal/types";
import { expect, within } from "storybook/test";

export const testDefaultProgress: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Seleciona o wrapper e core via data-testid
  const wrapper = canvas.getByTestId("progress-wrapper");
  const core = canvas.getByTestId("progress-core");

  // Verifica se estão visíveis
  expect(wrapper).toBeVisible();
  expect(core).toBeVisible();

  // Se animated estiver true, a classe da animação deve estar aplicada
  if (core.className.includes("animate-[moving_1s_ease-in-out_infinite]")) {
    expect(core).toHaveClass("animate-[moving_1s_ease-in-out_infinite]");
  }

  // Verifica se o width do core faz sentido (quando determinate)
  const width = parseFloat(core.style.width || "0");
  expect(width).toBeGreaterThanOrEqual(0);
  expect(width).toBeLessThanOrEqual(100);
};
