import { tv, type VariantProps } from "tailwind-variants";

export const cardDescription = tv({
  base: "text-[1.125rem] leading-relaxed text-gray-700",

  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    color: {
      default: "text-gray-700",
      muted: "text-gray-500",
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
    weight: "normal",
    color: "default",
    align: "left",
  },
});

export type CardDescriptionVariants = VariantProps<typeof cardDescription>;
