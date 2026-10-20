import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultDnd: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const items = canvas.getAllByRole('generic', { name: /item/i });
  expect(items.length).toBeGreaterThanOrEqual(4);
};

export const testMultipleLists: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const headings = canvas.getAllByRole('heading');
  expect(headings.length).toBeGreaterThanOrEqual(2);
};
