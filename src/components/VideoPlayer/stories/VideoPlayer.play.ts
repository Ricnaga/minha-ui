import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultVideoPlayer: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Botão de play da thumbnail
  const playButton = canvas.getByRole("button", {
    name: /play video/i,
  });

  await user.click(playButton);

  // 2️⃣ Como o Backdrop usa portal, buscamos no body
  const screen = within(document.body);

  // 3️⃣ O vídeo deve aparecer
  const video = await screen.findByLabelText(/video player/i)
  expect(video).toBeInTheDocument();

  // 4️⃣ O vídeo recebe foco automaticamente
  expect(video).toHaveFocus();

  // 5️⃣ Pressionar Escape fecha o player
  await user.keyboard("{Escape}");

  // 6️⃣ Vídeo deve sumir
  await expect(screen.queryByRole("video")).not.toBeInTheDocument();
};
