import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: [
    "flex items-center justify-center border tracking-wide relative overflow-hidden",
    "transition-all cursor-pointer shadow-sm duration-300 ease-in-out",
  ],

  variants: {
    isLoading: {
      true: ["cursor-not-allowed", "disabled:opacity-40 disabled:shadow-none"],
    },
    variant: {
      contained: "text-white",
      outline: "bg-transparent border-2",
      ghost: "bg-transparent border-transparent hover:bg-neutral-200/80",
    },

    color: {
      primary: "",
      secondary: "",
      success: "",
      info: "",
      warning: "",
      error: "",
    },

    size: {
      small: "h-8 min-w-16 py-2 px-3",
      medium: "h-10 min-w-24 py-3 px-4",
      large: "h-12 min-w-32 py-4 px-6",
    },

    radius: {
      none: "rounded-none",
      small: "rounded-sm",
      medium: "rounded-lg",
      large: "rounded-xl",
    },
  },

  compoundVariants: [
    {
      variant: "contained",
      color: "primary",
      class: [
        "bg-sky-700 border-sky-700",
        "active:bg-sky-800/90",
        "hover:bg-sky-800 hover:border-sky-800 hover:shadow-[0_0_6px_#35e]",
      ],
    },
    {
      variant: "contained",
      color: "secondary",
      class: [
        "bg-pink-700 border-pink-700",
        "active:bg-pink-800/90",
        "hover:bg-pink-800 hover:border-pink-800 hover:shadow-[0_0_6px_#a05]",
      ],
    },

    {
      variant: "contained",
      color: "success",
      class: [
        "bg-emerald-600 border-emerald-600",
        "active:bg-emerald-700/90",
        "hover:bg-emerald-700 hover:border-emerald-700 hover:shadow-[0_0_6px_#6ba]",
      ],
    },
    {
      variant: "contained",
      color: "info",
      class: [
        "bg-blue-600 border-blue-600",
        "active:bg-blue-700/90",
        "hover:bg-blue-700 hover:border-blue-700 hover:shadow-[0_0_6px_#36b]",
      ],
    },
    {
      variant: "contained",
      color: "warning",
      class: [
        "bg-amber-600 border-amber-600",
        "active:bg-amber-700/90",
        "hover:bg-amber-700 hover:border-amber-700 hover:shadow-[0_0_6px_#dba]",
      ],
    },
    {
      variant: "contained",
      color: "error",
      class: [
        "bg-red-600 border-red-600",
        "active:bg-red-700/90",
        "hover:bg-red-700 hover:border-red-700 hover:shadow-[0_0_6px_#e34]",
      ],
    },
    {
      variant: "outline",
      color: "primary",
      class: [
        "border-sky-700 text-sky-700",
        "active:border-sky-700/60 active:text-sky-700/60",
        "hover:bg-sky-50 hover:shadow-[0_0_6px_#35e]",
      ],
    },
    {
      variant: "outline",
      color: "secondary",
      class: [
        "border-pink-700 text-pink-700",
        "active:border-pink-700/60 active:text-pink-700/60",
        "hover:bg-pink-50 hover:shadow-[0_0_6px_#a05]",
      ],
    },
    {
      variant: "outline",
      color: "success",
      class: [
        "border-emerald-600 text-emerald-600",
        "active:border-emerald-600/60 active:text-emerald-600/60",
        "hover:bg-emerald-50 hover:shadow-[0_0_6px_#6ba]",
      ],
    },
    {
      variant: "outline",
      color: "info",
      class: [
        "border-blue-600 text-blue-600",
        "active:border-blue-600/60 active:text-blue-600/60",
        "hover:bg-blue-50 hover:shadow-[0_0_6px_#36b]",
      ],
    },
    {
      variant: "outline",
      color: "warning",
      class: [
        "border-amber-600 text-amber-600",
        "active:border-amber-600/60 active:text-amber-600/60",
        "hover:bg-amber-50 hover:shadow-[0_0_6px_#dba]",
      ],
    },
    {
      variant: "outline",
      color: "error",
      class: [
        "border-red-600 text-red-600",
        "active:border-red-600/60 active:text-red-600/60",
        "hover:bg-red-50 hover:shadow-[0_0_6px_#e34]",
      ],
    },

    {
      variant: "ghost",
      color: "primary",
      class: [
        "text-sky-600 hover:text-sky-700 hover:font-bold",
        "active:text-sky-600/80",
      ],
    },
    {
      variant: "ghost",
      color: "secondary",
      class: [
        "text-pink-600 hover:text-pink-700 hover:font-bold",
        "active:text-pink-600/80",
      ],
    },
    {
      variant: "ghost",
      color: "success",
      class: [
        "text-emerald-600 hover:text-emerald-700 hover:font-bold",
        "active:text-emerald-600/80",
      ],
    },
    {
      variant: "ghost",
      color: "info",
      class: [
        "text-blue-600 hover:text-blue-700 hover:font-bold",
        "active:text-blue-600/80",
      ],
    },
    {
      variant: "ghost",
      color: "warning",
      class: [
        "text-amber-600 hover:text-amber-700 hover:font-bold",
        "active:text-amber-600/80",
      ],
    },
    {
      variant: "ghost",
      color: "error",
      class: [
        "text-red-600 hover:text-red-700 hover:font-bold",
        "active:text-red-600/80",
      ],
    },
  ],

  defaultVariants: {
    variant: "contained",
    color: "primary",
    size: "medium",
    radius: "medium",
    isLoading: false,
  },
});

export type ButtonVariants = VariantProps<typeof button>;
