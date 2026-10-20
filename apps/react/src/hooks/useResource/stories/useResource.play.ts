import type { PlayFunction } from 'storybook/internal/types';
import { expect, waitFor, within } from 'storybook/test';

export const mockResourceResponse = {
  title: 'Recurso retornado pelo mock',
  message: 'Hello Resource!',
};

/**
 * Mock de `window.fetch` que evita dependência de rede externa nos testes.
 * Responde 200 para `posts/1` e 404 para qualquer outro endpoint
 * (usado pela story de erro).
 */
export const mockResourceFetch = async (input: RequestInfo | URL) => {
  const url = typeof input === 'string' ? input : input.toString();
  const isKnownEndpoint = url.includes('posts/1');

  await new Promise((resolve) => setTimeout(resolve, 120));

  if (!isKnownEndpoint) {
    return new Response(null, { status: 404 });
  }

  return new Response(JSON.stringify(mockResourceResponse), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const testDefaultResource: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const dataElement = await canvas.findByTestId('data-value');

  await waitFor(
    () => {
      const value = dataElement.textContent;
      expect(value).not.toBe('null');
      expect(value).toContain('title');
    },
    { timeout: 10000 },
  );

  const refetchButton = canvas.getByRole('button', { name: /refetch/i });
  await refetchButton.click();

  await waitFor(
    () => {
      const value = dataElement.textContent;
      expect(value).not.toBe('null');
      expect(value).toContain('title');
    },
    { timeout: 10000 },
  );
};
