import { chart } from '@/theme';

import { useChart } from '../../useChart';

export function useChartValueLabels() {
  const { points, valueFormatter, type } = useChart();
  const { valueLabel } = chart();
  const labelProps = { class: valueLabel() };

  const labels = points.map((point: any) => ({
    ...point,
    text: valueFormatter(point.value),
    x: type === 'bar' ? point.barX + point.barWidth / 2 : point.x,
    y: point.y - 6,
  }));

  return { labels, labelProps };
}
