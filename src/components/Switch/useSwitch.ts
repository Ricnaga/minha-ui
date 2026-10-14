import { switchControl } from '@/theme';
import type {
  SwitchChangeEvent,
  UseSwitchProps,
  UseSwitchReturn,
} from './switch.types';

const { container, track, label } = switchControl();

export function useSwitch(props: UseSwitchProps): UseSwitchReturn {
  const {
    size = 'medium',
    color = 'primary',
    disabled = false,
    label: labelContent,
    onChange,
    onCheckedChange,
    className,
    id,
    ...rest
  } = props;

  function handleChange(event: SwitchChangeEvent) {
    onChange?.(event);
    onCheckedChange?.(event.target.checked);
  }

  return {
    containerProps: {
      className: container({ className, disabled }),
    },
    trackProps: {
      ...rest,
      id,
      type: 'checkbox',
      role: 'switch',
      disabled,
      className: track({ size, color, disabled }),
      onChange: handleChange,
    },
    labelProps: {
      className: label({ size, disabled }),
      children: labelContent,
    },
    hasLabel: labelContent != null,
  };
}
