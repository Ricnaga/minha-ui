import type { HTMLInputAttributes } from 'svelte/elements';

import { checkbox } from '@/theme';

import type { UseCheckboxProps } from './checkbox.types';

export function useCheckbox(getProps: () => UseCheckboxProps) {
  const checkBoxProps: HTMLInputAttributes = {
    type: 'checkbox',
    get class() {
      const { disabled, indeterminate, class: className } = getProps();
      return checkbox({
        disabled: disabled ?? false,
        indeterminate: Boolean(indeterminate),
        class: className,
      });
    },
  };

  return { checkBoxProps };
}
