import type { StepperProviderProps } from "./stepper-provider.types";
import { StepperProviderContext, useStepperProvider } from "./useStepperProvider";

export function StepperProvider(props: StepperProviderProps) {
  const { children, ...rest } = useStepperProvider(props);

  return (
    <StepperProviderContext.Provider value={rest}>
      {children}
    </StepperProviderContext.Provider>
  );
}