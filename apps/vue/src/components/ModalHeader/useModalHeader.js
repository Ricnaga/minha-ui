import { computed } from 'vue';
import { modalHeader } from '@/theme';
import { useModal } from '../Modal/useModal';
const { closeButton, wrapper } = modalHeader();
export function useModalHeader(props) {
    const { onClose } = useModal();
    const padding = computed(() => props.padding ?? 'lg');
    const align = computed(() => props.align ?? 'left');
    const modalHeaderProps = computed(() => ({
        ...props,
        class: wrapper({ align: align.value, padding: padding.value }),
    }));
    const closeButtonProps = computed(() => ({
        type: 'button',
        'aria-label': 'Fechar',
        class: closeButton(),
        onClick: onClose,
    }));
    return { modalHeaderProps, closeButtonProps };
}
