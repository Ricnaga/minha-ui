import { useCallback, useEffect, useRef, type PointerEvent } from "react";
import { dndItem } from "@/theme";
import { useDndContext } from "../DndProvider";
import type { DndItemProps, UseDndItemProps } from "./dnd-item.types";

export function useDndItem(props: UseDndItemProps) {
  const { id, listId = "default", index = 0, children, ...rest } = props;
  const {
    activeItemId,
    dragOverItemId,
    isDragging,
    handleDragStart,
    registerItem,
    unregisterItem,
    updateItemRect,
  } = useDndContext();

  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (el) {
      registerItem(id, listId, el, index);
    }
    return () => unregisterItem(id);
  }, [id, listId, index, registerItem, unregisterItem]);

  useEffect(() => {
    if (itemRef.current) {
      updateItemRect(id);
    }
  }, [children, id, updateItemRect]);

  const itemIsDragging = isDragging && activeItemId === id;
  const itemIsDragOver = dragOverItemId === id && activeItemId !== id;

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLLIElement>) => {
      const el = itemRef.current;
      if (!el) return;

      el.setPointerCapture(event.pointerId);
      handleDragStart(id, listId, el, event.nativeEvent);
    },
    [id, listId, handleDragStart],
  );

  const itemProps: DndItemProps = {
    id: `dnd-item-${id}`,
    ...rest,
    className: dndItem({ isDragging: itemIsDragging, isDragOver: itemIsDragOver }),
  };

  return {
    itemProps,
    itemRef,
    handlePointerDown,
    itemIsDragging,
    itemIsDragOver,
    children,
  };
}
