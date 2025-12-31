import { tv, type VariantProps } from "tailwind-variants";

export const rangeCalendar = tv({
  slots: {
    headerWrapper: ["flex items-center justify-between", "p-2 text-sm"],

    headerButton: [
      "transition-all rounded-full",
      "bg-sky-50 p-2 hover:bg-sky-100",
      "cursor-pointer",
    ],

    headerLabel: ["capitalize font-medium"],

    gridWrapper: ["grid grid-cols-7", "auto-rows-[1.75rem]", "p-2"],

    gridDay: [
      "relative size-7",
      "flex items-center justify-center",
      "text-sm cursor-pointer",
      "overflow-hidden",
      "hover:bg-sky-400/20",
    ],
  },

  variants: {
    isOutsideMonth: {
      true: {
        gridDay: ["text-neutral-400 opacity-40"],
      },
    },

    // dias entre start e end
    isInRange: {
      true: {
        gridDay: [
          "before:content-['']",
          "before:absolute before:inset-0",
          "before:bg-sky-200",
          "before:z-0",
        ],
      },
    },

    // início do range
    isRangeStart: {
      true: {
        gridDay: [
          "text-white",

          // fundo do range (metade direita)
          "before:content-['']",
          "before:absolute before:inset-y-0",
          "before:left-1/2 before:right-0",
          "before:bg-sky-200",
          "before:z-0",

          // bolinha
          "after:content-['']",
          "after:absolute after:inset-0",
          "after:rounded-full after:bg-sky-500",
          "after:z-10",
        ],
      },
    },

    // fim do range
    isRangeEnd: {
      true: {
        gridDay: [
          "text-white",

          // fundo do range (metade esquerda)
          "before:content-['']",
          "before:absolute before:inset-y-0",
          "before:left-0 before:right-1/2",
          "before:bg-sky-200",
          "before:z-0",

          // bolinha
          "after:content-['']",
          "after:absolute after:inset-0",
          "after:rounded-full after:bg-sky-500",
          "after:z-10",
        ],
      },
    },

    isSelected: {
      true: {
        gridDay: [
          "text-white",
          "after:content-['']",
          "after:absolute after:inset-0",
          "after:rounded-full after:bg-sky-500",
          "after:z-10",
        ],
      },
    },
  },

  defaultVariants: {
    isOutsideMonth: false,
    isRangeStart: false,
    isRangeEnd: false,
    isInRange: false,
    isSelected: false,
  },
});

export type RangeCalendarVariants = VariantProps<typeof rangeCalendar>;
