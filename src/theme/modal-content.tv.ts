import { tv, type VariantProps } from "tailwind-variants";

export const modalContent = tv({
  base: "overflow-y-auto p-4",
});

export type ModalContentVariants = VariantProps<typeof modalContent>;
