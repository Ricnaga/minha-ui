import { computed } from 'vue';
import { modalContent } from '@/theme';
export function useModalContent(props) {
    const modalContentProps = computed(() => ({
        ...props,
        class: modalContent({ class: props.class }),
    }));
    return { modalContentProps };
}
