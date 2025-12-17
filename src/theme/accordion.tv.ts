// https://tailwindflex.com/@abhirajk/accordion-2
// https://tailwindflex.com/@nikola-malecka/accordion-faq-3

import { tv, type VariantProps } from "tailwind-variants";

export const accordion = tv({
  slots: {
    accordionItem:
      "rounded-lg shadow-lg shadow-neutral-200 overflow-hidden w-full transition-colors bg-white",
    accordionHeader: "text-neutral-50 font-medium",
    accordionContent: "p-2",
  },
  variants: {
    variant: {
      primary: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-sky-600/60 to-sky-600",
        accordionContent: "bg-linear-to-tr from-sky-50/40 to-sky-50",
      },
      secondary: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-pink-600/60 to-pink-600",
        accordionContent: "bg-linear-to-tr from-pink-50/40 to-pink-50",
      },
      success: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-emerald-600/60 to-emerald-600",
        accordionContent: "bg-linear-to-tr from-emerald-50/40 to-emerald-50",
      },
      info: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-blue-600/60 to-blue-600",
        accordionContent: "bg-linear-to-tr from-blue-50/40 to-blue-50",
      },
      warning: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-amber-600/60 to-amber-600",
        accordionContent: "bg-linear-to-tr from-amber-50/40 to-amber-50",
      },
      error: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-red-600/60 to-red-600",
        accordionContent: "bg-linear-to-tr from-red-50/40 to-red-50",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type AccordionVariants = VariantProps<typeof accordion>;
