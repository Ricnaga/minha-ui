import { tv, type VariantProps } from "tailwind-variants";

export const backdrop = tv({
  slots: {
    base: [
      "fixed inset-0 bg-black/50",
      "transition-opacity duration-200 ease-out",
      "opacity-0 pointer-events-none",
    ],
    wrapper: [
      "absolute inset-0",
      "flex items-center justify-center",
      "transition-all duration-200 ease-out",
      "opacity-0 scale-95",
    ],
  },

  variants: {
    isLoading: {
      true: {
        wrapper: "opacity-100 scale-100",
      },
    },
    isOpen: {
      true: {
        base: "opacity-100 pointer-events-auto",
      },
      false: "",
    },

    blur: {
      none: {
        base: "backdrop-blur-0",
      },
      sm: {
        base: "backdrop-blur-sm",
      },
      md: {
        base: "backdrop-blur-md",
      },
      lg: {
        base: "backdrop-blur-lg",
      },
    },
  },

  defaultVariants: {
    blur: "md",
    isOpen: false,
    isLoading: false,
  },
});

export type BackdropVariants = VariantProps<typeof backdrop>;
