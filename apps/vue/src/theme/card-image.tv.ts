import { tv } from 'tailwind-variants';

export const cardImage = tv({
  base: [
    'block',
    'w-full',
    'h-full',
    'object-cover',
    'select-none',
    'pointer-events-none',
  ],

  variants: {
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },

    aspect: {
      auto: '',
      square: 'aspect-square',
      video: 'aspect-video',
      portrait: 'aspect-3/4',
    },
  },

  defaultVariants: {
    rounded: 'none',
    aspect: 'auto',
  },
});
// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type CardImageRounded = keyof typeof cardImage.variants.rounded;

export type CardImageAspect = keyof typeof cardImage.variants.aspect;

export type CardImageVariants = {
  rounded?: CardImageRounded;
  aspect?: CardImageAspect;
};
