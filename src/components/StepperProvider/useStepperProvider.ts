import { useContext } from "@/hooks";
import { createContext, useState, useCallback } from "react";
import type {
  StepperProviderContextProps,
  UseStepperProviderProps,
} from "./stepper-provider.types";

export const StepperProviderContext =
  createContext<StepperProviderContextProps>({} as StepperProviderContextProps);

export function useStepperProvider(props: UseStepperProviderProps) {
  const {
    orientation = "horizontal",
    steps,
    activeStep = 0,
    onStepChange,
    isClickable = true,
    children,
  } = props;

  const [currentStep, setCurrentStep] = useState(activeStep);

  const handleStepChange = useCallback(
    (step: number) => {
      if (step >= 0 && step < steps.length) {
        setCurrentStep(step);
        onStepChange?.(step);
      }
    },
    [steps.length, onStepChange],
  );

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      handleStepChange(currentStep + 1);
    }
  }, [currentStep, steps.length, handleStepChange]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      handleStepChange(currentStep - 1);
    }
  }, [currentStep, handleStepChange]);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  return {
    orientation,
    steps,
    currentStep,
    handleStepChange,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    isClickable,
    children,
  };
}

export function useStepperContext() {
  return useContext<StepperProviderContextProps>({
    context: StepperProviderContext,
    hookName: useStepperProvider.name,
    providerName: StepperProviderContext.name,
  });
}
