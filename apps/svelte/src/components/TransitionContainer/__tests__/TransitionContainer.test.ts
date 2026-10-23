import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import TransitionContainer from '../TransitionContainer.svelte';

const animations = [
  ['fade', 'fade-in', 'fade-out'],
  ['zoom', 'zoom-in-95', 'zoom-out-95'],
  ['slideFromTop', 'slide-in-from-top', 'slide-out-to-top'],
  ['slideFromBottom', 'slide-in-from-bottom', 'slide-out-to-bottom'],
  ['slideFromLeft', 'slide-in-from-left', 'slide-out-to-left'],
  ['slideFromRight', 'slide-in-from-right', 'slide-out-to-right'],
] as const;

const content = createRawSnippet(() => ({
  render: () => '<span>Conteúdo animado</span>',
}));

describe('TransitionContainer', () => {
  describe('Rendering', () => {
    it('should render the content', () => {
      render(TransitionContainer, {
        props: { isOpen: true, children: content },
      });

      expect(screen.getByText('Conteúdo animado')).toBeInTheDocument();
    });

    it('should forward native attributes', () => {
      render(TransitionContainer, {
        props: {
          isOpen: true,
          'data-testid': 'transition',
          id: 'hero',
        },
      });

      expect(screen.getByTestId('transition')).toHaveAttribute('id', 'hero');
    });

    it('should merge the consumer class', () => {
      const { container } = render(TransitionContainer, {
        props: { isOpen: true, class: 'mt-4' },
      });

      const transition = container.firstElementChild;

      expect(transition).toHaveClass('mt-4');
      expect(transition).toHaveClass('animate-in');
    });
  });

  describe('Visibility', () => {
    it('should run the enter animation when open', () => {
      const { container } = render(TransitionContainer, {
        props: { isOpen: true },
      });

      const transition = container.firstElementChild;

      expect(transition).toHaveClass('animate-in');
      expect(transition).toHaveClass('fade-in');
      expect(transition).not.toHaveAttribute('aria-hidden');
      expect(transition).not.toHaveAttribute('inert');
    });

    it('should run the exit animation and hide from assistive tech when closed', () => {
      const { container } = render(TransitionContainer, {
        props: { isOpen: false },
      });

      const transition = container.firstElementChild;

      expect(transition).toHaveClass('animate-out');
      expect(transition).toHaveClass('fade-out');
      expect(transition).toHaveAttribute('aria-hidden', 'true');
      expect(transition).toHaveAttribute('inert');
    });

    it('should allow overriding aria-hidden and inert', () => {
      const { container } = render(TransitionContainer, {
        props: { isOpen: false, 'aria-hidden': false, inert: false },
      });

      const transition = container.firstElementChild;

      expect(transition).toHaveAttribute('aria-hidden', 'false');
      expect(transition).not.toHaveAttribute('inert');
    });
  });

  describe('Animations', () => {
    it.each(animations)(
      'should apply the %s animation pair',
      async (animation, enterClass, exitClass) => {
        const { container, rerender } = render(TransitionContainer, {
          props: { isOpen: true, animation },
        });

        expect(container.firstElementChild).toHaveClass(enterClass);

        await rerender({ isOpen: false, animation });

        expect(container.firstElementChild).toHaveClass(exitClass);
      },
    );

    it('should compose multiple animations', async () => {
      const animation = ['fade', 'slideFromBottom'] as const;
      const { container, rerender } = render(TransitionContainer, {
        props: { isOpen: true, animation: [...animation] },
      });

      const transition = container.firstElementChild;

      expect(transition).toHaveClass('animate-in');
      expect(transition).toHaveClass('fade-in');
      expect(transition).toHaveClass('slide-in-from-bottom');

      await rerender({ isOpen: false, animation: [...animation] });

      expect(transition).toHaveClass('animate-out');
      expect(transition).toHaveClass('fade-out');
      expect(transition).toHaveClass('slide-out-to-bottom');
    });
  });
});
