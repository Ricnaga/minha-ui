import type { PlayFunction } from 'storybook/internal/csf';
import { waitFor, within } from 'storybook/test';

export const testDefaultIntersectionObserver: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const observedElement = await canvas.findByText(/fora da tela/i);

  await waitFor(() => {
    if (!observedElement.className.includes('bg-red-600')) {
      throw new Error('Elemento deveria estar vermelho inicialmente');
    }
  });

  observedElement.scrollIntoView();

  await waitFor(() => {
    if (!observedElement.className.includes('bg-green-700')) {
      throw new Error('Elemento deveria estar verde após scroll');
    }
  });

  await waitFor(() => {
    if (observedElement.textContent !== 'Visível') {
      throw new Error("Texto do elemento não mudou para 'Visível'");
    }
  });
};
