import type { Snippet } from 'svelte';
import type { HTMLLiAttributes } from 'svelte/elements';

export interface UseBreadcrumbItemProps {
  class?: string;
}

export type BreadcrumbItemProps = UseBreadcrumbItemProps &
  Omit<HTMLLiAttributes, 'class'> & {
    children?: Snippet;
  };
