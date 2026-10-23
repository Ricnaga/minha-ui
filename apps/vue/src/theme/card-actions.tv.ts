import { tv } from 'tailwind-variants';

export const cardActions = tv({
  base: ['flex', 'w-full', 'gap-2', 'p-3'],

  variants: {
    align: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },

    direction: {
      row: 'flex-row',
      column: 'flex-col',
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
    direction: 'row',
    wrap: false,
    divider: false,
  },
});
// O compilador do SFC não resolve `VariantProps` (tipo condicional), então os
// tipos das variantes são derivados das chaves de cada grupo de `variants`.
export type CardActionsAlign = keyof typeof cardActions.variants.align;

export type CardActionsDirection = keyof typeof cardActions.variants.direction;

export type CardActionsWrap = boolean;

export type CardActionsDivider = boolean;

export type CardActionsVariants = {
  align?: CardActionsAlign;
  direction?: CardActionsDirection;
  wrap?: CardActionsWrap;
  divider?: CardActionsDivider;
};
