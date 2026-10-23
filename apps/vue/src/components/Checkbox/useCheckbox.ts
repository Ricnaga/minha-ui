import { computed } from 'vue';

import { checkbox } from '@/theme';

import type { UseCheckboxProps } from './checkbox.types';

export function useCheckbox(props: UseCheckboxProps) {
  const checkBoxProps = computed(() => {
    return {
      type: 'checkbox',
      class: checkbox({
        disabled: Boolean(props.disabled),
        indeterminate: Boolean(props.indeterminate),
        class: props.class,
      }),
    } as const;
  });

  return { checkBoxProps };
}
