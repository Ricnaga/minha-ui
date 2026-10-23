import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultEmptyState: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  await expect(
    canvas.getByText('Nenhum resultado encontrado'),
  ).toBeInTheDocument();
};
