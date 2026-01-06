import { tv, type VariantProps } from "tailwind-variants";

export const cardActions = tv({
  base: "grid gap-1 p-2",
});

export type CardActionsVariants = VariantProps<typeof cardActions>;
