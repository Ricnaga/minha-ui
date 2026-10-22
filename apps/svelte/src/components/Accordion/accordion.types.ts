import type { Snippet } from 'svelte';

import type { AccordionSize, AccordionVariant } from '@/theme';

export type AccordionType = 'single' | 'multiple';

export type UseAccordionProviderProps = {
  type?: AccordionType;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  variant?: AccordionVariant;
  size?: AccordionSize;
};

export type AccordionProps = UseAccordionProviderProps & {
  children?: Snippet;
};

export type AccordionContextProps = {
  readonly currentValue: string[];
  readonly type: AccordionType;
  readonly variant?: AccordionVariant;
  readonly size?: AccordionSize;
  handleToggle: (item: string) => void;
};
