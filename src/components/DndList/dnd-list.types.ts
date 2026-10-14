import type { HTMLAttributes, ReactNode } from 'react';
import type { DndListVariants } from '@/theme';

export interface UseDndListProps
  extends DndListVariants, HTMLAttributes<HTMLElement> {
  listId: string;
  heading?: string;
  children?: ReactNode;
}

export type DndListProps = UseDndListProps;
