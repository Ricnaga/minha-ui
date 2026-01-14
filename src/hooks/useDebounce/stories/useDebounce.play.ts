import type { PlayFunction } from 'storybook/internal/csf';
import { within, userEvent, expect, waitFor } from 'storybook/test';

export const testDefaultDebounce: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  // 1️⃣ Pegar input e span debounced
  const input = canvas.getByPlaceholderText(/digite algo/i);
  const debouncedSpan = canvas.getByTestId('debounced-value');

  // 2️⃣ Valor inicial do debounced
  expect(debouncedSpan).toHaveTextContent('—');

  // 3️⃣ Digitar "hello"
  await user.type(input, 'hello');

  // 4️⃣ Valor debounced ainda NÃO mudou
  expect(debouncedSpan).toHaveTextContent('—');

  // 5️⃣ Espera o debounce de 800ms
  await waitFor(
    () => {
      expect(debouncedSpan).toHaveTextContent('hello');
    },
    { timeout: 1000 } // sempre > debounce
  );

  // 6️⃣ Opcional: digitar mais e verificar debounce reseta
  await user.type(input, ' world');

  // Valor debounced ainda não mudou imediatamente
  expect(debouncedSpan).toHaveTextContent('hello');

  // Espera debounce novamente
  await waitFor(
    () => {
      expect(debouncedSpan).toHaveTextContent('hello world');
    },
    { timeout: 1000 }
  );
};
