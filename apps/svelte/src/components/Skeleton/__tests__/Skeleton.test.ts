import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import Skeleton from '../Skeleton.svelte';

describe('Skeleton', () => {
  describe('Rendering', () => {
    it('should render a status region indicating loading', () => {
      render(Skeleton);

      const skeleton = screen.getByRole('status');

      expect(skeleton).toHaveAttribute('aria-busy', 'true');
      expect(skeleton).toHaveClass('animate-pulse');
    });
  });

  describe('Variants', () => {
    it('should apply the rounded shape by default', () => {
      render(Skeleton);

      const skeleton = screen.getByRole('status');

      expect(skeleton).toHaveClass('rounded-md');
      expect(skeleton).not.toHaveClass('rounded-none');
    });

    it('should apply the square shape', () => {
      render(Skeleton, { props: { shape: 'square' } });

      expect(screen.getByRole('status')).toHaveClass('rounded-none');
    });

    it('should apply the circle shape', () => {
      render(Skeleton, { props: { shape: 'circle' } });

      expect(screen.getByRole('status')).toHaveClass('rounded-full');
    });

    it('should merge the class with the variant classes', () => {
      render(Skeleton, { props: { class: 'h-14 w-32' } });

      expect(screen.getByRole('status')).toHaveClass(
        'h-14',
        'w-32',
        'animate-pulse',
      );
    });
  });

  describe('Native attributes', () => {
    it('should forward native attributes to the skeleton', () => {
      render(Skeleton, {
        props: { 'data-testid': 'skeleton', id: 'card-skeleton' },
      });

      expect(screen.getByTestId('skeleton')).toHaveAttribute(
        'id',
        'card-skeleton',
      );
    });
  });
});
