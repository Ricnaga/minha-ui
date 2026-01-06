import { tv, type VariantProps } from "tailwind-variants";

export const cardTitle = tv({
  base: "text-xl leading-snug text-gray-900",

  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    color: {
      default: "text-gray-900",
      muted: "text-gray-700",
      inverted: "text-white",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },

  defaultVariants: {
    size: "md",
    weight: "bold",
    color: "default",
    align: "left",
  },
});

export type CardTitleVariants = VariantProps<typeof cardTitle>;
