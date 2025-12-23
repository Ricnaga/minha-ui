import { tv, type VariantProps } from "tailwind-variants";

export const modalFooter = tv({
    base: "p-4"
});

export type ModalFooterVariants = VariantProps<typeof modalFooter>;
