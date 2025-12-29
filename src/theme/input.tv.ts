import { tv, type VariantProps } from "tailwind-variants";

export const input = tv({
  slots: {
    container: "relative h-11 w-full min-w-50",
    startIconWrapper: "absolute left-3 flex items-center pointer-events-none",
    endIconWrapper: "absolute right-3 flex items-center pointer-events-none",
    field: "peer w-full bg-transparent focus:outline-none transition-all",
    title: [
      "absolute left-3 -top-2.5 text-xs",
      "transition-all",
      "peer-placeholder-shown:top-2.5",
      "peer-placeholder-shown:text-sm",
      "peer-focus:-top-2.5 peer-focus:text-xs",
    ],
  },
  variants: {
    variant: {
      underline: {
        startIconWrapper: "top-1/2 -translate-y-1/2",
        endIconWrapper: "top-1/2 -translate-y-1/2",
        field: [
          "h-full border-b border-blue-200",
          "pt-4 pb-1.5 px-3 text-sm text-blue-700",
          "focus:border-pink-500 ",
        ],
        title: [
          "text-blue-400",
          "peer-placeholder-shown:text-blue-500",
          "peer-focus:text-pink-500",
        ],
      },
      outline: {
        container: "flex items-center",
        field: [
          "rounded-md border border-blue-300",
          "px-3 py-3",
          "text-sm text-neutral-800 font-medium",
          "focus:border-2 focus:border-pink-500 ",
        ],
        title: [
          "text-blue-500",
          "bg-white px-1",
          "peer-placeholder-shown:text-blue-500",
          "peer-focus:text-pink-500",
          "peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs",
        ],
      },
    },
    startIcon: {
      true: {
        field: "pl-10",
        title: "left-10",
      },
    },
    endIcon: {
      true: {
        field: "pr-10",
      },
    },
  },
  defaultVariants: {
    variant: "underline",
  },
});

export type InputVariantsProps = VariantProps<typeof input>;
