// AccordionContent.tsx

import { accordion } from "../../theme";
import { useAccordion } from "../Accordion/useAccordion";
import { useAccordionItem } from "../AccordionItem/useAccordionItem";

const { accordionContent } = accordion();

export const AccordionContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { value: itemValue } = useAccordionItem();
  const { value } = useAccordion();

  if (!value?.includes(itemValue)) return null;

  return <div className={accordionContent()}>{children}</div>;
};
