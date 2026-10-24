import { computed } from 'vue';
import { breadcrumb } from '@/theme';
export function useBreadcrumbItem(props) {
    const { item } = breadcrumb();
    const itemProps = computed(() => ({ class: item({ class: props.class }) }));
    return { itemProps };
}
