import type { ButtonHTMLAttributes } from "react";

export interface UseAccordionHeaderProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  "data-state"?: "open" | "closed";
}

export type AccordionHeaderProps = UseAccordionHeaderProps;
