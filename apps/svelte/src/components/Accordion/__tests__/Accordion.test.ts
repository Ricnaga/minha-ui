import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import AccordionStory from '../stories/AccordionStory.svelte';

type RenderAccordionProps = {
  type?: 'single' | 'multiple';
  size?: 'sm' | 'md' | 'lg' | 'full';
  onValueChange?: (value: string[]) => void;
};

function renderAccordion(props: RenderAccordionProps = {}) {
  return render(AccordionStory, {
    props: {
      type: 'single',
      ...props,
    },
  });
}

describe('Accordion', () => {
  describe('Rendering', () => {
    it('should render accordion correctly', () => {
      const { container } = renderAccordion();

      expect(
        container.querySelector('[role="presentation"]'),
      ).toBeInTheDocument();
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });
  });

  describe('Interactions', () => {
    it('should toggle accordion item when clicked', async () => {
      const { container } = renderAccordion();

      await fireEvent.click(screen.getByText('Item 1'));

      expect(container.querySelectorAll('[data-state]')[0]).toHaveAttribute(
        'data-state',
        'open',
      );
    });

    it('should close previously opened item when opening another', async () => {
      const { container } = renderAccordion();

      await fireEvent.click(screen.getByText('Item 1'));
      expect(container.querySelectorAll('[data-state]')[0]).toHaveAttribute(
        'data-state',
        'open',
      );

      await fireEvent.click(screen.getByText('Item 2'));
      expect(container.querySelectorAll('[data-state]')[1]).toHaveAttribute(
        'data-state',
        'open',
      );
      expect(container.querySelectorAll('[data-state]')[0]).toHaveAttribute(
        'data-state',
        'closed',
      );
    });

    it('should keep multiple items open when type is multiple', async () => {
      const { container } = renderAccordion({ type: 'multiple' });

      await fireEvent.click(screen.getByText('Item 1'));
      await fireEvent.click(screen.getByText('Item 2'));

      expect(container.querySelectorAll('[data-state]')[0]).toHaveAttribute(
        'data-state',
        'open',
      );
      expect(container.querySelectorAll('[data-state]')[1]).toHaveAttribute(
        'data-state',
        'open',
      );
    });

    it('should emit the updated value', async () => {
      const onValueChange = vi.fn();
      renderAccordion({ onValueChange });

      await fireEvent.click(screen.getByText('Item 1'));

      expect(onValueChange).toHaveBeenCalledWith(['item-1']);
    });
  });

  describe('Responsividade', () => {
    it.each([
      ['sm', 'sm:w-48'],
      ['md', 'sm:w-72'],
      ['lg', 'sm:w-96'],
    ] as const)(
      'should be full width on mobile and %s width on sm+',
      (size, expectedClass) => {
        const { container } = renderAccordion({ size });
        const item = container.querySelector('[role="presentation"]');

        expect(item).toHaveClass('w-full', expectedClass);
      },
    );
  });
});
