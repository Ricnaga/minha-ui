import { tv, type VariantProps } from "tailwind-variants";
import { button } from "./button.tv";

export const iconButton = tv({
  extend: button,

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
