import type { StepperVariants } from '@/theme';
import type { StepperStep } from '../Stepper/stepper.types';

export type UseStepperProviderProps = StepperVariants & {
  children?: any;
  steps: StepperStep[];
  activeStep?: number;
  onStepChange?: (step: number) => void;
  isClickable?: boolean;
};

export type StepperProviderProps = UseStepperProviderProps;

export interface StepperProviderContextProps {
  orientation: 'horizontal' | 'vertical';
  steps: StepperStep[];
  currentStep: number;
  handleStepChange: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isClickable: boolean;
}
