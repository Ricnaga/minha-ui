import { tv, type VariantProps } from "tailwind-variants";

export const cardHeader = tv({
  base: "grid gap-1 p-2",
});

export type CardHeaderVariants = VariantProps<typeof cardHeader>;
