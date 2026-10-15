import type { PieSlicesProps } from './pie-slices.types';
import { usePieSlices } from './usePieSlices';

export function PieSlices({ slices, layout }: PieSlicesProps) {
  const { items, transform } = usePieSlices({ slices, layout });

  return (
    <g data-part="slices" transform={transform}>
      {items.map((item) => (
        <circle
          key={item.label}
          cx={layout.center}
          cy={layout.center}
          r={layout.radius}
          strokeWidth={layout.strokeWidth}
          pathLength={100}
          style={item.style}
          className={item.className}
        />
      ))}
    </g>
  );
}
