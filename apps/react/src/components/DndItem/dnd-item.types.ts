import type { LiHTMLAttributes, ReactNode } from 'react';
import type { DndItemVariants } from '@/theme';

export interface UseDndItemProps
  extends DndItemVariants, LiHTMLAttributes<HTMLLIElement> {
  id: string;
  listId?: string;
  index?: number;
  children?: ReactNode;
}

export type DndItemProps = UseDndItemProps;
