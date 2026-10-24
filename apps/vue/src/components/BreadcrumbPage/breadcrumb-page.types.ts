import type { HTMLAttributes } from 'vue';

export interface UseBreadcrumbPageProps {
  class?: string;
}

export type BreadcrumbPageProps = UseBreadcrumbPageProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class'>;
