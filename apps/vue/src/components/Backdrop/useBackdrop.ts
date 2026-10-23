import { computed } from 'vue';

import { backdrop } from '@/theme';

import type { BackdropProps, UseBackdropProps } from './backdrop.types';

const { base, wrapper } = backdrop();

export function useBackdrop(props: UseBackdropProps) {
  const isOpen = computed(() => props.isOpen ?? false);
  const blur = computed(() => props.blur ?? 'md');
  const zIndex = computed(() => props.zIndex ?? 1000);

  const backdropProps = computed<BackdropProps>(() => ({
    role: 'presentation',
    'aria-hidden': !isOpen.value,
    inert: !isOpen.value,
    class: base({ isOpen: isOpen.value, blur: blur.value, class: props.class }),
    style: { zIndex: zIndex.value },
  }));

  const wrapperProps = computed(() => ({
    onClick: (e: MouseEvent) => e.stopPropagation(),
    class: wrapper({ isLoading: props.isLoading }),
  }));

  return { backdropProps, wrapperProps };
}
