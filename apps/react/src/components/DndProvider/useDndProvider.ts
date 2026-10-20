import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { useContext } from '@/hooks';
import type {
  DndItemRect,
  DndProviderContextProps,
  UseDndProviderProps,
} from './dnd-provider.types';

export const DndProviderContext = createContext<DndProviderContextProps>(
  {} as DndProviderContextProps,
);

const DRAG_THRESHOLD = 5;

interface DragSessionState {
  isDragging: boolean;
  activeItemId: string | null;
  activeListId: string | null;
  dragPosition: { x: number; y: number } | null;
  dragOverItemId: string | null;
  dragOverListId: string | null;
}

const DRAG_IDLE: DragSessionState = {
  isDragging: false,
  activeItemId: null,
  activeListId: null,
  dragPosition: null,
  dragOverItemId: null,
  dragOverListId: null,
};

export function useDndProvider(props: UseDndProviderProps) {
  const { children, onReorder, onMoveItem } = props;

  const [dragState, setDragState] = useState<DragSessionState>(DRAG_IDLE);

  const itemRectsRef = useRef<Map<string, DndItemRect>>(new Map());
  const listIdsRef = useRef<Set<string>>(new Set());
  const ghostElRef = useRef<HTMLElement | null>(null);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);
  const draggedItemIdRef = useRef<string | null>(null);
  const draggedListIdRef = useRef<string | null>(null);
  const isDraggingRef = useRef(false);

  // Refs para valores que mudam durante o drag (evita stale closure nos listeners)
  const dragOverItemIdRef = useRef<string | null>(null);
  const dragOverListIdRef = useRef<string | null>(null);

  // Refs para callbacks — estabiliza as referências e evita stale closures
  const onReorderRef = useRef(onReorder);
  const onMoveItemRef = useRef(onMoveItem);

  // Refs para os handlers de evento — permitem que o cleanupPointerEvents
  // remova os listeners corretos sem referência circular/TDZ
  const handlePointerUpRef = useRef<() => void>(() => {});
  const handlePointerMoveRef = useRef<(event: PointerEvent) => void>(() => {});

  // Sincroniza as refs de callback em effects (não durante render)
  useEffect(() => {
    onReorderRef.current = onReorder;
  }, [onReorder]);

  useEffect(() => {
    onMoveItemRef.current = onMoveItem;
  }, [onMoveItem]);

  const createGhost = useCallback((element: HTMLElement) => {
    const ghost = element.cloneNode(true) as HTMLElement;
    ghost.style.position = 'fixed';
    ghost.style.pointerEvents = 'none';
    ghost.style.zIndex = '9999';
    ghost.style.opacity = '0.8';
    ghost.style.width = `${element.offsetWidth}px`;
    ghost.style.transform = 'rotate(2deg) scale(1.02)';
    ghost.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
    ghost.style.borderRadius = 'inherit';
    ghost.style.transition = 'none';
    ghost.classList.add('dnd-ghost');
    document.body.appendChild(ghost);
    ghostElRef.current = ghost;
    return ghost;
  }, []);

  const removeGhost = useCallback(() => {
    if (ghostElRef.current) {
      ghostElRef.current.remove();
      ghostElRef.current = null;
    }
  }, []);

  const getDragOverItem = useCallback(
    (
      x: number,
      y: number,
    ): { itemId: string | null; listId: string | null } => {
      const itemIds = Array.from(itemRectsRef.current.keys());

      for (const itemId of itemIds) {
        const rect = itemRectsRef.current.get(itemId)!;
        const { left, top, right, bottom } = rect.rect;
        const centerX = (left + right) / 2;
        const centerY = (top + bottom) / 2;
        const thresholdX = (right - left) * 0.4;
        const thresholdY = (bottom - top) * 0.4;

        if (
          x >= centerX - thresholdX &&
          x <= centerX + thresholdX &&
          y >= centerY - thresholdY &&
          y <= centerY + thresholdY
        ) {
          return { itemId: rect.id, listId: rect.listId };
        }
      }

      return { itemId: null, listId: null };
    },
    [],
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const { clientX, clientY } = event;

      // Ainda não ultrapassou o threshold — verifica se deve iniciar o drag
      if (!isDraggingRef.current && dragStartRef.current) {
        const dx = clientX - dragStartRef.current.x;
        const dy = clientY - dragStartRef.current.y;

        if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
          isDraggingRef.current = true;
          const startId = draggedItemIdRef.current;
          const startListId = draggedListIdRef.current;

          if (startId) {
            setDragState((prev) => ({
              ...prev,
              isDragging: true,
              activeItemId: startId,
              activeListId: startListId,
              dragPosition: { x: clientX, y: clientY },
            }));
          }
        }
        return;
      }

      // Já está arrastando — move o ghost e detecta colisão
      if (isDraggingRef.current && ghostElRef.current) {
        const ghostCenterX =
          clientX - (ghostElRef.current.offsetWidth || 50) / 2;
        const ghostCenterY =
          clientY - (ghostElRef.current.offsetHeight || 20) / 2;

        ghostElRef.current.style.left = `${ghostCenterX}px`;
        ghostElRef.current.style.top = `${ghostCenterY}px`;

        const { itemId, listId } = getDragOverItem(clientX, clientY);
        dragOverItemIdRef.current = itemId;
        dragOverListIdRef.current = listId;

        setDragState((prev) => ({
          ...prev,
          dragPosition: { x: clientX, y: clientY },
          dragOverItemId: itemId,
          dragOverListId: listId,
        }));
      }
    },
    [getDragOverItem],
  );

  // cleanupPointerEvents usa refs para remover listeners sem criar
  // referência circular com handlePointerUp / handlePointerMove
  const cleanupPointerEvents = useCallback(() => {
    setDragState(DRAG_IDLE);
    isDraggingRef.current = false;
    draggedItemIdRef.current = null;
    draggedListIdRef.current = null;
    dragStartRef.current = null;
    dragOverItemIdRef.current = null;
    dragOverListIdRef.current = null;
    removeGhost();
    document.removeEventListener('pointermove', handlePointerMoveRef.current);
    document.removeEventListener('pointerup', handlePointerUpRef.current);
  }, [removeGhost]);

  const handlePointerUp = useCallback(() => {
    // Early return: não estava arrastando — precisa limpar listeners e ghost
    if (!isDraggingRef.current) {
      cleanupPointerEvents();
      return;
    }

    const itemId = draggedItemIdRef.current;
    const fromList = draggedListIdRef.current;

    if (!itemId || !fromList) {
      cleanupPointerEvents();
      return;
    }

    const overListId = dragOverListIdRef.current;
    const overItemId = dragOverItemIdRef.current;
    const rects = itemRectsRef.current;

    // Reorder na mesma lista
    if (onReorderRef.current && (!overListId || overListId === fromList)) {
      const allItems = Array.from(rects.values())
        .filter((r) => r.listId === fromList)
        .sort((a, b) => a.index - b.index);
      const currentIds = allItems.map((r) => r.id);
      const newOrder = currentIds.filter((id) => id !== itemId);

      if (overItemId && overItemId !== itemId) {
        const overIndex = newOrder.indexOf(overItemId);
        if (overIndex >= 0) newOrder.splice(overIndex, 0, itemId);
      } else {
        newOrder.push(itemId);
      }

      onReorderRef.current(fromList, newOrder);
      cleanupPointerEvents();
      return;
    }

    // Move entre listas
    if (onMoveItemRef.current && overListId && overListId !== fromList) {
      const overRects = Array.from(rects.values())
        .filter((r) => r.listId === overListId)
        .sort((a, b) => a.index - b.index);
      const toIndex = overItemId
        ? Math.max(
            overRects.findIndex((r) => r.id === overItemId),
            0,
          )
        : overRects.length;

      onMoveItemRef.current(itemId, fromList, overListId, toIndex);
      cleanupPointerEvents();
      return;
    }

    cleanupPointerEvents();
  }, [cleanupPointerEvents]);

  // Sincroniza as refs dos handlers — executado após o commit do React,
  // então não viola a regra react-hooks/refs
  useEffect(() => {
    handlePointerMoveRef.current = handlePointerMove;
    handlePointerUpRef.current = handlePointerUp;
  }, [handlePointerMove, handlePointerUp]);

  const handleDragStart = useCallback(
    (
      itemId: string,
      listId: string,
      element: HTMLElement,
      event: PointerEvent,
    ) => {
      dragStartRef.current = { x: event.clientX, y: event.clientY };
      draggedItemIdRef.current = itemId;
      draggedListIdRef.current = listId;

      setDragState((prev) => ({
        ...prev,
        activeItemId: itemId,
        activeListId: listId,
        dragPosition: { x: event.clientX, y: event.clientY },
      }));

      createGhost(element);

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    },
    [createGhost, handlePointerMove, handlePointerUp],
  );

  const registerItem = useCallback(
    (id: string, listId: string, element: HTMLElement, index: number) => {
      const rect = element.getBoundingClientRect();
      itemRectsRef.current.set(id, { id, listId, rect, index });
    },
    [],
  );

  const unregisterItem = useCallback((id: string) => {
    itemRectsRef.current.delete(id);
  }, []);

  const registerList = useCallback((listId: string) => {
    listIdsRef.current.add(listId);
  }, []);

  const unregisterList = useCallback((listId: string) => {
    listIdsRef.current.delete(listId);
  }, []);

  const updateItemRect = useCallback((id: string) => {
    const entry = itemRectsRef.current.get(id);
    if (entry?.rect) {
      const element = document.getElementById(`dnd-item-${id}`);
      if (element) {
        entry.rect = element.getBoundingClientRect();
      }
    }
  }, []);

  return {
    children,
    activeItemId: dragState.activeItemId,
    activeListId: dragState.activeListId,
    dragPosition: dragState.dragPosition,
    dragOverItemId: dragState.dragOverItemId,
    dragOverListId: dragState.dragOverListId,
    isDragging: dragState.isDragging,
    handleDragStart,
    registerItem,
    unregisterItem,
    registerList,
    unregisterList,
    updateItemRect,
  };
}

export function useDndContext() {
  return useContext({
    context: DndProviderContext,
    hookName: useDndContext.name,
    providerName: 'DndProvider',
  });
}
