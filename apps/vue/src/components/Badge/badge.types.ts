import type { HTMLAttributes } from 'vue';

import type { BadgeVariants } from '@/theme';

export interface UseBadgeProps extends BadgeVariants {
  class?: string;
  value?: string | number;
}

/**
 * Atributos nativos que o componente também declara (`class`, `color`) ficam
 * de fora do `Omit` para não gerar TS2320 na interseção.
 */
export type BadgeProps = UseBadgeProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'color'>;
