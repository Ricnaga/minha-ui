import type { HTMLAttributes } from 'react';
import type { ScrollAreaVariants } from '@/theme';

export interface UseScrollAreaProps
  extends HTMLAttributes<HTMLDivElement>, ScrollAreaVariants {}

export type ScrollAreaProps = UseScrollAreaProps;
