import type { StepperProps, UseStepperProps } from "./stepper.types";

export function useStepper(props: UseStepperProps) {
  const { orientation = "horizontal", isClickable = true, ...rest } = props;

  const stepperProps: StepperProps = {
    orientation,
    isClickable,
    ...rest,
  };

  return { stepperProps };
}