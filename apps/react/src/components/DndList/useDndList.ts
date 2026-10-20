import { useEffect, useRef } from 'react';
import { dndList } from '@/theme';
import { useDndContext } from '../DndProvider';
import type { DndListProps, UseDndListProps } from './dnd-list.types';

export function useDndList(props: UseDndListProps) {
  const { listId, heading, children, ...rest } = props;
  const { dragOverListId, registerList, unregisterList } = useDndContext();
  const listRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerList(listId);
    return () => unregisterList(listId);
  }, [listId, registerList, unregisterList]);

  const isDragOver = dragOverListId === listId;
  const headingId = `dnd-list-heading-${listId}`;

  const listProps: Omit<DndListProps, 'listId' | 'heading'> = {
    ...rest,
    className: dndList({ isDragOver }),
    'aria-label': heading || listId,
    'aria-labelledby': heading ? headingId : undefined,
  };

  return { listProps, listRef, headingId, heading, children };
}
