import { tv, type VariantProps } from "tailwind-variants";

export const cardDescription = tv({
  base: "text-[1.125rem]",
});

export type CardDescriptionVariants = VariantProps<typeof cardDescription>;
