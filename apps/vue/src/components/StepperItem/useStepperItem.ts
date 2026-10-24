import { computed } from 'vue';

import { stepperItem } from '@/theme';

import { useStepperContext } from '../StepperProvider/useStepperProvider';
import type { UseStepperItemProps } from './stepper-item.types';

export function useStepperItem(props: UseStepperItemProps) {
  const { index, description: descriptionText, title, isLast, ...rest } = props;
  const { currentStep, handleStepChange, isClickable, orientation } = useStepperContext();

  const state = computed(() => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'pending';
  });

  function onStepClick() {
    if (isClickable) {
      handleStepChange(index);
    }
  }

  const slots = stepperItem();

  return {
    baseStyles: computed(() => slots.base({ ...(rest as any), orientation, isClickable, isLast })),
    indicatorContainerStyles: computed(() => slots.indicatorContainer({ state: state.value, orientation })),
    indicatorContentStyles: computed(() => slots.indicatorContent({ state: state.value, orientation })),
    contentStyles: computed(() => slots.content()),
    titleStyles: computed(() => slots.title({ state: state.value })),
    descriptionStyles: computed(() => slots.description()),
    connectorStyles: computed(() => slots.connector({ state: state.value, orientation, isLast })),
    onStepClick,
    isLast,
    state,
    title,
    descriptionText,
  };
}
