import { computed, inject, provide, useId } from 'vue';

import type { ModalContextProps, UseModalProviderProps } from './modal.types';

export const ModalContextKey = Symbol('ModalContext');

export function useModalProvider(props: UseModalProviderProps) {
  const reactId = useId();
  const titleId = computed(() => props.titleId ?? reactId);
  const ariaLabel = computed(() => props.ariaLabel ?? 'Modal');
  const padding = computed(() => props.padding ?? 'md');
  const radius = computed(() => props.radius ?? 'md');
  const shadow = computed(() => props.shadow ?? 'md');

  const context: ModalContextProps = {
    isOpen: props.isOpen,
    onClose: props.onClose,
    titleId: titleId.value,
    ariaLabel: ariaLabel.value,
  };

  provide(ModalContextKey, context);

  return {
    children: props.children,
    isOpen: props.isOpen,
    onClose: props.onClose,
    padding: padding.value,
    radius: radius.value,
    shadow: shadow.value,
  };
}

export function useModal(): ModalContextProps {
  const context = inject<ModalContextProps>(ModalContextKey);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
