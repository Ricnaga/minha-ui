import { computed } from 'vue';
import { modalFooter } from '@/theme';
export function useModalFooter(props) {
    const padding = computed(() => props.padding ?? 'md');
    const align = computed(() => props.align ?? 'right');
    const modalFooterProps = computed(() => ({
        ...props,
        class: modalFooter({ align: align.value, padding: padding.value }),
    }));
    return { modalFooterProps };
}
