import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultCardTitle: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Conteúdo do card title')).toBeInTheDocument();
};
