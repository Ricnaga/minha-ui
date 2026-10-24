import { computed, onMounted, onUnmounted, ref } from 'vue';
import { modalContainer } from '@/theme';
import { useModal } from '../Modal/useModal';
export function useModalContainer(props) {
    const { onClose, isOpen, ariaLabel } = useModal();
    const radius = computed(() => props.radius ?? 'md');
    const shadow = computed(() => props.shadow ?? 'md');
    const padding = computed(() => props.padding ?? 'md');
    const modalContainerRef = ref(null);
    function onClick(event) {
        if (event.target === modalContainerRef.value) {
            onClose();
        }
    }
    onMounted(() => {
        document.addEventListener('mousedown', onClick);
    });
    onUnmounted(() => {
        document.removeEventListener('mousedown', onClick);
    });
    const modalContainerProps = computed(() => ({
        ref: modalContainerRef,
        role: 'dialog',
        'aria-modal': 'true',
        'aria-label': ariaLabel,
        'data-testid': 'modal-container',
        class: modalContainer({ radius: radius.value, shadow: shadow.value, isOpen, padding: padding.value }),
    }));
    return { modalContainerProps };
}
