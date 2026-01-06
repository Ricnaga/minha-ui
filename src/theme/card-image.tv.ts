import { tv, type VariantProps } from "tailwind-variants";

export const cardImage = tv({
  base: [
    "block",
    "w-full",
    "h-full",
    "object-cover",
    "select-none",
    "pointer-events-none",
  ],

  variants: {
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },

    aspect: {
      auto: "",
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-3/4",
    },
  },

  defaultVariants: {
    rounded: "none",
    aspect: "auto",
  },
});

export type CardImageVariants = VariantProps<typeof cardImage>;
