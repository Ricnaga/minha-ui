import type { AccordionContentProps } from "./accordion-content.types";
import { useAccordionContent } from "./useAccordionContent";

export function AccordionContent(props: AccordionContentProps) {
  const { accordionProps } = useAccordionContent(props);

  return <div {...accordionProps} />;
}
