import { computed } from 'vue';
import { divider } from '@/theme';
export function useDivider(props) {
    const orientation = computed(() => props.orientation ?? 'horizontal');
    const dividerProps = computed(() => ({
        role: 'separator',
        'aria-orientation': orientation.value,
        class: divider({
            orientation: props.orientation,
            inset: props.inset,
            class: props.class,
        }),
    }));
    return { dividerProps };
}
