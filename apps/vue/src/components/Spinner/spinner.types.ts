import type { SVGAttributes } from 'vue';

import type { SpinnerVariants } from '@/theme';

export interface UseSpinnerProps extends SpinnerVariants {
  class?: string;
}

/**
 * O `@vue-ignore` impede o compilador do SFC de converter os atributos nativos
 * em props de runtime: eles continuam tipados e caem em `$attrs` (fallthrough).
 */
export type SpinnerProps = UseSpinnerProps &
  /* @vue-ignore */ Omit<SVGAttributes, 'class' | 'color'>;
