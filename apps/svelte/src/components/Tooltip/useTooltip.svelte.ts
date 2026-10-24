import { tooltip } from '@/theme';
import { useDisclosure } from '@/runes';

import type { UseTooltipProps } from './tooltip.types';

export function useTooltip(getProps: () => UseTooltipProps) {
  const { handleClose, handleOpen, isOpen } = useDisclosure();

  return {
    get wrapperProps() {
      return {
        class: 'relative inline-block',
        onmouseenter: handleOpen,
        onmouseleave: handleClose,
        onfocus: handleOpen,
        onblur: handleClose,
      };
    },
    get tooltipProps() {
      const props = getProps() as unknown as Record<string, unknown>;
      const color = (props.color as 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'black' | 'white') ?? 'black';
      const position = (props.position as 'top' | 'bottom' | 'left' | 'right') ?? 'top';
      const open = isOpen as unknown as boolean;
      return {
        role: 'tooltip',
        'aria-hidden': !open,
        inert: !open,
        class: tooltip({ color, position, class: props.class } as Parameters<typeof tooltip>[0]),
      };
    },
  };
}
