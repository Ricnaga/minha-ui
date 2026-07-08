import { tv, type VariantProps } from "tailwind-variants";

export const dnd = tv({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type DndVariants = VariantProps<typeof dnd>;
