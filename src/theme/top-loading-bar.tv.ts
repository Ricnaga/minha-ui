import { tv, type VariantProps } from "tailwind-variants";

export const topLoadingBar = tv({
  base: [
    "h-1 fixed top-0 left-0 z-[9999] transition-all duration-300 ease-out shadow-[0_0_8px_currentColor]",
  ],
  variants: {
    color: {
      primary: "bg-sky-700 text-sky-700/50",
      secondary: "bg-pink-700 text-pink-700/50",
      success: "bg-emerald-600 text-emerald-600/50",
      info: "bg-blue-600 text-blue-600/50",
      warning: "bg-amber-600 text-amber-600/50",
      error: "bg-red-600 text-red-600/50",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export type TopLoadingBarVariants = VariantProps<typeof topLoadingBar>;
