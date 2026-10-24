import type { ButtonHTMLAttributes } from 'vue';

export interface UseTabsTriggerProps extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'value'> {
  isLoading?: boolean;
  value: string;
}

export type TabsTriggerProps = UseTabsTriggerProps;
