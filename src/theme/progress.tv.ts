import { tv, type VariantProps } from "tailwind-variants";

// Definição do Progress com slots
export const progress = tv({
  slots: {
    wrapper: "w-full rounded-full relative bg-black/20 overflow-hidden",
    core: ["h-full rounded-full transition-all"],
  },
  variants: {
    size: {
      sm: { wrapper: "h-2", core: "h-2" },
      md: { wrapper: "h-3", core: "h-3" },
      lg: { wrapper: "h-4", core: "h-4" },
    },
    color: {
      primary: { core: "bg-sky-600" },
      secondary: { core: "bg-pink-600" },
      success: { core: "bg-emerald-600" },
      info: { core: "bg-blue-600" },
      warning: { core: "bg-amber-600" },
      error: { core: "bg-red-600" },
    },
    animated: {
      true: { core: "animate-[moving_1s_ease-in-out_infinite]" },
      false: { core: "" },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    animated: true,
  },
});

// Keyframes da animação
const progressSheet = new CSSStyleSheet();

progressSheet.replaceSync(`
  @keyframes moving {
    0%, 100% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
  }
`);

export { progressSheet };

export type ProgressVariants = VariantProps<typeof progress>;
