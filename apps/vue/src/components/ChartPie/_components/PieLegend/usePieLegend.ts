import { chartPie } from '@/theme';

import type { UsePieLegendProps } from '../../chart-pie.types';

export function usePieLegend({ slices, valueFormatter }: UsePieLegendProps) {
  const { legend, legendItem, swatch, legendLabel, legendValue } = chartPie();

  const items = slices.map((slice) => ({
    ...slice,
    formattedValue: valueFormatter(slice.value),
    swatchClass: swatch({ color: slice.color }),
  }));

  return {
    items,
    legendProps: { class: legend() },
    itemProps: { class: legendItem() },
    labelProps: { class: legendLabel() },
    valueProps: { class: legendValue() },
  };
}
