import { tv, type VariantProps } from 'tailwind-variants';

export const stepper = tv({
  base: 'flex',
  variants: {
    orientation: {
      horizontal: [
        'flex-row gap-2 sm:gap-4',
        // Mobile: rola horizontalmente quando os passos não cabem.
        'overflow-x-auto [scrollbar-width:thin] sm:overflow-visible',
      ],
      vertical: 'flex-col gap-4',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type StepperVariants = VariantProps<typeof stepper>;
