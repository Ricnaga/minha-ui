import type { HTMLAttributes } from 'vue';

import type { ScrollAreaVariants } from '@/theme';

export interface UseScrollAreaProps extends ScrollAreaVariants {
  class?: string;
  role?: HTMLAttributes['role'];
  tabindex?: number | string;
}

/**
 * `role` e `tabindex` têm default no composable, por isso saem do `Omit` da
 * base nativa (além do `class`, que é declarado acima).
 */
export type ScrollAreaProps = UseScrollAreaProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'role' | 'tabindex'>;
