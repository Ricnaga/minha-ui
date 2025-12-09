import { tv, type VariantProps } from "tailwind-variants";

export const skeleton = tv({
  base: "animate-pulse bg-neutral-300 dark:bg-neutral-700",
  variants: {
    variant: {
      square: "rounded-none",
      rounded: "rounded-md",
      circle: "rounded-full",
    },
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-10",
      full: "size-full",
    },
  },
  defaultVariants: {
    variant: "rounded",
    size: "md",
  },
});

export type SkeletonVariants = VariantProps<typeof skeleton>;
