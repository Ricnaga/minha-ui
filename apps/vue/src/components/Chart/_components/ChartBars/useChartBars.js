import { chart } from '@/theme';
import { useChart } from '../../useChart';
export function useChartBars() {
    const { points, innerHeight, color } = useChart();
    const { bar } = chart();
    return {
        points,
        innerHeight,
        barProps: { class: bar({ color }) },
    };
}
