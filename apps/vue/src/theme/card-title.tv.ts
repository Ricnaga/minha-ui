import { tv } from 'tailwind-variants';

export const cardTitle = tv({
  base: 'text-xl leading-snug text-gray-900',

  variants: {
    size: {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    color: {
      default: 'text-gray-900',
      muted: 'text-gray-700',
      inverted: 'text-white',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'bold',
    color: 'default',
    align: 'left',
  },
});
// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type CardTitleSize = keyof typeof cardTitle.variants.size;

export type CardTitleWeight = keyof typeof cardTitle.variants.weight;

export type CardTitleColor = keyof typeof cardTitle.variants.color;

export type CardTitleAlign = keyof typeof cardTitle.variants.align;

export type CardTitleVariants = {
  size?: CardTitleSize;
  weight?: CardTitleWeight;
  color?: CardTitleColor;
  align?: CardTitleAlign;
};
