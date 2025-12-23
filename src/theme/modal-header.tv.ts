import { tv, type VariantProps } from "tailwind-variants";

export const modalHeader = tv({
  slots: {
    wrapper: ["relative py-6 grid items-center"],
    closeButton: [
      "p-2 rounded-full transition-all",
      "bg-sky-200/80 hover:bg-sky-200 cursor-pointer absolute -top-3 -right-3",
    ],
  },
});

export type ModalHeaderVariants = VariantProps<typeof modalHeader>;
