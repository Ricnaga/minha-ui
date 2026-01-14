import { tv, type VariantProps } from "tailwind-variants";

export const tooltip = tv({
  base: [
    "shadow-md transition-opacity duration-200 pointer-events-none",
    "absolute z-50 px-2 py-1 rounded",
    "text-xs font-semibold",
    "aria-[hidden=false]:opacity-100",
    "aria-hidden:opacity-0",
  ],
  variants: {
    color: {
      primary: "bg-sky-600 text-sky-950",
      secondary: "bg-pink-600 text-pink-950",
      success: "bg-emerald-600 text-emerald-950",
      error: "bg-red-600 text-red-950",
      warning: "bg-amber-600 text-amber-950",
      info: "bg-blue-600 text-blue-950",
      black: "bg-black text-white",
      white: "bg-white text-black",
    },
    position: {
      top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
      left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
      right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    },
  },
  defaultVariants: {
    color: "black",
    position: "top",
  },
});

export type TooltipVariants = VariantProps<typeof tooltip>;
