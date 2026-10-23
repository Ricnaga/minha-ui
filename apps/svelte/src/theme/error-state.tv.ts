import { tv } from 'tailwind-variants';

export const errorState = tv({
  slots: {
    root: 'flex flex-col items-center justify-center gap-2 text-center',
    image: 'mb-2 text-red-400',
    title: 'text-base font-semibold text-neutral-900',
    message: 'max-w-sm text-sm text-neutral-500',
    action: 'mt-4',
  },
});

export type ErrorStateVariants = Record<never, never>;
