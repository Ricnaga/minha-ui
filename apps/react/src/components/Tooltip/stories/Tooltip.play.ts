import type { PlayFunction } from 'storybook/internal/csf';
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test';

export const testDefaultTooltip: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole('button');

  // O tooltip fica oculto (aria-hidden + inert) e é irmão do trigger no canvas.
  // Consultar o próprio canvas evita capturar tooltips de outras stories no body.
  const getTooltip = () =>
    canvasElement.querySelector('[role="tooltip"]') as HTMLElement;

  let tooltip = getTooltip();

  // O ponteiro pode permanecer sobre o wrapper vindo de outra story (o estado
  // de :hover persiste no navegador entre execuções e não é sincronizado com
  // eventos sintéticos). Dispara explicitamente o leave no wrapper (onde ficam
  // os handlers) para garantir o estado inicial oculto de forma determinística.
  trigger.blur();
  fireEvent.mouseLeave(trigger.parentElement as HTMLElement);

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
