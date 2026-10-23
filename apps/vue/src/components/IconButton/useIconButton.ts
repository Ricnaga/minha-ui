import { computed } from 'vue';

import { useRipple } from '@/composables';
import { iconButton } from '@/theme';

import type { IconButtonProps, UseIconButtonProps } from './icon-button.types';

export function useIconButton(props: UseIconButtonProps) {
  const { handleRipple } = useRipple();

  const isLoading = computed(() => props.isLoading ?? false);

  const handleClick = (event: MouseEvent) => {
    handleRipple(event);
    props.onClick?.(event);
  };

  const iconButtonProps = computed<IconButtonProps>(() => {
    const iconButtonClasses = iconButton({
      size: props.size,
      radius: props.radius,
      variant: props.variant,
      color: props.color,
      isLoading: isLoading.value,
      class: props.class,
    } as Parameters<typeof iconButton>[0]);

    return {
      disabled: isLoading.value || props.disabled,
      type: props.type ?? 'button',
      class: iconButtonClasses,
      onClick: handleClick,
    };
  });

  return { iconButtonProps, isLoading };
}
