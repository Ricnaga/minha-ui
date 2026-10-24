import { computed } from 'vue';
import { breadcrumb } from '@/theme';
export function useBreadcrumbPage(props) {
    const { page } = breadcrumb();
    const pageProps = computed(() => ({
        'aria-current': 'page',
        class: page({ class: props.class }),
    }));
    return { pageProps };
}
