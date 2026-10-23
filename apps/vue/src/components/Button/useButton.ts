import { computed, type ButtonHTMLAttributes, type HTMLAttributes } from 'vue';

import { useRipple } from '@/composables';
import { button, buttonLabel } from '@/theme';

import type { UseButtonProps } from './button.types';

export function useButton(props: UseButtonProps) {
  const { handleRipple } = useRipple();

  function handleClick(event: MouseEvent) {
    handleRipple(event);
  }

  const isLoading = computed(() => props.isLoading ?? false);

  const buttonProps = computed<ButtonHTMLAttributes>(() => ({
    type: props.type ?? 'button',
    disabled: isLoading.value || props.disabled,
    class: button({
      variant: props.variant,
      color: props.color,
      size: props.size,
      radius: props.radius,
      isLoading: isLoading.value,
      class: props.class,
    }),
    onClick: handleClick,
  }));

  const labelProps: HTMLAttributes = {
    class: buttonLabel(),
  };

  return { buttonProps, isLoading, labelProps };
}
