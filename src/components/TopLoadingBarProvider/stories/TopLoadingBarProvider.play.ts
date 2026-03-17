import type { PlayFunction } from "storybook/internal/types";
import { expect, within } from "storybook/test";

export const testTopLoadingBarProvider: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const loadingButton = canvas.getByRole("button", { name: /simular carregamento/i });
  expect(loadingButton).toBeVisible();

  await loadingButton.click();

  const loadingBar = canvas.getByTestId("top-loading-bar");
  expect(loadingBar).toBeVisible();
};
