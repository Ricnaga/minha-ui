import type { DndListProps } from './dnd-list.types';
import { useDndList } from './useDndList';

export function DndList(props: DndListProps) {
  const { listProps, listRef, headingId, heading, children } =
    useDndList(props);

  return (
    <section ref={listRef} {...listProps}>
      {heading && (
        <h3
          id={headingId}
          className="mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wide"
        >
          {heading}
        </h3>
      )}
      <ul className="flex flex-col gap-2">{children}</ul>
    </section>
  );
}
