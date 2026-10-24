import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface UseBreadcrumbLinkProps {
  class?: string;
}

export type BreadcrumbLinkProps = UseBreadcrumbLinkProps &
  Omit<HTMLAnchorAttributes, 'class'> & {
    children?: Snippet;
  };
