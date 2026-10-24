import { computed } from 'vue';

import { useSelectContext } from '../../../SelectProvider/useSelectProvider';

export function useSelectInput() {
  const { selectedOptions } = useSelectContext();

  const inputProps = computed(() => ({
    readOnly: true,
    value: Array.from((selectedOptions as Map<string, any>).values()).map((v: any) => v.value).join(',') ?? '',
  }));

  return { inputProps };
}
