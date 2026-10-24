import { tv } from 'tailwind-variants';
export const pagination = tv({
    slots: {
        base: 'grid items-center space-y-2',
        wrapper: 'flex items-center justify-center gap-1 sm:gap-2',
        items: 'flex items-center gap-0.5 sm:gap-1',
        icons: [
            'fill-indigo-500 hover:fill-sky-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded',
        ],
        description: 'text-center text-xs text-neutral-800 sm:text-sm',
    },
});
export const paginationButton = tv({
    base: [
        'transition-colors duration-300 cursor-pointer',
        'grid items-center justify-center',
        'size-10 rounded-full bg-sky-100 text-sky-700 hover:bg-sky-200 focus-visible:ring-2',
        'sm:size-8',
        'focus-visible:ring-sky-500 focus-visible:outline-none',
    ],
});
export const paginationControls = tv({
    slots: {
        ellipsis: 'size-10 sm:size-8 text-neutral-500 flex items-center justify-center',
        buttonPage: [
            'size-10 sm:size-8',
            'p-2',
            'rounded-full',
            'transition-all',
            'duration-300',
            'cursor-pointer',
            'flex items-center justify-center',
        ],
    },
    variants: {
        isCurrentPage: {
            true: {
                buttonPage: [
                    'size-11 sm:size-9',
                    'scale-110',
                    'bg-sky-600',
                    'text-white',
                    'rounded-full',
                ],
            },
            false: {
                buttonPage: [
                    'bg-neutral-100 text-neutral-700',
                    'hover:bg-sky-100 hover:text-sky-700',
                ],
            },
        },
    },
    defaultVariants: {
        isCurrentPage: false,
    },
});
