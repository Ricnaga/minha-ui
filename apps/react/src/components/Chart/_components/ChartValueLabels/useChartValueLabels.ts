import { chart } from '@/theme';
import { useChart } from '../../useChart';

export function useChartValueLabels() {
  const { points, valueFormatter } = useChart();
  const { valueLabel } = chart();

  return {
    points,
    valueFormatter,
    labelProps: { className: valueLabel() },
  };
}
