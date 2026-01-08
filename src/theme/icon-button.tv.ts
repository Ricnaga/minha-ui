import { tv, type VariantProps } from "tailwind-variants";
import { button } from "./button.tv";

export const iconButton = tv({
  extend: button,

  base: [
    "relative", // necessário para o pseudo-elemento
    "after:content-['']",
    "after:absolute after:inset-1/2",
    "after:-translate-x-1/2 after:-translate-y-1/2",
    "after:min-h-11 after:min-w-11",
    "after:pointer-events-auto",
  ],

  variants: {
    size: {
      small: "h-8 min-w-8 p-1",
      medium: "h-9 min-w-9 p-1",
      large: "h-10 min-w-10 p-1",
    },

    radius: {
      full: "rounded-full",
    },
  },

  defaultVariants: {
    radius: "full",
  },
});

export type IconButtonVariants = VariantProps<typeof iconButton>;
