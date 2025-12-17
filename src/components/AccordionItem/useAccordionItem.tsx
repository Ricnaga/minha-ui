import { createContext } from "react";
import { useContext } from "../../hooks";
import type {
  AccordionItemContextProps,
  UseAccordionItemProviderProps,
} from "./accordion-item.types";

export function useAccordionItemProvider(props: UseAccordionItemProviderProps) {
  const { children, value } = props;

  return { children, value };
}

export const AccordionItemContext = createContext<AccordionItemContextProps>(
  {} as AccordionItemContextProps
);

export function useAccordionItem() {
  return useContext({
    context: AccordionItemContext,
    hookName: useAccordionItem.name,
    providerName: AccordionItemContext.name,
  });
}
