import { tv, type VariantProps } from "tailwind-variants";

export const modalContainer = tv({
  base: [
    "grid gap-2 bg-white",
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
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
    },
    shadow: {
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    padding: {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    },
  },
  defaultVariants: {
    radius: "md",
    shadow: "md",
    isOpen: false,
    padding: "md",
  },
});

export type ModalContainerVariants = VariantProps<typeof modalContainer>;
