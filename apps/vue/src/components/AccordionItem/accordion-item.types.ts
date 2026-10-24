export interface UseAccordionItemProviderProps {
  children?: any;
  value: string;
}

export type AccordionItemProps = UseAccordionItemProviderProps;

export interface AccordionItemContextProps {
  value: string;
  isOpen?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'full';
}
