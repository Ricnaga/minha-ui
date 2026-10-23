import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import ScrollArea from '../ScrollArea.svelte';

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

const content = createRawSnippet(() => ({
  render: () => '<span>Lista de itens</span>',
}));

describe('ScrollArea', () => {
  describe('Rendering', () => {
    it('should render the content', () => {
      render(ScrollArea, { props: { children: content } });

      expect(screen.getByText('Lista de itens')).toBeInTheDocument();
    });

    it('should be a focusable region by default', () => {
      render(ScrollArea);

      const scrollArea = screen.getByRole('region');

      expect(scrollArea).toHaveAttribute('tabindex', '0');
    });

    it('should forward native attributes', () => {
      render(ScrollArea, {
        props: { 'aria-label': 'Lista', 'data-testid': 'scroll' },
      });

      expect(screen.getByRole('region', { name: 'Lista' })).toBeInTheDocument();
      expect(screen.getByTestId('scroll')).toBeInTheDocument();
    });

    it('should allow overriding the default role and tabindex', () => {
      render(ScrollArea, {
        props: { role: 'group', tabindex: -1 },
      });

      const scrollArea = screen.getByRole('group');

      expect(scrollArea).toHaveAttribute('tabindex', '-1');
    });

    it('should merge the consumer class', () => {
      render(ScrollArea, { props: { class: 'min-h-32' } });

      const scrollArea = screen.getByRole('region');

      expect(scrollArea).toHaveClass('min-h-32');
      expect(scrollArea).toHaveClass('overflow-y-auto');
    });
  });

  describe('Variants', () => {
    it.each(orientations)(
      'should apply the %s orientation classes',
      (orientation, expectedClass) => {
        render(ScrollArea, { props: { orientation } });

        expect(screen.getByRole('region')).toHaveClass(expectedClass);
      },
    );

    it.each(sizes)(
      'should apply the %s size classes',
      (size, expectedClass) => {
        render(ScrollArea, { props: { size } });

        expect(screen.getByRole('region')).toHaveClass(
          `[&::-webkit-scrollbar]:${expectedClass}`,
        );
      },
    );

    it('should reveal the scrollbar thumb on hover', () => {
      render(ScrollArea);

      expect(screen.getByRole('region')).toHaveClass(
        'hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600',
      );
    });
  });
});
