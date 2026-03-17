import { stepper } from "@/theme";
import { useStepperContext } from "../StepperProvider";
import { StepperItem } from "../StepperItem";

export function Stepper() {
  const { steps, orientation } = useStepperContext();

  return (
    <div className={stepper({ orientation })}>
      {steps.map((step, index) => (
        <StepperItem
          key={step.id}
          index={index}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}
