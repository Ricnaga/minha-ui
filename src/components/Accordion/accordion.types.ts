import type { RequiredChildren } from "@/types";
import type { AccordionVariants } from "@/theme";
import type { useAccordionProvider } from "./useAccordion";

type AccordionType = "single" | "multiple";

export type UseAccordionProviderProps = AccordionVariants &
  RequiredChildren<{
    type: AccordionType;
    value?: string[];
    defaultValue?: string[];
    onValueChange: (item: string[]) => void;
  }>;

export type AccordionProps = UseAccordionProviderProps;

export type AccordionContextProps = Omit<
  ReturnType<typeof useAccordionProvider>,
  "children"
>;
