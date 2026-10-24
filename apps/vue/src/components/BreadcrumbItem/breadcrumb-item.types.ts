import type { LiHTMLAttributes } from 'vue';

export interface UseBreadcrumbItemProps {
  class?: string;
}

export type BreadcrumbItemProps = UseBreadcrumbItemProps &
  /* @vue-ignore */ Omit<LiHTMLAttributes, 'class'>;
