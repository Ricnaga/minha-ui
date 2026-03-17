import type { StepperVariants } from "@/theme";

export interface StepperStep {
  id: string;
  title: string;
  description?: string;
}

export interface UseStepperProps extends Pick<StepperVariants, "orientation"> {
  steps?: StepperStep[];
  activeStep?: number;
  onStepChange?: (step: number) => void;
  isClickable?: boolean;
}

export type StepperProps = UseStepperProps;