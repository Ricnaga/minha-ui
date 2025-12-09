import { tv, type VariantProps } from "tailwind-variants";

export const tooltip = tv({
  base: [
    "shadow-md opacity-0 transition-opacity duration-200 pointer-events-none",
    "absolute z-50 px-2 py-1 bg-black rounded",
    "text-xs font-medium text-white",
  ],
  variants: {
    color: {
      black: "bg-black text-white",
      white: "bg-white text-black border border-gray-300",
      red: "bg-red-600 text-white",
      green: "bg-green-600 text-white",
    },
    position: {
      top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
      left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
      right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    },
    isVisible: {
      true: "opacity-100",
      false: "opacity-0",
    },
  },
  defaultVariants: {
    color: "black",
    position: "top",
    isVisible: false,
  },
});

export type TooltipVariants = VariantProps<typeof tooltip>;
