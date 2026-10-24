import { computed } from 'vue';
import { input } from '@/theme';
const { container, startIconWrapper, endIconWrapper, field, title, inputWrapper, } = input();
export function useInput(props) {
    const variant = computed(() => props.variant ?? 'outline');
    const id = computed(() => props.id ?? 'input-fixed-id');
    const hasStartIcon = computed(() => !!props.startIcon);
    const hasEndIcon = computed(() => !!props.endIcon);
    const containerProps = computed(() => ({
        class: container({
            class: props.class,
            variant: variant.value,
        }),
    }));
    const startIconProps = computed(() => ({
        class: startIconWrapper({ variant: variant.value }),
    }));
    const endIconProps = computed(() => ({
        class: endIconWrapper({ variant: variant.value }),
    }));
    const inputWrapperProps = computed(() => ({
        class: inputWrapper({ variant: variant.value }),
    }));
    const inputProps = computed(() => ({
        id: id.value,
        type: props.type ?? 'text',
        placeholder: ' ',
        class: field({
            variant: variant.value,
            endIcon: hasEndIcon.value,
            startIcon: hasStartIcon.value,
        }),
    }));
    const labelProps = computed(() => ({
        for: id.value,
        class: title({ variant: variant.value, startIcon: hasStartIcon.value }),
    }));
    return {
        inputWrapperProps,
        hasEndIcon,
        hasStartIcon,
        containerProps,
        startIconProps,
        endIconProps,
        inputProps,
        labelProps,
        id,
    };
}
