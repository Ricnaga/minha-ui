import { chart } from '@/theme';
import { useChart } from '../../useChart';

export function useChartGrid() {
  const { ticks, yScale, innerWidth } = useChart();
  const { grid } = chart();

  const lines = ticks.map((tick) => ({ tick, y: yScale(tick) }));

  return {
    lines,
    innerWidth,
    lineProps: { className: grid() },
  };
}
