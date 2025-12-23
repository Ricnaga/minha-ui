import { tv, type VariantProps } from "tailwind-variants";

export const modalContainer = tv({
  base: [
    "grid gap-4 p-6 bg-white",
    "min-w-80 max-w-xl max-h-[80vh]",
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  ],
  variants: {
    isOpen: {
      true: "animate-in zoom-in-90 fade-in duration-300",
      false: "animate-out zoom-out-95 fade-out",
    },
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
    isOpen: false,
  },
});

export type ModalContainerVariants = VariantProps<typeof modalContainer>;
