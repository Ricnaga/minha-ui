import { render, screen } from '@testing-library/react';
import { Chart } from '..';
import type { ChartDataPoint } from '..';

const data: ChartDataPoint[] = [
  { label: 'Jan', value: 40 },
  { label: 'Fev', value: 65 },
  { label: 'Mar', value: 30 },
];

describe('Chart', () => {
  describe('Accessibility', () => {
    it('should expose a default accessible name', () => {
      render(<Chart type="bar" data={data} />);
      expect(screen.getByRole('img', { name: 'Gráfico' })).toBeInTheDocument();
    });

    it('should expose a custom accessible name', () => {
      render(<Chart type="bar" data={data} aria-label="Vendas por mês" />);
      expect(
        screen.getByRole('img', { name: 'Vendas por mês' }),
      ).toBeInTheDocument();
    });

    it('should render an accessible data table mirroring the series', () => {
      const { container } = render(
        <Chart type="bar" data={data} aria-label="Vendas por mês" />,
      );

      expect(container.querySelector('caption')).toHaveTextContent(
        'Vendas por mês',
      );
      expect(screen.getAllByRole('columnheader')).toHaveLength(2);
      expect(screen.getAllByRole('rowheader')).toHaveLength(data.length);
      expect(screen.getAllByRole('row')).toHaveLength(data.length + 1);
    });
  });

  describe('Bars', () => {
    it('should render one bar per data point by default', () => {
      const { container } = render(<Chart type="bar" data={data} />);
      const bars = container.querySelectorAll('[data-part="bars"] rect');
      expect(bars).toHaveLength(data.length);
    });

    it('should apply the default color class on the bars', () => {
      const { container } = render(<Chart type="bar" data={data} />);
      const bar = container.querySelector('[data-part="bars"] rect');
      expect(bar).toHaveClass('fill-sky-500');
    });

    it('should apply a custom color class on the bars', () => {
      const { container } = render(
        <Chart type="bar" data={data} color="emerald" />,
      );
      const bar = container.querySelector('[data-part="bars"] rect');
      expect(bar).toHaveClass('fill-emerald-500');
    });

    it('should not render bars for an empty series', () => {
      const { container } = render(<Chart type="bar" data={[]} />);
      expect(
        container.querySelectorAll('[data-part="bars"] rect'),
      ).toHaveLength(0);
    });
  });

  describe('Line', () => {
    it('should render a polyline and one point per data point', () => {
      const { container } = render(<Chart type="line" data={data} />);

      const line = container.querySelector('[data-part="line"] polyline');
      expect(line).toBeInTheDocument();
      expect(line).toHaveClass('stroke-sky-500');
      expect(
        container.querySelectorAll('[data-part="line"] circle'),
      ).toHaveLength(data.length);
    });
  });

  describe('Axis', () => {
    it('should render both axes by default', () => {
      const { container } = render(<Chart type="bar" data={data} />);

      expect(
        container.querySelector('[data-part="axis-x"]'),
      ).toBeInTheDocument();
      expect(
        container.querySelector('[data-part="axis-y"]'),
      ).toBeInTheDocument();
    });

    it('should hide the axes when showAxis is false', () => {
      const { container } = render(
        <Chart type="bar" data={data} showAxis={false} />,
      );

      expect(
        container.querySelector('[data-part="axis-x"]'),
      ).not.toBeInTheDocument();
      expect(
        container.querySelector('[data-part="axis-y"]'),
      ).not.toBeInTheDocument();
    });

    it('should render the category labels on the x axis', () => {
      const { container } = render(<Chart type="bar" data={data} />);
      const axisX = container.querySelector('[data-part="axis-x"]');
      expect(axisX).toHaveTextContent('Jan');
      expect(axisX).toHaveTextContent('Mar');
    });
  });

  describe('Grid', () => {
    it('should not render the grid by default', () => {
      const { container } = render(<Chart type="bar" data={data} />);
      expect(
        container.querySelector('[data-part="grid"]'),
      ).not.toBeInTheDocument();
    });

    it('should render grid lines when showGrid is true', () => {
      const { container } = render(
        <Chart type="bar" data={data} showGrid={true} />,
      );
      const lines = container.querySelectorAll('[data-part="grid"] line');
      expect(lines.length).toBeGreaterThan(0);
    });
  });

  describe('Value labels', () => {
    it('should not render value labels by default', () => {
      const { container } = render(<Chart type="bar" data={data} />);
      expect(
        container.querySelector('[data-part="value-labels"]'),
      ).not.toBeInTheDocument();
    });

    it('should render formatted values when showValueLabels is true', () => {
      const { container } = render(
        <Chart
          type="bar"
          data={data}
          showValueLabels={true}
          valueFormatter={(value) => `${value} un`}
        />,
      );

      const group = container.querySelector('[data-part="value-labels"]');
      expect(group).toBeInTheDocument();
      expect(group?.querySelectorAll('text')).toHaveLength(data.length);
      expect(group?.textContent).toContain('40 un');
    });
  });

  describe('Rendering', () => {
    it('should render the root as a figure and merge a custom className', () => {
      const { container } = render(
        <Chart type="bar" data={data} className="mt-4" />,
      );
      expect(container.firstChild?.nodeName).toBe('FIGURE');
      expect(container.firstChild).toHaveClass('w-full', 'mt-4');
    });

    it('should render correctly', () => {
      const { container } = render(
        <Chart type="bar" data={data} showGrid={true} showValueLabels={true} />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
