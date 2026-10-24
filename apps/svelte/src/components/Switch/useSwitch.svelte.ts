import { switchControl } from '@/theme';

const { container, track, label } = switchControl();

export function useSwitch(getProps: () => Record<string, unknown>) {
  const getSize = () => ((getProps().size as 'small' | 'medium') ?? 'medium');
  const getColor = () => ((getProps().color as 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error') ?? 'primary');
  const getDisabled = () => !!getProps().disabled;
  const getLabel = () => getProps().label;

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const onChange = getProps().onChange as ((e: Event) => void) | undefined;
    const onCheckedChange = getProps().onCheckedChange as ((v: boolean) => void) | undefined;
    onChange?.(event);
    onCheckedChange?.(target.checked);
  }

  return {
    get containerProps() {
      const props = getProps();
      return { class: container({ class: props.class as string | undefined, disabled: getDisabled() }) };
    },
    get trackProps() {
      const props = getProps();
      return {
        id: props.id as string | undefined,
        type: 'checkbox',
        role: 'switch',
        disabled: getDisabled(),
        checked: props.checked,
        defaultChecked: props.defaultChecked,
        class: track({ size: getSize(), color: getColor(), disabled: getDisabled() }),
        onchange: handleChange,
      };
    },
    get labelProps() {
      return { class: label({ size: getSize(), disabled: getDisabled() }) };
    },
    get hasLabel() {
      return getLabel() != null;
    },
    get labelContent() {
      return getLabel();
    },
  };
}
