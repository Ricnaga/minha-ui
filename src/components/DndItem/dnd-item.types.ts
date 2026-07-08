import type { ReactNode } from "react";
import type { DndItemVariants } from "@/theme";

export interface UseDndItemProps extends DndItemVariants {
  id: string;
  listId?: string;
  index?: number;
  children?: ReactNode;
}

export type DndItemProps = UseDndItemProps;
