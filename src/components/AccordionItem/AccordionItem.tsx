import { accordion } from "../../theme";
import type { AccordionItemProps } from "./accordion-item.types";
import {
  AccordionItemContext,
  useAccordionItemProvider,
} from "./useAccordionItem";

const { accordionItem } = accordion();

export function AccordionItem(props: AccordionItemProps) {
  const { children, ...rest } = useAccordionItemProvider(props);
  return (
    <AccordionItemContext.Provider value={rest}>
      <div role="presentation" className={accordionItem()}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}
