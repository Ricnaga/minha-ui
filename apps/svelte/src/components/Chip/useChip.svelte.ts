import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

import { chip, chipClose } from '@/theme';

import type { UseChipProps } from './chip.types';

export function useChip(getProps: () => UseChipProps) {
  const chipProps: HTMLAttributes<HTMLSpanElement> = {
    get class() {
      const {
        color = 'primary',
        size = 'medium',
        rounded = 'full',
        class: className,
      } = getProps();

      return chip({ color, rounded, size, class: className });
    },
  };

  const removeButtonProps: HTMLButtonAttributes = {
    type: 'button',
    get class() {
      return chipClose();
    },
    // Diferente do React, o `children` no Svelte é um `Snippet` opaco, então
    // não é possível extrair o texto para compor o rótulo acessível.
    'aria-label': 'Remover',
    onclick: (event: MouseEvent) => {
      event.stopPropagation();
      getProps().onRemove?.();
    },
  };

  return {
    chipProps,
    removeButtonProps,
    get hasRemove() {
      return Boolean(getProps().onRemove);
    },
  };
}
