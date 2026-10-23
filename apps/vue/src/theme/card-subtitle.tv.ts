import { tv } from 'tailwind-variants';

export const cardSubtitle = tv({
  base: 'text-lg leading-relaxed text-gray-500',

  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    color: {
      default: 'text-gray-500',
      muted: 'text-gray-400',
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
    weight: 'normal',
    color: 'default',
    align: 'left',
  },
});
// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type CardSubtitleSize = keyof typeof cardSubtitle.variants.size;

export type CardSubtitleWeight = keyof typeof cardSubtitle.variants.weight;

export type CardSubtitleColor = keyof typeof cardSubtitle.variants.color;

export type CardSubtitleAlign = keyof typeof cardSubtitle.variants.align;

export type CardSubtitleVariants = {
  size?: CardSubtitleSize;
  weight?: CardSubtitleWeight;
  color?: CardSubtitleColor;
  align?: CardSubtitleAlign;
};
