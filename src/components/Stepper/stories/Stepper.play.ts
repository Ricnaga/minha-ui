import type { PlayFunction } from "storybook/internal/csf";
import { within, expect } from "storybook/test";

export const testDefaultStepper: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const stepper = canvas.getByTestId("stepper");

  await expect(stepper).toBeInTheDocument();
};

export const testHorizontalStepper: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const stepper = canvas.getByTestId("stepper");

  await expect(stepper).toHaveAttribute("data-orientation", "horizontal");
};

export const testVerticalStepper: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const stepper = canvas.getByTestId("stepper");

  await expect(stepper).toHaveAttribute("data-orientation", "vertical");
};