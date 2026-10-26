import type { Snippet } from 'svelte';

export type RequiredChildren<T = unknown> = T & {
  children?: Snippet;
};

export type DataTestidProps<T = unknown> = T & {
  'data-testid'?: string;
};

export * from './api';
