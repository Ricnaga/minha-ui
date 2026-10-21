import type { Snippet } from 'svelte';

import type { ButtonVariants } from '@/theme';

export type UseButtonProps = ButtonVariants;
export type ButtonProps = UseButtonProps & {
  children?: Snippet;
};
