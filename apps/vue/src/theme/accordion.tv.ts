import { tv } from 'tailwind-variants';

// As variantes são a fonte única da verdade: o tipo de props do componente é
// derivado delas para que o compilador do SFC consiga resolvê-lo.
export const accordionVariants = {
  size: {
    sm: { accordionItem: 'w-full sm:w-48' },
    md: { accordionItem: 'w-full sm:w-72' },
    lg: { accordionItem: 'w-full sm:w-96' },
    full: { accordionItem: 'w-full' },
  },
  variant: {
    primary: {
      accordionHeader:
        'flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-sky-600/60 to-sky-600',
      accordionContentWrapper: 'bg-linear-to-tr from-sky-50/40 to-sky-50',
    },
    secondary: {
      accordionHeader:
        'flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-pink-600/60 to-pink-600',
      accordionContentWrapper: 'bg-linear-to-tr from-pink-50/40 to-pink-50',
    },
    success: {
      accordionHeader:
        'flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-emerald-600/60 to-emerald-600',
      accordionContentWrapper:
        'bg-linear-to-tr from-emerald-50/40 to-emerald-50',
    },
    info: {
      accordionHeader:
        'flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-blue-600/60 to-blue-600',
      accordionContentWrapper: 'bg-linear-to-tr from-blue-50/40 to-blue-50',
    },
    warning: {
      accordionHeader:
        'flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-amber-600/60 to-amber-600',
      accordionContentWrapper: 'bg-linear-to-tr from-amber-50/40 to-amber-50',
    },
    error: {
      accordionHeader:
        'flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-red-600/60 to-red-600',
      accordionContentWrapper: 'bg-linear-to-tr from-red-50/40 to-red-50',
    },
  },
};

export const accordion = tv({
  slots: {
    accordionItem:
      'rounded-lg shadow-lg shadow-neutral-200 overflow-hidden bg-white',
    accordionHeader: 'text-neutral-50 font-medium',
    accordionContentWrapper:
      'grid transition-[grid-template-rows] duration-300 ease-in-out overflow-hidden',
    accordionContentInner: 'overflow-hidden',
  },
  variants: accordionVariants,
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type AccordionVariant = keyof typeof accordionVariants.variant;
export type AccordionSize = keyof typeof accordionVariants.size;

export type AccordionVariants = {
  variant?: AccordionVariant;
  size?: AccordionSize;
};
