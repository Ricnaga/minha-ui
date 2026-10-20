import type { PlayFunction } from 'storybook/internal/types';
import { within, expect, waitFor, userEvent } from 'storybook/test';

export const mockResponse = { message: 'Hello Storybook!' };

export const mockFetch = async () =>
  new Promise<Response>((resolve) => {
    setTimeout(() => {
      resolve(
        new Response(JSON.stringify(mockResponse), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      );
    }, 120);
  });

export const testDefaultFetch: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const loading = canvas.getByTestId('loading-value');
  const data = canvas.getByTestId('data-value');
  const error = canvas.getByTestId('error-value');
  const refetchButton = canvas.getByRole('button', { name: /refetch/i });

  // O mock é instalado pela story antes do mount, então o fetch inicial resolve
  await waitFor(() => {
    expect(loading).toHaveTextContent('false');
    expect(data).toHaveTextContent(JSON.stringify(mockResponse));
    expect(error).toHaveTextContent('null');
  });

  // --- Testa refetch ---
  await user.click(refetchButton);

  await waitFor(() => {
    expect(loading).toHaveTextContent('false');
    expect(data).toHaveTextContent(JSON.stringify(mockResponse));
    expect(error).toHaveTextContent('null');
  });
};
