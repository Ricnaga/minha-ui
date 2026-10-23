import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Catálogo de efeitos de entrada/saída do `tw-animate-css`.
 *
 * `animate-in`/`animate-out` (declarados no `transitionContainer`) rodam os
 * keyframes `enter`/`exit`; cada efeito apenas define as variáveis consumidas
 * por eles. Como cada efeito declara o próprio par entrada/saída, eles podem
 * ser combinados livremente (ex.: `fade` + `slideFromBottom`).
 */
export const transitionEffects = {
  fade: { enter: 'fade-in', exit: 'fade-out' },
  zoom: { enter: 'zoom-in-95', exit: 'zoom-out-95' },
  slideFromTop: { enter: 'slide-in-from-top', exit: 'slide-out-to-top' },
  slideFromBottom: {
    enter: 'slide-in-from-bottom',
    exit: 'slide-out-to-bottom',
  },
  slideFromLeft: { enter: 'slide-in-from-left', exit: 'slide-out-to-left' },
  slideFromRight: { enter: 'slide-in-from-right', exit: 'slide-out-to-right' },
} as const;

export type TransitionEffect = keyof typeof transitionEffects;

export const transitionContainer = tv({
  base: ['motion-reduce:animate-none'],
  variants: {
    isOpen: {
      true: 'animate-in',
      false: 'animate-out',
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export type TransitionContainerVariants = VariantProps<
  typeof transitionContainer
>;
