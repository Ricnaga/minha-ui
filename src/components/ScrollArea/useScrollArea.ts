import { scrollArea } from '@/theme';
import type { ScrollAreaProps, UseScrollAreaProps } from './scroll-area.types';

export function useScrollArea(props: UseScrollAreaProps) {
  const {
    className,
    orientation = 'vertical',
    size = 'md',
    role = 'region',
    tabIndex = 0,
    ...rest
  } = props;

  const scrollAreaProps: ScrollAreaProps = {
    ...rest,
    role,
    tabIndex,
    className: scrollArea({ orientation, size, className }),
  };

  return { scrollAreaProps };
}
