import type { ComputedRef } from 'vue';

import type { BreadcrumbSize, BreadcrumbVariants } from '@/theme';

export interface UseBreadcrumbProps extends BreadcrumbVariants {
  separator?: string;
  'aria-label'?: string;
}

export type BreadcrumbProps = UseBreadcrumbProps;

export type BreadcrumbContextProps = {
  readonly size: ComputedRef<BreadcrumbSize | undefined>;
  readonly separator: ComputedRef<string | undefined>;
};
