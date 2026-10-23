import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, waitFor, within } from 'storybook/test';

export const testDefaultTransitionContainer: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const container = canvas.getByTestId('transition-container');

  // aberto: roda os keyframes de entrada e está exposto
  await expect(getComputedStyle(container).animationName).toBe('enter');
  await expect(container).not.toHaveAttribute('aria-hidden');

  await user.click(canvas.getByRole('button', { name: /alternar/i }));

  // fechado: roda os keyframes de saída e sai da árvore de acessibilidade
  await waitFor(() => {
    expect(container).toHaveAttribute('aria-hidden', 'true');
  });

  await expect(getComputedStyle(container).animationName).toBe('exit');
  await expect(container).toHaveAttribute('inert');
};
