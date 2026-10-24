import { computed } from 'vue';
import { drawerFooter } from '@/theme';
export function useDrawerFooter(props) {
    const align = computed(() => props.align ?? 'end');
    const padding = computed(() => props.padding ?? 'md');
    const border = computed(() => props.border ?? 'none');
    const drawerFooterProps = computed(() => ({
        ...props,
        class: drawerFooter({ align: align.value, border: border.value, padding: padding.value, class: props.class }),
    }));
    return { drawerFooterProps };
}
