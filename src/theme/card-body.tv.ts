import { tv, type VariantProps } from "tailwind-variants";

export const cardBody = tv({
  base: ["flex", "flex-col", "gap-2", "p-4"],

  variants: {
    padding: {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },

    gap: {
      none: "gap-0",
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-4",
    },

    background: {
      none: "",
      light: "bg-gray-50",
      default: "bg-white",
    },
  },

  defaultVariants: {
    padding: "md",
    gap: "md",
    background: "none",
  },
});
export type CardBodyVariants = VariantProps<typeof cardBody>;
