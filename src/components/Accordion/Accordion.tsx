import type { AccordionProps } from "./accordion.types";
import { AccordionContext, useAccordionProvider } from "./useAccordion";

export function Accordion(props: AccordionProps) {
  const { children, ...rest } = useAccordionProvider(props);
  return (
    <AccordionContext.Provider value={rest}>
      <div role="presentation">{children}</div>
    </AccordionContext.Provider>
  );
}
