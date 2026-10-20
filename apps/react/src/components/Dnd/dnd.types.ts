import type { HTMLAttributes, ReactNode } from 'react';
import type { DndVariants } from '@/theme';

export interface UseDndProps extends DndVariants, HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export type DndProps = UseDndProps;
