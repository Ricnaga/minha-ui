import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultTableFooter: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  await expect(await canvas.findByText('Total')).toBeInTheDocument();
  await expect(await canvas.findByText('3 usuários')).toBeInTheDocument();
};
