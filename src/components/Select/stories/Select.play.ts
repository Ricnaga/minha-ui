import type { PlayFunction } from "storybook/internal/csf";
import { within, userEvent, expect } from "storybook/test";

export const testDefaultSelect: PlayFunction = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Input renderizado
  const input = canvas.getByRole("textbox");
  await expect(input).toBeInTheDocument();

  // 2️⃣ Abre o select
  await user.click(input);

  // 3️⃣ Opções visíveis
  const option1 = await canvas.findByText(
    "option1 - valor do input sendo mostrado"
  );
  const option2 = await canvas.findByText(
    "option2 - valor do input sendo mostrado"
  );

  await expect(option1).toBeInTheDocument();
  await expect(option2).toBeInTheDocument();

  // 4️⃣ Seleciona uma opção
  await user.click(option2);

  // 5️⃣ Input atualizado
  await expect(input).toHaveValue(
    "option2 - valor do input sendo mostrado"
  );

  // 6️⃣ Callback chamado
  await expect(args.onSelectChange).toHaveBeenCalled();
};
