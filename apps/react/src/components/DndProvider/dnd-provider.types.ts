import type { ReactNode } from 'react';
import type { useDndProvider } from './useDndProvider';
import type { RequiredChildren } from '@/types';

export interface DndItemRect {
  id: string;
  listId: string;
  rect: DOMRect;
  index: number;
}

export interface DragState {
  activeItemId: string | null;
  activeListId: string | null;
  dragPosition: { x: number; y: number } | null;
  dragOverItemId: string | null;
  dragOverListId: string | null;
  isDragging: boolean;
  ghostChildren: ReactNode | null;
}

export type UseDndProviderProps = RequiredChildren<{
  onReorder?: (listId: string, items: string[]) => void;
  onMoveItem?: (
    itemId: string,
    fromList: string,
    toList: string,
    toIndex: number,
  ) => void;
}>;

export type DndProviderProps = UseDndProviderProps;

export type DndProviderContextProps = Omit<
  ReturnType<typeof useDndProvider>,
  'children'
>;
