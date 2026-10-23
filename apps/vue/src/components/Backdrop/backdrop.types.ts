import type { HTMLAttributes } from 'vue';

import type { BackdropVariants } from '@/theme';

export interface UseBackdropProps extends BackdropVariants {
  class?: string;
  zIndex?: number;
  onClose?: () => void;
}

export type BackdropProps = UseBackdropProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class'>;
