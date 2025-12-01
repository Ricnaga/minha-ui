import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: "flex items-center justify-center border-0 transition cursor-pointer tracking-wide shadow-md hover:shadow-[0_0_10px_#00f] duration-300 ease-in-out",
  variants: {
    variant: {
      primary:
        "bg-sky-700 text-white hover:bg-sky-800 border-sky-700 hover:border-sky-800",
      secondary:
        "bg-pink-700 text-white hover:bg-pink-800 border-pink-700 hover:border-pink-800",
      ghost: "hover:bg-neutral-200/80 hover:text-sky-700 hover:font-bold",
      success:
        "bg-emerald-600 text-white hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700",
      info: "bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:border-blue-700",
      warning:
        "bg-amber-600 text-white hover:bg-amber-700 border-amber-600 hover:border-amber-700",
      error:
        "bg-red-600 text-white hover:bg-red-700 border-red-600 hover:border-red-700",
    },
    size: {
      small: "h-8 min-w-16 py-2 px-3",
      medium: "h-10 min-w-24 py-3 px-4",
      large: "h-12 min-w-32 py-4 px-6",
    },
    radius: {
      none: "border",
      small: "rounded-sm",
      medium: "rounded-lg",
      large: "rounded-xl",
    },
  },
});

export type ButtonVariants = VariantProps<typeof button>;
