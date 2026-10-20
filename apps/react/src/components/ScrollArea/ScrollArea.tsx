import type { ScrollAreaProps } from './scroll-area.types';
import { useScrollArea } from './useScrollArea';

export function ScrollArea(props: ScrollAreaProps) {
  const { scrollAreaProps } = useScrollArea(props);

  return <div {...scrollAreaProps} />;
}
