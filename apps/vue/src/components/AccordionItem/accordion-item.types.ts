import type { ComputedRef } from 'vue';

import type { AccordionSize, AccordionVariant } from '@/theme';

export type UseAccordionItemProviderProps = {
  value: string;
};

export type AccordionItemProps = UseAccordionItemProviderProps;

export type AccordionItemContextProps = {
  value: string;
  isOpen: ComputedRef<boolean>;
  variant: ComputedRef<AccordionVariant | undefined>;
  size: ComputedRef<AccordionSize | undefined>;
};
