import { chart } from '@/theme';
import { useChart } from '../../useChart';
import type { UseChartAxisProps } from './chart-axis.types';

export function useChartAxis({ orientation }: UseChartAxisProps) {
  const { ticks, yScale, points, innerWidth, innerHeight } = useChart();
  const { axisLine, axisLabel } = chart();

  const yTicks = ticks.map((tick) => ({ tick, y: yScale(tick) }));

  return {
    orientation,
    yTicks,
    points,
    innerWidth,
    innerHeight,
    lineProps: { className: axisLine() },
    labelProps: { className: axisLabel() },
  };
}
