import type { HTMLAttributes } from 'vue';

import type { TransitionContainerVariants, TransitionEffect } from '@/theme';

export interface UseTransitionContainerProps extends TransitionContainerVariants {
  isOpen: boolean;
  animation?: TransitionEffect | TransitionEffect[];
  class?: string;
  /**
   * Em Vue o nome `aria-hidden` é inválido como prop (kebab-case vira
   * `ariaHidden`), por isso a prop usa camelCase. O atributo renderizado
   * continua sendo `aria-hidden`.
   */
  ariaHidden?: boolean | 'true' | 'false';
  inert?: boolean;
}

export type TransitionContainerProps = UseTransitionContainerProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'aria-hidden' | 'inert'>;
