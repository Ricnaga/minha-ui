import { createContext, useState } from "react";
import { useContext } from "../../hooks";
import type {
  AccordionContextProps,
  UseAccordionProviderProps,
} from "./accordion.types";

export const AccordionContext = createContext<AccordionContextProps>(
  {} as AccordionContextProps
);

export function useAccordionProvider(props: UseAccordionProviderProps) {
  const { children, type = "single", defaultValue = [], onValueChange } = props;

  const [accordionValue, setAccordionValue] = useState<string[]>(defaultValue);

  const isControlled = props.value !== undefined;
  const currentValue = isControlled ? props.value : accordionValue;

  const handleUpdateValue = (nextValue: string[]) => {
    if (!isControlled) setAccordionValue(nextValue);
    onValueChange?.(nextValue);
  };

  function handleToggle(item: string) {
    if (type === "single") {
      handleUpdateValue(currentValue?.[0] === item ? [] : [item]);
      return;
    }

    handleUpdateValue(
      currentValue?.includes(item)
        ? currentValue?.filter((i) => i !== item)
        : [...(currentValue ?? []), item]
    );
  }

  return { children, handleToggle, value: props.value, type };
}

export function useAccordion() {
  return useContext({
    context: AccordionContext,
    hookName: useAccordion.name,
    providerName: AccordionContext.name,
  });
}
