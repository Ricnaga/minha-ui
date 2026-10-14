import type { HTMLAttributes } from 'react';
import type { ChipVariants } from '@/theme';

export interface UseChipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>, ChipVariants {
  onRemove?: () => void;
}

export type ChipProps = UseChipProps;
