import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefault: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    await canvas.findByRole('columnheader', { name: 'Nome' }),
  ).toBeInTheDocument();
  await expect(
    await canvas.findByRole('cell', { name: 'John Doe' }),
  ).toBeInTheDocument();
};

export const testLoading: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    await canvas.findByRole('columnheader', { name: 'Nome' }),
  ).toBeInTheDocument();
  await expect((await canvas.findAllByRole('status')).length).toBeGreaterThan(
    0,
  );
};

export const testError: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    await canvas.findByText(/ocorreu um erro ao carregar/i),
  ).toBeInTheDocument();
};

export const testCustomLoadingFallback: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  await expect(await canvas.findByTestId('custom-loading')).toBeInTheDocument();
};

export const testCustomErrorFallback: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  await expect(await canvas.findByTestId('custom-error')).toBeInTheDocument();
};

export const testPaginated: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    await canvas.findByRole('cell', { name: 'John Doe' }),
  ).toBeInTheDocument();
  await expect(
    await canvas.findByRole('button', { name: /próxima página/i }),
  ).toBeInTheDocument();
};
