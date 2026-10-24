import { computed } from 'vue';

import { popoverContent } from '@/theme';

import { usePopover } from '../Popover/usePopover';
import type { UsePopoverContentProps } from './popover-content.types';

export function usePopoverContent(props: UsePopoverContentProps) {
  const { isOpen, side, width, padding, shadow, radius, animation } = usePopover();

  const popoverContentProps = computed(() => ({
    'data-state': isOpen ? 'open' : 'closed',
    'data-side': side,
    'aria-hidden': !isOpen,
    inert: !isOpen,
    class: popoverContent({
      animation,
      radius,
      shadow,
      side,
      padding,
      width,
      class: props.class,
    } as Parameters<typeof popoverContent>[0]),
  }));

  return { popoverContentProps };
}
