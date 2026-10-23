import { tv } from 'tailwind-variants';

export const divider = tv({
  base: 'bg-neutral-600',
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    },
    inset: {
      none: '',
      left: 'ml-4',
      right: 'mr-4',
      center: 'mx-4',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    inset: 'none',
  },
});

// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type DividerOrientation = keyof typeof divider.variants.orientation;

export type DividerInset = keyof typeof divider.variants.inset;

export type DividerVariants = {
  orientation?: DividerOrientation;
  inset?: DividerInset;
};
