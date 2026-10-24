import { computed } from 'vue';
import { breadcrumb } from '@/theme';
export function useBreadcrumbLink(props) {
    const { link } = breadcrumb();
    const linkProps = computed(() => ({ class: link({ class: props.class }) }));
    return { linkProps };
}
