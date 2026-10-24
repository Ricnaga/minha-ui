import { tv } from 'tailwind-variants';

export const calendar = tv({
  slots: {
    headerWrapper: [
      'flex items-center justify-between text-center gap-2 p-2 text-sm',
    ],
    headerButton: [
      'transition-all rounded-full',
      'bg-sky-50 p-1 hover:bg-sky-100 cursor-pointer ',
    ],
    headerLabel: ['capitalize font-medium'],
    gridWrapper: ['grid grid-cols-7 gap-1'],
    gridDay: [
      'size-6 rounded-full text-sm transition-colors cursor-pointer',
      'hover:bg-sky-400/20',
    ],
  },
  variants: {
    isSelected: {
      true: {
        gridDay: 'bg-sky-700 text-white hover:bg-sky-800',
      },
    },
    hasNotSelectedAndIsOutsideMonth: {
      true: {
        gridDay: 'text-neutral-500',
      },
    },
    hasNotSelectedAndHasNotOutsideMonth: {
      true: {
        gridDay: 'text-neutral-500',
      },
    },
  },
  defaultVariants: {
    hasNotSelectedAndHasNotOutsideMonth: false,
    isSelected: false,
  },
});

export type CalendarIsSelected = keyof typeof calendar.variants.isSelected;
export type CalendarHasNotSelectedAndIsOutsideMonth = keyof typeof calendar.variants.hasNotSelectedAndIsOutsideMonth;
export type CalendarHasNotSelectedAndHasNotOutsideMonth = keyof typeof calendar.variants.hasNotSelectedAndHasNotOutsideMonth;
export type CalendarVariants = {
  isSelected?: CalendarIsSelected;
  hasNotSelectedAndIsOutsideMonth?: CalendarHasNotSelectedAndIsOutsideMonth;
  hasNotSelectedAndHasNotOutsideMonth?: CalendarHasNotSelectedAndHasNotOutsideMonth;
};
