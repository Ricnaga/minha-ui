import { tv, type VariantProps } from "tailwind-variants";

export const modalContainer = tv({
  base: ["grid gap-4 p-6 bg-white", "min-w-80 max-w-xl max-h-[80vh]"],
  variants: {
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-2xl",
    },
    shadow: {
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
  },
  defaultVariants: {
    radius: "md",
    shadow: "md",
  },
});

export type ModalContainerVariants = VariantProps<typeof modalContainer>;
