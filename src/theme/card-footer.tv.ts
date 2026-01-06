import { tv, type VariantProps } from "tailwind-variants";

export const cardFooter = tv({
  base: "grid gap-1 p-2",
});

export type CardFooterVariants = VariantProps<typeof cardFooter>;
