import type { PlayFunction } from "storybook/internal/types";
import { waitFor, within } from "storybook/test";

export const testeDefaultInfiniteScroll: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // Seleciona o "sentinela" que dispara o load
  const sentinel = await canvas.findByText(/Scroll para carregar mais/i);

  // Inicialmente não está carregando
  await waitFor(() => {
    if (sentinel.textContent !== "Scroll para carregar mais") {
      throw new Error(
        "Inicialmente deveria mostrar 'Scroll para carregar mais'"
      );
    }
  });

  // Simula scroll até o sentinel
  sentinel.scrollIntoView();

  // Espera até que o load seja disparado e o texto mude
  await waitFor(() => {
    if (sentinel.textContent !== "Carregando...") {
      throw new Error("Deveria estar carregando após scroll");
    }
  });

  // Espera até que os novos itens apareçam
  await waitFor(() => {
    const novosItens = canvas.getAllByText(/Item \d+/i);
    if (novosItens.length < 30) {
      // 20 iniciais + 10 novos
      throw new Error("Novos itens não foram carregados");
    }
  });

  // Confirma que voltou ao estado normal
  await waitFor(() => {
    if (sentinel.textContent !== "Scroll para carregar mais") {
      throw new Error("Sentinela não voltou ao estado normal");
    }
  });
};
