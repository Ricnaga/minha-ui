import { tv } from 'tailwind-variants';
export const drawerHeader = tv({
    slots: {
        wrapper: [
            'relative grid items-center',
            'py-2', // padding vertical padrão
            'px-4', // padding horizontal padrão
        ],
        closeButton: [
            'p-2 rounded-full transition-all',
            'absolute -top-3 -right-3',
            'bg-sky-200/80 hover:bg-sky-200 cursor-pointer',
            // Alvo de toque mínimo de 44px e foco visível.
            'min-h-11 min-w-11 grid place-items-center',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
        ],
    },
    variants: {
        size: {
            sm: {
                wrapper: 'py-1 px-2 text-sm',
                closeButton: 'p-1',
            },
            md: {
                wrapper: 'py-2 px-4 text-base',
                closeButton: 'p-2',
            },
            lg: {
                wrapper: 'py-3 px-6 text-lg',
                closeButton: 'p-3',
            },
        },
        align: {
            left: { wrapper: 'justify-start' },
            center: { wrapper: 'justify-center' },
            right: { wrapper: 'justify-end' },
        },
        closeColor: {
            default: { closeButton: 'bg-sky-200/80 hover:bg-sky-200' },
            red: { closeButton: 'bg-pink-200/80 hover:bg-pink-200' },
            gray: { closeButton: 'bg-neutral-200/80 hover:bg-neutral-200' },
        },
    },
    defaultVariants: {
        size: 'md',
        align: 'center',
        closeColor: 'default',
    },
});
