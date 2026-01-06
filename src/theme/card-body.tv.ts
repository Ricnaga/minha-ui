import { tv, type VariantProps } from "tailwind-variants";

export const cardBody = tv({
  base: "grid gap-1 p-2",
});

export type CardBodyVariants = VariantProps<typeof cardBody>;
