import { tv, type VariantProps } from "tailwind-variants";

export const cardSubtitle = tv({
  base: "text-lg",
});

export type CardSubtitleVariants = VariantProps<typeof cardSubtitle>;
