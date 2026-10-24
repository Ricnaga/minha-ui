import { chart } from '@/theme';
import { useChart } from '../../useChart';
export function useChartAxis(orientation) {
    const { ticks, yScale, points, innerWidth, innerHeight } = useChart();
    const { axisLine, axisLabel } = chart();
    if (orientation === 'y') {
        return {
            orientation,
            lines: ticks.map((tick) => ({ tick, y: yScale(tick) })),
            labels: ticks.map((tick) => ({ tick, y: yScale(tick) })),
            axisLineProps: { class: axisLine() },
            axisLabelProps: { class: axisLabel() },
            transform: 'translate(0,0)',
            innerWidth,
            innerHeight,
        };
    }
    return {
        orientation,
        lines: points.map((point) => ({ x: point.x })),
        labels: points.map((point) => ({ x: point.x, label: point.label })),
        axisLineProps: { class: axisLine() },
        axisLabelProps: { class: axisLabel() },
        transform: `translate(0,${innerHeight})`,
        innerWidth,
        innerHeight,
    };
}
