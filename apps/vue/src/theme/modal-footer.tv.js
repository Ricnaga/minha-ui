import { tv } from 'tailwind-variants';
export const modalFooter = tv({
    base: ['flex gap-2', 'pb-[calc(0.5rem+env(safe-area-inset-bottom))] sm:pb-0'],
    variants: {
        padding: {
            sm: 'p-2',
            md: 'p-4',
            lg: 'p-6',
            xl: 'p-8',
        },
        align: {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end',
        },
    },
    defaultVariants: {
        padding: 'md',
        align: 'right',
    },
});
