import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

import { useRipple } from '@/runes';
import { button, buttonLabel } from '@/theme';

import type { UseButtonProps } from './button.types';

export function useButton(getProps: () => UseButtonProps) {
  const { handleRipple } = useRipple();

  function isLoading() {
    return getProps().isLoading ?? false;
  }

  function isDisabled() {
    return isLoading() || (getProps().disabled ?? false);
  }

  function handleClick(event: MouseEvent) {
    if (isDisabled()) return;

    handleRipple(event);
    getProps().onclick?.(event);
  }

  const buttonProps: HTMLButtonAttributes = {
    get type() {
      return getProps().type ?? 'button';
    },
    get disabled() {
      return isDisabled();
    },
    get class() {
      return button({
        variant: getProps().variant,
        color: getProps().color,
        size: getProps().size,
        radius: getProps().radius,
        isLoading: isLoading(),
        class: getProps().class,
      });
    },
    onclick: handleClick,
  };

  const labelProps: HTMLAttributes<HTMLSpanElement> = {
    class: buttonLabel(),
  };

  return {
    buttonProps,
    labelProps,
    get isLoading() {
      return isLoading();
    },
  };
}
