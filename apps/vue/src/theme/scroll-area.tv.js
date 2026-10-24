import { tv } from 'tailwind-variants';
export const scrollArea = tv({
    base: [
        'relative overscroll-contain',
        // Firefox — thumb transparente em repouso
        '[scrollbar-width:thin]',
        '[scrollbar-color:transparent_transparent]',
        'hover:[scrollbar-color:var(--color-neutral-600)_transparent]',
        'focus-within:[scrollbar-color:var(--color-neutral-600)_transparent]',
        // WebKit/Blink — thumb transparente em repouso
        '[&::-webkit-scrollbar]:rounded-full',
        '[&::-webkit-scrollbar-thumb]:rounded-full',
        '[&::-webkit-scrollbar-thumb]:bg-transparent',
        '[&::-webkit-scrollbar-thumb]:transition-colors',
        'hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600',
        'focus-within:[&::-webkit-scrollbar-thumb]:bg-neutral-600',
        '[&::-webkit-scrollbar-track]:bg-transparent',
    ],
    variants: {
        orientation: {
            vertical: 'overflow-y-auto overflow-x-hidden',
            horizontal: 'overflow-x-auto overflow-y-hidden',
            both: 'overflow-auto',
        },
        size: {
            sm: ['[&::-webkit-scrollbar]:w-1.5', '[&::-webkit-scrollbar]:h-1.5'],
            md: ['[&::-webkit-scrollbar]:w-2', '[&::-webkit-scrollbar]:h-2'],
            lg: ['[&::-webkit-scrollbar]:w-3', '[&::-webkit-scrollbar]:h-3'],
        },
    },
    defaultVariants: {
        orientation: 'vertical',
        size: 'md',
    },
});
