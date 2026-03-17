import type { StepperItemVariants } from "@/theme";

export interface UseStepperItemProps extends StepperItemVariants {
  index: number;
  title: string;
  description?: string;
  isLast: boolean;
}

export type StepperItemProps = UseStepperItemProps;
