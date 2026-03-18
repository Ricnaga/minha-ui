import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultCopyToClipboard: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const input = canvas.getByTestId("text-input");
  const copyButton = canvas.getByTestId("copy-button");

  expect(input).toHaveValue("Texto para copiar");
  expect(copyButton).toHaveTextContent(/copiar/i);

  await user.clear(input);
  await user.type(input, "Hello World");

  await user.click(copyButton);

  await expect(copyButton).toHaveTextContent(/copiado!/i);

  const copiedValueDisplay = canvas.getByTestId("copied-value-display");
  await expect(copiedValueDisplay).toHaveTextContent(/hello world/i);

  const resetButton = canvas.getByTestId("reset-button");
  await user.click(resetButton);

  await expect(copyButton).toHaveTextContent(/copiar/i);
};

export const testCopyCodeSnippet: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const codeSnippet = canvas.getByTestId("code-snippet");
  const copyCodeButton = canvas.getByTestId("copy-code-button");

  expect(codeSnippet).toHaveTextContent(/const greet/);
  expect(copyCodeButton).toHaveTextContent(/copiar código/i);

  await user.click(copyCodeButton);

  await expect(copyCodeButton).toHaveTextContent(/copiado!/i);
};

export const testMultipleCopyButtons: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const copyEmailButton = canvas.getByTestId("copy-item-button-0");
  const copyPhoneButton = canvas.getByTestId("copy-item-button-1");
  const copyGithubButton = canvas.getByTestId("copy-item-button-2");

  await user.click(copyEmailButton);
  await expect(copyEmailButton).toHaveTextContent(/copiado!/i);

  await user.click(copyPhoneButton);
  await expect(copyEmailButton).toHaveTextContent(/copiar/i);
  await expect(copyPhoneButton).toHaveTextContent(/copiado!/i);

  await user.click(copyGithubButton);
  await expect(copyPhoneButton).toHaveTextContent(/copiar/i);
  await expect(copyGithubButton).toHaveTextContent(/copiado!/i);
};
