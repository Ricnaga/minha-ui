import { computed } from 'vue';
import { modalActions } from '@/theme';
import { useModal } from '../Modal/useModal';
export function useModalActions(props) {
    const { onClose } = useModal();
    const columns = computed(() => props.columns ?? 2);
    const align = computed(() => props.align ?? 'right');
    const modalActionsProps = computed(() => ({
        'data-testid': 'modal-actions',
        class: modalActions({ align: align.value, columns: columns.value, class: props.class }),
    }));
    return { modalActionsProps, onClose };
}
