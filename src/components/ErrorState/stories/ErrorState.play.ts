import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultErrorState: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Algo deu errado')).toBeInTheDocument();
  await expect(canvasElement.querySelector('svg')).toBeInTheDocument();
};

export const testAsErrorBoundaryFallback: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const retry = await canvas.findByRole('button', { name: 'Tentar novamente' });
  await userEvent.click(retry);

  await expect(
    await canvas.findByText('Conteúdo carregado com sucesso'),
  ).toBeInTheDocument();
};
