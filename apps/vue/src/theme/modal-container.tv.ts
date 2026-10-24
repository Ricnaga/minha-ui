import { tv } from 'tailwind-variants';

export const modalContainer = tv({
  base: [
    'grid gap-2 bg-white',
    // Mobile: ocupa a tela inteira (single scroll container previsível).
    'inset-0 h-dvh max-h-dvh w-full min-w-0 max-w-none overflow-hidden',
    'pt-[calc(1rem+env(safe-area-inset-top))] pb-[calc(1rem+env(safe-area-inset-bottom))]',
    // Desktop (sm+): centraliza com as dimensões originais.
    'sm:absolute sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-auto sm:min-w-80 sm:w-auto',
    'sm:max-h-[80vh] sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:overflow-visible',
    'sm:pt-0 sm:pb-0',
  ],
  variants: {
    isOpen: {
      true: 'animate-in fade-in slide-in-from-bottom-4 duration-300 motion-reduce:animate-none sm:zoom-in-90',
      false:
        'animate-out fade-out slide-out-to-bottom-4 sm:zoom-out-95 motion-reduce:animate-none',
    },
    radius: {
      sm: 'rounded-none sm:rounded-sm',
      md: 'rounded-none sm:rounded-md',
      lg: 'rounded-none sm:rounded-lg',
      xl: 'rounded-none sm:rounded-xl',
      '2xl': 'rounded-none sm:rounded-2xl',
      '3xl': 'rounded-none sm:rounded-3xl',
    },
    shadow: {
      sm: 'shadow-none sm:shadow-sm',
      md: 'shadow-none sm:shadow-md',
      lg: 'shadow-none sm:shadow-lg',
      xl: 'shadow-none sm:shadow-xl',
    },
    padding: {
      none: 'p-0',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
  },
  defaultVariants: {
    radius: 'md',
    shadow: 'md',
    isOpen: false,
    padding: 'md',
  },
});


export type ModalContainerRadius = keyof typeof modalContainer.variants.radius;
export type ModalContainerShadow = keyof typeof modalContainer.variants.shadow;
export type ModalContainerPadding = keyof typeof modalContainer.variants.padding;

export type ModalContainerVariants = {
  radius?: ModalContainerRadius;
  shadow?: ModalContainerShadow;
  padding?: ModalContainerPadding;
  isOpen?: boolean;
};
