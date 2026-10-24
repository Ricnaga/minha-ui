import { computed } from 'vue';
import { chip, chipClose } from '@/theme';
function getSlotText(slots) {
    const node = slots.default?.()[0];
    const text = node && 'children' in node ? node.children : undefined;
    return typeof text === 'string' ? text : undefined;
}
export function useChip(props, slots) {
    const color = computed(() => props.color ?? 'primary');
    const size = computed(() => props.size ?? 'medium');
    const rounded = computed(() => props.rounded ?? 'full');
    const chipProps = computed(() => ({
        class: chip({
            color: color.value,
            rounded: rounded.value,
            size: size.value,
            class: props.class,
        }),
    }));
    const hasRemove = computed(() => Boolean(props.onRemove));
    const removeButtonProps = computed(() => {
        const label = getSlotText(slots);
        return {
            type: 'button',
            class: chipClose(),
            'aria-label': label ? `Remover ${label}` : 'Remover',
            onClick: (event) => {
                event.stopPropagation();
                props.onRemove?.();
            },
        };
    });
    return { chipProps, hasRemove, removeButtonProps };
}
