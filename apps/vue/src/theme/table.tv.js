import { tv } from 'tailwind-variants';
export const table = tv({
    slots: {
        root: 'relative w-full min-w-0 overflow-x-auto',
        table: 'w-full border-collapse text-sm text-neutral-700',
        header: 'border-b border-neutral-200',
        headerRow: '',
        head: 'whitespace-nowrap align-middle font-semibold text-neutral-900',
        body: '',
        row: 'border-b border-neutral-200',
        cell: 'align-middle',
        footer: 'border-t border-neutral-200 bg-neutral-50 font-medium',
        stateCell: 'px-4 py-10 text-center',
        paginationWrapper: 'flex justify-center pt-4',
    },
    variants: {
        align: {
            left: { head: 'text-left', cell: 'text-left' },
            center: { head: 'text-center', cell: 'text-center' },
            right: { head: 'text-right', cell: 'text-right' },
        },
        size: {
            // Mobile-first: paddings compactos, expandindo em telas >= sm.
            sm: {
                head: 'h-8 px-2 text-xs',
                cell: 'px-2 py-1.5 sm:py-2',
            },
            md: {
                head: 'h-9 px-2 text-xs sm:h-10 sm:px-3 sm:text-sm',
                cell: 'px-2 py-2 text-xs sm:px-3 sm:py-3 sm:text-sm',
            },
            lg: {
                head: 'h-10 px-3 text-sm sm:h-12 sm:px-4 sm:text-base',
                cell: 'px-3 py-2.5 text-sm sm:px-4 sm:py-4 sm:text-base',
            },
        },
        bordered: {
            true: {
                table: 'border border-neutral-200',
                head: 'border border-neutral-200',
                cell: 'border border-neutral-200',
                footer: 'border border-neutral-200',
            },
        },
        striped: {
            true: { row: 'even:bg-neutral-50' },
        },
        hover: {
            true: { row: 'transition-colors hover:bg-neutral-100' },
        },
        stickyHeader: {
            true: { head: 'sticky top-0 z-10 bg-white' },
        },
    },
    defaultVariants: {
        align: 'left',
        size: 'md',
        hover: true,
    },
});
