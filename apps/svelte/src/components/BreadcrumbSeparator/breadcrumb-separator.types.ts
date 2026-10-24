import type { Snippet } from 'svelte';

export interface UseBreadcrumbSeparatorProps {
  class?: string;
  children?: Snippet;
}

export type BreadcrumbSeparatorProps = UseBreadcrumbSeparatorProps & {
  children?: Snippet;
};
