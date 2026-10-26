import type { VNode } from 'vue';

export type RequiredChildren<T = unknown> = T & {
  children?: VNode;
};

export type DataTestidProps<T = unknown> = T & {
  'data-testid'?: string;
};

export * from './api';
