import type { AccordionHeaderProps } from "./accordion-header.types";
import { useAccordionHeader } from "./useAccordionHeader";

export function AccordionHeader(props: AccordionHeaderProps) {
  const { accordionHeaderProps } = useAccordionHeader(props);

  return <button {...accordionHeaderProps} />;
}
