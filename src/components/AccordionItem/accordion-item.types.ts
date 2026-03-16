import type { RequiredChildren } from "@/types";
import type { AccordionVariants } from "@/theme";
import type { useAccordionItemProvider } from "./useAccordionItem";

export type UseAccordionItemProviderProps = RequiredChildren<{ value: string }>;

export type AccordionItemProps = UseAccordionItemProviderProps;

export type AccordionItemContextProps = Omit<
  ReturnType<typeof useAccordionItemProvider>,
  "children"
> & { isOpen?: boolean; variant?: AccordionVariants["variant"]; size?: AccordionVariants["size"] };
