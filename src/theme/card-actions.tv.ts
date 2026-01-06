import { tv, type VariantProps } from "tailwind-variants";

export const cardActions = tv({
  base: ["flex", "w-full", "gap-2", "p-3"],

  variants: {
    align: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },

    direction: {
      row: "flex-row",
      column: "flex-col",
    },

    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },

    divider: {
      true: "border-t border-border",
      false: "",
    },
  },

  defaultVariants: {
    align: "end",
    direction: "row",
    wrap: false,
    divider: false,
  },
});
export type CardActionsVariants = VariantProps<typeof cardActions>;
