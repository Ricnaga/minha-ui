import { tv } from 'tailwind-variants';
export const breadcrumb = tv({
    slots: {
        nav: 'w-full',
        list: 'flex flex-wrap items-center text-neutral-500',
        item: 'inline-flex items-center',
        link: [
            'rounded transition-colors hover:text-neutral-900',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40',
        ],
        page: 'font-semibold text-neutral-900',
        separator: 'inline-flex shrink-0 items-center text-neutral-400 select-none',
    },
    variants: {
        size: {
            sm: {
                list: 'gap-0.5 text-xs sm:gap-1',
                separator: 'text-xs',
            },
            md: {
                list: 'gap-1 text-sm sm:gap-1.5',
                separator: 'text-sm',
            },
            lg: {
                list: 'gap-1.5 text-base sm:gap-2',
                separator: 'text-base',
            },
        },
    },
    defaultVariants: {
        size: 'md',
    },
});
