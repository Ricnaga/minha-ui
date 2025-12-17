// AccordionHeader.tsx

import { useAccordion } from "../Accordion/useAccordion";
import { useAccordionItem } from "../AccordionItem/useAccordionItem";

export const AccordionHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { value: itemValue } = useAccordionItem();
  const { value, handleToggle } = useAccordion();

  const isOpen = value?.includes(itemValue);

  return (
    <button aria-expanded={isOpen} onClick={() => handleToggle(itemValue)}>
      {children}
    </button>
  );
};
