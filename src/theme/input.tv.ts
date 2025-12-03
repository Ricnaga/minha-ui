import { tv, type VariantProps } from "tailwind-variants";

export const input = tv({
  slots: {
    container: "",
    startIconWrapper: "",
    endIconWrapper: "",
    field: "peer",
    title: "",
  },
  variants: {
    variant: {
      underline: {
        container: "relative h-11 w-full min-w-50",
        startIconWrapper:
          "absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none",
        endIconWrapper:
          "absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none",
        field: [
          "h-full w-full border-b border-blue-gray-200 bg-transparent",
          "pt-4 pb-1.5 px-3 text-sm text-blue-gray-700",
          "focus:border-pink-500 focus:outline-none",
          "transition-all",
        ],
        title: [
          "absolute left-3 -top-2.5 text-[11px] text-blue-gray-400",
          "transition-all",
          "peer-placeholder-shown:text-sm",
          "peer-placeholder-shown:top-2.5",
          "peer-placeholder-shown:text-blue-gray-500",
          "peer-focus:-top-2.5 peer-focus:text-[11px]",
          "peer-focus:text-pink-500",
        ],
      },
      outline: {},
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
