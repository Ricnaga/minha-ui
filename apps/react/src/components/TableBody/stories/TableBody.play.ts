import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultTableBody: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(await canvas.findByText('John Doe')).toBeInTheDocument();
  await expect(
    await canvas.findByText('john.doe@example.com'),
  ).toBeInTheDocument();
};
