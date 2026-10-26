import type { PlayFunction } from 'storybook/internal/csf';
import { within, userEvent, waitFor, expect } from 'storybook/test';

export const testDefaultLocalStorage: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const createButton = await canvas.findByRole('button', { name: /create/i });
  const removeButton = await canvas.findByRole('button', { name: /remove/i });
  const clearButton = await canvas.findByRole('button', { name: /clear/i });

  const valueContainer = canvas.getByText(/Value:/i).closest('p');

  await userEvent.click(createButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent('created value');
  });

  await userEvent.click(removeButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent('initial value');
  });

  await userEvent.click(createButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent('created value');
  });

  await userEvent.click(clearButton);
  await waitFor(() => {
    expect(valueContainer).toHaveTextContent('initial value');
  });
};
