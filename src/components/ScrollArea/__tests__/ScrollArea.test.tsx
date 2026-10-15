import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { ScrollArea } from '..';

function renderScrollArea(children: ReactNode = 'Conteúdo rolável') {
  return render(<ScrollArea>{children}</ScrollArea>);
}

const orientations = [
  ['vertical', 'overflow-y-auto'],
  ['horizontal', 'overflow-x-auto'],
  ['both', 'overflow-auto'],
] as const;

const sizes = [
  ['sm', 'w-1.5'],
  ['md', 'w-2'],
  ['lg', 'w-3'],
] as const;

describe('ScrollArea', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = renderScrollArea();
      expect(container).toMatchSnapshot();
    });

    it('should render children', () => {
      renderScrollArea('Lista de itens');
      expect(screen.getByText('Lista de itens')).toBeInTheDocument();
    });

    it('should be a focusable region by default', () => {
      renderScrollArea();
      const scrollArea = screen.getByRole('region');

      expect(scrollArea).toHaveAttribute('tabindex', '0');
    });

    it('should forward native props', () => {
      render(
        <ScrollArea aria-label="Lista" data-testid="scroll">
          Conteúdo
        </ScrollArea>,
      );

      expect(screen.getByRole('region', { name: 'Lista' })).toBeInTheDocument();
      expect(screen.getByTestId('scroll')).toBeInTheDocument();
    });

    it('should allow overriding the default role and tabIndex', () => {
      render(
        <ScrollArea role="group" tabIndex={-1}>
          Conteúdo
        </ScrollArea>,
      );

      const scrollArea = screen.getByRole('group');

      expect(scrollArea).toHaveAttribute('tabindex', '-1');
    });

    it('should merge the consumer className', () => {
      const { container } = render(
        <ScrollArea className="min-h-32">Conteúdo</ScrollArea>,
      );

      const scrollArea = container.firstElementChild;

      expect(scrollArea).toHaveClass('min-h-32');
      expect(scrollArea).toHaveClass('overflow-y-auto');
    });
  });

  describe('Variants', () => {
    it.each(orientations)(
      'should apply the %s orientation classes',
      (orientation, expectedClass) => {
        const { container } = render(
          <ScrollArea orientation={orientation}>Conteúdo</ScrollArea>,
        );

        expect(container.firstElementChild).toHaveClass(expectedClass);
      },
    );

    it.each(sizes)(
      'should apply the %s size classes',
      (size, expectedClass) => {
        const { container } = render(
          <ScrollArea size={size}>Conteúdo</ScrollArea>,
        );

        const scrollArea = container.firstElementChild;

        expect(scrollArea?.className).toContain(
          `[&::-webkit-scrollbar]:${expectedClass}`,
        );
      },
    );

    it('should reveal the scrollbar thumb on hover', () => {
      const { container } = renderScrollArea();
      const scrollArea = container.firstElementChild;

      expect(scrollArea?.className).toContain(
        'hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600',
      );
    });
  });
});
