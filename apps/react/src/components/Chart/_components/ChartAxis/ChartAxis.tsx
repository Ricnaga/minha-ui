import type { ChartAxisProps } from './chart-axis.types';
import { useChartAxis } from './useChartAxis';

export function ChartAxis({ orientation }: ChartAxisProps) {
  const { yTicks, points, innerWidth, innerHeight, lineProps, labelProps } =
    useChartAxis({ orientation });

  if (orientation === 'y') {
    return (
      <g data-part="axis-y">
        <line x1={0} y1={0} x2={0} y2={innerHeight} {...lineProps} />
        {yTicks.map(({ tick, y }) => (
          <text
            key={tick}
            x={-12}
            y={y}
            textAnchor="end"
            dominantBaseline="middle"
            {...labelProps}
          >
            {tick}
          </text>
        ))}
      </g>
    );
  }

  return (
    <g data-part="axis-x">
      <line
        x1={0}
        y1={innerHeight}
        x2={innerWidth}
        y2={innerHeight}
        {...lineProps}
      />
      {points.map((point) => (
        <text
          key={point.label}
          x={point.x}
          y={innerHeight + 20}
          textAnchor="middle"
          {...labelProps}
        >
          {point.label}
        </text>
      ))}
    </g>
  );
}
