import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultTablePagination: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  await expect(await canvas.findByText(/página 1 de 3/i)).toBeInTheDocument();

  await userEvent.click(
    canvas.getByRole('button', { name: /próxima página/i }),
  );

  await expect(await canvas.findByText(/página 2 de 3/i)).toBeInTheDocument();
};
