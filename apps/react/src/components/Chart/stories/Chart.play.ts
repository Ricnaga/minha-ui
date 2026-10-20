import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultChart: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const chart = canvas.getByRole('img', { name: 'Vendas por mês' });
  await expect(chart).toBeInTheDocument();

  const bars = canvasElement.querySelectorAll('[data-part="bars"] rect');
  await expect(bars).toHaveLength(5);

  const bar = canvasElement.querySelector('[data-part="bars"] rect');
  await expect(bar ? getComputedStyle(bar).animationName : '').toBe(
    'chart-bar-grow',
  );
};

export const testLineChart: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const chart = canvas.getByRole('img', { name: 'Vendas por mês' });
  await expect(chart).toBeInTheDocument();

  const line = canvasElement.querySelector('[data-part="line"] polyline');
  await expect(line).toBeInTheDocument();
  await expect(line ? getComputedStyle(line).animationName : '').toBe(
    'chart-line-draw',
  );

  const points = canvasElement.querySelectorAll('[data-part="line"] circle');
  await expect(points).toHaveLength(5);
  await expect(points[0] ? getComputedStyle(points[0]).animationName : '').toBe(
    'chart-point-enter',
  );
};
