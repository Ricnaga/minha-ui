import type { ButtonHTMLAttributes } from 'vue';

export interface UseAccordionHeaderProps extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'color'> {
  'data-state'?: 'open' | 'closed';
}

export type AccordionHeaderProps = UseAccordionHeaderProps;
