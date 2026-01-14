import type { PlayFunction } from "storybook/internal/csf";
import { expect, waitFor, within } from "storybook/test";

export const testDefaultToastContainer: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ clica no botão
  const button = await canvas.findByRole("button", {
    name: /ativa toast/i,
  });

  await button.click();

  // 2️⃣ agora busca o toast NO DOCUMENTO (portal)
  const body = within(document.body);

  const toast = await body.findByText("Toasty");

  expect(toast).toBeInTheDocument();

  // 3️⃣ verifica o state correto
  expect(toast).toHaveAttribute("data-state", "open");

  // 4️⃣ espera fechar
  await waitFor(
    () => {
      expect(toast).not.toBeInTheDocument();
    },
    {
      timeout: 4000,
    }
  );
};
