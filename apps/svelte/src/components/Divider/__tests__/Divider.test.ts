import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import Divider from '../Divider.svelte';

describe('Divider', () => {
  describe('Rendering', () => {
    it('should render a separator with the horizontal orientation', () => {
      render(Divider);

      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('should render the vertical orientation', () => {
      render(Divider, { props: { orientation: 'vertical' } });

      expect(screen.getByRole('separator')).toHaveAttribute(
        'aria-orientation',
        'vertical',
      );
    });
  });

  describe('Variants', () => {
    it('should apply the horizontal classes', () => {
      render(Divider);

      expect(screen.getByRole('separator')).toHaveClass('h-px', 'w-full');
    });

    it('should apply the vertical classes', () => {
      render(Divider, { props: { orientation: 'vertical' } });

      expect(screen.getByRole('separator')).toHaveClass('w-px', 'h-full');
    });

    it('should apply the inset classes', () => {
      render(Divider, { props: { inset: 'center' } });

      expect(screen.getByRole('separator')).toHaveClass('mx-4');
    });

    it('should merge the class with the variant classes', () => {
      render(Divider, { props: { class: 'w-1/2' } });

      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('w-1/2');
      expect(divider).not.toHaveClass('w-full');
    });
  });

  describe('Native attributes', () => {
    it('should keep the separator semantics over consumer attributes', () => {
      render(Divider, {
        props: { role: 'presentation', 'aria-orientation': 'vertical' },
      });

      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('should forward native attributes to the separator', () => {
      render(Divider, {
        props: { 'data-testid': 'divider', id: 'section-divider' },
      });

      const divider = screen.getByTestId('divider');

      expect(divider).toHaveAttribute('id', 'section-divider');
    });
  });
});
