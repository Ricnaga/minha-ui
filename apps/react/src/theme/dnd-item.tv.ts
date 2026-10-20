import { tv, type VariantProps } from 'tailwind-variants';

export const dndItem = tv({
  base: 'cursor-grab rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-shadow select-none',
  variants: {
    isDragging: {
      true: 'opacity-50 shadow-none',
      false: '',
    },
    isDragOver: {
      true: 'border-sky-400 shadow-md',
      false: '',
    },
  },
  compoundVariants: [
    {
      isDragging: false,
      isDragOver: false,
      class: 'hover:shadow-md hover:border-gray-300',
    },
  ],
  defaultVariants: {
    isDragging: false,
    isDragOver: false,
  },
});

export type DndItemVariants = VariantProps<typeof dndItem>;
