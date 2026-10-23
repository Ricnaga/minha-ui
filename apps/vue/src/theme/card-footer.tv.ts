import { tv } from 'tailwind-variants';

export const cardFooter = tv({
  base: ['flex', 'w-full', 'gap-2', 'p-4', 'items-center'],

  variants: {
    align: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },

    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },

    divider: {
      true: 'border-t border-border',
      false: '',
    },
  },

  defaultVariants: {
    align: 'end',
    wrap: false,
    divider: false,
  },
});
// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type CardFooterAlign = keyof typeof cardFooter.variants.align;

export type CardFooterWrap = boolean;

export type CardFooterDivider = boolean;

export type CardFooterVariants = {
  align?: CardFooterAlign;
  wrap?: CardFooterWrap;
  divider?: CardFooterDivider;
};
