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

  const hasIncludeValue = value?.includes(itemValue);

  const accordionProps: AccordionContentProps = {
    ...props,
    className: accordionContent(),
  };

  return { hasIncludeValue, accordionProps };
}
