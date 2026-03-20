import type { PlayFunction } from 'storybook/internal/csf';
import { within, expect } from 'storybook/test';

export const testLoading: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const loadingText = await canvas.findByText(/carregando\.\.\./);
  await expect(loadingText).toBeInTheDocument();
};

export const testError: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const errorText = await canvas.findByText(/ocorreu um erro!/);
  await expect(errorText).toBeInTheDocument();
};

export const testWithChildren: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const title = await canvas.findByText(/Título/);
  await expect(title).toBeInTheDocument();

  const content = await canvas.findByText(
    (content) =>
      typeof content === 'string' &&
      content.includes('conteúdo renderizado dentro do RenderBoundary'),
  );
  await expect(content).toBeInTheDocument();
};

export const testCustomLoadingFallback: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const customLoading = await canvas.findByTestId('custom-loading');
  await expect(customLoading).toBeInTheDocument();
  await expect(customLoading).toHaveTextContent(/Carregando dados\.\.\./);
};

export const testCustomErrorFallback: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const customError = await canvas.findByTestId('custom-error');
  await expect(customError).toBeInTheDocument();
  await expect(customError).toHaveTextContent(/Algo deu errado!/);
};

export const testWithSuspenseChildren: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const title = await canvas.findByText(/Componente com Suspense interno/);
  await expect(title).toBeInTheDocument();

  const description = await canvas.findByText(
    (content) =>
      typeof content === 'string' &&
      content.includes('renderiza imediatamente'),
  );
  await expect(description).toBeInTheDocument();
};
