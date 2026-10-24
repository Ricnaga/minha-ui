import { computed } from 'vue';
import { scrollArea } from '@/theme';
export function useScrollArea(props) {
    const role = computed(() => props.role ?? 'region');
    const tabindex = computed(() => props.tabindex ?? 0);
    const scrollAreaProps = computed(() => ({
        role: role.value,
        tabindex: tabindex.value,
        class: scrollArea({
            orientation: props.orientation,
            size: props.size,
            class: props.class,
        }),
    }));
    return { scrollAreaProps };
}
