import { tv, type VariantProps } from "tailwind-variants";

export const cardSubtitle = tv({
  base: "text-lg leading-relaxed text-gray-500",

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
      default: "text-gray-500",
      muted: "text-gray-400",
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

export type CardSubtitleVariants = VariantProps<typeof cardSubtitle>;
