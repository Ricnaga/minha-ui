import { computed } from 'vue';
import { useRipple } from '@/composables';
import { button, buttonLabel } from '@/theme';
export function useButton(props) {
    const { handleRipple } = useRipple();
    function handleClick(event) {
        handleRipple(event);
    }
    const isLoading = computed(() => props.isLoading ?? false);
    const buttonProps = computed(() => ({
        type: props.type ?? 'button',
        disabled: isLoading.value || props.disabled,
        class: button({
            variant: props.variant,
            color: props.color,
            size: props.size,
            radius: props.radius,
            isLoading: isLoading.value,
            class: props.class,
        }),
        onClick: handleClick,
    }));
    const labelProps = {
        class: buttonLabel(),
    };
    return { buttonProps, isLoading, labelProps };
}
