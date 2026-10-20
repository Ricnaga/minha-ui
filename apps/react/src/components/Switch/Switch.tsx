import type { SwitchProps } from './switch.types';
import { useSwitch } from './useSwitch';

export function Switch(props: SwitchProps) {
  const { containerProps, trackProps, labelProps, hasLabel } = useSwitch(props);

  return (
    <label {...containerProps}>
      <input {...trackProps} />
      {hasLabel && <span {...labelProps} />}
    </label>
  );
}
