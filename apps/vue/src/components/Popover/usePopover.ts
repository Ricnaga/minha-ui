import { inject, provide } from 'vue';

import type { PopoverContextProps, UsePopoverProviderProps } from './popover.types';

export const PopoverContextKey = Symbol('PopoverContext');

export function usePopoverProvider(props: UsePopoverProviderProps) {
  const side = props.side ?? 'bottom';
  const width = props.width ?? 'auto';
  const padding = props.padding ?? 'md';
  const shadow = props.shadow ?? 'md';
  const radius = props.radius ?? 'md';
  const animation = props.animation ?? 'slideFade';
  const isOpen = props.isOpen ?? false;

  const context: PopoverContextProps = {
    side,
    width,
    padding,
    shadow,
    radius,
    animation,
    isOpen,
    onPopoverChange: props.onPopoverChange,
  };

  provide(PopoverContextKey, context);

  return { children: props.children, ...context };
}

export function usePopover(): PopoverContextProps {
  const context = inject<PopoverContextProps>(PopoverContextKey);
  if (!context) {
    throw new Error('usePopover must be used within a PopoverProvider');
  }
  return context;
}
