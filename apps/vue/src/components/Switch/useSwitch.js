import { computed } from 'vue';
import { switchControl } from '@/theme';
const { container, track, label } = switchControl();
export function useSwitch(props) {
    const size = computed(() => props.size ?? 'medium');
    const color = computed(() => props.color ?? 'primary');
    const disabled = computed(() => !!props.disabled);
    const labelContent = computed(() => props.label);
    function handleChange(event) {
        const target = event.target;
        const onChange = props.onChange;
        const onCheckedChange = props.onCheckedChange;
        onChange?.(event);
        onCheckedChange?.(target.checked);
    }
    const containerProps = computed(() => ({
        class: container({ class: props.class, disabled: disabled.value }),
    }));
    const trackProps = computed(() => ({
        id: props.id,
        type: 'checkbox',
        role: 'switch',
        disabled: disabled.value,
        checked: props.checked,
        defaultChecked: props.defaultChecked,
        class: track({ size: size.value, color: color.value, disabled: disabled.value }),
        onChange: handleChange,
    }));
    const labelProps = computed(() => ({
        class: label({ size: size.value, disabled: disabled.value }),
    }));
    return {
        containerProps,
        trackProps,
        labelProps,
        hasLabel: computed(() => labelContent.value != null),
        labelContent,
    };
}
