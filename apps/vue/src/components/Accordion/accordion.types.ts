import type { AccordionVariants } from '@/theme';

type AccordionType = 'single' | 'multiple';

export interface UseAccordionProviderProps extends AccordionVariants {
  children?: any;
  type: AccordionType;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (item: string[]) => void;
}

export type AccordionProps = UseAccordionProviderProps;

export interface AccordionContextProps extends AccordionVariants {
  handleToggle: (item: string) => void;
  currentValue?: string[];
  type: AccordionType;
}

