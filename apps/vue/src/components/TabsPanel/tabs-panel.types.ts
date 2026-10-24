import type { HTMLAttributes } from 'vue';

export interface UseTabsPanelProps extends /* @vue-ignore */ Omit<HTMLAttributes, 'color'> {
  isLoading?: boolean;
  value: string;
}

export type TabsPanelProps = UseTabsPanelProps;
