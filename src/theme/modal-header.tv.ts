import { tv, type VariantProps } from "tailwind-variants";

export const modalHeader = tv({
  slots: {
    wrapper: [
      "relative pt-10 px-6", // pt-10 cria espaço para o botão flutuante acima do título
    ],
    title: ["text-lg font-semibold"],
    closeButton: [
      "absolute top-2 right-2 p-2 rounded-full transition-all",
      "bg-sky-200/80 hover:bg-sky-200 cursor-pointer",
    ],
  },
  variants: {
    padding: {
      sm: { wrapper: "pt-6 px-4" },
      md: { wrapper: "pt-8 px-6" },
      lg: { wrapper: "pt-10 px-8" },
      xl: { wrapper: "pt-12 px-10" },
    },
    align: {
      left: { wrapper: "text-left" },
      center: { wrapper: "text-center" },
      right: { wrapper: "text-right" },
    },
  },
  defaultVariants: {
    padding: "lg",
    align: "left",
  },
});

export type ModalHeaderVariants = VariantProps<typeof modalHeader>;
