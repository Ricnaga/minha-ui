import { tv, type VariantProps } from "tailwind-variants";

export const divider = tv({
  base: "bg-neutral-600",
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    },
    inset: {
      none: "",
      left: "ml-4",
      right: "mr-4",
      center: "mx-4",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    inset: "none",
  },
});

export type DividerVariants = VariantProps<typeof divider>;
