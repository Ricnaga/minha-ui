import { tv, type VariantProps } from "tailwind-variants";

export const cardTitle = tv({
  base: "text-xl",
});

export type CardTitleVariants = VariantProps<typeof cardTitle>;
