import { tv, type VariantProps } from "tailwind-variants";

export const modalContent = tv({
  base: "overflow-y-auto p-4 max-h-[calc(80vh-2rem)]",
});

export type ModalContentVariants = VariantProps<typeof modalContent>;
