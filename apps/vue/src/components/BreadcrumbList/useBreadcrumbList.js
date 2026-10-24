import { computed } from 'vue';
import { breadcrumb } from '@/theme';
import { useBreadcrumb } from '../Breadcrumb/useBreadcrumb';
export function useBreadcrumbList(props) {
    const { size } = useBreadcrumb();
    const { list } = breadcrumb();
    const listProps = computed(() => ({
        class: list({ size: size.value, class: props.class }),
    }));
    return { listProps };
}
