// Badge.tsx
import { tv, type VariantProps } from "tailwind-variants";

export const chip = tv({
  base: "inline-flex items-center px-2 py-1 font-medium text-xs transition-colors",
  variants: {
    color: {
      primary: "bg-sky-200 text-sky-800",
      secondary: "bg-pink-200 text-pink-800",
      error: "bg-red-400/50 text-red-800",
      success: "bg-emerald-200 text-emerald-800",
      info: "bg-blue-200 text-blue-800",
      warning: "bg-amber-200 text-amber-800",
    },
    size: {
      small: "px-2 py-0.5 text-xs",
      medium: "px-3 py-1 text-sm",
      large: "px-4 py-1.5 text-base",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
    rounded: "full",
  },
});

export type ChipVariants = VariantProps<typeof chip>;