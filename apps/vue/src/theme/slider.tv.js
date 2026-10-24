import { tv } from 'tailwind-variants';
export const slider = tv({
    slots: {
        root: 'relative flex w-full touch-none items-center select-none',
        track: 'relative w-full rounded-full bg-neutral-200',
        range: 'absolute top-0 h-full rounded-full',
        thumb: [
            'group absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
            'border-2 border-current bg-white shadow-sm cursor-grab',
            "transition-shadow after:absolute after:-inset-2 after:content-['']",
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'active:cursor-grabbing',
        ],
        mark: 'absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-400',
        markLabel: 'absolute top-full mt-1 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500',
        bubble: [
            'absolute -translate-x-1/2 whitespace-nowrap rounded px-2 py-0.5',
            'text-xs font-semibold text-white pointer-events-none',
            'opacity-0 transition-opacity',
            'group-focus-visible:opacity-100 group-data-[dragging=true]:opacity-100',
        ],
    },
    variants: {
        size: {
            sm: {
                track: 'h-1',
                thumb: 'size-3',
                mark: 'size-1.5',
                bubble: '-top-6',
            },
            md: {
                track: 'h-1.5',
                thumb: 'size-4',
                mark: 'size-2',
                bubble: '-top-7',
            },
            lg: {
                track: 'h-2.5',
                thumb: 'size-6',
                mark: 'size-2.5',
                bubble: '-top-8',
            },
        },
        color: {
            primary: {
                range: 'bg-sky-500',
                thumb: 'text-sky-500 focus-visible:ring-sky-500/40',
                bubble: 'bg-sky-500',
            },
            secondary: {
                range: 'bg-pink-500',
                thumb: 'text-pink-500 focus-visible:ring-pink-500/40',
                bubble: 'bg-pink-500',
            },
            success: {
                range: 'bg-emerald-500',
                thumb: 'text-emerald-500 focus-visible:ring-emerald-500/40',
                bubble: 'bg-emerald-500',
            },
            info: {
                range: 'bg-blue-500',
                thumb: 'text-blue-500 focus-visible:ring-blue-500/40',
                bubble: 'bg-blue-500',
            },
            warning: {
                range: 'bg-amber-500',
                thumb: 'text-amber-500 focus-visible:ring-amber-500/40',
                bubble: 'bg-amber-500',
            },
            error: {
                range: 'bg-red-500',
                thumb: 'text-red-500 focus-visible:ring-red-500/40',
                bubble: 'bg-red-500',
            },
        },
        disabled: {
            true: {
                root: 'pointer-events-none opacity-60',
                thumb: 'cursor-not-allowed',
            },
        },
    },
    defaultVariants: {
        size: 'md',
        color: 'primary',
        disabled: false,
    },
});
