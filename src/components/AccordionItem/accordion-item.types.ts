import type { RequiredChildren } from "@/types";
import type { useAccordionItemProvider } from "./useAccordionItem";

export type UseAccordionItemProviderProps = RequiredChildren<{ value: string }>;

export type AccordionItemProps = UseAccordionItemProviderProps;

export type AccordionItemContextProps = Omit<
  ReturnType<typeof useAccordionItemProvider>,
  "children"
>;
