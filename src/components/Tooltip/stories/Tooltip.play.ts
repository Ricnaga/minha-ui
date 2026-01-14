import type { PlayFunction } from "storybook/internal/csf";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultTooltip: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole("button");

  // Seleciona tooltip via portal
  let tooltip = document.body.querySelector('[role="tooltip"]');

  // Inicialmente escondido
  expect(tooltip).toHaveAttribute("aria-hidden", "true");

  // Hover → tooltip aparece
  await userEvent.hover(trigger);
  await waitFor(() => {
    tooltip = document.body.querySelector('[role="tooltip"]');
    expect(tooltip).toHaveAttribute("aria-hidden", "false");
  });

  // Mouse leave → tooltip desaparece
  await userEvent.unhover(trigger);
  await waitFor(() => {
    tooltip = document.body.querySelector('[role="tooltip"]');
    expect(tooltip).toHaveAttribute("aria-hidden", "true");
  });

  // Focus → tooltip aparece
  trigger.focus();
  await waitFor(() => {
    tooltip = document.body.querySelector('[role="tooltip"]');
    expect(tooltip).toHaveAttribute("aria-hidden", "false");
  });

  // Blur → tooltip desaparece
  trigger.blur();
  await waitFor(() => {
    tooltip = document.body.querySelector('[role="tooltip"]');
    expect(tooltip).toHaveAttribute("aria-hidden", "true");
  });
};
