import type { Snippet } from 'svelte';

export type UseAccordionHeaderProps = {
  class?: string;
  disabled?: boolean;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
};

export type AccordionHeaderProps = UseAccordionHeaderProps & {
  children?: Snippet;
};
