// Badge.tsx
import { tv, type VariantProps } from "tailwind-variants";

export const badge = tv({
  base: "absolute flex items-center justify-center text-white font-bold text-xs leading-none rounded-full",
  variants: {
    color: {
      primary: "bg-sky-600",
      secondary: "bg-pink-600",
      error: "bg-red-600",
      success: "bg-emerald-600",
      info: "bg-blue-600",
      warning: "bg-amber-500",
    },
    size: {
      small: "size-3 text-[0.5rem]",
      medium: "size-4 text-xs",
      large: "size-6 text-sm",
    },
    position: {
      topRight: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
      topLeft: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
      bottomRight: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
      bottomLeft: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
    position: "topRight",
  },
});

export type BadgeVariants = VariantProps<typeof badge>;
