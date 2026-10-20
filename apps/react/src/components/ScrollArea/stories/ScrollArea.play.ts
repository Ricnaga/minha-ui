import type { PlayFunction } from 'storybook/internal/types';
import { expect, waitFor, within } from 'storybook/test';

export const testDefaultScrollArea: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const scrollArea = canvas.getByRole('region', {
    name: /lista de itens/i,
  });

  // a área é focável, permitindo rolagem por teclado
  expect(scrollArea).toHaveAttribute('tabindex', '0');

  // o conteúdo é maior que o container, então existe rolagem
  expect(scrollArea.scrollHeight).toBeGreaterThan(scrollArea.clientHeight);

  // rolar altera a posição
  scrollArea.scrollTop = 40;

  await waitFor(() => {
    expect(scrollArea.scrollTop).toBe(40);
  });
};
