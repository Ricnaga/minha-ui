import { tv, type VariantProps } from "tailwind-variants";

export const modalActions = tv({
  base: "grid grid-cols-1 sm:grid-cols-2 gap-2 py-3",
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
    },
    align: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
  },
  defaultVariants: {
    columns: 2,
    align: "right",
  },
});

export type ModalActionsVariants = VariantProps<typeof modalActions>;
