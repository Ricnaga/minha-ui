import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import Badge from '../Badge.svelte';

describe('Badge', () => {
  describe('Rendering', () => {
    it('should render badge with value', () => {
      render(Badge, { props: { value: 5 } });

      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('should not render badge when value is undefined', () => {
      const { container } = render(Badge);

      expect(container.querySelector('.absolute')).toBeNull();
    });

    it('should not render badge when value is zero', () => {
      const { container } = render(Badge, { props: { value: 0 } });

      expect(container.querySelector('.absolute')).toBeNull();
    });
  });

  describe('Variants', () => {
    it('should apply the color, size and position classes', () => {
      const { container } = render(Badge, {
        props: {
          value: 1,
          color: 'error',
          size: 'large',
          position: 'bottomLeft',
        },
      });

      const badge = container.querySelector('.absolute');

      expect(badge).toHaveClass('bg-red-600');
      expect(badge).toHaveClass('size-6');
      expect(badge).toHaveClass('bottom-0');
    });

    it('should use the default variants', () => {
      const { container } = render(Badge, { props: { value: 1 } });

      const badge = container.querySelector('.absolute');

      expect(badge).toHaveClass('bg-sky-600');
      expect(badge).toHaveClass('size-4');
      expect(badge).toHaveClass('top-0');
    });

    it('should merge the class with the variant classes', () => {
      const { container } = render(Badge, {
        props: { value: 1, color: 'primary', class: 'bg-red-600' },
      });

      const badge = container.querySelector('.absolute');

      expect(badge).toHaveClass('bg-red-600');
      expect(badge).not.toHaveClass('bg-sky-600');
    });
  });

  describe('Native attributes', () => {
    it('should forward native attributes to the badge element', () => {
      render(Badge, {
        props: {
          value: 2,
          'data-testid': 'badge',
          'aria-label': 'Itens no carrinho',
        },
      });

      const badge = screen.getByTestId('badge');

      expect(badge).toHaveAttribute('aria-label', 'Itens no carrinho');
    });
  });
});
