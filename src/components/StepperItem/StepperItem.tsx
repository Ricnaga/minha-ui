import type { StepperItemProps } from "./stepper-item.types";
import { useStepperItem } from "./useStepperItem";

export function StepperItem(props: StepperItemProps) {
  const {
    stepperItemProps,
    indicatorContainerProps,
    indicatorContentProps,
    contentProps,
    titleProps,
    descriptionProps,
    connectorProps,
    isLast,
  } = useStepperItem(props);

  return (
    <div {...stepperItemProps}>
      <div {...indicatorContainerProps}>
        <span {...indicatorContentProps} />
      </div>
      <div {...contentProps}>
        <span {...titleProps} />
        {props.description && <span {...descriptionProps} />}
      </div>
      {!isLast && <div {...connectorProps} />}
    </div>
  );
}
