import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, waitFor, within } from 'storybook/test';

export const testDefaultTabs: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Verifica se a Tab 1 está inicialmente visível (aguarda a animação de entrada)
  const tab1Content = await canvas.findByText('Conteúdo da Tab 1');
  await waitFor(() => expect(tab1Content).toBeVisible());

  // Clica na Tab 2
  const tab2Trigger = canvas.getByRole('tab', { name: 'Tab 2' });
  await userEvent.click(tab2Trigger);

  // Verifica se a Tab 2 está visível e a Tab 1 ficou oculta
  const tab2Content = await canvas.findByText('Conteúdo da Tab 2');
  await waitFor(() => expect(tab2Content).toBeVisible());
  await waitFor(() => expect(tab1Content).not.toBeVisible());

  // Clica na Tab 3
  const tab3Trigger = canvas.getByRole('tab', { name: 'Tab 3' });
  await userEvent.click(tab3Trigger);

  // Verifica se a Tab 3 está visível e a Tab 2 ficou oculta
  const tab3Content = await canvas.findByText('Conteúdo da Tab 3');
  await waitFor(() => expect(tab3Content).toBeVisible());
  await waitFor(() => expect(tab2Content).not.toBeVisible());
};
