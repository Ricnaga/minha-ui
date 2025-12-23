import { tv, type VariantProps } from "tailwind-variants";

export const modalActions = tv({
  base: "grid grid-cols-2 gap-2",
});

export type ModalActionsVariants = VariantProps<typeof modalActions>;
