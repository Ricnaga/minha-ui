import { useAccordionContent } from "./useAccordionContent";

export function AccordionContent({ children }: { children: React.ReactNode }) {
  const { accordionContentWrapperProps, accordionContentInnerProps } =
    useAccordionContent();

  return (
    <div {...accordionContentWrapperProps}>
      <div {...accordionContentInnerProps}>
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}
