import { accordion } from "../../theme";
import { useAccordion } from "../Accordion/useAccordion";
import { useAccordionItem } from "../AccordionItem/useAccordionItem";
import type {
  AccordionHeaderProps,
  UseAccordionHeaderProps,
} from "./accordion-header.types";

const { accordionHeader } = accordion({});

export function useAccordionHeader(props: UseAccordionHeaderProps) {
  const { value: itemValue } = useAccordionItem();
  const { value, handleToggle } = useAccordion();

  const isOpen = value?.includes(itemValue);

  const accordionHeaderProps: AccordionHeaderProps = {
    ...props,
    "aria-expanded": isOpen,
    onClick: () => handleToggle(itemValue),
    className: accordionHeader(),
  };

  return {
    accordionHeaderProps,
  };
}
