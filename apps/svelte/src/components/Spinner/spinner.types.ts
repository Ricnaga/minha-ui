import type { SVGAttributes } from 'svelte/elements';

import type { SpinnerVariants } from '@/theme';

export interface UseSpinnerProps extends SpinnerVariants {
  class?: string;
}

export interface SpinnerProps
  extends
    Omit<SVGAttributes<SVGSVGElement>, 'class' | 'color'>,
    UseSpinnerProps {}
