import { stepper } from '@/theme';
import { useStepperContext } from '../StepperProvider';
import { StepperItem } from '../StepperItem';

export function Stepper() {
  const { steps, orientation } = useStepperContext();
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={stepper({ orientation })}
      role="group"
      aria-label="Etapas"
      // O container horizontal rola em telas pequenas; torna-o focável por
      // teclado para atender a regra de acessibilidade de regiões roláveis.
      tabIndex={isHorizontal ? 0 : undefined}
    >
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
