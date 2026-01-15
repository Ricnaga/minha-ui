import type { PlayFunction } from "storybook/internal/csf";
import { userEvent, within } from "storybook/test";

export const testDefaultBroadcastChannel: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole("button", {
    name: /enviar mensagem/i,
  });

  await userEvent.click(button);
  await userEvent.click(button);
  await userEvent.click(button);
};
