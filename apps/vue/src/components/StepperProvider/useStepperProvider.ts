import { inject, provide, ref } from 'vue';

import type { StepperProviderContextProps, UseStepperProviderProps } from './stepper-provider.types';

export const StepperProviderContextKey = Symbol('StepperProviderContext');

export function useStepperProvider(props: UseStepperProviderProps) {
  const {
    orientation = 'horizontal',
    steps,
    activeStep = 0,
    onStepChange,
    isClickable = true,
    children,
  } = props;

  const currentStep = ref<number>(activeStep ?? 0);

  function handleStepChange(step: number) {
    if (step >= 0 && step < steps.length) {
      currentStep.value = step;
      onStepChange?.(step);
    }
  }

  function nextStep() {
    if (currentStep.value < steps.length - 1) {
      handleStepChange(currentStep.value + 1);
    }
  }

  function prevStep() {
    if (currentStep.value > 0) {
      handleStepChange(currentStep.value - 1);
    }
  }

  const isFirstStep = currentStep.value === 0;
  const isLastStep = currentStep.value === steps.length - 1;

  const context: StepperProviderContextProps = {
    orientation,
    steps,
    currentStep: currentStep.value,
    handleStepChange,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    isClickable,
  };

  provide(StepperProviderContextKey, context);

  return { children, ...context };
}

export function useStepperContext(): StepperProviderContextProps {
  const context = inject<StepperProviderContextProps>(StepperProviderContextKey);
  if (!context) {
    throw new Error('useStepperContext must be used within a StepperProvider');
  }
  return context;
}
