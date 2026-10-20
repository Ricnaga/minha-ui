import { dnd } from '@/theme';
import type { DndProps, UseDndProps } from './dnd.types';

export function useDnd(props: UseDndProps) {
  const { orientation, children, ...rest } = props;

  const dndProps: DndProps = {
    ...rest,
    className: dnd({ orientation }),
  };

  return { dndProps, children };
}
