import { tv, type VariantProps } from 'tailwind-variants';

export const stepperItem = tv({
  slots: {
    base: 'flex items-center gap-2',
    indicatorContainer:
      'flex items-center justify-center rounded-full w-8 h-8 shrink-0 bg-gray-200',
    indicatorContent: '',
    content: 'flex flex-col',
    title: '',
    description: '',
    connector: '',
  },
  variants: {
    state: {
      completed: {
        indicatorContainer: 'bg-emerald-500 text-white',
        title: 'text-gray-700',
        connector: 'bg-emerald-500',
      },
      active: {
        indicatorContainer: 'bg-sky-600 text-white',
        title: 'text-gray-900 font-semibold',
        connector: 'bg-gray-200',
      },
      pending: {
        indicatorContainer: 'bg-gray-200 text-gray-500',
        title: 'text-gray-500',
        connector: 'bg-gray-200',
      },
    },
    orientation: {
      horizontal: {
        connector: 'w-8 h-0.5 mx-2',
      },
      vertical: {
        connector: 'w-0.5 h-8 mx-4',
      },
    },
    isClickable: {
      true: 'cursor-pointer',
      false: 'cursor-default',
    },
    isLast: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      state: 'completed',
      orientation: 'horizontal',
      class: {
        indicatorContent: 'text-white',
      },
    },
    {
      state: 'active',
      orientation: 'horizontal',
      class: {
        indicatorContent: 'text-white',
      },
    },
    {
      state: 'pending',
      orientation: 'horizontal',
      class: {
        indicatorContent: 'text-gray-500',
      },
    },
  ],
  defaultVariants: {
    state: 'pending',
    orientation: 'horizontal',
    isClickable: true,
    isLast: false,
  },
});

export type StepperItemVariants = VariantProps<typeof stepperItem>;
