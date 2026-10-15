import { render, screen } from '@testing-library/react';
import { ChartPie } from '..';
import type { ChartPieDataPoint } from '..';

const data: ChartPieDataPoint[] = [
  { label: 'Chrome', value: 60 },
  { label: 'Safari', value: 40 },
];

describe('ChartPie', () => {
  describe('Accessibility', () => {
    it('should expose a default accessible name', () => {
      render(<ChartPie data={data} />);
      expect(
        screen.getByRole('img', { name: 'Gráfico de pizza' }),
      ).toBeInTheDocument();
    });

    it('should expose a custom accessible name', () => {
      render(<ChartPie data={data} aria-label="Navegadores" />);
      expect(
        screen.getByRole('img', { name: 'Navegadores' }),
      ).toBeInTheDocument();
    });

    it('should render an accessible data table mirroring the series', () => {
      const { container } = render(
        <ChartPie data={data} aria-label="Navegadores" />,
      );

      expect(container.querySelector('caption')).toHaveTextContent(
        'Navegadores',
      );
      expect(screen.getAllByRole('columnheader')).toHaveLength(2);
      expect(screen.getAllByRole('rowheader')).toHaveLength(data.length);
      expect(screen.getAllByRole('row')).toHaveLength(data.length + 1);
    });
  });

  describe('Slices', () => {
    it('should render one slice per data point', () => {
      const { container } = render(<ChartPie data={data} />);
      expect(
        container.querySelectorAll('[data-part="slices"] circle'),
      ).toHaveLength(data.length);
    });

    it('should normalize the circumference with pathLength', () => {
      const { container } = render(<ChartPie data={data} />);
      const slice = container.querySelector('[data-part="slices"] circle');
      expect(slice).toHaveAttribute('pathLength', '100');
    });

    it('should map each value to its percentage of the circumference', () => {
      const { container } = render(<ChartPie data={data} />);
      const [first, second] = container.querySelectorAll(
        '[data-part="slices"] circle',
      );

      expect(first).toHaveStyle('stroke-dasharray: 60 40');
      expect(first).toHaveStyle('stroke-dashoffset: 0');
      expect(second).toHaveStyle('stroke-dasharray: 40 60');
      expect(second).toHaveStyle('stroke-dashoffset: -60');
    });

    it('should start the slices at the top of the circle', () => {
      const { container } = render(<ChartPie data={data} />);
      expect(container.querySelector('[data-part="slices"]')).toHaveAttribute(
        'transform',
        'rotate(-90 100 100)',
      );
    });
  });

  describe('Colors', () => {
    it('should cycle the default palette by index', () => {
      const many: ChartPieDataPoint[] = Array.from({ length: 7 }, (_, i) => ({
        label: `Item ${i}`,
        value: 10,
      }));
      const { container } = render(<ChartPie data={many} />);
      const slices = container.querySelectorAll('[data-part="slices"] circle');

      expect(slices[0]).toHaveClass('stroke-sky-500');
      expect(slices[4]).toHaveClass('stroke-red-500');
      expect(slices[5]).toHaveClass('stroke-sky-500');
      expect(slices[6]).toHaveClass('stroke-emerald-500');
    });

    it('should let a data point override its color', () => {
      const { container } = render(
        <ChartPie
          data={[
            { label: 'A', value: 50 },
            { label: 'B', value: 50, color: 'violet' },
          ]}
        />,
      );
      const slices = container.querySelectorAll('[data-part="slices"] circle');
      expect(slices[1]).toHaveClass('stroke-violet-500');
    });
  });

  describe('Legend', () => {
    it('should render one legend item per slice', () => {
      const { container } = render(<ChartPie data={data} />);
      const legend = container.querySelector('[data-part="legend"]');

      expect(screen.getAllByRole('listitem')).toHaveLength(data.length);
      expect(legend).toHaveTextContent('Chrome');
      expect(legend).toHaveTextContent('Safari');
    });

    it('should apply the formatted value in the legend', () => {
      render(
        <ChartPie data={data} valueFormatter={(value) => `${value} milhões`} />,
      );
      expect(screen.getAllByText('60 milhões').length).toBeGreaterThan(0);
    });
  });

  describe('Rendering', () => {
    it('should render the root as a figure and merge a custom className', () => {
      const { container } = render(<ChartPie data={data} className="mt-4" />);
      expect(container.firstChild?.nodeName).toBe('FIGURE');
      expect(container.firstChild).toHaveClass('mt-4');
    });

    it('should render correctly', () => {
      const { container } = render(
        <ChartPie data={data} aria-label="Navegadores" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should not render slices for an empty series', () => {
      const { container } = render(<ChartPie data={[]} />);
      expect(
        container.querySelectorAll('[data-part="slices"] circle'),
      ).toHaveLength(0);
    });
  });
});
