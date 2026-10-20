import { tv, type VariantProps } from 'tailwind-variants';

export const modalActions = tv({
  base: [
    'grid grid-cols-1 sm:grid-cols-2 gap-2 py-3',
    'pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:pb-3',
    '[&>button]:w-full sm:[&>button]:w-auto',
  ],
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
    },
    align: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    },
  },
  defaultVariants: {
    columns: 2,
    align: 'right',
  },
});

export type ModalActionsVariants = VariantProps<typeof modalActions>;
