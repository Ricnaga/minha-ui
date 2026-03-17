import { stepperItem } from "@/theme";
import { useStepperContext } from "../StepperProvider";
import type { UseStepperItemProps } from "./stepper-item.types";

const {
  base,
  indicatorContainer,
  indicatorContent,
  content,
  title: titleSlot,
  description: descriptionSlot,
  connector: connectorSlot,
} = stepperItem();

export function useStepperItem(props: UseStepperItemProps) {
  const { index, description: descriptionText, title, isLast, ...rest } = props;
  const { currentStep, handleStepChange, isClickable, orientation } =
    useStepperContext();

  const getState = () => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "active";
    return "pending";
  };

  const state = getState();

  const onStepClick = () => {
    if (isClickable) {
      handleStepChange(index);
    }
  };

  const baseStyles = base({ ...rest, orientation, isClickable, isLast });
  const indicatorContainerStyles = indicatorContainer({ state, orientation });
  const indicatorContentStyles = indicatorContent({ state, orientation });
  const contentStyles = content();
  const titleStyles = titleSlot({ state });
  const descriptionStyles = descriptionSlot();
  const connectorStyles = connectorSlot({ state, orientation, isLast });

  const stepperItemProps = {
    className: baseStyles,
    onClick: onStepClick,
  };

  const indicatorContainerProps = {
    className: indicatorContainerStyles,
  };

  const indicatorContentProps = {
    className: indicatorContentStyles,
    children: state === "completed" ? "✓" : index + 1,
  };

  const contentProps = {
    className: contentStyles,
  };

  const titleProps = {
    className: titleStyles,
    children: title,
  };

  const descriptionProps = {
    className: descriptionStyles,
    children: descriptionText,
  };

  const connectorProps = {
    className: connectorStyles,
  };

  return {
    stepperItemProps,
    indicatorContainerProps,
    indicatorContentProps,
    contentProps,
    titleProps,
    descriptionProps,
    connectorProps,
    isLast,
    state,
  };
}
