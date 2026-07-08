import type { DndItemProps } from "./dnd-item.types";
import { useDndItem } from "./useDndItem";

export function DndItem(props: DndItemProps) {
  const { itemProps, itemRef, handlePointerDown, itemIsDragging, children } =
    useDndItem(props);

  return (
    <li
      ref={itemRef}
      {...itemProps}
      onPointerDown={handlePointerDown}
      aria-grabbed={itemIsDragging}
      aria-roledescription="draggable item"
    >
      {children}
    </li>
  );
}
