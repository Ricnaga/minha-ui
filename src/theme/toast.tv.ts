import { tv, type VariantProps } from "tailwind-variants";

export const toast = tv({
  base: [
    "pointer-events-auto flex items-center gap-3",
    "rounded-md shadow-md p-4 text-white",
    "transition-all",
    "fill-mode-both",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
  ],
  variants: {
    variant: {
      primary: "bg-sky-600 text-sky-950",
      secondary: "bg-pink-600 text-pink-950",
      success: "bg-emerald-600 text-emerald-950",
      error: "bg-red-600 text-red-950",
      warning: "bg-amber-600 text-amber-950",
      info: "bg-blue-600 text-blue-950",
    },
    position: {
      "top-right": [
        "data-[state=open]:slide-in-from-top-5",
        "data-[state=open]:slide-in-from-right",
        "data-[state=closed]:slide-out-to-top-5",
        "data-[state=closed]:slide-out-to-right",
      ],
      "top-left": [
        "data-[state=open]:slide-in-from-top-5",
        "data-[state=open]:slide-in-from-left",
        "data-[state=closed]:slide-out-to-top-5",
        "data-[state=closed]:slide-out-to-left",
      ],
      "bottom-right": [
        "data-[state=open]:slide-in-from-bottom-5",
        "data-[state=open]:slide-in-from-right",
        "data-[state=closed]:slide-out-to-bottom-5",
        "data-[state=closed]:slide-out-to-right",
      ],
      "bottom-left": [
        "data-[state=open]:slide-in-from-bottom-5",
        "data-[state=open]:slide-in-from-left",
        "data-[state=closed]:slide-out-to-bottom-5",
        "data-[state=closed]:slide-out-to-left",
      ],
    },
  },
  defaultVariants: {
    variant: "info",
    position: "top-right",
  },
});

export type ToastVariants = VariantProps<typeof toast>;
