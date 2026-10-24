import { computed } from 'vue';
import { drawerBody } from '@/theme';
export function useDrawerBody(props) {
    const padding = computed(() => props.padding ?? 'md');
    const scroll = computed(() => props.scroll ?? 'auto');
    const background = computed(() => props.background ?? 'default');
    const drawerBodyProps = computed(() => ({
        ...props,
        class: drawerBody({ background: background.value, padding: padding.value, scroll: scroll.value, class: props.class }),
    }));
    return { drawerBodyProps };
}
