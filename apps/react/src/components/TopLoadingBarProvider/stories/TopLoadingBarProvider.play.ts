import type { PlayFunction } from 'storybook/internal/types';
import { expect, waitFor, within } from 'storybook/test';

export const testTopLoadingBarProvider: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const loadingButton = canvas.getByRole('button', {
    name: /simular carregamento/i,
  });
  expect(loadingButton).toBeVisible();

  loadingButton.click();

  // A barra só renderiza após o progresso sair de 0% (1º tick de 150ms)
  const loadingBar = await canvas.findByTestId('top-loading-bar');
  await waitFor(() => expect(loadingBar).toBeVisible());
};
