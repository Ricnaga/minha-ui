import { chart } from '@/theme';
import { useChart } from '../../useChart';
export function useChartLine() {
    const { points, color } = useChart();
    const { line, point: pointSlot } = chart();
    const coordinates = points.map((point) => `${point.x},${point.y}`).join(' ');
    return {
        points,
        coordinates,
        lineProps: { class: line({ color }) },
        pointProps: { class: pointSlot({ color }) },
    };
}
