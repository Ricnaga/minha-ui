import type { AccordionContentProps } from "./accordion-content.types";
import { useAccordionContent } from "./useAccordionContent";

export function AccordionContent(props: AccordionContentProps) {
  const { hasIncludeValue, accordionProps } = useAccordionContent(props);

  if (!hasIncludeValue) return null;

  return <div {...accordionProps} />;
}
