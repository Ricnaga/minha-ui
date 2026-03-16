import { accordion } from "../../theme";
import { useAccordion } from "../Accordion/useAccordion";
import type { AccordionItemProps } from "./accordion-item.types";
import {
  AccordionItemContext,
  useAccordionItemProvider,
} from "./useAccordionItem";

const { accordionItem } = accordion();

export function AccordionItem(props: AccordionItemProps) {
  const { children, value: itemValue } = useAccordionItemProvider(props);
  const { currentValue, variant, size } = useAccordion();

  const isOpen = currentValue?.includes(itemValue);

  return (
    <AccordionItemContext.Provider value={{ value: itemValue, isOpen, variant, size }}>
      <div role="presentation" className={accordionItem({ variant, size })}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}
