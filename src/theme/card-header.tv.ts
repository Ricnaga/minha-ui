import { tv, type VariantProps } from "tailwind-variants";

export const cardHeader = tv({
  base: ["flex", "flex-col", "gap-2", "p-4", "w-full"],

  variants: {
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    },

    divider: {
      true: "border-b border-border",
      false: "",
    },

    background: {
      none: "",
      light: "bg-gray-50",
      default: "bg-white",
    },
  },

  defaultVariants: {
    align: "left",
    divider: false,
    background: "none",
  },
});

export type CardHeaderVariants = VariantProps<typeof cardHeader>;
