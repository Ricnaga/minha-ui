import { chartPie } from '@/theme';
import type { UsePieLegendProps } from './pie-legend.types';

export function usePieLegend({ slices, valueFormatter }: UsePieLegendProps) {
  const { legend, legendItem, swatch, legendLabel, legendValue } = chartPie();

  const items = slices.map((slice) => ({
    ...slice,
    formattedValue: valueFormatter(slice.value),
    swatchClassName: swatch({ color: slice.color }),
  }));

  return {
    items,
    legendProps: { className: legend() },
    itemProps: { className: legendItem() },
    labelProps: { className: legendLabel() },
    valueProps: { className: legendValue() },
  };
}
