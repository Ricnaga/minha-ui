import type { Snippet } from 'svelte';
import type { HTMLOlAttributes } from 'svelte/elements';

export interface UseBreadcrumbListProps {
  class?: string;
}

export type BreadcrumbListProps = UseBreadcrumbListProps &
  Omit<HTMLOlAttributes, 'class'> & {
    children?: Snippet;
  };
