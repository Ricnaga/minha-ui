import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testCompositionCard: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Conteúdo do card title')).toBeInTheDocument();
  await expect(
    canvas.getByText('Conteúdo do card sub title'),
  ).toBeInTheDocument();
  await expect(
    canvas.getByText('Conteúdo do card description'),
  ).toBeInTheDocument();
  await expect(canvas.getByText('Conteúdo do card footer')).toBeInTheDocument();
  const image = canvas.getByRole('img');
  await expect(image).toBeInTheDocument();
};
