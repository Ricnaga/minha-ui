import type { PieLegendProps } from './pie-legend.types';
import { usePieLegend } from './usePieLegend';

export function PieLegend({ slices, valueFormatter }: PieLegendProps) {
  const { items, legendProps, itemProps, labelProps, valueProps } =
    usePieLegend({ slices, valueFormatter });

  return (
    <ul data-part="legend" {...legendProps}>
      {items.map((item) => (
        <li key={item.label} {...itemProps}>
          <span aria-hidden="true" className={item.swatchClassName} />
          <span {...labelProps}>{item.label}</span>
          <span {...valueProps}>{item.formattedValue}</span>
        </li>
      ))}
    </ul>
  );
}
