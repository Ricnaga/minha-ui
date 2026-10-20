import type { CheckboxProps, UseCheckboxProps } from './checkbox.types';
import { checkbox } from '@/theme';

export function useCheckbox(props: UseCheckboxProps) {
  const { disabled = false, indeterminate = false, ...rest } = props;

  const checkBoxProps: CheckboxProps = {
    ...rest,
    type: 'checkbox',
    className: checkbox({ disabled, indeterminate }),
  };

  return { checkBoxProps };
}
