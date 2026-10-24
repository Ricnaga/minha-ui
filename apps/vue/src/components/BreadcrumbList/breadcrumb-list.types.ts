import type { OlHTMLAttributes } from 'vue';

export interface UseBreadcrumbListProps {
  class?: string;
}

export type BreadcrumbListProps = UseBreadcrumbListProps &
  /* @vue-ignore */ Omit<OlHTMLAttributes, 'class'>;
