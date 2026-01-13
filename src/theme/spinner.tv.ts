import { tv, type VariantProps } from "tailwind-variants";

export const spinner = tv({
  slots: {
    container: "flex items-center justify-center",
    wrapper: "origin-center animate-spin",
    icon: [
      "fill-none animate-[dash_1.5s_ease-in-out_infinite]",
      "[stroke-dasharray:2,200] [stroke-dashoffset:0] [stroke-linecap:round]",
    ],
  },
  variants: {
    color: {
      primary: {
        icon: "stroke-sky-400",
      },
      secondary: {
        icon: "stroke-pink-400",
      },
      success: {
        icon: "stroke-emerald-400",
      },
      info: {
        icon: "stroke-blue-400",
      },
      warning: {
        icon: "stroke-amber-400",
      },
      error: {
        icon: "stroke-red-400",
      },
    },
    thickness: {
      sm: { icon: "stroke-[2px]" },
      md: { icon: "stroke-[6px]" },
      lg: { icon: "stroke-[10px]" },
    },
  },
  defaultVariants: {
    color: "primary",
    thickness: "md",
  },
});

const spinnerSheet = new CSSStyleSheet();

spinnerSheet.replaceSync(`
      @keyframes dash {
        0%   { stroke-dasharray: 1 200; stroke-dashoffset: 0; }
        50%  { stroke-dasharray: 90 200; stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -125px; }
      }
    `);

export { spinnerSheet };

export type SpinnerVariants = VariantProps<typeof spinner>;
