import type { PlayFunction } from "storybook/internal/csf";
import { within, expect } from "storybook/test";

export const testDefaultErrorBoundary: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const successContent = await canvas.findByTestId("success-content");
  await expect(successContent).toBeInTheDocument();
  await expect(successContent).toHaveTextContent("Conteúdo renderizado com sucesso");
};

export const testWithFallback: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const errorFallback = await canvas.findByTestId("error-fallback");
  await expect(errorFallback).toBeInTheDocument();

  const heading = await canvas.findByRole("heading", { name: /algo deu errado/i });
  await expect(heading).toBeInTheDocument();
};

export const testWithFallbackRender: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const fallbackRender = await canvas.findByTestId("fallback-render");
  await expect(fallbackRender).toBeInTheDocument();

  const errorMessage = await canvas.findByTestId("error-message");
  await expect(errorMessage).toHaveTextContent("Erro simulado!");
};

export const testWithFallbackComponent: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const errorFallback = await canvas.findByTestId("error-fallback");
  await expect(errorFallback).toBeInTheDocument();

  const resetButton = await canvas.findByTestId("reset-button");
  await expect(resetButton).toBeInTheDocument();
  await expect(resetButton).toHaveTextContent("Tentar novamente");
};

export const testResetErrorBoundary: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const resetButton = await canvas.findByRole("button", { name: /reset/i });
  await expect(resetButton).toBeInTheDocument();

  await resetButton.click();

  const successContent = await canvas.findByTestId("success-content");
  await expect(successContent).toBeInTheDocument();
};

export const testNestedErrorBoundary: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const innerError = await canvas.findByTestId("inner-error");
  await expect(innerError).toBeInTheDocument();
  await expect(innerError).toHaveTextContent("Erro interno capturado");

  const outerError = await canvas.queryByTestId("outer-error");
  await expect(outerError).not.toBeInTheDocument();
};
