import { tv, type VariantProps } from 'tailwind-variants';

export const popoverContent = tv({
  base: [
    'absolute z-50 bg-white border border-neutral-200',
    'data-[state=open]:animate-in',
    'data-[state=closed]:animate-out',
    'duration-200 ease-out',
    'data-[state=closed]:opacity-0',
  ],

  variants: {
    side: {
      top: 'bottom-full left-1/2 -translate-x-1/2 origin-bottom',
      bottom: 'top-full left-1/2 -translate-x-1/2 origin-top',
      left: 'right-full top-1/2 -translate-y-1/2 origin-right',
      right: 'left-full top-1/2 -translate-y-1/2 origin-left',
    },

    width: {
      auto: '',
      trigger: 'w-full',
      sm: 'w-48',
      md: 'w-64',
      lg: 'w-80',
    },

    padding: {
      none: 'p-0',
      sm: 'p-2',
      md: 'p-3',
      lg: 'p-4',
    },

    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    },

    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },

    animation: {
      fade: ['data-[state=open]:fade-in', 'data-[state=closed]:fade-out'],
      slide: '',
      slideFade: [
        'data-[state=open]:fade-in',
        'data-[state=open]:zoom-in',
        'data-[state=closed]:fade-out',
        'data-[state=closed]:zoom-out',
      ],
    },
  },

  compoundVariants: [
    {
      animation: 'slide',
      side: 'top',
      class: [
        'data-[state=open]:slide-in-from-bottom',
        'data-[state=closed]:slide-out-to-bottom',
      ],
    },
    {
      animation: 'slideFade',
      side: 'top',
      class: [
        'data-[state=open]:slide-in-from-bottom',
        'data-[state=closed]:slide-out-to-bottom',
      ],
    },

    {
      animation: 'slide',
      side: 'bottom',
      class: [
        'data-[state=open]:slide-in-from-top',
        'data-[state=closed]:slide-out-to-top',
      ],
    },
    {
      animation: 'slideFade',
      side: 'bottom',
      class: [
        'data-[state=open]:slide-in-from-top',
        'data-[state=closed]:slide-out-to-top',
      ],
    },

    {
      animation: 'slide',
      side: 'left',
      class: [
        'data-[state=open]:slide-in-from-right',
        'data-[state=closed]:slide-out-to-right',
      ],
    },
    {
      animation: 'slideFade',
      side: 'left',
      class: [
        'data-[state=open]:slide-in-from-right',
        'data-[state=closed]:slide-out-to-right',
      ],
    },

    {
      animation: 'slide',
      side: 'right',
      class: [
        'data-[state=open]:slide-in-from-left',
        'data-[state=closed]:slide-out-to-left',
      ],
    },
    {
      animation: 'slideFade',
      side: 'right',
      class: [
        'data-[state=open]:slide-in-from-left',
        'data-[state=closed]:slide-out-to-left',
      ],
    },
  ],

  defaultVariants: {
    side: 'bottom',
    width: 'auto',
    padding: 'md',
    shadow: 'md',
    radius: 'md',
    animation: 'slideFade',
  },
});

export type PopoverContentVariants = VariantProps<typeof popoverContent>;
