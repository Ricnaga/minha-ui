import { tv, type VariantProps } from 'tailwind-variants';

export const dndList = tv({
  base: 'flex flex-col gap-2 min-h-24 rounded-lg border-2 border-dashed border-transparent p-4 transition-colors',
  variants: {
    isDragOver: {
      true: 'border-sky-400 bg-sky-50',
      false: '',
    },
  },
  defaultVariants: {
    isDragOver: false,
  },
});

export type DndListVariants = VariantProps<typeof dndList>;
