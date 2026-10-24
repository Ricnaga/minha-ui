import { computed, provide } from 'vue';
import { useContext } from '@/composables';
import { breadcrumb } from '@/theme';
export const breadcrumbContext = Symbol('breadcrumb');
export function useBreadcrumbProvider(props) {
    const { nav } = breadcrumb();
    const context = {
        size: computed(() => props.size ?? 'md'),
        separator: computed(() => props.separator),
    };
    provide(breadcrumbContext, context);
    const p = props;
    const breadcrumbProps = computed(() => ({
        'aria-label': p['aria-label'] ?? p.ariaLabel ?? 'Breadcrumb',
        class: nav({ size: context.size.value }),
    }));
    return { breadcrumbProps, context };
}
export function useBreadcrumb() {
    return useContext({
        context: breadcrumbContext,
        hookName: useBreadcrumb.name,
        providerName: 'Breadcrumb',
    });
}
