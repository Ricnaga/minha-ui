import { tv, type VariantProps } from "tailwind-variants";

export const inputPassword = tv({
  slots: {
    lockButton: [
      "hover:bg-neutral-200 p-1 rounded-full",
      "transition-all cursor-pointer",
    ],
  },
});

export type InputPasswordVariants = VariantProps<typeof inputPassword>;
