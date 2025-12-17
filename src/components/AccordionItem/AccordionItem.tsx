import type { AccordionItemProps } from "./accordion-item.types";
import {
  AccordionItemContext,
  useAccordionItemProvider,
} from "./useAccordionItem";

export function AccordionItem(props: AccordionItemProps) {
  const { children, ...rest } = useAccordionItemProvider(props);
  return (
    <AccordionItemContext.Provider value={rest}>
      <div role="presentation">{children}</div>
    </AccordionItemContext.Provider>
  );
}
