import { tv, type VariantProps } from "tailwind-variants";

export const skeleton = tv({
  base: "animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded-md",
  variants: {
    shape: {
      square: "rounded-none",
      rounded: "rounded-md",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    shape: "rounded",
  },
});

export type SkeletonVariants = VariantProps<typeof skeleton>;
