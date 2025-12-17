// AccordionContent.tsx

import { useAccordion } from "../Accordion/useAccordion";
import { useAccordionItem } from "../AccordionItem/useAccordionItem";

export const AccordionContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { value: itemValue } = useAccordionItem();
  const { value } = useAccordion();

  if (!value?.includes(itemValue)) return null;

  return <div>{children}</div>;
};
