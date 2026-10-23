import { tv } from 'tailwind-variants';

export const emptyState = tv({
  slots: {
    root: 'flex flex-col items-center justify-center gap-2 text-center',
    image: 'mb-2 text-neutral-300',
    title: 'text-base font-semibold text-neutral-900',
    message: 'max-w-sm text-sm text-neutral-500',
    action: 'mt-4',
  },
});

export type EmptyStateVariants = Record<never, never>;
