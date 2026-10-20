import { tv, type VariantProps } from 'tailwind-variants';

export const card = tv({
  base: 'w-full min-w-60 p-2 grid items-center justify-center border border-neutral-400/40',
  variants: {
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    },
  },
  defaultVariants: {
    radius: 'md',
    shadow: 'md',
  },
});

export type CardVariants = VariantProps<typeof card>;
