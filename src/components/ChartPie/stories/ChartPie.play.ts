import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultChartPie: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const chart = canvas.getByRole('img', { name: 'Navegadores' });
  await expect(chart).toBeInTheDocument();

  const slices = canvasElement.querySelectorAll('[data-part="slices"] circle');
  await expect(slices).toHaveLength(5);

  await expect(canvas.getAllByRole('listitem')).toHaveLength(5);

  await expect(slices[0] ? getComputedStyle(slices[0]).animationName : '').toBe(
    'chart-pie-fill',
  );
};

export const testCustomColors: PlayFunction = async ({ canvasElement }) => {
  const slices = canvasElement.querySelectorAll('[data-part="slices"] circle');
  await expect(slices[0]).toHaveClass('stroke-sky-500');
  await expect(slices[1]).toHaveClass('stroke-sky-500');
  await expect(slices[2]).toHaveClass('stroke-emerald-500');
};
