import type { PlayFunction } from "storybook/internal/types";
import { within, expect, waitFor, userEvent } from "storybook/test";

export const testDefaultFetch: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // --- Mock fetch com delay para simular loading ---
  const originalFetch = window.fetch;
  window.fetch = async () =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            new Response(JSON.stringify({ message: "Hello Storybook!" }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            })
          ),
        50 // 50ms de delay
      )
    );

  const loading = canvas.getByTestId("loading-value");
  const data = canvas.getByTestId("data-value");
  const error = canvas.getByTestId("error-value");
  const refetchButton = canvas.getByRole("button", { name: /refetch/i });

  // --- Verifica loading durante o fetch ---
  expect(loading).toHaveTextContent("true");
  expect(data).toHaveTextContent("null");
  expect(error).toHaveTextContent("null");

  // --- Espera o fetch finalizar e atualizar os elementos ---
  await waitFor(() => {
    expect(loading).toHaveTextContent("false");
    expect(data).toHaveTextContent(
      JSON.stringify({ message: "Hello Storybook!" })
    );
    expect(error).toHaveTextContent("null");
  });

  // --- Testa refetch ---
  await userEvent.click(refetchButton);

  // Loading volta a true momentaneamente
  expect(loading).toHaveTextContent("true");

  await waitFor(() => {
    expect(loading).toHaveTextContent("false");
    expect(data).toHaveTextContent(
      JSON.stringify({ message: "Hello Storybook!" })
    );
    expect(error).toHaveTextContent("null");
  });

  // --- Restaura fetch original ---
  window.fetch = originalFetch;
};
