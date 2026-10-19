import { popoverContent, type PopoverContentVariants } from '@/theme';
import { usePopover } from '../Popover/usePopover';
import type { UsePopoverContentProps } from './popover-content.types';

interface PopoverContentProps extends UsePopoverContentProps {
  'data-state': 'open' | 'closed';
  'data-side': PopoverContentVariants['side'];
  inert: boolean;
}

export function usePopoverContent(props: UsePopoverContentProps) {
  const { isOpen, side, width, padding, shadow, radius, animation } =
    usePopover();

  const popoverContentProps: PopoverContentProps = {
    ...props,
    'data-state': isOpen ? 'open' : 'closed',
    'data-side': side,
    'aria-hidden': !isOpen,
    inert: !isOpen,
    className: popoverContent({
      animation,
      radius,
      shadow,
      side,
      padding,
      width,
    }),
  };

  return { popoverContentProps };
}
