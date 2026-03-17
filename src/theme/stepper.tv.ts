import { tv, type VariantProps } from "tailwind-variants";

export const stepper = tv({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "flex-row gap-4",
      vertical: "flex-col gap-4",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type StepperVariants = VariantProps<typeof stepper>;