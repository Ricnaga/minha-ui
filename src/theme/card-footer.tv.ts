import { tv, type VariantProps } from "tailwind-variants";

export const cardFooter = tv({
  base: ["flex", "w-full", "gap-2", "p-4", "items-center"],

  variants: {
    align: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
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
    wrap: false,
    divider: false,
  },
});

export type CardFooterVariants = VariantProps<typeof cardFooter>;
