import type { Snippet } from 'svelte';

import type { BreadcrumbVariants } from '@/theme';

export type BreadcrumbSize = NonNullable<BreadcrumbVariants['size']>;

export interface UseBreadcrumbProps extends BreadcrumbVariants {
  separator?: string;
  'aria-label'?: string;
}

export type BreadcrumbProps = UseBreadcrumbProps & {
  children?: Snippet;
};

export type BreadcrumbContextProps = {
  readonly size: BreadcrumbSize;
  readonly separator?: string;
};
