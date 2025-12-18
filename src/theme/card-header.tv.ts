import { tv, type VariantProps } from "tailwind-variants";

export const cardHeader = tv({
  base: "grid gap-1 p-4",
});

export type CardHeaderVariants = VariantProps<typeof cardHeader>;
