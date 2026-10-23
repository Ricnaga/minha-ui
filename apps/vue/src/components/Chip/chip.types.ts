import type { HTMLAttributes } from 'vue';

import type { ChipVariants } from '@/theme';

export interface UseChipProps extends ChipVariants {
  class?: string;
  onRemove?: () => void;
}

export type ChipProps = UseChipProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'color'>;
