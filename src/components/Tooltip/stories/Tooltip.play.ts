import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, waitFor, within } from 'storybook/test';

export const testDefaultTooltip: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole('button');

  // O tooltip fica oculto (aria-hidden + inert) e é irmão do trigger no canvas.
  // Consultar o próprio canvas evita capturar tooltips de outras stories no body.
  const getTooltip = () =>
    canvasElement.querySelector('[role="tooltip"]') as HTMLElement;

  let tooltip = getTooltip();

  // O mouse pode permanecer sobre o trigger vindo de outra story (estado do
  // navegador persiste entre execuções): dispara o leave explicitamente antes
  // de assegurar o estado inicial oculto.
  await userEvent.unhover(trigger);

  // Inicialmente escondido
  await waitFor(() => {
    tooltip = getTooltip();
    expect(tooltip).toHaveAttribute('aria-hidden', 'true');
  });

  // Hover → tooltip aparece
  await userEvent.hover(trigger);
  await waitFor(() => {
    tooltip = getTooltip();
    expect(tooltip).toHaveAttribute('aria-hidden', 'false');
  });

  // Mouse leave → tooltip desaparece
  await userEvent.unhover(trigger);
  await waitFor(() => {
    tooltip = getTooltip();
    expect(tooltip).toHaveAttribute('aria-hidden', 'true');
  });

  // Focus → tooltip aparece
  trigger.focus();
  await waitFor(() => {
    tooltip = getTooltip();
    expect(tooltip).toHaveAttribute('aria-hidden', 'false');
  });

  // Blur → tooltip desaparece
  trigger.blur();
  await waitFor(() => {
    tooltip = getTooltip();
    expect(tooltip).toHaveAttribute('aria-hidden', 'true');
  });
};
