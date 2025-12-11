import { tv, type VariantProps } from "tailwind-variants";

export const toast = tv({
  base: "pointer-events-auto flex items-center gap-3 rounded-md shadow-lg p-4 text-white",
  variants: {
    variant: {
      primary: "bg-sky-600",
      secondary: "bg-pink-600",
      success: "bg-emerald-600",
      error: "bg-red-600",
      warning: "bg-amber-600 text-black",
      info: "bg-blue-600",
    },
    position: {
      "top-right":
        "fixed top-4 right-4 animate-in slide-in-from-top-5 slide-in-from-right",
      "top-left":
        "fixed top-4 left-4 animate-in slide-in-from-top-5 slide-in-from-left",
      "bottom-right":
        "fixed bottom-4 right-4 animate-in slide-in-from-bottom-5 slide-in-from-right",
      "bottom-left":
        "fixed bottom-4 left-4 animate-in slide-in-from-bottom-5 slide-in-from-rightleft",
    },
  },
  defaultVariants: {
    variant: "info",
    position: "top-right",
  },
});

export type ToastVariants = VariantProps<typeof toast>;
