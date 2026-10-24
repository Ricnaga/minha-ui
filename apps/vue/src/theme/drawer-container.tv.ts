import { tv } from 'tailwind-variants';

export const drawerContainer = tv({
  base: [
    'fixed bg-white p-6',
    'flex flex-col overflow-hidden',
    'duration-200 ease-out',
    'pointer-events-none',
    'will-change-transform',
    'z-(--z-drawer,50)',
  ],
  variants: {
    isOpen: {
      true: 'pointer-events-auto animate-in opacity-100',
      false: 'animate-out opacity-0',
    },
    side: {
      right: [
        'top-0 right-0 h-dvh w-[85vw] max-w-80',
        'pr-[calc(1.5rem+env(safe-area-inset-right))]',
      ],
      left: [
        'top-0 left-0 h-dvh w-[85vw] max-w-80',
        'pl-[calc(1.5rem+env(safe-area-inset-left))]',
      ],
      bottom: [
        'bottom-0 left-0 w-full h-80 max-h-[85dvh]',
        'pb-[calc(1.5rem+env(safe-area-inset-bottom))]',
      ],
      top: [
        'top-0 left-0 w-full h-80 max-h-[85dvh]',
        'pt-[calc(1.5rem+env(safe-area-inset-top))]',
      ],
    },
  },
  compoundVariants: [
    { isOpen: true, side: 'right', class: 'slide-in-from-right' },
    { isOpen: false, side: 'right', class: 'slide-out-to-right' },

    { isOpen: true, side: 'left', class: 'slide-in-from-left' },
    { isOpen: false, side: 'left', class: 'slide-out-to-left' },

    { isOpen: true, side: 'bottom', class: 'slide-in-from-bottom' },
    { isOpen: false, side: 'bottom', class: 'slide-out-to-bottom' },

    { isOpen: true, side: 'top', class: 'slide-in-from-top' },
    { isOpen: false, side: 'top', class: 'slide-out-to-top' },
  ],

  defaultVariants: {
    side: 'right',
    isOpen: false,
  },
});


export type DrawerSide = keyof typeof drawerContainer.variants.side;

export type DrawerContainerVariants = {
  side?: DrawerSide;
  isOpen?: boolean;
};
