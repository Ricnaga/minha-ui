import type { PlayFunction } from "storybook/internal/types";
import { waitFor, within } from "storybook/test";

export const testDefaultIntersectionObserver: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // Seleciona o elemento que será observado
  const observedElement = await canvas.getByText(/fora da tela/i);

  // Verifica que inicialmente está vermelho
  await waitFor(() => {
    if (!observedElement.className.includes("bg-red-500")) {
      throw new Error("Elemento deveria estar vermelho inicialmente");
    }
  });

  // Simula scroll até o elemento
  observedElement.scrollIntoView();

  // Espera até o elemento ficar visível
  await waitFor(() => {
    if (!observedElement.className.includes("bg-green-500")) {
      throw new Error("Elemento deveria estar verde após scroll");
    }
  });

  // Verifica o texto atualizado
  await waitFor(() => {
    if (observedElement.textContent !== "Visível") {
      throw new Error("Texto do elemento não mudou para 'Visível'");
    }
  });
};
