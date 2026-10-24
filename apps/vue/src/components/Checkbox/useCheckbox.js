import { computed } from 'vue';
import { checkbox } from '@/theme';
export function useCheckbox(props) {
    const checkBoxProps = computed(() => {
        return {
            type: 'checkbox',
            class: checkbox({
                disabled: Boolean(props.disabled),
                indeterminate: Boolean(props.indeterminate),
                class: props.class,
            }),
        };
    });
    return { checkBoxProps };
}
