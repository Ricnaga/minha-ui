import type { HTMLInputAttributes } from 'svelte/elements';

import type { CheckboxVariants } from '@/theme';

export interface UseCheckboxProps
  extends
    Omit<HTMLInputAttributes, 'class' | 'type' | 'disabled' | 'indeterminate'>,
    CheckboxVariants {
  class?: string;
  disabled?: boolean;
  indeterminate?: boolean;
}

export type CheckboxProps = UseCheckboxProps;
