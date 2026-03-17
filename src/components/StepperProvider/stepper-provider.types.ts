import type { StepperVariants } from "@/theme";
import type { useStepperProvider } from "./useStepperProvider";
import type { RequiredChildren } from "@/types";

export interface StepperStep {
  id: string;
  title: string;
  description?: string;
}

export type UseStepperProviderProps =  StepperVariants & RequiredChildren<{

  steps: StepperStep[];
  activeStep?: number;
  onStepChange?: (step: number) => void;
  isClickable?: boolean;
}>;

export type StepperProviderProps = UseStepperProviderProps;

export type StepperProviderContextProps = Omit<
  ReturnType<typeof useStepperProvider>,
  "children"
>;
