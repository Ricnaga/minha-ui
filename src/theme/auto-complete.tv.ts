import { tv, type VariantProps } from 'tailwind-variants';
import { selectItem } from './select-item.tv';

export const autoComplete = tv({
  extend: selectItem,

  slots: {
    // `item` is inherited from `selectItem` via `extend`; declared explicitly
    // so tailwind-variants infers its type for the `isHighlighted` variant.
    item: '',
    list: 'w-full max-h-[min(15rem,40dvh)] overflow-y-auto overscroll-contain',
    empty: 'p-2 text-sm text-neutral-400',
    multiField: [
      'flex flex-wrap items-center gap-2 w-full min-h-11',
      'rounded-md border border-sky-300 p-2 text-sm text-neutral-800 font-medium',
      'transition-all focus-within:border-2 focus-within:border-pink-500',
    ],
    multiInput: 'flex-1 min-w-20 bg-transparent focus:outline-none',
    clearButton: [
      'pointer-events-auto flex items-center justify-center shrink-0',
      'text-neutral-400 transition-colors cursor-pointer rounded-full',
      'hover:text-neutral-600 focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-sky-300',
    ],
  },

  variants: {
    isHighlighted: {
      true: {
        item: 'bg-sky-400/20 font-semibold',
      },
    },
  },

  defaultVariants: {
    isHighlighted: false,
  },
});

export type AutoCompleteVariants = VariantProps<typeof autoComplete>;
