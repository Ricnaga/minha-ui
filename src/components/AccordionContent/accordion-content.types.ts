import type { HTMLAttributes } from "react";

export interface UseAccordionContentProps
  extends HTMLAttributes<HTMLDivElement> {
  "data-state"?: "open" | "closed";
}

export type AccordionContentProps = UseAccordionContentProps;
