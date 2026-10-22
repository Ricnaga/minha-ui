import type { ComputedRef } from 'vue';

import type { AccordionSize, AccordionVariant } from '@/theme';

export type AccordionType = 'single' | 'multiple';

export type UseAccordionProviderProps = {
  type?: AccordionType;
  value?: string[];
  defaultValue?: string[];
  variant?: AccordionVariant;
  size?: AccordionSize;
};

export type AccordionProps = UseAccordionProviderProps;

export type AccordionEmits = {
  'update:value': [value: string[]];
};

export type AccordionContextProps = {
  currentValue: ComputedRef<string[]>;
  handleToggle: (item: string) => void;
  type: ComputedRef<AccordionType>;
  variant: ComputedRef<AccordionVariant | undefined>;
  size: ComputedRef<AccordionSize | undefined>;
};
