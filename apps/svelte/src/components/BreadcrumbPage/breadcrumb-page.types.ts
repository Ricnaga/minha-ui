import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface UseBreadcrumbPageProps {
  class?: string;
}

export type BreadcrumbPageProps = UseBreadcrumbPageProps &
  Omit<HTMLAttributes<HTMLElement>, 'class'> & {
    children?: Snippet;
  };
