import type { PlayFunction } from "storybook/internal/csf";
import { within, expect } from "storybook/test";

export const testLoading: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const loadingText = await canvas.findByText("carregando...");
  await expect(loadingText).toBeInTheDocument();
};

export const testError: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const errorText = await canvas.findByText("ocorreu um erro!");
  await expect(errorText).toBeInTheDocument();
};

export const testWithDataFunction: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const name = await canvas.findByText("John Doe");
  const email = await canvas.findByText("john.doe@example.com");

  await expect(name).toBeInTheDocument();
  await expect(email).toBeInTheDocument();
};

export const testWithDataChildren: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const user1 = await canvas.findByText("John Doe");
  const user2 = await canvas.findByText("Jane Smith");
  const user3 = await canvas.findByText("Bob Johnson");

  await expect(user1).toBeInTheDocument();
  await expect(user2).toBeInTheDocument();
  await expect(user3).toBeInTheDocument();
};

export const testCustomLoadingFallback: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const customLoading = await canvas.findByTestId("custom-loading");
  await expect(customLoading).toBeInTheDocument();
  await expect(customLoading).toHaveTextContent("Carregando dados...");
};

export const testCustomErrorFallback: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const customError = await canvas.findByTestId("custom-error");
  await expect(customError).toBeInTheDocument();
  await expect(customError).toHaveTextContent("Algo deu errado!");
};

export const testErrorAfterLoading: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const errorText = await canvas.findByText("ocorreu um erro!");
  await expect(errorText).toBeInTheDocument();
};
