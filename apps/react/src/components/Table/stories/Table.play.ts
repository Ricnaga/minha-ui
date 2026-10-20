import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefault: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    await canvas.findByRole('columnheader', { name: 'Nome' }),
  ).toBeInTheDocument();
  await expect(await canvas.findByText('John Doe')).toBeInTheDocument();
  await expect(await canvas.findByText('Hannah King')).toBeInTheDocument();
};

export const testEmpty: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    await canvas.findByText(/nenhum registro encontrado/i),
  ).toBeInTheDocument();
};

export const testLoading: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    await canvas.findByRole('columnheader', { name: 'Nome' }),
  ).toBeInTheDocument();
  await expect(canvas.queryByText('John Doe')).not.toBeInTheDocument();
  // 3 skeleton rows × 3 columns
  await expect(canvas.getAllByRole('status')).toHaveLength(9);
};

export const testError: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    await canvas.findByText(/ocorreu um erro ao carregar/i),
  ).toBeInTheDocument();
};

export const testPaginated: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(await canvas.findByText('John Doe')).toBeInTheDocument();
  await expect(canvas.queryByText('Charlie Davis')).not.toBeInTheDocument();

  await userEvent.click(
    canvas.getByRole('button', { name: /próxima página/i }),
  );

  await expect(await canvas.findByText('Charlie Davis')).toBeInTheDocument();
  await expect(canvas.queryByText('John Doe')).not.toBeInTheDocument();
};
