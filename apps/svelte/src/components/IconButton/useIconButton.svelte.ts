import type { HTMLButtonAttributes } from 'svelte/elements';

import { useRipple } from '@/runes';
import { iconButton } from '@/theme';

import type { UseIconButtonProps } from './icon-button.types';

export function useIconButton(getProps: () => UseIconButtonProps) {
  const { handleRipple } = useRipple();

  function isLoading() {
    return getProps().isLoading ?? false;
  }

  function isDisabled() {
    return isLoading() || (getProps().disabled ?? false);
  }

  function handleClick(
    event: MouseEvent & { currentTarget: HTMLButtonElement },
  ) {
    handleRipple(event);
    getProps().onclick?.(event);
  }

  const iconButtonProps: HTMLButtonAttributes = {
    get type() {
      return getProps().type ?? 'button';
    },
    get disabled() {
      return isDisabled();
    },
    get class() {
      const { size, radius, variant, color, class: className } = getProps();
      return iconButton({
        size,
        radius,
        variant,
        color,
        isLoading: isLoading(),
        class: className,
      } as Parameters<typeof iconButton>[0]);
    },
    onclick: handleClick,
  };

  return {
    iconButtonProps,
    get isLoading() {
      return isLoading();
    },
  };
}
