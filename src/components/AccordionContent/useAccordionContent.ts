import { accordion } from "@/theme";
import { useAccordionItem } from "../AccordionItem/useAccordionItem";

export function useAccordionContent() {
  const { accordionContentWrapper, accordionContentInner } = accordion();
  const { isOpen, variant } = useAccordionItem();

  return {
    accordionContentWrapperProps: {
      "data-state": isOpen ? "open" : "closed",
      className: accordionContentWrapper({ variant }),
      style: {
        gridTemplateRows: isOpen ? "1fr" : "0fr",
      },
    },
    accordionContentInnerProps: {
      className: accordionContentInner({ variant }),
    },
  };
}
