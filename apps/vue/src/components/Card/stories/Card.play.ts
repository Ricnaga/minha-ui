import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultCard: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Conteúdo do Card')).toBeInTheDocument();
};
