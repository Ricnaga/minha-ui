import { tv } from 'tailwind-variants';

export const cardBody = tv({
  base: ['flex', 'flex-col', 'gap-2', 'p-4'],

  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },

    gap: {
      none: 'gap-0',
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-4',
    },

    background: {
      none: '',
      light: 'bg-gray-50',
      default: 'bg-white',
    },
  },

  defaultVariants: {
    padding: 'md',
    gap: 'md',
    background: 'none',
  },
});
// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type CardBodyPadding = keyof typeof cardBody.variants.padding;

export type CardBodyGap = keyof typeof cardBody.variants.gap;

export type CardBodyBackground = keyof typeof cardBody.variants.background;

export type CardBodyVariants = {
  padding?: CardBodyPadding;
  gap?: CardBodyGap;
  background?: CardBodyBackground;
};
