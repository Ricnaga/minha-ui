// AccordionHeader.tsx

import { accordion } from "../../theme";
import { useAccordion } from "../Accordion/useAccordion";
import { useAccordionItem } from "../AccordionItem/useAccordionItem";

const { accordionHeader } = accordion({});

export const AccordionHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { value: itemValue } = useAccordionItem();
  const { value, handleToggle } = useAccordion();

  const isOpen = value?.includes(itemValue);

  return (
    <button
      aria-expanded={isOpen}
      onClick={() => handleToggle(itemValue)}
      className={accordionHeader()}
    >
      {children}
    </button>
  );
};
