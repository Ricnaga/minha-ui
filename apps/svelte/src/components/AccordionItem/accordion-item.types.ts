import type { Snippet } from 'svelte';

import type {
  AccordionSize,
  AccordionVariant,
} from '../Accordion/accordion.types';

export type UseAccordionItemProviderProps = {
  value: string;
};

export type AccordionItemProps = UseAccordionItemProviderProps & {
  children?: Snippet;
};

export type AccordionItemContextProps = {
  readonly value: string;
  readonly isOpen: boolean;
  readonly variant?: AccordionVariant;
  readonly size?: AccordionSize;
};
