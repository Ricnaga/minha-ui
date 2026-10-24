import { computed } from 'vue';
import { tooltip } from '@/theme';
import { useDisclosure } from '@/composables';
export function useTooltip(props) {
    const color = computed(() => props.color ?? 'black');
    const position = computed(() => props.position ?? 'top');
    const { handleClose, handleOpen, isOpen } = useDisclosure();
    const wrapperProps = computed(() => ({
        class: 'relative inline-block',
        onMouseenter: handleOpen,
        onMouseleave: handleClose,
        onFocus: handleOpen,
        onBlur: handleClose,
    }));
    const tooltipProps = computed(() => ({
        role: 'tooltip',
        'aria-hidden': !isOpen.value,
        inert: !isOpen.value,
        class: tooltip({
            color: color.value,
            position: position.value,
            class: props.class,
        }),
    }));
    return { wrapperProps, content: computed(() => props.content), tooltipProps };
}
