import { computed, inject, provide, useId } from 'vue';

import type { DrawerContextProps, UseDrawerProviderProps } from './drawer.types';

export const DrawerContextKey = Symbol('DrawerContext');

export function useDrawerProvider(props: UseDrawerProviderProps) {
  const reactId = useId();
  const isOpen = computed(() => props.isOpen ?? false);
  const side = computed(() => props.side ?? 'right');
  const titleId = computed(() => props.titleId ?? reactId);
  const ariaLabel = computed(() => props.ariaLabel ?? 'Drawer');

  const context: DrawerContextProps = {
    isOpen: isOpen.value,
    side: side.value,
    onClose: props.onClose,
    titleId: titleId.value,
    ariaLabel: ariaLabel.value,
  };

  provide(DrawerContextKey, context);

  return { children: props.children, ...context };
}

export function useDrawer(): DrawerContextProps {
  const context = inject<DrawerContextProps>(DrawerContextKey);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
}
