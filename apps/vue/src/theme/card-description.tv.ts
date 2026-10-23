import { tv } from 'tailwind-variants';

export const cardDescription = tv({
  base: 'text-[1.125rem] leading-relaxed text-gray-700',

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
      default: 'text-gray-700',
      muted: 'text-gray-500',
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
export type CardDescriptionSize = keyof typeof cardDescription.variants.size;

export type CardDescriptionWeight =
  keyof typeof cardDescription.variants.weight;

export type CardDescriptionColor = keyof typeof cardDescription.variants.color;

export type CardDescriptionAlign = keyof typeof cardDescription.variants.align;

export type CardDescriptionVariants = {
  size?: CardDescriptionSize;
  weight?: CardDescriptionWeight;
  color?: CardDescriptionColor;
  align?: CardDescriptionAlign;
};
