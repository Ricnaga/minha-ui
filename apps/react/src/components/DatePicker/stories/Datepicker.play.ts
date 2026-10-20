import type { PlayFunction } from 'storybook/internal/types';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';

export const testDefaultDatepicker: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // 1️⃣ Abre o datepicker clicando no input
  const input = canvas.getByRole('textbox');
  await userEvent.click(input);

  // 2️⃣ O calendário fica dentro do PopoverContent (não visível até abrir)
  const calendarRegion = await screen.findByRole('region');
  await waitFor(() => expect(calendarRegion).toBeVisible());

  // 3️⃣ Seleciona o dia 15 do mês corrente
  const dayButton = within(calendarRegion).getByRole('button', {
    name: '15',
  });
  await userEvent.click(dayButton);

  // 4️⃣ O input recebe a data selecionada (mês atual, não um mês fixo)
  const today = new Date();
  const expectedValue = `15/${String(today.getMonth() + 1).padStart(
    2,
    '0',
  )}/${today.getFullYear()}`;

  await waitFor(() => expect(input).toHaveValue(expectedValue));
};
