import type { PlayFunction } from 'storybook/internal/types';
import { expect, userEvent, waitFor, within } from 'storybook/test';

export const testDefaultPopover: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Encontra o trigger
  const triggerButton = canvas.getByRole('button', { name: /abrir popover/i });
  expect(triggerButton).toBeInTheDocument();

  // 2️⃣ O conteúdo existe no DOM, mas fica oculto quando fechado
  const closedPopover = canvas.queryByRole('button', {
    name: /fechar popover/i,
  });

  if (closedPopover) {
    expect(closedPopover).not.toBeVisible();
  }

  // 3️⃣ Abrir popover
  await user.click(triggerButton);

  // 4️⃣ Espera o conteúdo ficar visível
  const popoverContent = await canvas.findByRole('button', {
    name: /fechar popover/i,
  });
  await waitFor(() => expect(popoverContent).toBeVisible());

  // 5️⃣ Checa se o estado abriu
  const popoverWrapper = popoverContent.closest('[data-state]');
  expect(popoverWrapper).toHaveAttribute('data-state', 'open');

  // 6️⃣ Fechar popover
  await user.click(popoverContent);

  // 7️⃣ Agora o conteúdo volta a ficar oculto
  await waitFor(() => expect(popoverContent).not.toBeVisible());
};
