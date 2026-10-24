import { computed } from 'vue';

import { switchControl } from '@/theme';

const { container, track, label } = switchControl();

export function useSwitch(props: Record<string, unknown>) {
  const size = computed(() => (props.size as 'small' | 'medium') ?? 'medium');
  const color = computed(() => (props.color as 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error') ?? 'primary');
  const disabled = computed(() => !!props.disabled);
  const labelContent = computed(() => props.label);

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const onChange = props.onChange as ((e: Event) => void) | undefined;
    const onCheckedChange = props.onCheckedChange as ((checked: boolean) => void) | undefined;
    onChange?.(event);
    onCheckedChange?.(target.checked);
  }

  const containerProps = computed(() => ({
    class: container({ class: props.class as string | undefined, disabled: disabled.value }),
  }));

  const trackProps = computed(() => ({
    id: props.id as string | undefined,
    type: 'checkbox',
    role: 'switch',
    disabled: disabled.value,
    checked: props.checked as boolean | undefined,
    defaultChecked: props.defaultChecked as boolean | undefined,
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
