import { accordion } from "@/theme";
import { useAccordion } from "../Accordion/useAccordion";
import { useAccordionItem } from "../AccordionItem/useAccordionItem";
import type {
  AccordionContentProps,
  UseAccordionContentProps,
} from "./accordion-content.types";

const { accordionContent } = accordion();

export function useAccordionContent(props: UseAccordionContentProps) {
  const { value: itemValue } = useAccordionItem();
  const { value } = useAccordion();

  const isOpen = value?.includes(itemValue);

  const accordionProps: AccordionContentProps = {
    ...props,
    "data-state": isOpen ? "open" : "closed",
    hidden: !isOpen, // acessibilidade
    className: accordionContent(),
  };

  return { accordionProps };
}
