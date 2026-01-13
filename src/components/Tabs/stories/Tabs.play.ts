import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, within } from "storybook/test";

export const testDefaultTabs: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Verifica se a Tab 1 está inicialmente visível
  const tab1Content = await canvas.findByText("Conteúdo da Tab 1");
  expect(tab1Content).toBeVisible();

  // Clica na Tab 2
  const tab2Trigger = await canvas.findByText("Tab 2");
  await userEvent.click(tab2Trigger);

  // Verifica se o conteúdo da Tab 2 aparece
  const tab2Content = await canvas.findByText("Conteúdo da Tab 2");
  expect(tab2Content).toBeVisible();

  // Verifica se o conteúdo da Tab 1 desapareceu
  const tab1ContentAfterClick = canvas.queryByText("Conteúdo da Tab 1");
  expect(tab1ContentAfterClick).not.toBeVisible();

  // Clica na Tab 3
  const tab3Trigger = await canvas.findByText("Tab 3");
  await userEvent.click(tab3Trigger);

  // Verifica se o conteúdo da Tab 3 aparece
  const tab3Content = await canvas.findByText("Conteúdo da Tab 3");
  expect(tab3Content).toBeVisible();

  // Verifica se o conteúdo da Tab 2 desapareceu
  const tab2ContentAfterClick = canvas.queryByText("Conteúdo da Tab 2");
  expect(tab2ContentAfterClick).not.toBeVisible();
};