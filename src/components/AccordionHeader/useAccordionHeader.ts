import { accordion } from "@/theme";
import { useAccordion } from "../Accordion/useAccordion";
import { useAccordionItem } from "../AccordionItem/useAccordionItem";
import type {
  AccordionHeaderProps,
  UseAccordionHeaderProps,
} from "./accordion-header.types";

export function useAccordionHeader(props: UseAccordionHeaderProps) {
  const { accordionHeader } = accordion();
  const { value: itemValue, isOpen, variant } = useAccordionItem();
  const { handleToggle } = useAccordion();

  const accordionHeaderProps: AccordionHeaderProps = {
    ...props,
    "aria-expanded": isOpen,
    onClick: () => handleToggle(itemValue),
    className: accordionHeader({ variant }),
  };

  return {
    accordionHeaderProps,
  };
}
