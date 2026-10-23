import { tv } from 'tailwind-variants';

export const cardHeader = tv({
  base: ['flex', 'flex-col', 'gap-2', 'p-4', 'w-full'],

  variants: {
    align: {
      left: 'items-start text-left',
      center: 'items-center text-center',
      right: 'items-end text-right',
    },

    divider: {
      true: 'border-b border-border',
      false: '',
    },

    background: {
      none: '',
      light: 'bg-gray-50',
      default: 'bg-white',
    },
  },

  defaultVariants: {
    align: 'left',
    divider: false,
    background: 'none',
  },
});
// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type CardHeaderAlign = keyof typeof cardHeader.variants.align;

export type CardHeaderDivider = boolean;

export type CardHeaderBackground = keyof typeof cardHeader.variants.background;

export type CardHeaderVariants = {
  align?: CardHeaderAlign;
  divider?: CardHeaderDivider;
  background?: CardHeaderBackground;
};
