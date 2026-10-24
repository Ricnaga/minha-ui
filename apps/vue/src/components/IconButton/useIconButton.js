import { computed } from 'vue';
import { useRipple } from '@/composables';
import { iconButton } from '@/theme';
export function useIconButton(props) {
    const { handleRipple } = useRipple();
    const isLoading = computed(() => props.isLoading ?? false);
    const handleClick = (event) => {
        handleRipple(event);
        props.onClick?.(event);
    };
    const iconButtonProps = computed(() => {
        const iconButtonClasses = iconButton({
            size: props.size,
            radius: props.radius,
            variant: props.variant,
            color: props.color,
            isLoading: isLoading.value,
            class: props.class,
        });
        return {
            disabled: isLoading.value || props.disabled,
            type: props.type ?? 'button',
            class: iconButtonClasses,
            onClick: handleClick,
        };
    });
    return { iconButtonProps, isLoading };
}
