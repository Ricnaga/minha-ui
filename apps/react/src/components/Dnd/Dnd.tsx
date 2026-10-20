import type { DndProps } from './dnd.types';
import { useDnd } from './useDnd';

export function Dnd(props: DndProps) {
  const { dndProps, children } = useDnd(props);

  return (
    <section {...dndProps} aria-label="Drag and drop container">
      {children}
    </section>
  );
}
