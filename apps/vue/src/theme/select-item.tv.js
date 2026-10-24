import { tv } from 'tailwind-variants';
export const selectItem = tv({
    slots: {
        list: [
            'grid gap-2 w-full',
            'max-h-[min(15rem,40dvh)] overflow-y-auto overscroll-contain',
        ],
        item: [
            'cursor-pointer p-2 transition-all truncate',
            'hover:bg-sky-400/20 rounded-md active:bg-sky-400/40 hover:font-semibold text-sm',
        ],
    },
    variants: {
        isSelected: {
            true: {
                item: 'bg-sky-400/20 font-semibold',
            },
        },
    },
});
