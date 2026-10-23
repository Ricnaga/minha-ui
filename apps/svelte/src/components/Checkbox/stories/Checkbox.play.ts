import type { PlayFunction } from 'storybook/internal/csf';
import { expect, userEvent, within } from 'storybook/test';

export const testDefaultCheckbox: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;

  await expect(checkbox).toBeInTheDocument();
  await expect(checkbox).not.toBeChecked();

  await userEvent.click(checkbox);
  await expect(checkbox).toBeChecked();

  await userEvent.click(checkbox);
  await expect(checkbox).not.toBeChecked();

  if (checkbox.hasAttribute('disabled')) {
    await expect(checkbox).toBeDisabled();
  }

  if (checkbox.indeterminate) {
    await expect(checkbox.indeterminate).toBe(true);
  }
};
