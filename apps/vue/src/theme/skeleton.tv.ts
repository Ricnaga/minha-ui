import { tv } from 'tailwind-variants';

export const skeleton = tv({
  base: 'animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded-md',
  variants: {
    shape: {
      square: 'rounded-none',
      rounded: 'rounded-md',
      circle: 'rounded-full',
    },
  },
  defaultVariants: {
    shape: 'rounded',
  },
});

// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type SkeletonShape = keyof typeof skeleton.variants.shape;

export type SkeletonVariants = {
  shape?: SkeletonShape;
};
