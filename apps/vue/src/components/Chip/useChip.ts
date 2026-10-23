import { computed, type ButtonHTMLAttributes, type Slots } from 'vue';

import { chip, chipClose } from '@/theme';

import type { ChipProps, UseChipProps } from './chip.types';

function getSlotText(slots: Slots): string | undefined {
  const node = slots.default?.()[0];
  const text = node && 'children' in node ? node.children : undefined;

  return typeof text === 'string' ? text : undefined;
}

export function useChip(props: UseChipProps, slots: Slots) {
  const color = computed(() => props.color ?? 'primary');
  const size = computed(() => props.size ?? 'medium');
  const rounded = computed(() => props.rounded ?? 'full');

  const chipProps = computed<ChipProps>(() => ({
    class: chip({
      color: color.value,
      rounded: rounded.value,
      size: size.value,
      class: props.class,
    }),
  }));

  const hasRemove = computed(() => Boolean(props.onRemove));

  const removeButtonProps = computed<ButtonHTMLAttributes>(() => {
    const label = getSlotText(slots);

    return {
      type: 'button',
      class: chipClose(),
      'aria-label': label ? `Remover ${label}` : 'Remover',
      onClick: (event: MouseEvent) => {
        event.stopPropagation();
        props.onRemove?.();
      },
    };
  });

  return { chipProps, hasRemove, removeButtonProps };
}
