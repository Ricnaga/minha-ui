import { tv } from 'tailwind-variants';

export const card = tv({
  base: 'w-full min-w-0 p-3 grid items-center justify-center border border-neutral-400/40 sm:min-w-60 sm:p-4',
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
// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type CardRadius = keyof typeof card.variants.radius;

export type CardShadow = keyof typeof card.variants.shadow;

export type CardVariants = {
  radius?: CardRadius;
  shadow?: CardShadow;
};
