import type { AnchorHTMLAttributes } from 'vue';

export interface UseBreadcrumbLinkProps {
  class?: string;
}

export type BreadcrumbLinkProps = UseBreadcrumbLinkProps &
  /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'class'>;
