import { chartPie } from '@/theme';

import type { UsePieSlicesProps } from '../../chart-pie.types';

export function usePieSlices({ slices, layout }: UsePieSlicesProps) {
  const { slice } = chartPie();

  const items = slices.map((item, index) => ({
    ...item,
    class: slice({ color: item.color }),
    style: {
      strokeDasharray: `${item.percent} ${100 - item.percent}`,
      strokeDashoffset: -item.offset,
      animationDelay: `${Math.min(index * 60, 300)}ms`,
    },
  }));

  const transform = `rotate(-90 ${layout.center} ${layout.center})`;

  return { items, layout, transform };
}
