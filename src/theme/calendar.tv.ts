import { tv, type VariantProps } from "tailwind-variants";

export const calendar = tv({
  slots: {
    headerWrapper: ["flex items-center justify-between p-2"],
    headerButton: [
      "transition-all rounded-full bg-sky-50 p-2 hover:bg-sky-100 cursor-pointer",
    ],
    headerLabel: ["capitalize font-medium"],
    gridWrapper: ["grid grid-cols-7 gap-1 p-2"],
    gridDay: ["size-8 rounded-full text-sm transition-colors cursor-pointer"],
  },
  variants: {
    isSelected: {
      true: {
        gridDay: "bg-sky-400 text-white",
      },
    },
    hasNotSelectedAndIsOutsideMonth: {
      true: {
        gridDay: "text-neutral-400 opacity-40",
      },
    },
    hasNotSelectedAndHasNotOutsideMonth: {
      true: {
        gridDay: "text-neutral-400 opacity-40",
      },
    },
  },
  defaultVariants: {
    hasNotSelectedAndHasNotOutsideMonth: false,
    hasSelectedAndIsOutsideMonth: false,
    isSelected: false,
  },
});

export type CalendarVariants = VariantProps<typeof calendar>;
